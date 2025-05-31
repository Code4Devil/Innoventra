// Utility to ensure content visibility
export const ensureContentVisibility = () => {
  // Remove any hidden content caused by animations
  const hiddenElements = document.querySelectorAll('[style*="opacity: 0"]');
  hiddenElements.forEach(element => {
    (element as HTMLElement).style.opacity = '1';
    (element as HTMLElement).style.transform = 'none';
  });

  // Ensure all common content elements are visible
  const contentSelectors = [
    '.page-title',
    '.section-title',
    '.section-subtitle',
    '.content-block',
    '.card',
    '.glass',
    '.service-card',
    '.case-study-card',
    '.feature-item',
    '.result-item',
    '.about-animate',
    '.image-reveal',
    '.button-group',
    '.cta-button'
  ];

  contentSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      (element as HTMLElement).style.opacity = '1';
      (element as HTMLElement).style.visibility = 'visible';
      (element as HTMLElement).style.transform = 'none';
    });
  });
};

// Hook to ensure content is visible on component mount
export const useEnsureVisibility = () => {
  React.useEffect(() => {
    // Immediate visibility
    ensureContentVisibility();
    
    // Fallback after a short delay
    const timeoutId = setTimeout(() => {
      ensureContentVisibility();
    }, 100);

    // Cleanup
    return () => clearTimeout(timeoutId);
  }, []);
};

import React from 'react';
