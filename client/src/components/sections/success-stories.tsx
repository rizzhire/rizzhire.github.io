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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const cardWidth = scrollContainer.offsetWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const getCardStyle = (index: number) => {
    const distance = Math.abs(index - currentIndex);
    const scale = distance === 0 ? 1 : Math.max(0.8, 1 - distance * 0.2);
    const opacity = distance === 0 ? 1 : Math.max(0.4, 1 - distance * 0.3);
    
    return {
      transform: `scale(${scale})`,
      opacity,
      transition: 'all 0.3s ease-out'
    };
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

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-4 scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitScrollbarWidth: 'none'
          }}
        >
          {isLoading ? (
            Array(3).fill(0).map((_, index) => (
              <div key={index} className="flex-none w-full max-w-lg snap-center">
                <Card className="bg-white p-8 rounded-3xl border-0 mx-auto w-full">
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
              <div key={testimonial.id} className="flex-none w-full max-w-lg snap-center">
                <Card 
                  className="bg-white p-8 rounded-3xl border-0 card-hover mx-auto w-full"
                  style={getCardStyle(index)}
                >
                  <CardContent className="p-0">
                    <div className="flex text-yellow mb-6">
                      {Array(testimonial.rating).fill(0).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 mb-6 italic text-lg">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-bold text-yellow text-lg">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.position}</div>
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

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
