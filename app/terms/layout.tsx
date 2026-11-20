import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Terms of Service',
  description:
    'Review the terms and conditions for using the LO Media House website and services.',
  path: '/terms',
});

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
