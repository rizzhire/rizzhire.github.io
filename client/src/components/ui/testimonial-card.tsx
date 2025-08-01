import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { Testimonial } from "@shared/schema";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="cream p-8 rounded-3xl border-0">
      <CardContent className="p-0">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center mr-4">
            <span className="text-black font-bold text-xl">{testimonial.initials}</span>
          </div>
          <div className="flex text-yellow">
            {Array(testimonial.rating).fill(0).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
        </div>
        <blockquote className="text-gray-700 mb-6 italic">
          "{testimonial.quote}"
        </blockquote>
        <div>
          <div className="font-bold">{testimonial.name}</div>
          <div className="text-gray-600">{testimonial.position} at {testimonial.company}</div>
        </div>
      </CardContent>
    </Card>
  );
}
