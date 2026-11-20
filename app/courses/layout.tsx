import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Courses and Professional Development',
  description:
    'Explore professional development and partner onboarding courses from LO Media House.',
  path: '/courses',
});

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
