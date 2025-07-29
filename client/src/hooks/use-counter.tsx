import { useState, useEffect, useRef } from 'react';

interface UseCounterProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
}

export function useCounter({ end, start = 0, duration = 2000, delay = 0 }: UseCounterProps) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now() + delay;
    const startValue = start;
    const endValue = end;

    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.max(0, Math.min(1, (now - startTime) / duration));

      if (progress === 1) {
        setCount(endValue);
        clearInterval(timer);
        return;
      }

      // Ease-out animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut);
      setCount(currentValue);
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, start, end, duration, delay]);

  return { count, ref };
}