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
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible && !hasStarted) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observerRef.current.observe(ref.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []); // Remove isVisible from dependency to prevent infinite loop

  useEffect(() => {
    if (!isVisible || hasStarted) return;

    setHasStarted(true);
    const startTime = Date.now() + delay;
    const startValue = start;
    const endValue = end;

    const animateCounter = () => {
      const now = Date.now();
      const progress = Math.max(0, Math.min(1, (now - startTime) / duration));

      if (progress === 1) {
        setCount(endValue);
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        return;
      }

      // Ease-out animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut);
      setCount(currentValue);
    };

    timerRef.current = setInterval(animateCounter, 16);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isVisible, hasStarted, start, end, duration, delay]);

  return { count, ref };
}