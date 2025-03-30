/**
 * Guardian Angel - Animation Utilities
 * 
 * Utility functions for handling animations throughout the site
 */

import { useEffect, useRef, useState } from 'react';

// Intersection Observer hook for scroll-triggered animations
export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
      ...options
    });
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);
  
  return [ref, isIntersecting];
};

// Animation class generator for elements that animate on scroll
export const getAnimationClass = (isIntersecting: boolean, delay = 0) => {
  const baseClass = 'transition-all duration-700';
  const animateClass = isIntersecting 
    ? `opacity-100 translate-y-0` 
    : `opacity-0 translate-y-8`;
  const delayClass = delay > 0 ? `delay-${delay}` : '';
  
  return `${baseClass} ${animateClass} ${delayClass}`;
};

// Sequential animation for multiple elements
export const useSequentialAnimation = (itemCount: number, baseDelay = 100) => {
  return Array.from({ length: itemCount }, (_, i) => {
    const delay = i * baseDelay;
    return { delay };
  });
};