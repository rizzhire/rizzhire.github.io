import { Button } from "@/components/ui/button";
import ConsultationButton from "@/components/ui/consultation-button";
import { Upload, ArrowRight, Plus } from "lucide-react";
import { useCounter } from "@/hooks/use-counter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import indianEmblemImage from "@assets/emblem-of-india-logo-png_seeklogo-311715_1754816803273.png";
import { motion } from "framer-motion";

export default function Hero() {
  const placements = useCounter({ end: 18, duration: 2500 });
  const database = useCounter({ end: 35, duration: 2200, delay: 200 });
  const companies = useCounter({ end: 500, duration: 1800, delay: 400 });
  const countries = useCounter({ end: 7, duration: 1600, delay: 600 });
  const satisfaction = useCounter({ end: 98, duration: 2000, delay: 800 });

  // Scroll animations for hero content - slower and smoother timing
  const headingAnimation = useScrollAnimation({ 
    threshold: 0.1, 
    rootMargin: '0px 0px -200px 0px' 
  });
  const descriptionAnimation = useScrollAnimation({ 
    threshold: 0.1, 
    rootMargin: '0px 0px -200px 0px' 
  });
  const buttonAnimation = useScrollAnimation({ 
    threshold: 0.1, 
    rootMargin: '0px 0px -200px 0px' 
  });
  const certificationAnimation = useScrollAnimation({ 
    threshold: 0.1, 
    rootMargin: '0px 0px -100px 0px' 
  });


  return (
    <section id="home" className="relative h-auto cream overflow-hidden">
      {/* Enhanced Background Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Enhanced Live Moving Floating Circles - More Visible */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-200/20 to-yellow-300/30 rounded-full blur-xl animate-floatMoveEnhanced"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-200/18 to-cyan-200/28 rounded-full blur-lg animate-pulseEnhanced" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-orange-200/15 to-yellow-200/25 rounded-full blur-2xl animate-floatMoveEnhanced" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-gradient-to-r from-purple-200/18 to-pink-200/28 rounded-full blur-xl animate-rotateEnhanced" style={{animationDelay: '1.5s'}}></div>
        
        {/* Additional Enhanced Elements */}
        <div className="absolute top-1/2 left-8 w-20 h-20 bg-gradient-to-r from-emerald-200/20 to-green-200/30 rounded-full blur-lg animate-pulseEnhanced" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-60 right-12 w-16 h-16 bg-gradient-to-r from-rose-200/18 to-red-200/28 rounded-full blur-md animate-floatMoveEnhanced" style={{animationDelay: '4s'}}></div>
        
        {/* Enhanced Moving Geometric Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-8 animate-waveFlow" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="heroGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d="M0,300 Q250,100 500,300 T1000,300" stroke="url(#heroGradient1)" strokeWidth="2" fill="none"/>
          <path d="M0,200 Q300,400 600,200 T1000,200" stroke="url(#heroGradient1)" strokeWidth="1.5" fill="none"/>
        </svg>
        
        {/* Wavy Abstract Traveling Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="wavyGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0"/>
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="wavyGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0"/>
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.12"/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="wavyGradient3" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0"/>
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.13"/>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="wavyGradient4" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0"/>
              <stop offset="50%" stopColor="#f97316" stopOpacity="0.11"/>
              <stop offset="100%" stopColor="#f97316" stopOpacity="0"/>
            </linearGradient>
          </defs>
          

        </svg>
        
        {/* Very Light Dots Pattern */}
        <div className="absolute inset-0 opacity-2">
          <svg width="40" height="40" viewBox="0 0 40 40" className="w-full h-full">
            <pattern id="heroDotsPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#f59e0b" opacity="0.1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#heroDotsPattern)" />
          </svg>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="text-center space-y-4">
          <div 
            ref={headingAnimation.elementRef}
            className={`transition-all duration-[1800ms] ease-out ${
              headingAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Transform Your <span className="text-yellow">Workforce</span>
            </h1>
          </div>
          
          <div 
            ref={descriptionAnimation.elementRef}
            className={`transition-all duration-[1800ms] ease-out delay-300 ${
              descriptionAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed max-md:text-sm">
              Elite recruitment solutions connecting exceptional talent with 
              industry-leading organizations across the Middle East and beyond.
            </p>
          </div>
          
          <div 
            ref={buttonAnimation.elementRef}
            className={`flex justify-center items-center pt-2 transition-all duration-[1800ms] ease-out delay-500 ${
              buttonAnimation.isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-12 scale-95'
            }`}
          >
            <ConsultationButton className="" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 mb-0">
          <div className="grid grid-cols-5 gap-2 sm:gap-4 md:gap-8 max-w-6xl mx-auto px-2 sm:px-4">
            <div className="text-center">
              <div 
                ref={placements.ref}
                className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-yellow mb-1 sm:mb-2 md:mb-3 leading-none"
              >
                {placements.count}k
              </div>
              <div className="text-gray-600 font-medium leading-tight" style={{fontSize: '10px'}}>
                Successful<br/>Placements
              </div>
            </div>
            
            <div className="text-center">
              <div 
                ref={database.ref}
                className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-yellow mb-1 sm:mb-2 md:mb-3 leading-none flex items-center justify-center gap-1"
              >
                {database.count}k
                <Plus className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 animate-bounce" style={{animationDelay: '2.5s', opacity: database.count >= 35 ? 1 : 0, transition: 'opacity 0.3s'}} />
              </div>
              <div className="text-gray-600 font-medium leading-tight" style={{fontSize: '10px'}}>
                Database
              </div>
            </div>
            
            <div className="text-center">
              <div 
                ref={companies.ref}
                className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-yellow mb-1 sm:mb-2 md:mb-3 leading-none flex items-center justify-center gap-1"
              >
                {companies.count}
                <Plus className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 animate-bounce" style={{animationDelay: '2.7s', opacity: companies.count >= 500 ? 1 : 0, transition: 'opacity 0.3s'}} />
              </div>
              <div className="text-gray-600 font-medium leading-tight" style={{fontSize: '10px'}}>
                Partnered<br/>Companies
              </div>
            </div>
            
            <div className="text-center">
              <div 
                ref={countries.ref}
                className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-yellow mb-1 sm:mb-2 md:mb-3 leading-none flex items-center justify-center gap-1"
              >
                {countries.count}
                <Plus className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 animate-bounce" style={{animationDelay: '2.9s', opacity: countries.count >= 7 ? 1 : 0, transition: 'opacity 0.3s'}} />
              </div>
              <div className="text-gray-600 font-medium leading-tight" style={{fontSize: '10px'}}>
                Countries<br/>Served
              </div>
            </div>
            
            <div className="text-center">
              <div 
                ref={satisfaction.ref}
                className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-yellow mb-1 sm:mb-2 md:mb-3 leading-none"
              >
                {satisfaction.count}%
              </div>
              <div className="text-gray-600 font-medium leading-tight" style={{fontSize: '10px'}}>
                Success<br/>Rate
              </div>
            </div>
          </div>
        </div>

        {/* Government Certification Section */}
        <div 
          ref={certificationAnimation.elementRef}
          className="max-w-4xl mx-auto px-2 sm:px-4 pt-4 sm:pt-4 mt-8"
        >
          <motion.div 
            initial={{ 
              opacity: 0, 
              y: 60,
              scale: 0.7,
              rotateY: -30
            }}
            animate={certificationAnimation.isVisible ? {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateY: 0
            } : {}}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 border border-gray-200/50 shadow-lg hover:shadow-xl hover:scale-[1.005] hover:-translate-y-0.5 hover:bg-white/90 cursor-pointer"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 min-h-[120px] sm:min-h-[160px]">
              {/* Indian Government Emblem */}
              <motion.div 
                initial={{ 
                  opacity: 0, 
                  y: 60,
                  scale: 0.7,
                  rotateY: -30
                }}
                animate={certificationAnimation.isVisible ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateY: 0
                } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="flex-shrink-0 h-full flex items-center"
              >
                <img 
                  src={indianEmblemImage} 
                  alt="Government of India Emblem" 
                  className="h-20 sm:h-24 md:h-32 w-auto object-contain filter sepia-[.8] hue-rotate-[40deg] saturate-[1.8] brightness-[1.1]"
                />
              </motion.div>

              {/* Certification Text */}
              <motion.div 
                initial={{ 
                  opacity: 0, 
                  y: 60,
                  scale: 0.7,
                  rotateY: -30
                }}
                animate={certificationAnimation.isVisible ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateY: 0
                } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="flex-1 text-center sm:text-left"
              >
                <h3 className="text-lg sm:text-lg md:text-xl font-bold text-gray-900 mb-1">
                  Approved By <span className="text-yellow">Government Of India</span>
                </h3>
                <p className="text-base sm:text-md md:text-lg text-gray-700 font-medium mb-2">
                  Ministry of External Affairs
                </p>
                <p className="text-sm sm:text-sm text-gray-600 leading-relaxed">
                  Officially recognized recruitment agency authorized to facilitate international employment 
                  opportunities for Indian professionals across the Middle East region.
                </p>
              </motion.div>

              {/* Verification Badge */}
              <motion.div 
                initial={{ 
                  opacity: 0, 
                  y: 60,
                  scale: 0.7,
                  rotateY: -30
                }}
                animate={certificationAnimation.isVisible ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateY: 0
                } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="flex-shrink-0"
              >
                <div className="bg-gradient-to-r from-yellow/20 to-yellow/30 rounded-2xl px-3 py-2 border border-yellow/30 hover:from-yellow/30 hover:to-yellow/40 hover:scale-[1.01] transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-2 text-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold text-gray-800">Verified • Government Approved</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
