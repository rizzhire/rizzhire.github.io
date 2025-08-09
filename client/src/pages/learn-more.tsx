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
      <section className="relative pt-32 pb-24 px-4 overflow-hidden" style={{backgroundColor: '#F2F0E8'}}>
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
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Discover the story behind the Middle East's premier recruitment consultancy. 
              From humble beginnings to industry leadership, our commitment to excellence drives everything we do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-20 px-4 bg-white overflow-hidden">
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
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Bridging <span className="text-yellow">Talent</span> & <span className="text-yellow">Opportunity</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Founded with a vision to bridge the gap between exceptional talent and leading organizations, 
                HireNET has evolved into the Middle East's premier recruitment consultancy.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-gray-900">Our Mission</h3>
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
        {/* Background Graphics */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Enhanced Live Moving Floating Circles */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-200/20 to-yellow-300/30 rounded-full blur-xl animate-floatMoveEnhanced"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-200/18 to-cyan-200/28 rounded-full blur-lg animate-pulseEnhanced" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-orange-200/15 to-yellow-200/25 rounded-full blur-2xl animate-floatMoveEnhanced" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-gradient-to-r from-purple-200/18 to-pink-200/28 rounded-full blur-xl animate-rotateEnhanced" style={{animationDelay: '1.5s'}}></div>
          
          {/* Additional Enhanced Elements */}
          <div className="absolute top-1/2 left-8 w-20 h-20 bg-gradient-to-r from-emerald-200/20 to-green-200/30 rounded-full blur-lg animate-pulseEnhanced" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-60 right-12 w-16 h-16 bg-gradient-to-r from-rose-200/18 to-red-200/28 rounded-full blur-md animate-floatMoveEnhanced" style={{animationDelay: '4s'}}></div>
          
          {/* Very Light Grid Pattern */}
          <div className="absolute inset-0 opacity-3">
            <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full">
              <pattern id="timelineLightGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="#f59e0b" opacity="0.04"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#timelineLightGrid)" />
            </svg>
          </div>
          
          {/* Subtle Geometric Shapes */}
          <div className="absolute top-1/4 right-1/5 w-8 h-8 bg-gradient-to-r from-yellow-200/6 to-orange-200/8 rotate-45 blur-sm"></div>
          <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-gradient-to-r from-blue-200/6 to-purple-200/8 rotate-12 blur-sm"></div>
          <div className="absolute top-2/3 right-1/3 w-10 h-2 bg-gradient-to-r from-green-200/6 to-emerald-200/8 rotate-45 blur-sm"></div>
          
          {/* Infinite Moving Geometric Lines - Enhanced */}
          <svg className="absolute inset-0 w-full h-full opacity-8 animate-waveFlow" viewBox="0 0 2000 600" style={{animationDuration: '20s'}}>
            <defs>
              <linearGradient id="timelineBgGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15"/>
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.08"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="timelineBgGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.12"/>
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.06"/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="timelineBgGradient3" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.10"/>
                <stop offset="50%" stopColor="#10b981" stopOpacity="0.05"/>
                <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
              </linearGradient>
            </defs>
            
            {/* Primary flowing waves */}
            <path d="M0,300 Q250,150 500,300 T1000,300 T1500,300 T2000,300" stroke="url(#timelineBgGradient1)" strokeWidth="2" fill="none"/>
            <path d="M0,200 Q300,350 600,200 T1200,200 T1800,200 T2400,200" stroke="url(#timelineBgGradient2)" strokeWidth="1.8" fill="none"/>
            
            {/* Secondary wave patterns */}
            <path d="M0,450 Q400,300 800,450 T1600,450 T2400,450" stroke="url(#timelineBgGradient1)" strokeWidth="1.5" fill="none" opacity="0.7"/>
            <path d="M0,100 Q350,250 700,100 T1400,100 T2100,100" stroke="url(#timelineBgGradient3)" strokeWidth="1.2" fill="none" opacity="0.8"/>
            
            {/* Subtle background flows */}
            <path d="M0,380 Q500,200 1000,380 T2000,380" stroke="url(#timelineBgGradient2)" strokeWidth="1" fill="none" opacity="0.5"/>
            <path d="M0,150 Q600,400 1200,150 T2400,150" stroke="url(#timelineBgGradient1)" strokeWidth="1" fill="none" opacity="0.6"/>
            
            {/* Additional flowing elements */}
            <path d="M0,520 Q450,350 900,520 T1800,520" stroke="url(#timelineBgGradient3)" strokeWidth="0.8" fill="none" opacity="0.4"/>
            <path d="M0,80 Q550,300 1100,80 T2200,80" stroke="url(#timelineBgGradient2)" strokeWidth="0.8" fill="none" opacity="0.5"/>
          </svg>
          
          {/* Additional Moving Lines Layer */}
          <svg className="absolute inset-0 w-full h-full opacity-6 animate-waveFlowReverse" viewBox="0 0 1800 500" style={{animationDuration: '25s'}}>
            <defs>
              <linearGradient id="timelineBgGradient4" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.12"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="timelineBgGradient5" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.10"/>
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
              </linearGradient>
            </defs>
            
            {/* Reverse flowing waves */}
            <path d="M1800,250 Q1500,100 1200,250 T600,250 T0,250" stroke="url(#timelineBgGradient4)" strokeWidth="1.5" fill="none"/>
            <path d="M1800,350 Q1400,200 1000,350 T200,350" stroke="url(#timelineBgGradient5)" strokeWidth="1.2" fill="none" opacity="0.8"/>
            <path d="M1800,150 Q1300,300 800,150 T0,150" stroke="url(#timelineBgGradient4)" strokeWidth="1" fill="none" opacity="0.6"/>
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
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Key milestones that shaped our journey to industry leadership
              </p>
            </motion.div>

            <div className="relative">
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-yellow via-yellow to-yellow/30 h-full rounded-full shadow-sm"></div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.8 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} group`}
                  >
                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="relative">
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3 group-hover:border-yellow/30">
                          {/* Decorative Elements */}
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow rounded-full opacity-20"></div>
                          <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-yellow/30 rounded-full"></div>
                          
                          {/* Year Badge */}
                          <div className="inline-flex items-center mb-6">
                            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow via-yellow to-yellow/80 text-black font-bold text-2xl rounded-2xl shadow-lg mr-4">
                              {milestone.year.slice(-2)}
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-gray-900">{milestone.year}</div>
                              <div className="text-sm text-gray-500 uppercase tracking-wide">Milestone</div>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow transition-colors duration-300">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {milestone.description}
                          </p>
                          
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-yellow/0 via-yellow/5 to-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
                        </div>
                        
                        {/* Connecting Arrow */}
                        <div className={`hidden md:block absolute top-1/2 ${index % 2 === 0 ? '-right-6' : '-left-6'} transform -translate-y-1/2`}>
                          <div className={`w-8 h-0.5 bg-gradient-to-${index % 2 === 0 ? 'r' : 'l'} from-yellow to-transparent`}></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="w-2 md:w-2/12 flex justify-center relative z-10">
                      <motion.div 
                        className="w-6 h-6 bg-yellow rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300"
                        whileHover={{ scale: 1.3 }}
                      >
                        <div className="w-full h-full bg-gradient-to-br from-yellow to-yellow/70 rounded-full"></div>
                      </motion.div>
                    </div>
                    
                    {/* Spacer */}
                    <div className="w-full md:w-5/12"></div>
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
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
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