import { Button } from "@/components/ui/button";
import { Upload, ArrowRight, Plus } from "lucide-react";
import { useCounter } from "@/hooks/use-counter";

export default function Hero() {
  const placements = useCounter({ end: 10000, duration: 2500 });
  const companies = useCounter({ end: 500, duration: 2200, delay: 200 });
  const countries = useCounter({ end: 15, duration: 1800, delay: 400 });
  const satisfaction = useCounter({ end: 98, duration: 2000, delay: 600 });

  return (
    <section id="home" className="relative min-h-screen cream overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gray-400 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-yellow rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Transform Your <span className="text-yellow">Workforce</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Elite recruitment solutions connecting exceptional talent with 
            industry-leading organizations across the Middle East and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button className="bg-yellow text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow/90 transition-all duration-300 hover:scale-105 shadow-lg btn-hover ripple">
              Get Started Today
            </Button>
            <Button variant="outline" className="border-2 border-dark-gray text-dark-gray px-8 py-4 rounded-full font-semibold hover:bg-dark-gray hover:text-white transition-all duration-300 btn-hover ripple">
              Schedule Consultation
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <div className="text-center">
            <div 
              ref={placements.ref}
              className="text-4xl md:text-5xl font-bold text-yellow flex items-center justify-center gap-1"
            >
              {placements.count.toLocaleString()}
              <Plus className="w-6 h-6 animate-bounce" style={{animationDelay: '2.5s', opacity: placements.count >= 10000 ? 1 : 0, transition: 'opacity 0.3s'}} />
            </div>
            <div className="text-gray-600 mt-2">Successful Placements</div>
          </div>
          <div className="text-center">
            <div 
              ref={companies.ref}
              className="text-4xl md:text-5xl font-bold text-yellow flex items-center justify-center gap-1"
            >
              {companies.count}
              <Plus className="w-6 h-6 animate-bounce" style={{animationDelay: '2.7s', opacity: companies.count >= 500 ? 1 : 0, transition: 'opacity 0.3s'}} />
            </div>
            <div className="text-gray-600 mt-2">Partner Companies</div>
          </div>
          <div className="text-center">
            <div 
              ref={countries.ref}
              className="text-4xl md:text-5xl font-bold text-yellow flex items-center justify-center gap-1"
            >
              {countries.count}
              <Plus className="w-6 h-6 animate-bounce" style={{animationDelay: '2.9s', opacity: countries.count >= 15 ? 1 : 0, transition: 'opacity 0.3s'}} />
            </div>
            <div className="text-gray-600 mt-2">Countries Served</div>
          </div>
          <div className="text-center">
            <div 
              ref={satisfaction.ref}
              className="text-4xl md:text-5xl font-bold text-yellow flex items-center justify-center gap-1"
            >
              {satisfaction.count}%
              <Plus className="w-6 h-6 animate-bounce" style={{animationDelay: '3.1s', opacity: satisfaction.count >= 98 ? 1 : 0, transition: 'opacity 0.3s'}} />
            </div>
            <div className="text-gray-600 mt-2">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
