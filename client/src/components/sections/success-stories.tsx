import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useRef } from "react";
import type { Testimonial } from "@shared/schema";

export default function SuccessStories() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || !testimonials) return;

    const updateSlideStates = () => {
      const slides = scroller.querySelectorAll('.slide');
      const scrollerRect = scroller.getBoundingClientRect();
      const scrollerCenter = scrollerRect.left + scrollerRect.width / 2;

      slides.forEach((slide) => {
        const slideRect = slide.getBoundingClientRect();
        const slideCenter = slideRect.left + slideRect.width / 2;
        const distance = Math.abs(slideCenter - scrollerCenter);
        const maxDistance = scrollerRect.width / 2;
        
        // Calculate scale and opacity based on distance from center - much more sensitive
        const normalizedDistance = Math.min(distance / (maxDistance * 0.3), 1);
        const scale = 1 - normalizedDistance * 0.4; // Scale from 1 to 0.6
        const opacity = 1 - normalizedDistance * 0.8; // Opacity from 1 to 0.2
        
        (slide as HTMLElement).style.transform = `scale(${scale})`;
        (slide as HTMLElement).style.opacity = opacity.toString();
      });
    };

    // Update on scroll with throttling for performance
    let ticking = false;
    const throttledUpdate = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateSlideStates();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    scroller.addEventListener('scroll', throttledUpdate, { passive: true });
    
    // Initial update
    updateSlideStates();

    return () => {
      scroller.removeEventListener('scroll', throttledUpdate);
    };
  }, [testimonials]);

  const renderCard = (testimonial: Testimonial, index: number) => (
    <div 
      key={testimonial.id}
      className="slide flex-shrink-0 w-80 h-80 mx-2 transition-all duration-150 ease-out"
      style={{ scrollSnapAlign: 'center' }}
    >
      <Card className="bg-white p-8 rounded-3xl border-0 w-full h-full flex flex-col justify-between">
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

        <div className="relative w-full">
          {/* Horizontal Scroll Container */}
          <div
            ref={scrollerRef}
            className="flex overflow-x-auto py-8 px-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollBehavior: 'smooth'
            }}
          >
            {isLoading ? (
              Array(3).fill(0).map((_, index) => (
                <div key={index} className="flex-shrink-0 w-80 h-80 mx-4" style={{ scrollSnapAlign: 'center' }}>
                  <Card className="bg-white p-8 rounded-3xl border-0 w-full h-full">
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
              testimonials?.map((testimonial, index) => renderCard(testimonial, index))
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
