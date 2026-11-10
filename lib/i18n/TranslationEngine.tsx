'use client';

import { useEffect, useMemo } from 'react';
import { DEFAULT_LOCALE } from './config';
import { useLanguage } from './LanguageProvider';
import {
  TRANSLATABLE_ATTRIBUTES,
  restoreSubtree,
  translateElementAttributes,
  translateSubtree,
  translateTextNode,
} from './domTranslator';
import { translateText } from './translate';

/** Title of the current page in English, so it can be restored on the way back. */
let englishTitle: string | null = null;

/**
 * Translates every rendered string on the page (including server-rendered
 * content such as blog articles) and keeps translating content that React adds
 * later — search results, carousels, menus...
 */
export default function TranslationEngine() {
  const { language, dictionary } = useLanguage();
  const translatedValues = useMemo(() => new Set(Object.values(dictionary)), [dictionary]);

  useEffect(() => {
    if (typeof document === 'undefined' || !document.body) return;

    if (language === DEFAULT_LOCALE) {
      restoreSubtree(document.body);
      if (englishTitle !== null) {
        document.title = englishTitle;
        englishTitle = null;
      }
      return;
    }

    const root = document.body;

    const translateTitle = () => {
      const current = document.title;
      if (!current) return;

      const translation = translateText(current, dictionary);
      if (translation === null || translation === current) return;

      englishTitle = current;
      document.title = translation;
    };

    translateSubtree(root, dictionary, translatedValues);
    translateTitle();

    const bodyObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'characterData') {
          translateTextNode(mutation.target as Text, dictionary, translatedValues);
          continue;
        }

        if (mutation.type === 'attributes') {
          translateElementAttributes(mutation.target as Element, dictionary, translatedValues);
          continue;
        }

        mutation.addedNodes.forEach((node) => {
          translateSubtree(node, dictionary, translatedValues);
        });
      }
    });

    bodyObserver.observe(root, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: [...TRANSLATABLE_ATTRIBUTES],
    });

    // Next.js swaps the <title> on client-side navigation.
    const headObserver = new MutationObserver(translateTitle);
    headObserver.observe(document.head, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      bodyObserver.disconnect();
      headObserver.disconnect();
    };
  }, [language, dictionary, translatedValues]);

  return null;
}
