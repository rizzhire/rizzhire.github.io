import { useEffect, useRef, useState } from 'react';

interface CardStackOptions {
  stackOffset?: number;
  scaleReduction?: number;
  rotationIncrement?: number;
  threshold?: number;
}

export function useCardStack(cardCount: number, options: CardStackOptions = {}) {
  const {
    stackOffset = 60,
    scaleReduction = 0.05,
    rotationIncrement = 2,
    threshold = 0.3
  } = options;

  const [stackedCards, setStackedCards] = useState<number[]>([]);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const containerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? 'down' : 'up';
      setScrollDirection(direction);
      lastScrollY.current = currentScrollY;

      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;

      // Calculate how much of the container is visible
      const visibleStart = Math.max(0, -containerTop);
      const visibleEnd = Math.min(containerHeight, windowHeight - containerTop);
      const visibleHeight = Math.max(0, visibleEnd - visibleStart);
      const visibilityRatio = visibleHeight / windowHeight;

      // Determine stacking based on scroll progress
      if (visibilityRatio > threshold) {
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - containerTop) / (windowHeight + containerHeight)));
        const cardsToStack = Math.floor(scrollProgress * cardCount * 1.2);
        
        const newStackedCards: number[] = [];
        for (let i = 0; i < Math.min(cardsToStack, cardCount); i++) {
          newStackedCards.push(i);
        }
        
        setStackedCards(newStackedCards);
      } else {
        setStackedCards([]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [cardCount, threshold]);

  const getCardStyle = (index: number) => {
    const isStacked = stackedCards.includes(index);
    const stackOrder = stackedCards.indexOf(index);
    
    if (!isStacked) {
      return {
        transform: 'translateX(-50%) translateY(0px) scale(1) rotateX(0deg)',
        zIndex: 10,
        top: `${index * 300}px`
      };
    }

    return {
      transform: `translateX(-50%) translateY(${stackOrder * stackOffset}px) scale(${1 - stackOrder * scaleReduction}) rotateX(${stackOrder * rotationIncrement}deg)`,
      zIndex: 30 - stackOrder,
      top: `${120 + stackOrder * 20}px`
    };
  };

  const getCardClassName = (index: number) => {
    const isStacked = stackedCards.includes(index);
    const wasStacked = useRef<boolean[]>(new Array(cardCount).fill(false));
    
    // Track state changes for animation classes
    if (isStacked && !wasStacked.current[index]) {
      wasStacked.current[index] = true;
      return 'card-stacked';
    } else if (!isStacked && wasStacked.current[index]) {
      wasStacked.current[index] = false;
      return 'card-unstacked';
    }
    
    return '';
  };

  return {
    containerRef,
    stackedCards,
    scrollDirection,
    getCardStyle,
    getCardClassName
  };
}