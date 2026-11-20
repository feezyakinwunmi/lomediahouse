import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Contact LO Media House',
  description:
    'Talk to LO Media House about publishing, digital marketing, creative production, website development, or a new technology project.',
  path: '/ContactUs',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
