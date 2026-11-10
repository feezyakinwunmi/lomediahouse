This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Languages (English / French)

The site ships in English and can be switched to French from the selector in the
navbar (desktop) and in the mobile menu.

- `lib/i18n/config.ts` — supported locales, labels, storage keys.
- `lib/i18n/LanguageProvider.tsx` — React context, `localStorage` + cookie
  persistence, `<html lang>` updates, and the `t()` helper for dynamic strings.
- `lib/i18n/TranslationEngine.tsx` + `lib/i18n/domTranslator.ts` — walks the DOM
  and swaps text nodes and `placeholder` / `aria-label` / `title` / `alt`
  attributes, so server-rendered pages (blog articles, legal pages) are covered
  without rewriting every component. Switching back to English restores the
  original markup exactly.
- `lib/i18n/translations/fr.json` — machine-generated dictionary (do not edit).
- `lib/i18n/translations/fr.overrides.json` — hand-curated translations. These
  always win over the generated ones; keys may contain `{placeholders}` to match
  dynamic text such as `Call Us: {phone}`.

Regenerate the machine dictionary after adding or editing visible copy:

```bash
npm run i18n:generate   # add --dry-run to only list the extracted strings
npm run typecheck
```

Opt a subtree out of translation with the `data-no-translate` attribute (the
language switcher already does this).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
