export const LOCALES = ['en', 'fr'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

/** Key used in localStorage to remember the visitor's choice. */
export const LOCALE_STORAGE_KEY = 'lomediahouse.locale';

/** Cookie mirror of the choice so it can be read before hydration if needed. */
export const LOCALE_COOKIE_NAME = 'lomediahouse_locale';

/** Label of each language, always written in that language. */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
};

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  en: 'en',
  fr: 'fr',
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value);
}
