import TestimonialCard from "@/components/ui/testimonial-card";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="relative py-20 px-4 bg-cream overflow-hidden">
      {/* Light Background Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Circles */}
        <div className="absolute top-16 left-16 w-24 h-24 bg-gradient-to-r from-yellow-200/20 to-orange-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-16 right-16 w-32 h-32 bg-gradient-to-r from-blue-200/15 to-cyan-200/25 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-8 w-16 h-16 bg-gradient-to-r from-purple-200/15 to-pink-200/25 rounded-full blur-lg"></div>
        
        {/* Subtle Patterns */}
        <svg className="absolute top-0 right-0 w-full h-32 opacity-6" viewBox="0 0 1200 200">
          <defs>
            <linearGradient id="testimonialsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0"/>
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d="M0,50 Q400,100 800,50 T1200,50" stroke="url(#testimonialsGradient)" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>
      
      <div className="relative max-w-6xl mx-auto">
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