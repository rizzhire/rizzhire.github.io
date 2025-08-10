import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, UserCheck, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import React from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Services() {
  // Initialize scroll animations using gold standard timing
  const heroAnimation = useScrollAnimation();
  const servicesAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();
  
  // Page load animation state
  const [pageLoaded, setPageLoaded] = React.useState(false);
  
  React.useEffect(() => {
    // Trigger page load animations after a brief delay
    const timer = setTimeout(() => setPageLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
  const services = [
    {
      icon: Users,
      title: "Manpower Supply Services",
      description: "Comprehensive workforce solutions tailored to meet your organization's specific requirements across all skill levels and industries.",
      detailedDescription: "Our manpower supply service goes beyond traditional staffing by providing comprehensive workforce solutions tailored to your organization's unique operational needs. We maintain an extensive database of over 10,000 pre-screened professionals across various skill levels, from entry-level positions to highly specialized technical roles.",
      approach: "Our systematic approach includes rigorous candidate screening, skills assessment, background verification, and cultural fit evaluation. We ensure all our supplied workforce meets international standards and local regulatory requirements, providing you with peace of mind and operational continuity.",
      outcomes: "Organizations partnering with us typically experience 60% faster hiring cycles, 40% reduction in recruitment costs, and 95% candidate retention rates within the first year of placement.",
      color: "from-blue-50 to-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Management Consultancy Services",
      description: "Strategic business consulting to optimize your operations, enhance organizational efficiency, and drive sustainable growth in competitive markets.",
      detailedDescription: "Our management consultancy services focus on transforming your business operations through strategic planning, process optimization, and organizational development. We work closely with your leadership team to identify inefficiencies, streamline workflows, and implement best practices that drive measurable results.",
      approach: "We employ a data-driven methodology that combines industry best practices with innovative solutions tailored to your specific market conditions. Our consultants bring deep expertise in change management, helping organizations navigate complex transformations while maintaining operational stability.",
      outcomes: "Clients typically achieve 40% improvement in operational efficiency, 25% reduction in operational costs, and measurable ROI within 6 months of implementation.",
      color: "from-green-50 to-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: UserCheck,
      title: "Recruitment Consultancy Services",
      description: "End-to-end recruitment solutions connecting top talent with leading organizations across the Middle East and South Asia regions.",
      detailedDescription: "Our recruitment consultancy service provides comprehensive talent acquisition solutions, from executive search for C-level positions to large-scale recruitment campaigns for operational roles. We leverage our extensive network and deep market knowledge to identify, attract, and secure the best talent for your organization.",
      approach: "We utilize advanced recruitment technologies, comprehensive market research, and personalized consultation to ensure perfect candidate-role alignment. Our process includes detailed job analysis, targeted sourcing strategies, rigorous assessment protocols, and ongoing support throughout the onboarding process.",
      outcomes: "We maintain a 97% successful placement rate with 6-month placement warranty, reduce average time-to-hire by 60%, and provide access to exclusive talent networks across 15+ industries.",
      color: "from-yellow-50 to-yellow-100",
      iconColor: "text-yellow-600"
    }
  ];



  const blogPosts = [
    {
      title: "Middle East Recruitment Trends 2025",
      description: "Analyzing the evolving job market dynamics and emerging opportunities across Gulf countries.",
      author: "Sarah Khan",
      role: "Senior Recruitment Analyst",
      date: "January 8, 2025",
      readTime: "5 min read"
    },
    {
      title: "Oil & Gas Sector Recovery: Talent Demand Surge",
      description: "How the energy sector's rebound is creating unprecedented demand for specialized professionals.",
      author: "Ahmed Al-Rashid",
      role: "Energy Sector Specialist",
      date: "January 5, 2025",
      readTime: "7 min read"
    },
    {
      title: "Digital Transformation in UAE: IT Jobs Boom",
      description: "Exploring the rapid growth of technology roles in the Emirates' digital economy.",
      author: "Priya Sharma",
      role: "Technology Recruitment Lead",
      date: "January 3, 2025",
      readTime: "4 min read"
    },
    {
      title: "Healthcare Recruitment Post-Pandemic",
      description: "Understanding the new dynamics of medical staffing in the post-COVID healthcare landscape.",
      author: "Dr. Fatima Al-Zahra",
      role: "Healthcare Recruitment Director",
      date: "December 30, 2024",
      readTime: "6 min read"
    },
    {
      title: "Construction Mega Projects: Workforce Planning",
      description: "Strategic insights into staffing large-scale infrastructure developments across the region.",
      author: "Mohammad Hassan",
      role: "Construction Sector Head",
      date: "December 28, 2024",
      readTime: "8 min read"
    }
  ];

  return (
    <div className="min-h-screen" style={{backgroundColor: '#F5F3EB'}}>
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-4 overflow-hidden" style={{backgroundColor: '#F5F3EB'}}>
        {/* Light Background Graphics */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Circles (Same as Get in Touch) */}
          <div className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-yellow-200/30 to-yellow-300/40 rounded-full blur-3xl animate-floatMove"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-200/25 to-cyan-200/35 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-gradient-to-r from-purple-200/20 to-pink-200/30 rounded-full blur-2xl animate-rotate" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-40 right-1/3 w-32 h-32 bg-gradient-to-r from-green-200/25 to-emerald-200/35 rounded-full blur-xl animate-bounce-slow" style={{animationDelay: '3s'}}></div>
          
          {/* Additional Floating Circles */}
          <div className="absolute bottom-40 left-1/3 w-28 h-28 bg-gradient-to-br from-yellow-300/20 to-orange-300/30 rounded-full blur-xl animate-spin-slow"></div>
          <div className="absolute top-32 right-1/4 w-24 h-24 bg-gradient-to-tl from-indigo-300/25 to-purple-300/35 rounded-full blur-xl animate-pulse"></div>
          
          {/* Live Moving Geometric Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-8 animate-waveFlow" viewBox="0 0 1000 400">
            <defs>
              <linearGradient id="servicesHeroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,200 Q250,100 500,200 T1000,200" stroke="url(#servicesHeroGradient)" strokeWidth="2" fill="none"/>
          </svg>
          
          {/* Wavy Abstract Traveling Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 400">
            <defs>
              <linearGradient id="servicesPageWavy1" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#eab308" stopOpacity="0"/>
                <stop offset="50%" stopColor="#eab308" stopOpacity="0.12"/>
                <stop offset="100%" stopColor="#eab308" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="servicesPageWavy2" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0"/>
                <stop offset="50%" stopColor="#2563eb" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0"/>
              </linearGradient>
            </defs>
            
            <path 
              d="M-150,120 C-50,110 100,140 300,130 C500,120 700,100 900,105 C1000,108 1100,110 1150,110" 
              stroke="url(#servicesPageWavy1)" 
              strokeWidth="1.3" 
              fill="none"
              className="animate-wavyTravel1"
              style={{animationDelay: '2s'}}
            />
            
            <path 
              d="M1150,320 C1050,310 900,350 700,340 C500,330 300,320 150,315 C50,312 -50,310 -150,310" 
              stroke="url(#servicesPageWavy2)" 
              strokeWidth="1.0" 
              fill="none"
              className="animate-wavyTravel2"
              style={{animationDelay: '5s'}}
            />
          </svg>
        </div>
        
        <div 
          className="relative max-w-6xl mx-auto text-center"
          ref={heroAnimation.elementRef}
        >
          <h1 
            className={`fluid-text-4xl lg:fluid-text-5xl font-bold mb-4 text-gray-900 transition-all duration-[1200ms] ${
              heroAnimation.isVisible || pageLoaded 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-12 scale-95'
            }`}
            style={{ 
              transitionDelay: (heroAnimation.isVisible || pageLoaded) ? '0ms' : '0ms',
              transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            Our <span className="text-yellow">Services</span>
          </h1>
          <p 
            className={`fluid-text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-[1200ms] ${
              heroAnimation.isVisible || pageLoaded 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-12 scale-95'
            }`}
            style={{ 
              transitionDelay: (heroAnimation.isVisible || pageLoaded) ? '200ms' : '0ms',
              transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            Comprehensive recruitment and consulting solutions designed to drive your organization's success 
            through strategic talent acquisition and business optimization.
          </p>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="relative py-20 px-4 bg-white overflow-hidden">
        {/* Light Background Graphics */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Very Light Dots Pattern */}
          <div className="absolute inset-0 opacity-2">
            <svg width="50" height="50" viewBox="0 0 50 50" className="w-full h-full">
              <pattern id="servicesDots" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="0.8" fill="#f59e0b" opacity="0.08"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#servicesDots)" />
            </svg>
          </div>
          
          {/* Floating Circles (Same as Get in Touch) */}
          <div className="absolute top-32 left-20 w-48 h-48 bg-gradient-to-r from-yellow-300/10 to-orange-300/15 rounded-full blur-3xl animate-floatMove"></div>
          <div className="absolute bottom-40 right-32 w-40 h-40 bg-gradient-to-r from-blue-300/10 to-cyan-300/15 rounded-full blur-2xl animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-10 w-36 h-36 bg-gradient-to-r from-purple-300/8 to-pink-300/12 rounded-full blur-2xl animate-rotate" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid gap-16">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                initial={{ 
                  opacity: 0, 
                  y: 60,
                  scale: 0.7,
                  rotateY: -30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateY: 0
                }}
                viewport={{ 
                  once: true, 
                  amount: 0.2,
                  margin: "0px 0px -200px 0px"
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className={`order-${index % 2 === 0 ? '1' : '2'}`}>
                  <div className={`bg-gradient-to-br ${service.color} rounded-3xl p-8 h-full`}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-4">
                        <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                      </div>
                      <h2 className="fluid-text-3xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">{service.description}</p>
                  </div>
                </div>
                
                <div className={`order-${index % 2 === 0 ? '2' : '1'} space-y-8`}>
                  <div>
                    <h3 className="fluid-text-2xl font-semibold mb-6 text-gray-900">Our Approach</h3>
                    <div className="space-y-6">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {service.detailedDescription}
                      </p>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {service.approach}
                      </p>
                      <div className="bg-yellow/10 border-l-4 border-yellow p-6 rounded-r-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Expected Outcomes</h4>
                        <p className="text-gray-700 leading-relaxed">
                          {service.outcomes}
                        </p>
                      </div>
                    </div>
                  </div>
                  

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>





      {/* Call to Action */}
      <section className="py-20 px-4" style={{backgroundColor: '#F5F3EB'}}>
        <div 
          className="max-w-4xl mx-auto text-center"
          ref={ctaAnimation.elementRef}
        >
          <h2 
            className={`fluid-text-4xl font-bold mb-6 text-gray-900 transition-all duration-[1200ms] ${
              ctaAnimation.isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-12 scale-95'
            }`}
            style={{ 
              transitionDelay: ctaAnimation.isVisible ? '0ms' : '0ms',
              transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            Ready to <span className="text-yellow">Transform</span> Your Business?
          </h2>
          <p 
            className={`fluid-text-xl text-gray-600 mb-8 leading-relaxed transition-all duration-[1200ms] ${
              ctaAnimation.isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-12 scale-95'
            }`}
            style={{ 
              transitionDelay: ctaAnimation.isVisible ? '200ms' : '0ms',
              transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            Partner with HireNET to unlock your organization's full potential through strategic talent solutions.
          </p>
          <div 
            className={`transition-all duration-[1200ms] ${
              ctaAnimation.isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-12 scale-95'
            }`}
            style={{ 
              transitionDelay: ctaAnimation.isVisible ? '400ms' : '0ms',
              transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            <Link href="/contact">
              <Button className="bg-yellow hover:bg-yellow/90 text-black font-semibold px-12 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-[1.03]">
                Get Started Today <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}