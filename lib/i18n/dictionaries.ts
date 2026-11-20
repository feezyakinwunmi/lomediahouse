import type { Locale } from './config';
import type { Dictionary } from './translate';
import frAuto from './translations/fr.json';
import frOverrides from './translations/fr.overrides.json';

/**
 * The French dictionary is generated from the English copy used across the site
 * (`npm run i18n:generate`) and then layered with hand-written overrides.
 */
const frenchDictionary: Dictionary = {
  ...(frAuto as Dictionary),
  ...(frOverrides as Dictionary),
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {},
  fr: frenchDictionary,
};
