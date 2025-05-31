import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Animation presets
export const ANIMATION_PRESETS = {
  fadeUp: {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
  },
  fadeDown: {
    from: { opacity: 0, y: -30 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
  },
  fadeLeft: {
    from: { opacity: 0, x: -30 },
    to: { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
  },
  fadeRight: {
    from: { opacity: 0, x: 30 },
    to: { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
  },
  scale: {
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }
  },
  slideUp: {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
  },
  slideDown: {
    from: { opacity: 0, y: -50 },
    to: { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
  },
  slideLeft: {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
  },
  slideRight: {
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
  },
  rotate: {
    from: { opacity: 0, rotation: 10 },
    to: { opacity: 1, rotation: 0, duration: 0.8, ease: 'power3.out' }
  }
};

// Universal scroll animation function with fallback
export const createScrollAnimation = (
  selector: string,
  preset: keyof typeof ANIMATION_PRESETS = 'fadeUp',
  options: {
    stagger?: number;
    delay?: number;
    start?: string;
    end?: string;
    once?: boolean;
    batch?: boolean;
  } = {}
) => {
  const {
    stagger = 0,
    delay = 0,
    start = 'top bottom-=100',
    end = 'bottom top',
    once = true,
    batch = false
  } = options;

  const elements = gsap.utils.toArray(selector);
  if (elements.length === 0) return;

  const animation = ANIMATION_PRESETS[preset];

  // Ensure elements are visible first (fallback)
  gsap.set(elements, { opacity: 1, clearProps: 'transform' });

  // Add a small delay before setting animation initial state
  setTimeout(() => {
    // Only set initial animation state if elements are in viewport or will be animated
    elements.forEach((element) => {
      const rect = (element as Element).getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

      // Only hide elements that are not currently visible and will be animated
      if (!isInViewport) {
        gsap.set(element, animation.from);
      }
    });

    // Create scroll triggers with fallback
    if (batch) {
      // Use batch for better performance with many elements
      ScrollTrigger.batch(elements as Element[], {
        start,
        onEnter: (batch) => {
          gsap.to(batch, {
            ...animation.to,
            stagger,
            delay
          });
        },
        once
      });
    } else {
      // Individual triggers for each element
      elements.forEach((element, index) => {
        ScrollTrigger.create({
          trigger: element as Element,
          start,
          end,
          onEnter: () => {
            gsap.to(element, {
              ...animation.to,
              delay: delay + (stagger * index)
            });
          },
          once
        });
      });
    }

    // Fallback: ensure all elements are visible after a timeout
    setTimeout(() => {
      elements.forEach((element) => {
        gsap.set(element, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0,
          clearProps: 'transform'
        });
      });
    }, 3000); // 3 second fallback
  }, 100);
};

// Initialize animations that need to run on page load
export const initializeAnimations = () => {
  // Clear any existing ScrollTriggers
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  // Ensure all content is visible by default (fallback)
  ensureContentVisibility();

  // Animate navbar background on scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const scrollProgress = self.progress;
        if (scrollProgress > 0.05) {
          navbar.classList.add('bg-background/80', 'backdrop-blur-md', 'shadow-lg');
          navbar.classList.remove('bg-transparent');
        } else {
          navbar.classList.remove('bg-background/80', 'backdrop-blur-md', 'shadow-lg');
          navbar.classList.add('bg-transparent');
        }
      }
    });
  }

  // Initialize scroll progress indicator
  const progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        gsap.to(progressBar, {
          scaleX: self.progress,
          duration: 0.1,
          ease: 'none'
        });
      }
    });
  }

  // Initialize universal scroll animations with delay to ensure DOM is ready
  setTimeout(() => {
    initializeUniversalScrollAnimations();
  }, 100);
};

// Ensure all content is visible as fallback
export const ensureContentVisibility = () => {
  const animatedElements = document.querySelectorAll(`
    .page-title, .section-title, .section-subtitle,
    .card, .content-block, .feature-item,
    .image-reveal, .media-item,
    .cta-button, .button-group,
    .form-group, .form-section,
    .stat-item, .counter-item,
    .breadcrumb, .nav-item,
    .reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate,
    .service-card, .case-study-card, .content-section, .result-item
  `);

  // Set all elements to be visible by default
  animatedElements.forEach(element => {
    gsap.set(element, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
      clearProps: 'transform'
    });
  });

  // Add a small delay before applying animations
  setTimeout(() => {
    applyAnimationsWithFallback();
  }, 50);
};

// Apply animations with fallback visibility
export const applyAnimationsWithFallback = () => {
  // Only apply animations if the user hasn't scrolled much (to avoid jarring effects)
  if (window.scrollY < window.innerHeight * 0.5) {
    initializeUniversalScrollAnimations();
  }
};

// Initialize universal scroll animations for common elements
export const initializeUniversalScrollAnimations = () => {
  // Page titles and headings
  createScrollAnimation('.page-title', 'slideUp', { delay: 0.2 });
  createScrollAnimation('.section-title', 'fadeUp', { delay: 0.1 });
  createScrollAnimation('.section-subtitle', 'fadeUp', { delay: 0.2 });

  // Cards and content blocks
  createScrollAnimation('.card', 'fadeUp', { stagger: 0.1, batch: true });
  createScrollAnimation('.content-block', 'fadeUp', { stagger: 0.15 });
  createScrollAnimation('.feature-item', 'fadeUp', { stagger: 0.1, batch: true });

  // Images and media
  createScrollAnimation('.image-reveal', 'scale', { delay: 0.3 });
  createScrollAnimation('.media-item', 'fadeUp', { stagger: 0.2 });

  // Buttons and CTAs
  createScrollAnimation('.cta-button', 'fadeUp', { delay: 0.4 });
  createScrollAnimation('.button-group', 'fadeUp', { delay: 0.3 });

  // Form elements
  createScrollAnimation('.form-group', 'fadeUp', { stagger: 0.1 });
  createScrollAnimation('.form-section', 'fadeUp', { delay: 0.2 });

  // Statistics and counters
  createScrollAnimation('.stat-item', 'fadeUp', { stagger: 0.1, batch: true });
  createScrollAnimation('.counter-item', 'scale', { stagger: 0.15 });

  // Navigation and breadcrumbs
  createScrollAnimation('.breadcrumb', 'fadeRight', { delay: 0.1 });
  createScrollAnimation('.nav-item', 'fadeUp', { stagger: 0.05 });

  // Generic reveal classes
  createScrollAnimation('.reveal', 'fadeUp');
  createScrollAnimation('.reveal-left', 'fadeLeft');
  createScrollAnimation('.reveal-right', 'fadeRight');
  createScrollAnimation('.reveal-scale', 'scale');
  createScrollAnimation('.reveal-rotate', 'rotate');
};

// Animate hero section
export const animateHero = () => {
  const tl = gsap.timeline();
  
  tl.from('.hero-title', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
  })
  .from('.hero-subtitle', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.6')
  .from('.hero-cta', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: 'power3.out'
  }, '-=0.4')
  .from('.hero-visual', {
    opacity: 0,
    scale: 0.9,
    duration: 1.2,
    ease: 'power3.out'
  }, '-=0.8');

  return tl;
};

// Animate service cards
export const animateServiceCards = () => {
  const cards = gsap.utils.toArray('.service-card');
  
  gsap.set(cards, { opacity: 0, y: 50 });
  
  ScrollTrigger.batch(cards as Element[], {
    start: 'top bottom-=100',
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out'
      });
    },
    once: true
  });
};

// Animate horizontal scroll for case studies
export const animateCaseStudies = () => {
  const container = document.querySelector('.case-studies-container');
  if (!container) return;
  
  const sections = gsap.utils.toArray('.case-study-card');
  
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: container as Element,
      pin: true,
      start: 'top top',
      end: () => `+=${container.scrollWidth}`,
      scrub: 1,
    }
  });
};

// Animate timeline for about section
export const animateTimeline = () => {
  const timelineItems = gsap.utils.toArray('.timeline-item');
  
  timelineItems.forEach((item, i) => {
    const direction = i % 2 === 0 ? 1 : -1;
    
    gsap.set(item, { opacity: 0, x: 50 * direction });
    
    ScrollTrigger.create({
      trigger: item as Element,
      start: 'top bottom-=150',
      onEnter: () => {
        gsap.to(item, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out'
        });
      },
      once: true
    });
  });
};

// Animate counters
export const animateCounters = () => {
  const counters = gsap.utils.toArray('.counter');
  
  counters.forEach((counter) => {
    const target = parseInt((counter as HTMLElement).dataset.target || '0', 10);
    
    ScrollTrigger.create({
      trigger: counter as Element,
      start: 'top bottom-=100',
      onEnter: () => {
        gsap.to(counter, {
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          ease: 'power2.out'
        });
      },
      once: true
    });
  });
};