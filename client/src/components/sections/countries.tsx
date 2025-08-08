import CountryFlag from "@/components/ui/country-flag";
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
};

export default function Countries() {
  const countries = [
    { name: "UAE", code: "ae" },
    { name: "Qatar", code: "qa" },
    { name: "Saudi Arabia", code: "sa" },
    { name: "Oman", code: "om" },
    { name: "Kuwait", code: "kw" },
    { name: "Bahrain", code: "bh" },
    { name: "Maldives", code: "mv" }
  ];

  const { containerRef, visibleItems } = useStaggeredAnimation(countries.length, 80);

  return (
    <section id="countries" className="relative py-20 cream overflow-hidden">
      {/* Light Background Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Elements */}
        <div className="absolute top-16 left-12 w-20 h-20 bg-gradient-to-r from-yellow-200/15 to-orange-200/20 rounded-full blur-xl animate-floatMove"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-blue-200/12 to-cyan-200/18 rounded-lg rotate-12 blur-lg animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-green-200/10 to-emerald-200/15 rounded-full blur-xl animate-floatMove" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-18 h-18 bg-gradient-to-r from-purple-200/12 to-pink-200/18 rounded-lg rotate-45 blur-lg animate-rotate"></div>
        
        {/* Geometric Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-8" viewBox="0 0 1000 400">
          <defs>
            <linearGradient id="countriesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d="M0,200 Q250,150 500,200 T1000,200" stroke="url(#countriesGradient)" strokeWidth="1.5" fill="none"/>
          <path d="M0,100 Q300,250 600,100 T1000,100" stroke="url(#countriesGradient)" strokeWidth="1" fill="none"/>
        </svg>
        
        {/* Wavy Traveling Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 400">
          <defs>
            <linearGradient id="countriesWavy1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0"/>
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="countriesWavy2" x1="100%" y1="50%" x2="0%" y2="50%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0"/>
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.09"/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
            </linearGradient>
          </defs>
          
          <path 
            d="M-150,120 C-50,110 100,140 350,130 C600,125 850,115 1150,120" 
            stroke="url(#countriesWavy1)" 
            strokeWidth="1.1" 
            fill="none"
            className="animate-wavyTravel1"
            style={{animationDelay: '6s'}}
          />
          
          <path 
            d="M1150,280 C1050,290 900,250 650,260 C400,265 200,285 -150,280" 
            stroke="url(#countriesWavy2)" 
            strokeWidth="0.9" 
            fill="none"
            className="animate-wavyTravel2"
            style={{animationDelay: '11s'}}
          />
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Countries We <span className="text-yellow">Serve</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expanding opportunities across strategic markets in the Middle East and Indian Ocean region.
          </p>
        </motion.div>

        <div ref={containerRef} className="flex flex-wrap justify-center items-center gap-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className={`
                transition-all duration-500 ease-out
                ${visibleItems.includes(index) 
                  ? 'animate-wave-slide opacity-100' 
                  : 'opacity-0 transform translate-y-4'
                }
              `}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <CountryFlag country={country.name} code={country.code} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
