#!/usr/bin/env node
/**
 * Builds `lib/i18n/translations/fr.json` — the French dictionary used by the
 * site-wide translation engine.
 *
 * It scrapes every user-facing string from the App Router pages/components,
 * machine-translates the ones that are not already handled by hand-written
 * overrides (`fr.overrides.json`) and writes the result back as JSON.
 *
 * Usage: npm run i18n:generate
 */
import { mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(SCRIPT_DIR, '..');
const SOURCE_DIRS = ['app', 'data'];
const OUTPUT_FILE = path.join(ROOT, 'lib/i18n/translations/fr.json');
const OVERRIDES_FILE = path.join(ROOT, 'lib/i18n/translations/fr.overrides.json');
const CACHE_FILE = path.join(SCRIPT_DIR, '.cache/fr.json');
const REVIEW_FILE = path.join(SCRIPT_DIR, '.cache/fr-candidates.txt');

const CONCURRENCY = 4;
const MAX_RETRIES = 5;
/** How many strings to send in a single request and how long the URL may get. */
const MAX_BATCH_ITEMS = 25;
const MAX_BATCH_LENGTH = 1500;
const DRY_RUN = process.argv.includes('--dry-run');

const ENTITIES = {
  '&amp;': '&',
  '&apos;': "'",
  '&#39;': "'",
  '&quot;': '"',
  '&nbsp;': ' ',
  '&lt;': '<',
  '&gt;': '>',
  '&mdash;': '—',
  '&ndash;': '–',
  '&hellip;': '…',
  '&rsquo;': '’',
  '&lsquo;': '‘',
  '&ldquo;': '“',
  '&rdquo;': '”',
};

function decodeEntities(value) {
  return value
    .replace(/&[a-zA-Z]+;|&#\d+;/g, (entity) => ENTITIES[entity] ?? entity)
    .replace(/\\(['"`])/g, '$1')
    .replace(/\\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function looksLikeClassList(value) {
  if (/[A-Z]/.test(value)) return false;
  // Sentence punctuation means it is prose, not a class list ("gap-1.5" is fine).
  if (/[A-Za-z][.!?](?:\s|$)/.test(value)) return false;

  const tokens = value.split(/\s+/);
  if (tokens.length < 2) return false;

  const utilities = tokens.filter((token) => TAILWIND_TOKEN.test(token)).length;
  return utilities >= Math.ceil(tokens.length / 2);
}

const TAILWIND_TOKEN =
  /^(?:[a-z0-9-]+:)*(?:!?-)?(?:flex|grid|block|inline|inline-block|inline-flex|hidden|absolute|relative|fixed|sticky|static|contents|container|isolate|order-\d+|col-|row-|gap-|space-|items-|justify-|self-|place-|p[trblxy]?-|m[trblxy]?-|w-|h-|min-|max-|size-|text-|font-|leading-|tracking-|bg-|border|border-|rounded|rounded-|shadow|shadow-|opacity-|transition|duration-|ease-|delay-|animate-|scale-|rotate-|translate-|skew-|origin-|z-|top-|bottom-|left-|right-|inset-|overflow-|object-|aspect-|cursor-|select-|pointer-events-|line-clamp-|backdrop-|from-|via-|to-|ring|ring-|divide-|fill-|stroke-|whitespace-|break-|list-|underline|uppercase|lowercase|capitalize|truncate|group|peer)/;

/** Strings that come from code/schema markup rather than visible copy. */
const SKIP_KEYS = new Set([
  'FAQPage',
  'BreadcrumbList',
  'WebSite',
  'Organization',
  'ImageObject',
  'SearchAction',
  'BlogPosting',
  'ListItem',
  'ItemList',
  'LocalBusiness',
  'Answer',
  'Escape',
  'use client',
  'use server',
  'use strict',
]);

/** Scroll-trigger keywords (GSAP) and CSS shorthands that are not prose. */
function looksLikeCodeValue(value) {
  const tokens = value.split(' ');

  if (
    tokens.length === 2 &&
    ['top', 'center', 'bottom', 'left', 'right'].includes(tokens[0]) &&
    ['top', 'center', 'bottom', 'left', 'right'].includes(tokens[1])
  ) {
    return true;
  }

  if (/[A-Z]/.test(value)) return false;
  return /\d(?:\.\d+)?\s*(?:s|ms|px|rem|em|vh|vw)\b/.test(value);
}

function isCandidate(rawValue) {
  const value = decodeEntities(rawValue);

  if (!value || value.length < 3 || value.length > 500) return false;
  if (!/[A-Za-z]/.test(value)) return false;
  if (/[{}<>$=\\]/.test(value)) return false;
  if (/[\u0000-\u001f]/.test(value)) return false;
  if (value.includes('${')) return false;
  if (SKIP_KEYS.has(value)) return false;
  if (value.startsWith('#')) return false;

  // GSAP ease names such as "power2.out"
  if (/^[a-z]+\d*\.(?:in|out|inOut)$/.test(value)) return false;

  // URLs, imports, file paths
  if (/^(https?:)?\/\//i.test(value)) return false;
  if (/^[./@~][\w./@-]*$/.test(value)) return false;
  if (/^[\w.+-]+@[\w.-]+\.[a-z]{2,}$/i.test(value)) return false;

  // Numbers, prices, colors, separators
  if (/^[$€£]?[\d\s.,%+–—-]+$/.test(value)) return false;
  if (/^#?[0-9a-f]{3,8}$/i.test(value)) return false;
  if (/^\d+([.,]\d+)?[a-zA-Z]$/.test(value)) return false;

  // SVG path data and other number-heavy strings
  const digits = (value.match(/\d/g) ?? []).length;
  const letters = (value.match(/[A-Za-z]/g) ?? []).length;
  if (digits > letters) return false;

  // Identifiers, tailwind classes, css
  if (looksLikeClassList(value)) return false;
  if (looksLikeCodeValue(value)) return false;
  if (/^_?[a-z][a-zA-Z0-9_]*$/.test(value)) return false;

  const tokens = value.split(' ');

  if (tokens.length === 1) {
    const token = tokens[0];
    if (/[a-z][A-Z]/.test(token)) return false; // camelCase / component names
    if (/[-_:()[\]/]/.test(token)) return false;
    if (token.length >= 8 && token === token.toUpperCase()) return false; // LOMEDIASTUDIO
    return true;
  }

  return true;
}

function extractStrings(source) {
  const values = new Set();

  // JSX text nodes: >text<
  const jsxText = />([^<>{}]+)</g;
  let match;
  while ((match = jsxText.exec(source)) !== null) {
    values.add(match[1]);
  }

  // String literals (single, double quotes and template literals without ${})
  const literals = /'((?:\\.|[^'\\\n])*)'|"((?:\\.|[^"\\\n])*)"|`((?:\\.|[^`\\])*)`/g;
  while ((match = literals.exec(source)) !== null) {
    values.add(match[1] ?? match[2] ?? match[3] ?? '');
  }

  return values;
}

async function walk(directory, files = []) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;

    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await walk(fullPath, files);
      continue;
    }

    if (/\.(tsx?|jsx?)$/.test(entry.name)) files.push(fullPath);
  }

  return files;
}

async function readJson(file) {
  try {
    return JSON.parse(await readFile(file, 'utf8'));
  } catch {
    return {};
  }
}

/** Flattens every shape the endpoint may return into a plain string. */
function flattenTranslation(item) {
  if (typeof item === 'string') return item;
  if (Array.isArray(item)) return flattenTranslation(item[0]);
  if (item && typeof item === 'object' && item.trans !== undefined) {
    return flattenTranslation(item.trans);
  }
  return '';
}

/**
 * The `/translate_a/t` endpoint accepts several `q` parameters and answers with
 * an array whose entries line up with the input, which is far quicker than one
 * request per string.
 */
async function requestTranslations(texts) {
  const url = new URL('https://translate.googleapis.com/translate_a/t');
  url.searchParams.set('client', 'gtx');
  url.searchParams.set('sl', 'en');
  url.searchParams.set('tl', 'fr');

  for (const text of texts) url.searchParams.append('q', text);

  const response = await fetch(url, {
    headers: { 'user-agent': 'Mozilla/5.0 (compatible; lo-mediahouse-i18n/1.0)' },
  });

  if (!response.ok) throw new Error(`HTTP ${response.status}`);

  const payload = await response.json();
  const items = Array.isArray(payload) ? payload : [payload];

  if (items.length !== texts.length) {
    throw new Error(`Expected ${texts.length} translations, received ${items.length}`);
  }

  return items.map((item) => flattenTranslation(item).trim());
}

async function translateBatch(texts) {
  let lastError;

  for (let attempt = 0; attempt < MAX_RETRIES; attempt += 1) {
    try {
      return await requestTranslations(texts);
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, 800 * 2 ** attempt));
    }
  }

  // Fall back to single requests so one bad string cannot lose a whole batch.
  const results = [];
  for (const text of texts) {
    try {
      const [translation] = await requestTranslations([text]);
      results.push(translation ?? '');
    } catch {
      console.warn(`  ! could not translate "${text.slice(0, 60)}": ${lastError}`);
      results.push('');
    }
  }

  return results;
}

/** Groups strings into requests that respect the endpoint's URL limits. */
function buildBatches(texts) {
  const batches = [];
  let current = [];
  let length = 0;

  for (const text of texts) {
    const encodedLength = encodeURIComponent(text).length + 3;

    if (
      current.length > 0 &&
      (current.length >= MAX_BATCH_ITEMS || length + encodedLength > MAX_BATCH_LENGTH)
    ) {
      batches.push(current);
      current = [];
      length = 0;
    }

    current.push(text);
    length += encodedLength;
  }

  if (current.length > 0) batches.push(current);
  return batches;
}

async function mapWithConcurrency(items, limit, worker) {
  const results = new Array(items.length);
  let cursor = 0;

  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await worker(items[index], index);
    }
  });

  await Promise.all(runners);
  return results;
}

async function main() {
  const overrides = await readJson(OVERRIDES_FILE);
  const cache = await readJson(CACHE_FILE);

  const files = [];
  for (const directory of SOURCE_DIRS) {
    const absolute = path.join(ROOT, directory);
    try {
      await stat(absolute);
    } catch {
      continue;
    }
    files.push(...(await walk(absolute)));
  }

  const candidates = new Set();

  for (const file of files) {
    const source = await readFile(file, 'utf8');
    for (const value of extractStrings(source)) {
      const key = decodeEntities(value);
      if (!isCandidate(key)) continue;
      if (Object.prototype.hasOwnProperty.call(overrides, key)) continue;
      candidates.add(key);
    }
  }

  const keys = [...candidates].sort((a, b) => a.localeCompare(b));

  await mkdir(path.dirname(REVIEW_FILE), { recursive: true });
  await writeFile(REVIEW_FILE, keys.join('\n') + '\n', 'utf8');

  const pending = keys.filter((key) => typeof cache[key] !== 'string');

  console.log(`Scanned ${files.length} files.`);
  console.log(`Found ${keys.length} translatable strings (${pending.length} to translate).`);
  console.log(`Candidate list: ${path.relative(ROOT, REVIEW_FILE)}`);

  if (DRY_RUN) return;

  await mkdir(path.dirname(CACHE_FILE), { recursive: true });

  if (pending.length > 0) {
    const batches = buildBatches(pending);
    let completed = 0;
    let lastFlush = 0;

    await mapWithConcurrency(batches, CONCURRENCY, async (batch) => {
      const translations = await translateBatch(batch);

      batch.forEach((text, index) => {
        const translation = translations[index];
        if (translation) cache[text] = translation;
      });

      completed += batch.length;

      if (completed - lastFlush >= 100 || completed === pending.length) {
        lastFlush = completed;
        await writeFile(CACHE_FILE, JSON.stringify(cache, null, 2) + '\n', 'utf8');
        console.log(`  translated ${completed}/${pending.length}`);
      }
    });
  }

  const dictionary = {};
  for (const key of keys) {
    const value = cache[key];
    if (typeof value !== 'string') continue;
    if (value === key) continue;
    dictionary[key] = value;
  }

  await writeFile(OUTPUT_FILE, JSON.stringify(dictionary, null, 2) + '\n', 'utf8');
  await mkdir(path.dirname(CACHE_FILE), { recursive: true });
  await writeFile(CACHE_FILE, JSON.stringify(cache, null, 2) + '\n', 'utf8');

  console.log(
    `Wrote ${Object.keys(dictionary).length} entries to ${path.relative(ROOT, OUTPUT_FILE)}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

