import React, { Suspense } from 'react';
import RevealOnScroll from './RevealOnScroll';
import LoadingState from './LoadingState';

/**
 * Wraps heavy sections with RevealOnScroll + Suspense fallback.
 * Keeps DOM lean and ensures consistent loading states.
 */
export default function SectionReveal({
  children,
  label,
  animation = 'fade-up',
  delay = 0,
}) {
  return (
    <RevealOnScroll animation={animation} delay={delay}>
      <Suspense
        fallback={
          <LoadingState
            variant="section"
            label={`${label ?? 'Bölüm'} yükleniyor...`}
          />
        }
      >
        {children}
      </Suspense>
    </RevealOnScroll>
  );
}

