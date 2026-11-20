import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'New Partner Onboarding Course',
  description:
    'Complete the LO Media House new partner onboarding course covering our culture, structure, policies, and expectations.',
  path: '/courses/new-partner-onboarding',
});

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
