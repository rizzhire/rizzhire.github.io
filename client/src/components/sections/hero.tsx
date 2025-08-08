import { Button } from "@/components/ui/button";
import ConsultationButton from "@/components/ui/consultation-button";
import { Upload, ArrowRight, Plus } from "lucide-react";
import { useCounter } from "@/hooks/use-counter";

export default function Hero() {
  const placements = useCounter({ end: 18, duration: 2500 });
  const database = useCounter({ end: 35, duration: 2200, delay: 200 });
  const companies = useCounter({ end: 500, duration: 1800, delay: 400 });
  const countries = useCounter({ end: 7, duration: 1600, delay: 600 });
  const satisfaction = useCounter({ end: 98, duration: 2000, delay: 800 });

  return (
    <section id="home" className="relative min-h-screen cream overflow-hidden">
      {/* Enhanced Background Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-200/20 to-yellow-300/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-200/20 to-cyan-200/30 rounded-full blur-lg animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-orange-200/15 to-yellow-200/25 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-gradient-to-r from-purple-200/20 to-pink-200/30 rounded-full blur-xl animate-float" style={{animationDelay: '1.5s'}}></div>
        
        {/* Geometric Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-8" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="heroGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d="M0,300 Q250,100 500,300 T1000,300" stroke="url(#heroGradient1)" strokeWidth="2" fill="none"/>
          <path d="M0,200 Q300,400 600,200 T1000,200" stroke="url(#heroGradient1)" strokeWidth="1" fill="none"/>
        </svg>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-3">
          <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full">
            <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#d1d5db" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
          </svg>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-2">
        <div className="text-center space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Transform Your <span className="text-yellow">Workforce</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Elite recruitment solutions connecting exceptional talent with 
            industry-leading organizations across the Middle East and beyond.
          </p>
          <div className="flex justify-center items-center pt-8">
            <ConsultationButton className="animate-fade-in-up" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <div className="grid grid-cols-5 gap-8 max-w-6xl mx-auto px-4">
            <div className="text-center">
              <div 
                ref={placements.ref}
                className="text-4xl md:text-5xl font-bold text-yellow mb-3 leading-none"
              >
                {placements.count}k
              </div>
              <div className="text-gray-600 text-sm font-medium leading-tight">
                Successful<br/>Placements
              </div>
            </div>
            
            <div className="text-center">
              <div 
                ref={database.ref}
                className="text-4xl md:text-5xl font-bold text-yellow mb-3 leading-none flex items-center justify-center gap-1"
              >
                {database.count}k
                <Plus className="w-6 h-6 animate-bounce" style={{animationDelay: '2.5s', opacity: database.count >= 35 ? 1 : 0, transition: 'opacity 0.3s'}} />
              </div>
              <div className="text-gray-600 text-sm font-medium leading-tight">
                Database
              </div>
            </div>
            
            <div className="text-center">
              <div 
                ref={companies.ref}
                className="text-4xl md:text-5xl font-bold text-yellow mb-3 leading-none flex items-center justify-center gap-1"
              >
                {companies.count}
                <Plus className="w-6 h-6 animate-bounce" style={{animationDelay: '2.7s', opacity: companies.count >= 500 ? 1 : 0, transition: 'opacity 0.3s'}} />
              </div>
              <div className="text-gray-600 text-sm font-medium leading-tight">
                Partnered<br/>Companies
              </div>
            </div>
            
            <div className="text-center">
              <div 
                ref={countries.ref}
                className="text-4xl md:text-5xl font-bold text-yellow mb-3 leading-none flex items-center justify-center gap-1"
              >
                {countries.count}
                <Plus className="w-6 h-6 animate-bounce" style={{animationDelay: '2.9s', opacity: countries.count >= 7 ? 1 : 0, transition: 'opacity 0.3s'}} />
              </div>
              <div className="text-gray-600 text-sm font-medium leading-tight">
                Countries<br/>Served
              </div>
            </div>
            
            <div className="text-center">
              <div 
                ref={satisfaction.ref}
                className="text-4xl md:text-5xl font-bold text-yellow mb-3 leading-none"
              >
                {satisfaction.count}%
              </div>
              <div className="text-gray-600 text-sm font-medium leading-tight">
                Success<br/>Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
