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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the section is visible
      const visibleTop = Math.max(0, -rect.top);
      const visibleBottom = Math.min(sectionHeight, windowHeight - rect.top);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      
      // Progress from 0 to 1 as we scroll through the section
      const progress = visibleHeight / windowHeight;
      setScrollProgress(progress);

      // Change slide based on scroll progress
      if (testimonials && testimonials.length > 0) {
        const totalSlides = testimonials.length;
        const slideIndex = Math.floor(progress * totalSlides);
        setCurrentIndex(Math.min(slideIndex, totalSlides - 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [testimonials]);

  const getCardTransform = (index: number) => {
    const distance = Math.abs(index - currentIndex);
    const scale = distance === 0 ? 1 : Math.max(0.7, 1 - distance * 0.3);
    const opacity = distance === 0 ? 1 : Math.max(0.3, 1 - distance * 0.4);
    const translateX = (index - currentIndex) * 20;
    
    return {
      transform: `scale(${scale}) translateX(${translateX}px)`,
      opacity,
      zIndex: distance === 0 ? 10 : 5 - distance
    };
  };

  return (
    <section ref={sectionRef} className="py-20 cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Success <span className="text-yellow">Stories</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real achievements from professionals who trusted HireNET with their careers.
          </p>
        </div>

        <div className="relative flex justify-center items-center min-h-[500px]">
          {isLoading ? (
            Array(3).fill(0).map((_, index) => (
              <Card key={index} className="absolute bg-white p-8 rounded-3xl border-0 w-80">
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
            ))
          ) : (
            testimonials?.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className="absolute bg-white p-8 rounded-3xl border-0 card-hover transition-all duration-300 ease-out w-80"
                style={getCardTransform(index)}
              >
                <CardContent className="p-0">
                  <div className="flex text-yellow mb-6">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-bold text-yellow">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.position}</div>
                    <div className="text-gray-600">{testimonial.company}</div>
                    <div className="text-gray-500 text-sm">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
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
