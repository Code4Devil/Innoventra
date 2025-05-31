import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ANIMATION_PRESETS } from '../utils/animation';

gsap.registerPlugin(ScrollTrigger);

interface UseScrollAnimationOptions {
  preset?: keyof typeof ANIMATION_PRESETS;
  stagger?: number;
  delay?: number;
  start?: string;
  end?: string;
  once?: boolean;
  batch?: boolean;
  threshold?: number;
  rootMargin?: string;
}

export const useScrollAnimation = (
  selector?: string,
  options: UseScrollAnimationOptions = {}
) => {
  const ref = useRef<HTMLElement>(null);
  const {
    preset = 'fadeUp',
    stagger = 0,
    delay = 0,
    start = 'top bottom-=100',
    end = 'bottom top',
    once = true,
    batch = false
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const targets = selector 
      ? element.querySelectorAll(selector)
      : [element];

    if (targets.length === 0) return;

    const animation = ANIMATION_PRESETS[preset];
    const elements = Array.from(targets);

    // Set initial state
    gsap.set(elements, animation.from);

    let scrollTriggers: ScrollTrigger[] = [];

    if (batch && elements.length > 1) {
      // Use batch for better performance with many elements
      const batchTrigger = ScrollTrigger.batch(elements as Element[], {
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
      scrollTriggers = Array.isArray(batchTrigger) ? batchTrigger : [batchTrigger];
    } else {
      // Individual triggers for each element
      elements.forEach((el, index) => {
        const trigger = ScrollTrigger.create({
          trigger: el as Element,
          start,
          end,
          onEnter: () => {
            gsap.to(el, {
              ...animation.to,
              delay: delay + (stagger * index)
            });
          },
          once
        });
        scrollTriggers.push(trigger);
      });
    }

    // Cleanup function
    return () => {
      scrollTriggers.forEach(trigger => trigger.kill());
    };
  }, [selector, preset, stagger, delay, start, end, once, batch]);

  return ref;
};

// Hook for simple fade-in animation
export const useFadeIn = (options: Omit<UseScrollAnimationOptions, 'preset'> = {}) => {
  return useScrollAnimation(undefined, { ...options, preset: 'fadeUp' });
};

// Hook for scale animation
export const useScaleIn = (options: Omit<UseScrollAnimationOptions, 'preset'> = {}) => {
  return useScrollAnimation(undefined, { ...options, preset: 'scale' });
};

// Hook for slide animations
export const useSlideIn = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  options: Omit<UseScrollAnimationOptions, 'preset'> = {}
) => {
  const presetMap = {
    up: 'slideUp',
    down: 'slideDown',
    left: 'slideLeft',
    right: 'slideRight'
  } as const;

  return useScrollAnimation(undefined, { 
    ...options, 
    preset: presetMap[direction] 
  });
};

// Hook for staggered animations on children
export const useStaggeredAnimation = (
  childSelector: string,
  options: UseScrollAnimationOptions = {}
) => {
  return useScrollAnimation(childSelector, {
    stagger: 0.1,
    batch: true,
    ...options
  });
};

// Hook for counter animations
export const useCounterAnimation = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const target = parseInt(element.dataset.target || '0', 10);
    
    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top bottom-=100',
      onEnter: () => {
        gsap.to(element, {
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          ease: 'power2.out'
        });
      },
      once: true
    });

    return () => trigger.kill();
  }, []);

  return ref;
};

// Hook for parallax effects
export const useParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        const y = self.progress * speed * 100;
        gsap.set(element, { y: `${y}px` });
      }
    });

    return () => trigger.kill();
  }, [speed]);

  return ref;
};
