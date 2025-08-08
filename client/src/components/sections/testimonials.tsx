import TestimonialCard from "@/components/ui/testimonial-card";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="relative py-20 px-4 bg-cream overflow-hidden">
      {/* Light Background Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Live Moving Floating Circles */}
        <div className="absolute top-16 left-16 w-24 h-24 bg-gradient-to-r from-yellow-200/8 to-orange-200/12 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-16 right-16 w-32 h-32 bg-gradient-to-r from-blue-200/6 to-cyan-200/10 rounded-full blur-2xl animate-floatMove"></div>
        <div className="absolute top-1/2 left-8 w-16 h-16 bg-gradient-to-r from-purple-200/6 to-pink-200/10 rounded-full blur-lg animate-rotate"></div>
        
        {/* Live Moving Wave Pattern */}
        <svg className="absolute top-0 right-0 w-full h-16 opacity-2 animate-waveFlow" viewBox="0 0 1200 100">
          <defs>
            <linearGradient id="testimonialsWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0"/>
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.08"/>
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d="M0,25 Q400,50 800,25 T1200,25" stroke="url(#testimonialsWaveGradient)" strokeWidth="1" fill="none"/>
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