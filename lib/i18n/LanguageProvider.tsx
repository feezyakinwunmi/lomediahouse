'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
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
import { dictionaries, translateText, type Dictionary } from './translate';

type LanguageContextValue = {
  /** Currently selected language. */
  language: Locale;
  /** Change the language for the whole site. */
  setLanguage: (locale: Locale) => void;
  /** Translate a single string (useful for dynamic values such as search results). */
  t: (text: string) => string;
  /** Active dictionary, empty for English. */
  dictionary: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

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
  const [hydrated, setHydrated] = useState(false);

  // Restore the visitor's previous choice once we are on the client. The choice
  // only exists in localStorage/cookies, so it cannot be read during SSR and
  // must be applied after hydration (otherwise the markup would mismatch).
  /* eslint-disable react-hooks/set-state-in-effect -- client-only state restored after hydration */
  useEffect(() => {
    const stored = readStoredLocale();
    if (stored && stored !== DEFAULT_LOCALE) setLanguageState(stored);
    setHydrated(true);
  }, []);
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

  const setLanguage = useCallback((locale: Locale) => {
    if (!isLocale(locale)) return;
    setLanguageState(locale);
  }, []);

  const t = useCallback(
    (text: string) => {
      if (language === DEFAULT_LOCALE) return text;
      return translateText(text, dictionaries[language]) ?? text;
    },
    [language],
  );

  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage, t, dictionary: dictionaries[language] }),
    [language, setLanguage, t],
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
