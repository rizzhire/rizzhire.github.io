import { useQuery } from "@tanstack/react-query";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import type { Testimonial } from "@shared/schema";

export default function SuccessStories() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (!testimonials || currentIndex >= testimonials.length - 1) return;
    setSlideDirection('left');
    setCurrentIndex(currentIndex + 1);
    setTimeout(() => setSlideDirection(null), 300);
  };

  const prevSlide = () => {
    if (currentIndex <= 0) return;
    setSlideDirection('right');
    setCurrentIndex(currentIndex - 1);
    setTimeout(() => setSlideDirection(null), 300);
  };

  // Touch/swipe handling
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !testimonials) return;

    let startX = 0;
    let currentX = 0;
    let isMoving = false;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      isMoving = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isMoving) return;
      currentX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (!isMoving) return;
      isMoving = false;
      
      const diffX = startX - currentX;
      const threshold = 50;

      if (Math.abs(diffX) > threshold) {
        if (diffX > 0 && currentIndex < testimonials.length - 1) {
          nextSlide();
        } else if (diffX < 0 && currentIndex > 0) {
          prevSlide();
        }
      }
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
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
          className="relative w-full h-96 flex justify-center items-center"
          style={{ touchAction: 'pan-y' }}
        >
          {/* Navigation Buttons */}
          {testimonials && testimonials.length > 1 && (
            <>
              <Button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="absolute left-4 z-20 bg-white hover:bg-gray-50 text-gray-600 rounded-full w-10 h-10 p-0 shadow-lg disabled:opacity-50"
                size="sm"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                onClick={nextSlide}
                disabled={currentIndex >= testimonials.length - 1}
                className="absolute right-4 z-20 bg-white hover:bg-gray-50 text-gray-600 rounded-full w-10 h-10 p-0 shadow-lg disabled:opacity-50"
                size="sm"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </>
          )}

          {/* Testimonial Card */}
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
              className="transition-all duration-300 ease-out"
              style={{
                transform: slideDirection === 'left' ? 'translateX(-100px) scale(0.9)' : 
                          slideDirection === 'right' ? 'translateX(100px) scale(0.9)' : 
                          'translateX(0) scale(1)',
                opacity: slideDirection ? 0.6 : 1
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
