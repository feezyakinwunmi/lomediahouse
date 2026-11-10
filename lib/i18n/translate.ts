import type { Locale } from './config';
import frAuto from './translations/fr.json';
import frOverrides from './translations/fr.overrides.json';

export type Dictionary = Record<string, string>;

/**
 * The French dictionary is generated from the English copy used across the site
 * (`npm run i18n:generate`) and then layered with hand-written overrides for the
 * copy that matters most (navigation, hero, footer, legal links...).
 */
export const frenchDictionary: Dictionary = {
  ...(frAuto as Dictionary),
  ...(frOverrides as Dictionary),
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {},
  fr: frenchDictionary,
};

/** Collapse the whitespace that JSX formatting adds around text. */
export function normalizeKey(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

type CompiledPattern = {
  regex: RegExp;
  names: string[];
  template: string;
};

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Dictionary entries may contain `{placeholders}` so that dynamic text such as
 * "© {year} LOMEDIAHOUSE" or "Go to testimonial group {index}" can be matched.
 */
function compilePatterns(dictionary: Dictionary): CompiledPattern[] {
  const patterns: CompiledPattern[] = [];

  for (const [key, template] of Object.entries(dictionary)) {
    if (!key.includes('{')) continue;

    const normalized = normalizeKey(key);
    const parts = normalized.split(/\{([a-zA-Z0-9_]+)\}/g);
    const names: string[] = [];
    let source = '';

    parts.forEach((part, index) => {
      if (index % 2 === 1) {
        names.push(part);
        source += '(.+?)';
      } else if (part) {
        source += escapeRegExp(part);
      }
    });

    patterns.push({
      regex: new RegExp(`^${source}$`),
      names,
      template,
    });
  }

  // Match the most specific keys first.
  return patterns.sort((a, b) => b.regex.source.length - a.regex.source.length);
}

const patternCache = new WeakMap<Dictionary, CompiledPattern[]>();

function getPatterns(dictionary: Dictionary): CompiledPattern[] {
  const cached = patternCache.get(dictionary);
  if (cached) return cached;

  const compiled = compilePatterns(dictionary);
  patternCache.set(dictionary, compiled);
  return compiled;
}

/**
 * Translate a single piece of text. Returns `null` when no translation exists so
 * callers can leave the original English content untouched.
 */
export function translateText(value: string, dictionary: Dictionary): string | null {
  const key = normalizeKey(value);
  if (!key) return null;

  const direct = dictionary[key];
  if (typeof direct === 'string') return direct;

  for (const pattern of getPatterns(dictionary)) {
    const match = pattern.regex.exec(key);
    if (!match) continue;

    return pattern.template.replace(/\{([a-zA-Z0-9_]+)\}/g, (placeholder, name: string) => {
      const position = pattern.names.indexOf(name);
      if (position === -1) return placeholder;
      return match[position + 1] ?? placeholder;
    });
  }

  return null;
}
