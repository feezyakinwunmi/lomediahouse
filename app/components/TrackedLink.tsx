'use client';

import Link from 'next/link';
import { sendGAEvent } from '@next/third-parties/google';
import type { ComponentProps } from 'react';

type TrackedLinkProps = ComponentProps<typeof Link> & {
  /** Value sent with the GA `button_click` event. */
  eventValue: string;
};

/** Internal link that reports a GA `button_click` event when clicked. */
export default function TrackedLink({ eventValue, onClick, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        sendGAEvent('event', 'button_click', { value: eventValue });
        onClick?.(event);
      }}
    />
  );
}
