import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

/**
 * RevealOnScroll - A reusable wrapper component for scroll-triggered animations
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to be revealed
 * @param {number} props.delay - Animation delay in milliseconds (default: 0)
 * @param {number} props.threshold - Intersection threshold (default: 0.1)
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.animation - Animation variant: 'fade-up', 'fade-down', 'fade-left', 'fade-right' (default: 'fade-up')
 */
export default function RevealOnScroll({ 
  children, 
  delay = 0, 
  threshold = 0.1,
  className = '',
  animation = 'fade-up'
}) {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin: '50px'
  });

  return (
    <div
      ref={elementRef}
      className={`reveal reveal-${animation} ${hasIntersected ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
