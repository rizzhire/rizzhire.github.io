import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { Testimonial } from "@shared/schema";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="cream p-6 rounded-3xl border-0 h-full">
      <CardContent className="p-0 h-full flex flex-col">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 mr-3 overflow-hidden rounded-2xl border-2 border-yellow/20 relative">
            <img 
              src={`/attached_assets/${testimonial.photo}`}
              alt={testimonial.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.log('Image failed to load:', testimonial.photo);
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.parentElement?.querySelector('.fallback-initials') as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="fallback-initials w-full h-full bg-yellow flex items-center justify-center absolute top-0 left-0" style={{ display: 'none' }}>
              <span className="text-black font-bold text-lg">{testimonial.initials}</span>
            </div>
          </div>
          <div className="flex text-yellow">
            {Array(testimonial.rating).fill(0).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
        </div>
        <blockquote className="text-gray-700 mb-4 italic text-sm flex-1">
          "{testimonial.quote}"
        </blockquote>
        <div className="text-sm mt-auto">
          <div className="font-bold">{testimonial.name}</div>
          <div className="text-gray-600">{testimonial.position}</div>
          <div className="text-gray-600">{testimonial.company}</div>
        </div>
      </CardContent>
    </Card>
  );
}
