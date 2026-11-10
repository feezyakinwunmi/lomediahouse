import { translateText, type Dictionary } from './translate';

/**
 * Remembers the English text/attribute values we replaced so that switching the
 * language back to English can restore the exact original markup.
 */
const ORIGINAL_TEXT = new WeakMap<Text, string>();
const ORIGINAL_ATTRIBUTES = new WeakMap<Element, Record<string, string>>();

const ELEMENT_NODE = 1;
const TEXT_NODE = 3;

/** Never translate code, styles, form controls or the language switcher itself. */
const SKIP_TAGS = new Set([
  'SCRIPT',
  'STYLE',
  'NOSCRIPT',
  'CODE',
  'PRE',
  'TEXTAREA',
  'SVG',
  'OPTION',
]);

export const TRANSLATABLE_ATTRIBUTES = ['placeholder', 'aria-label', 'title', 'alt'] as const;

function isSkipped(node: Node): boolean {
  // Text nodes inherit the rules of the closest element above them.
  let current: Node | null = node;

  while (current) {
    if (current.nodeType === ELEMENT_NODE) {
      const element = current as Element;
      if (element.hasAttribute('data-no-translate')) return true;
      // `tagName` is upper-case for HTML but keeps its case for SVG elements.
      if (SKIP_TAGS.has(element.tagName.toUpperCase())) return true;
    }

    current = current.parentNode;
  }

  return false;
}

export function translateTextNode(
  node: Text,
  dictionary: Dictionary,
  translatedValues?: Set<string>,
): void {
  const raw = node.nodeValue;
  if (!raw || !raw.trim()) return;
  if (isSkipped(node)) return;

  const parts = /^(\s*)([\s\S]*?)(\s*)$/.exec(raw);
  if (!parts) return;

  const [, leading, body, trailing] = parts;
  if (!body) return;

  // Already in French (prevents re-translating our own output).
  if (translatedValues?.has(body)) return;

  const translation = translateText(body, dictionary);
  if (translation === null) return;

  const next = `${leading}${translation}${trailing}`;
  if (next === raw) return;

  ORIGINAL_TEXT.set(node, raw);
  node.nodeValue = next;
}

export function restoreTextNode(node: Text): void {
  const original = ORIGINAL_TEXT.get(node);
  if (original === undefined) return;

  if (node.nodeValue !== original) node.nodeValue = original;
  ORIGINAL_TEXT.delete(node);
}

export function translateElementAttributes(
  element: Element,
  dictionary: Dictionary,
  translatedValues?: Set<string>,
): void {
  if (isSkipped(element)) return;

  for (const attribute of TRANSLATABLE_ATTRIBUTES) {
    const value = element.getAttribute(attribute);
    if (!value) continue;
    if (translatedValues?.has(value)) continue;

    const translation = translateText(value, dictionary);
    if (translation === null || translation === value) continue;

    let originals = ORIGINAL_ATTRIBUTES.get(element);
    if (!originals) {
      originals = {};
      ORIGINAL_ATTRIBUTES.set(element, originals);
    }

    originals[attribute] = value;
    element.setAttribute(attribute, translation);
  }
}

export function restoreElementAttributes(element: Element): void {
  const originals = ORIGINAL_ATTRIBUTES.get(element);
  if (!originals) return;

  for (const [attribute, value] of Object.entries(originals)) {
    if (element.getAttribute(attribute) !== value) element.setAttribute(attribute, value);
  }

  ORIGINAL_ATTRIBUTES.delete(element);
}

function visitNode(node: Node, dictionary: Dictionary, translatedValues?: Set<string>): void {
  if (node.nodeType === TEXT_NODE) {
    translateTextNode(node as Text, dictionary, translatedValues);
    return;
  }

  if (node.nodeType === ELEMENT_NODE) {
    translateElementAttributes(node as Element, dictionary, translatedValues);
  }
}

function restoreNode(node: Node): void {
  if (node.nodeType === TEXT_NODE) {
    restoreTextNode(node as Text);
    return;
  }

  if (node.nodeType === ELEMENT_NODE) {
    restoreElementAttributes(node as Element);
  }
}

function walk(root: Node, visit: (node: Node) => void): void {
  visit(root);

  if (typeof document === 'undefined' || root.nodeType === TEXT_NODE) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
  let current = walker.nextNode();

  while (current) {
    visit(current);
    current = walker.nextNode();
  }
}

/** Translate an entire subtree, including the root node. */
export function translateSubtree(
  root: Node,
  dictionary: Dictionary,
  translatedValues?: Set<string>,
): void {
  walk(root, (node) => visitNode(node, dictionary, translatedValues));
}

/** Restore the original English copy in a subtree. */
export function restoreSubtree(root: Node): void {
  walk(root, restoreNode);
}
