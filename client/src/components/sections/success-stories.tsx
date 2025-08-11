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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle scroll events to detect slide changes
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isTransitioning) return;
      
      const scrollLeft = container.scrollLeft;
      const slideWidth = container.offsetWidth;
      const newIndex = Math.round(scrollLeft / slideWidth);
      
      if (newIndex !== currentIndex) {
        setIsTransitioning(true);
        setCurrentIndex(newIndex);
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 400);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentIndex, isTransitioning]);

  const renderTestimonialCard = (testimonial: Testimonial, index: number) => {
    const isActive = index === currentIndex;
    
    // Only render the active card - hide all others completely
    if (!isActive) {
      return null;
    }

    return (
      <Card 
        key={testimonial.id}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-3xl border-0 w-80 h-80 flex flex-col justify-between transition-all duration-300 ease-out"
        style={{
          transform: 'scale(1)',
          opacity: 1,
          zIndex: 10
        }}
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
  };

  return (
    <section className="py-20 cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Success <span className="text-yellow">Stories</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real achievements from professionals who trusted HireNET with their careers.
          </p>
        </div>

        <div className="relative w-full h-96 flex justify-center items-center">
          {/* Hidden scroll container for swipe detection */}
          <div 
            ref={containerRef}
            className="absolute inset-0 overflow-x-auto snap-x snap-mandatory opacity-0 pointer-events-auto [&::-webkit-scrollbar]:hidden"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollSnapType: 'x mandatory'
            }}
          >
            {isLoading ? (
              Array(3).fill(0).map((_, index) => (
                <div 
                  key={index} 
                  className="inline-block w-full h-full snap-center"
                  style={{ scrollSnapAlign: 'center' }}
                />
              ))
            ) : (
              testimonials?.map((_, index) => (
                <div 
                  key={index} 
                  className="inline-block w-full h-full snap-center"
                  style={{ scrollSnapAlign: 'center' }}
                />
              ))
            )}
          </div>

          {/* Single visible testimonial card */}
          <div className="relative w-full h-full">
            {isLoading ? (
              <Card className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-3xl border-0 w-80 h-80">
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
            ) : (
              testimonials && testimonials[currentIndex] && renderTestimonialCard(testimonials[currentIndex], currentIndex)
            )}
          </div>
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
