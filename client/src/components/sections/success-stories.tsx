import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useRef, useState } from "react";
import type { Testimonial } from "@shared/schema";

export default function SuccessStories() {
  const { data: apiTestimonials, isLoading: apiLoading } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  // Sample testimonials data for immediate display
  const sampleTestimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Ahmed",
      position: "Marketing Director",
      company: "Dubai Holdings",
      location: "Dubai, UAE",
      quote: "HireNET transformed my career. Their team understood my goals and connected me with the perfect opportunity. The process was seamless and professional.",
      rating: 5,
      initials: "SA",
      photo: null
    },
    {
      id: 2,
      name: "Khalid Al-Rashid",
      position: "Senior Engineer",
      company: "ARAMCO",
      location: "Riyadh, Saudi Arabia", 
      quote: "Outstanding service! They matched me with a role that perfectly aligned with my skills and career aspirations. Highly recommended for professionals in the Gulf.",
      rating: 5,
      initials: "KA",
      photo: null
    },
    {
      id: 3,
      name: "Fatima Hassan",
      position: "Finance Manager",
      company: "Qatar National Bank",
      location: "Doha, Qatar",
      quote: "Professional, efficient, and results-driven. HireNET helped me secure my dream job in record time. Their industry expertise is unmatched.",
      rating: 5,
      initials: "FH", 
      photo: null
    },
    {
      id: 4,
      name: "Omar Mansouri",
      position: "Operations Head",
      company: "Emirates Group",
      location: "Abu Dhabi, UAE",
      quote: "The best recruitment experience I've ever had. They took care of everything from application to negotiation. Truly exceptional service.",
      rating: 5,
      initials: "OM",
      photo: null
    }
  ];

  const testimonials = apiTestimonials || sampleTestimonials;
  const isLoading = apiLoading && !testimonials.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Touch handling for swipe
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !testimonials?.length) return;

    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let isScrolling = false;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isScrolling = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!startX || !startY) return;
      
      currentX = e.touches[0].clientX;
      const diffX = Math.abs(currentX - startX);
      const diffY = Math.abs(e.touches[0].clientY - startY);

      // Determine if it's horizontal swipe
      if (diffX > diffY && diffX > 10) {
        isScrolling = true;
        e.preventDefault();
      }
    };

    const handleTouchEnd = () => {
      if (!isScrolling) return;

      const diff = startX - currentX;
      const threshold = 50;

      if (Math.abs(diff) > threshold && !isTransitioning) {
        if (diff > 0 && currentIndex < testimonials.length - 1) {
          // Swipe left - next slide
          setIsTransitioning(true);
          setCurrentIndex(currentIndex + 1);
          setTimeout(() => setIsTransitioning(false), 300);
        } else if (diff < 0 && currentIndex > 0) {
          // Swipe right - previous slide
          setIsTransitioning(true);
          setCurrentIndex(currentIndex - 1);
          setTimeout(() => setIsTransitioning(false), 300);
        }
      }

      startX = 0;
      startY = 0;
      currentX = 0;
      isScrolling = false;
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex, testimonials, isTransitioning]);

  const renderCurrentSlide = () => {
    if (!testimonials || testimonials.length === 0) return null;
    
    const testimonial = testimonials[currentIndex];
    return (
      <div 
        className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out"
        style={{
          transform: isTransitioning ? 'scale(0.9)' : 'scale(1)',
          opacity: isTransitioning ? 0.7 : 1
        }}
      >
        <Card className="bg-white p-8 rounded-3xl border-0 w-80 h-80 flex flex-col justify-between">
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

        <div className="relative w-full h-96 flex items-center justify-center">
          {/* Single Slide Display */}
          <div 
            ref={containerRef}
            className="relative w-full h-full touch-pan-y"
          >
            {isLoading ? (
              <div className="absolute inset-0 flex items-center justify-center">
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
              </div>
            ) : (
              renderCurrentSlide()
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
