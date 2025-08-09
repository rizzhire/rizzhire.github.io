import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  ArrowRight, 
  Users, 
  Globe, 
  Award, 
  TrendingUp, 
  Building, 
  CheckCircle,
  Target,
  Star,
  Calendar
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
      year: "2010",
      title: "Founded",
      description: "Started our journey from UAE with a vision to transform recruitment"
    },
    {
      year: "2015",
      title: "Regional Expansion",
      description: "Extended operations across GCC countries"
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

  const achievements = [
    {
      icon: Users,
      number: "15,000+",
      title: "Successful Placements",
      description: "Professionals placed across Middle East markets"
    },
    {
      icon: Building,
      number: "500+",
      title: "Partner Companies",
      description: "Leading organizations trust our recruitment expertise"
    },
    {
      icon: Globe,
      number: "7",
      title: "Countries Served",
      description: "Comprehensive coverage across GCC and MENA region"
    },
    {
      icon: Award,
      number: "98%",
      title: "Client Satisfaction",
      description: "Consistently exceeding client expectations and requirements"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We pursue the highest standards in every placement, ensuring perfect matches between talent and opportunities."
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "Transparent, honest relationships built on trust form the foundation of our long-term partnerships."
    },
    {
      icon: Star,
      title: "Innovation",
      description: "Leveraging cutting-edge technology and data analytics to revolutionize recruitment processes."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Committed to the continuous development of both our clients and the professionals we place."
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

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Mission</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our journey began with a simple belief: every organization deserves access to world-class talent, 
                  and every professional deserves opportunities that match their ambitions. This philosophy has guided 
                  us through over a decade of growth and success.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We specialize in connecting exceptional professionals with leading organizations across the Middle East, 
                  focusing on industries that drive regional economic growth including oil & gas, construction, healthcare, 
                  and emerging technology sectors.
                </p>
                <Button asChild className="bg-yellow hover:bg-yellow/90 text-black font-semibold px-8 py-3 rounded-xl">
                  <Link href="/contact">
                    Partner With Us <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-yellow mb-2">2010</div>
                      <div className="text-xl font-semibold text-gray-900 mb-2">Founded</div>
                      <p className="text-gray-600">Started our journey from UAE</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4" style={{backgroundColor: '#F2F0E8'}}>
        <div className="max-w-6xl mx-auto">
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
                From startup to industry leader, discover the key milestones that shaped our journey
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-yellow h-full"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                      <Card className="bg-white border-2 border-yellow/20 shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="text-2xl font-bold text-yellow mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="w-2 md:w-2/12 flex justify-center">
                      <div className="w-4 h-4 bg-yellow rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    
                    <div className="w-full md:w-5/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our <span className="text-yellow">Impact</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Numbers that reflect our commitment to excellence and the trust our clients place in us
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="text-center h-full bg-gradient-to-br from-gray-50 to-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-8">
                      <div className="inline-flex p-4 rounded-2xl bg-yellow/10 mb-4">
                        <achievement.icon className="w-8 h-8 text-yellow" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                      <p className="text-gray-600 text-sm">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4" style={{backgroundColor: '#F2F0E8'}}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our <span className="text-yellow">Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The principles that guide every decision and shape our relationships with clients and candidates
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full bg-white border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="inline-flex p-3 rounded-xl bg-yellow/10 flex-shrink-0">
                          <value.icon className="w-6 h-6 text-yellow" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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