import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

export default function SuccessStories() {
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Ahmed",
      position: "Marketing Director",
      company: "Dubai Holdings",
      location: "Dubai, UAE",
      quote: "HireNET transformed my career. Their team understood my goals and connected me with the perfect opportunity. The process was seamless and professional.",
      rating: 5,
      initials: "SA"
    },
    {
      id: 2,
      name: "Khalid Al-Rashid",
      position: "Senior Engineer",
      company: "ARAMCO",
      location: "Riyadh, Saudi Arabia", 
      quote: "Outstanding service! They matched me with a role that perfectly aligned with my skills and career aspirations. Highly recommended for professionals in the Gulf.",
      rating: 5,
      initials: "KA"
    },
    {
      id: 3,
      name: "Fatima Hassan",
      position: "Finance Manager",
      company: "Qatar National Bank",
      location: "Doha, Qatar",
      quote: "Professional, efficient, and results-driven. HireNET helped me secure my dream job in record time. Their industry expertise is unmatched.",
      rating: 5,
      initials: "FH"
    },
    {
      id: 4,
      name: "Omar Mansouri",
      position: "Operations Head",
      company: "Emirates Group",
      location: "Abu Dhabi, UAE",
      quote: "The best recruitment experience I've ever had. They took care of everything from application to negotiation. Truly exceptional service.",
      rating: 5,
      initials: "OM"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let startX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      
      if (Math.abs(diff) > 50) {
        if (diff > 0 && currentIndex < testimonials.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else if (diff < 0 && currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
      }
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex, testimonials]);

  return (
    <section className="py-20 cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Success <span className="text-yellow">Stories</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real achievements from professionals who trusted HireNET with their careers.
          </p>
        </div>

        {/* Horizontal Testimonials Container */}
        <div 
          ref={containerRef}
          className="w-full py-8"
          style={{ overflow: 'hidden' }}
        >
          <div 
            className="flex"
            style={{
              transform: `translateX(-${currentIndex * 320}px)`,
              transition: 'none'
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                style={{ width: '320px', flexShrink: 0 }}
              >
                <Card className="bg-white p-8 rounded-3xl border-0 w-80 h-80 mx-auto">
                  <CardContent className="p-0">
                    <div className="flex text-yellow mb-4">
                      {Array(testimonial.rating).fill(0).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 mb-4 italic text-lg">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
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
