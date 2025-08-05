import { useState, useEffect, useRef } from 'react';

interface UseCounterProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
}

export function useCounter({ end, start = 0, duration = 2000, delay = 0 }: UseCounterProps) {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start animation immediately when component mounts
    const startAnimation = () => {
      if (hasStarted) return;
      setHasStarted(true);

      const startTime = Date.now();
      const startValue = start;
      const endValue = end;

      const animateCounter = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        if (progress >= 1) {
          setCount(endValue);
          return;
        }

        // Ease-out animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut);
        setCount(currentValue);

        requestAnimationFrame(animateCounter);
      };

      requestAnimationFrame(animateCounter);
    };

    // Start with delay
    const timer = setTimeout(startAnimation, delay);

    return () => clearTimeout(timer);
  }, [start, end, duration, delay, hasStarted]);

  return { count, ref };
}