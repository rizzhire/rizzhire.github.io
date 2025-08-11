import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState, useRef } from "react";
import type { Testimonial } from "@shared/schema";

export default function SuccessStories() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const currentX = useRef(0);
  const isDragging = useRef(false);

  // Handle touch/mouse events for swiping
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !testimonials) return;

    const handleStart = (clientX: number) => {
      startX.current = clientX;
      isDragging.current = true;
      setIsAnimating(false);
    };

    const handleMove = (clientX: number) => {
      if (!isDragging.current) return;
      currentX.current = clientX - startX.current;
    };

    const handleEnd = () => {
      if (!isDragging.current) return;
      isDragging.current = false;

      const threshold = 50;
      if (Math.abs(currentX.current) > threshold) {
        const direction = currentX.current > 0 ? -1 : 1;
        const newIndex = Math.max(0, Math.min(testimonials.length - 1, currentIndex + direction));
        
        if (newIndex !== currentIndex) {
          setIsAnimating(true);
          setCurrentIndex(newIndex);
          setTimeout(() => setIsAnimating(false), 300);
        }
      }
      currentX.current = 0;
    };

    // Mouse events
    const handleMouseDown = (e: MouseEvent) => handleStart(e.clientX);
    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleMouseUp = () => handleEnd();

    // Touch events
    const handleTouchStart = (e: TouchEvent) => handleStart(e.touches[0].clientX);
    const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
    const handleTouchEnd = () => handleEnd();

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex, testimonials]);

  const renderCard = (testimonial: Testimonial, index: number) => (
    <Card 
      key={testimonial.id}
      className="bg-white p-8 rounded-3xl border-0 w-80 h-80 flex flex-col justify-between"
    >
      <CardContent className="p-0 flex flex-col h-full">
        <div className="flex text-yellow mb-4">
          {Array(testimonial.rating).fill(0).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>
        <blockquote className="text-gray-700 mb-4 italic text-lg flex-grow">
          "{testimonial.quote}"
        </blockquote>
        <div className="mt-auto">
          <div className="font-bold text-yellow text-lg">{testimonial.name}</div>
          <div className="text-gray-600 font-medium">{testimonial.position}</div>
          <div className="text-gray-600">{testimonial.company}</div>
          <div className="text-gray-500 text-sm">{testimonial.location}</div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Success <span className="text-yellow">Stories</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real achievements from professionals who trusted HireNET with their careers.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full h-96 flex justify-center items-center cursor-grab active:cursor-grabbing select-none"
          style={{ touchAction: 'pan-y' }}
        >
          {isLoading ? (
            <Card className="bg-white p-8 rounded-3xl border-0 w-80 h-80">
              <CardContent className="p-0">
                <Skeleton className="w-20 h-6 mb-6" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-6" />
                <Skeleton className="h-6 w-1/2 mb-2" />
                <Skeleton className="h-4 w-3/4 mb-1" />
                <Skeleton className="h-4 w-1/2 mb-1" />
                <Skeleton className="h-4 w-2/3" />
              </CardContent>
            </Card>
          ) : testimonials && testimonials.length > 0 ? (
            <div 
              className="transition-transform duration-300 ease-out"
              style={{
                transform: isAnimating ? 'scale(0.95)' : 'scale(1)',
                opacity: isAnimating ? 0.8 : 1
              }}
            >
              {renderCard(testimonials[currentIndex], currentIndex)}
            </div>
          ) : null}
        </div>

        {/* Progress indicator */}
        {testimonials && testimonials.length > 0 && (
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <div 
                key={index}
                className={`h-2 w-8 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-yellow' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>


    </section>
  );
}
