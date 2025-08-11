import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  ArrowRight
} from "lucide-react";

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

export default function LearnMore() {
  const milestones = [
    {
      year: "2015",
      title: "Regional Expansion",
      description: "Extended operations across GCC countries with strategic partnerships"
    },
    {
      year: "2018",
      title: "Digital Transformation",
      description: "Pioneered AI-powered recruitment solutions in the Middle East"
    },
    {
      year: "2020",
      title: "Industry Leadership",
      description: "Recognized as leading recruitment consultancy with 10,000+ placements"
    },
    {
      year: "2023",
      title: "Innovation Hub",
      description: "Launched advanced talent analytics and workforce planning services"
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Expanding to global markets while maintaining regional expertise"
    }
  ];



  return (
    <div className="min-h-screen" style={{backgroundColor: '#F2F0E8'}}>
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 px-4 overflow-hidden" style={{backgroundColor: '#F2F0E8'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/20 via-transparent to-yellow-200/15"></div>
        
        {/* Light Background Graphics */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Enhanced Live Moving Floating Circles */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-200/20 to-yellow-300/30 rounded-full blur-xl animate-floatMoveEnhanced"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-200/18 to-cyan-200/28 rounded-full blur-lg animate-pulseEnhanced" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-orange-200/15 to-yellow-200/25 rounded-full blur-2xl animate-floatMoveEnhanced" style={{animationDelay: '2s'}}></div>
          
          {/* Infinite Moving Geometric Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-8 animate-waveFlow" viewBox="0 0 2000 600" style={{animationDuration: '20s'}}>
            <defs>
              <linearGradient id="learnMoreHeroGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,300 Q250,100 500,300 T1000,300 T1500,300 T2000,300" stroke="url(#learnMoreHeroGradient1)" strokeWidth="2" fill="none"/>
            <path d="M0,200 Q300,400 600,200 T1000,200 T1400,200 T1800,200 T2200,200" stroke="url(#learnMoreHeroGradient1)" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 tracking-tight">
              Our <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent">Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 max-md:text-sm">Discover the story behind the Middle East's premier recruitment firm. From humble beginnings to industry leadership, our commitment to excellence drives everything we do.</p>
          </motion.div>
        </div>
      </section>
      {/* Our Story Section */}
      <section className="relative py-12 px-4 bg-white overflow-hidden">
        {/* Light Background Graphics */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-32 w-16 h-16 bg-gradient-to-r from-yellow-300/10 to-orange-300/15 rounded-lg rotate-12 blur-sm"></div>
          <div className="absolute bottom-32 left-20 w-20 h-20 bg-gradient-to-r from-blue-300/10 to-cyan-300/15 rounded-full blur-md"></div>
          
          {/* Decorative Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-8" viewBox="0 0 800 600">
            <defs>
              <linearGradient id="storyBg1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,300 Q200,200 400,300 T800,300" stroke="url(#storyBg1)" strokeWidth="1" fill="none"/>
            <path d="M0,350 Q250,250 500,350 T800,350" stroke="url(#storyBg1)" strokeWidth="0.8" fill="none" opacity="0.6"/>
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >


            <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Our journey began with a simple belief: every organization deserves access to world-class talent, 
                  and every professional deserves opportunities that match their ambitions. This philosophy has guided 
                  us through over a decade of growth and success in the dynamic Middle Eastern market.
                </p>
                <p>
                  We specialize in connecting exceptional professionals with leading organizations across the Middle East, 
                  focusing on industries that drive regional economic growth including oil & gas, construction, healthcare, 
                  technology, and emerging sectors that shape the future of the region.
                </p>
                <p>
                  At HireNET, we understand that successful recruitment goes beyond matching skills to job descriptions. 
                  We focus on cultural alignment, career aspirations, and long-term organizational goals to create 
                  partnerships that drive sustainable growth for both employers and professionals.
                </p>
                <p>
                  Our comprehensive approach combines deep market knowledge with innovative recruitment technologies, 
                  ensuring we deliver not just candidates, but the right talent solutions that transform businesses 
                  and accelerate career trajectories across diverse industries and markets.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Timeline Section */}
      <section className="relative py-20 px-4 overflow-hidden" style={{backgroundColor: '#F2F0E8'}}>
        {/* Background Graphics - Exact same as Our Journey banner */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Pure color blends - no visible shapes */}
          <div className="absolute top-40 left-20 w-40 h-40 bg-gradient-radial from-yellow-300/8 via-yellow-200/4 to-transparent animate-floatMoveEnhanced" style={{filter: 'blur(80px)'}}></div>
          <div className="absolute top-20 right-32 w-48 h-48 bg-gradient-radial from-blue-200/6 via-cyan-200/3 to-transparent animate-pulseEnhanced" style={{filter: 'blur(100px)', animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-56 h-56 bg-gradient-radial from-orange-200/5 via-yellow-200/3 to-transparent animate-floatMoveEnhanced" style={{filter: 'blur(120px)', animationDelay: '2s'}}></div>
          
          {/* Same flowing lines as Our Journey banner */}
          <svg className="absolute inset-0 w-full h-full opacity-8 animate-waveFlow" viewBox="0 0 2000 600" style={{animationDuration: '20s'}}>
            <defs>
              <linearGradient id="timelineJourneyGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,300 Q250,100 500,300 T1000,300 T1500,300 T2000,300" stroke="url(#timelineJourneyGradient1)" strokeWidth="2" fill="none"/>
            <path d="M0,200 Q300,400 600,200 T1000,200 T1400,200 T1800,200 T2200,200" stroke="url(#timelineJourneyGradient1)" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our <span className="text-yellow">Evolution</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 max-md:text-sm">
                Key milestones that shaped our journey to industry leadership
              </p>
            </motion.div>

            <div className="relative">
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-yellow via-yellow to-yellow/30 h-full rounded-full shadow-sm"></div>
              
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} group relative`}
                  >
                    {/* Milestone-specific Subtle Lines */}
                    {(milestone.title.includes("Regional Expansion") || 
                      milestone.title.includes("Digital Transformation") || 
                      milestone.title.includes("Industry Leadership") || 
                      milestone.title.includes("Innovation Hub") || 
                      milestone.title.includes("Future Vision")) && (
                      <svg className="absolute inset-0 w-full h-full opacity-1 pointer-events-none" viewBox="0 0 800 200">
                        <path d="M0,100 Q200,80 400,100 T800,100" stroke="#8B7355" strokeWidth="0.4" fill="none" className="animate-waveFlow" style={{animationDuration: '30s'}} opacity="0.15"/>
                      </svg>
                    )}
                    
                    {/* Content Card - Compact */}
                    <div className={`w-full md:w-9/12 ${index % 2 === 0 ? 'pr-2 md:pr-3' : 'pl-2 md:pl-3'}`}>
                      <div className="relative">
                        <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-400 group-hover:-translate-y-2 group-hover:border-yellow/30">
                          {/* Decorative Elements - Smaller */}
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow rounded-full opacity-20"></div>
                          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-yellow/30 rounded-full"></div>
                          
                          {/* Year Badge - Compact */}
                          <div className="inline-flex items-center mb-3">
                            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow via-yellow to-yellow/80 text-black font-bold text-lg rounded-xl shadow-md mr-3">
                              {milestone.year.slice(-2)}
                            </div>
                            <div className="text-right">
                              <div className="text-xl font-bold text-gray-900">{milestone.year}</div>
                              <div className="text-xs text-gray-500 uppercase tracking-wide">Milestone</div>
                            </div>
                          </div>
                          
                          {/* Content - Compact */}
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-yellow transition-colors duration-300">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {milestone.description}
                          </p>
                          
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-yellow/0 via-yellow/3 to-yellow/8 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl pointer-events-none"></div>
                        </div>
                        
                        {/* Connecting Arrow - Smaller */}
                        <div className={`hidden md:block absolute top-1/2 ${index % 2 === 0 ? '-right-4' : '-left-4'} transform -translate-y-1/2`}>
                          <div className={`w-6 h-0.5 bg-gradient-to-${index % 2 === 0 ? 'r' : 'l'} from-yellow to-transparent`}></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Timeline Dot - Smaller */}
                    <div className="w-2 md:w-1/12 flex justify-center relative z-10">
                      <motion.div 
                        className="w-5 h-5 bg-yellow rounded-full border-3 border-white shadow-md group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ scale: 1.2 }}
                      >
                        <div className="w-full h-full bg-gradient-to-br from-yellow to-yellow/70 rounded-full"></div>
                      </motion.div>
                    </div>
                    
                    {/* Spacer */}
                    <div className="w-full md:w-2/12"></div>
                  </motion.div>
                ))}
              </div>
              
              {/* Timeline End Cap */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow rounded-full border-2 border-white shadow-lg"></div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ready to Start Your <span className="text-yellow">Journey</span>?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 max-md:text-sm mb-8">
              Whether you're seeking exceptional talent or exploring new career opportunities, 
              we're here to make meaningful connections that drive success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-yellow hover:bg-yellow/90 text-black font-semibold px-8 py-3 rounded-xl">
                <Link href="/contact">
                  Get Started <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-gray-300 hover:border-yellow font-semibold px-8 py-3 rounded-xl">
                <Link href="/services">
                  Our Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}