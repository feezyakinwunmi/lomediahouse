import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Cookie Policy',
  description:
    'Learn how LO Media House uses cookies and how to manage your cookie preferences.',
  path: '/cookies',
});

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
