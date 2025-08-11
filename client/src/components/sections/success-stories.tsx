import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation";
import type { Testimonial } from "@shared/schema";

export default function SuccessStories() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  const { containerRef, visibleItems } = useStaggeredAnimation(testimonials?.length || 3, 150);

  return (
    <section className="py-20 cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Success <span className="text-yellow">Stories</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real achievements from professionals who trusted HireNET with their careers.
          </p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-3 gap-8">
          {isLoading ? (
            Array(3).fill(0).map((_, index) => (
              <Card key={index} className="bg-white p-8 rounded-3xl border-0">
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
                className={`
                  bg-white p-8 rounded-3xl border-0 card-hover
                  transition-all duration-700 ease-out
                  ${visibleItems.includes(index) 
                    ? 'animate-bounce-in opacity-100' 
                    : 'opacity-0 transform translate-y-8'
                  }
                `}
                style={{ animationDelay: `${index * 200}ms` }}
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
      </div>
    </section>
  );
}
