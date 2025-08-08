import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Wrench, Monitor, Heart, Coffee } from "lucide-react";

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
      icon: Building2,
      title: "Oil & Gas",
      description: "The backbone of the Middle East economy, we provide specialized talent for upstream, midstream, and downstream operations. Our extensive network includes petroleum engineers, geologists, drilling specialists, and safety experts who understand the unique challenges of working in desert environments and offshore platforms.",
      keyStats: [
        "500+ successful placements in major oil companies",
        "Partnerships with Saudi Aramco, ADNOC, and Kuwait Oil Company",
        "95% retention rate for senior technical positions",
        "Average placement time: 45 days for specialized roles"
      ],
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Wrench,
      title: "Construction & Infrastructure",
      description: "Supporting the region's ambitious infrastructure development projects, we connect construction companies with skilled engineers, project managers, architects, and technical specialists. Our talent pool spans mega-projects from smart cities to transportation networks.",
      keyStats: [
        "300+ engineers placed in Vision 2030 projects",
        "Expertise in NEOM, Dubai Expo, and Qatar World Cup projects",
        "Strong network of civil, mechanical, and electrical engineers",
        "Specialized in green building and sustainable construction"
      ],
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: Monitor,
      title: "IT & Technology",
      description: "Driving digital transformation across the Middle East, we place software developers, cybersecurity experts, data scientists, and IT infrastructure specialists. Our candidates are equipped with the latest technologies and understand both global standards and regional requirements.",
      keyStats: [
        "200+ IT professionals placed in fintech startups",
        "Strong pipeline of AI and blockchain specialists",
        "Partnerships with major tech hubs in Dubai and Riyadh",
        "98% skill match rate for technical positions"
      ],
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Meeting the growing demand for quality healthcare services, we provide medical professionals, nurses, healthcare administrators, and support staff. Our candidates are internationally certified and experienced in multicultural healthcare environments.",
      keyStats: [
        "150+ medical professionals placed annually",
        "Specialization in cardiology, oncology, and emergency medicine",
        "Strong network of internationally trained doctors",
        "Expertise in telemedicine and digital health platforms"
      ],
      bgColor: "bg-gradient-to-br from-red-50 to-red-100",
      iconColor: "text-red-600"
    },
    {
      icon: Coffee,
      title: "Hospitality & Tourism",
      description: "Supporting the region's tourism growth, we place hospitality professionals, event managers, tour operators, and customer service specialists. Our candidates understand luxury service standards and cultural sensitivity required in the Middle East market.",
      keyStats: [
        "400+ hospitality professionals placed in luxury hotels",
        "Expertise in event management for international conferences",
        "Strong network in UAE, Saudi Arabia, and Qatar tourism sectors",
        "Multilingual candidates with cultural awareness training"
      ],
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen" style={{backgroundColor: '#F5F3EB'}}>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4" style={{backgroundColor: '#F5F3EB'}}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="fluid-text-5xl font-bold mb-6 text-gray-900">
              Industries We <span className="text-yellow">Serve</span>
            </h1>
            <p className="fluid-text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Specialized recruitment solutions across the Middle East's most dynamic sectors. Our deep industry expertise ensures perfect talent matching for your organization's unique requirements.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow mb-2">1,500+</div>
                <div className="text-sm text-gray-600">Successful Placements</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow mb-2">15+</div>
                <div className="text-sm text-gray-600">Industry Sectors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow mb-2">7</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow mb-2">97%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {industries.map((industry, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className={`${industry.bgColor} p-8 rounded-3xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group h-full backdrop-blur-sm`}>
                  <CardContent className="p-0 h-full flex flex-col">
                    {/* Icon and Title */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <industry.icon className={`h-8 w-8 ${industry.iconColor}`} />
                      </div>
                      <h3 className="fluid-text-2xl font-bold text-gray-900 leading-tight">
                        {industry.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                      {industry.description}
                    </p>

                    {/* Key Statistics */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Key Achievements</h4>
                      {industry.keyStats.map((stat, idx) => (
                        <div key={idx} className="flex items-start text-sm">
                          <div className="w-2 h-2 bg-yellow rounded-full mr-3 flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700 leading-relaxed">{stat}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
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
          variants={fadeInUp}
        >
          <h2 className="fluid-text-4xl font-bold mb-6 text-gray-900">
            Don't See Your <span className="text-yellow">Industry?</span>
          </h2>
          <p className="fluid-text-xl text-gray-600 mb-8 leading-relaxed">
            Our expertise extends beyond these core sectors. Contact us to discuss your specific industry requirements and discover how we can support your talent acquisition needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow hover:bg-yellow/90 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Discuss Your Requirements
            </button>
            <button className="border-2 border-gray-300 hover:border-yellow text-gray-700 hover:text-yellow font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}