import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Our Divisions',
  description:
    'Explore the LO Media House divisions for media, creative production, publishing, and technology services.',
  path: '/Divisions',
});

export default function DivisionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
