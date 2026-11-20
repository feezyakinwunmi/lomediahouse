'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
  LOCALE_HTML_LANG,
  LOCALE_STORAGE_KEY,
  isLocale,
  type Locale,
} from './config';
import { translateText, type Dictionary } from './translate';

type LanguageContextValue = {
  /** Currently selected language. */
  language: Locale;
  /** Change the language for the whole site. */
  setLanguage: (locale: Locale) => Promise<void>;
  /** Translate a single string (useful for dynamic values such as search results). */
  t: (text: string) => string;
  /** Active dictionary, empty for English. */
  dictionary: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;
const EMPTY_DICTIONARY: Dictionary = {};

function readCookieLocale(): Locale | null {
  const cookies = document.cookie ? document.cookie.split('; ') : [];
  for (const cookie of cookies) {
    const [name, ...rest] = cookie.split('=');
    if (name !== LOCALE_COOKIE_NAME) continue;
    const value = decodeURIComponent(rest.join('='));
    if (isLocale(value)) return value;
  }
  return null;
}

function readStoredLocale(): Locale | null {
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    // localStorage can be unavailable (private mode, blocked cookies...)
  }
  return readCookieLocale();
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Locale>(DEFAULT_LOCALE);
  const [dictionary, setDictionary] = useState<Dictionary>(EMPTY_DICTIONARY);
  const [hydrated, setHydrated] = useState(false);
  const languageRequest = useRef(0);

  const setLanguage = useCallback(async (locale: Locale) => {
    if (!isLocale(locale)) return;

    const request = ++languageRequest.current;
    if (locale === DEFAULT_LOCALE) {
      setDictionary(EMPTY_DICTIONARY);
      setLanguageState(locale);
      return;
    }

    try {
      const { dictionaries } = await import('./dictionaries');
      if (request !== languageRequest.current) return;
      setDictionary(dictionaries[locale]);
      setLanguageState(locale);
    } catch (error) {
      if (request !== languageRequest.current) return;
      console.error(`Failed to load the ${locale} translation dictionary.`, error);
    }
  }, []);

  // Restore the visitor's previous choice once we are on the client. The choice
  // only exists in localStorage/cookies, so it cannot be read during SSR and
  // must be applied after hydration (otherwise the markup would mismatch).
  /* eslint-disable react-hooks/set-state-in-effect -- client-only state restored after hydration */
  useEffect(() => {
    let active = true;
    const stored = readStoredLocale();
    if (stored) {
      void setLanguage(stored).finally(() => {
        if (active) setHydrated(true);
      });
    } else {
      setHydrated(true);
    }

    return () => {
      active = false;
    };
  }, [setLanguage]);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    document.documentElement.lang = LOCALE_HTML_LANG[language];

    if (!hydrated) return;

    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, language);
    } catch {
      // ignore storage failures
    }

    document.cookie = `${LOCALE_COOKIE_NAME}=${language}; path=/; max-age=${ONE_YEAR_IN_SECONDS}; samesite=lax`;
  }, [language, hydrated]);

  const t = useCallback(
    (text: string) => {
      if (language === DEFAULT_LOCALE) return text;
      return translateText(text, dictionary) ?? text;
    },
    [language, dictionary],
  );

  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage, t, dictionary }),
    [language, setLanguage, t, dictionary],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used inside a <LanguageProvider>.');
  }
  return context;
}
