'use client';

import { ChevronDown, Globe } from 'lucide-react';
import { LOCALE_LABELS, LOCALES, type Locale } from '@/lib/i18n/config';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

type LanguageSwitcherProps = {
  /** Where the switcher is rendered, used to tune the styling. */
  variant?: 'desktop' | 'mobile';
  className?: string;
};

export default function LanguageSwitcher({
  variant = 'desktop',
  className = '',
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const selectId = `language-select-${variant}`;

  const wrapperClasses =
    variant === 'mobile'
      ? 'relative flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700'
      : 'relative flex items-center gap-1.5 rounded-full border border-zinc-300 bg-white/80 pl-3 pr-7 py-1.5 text-xs font-medium text-zinc-700 shadow-sm transition-colors hover:border-red-400';

  return (
    <div className={`${wrapperClasses} ${className}`.trim()} data-no-translate>
      <Globe className="h-3.5 w-3.5 text-red-500" aria-hidden="true" />
      <label htmlFor={selectId} className="sr-only">
        Language / Langue
      </label>
      <select
        id={selectId}
        name="language"
        value={language}
        onChange={(event) => setLanguage(event.target.value as Locale)}
        aria-label="Language / Langue"
        className="cursor-pointer appearance-none bg-transparent pr-1 font-medium text-zinc-700 focus:outline-none"
      >
        {LOCALES.map((locale) => (
          <option key={locale} value={locale} className="text-black">
            {LOCALE_LABELS[locale]}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-2.5 h-3 w-3 text-zinc-500"
        aria-hidden="true"
      />
    </div>
  );
}
