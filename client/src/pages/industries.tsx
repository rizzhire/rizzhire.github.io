import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Industries() {
  const industries = [
    {
      title: "Oil & Gas",
      description: "The backbone of the Middle East economy, we provide specialized talent for upstream, midstream, and downstream operations. Our extensive network includes petroleum engineers, geologists, drilling specialists, and safety experts who understand the unique challenges of working in desert environments and offshore platforms.",
      keyStats: [
        "Successful placements in major oil companies",
        "Partnerships with Saudi Aramco, ADNOC, and Kuwait Oil Company", 
        "High retention rate for senior technical positions",
        "Specialized in desert and offshore operations"
      ],
      gradient: "from-slate-900 via-slate-700 to-slate-900",
      accentColor: "from-blue-400 to-cyan-300"
    },
    {
      title: "Construction & Infrastructure",
      description: "Supporting the region's ambitious infrastructure development projects, we connect construction companies with skilled engineers, project managers, architects, and technical specialists. Our talent pool spans mega-projects from smart cities to transportation networks.",
      keyStats: [
        "100+ engineers placed in Vision 2030 projects",
        "Expertise in NEOM, Dubai Expo, and Qatar World Cup projects",
        "Strong network of civil, mechanical, and electrical engineers",
        "Specialized in green building and sustainable construction"
      ],
      gradient: "from-gray-900 via-gray-700 to-gray-900",
      accentColor: "from-orange-400 to-yellow-300"
    },
    {
      title: "Healthcare",
      description: "Meeting the growing demand for quality healthcare services, we provide medical professionals, nurses, healthcare administrators, and support staff. Our candidates are internationally certified and experienced in multicultural healthcare environments.",
      keyStats: [
        "100+ medical professionals placed annually",
        "Specialization in cardiology, oncology, and emergency medicine",
        "Multilingual healthcare professionals with cultural awareness"
      ],
      gradient: "from-zinc-900 via-zinc-700 to-zinc-900",
      accentColor: "from-emerald-400 to-teal-300"
    },
    {
      title: "Hospitality & Tourism",
      description: "Supporting the region's tourism growth, we place hospitality professionals, event managers, tour operators, and customer service specialists. Our candidates understand luxury service standards and cultural sensitivity required in the Middle East market.",
      keyStats: [
        "Hospitality professionals placed in luxury hotels",
        "Strong network in UAE, Saudi Arabia, and Qatar tourism sectors",
        "Multilingual candidates with cultural awareness training"
      ],
      gradient: "from-neutral-900 via-neutral-700 to-neutral-900",
      accentColor: "from-purple-400 to-pink-300"
    }
  ];

  return (
    <div className="min-h-screen" style={{backgroundColor: '#F5F3EB'}}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden" style={{backgroundColor: '#F5F3EB'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-gray-100/30"></div>
        
        {/* Light Background Graphics */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Circles */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-200/20 to-yellow-300/30 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-200/20 to-cyan-200/30 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-orange-200/15 to-yellow-200/25 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-gradient-to-r from-purple-200/20 to-pink-200/30 rounded-full blur-xl"></div>
          
          {/* Exact DNA-like Moving Graphics from Homepage */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600">
            <defs>
              <linearGradient id="industriesWavyGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0"/>
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="industriesWavyGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0"/>
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.12"/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="industriesWavyGradient3" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0"/>
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.13"/>
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="industriesWavyGradient4" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0"/>
                <stop offset="50%" stopColor="#f97316" stopOpacity="0.11"/>
                <stop offset="100%" stopColor="#f97316" stopOpacity="0"/>
              </linearGradient>
            </defs>
            
            {/* Smooth Wavy Path 1: Flowing diagonal wave */}
            <path 
              d="M-150,100 C-50,90 50,120 200,110 C350,100 500,140 650,130 C800,125 900,135 1150,180" 
              stroke="url(#industriesWavyGradient1)" 
              strokeWidth="1.5" 
              fill="none"
              className="animate-wavyTravel1"
              style={{animationDelay: '3s'}}
            />
            
            {/* Smooth Wavy Path 2: Elegant S-curve */}
            <path 
              d="M1150,250 C1050,240 950,270 800,260 C650,250 500,290 350,280 C200,275 100,285 -150,320" 
              stroke="url(#industriesWavyGradient2)" 
              strokeWidth="1.2" 
              fill="none"
              className="animate-wavyTravel2"
              style={{animationDelay: '7s'}}
            />
            
            {/* Smooth Wavy Path 3: Curved bottom flow */}
            <path 
              d="M1150,480 C1000,470 900,420 700,430 C500,440 350,400 200,410 C100,415 0,405 -150,380" 
              stroke="url(#industriesWavyGradient3)" 
              strokeWidth="1.4" 
              fill="none"
              className="animate-wavyTravel3"
              style={{animationDelay: '11s'}}
            />
            
            {/* Smooth Wavy Path 4: Gentle middle wave */}
            <path 
              d="M-150,350 C-50,340 50,380 200,370 C350,360 500,390 650,380 C800,375 900,385 1150,395" 
              stroke="url(#industriesWavyGradient4)" 
              strokeWidth="1.1" 
              fill="none"
              className="animate-wavyTravel4"
              style={{animationDelay: '15s'}}
            />
          </svg>
          
          {/* Geometric Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 600">
            <defs>
              <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,300 Q250,100 500,300 T1000,300" stroke="url(#lineGradient1)" strokeWidth="2" fill="none"/>
            <path d="M0,200 Q300,400 600,200 T1000,200" stroke="url(#lineGradient1)" strokeWidth="1" fill="none"/>
          </svg>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 tracking-tight">
              Industries We <span className="text-yellow bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">Serve</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Specialized workforce solutions across the Middle East's most critical sectors. 
              Ground-level talent acquisition for mass recruitment and operational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Light Background Graphics - Enhanced */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Moving Floating Circles */}
          <div className="absolute top-20 left-10 w-28 h-28 bg-gradient-to-r from-yellow-200/18 to-yellow-300/25 rounded-full blur-xl animate-floatMoveEnhanced"></div>
          <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-r from-blue-200/16 to-cyan-200/22 rounded-full blur-lg animate-pulseEnhanced" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-gradient-to-r from-orange-200/12 to-yellow-200/18 rounded-full blur-2xl animate-floatMoveEnhanced" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-gradient-to-r from-purple-200/16 to-pink-200/22 rounded-full blur-xl animate-rotateEnhanced" style={{animationDelay: '1.5s'}}></div>
          
          {/* Additional Enhanced Elements */}
          <div className="absolute top-1/2 left-8 w-18 h-18 bg-gradient-to-r from-emerald-200/18 to-green-200/24 rounded-full blur-lg animate-pulseEnhanced" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-60 right-12 w-14 h-14 bg-gradient-to-r from-rose-200/16 to-red-200/22 rounded-full blur-md animate-floatMoveEnhanced" style={{animationDelay: '4s'}}></div>
          
          {/* Enhanced Moving Geometric Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-8 animate-waveFlow" viewBox="0 0 1000 800">
            <defs>
              <linearGradient id="industriesMainGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.12"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,400 Q250,200 500,400 T1000,400" stroke="url(#industriesMainGradient1)" strokeWidth="2" fill="none"/>
            <path d="M0,300 Q300,500 600,300 T1000,300" stroke="url(#industriesMainGradient1)" strokeWidth="1.5" fill="none"/>
          </svg>
          
          {/* Wavy Abstract Traveling Lines - Similar to Hero */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 800">
            <defs>
              <linearGradient id="industriesSectionWavy1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0"/>
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.13"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="industriesSectionWavy2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0"/>
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.11"/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="industriesSectionWavy3" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0"/>
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.12"/>
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="industriesSectionWavy4" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0"/>
                <stop offset="50%" stopColor="#f97316" stopOpacity="0.10"/>
                <stop offset="100%" stopColor="#f97316" stopOpacity="0"/>
              </linearGradient>
            </defs>
            
            {/* Smooth Wavy Path 1: Flowing diagonal wave */}
            <path 
              d="M-150,200 C-50,190 50,220 200,210 C350,200 500,240 650,230 C800,225 900,235 1150,280" 
              stroke="url(#industriesSectionWavy1)" 
              strokeWidth="1.4" 
              fill="none"
              className="animate-wavyTravel1"
              style={{animationDelay: '5s'}}
            />
            
            {/* Smooth Wavy Path 2: Elegant S-curve */}
            <path 
              d="M1150,350 C1050,340 950,370 800,360 C650,350 500,390 350,380 C200,375 100,385 -150,420" 
              stroke="url(#industriesSectionWavy2)" 
              strokeWidth="1.1" 
              fill="none"
              className="animate-wavyTravel2"
              style={{animationDelay: '9s'}}
            />
            
            {/* Smooth Wavy Path 3: Curved bottom flow */}
            <path 
              d="M1150,580 C1000,570 900,520 700,530 C500,540 350,500 200,510 C100,515 25,505 -150,480" 
              stroke="url(#industriesSectionWavy3)" 
              strokeWidth="1.3" 
              fill="none"
              className="animate-wavyTravel3"
              style={{animationDelay: '13s'}}
            />
            
            {/* Smooth Wavy Path 4: Gentle middle wave */}
            <path 
              d="M-150,450 C-50,440 50,480 200,470 C350,460 500,490 650,480 C800,475 900,485 1150,495" 
              stroke="url(#industriesSectionWavy4)" 
              strokeWidth="1.0" 
              fill="none"
              className="animate-wavyTravel4"
              style={{animationDelay: '17s'}}
            />
          </svg>
          
          {/* Very Light Dots Pattern */}
          <div className="absolute inset-0 opacity-2">
            <svg width="40" height="40" viewBox="0 0 40 40" className="w-full h-full">
              <pattern id="industriesDotsPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="#f59e0b" opacity="0.08"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#industriesDotsPattern)" />
            </svg>
          </div>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {industries.map((industry, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="group"
              >
                <div className="relative overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-3 rounded-3xl group-hover:border-gray-200">
                  {/* Enhanced Background Effects */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-3 transition-opacity duration-700`}></div>
                  
                  {/* Multiple Accent Lines */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.accentColor} opacity-70`}></div>
                  <div className={`absolute top-1 left-0 right-0 h-px bg-gradient-to-r ${industry.accentColor} opacity-40`}></div>
                  
                  {/* Inner Glow Effect */}
                  <div className={`absolute inset-x-0 top-0 h-20 bg-gradient-to-b ${industry.accentColor} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative p-6 lg:p-8">
                    {/* Enhanced Title Section */}
                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${industry.accentColor} mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 tracking-tight group-hover:text-gray-800 transition-colors duration-300">
                          {industry.title}
                        </h3>
                      </div>
                      <div className={`w-16 h-1 bg-gradient-to-r ${industry.accentColor} rounded-full group-hover:w-24 transition-all duration-700`}></div>
                    </div>

                    {/* Improved Description Typography */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-normal">
                      {industry.description}
                    </p>

                    {/* Enhanced Key Achievements Section */}
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className={`w-6 h-px bg-gradient-to-r ${industry.accentColor} mr-2`}></div>
                        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                          Key Achievements
                        </h4>
                      </div>
                      <div className="space-y-3 pl-1">
                        {industry.keyStats.map((stat, idx) => (
                          <div key={idx} className="flex items-start group/item">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${industry.accentColor} mr-3 flex-shrink-0 mt-1.5 group-hover/item:scale-110 transition-transform duration-300`}></div>
                            <span className="text-gray-700 text-xs leading-relaxed font-medium">
                              {stat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Bottom Effects */}
                    <div className={`absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r ${industry.accentColor} opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    <div className={`absolute bottom-6 right-6 w-6 h-6 bg-gradient-to-r ${industry.accentColor} opacity-5 rounded-full group-hover:scale-150 group-hover:opacity-10 transition-all duration-500`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 px-4 overflow-hidden" style={{backgroundColor: '#F5F3EB'}}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50/30 to-gray-100/20"></div>
        
        {/* CTA Background Graphics */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 right-16 w-24 h-24 bg-gradient-to-r from-yellow-200/20 to-orange-200/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-16 left-16 w-32 h-32 bg-gradient-to-r from-blue-200/15 to-cyan-200/25 rounded-full blur-2xl"></div>
          
          {/* Decorative Lines */}
          <svg className="absolute bottom-0 left-0 w-full h-32 opacity-10" viewBox="0 0 1200 200">
            <defs>
              <linearGradient id="ctaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0"/>
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,100 Q300,50 600,100 T1200,100" stroke="url(#ctaGradient)" strokeWidth="3" fill="none"/>
            <path d="M0,120 Q400,80 800,120 T1200,120" stroke="url(#ctaGradient)" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        
        <motion.div 
          className="relative max-w-5xl mx-auto text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 tracking-tight">
            Don't See Your <span className="bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">Industry?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed font-light max-w-4xl mx-auto">
            Our expertise extends beyond these core sectors. Contact us to discuss your specific 
            workforce requirements and discover how we can support your mass recruitment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-black font-bold px-10 py-5 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl">
              <span className="relative z-10">Discuss Your Requirements</span>
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="group border-2 border-gray-300 hover:border-yellow-400 text-gray-700 hover:text-gray-900 font-bold px-10 py-5 rounded-xl transition-all duration-300 hover:scale-[1.02] bg-white hover:bg-gray-50">
              View Case Studies
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-50/50 to-orange-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}