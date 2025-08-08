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
      <section className="py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
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
                <Card className="relative overflow-hidden bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 rounded-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                  
                  {/* Accent Border */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.accentColor} opacity-60`}></div>
                  
                  <CardContent className="relative p-8 lg:p-10">
                    {/* Title with Professional Typography */}
                    <div className="mb-8">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-gray-800 transition-colors duration-300">
                        {industry.title}
                      </h3>
                      <div className={`w-16 h-1 bg-gradient-to-r ${industry.accentColor} rounded-full group-hover:w-24 transition-all duration-500`}></div>
                    </div>

                    {/* Description with Professional Spacing */}
                    <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
                      {industry.description}
                    </p>

                    {/* Key Achievements - Corporate Style */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2 mb-4">
                        Key Achievements
                      </h4>
                      <div className="space-y-3">
                        {industry.keyStats.map((stat, idx) => (
                          <div key={idx} className="flex items-start group/item">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${industry.accentColor} mr-4 flex-shrink-0 mt-2.5 group-hover/item:scale-125 transition-transform duration-300`}></div>
                            <span className="text-gray-700 leading-relaxed font-medium">
                              {stat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Subtle Bottom Accent */}
                    <div className={`absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r ${industry.accentColor} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 px-4 overflow-hidden" style={{backgroundColor: '#F5F3EB'}}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50/30 to-gray-100/20"></div>
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
            </button>
            <button className="group border-2 border-gray-300 hover:border-yellow-400 text-gray-700 hover:text-gray-900 font-bold px-10 py-5 rounded-xl transition-all duration-300 hover:scale-[1.02] bg-white hover:bg-gray-50">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}