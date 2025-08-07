import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { Testimonial } from "@shared/schema";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="cream p-6 rounded-3xl border-0">
      <CardContent className="p-0">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 mr-3 overflow-hidden rounded-2xl border-2 border-yellow/20 relative">
            {testimonial.photo ? (
              <img 
                src={`attached_assets/${testimonial.photo}`}
                alt={testimonial.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
            ) : null}
            <div className="w-full h-full bg-yellow flex items-center justify-center" style={{ display: testimonial.photo ? 'none' : 'flex' }}>
              <span className="text-black font-bold text-lg">{testimonial.initials}</span>
            </div>
          </div>
          <div className="flex text-yellow">
            {Array(testimonial.rating).fill(0).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
        </div>
        <blockquote className="text-gray-700 mb-4 italic text-sm">
          "{testimonial.quote}"
        </blockquote>
        <div className="text-sm">
          <div className="font-bold">{testimonial.name}</div>
          <div className="text-gray-600">{testimonial.position}</div>
          <div className="text-gray-600">{testimonial.company}</div>
        </div>
      </CardContent>
    </Card>
  );
}
