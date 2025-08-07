import TestimonialCard from "@/components/ui/testimonial-card";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-cream via-yellow/5 to-cream">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow">
            Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Trusted by <span className="font-semibold text-gray-700">leading organizations</span> across the Middle East for our exceptional recruitment solutions and dedicated service excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}