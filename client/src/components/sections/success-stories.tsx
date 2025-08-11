import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState, useRef, useCallback } from "react";
import type { Testimonial } from "@shared/schema";

export default function SuccessStories() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle card
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // IntersectionObserver to track which card is in center
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || !testimonials) return;

    const observerOptions = {
      root: scrollContainer,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cardIndex = cardRefs.current.findIndex(ref => ref === entry.target);
          if (cardIndex !== -1) {
            setCurrentIndex(cardIndex);
          }
        }
      });
    }, observerOptions);

    cardRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [testimonials]);

  const getCardStyle = useCallback((index: number) => {
    const distance = Math.abs(index - currentIndex);
    const scale = distance === 0 ? 1 : Math.max(0.75, 1 - distance * 0.25);
    const opacity = distance === 0 ? 1 : Math.max(0.3, 1 - distance * 0.35);
    
    return {
      transform: `scale(${scale})`,
      opacity,
      transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.2s ease-out'
    };
  }, [currentIndex]);

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
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 px-8 [&::-webkit-scrollbar]:hidden"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollSnapType: 'x mandatory'
          }}
        >
          {isLoading ? (
            Array(3).fill(0).map((_, index) => (
              <div key={index} className="flex-none w-[85vw] sm:w-96 snap-center">
                <Card className="bg-white p-8 rounded-3xl border-0 mx-auto w-full h-80">
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
              </div>
            ))
          ) : (
            testimonials?.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="flex-none w-[85vw] sm:w-96 snap-center flex justify-center"
                style={{ scrollSnapAlign: 'center' }}
              >
                <Card 
                  ref={(el) => cardRefs.current[index] = el}
                  className="bg-white p-8 rounded-3xl border-0 card-hover w-full h-80 flex flex-col justify-between"
                  style={getCardStyle(index)}
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
              </div>
            ))
          )}
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
