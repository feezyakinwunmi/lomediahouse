import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Our Leadership and Team',
  description:
    'Meet the leadership and creative team behind LO Media House and its publishing, media, marketing, and technology services.',
  path: '/Leadership',
});

export default function LeadershipLayout({ children }: { children: React.ReactNode }) {
  return children;
}
