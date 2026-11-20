import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'About LO Media House',
  description:
    'Meet LO Media House, a media and technology company connecting publishing, creative production, digital platforms, and audiences around the world.',
  path: '/Aboutus',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
