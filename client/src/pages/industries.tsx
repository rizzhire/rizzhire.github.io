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
        {/* Background Graphics */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Very Light Dots Pattern */}
          <div className="absolute inset-0 opacity-2">
            <svg width="45" height="45" viewBox="0 0 45 45" className="w-full h-full">
              <pattern id="industriesDots" width="45" height="45" patternUnits="userSpaceOnUse">
                <circle cx="22.5" cy="22.5" r="0.7" fill="#f59e0b" opacity="0.1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#industriesDots)" />
            </svg>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-32 left-20 w-16 h-16 bg-gradient-to-r from-yellow-300/10 to-orange-300/15 rounded-lg rotate-12 blur-sm"></div>
          <div className="absolute bottom-40 right-32 w-20 h-20 bg-gradient-to-r from-blue-300/10 to-cyan-300/15 rounded-full blur-md"></div>
          <div className="absolute top-1/2 left-10 w-12 h-12 bg-gradient-to-r from-purple-300/10 to-pink-300/15 rounded-full blur-sm"></div>
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