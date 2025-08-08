import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, UserCheck, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

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
      <section className="pt-32 pb-20 px-4" style={{backgroundColor: '#F5F3EB'}}>
        <motion.div 
          className="max-w-6xl mx-auto text-center"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1 
            className="fluid-text-5xl font-bold mb-6 text-gray-900"
            variants={fadeInUp}
          >
            Our <span className="text-yellow">Services</span>
          </motion.h1>
          <motion.p 
            className="fluid-text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Comprehensive recruitment and consulting solutions designed to drive your organization's success 
            through strategic talent acquisition and business optimization.
          </motion.p>
        </motion.div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid gap-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="grid lg:grid-cols-2 gap-12 items-center"
                variants={fadeInUp}
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
          </motion.div>
        </div>
      </section>





      {/* Call to Action */}
      <section className="py-20 px-4" style={{backgroundColor: '#F5F3EB'}}>
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="fluid-text-4xl font-bold mb-6 text-gray-900"
            variants={fadeInUp}
          >
            Ready to <span className="text-yellow">Transform</span> Your Business?
          </motion.h2>
          <motion.p 
            className="fluid-text-xl text-gray-600 mb-8 leading-relaxed"
            variants={fadeInUp}
          >
            Partner with HireNET to unlock your organization's full potential through strategic talent solutions.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button className="bg-yellow hover:bg-yellow/90 text-black font-semibold px-12 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-[1.03]">
              Get Started Today <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}