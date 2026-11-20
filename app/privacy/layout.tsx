import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Privacy Policy',
  description:
    'Read the LO Media House privacy policy to learn how we collect, use, and protect personal information.',
  path: '/privacy',
});

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
