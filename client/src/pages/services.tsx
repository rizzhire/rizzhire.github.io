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
      features: [
        "Skilled & Semi-skilled Labor Supply",
        "Professional Staff Deployment",
        "Temporary & Permanent Placements",
        "Multi-country Workforce Solutions",
        "Compliance & Documentation Support",
        "Training & Onboarding Programs"
      ],
      benefits: [
        "Reduced hiring costs and time-to-fill",
        "Access to pre-screened talent pool",
        "Flexible workforce scaling solutions",
        "Full regulatory compliance assurance"
      ],
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Management Consultancy Services",
      description: "Strategic business consulting to optimize your operations, enhance organizational efficiency, and drive sustainable growth in competitive markets.",
      features: [
        "Organizational Development & Restructuring",
        "Process Optimization & Automation",
        "Strategic Planning & Implementation",
        "Change Management Programs",
        "Performance Management Systems",
        "Leadership Development Initiatives"
      ],
      benefits: [
        "Enhanced operational efficiency",
        "Strategic competitive advantage",
        "Improved organizational culture",
        "Measurable ROI on investments"
      ],
      color: "from-green-500/20 to-green-600/20",
      iconColor: "text-green-600"
    },
    {
      icon: UserCheck,
      title: "Recruitment Consultancy Services",
      description: "End-to-end recruitment solutions connecting top talent with leading organizations across the Middle East and South Asia regions.",
      features: [
        "Executive Search & Selection",
        "Technical & Specialized Recruitment",
        "Bulk Hiring & Mass Recruitment",
        "Talent Acquisition Strategy",
        "Candidate Assessment & Evaluation",
        "Reference Checks & Background Verification"
      ],
      benefits: [
        "Access to exclusive talent networks",
        "Reduced time-to-hire by 60%",
        "Quality assurance guarantee",
        "Industry expertise across sectors"
      ],
      color: "from-yellow-500/20 to-yellow-600/20",
      iconColor: "text-yellow-600"
    }
  ];

  const industries = [
    {
      title: "Oil & Gas",
      description: "Specialized recruitment for upstream, downstream, and midstream operations across the Middle East energy sector.",
      roles: ["Petroleum Engineers", "Drilling Specialists", "Safety Managers", "Project Engineers"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&q=80"
    },
    {
      title: "Construction",
      description: "Comprehensive staffing solutions for mega projects, infrastructure development, and commercial construction.",
      roles: ["Project Managers", "Civil Engineers", "Site Supervisors", "Quantity Surveyors"],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=250&fit=crop&q=80"
    },
    {
      title: "IT & Technology",
      description: "Connecting innovative tech talent with leading digital transformation initiatives across the region.",
      roles: ["Software Developers", "Data Scientists", "Cybersecurity Experts", "Cloud Architects"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop&q=80"
    },
    {
      title: "Healthcare",
      description: "Specialized medical and healthcare recruitment ensuring quality patient care across diverse healthcare facilities.",
      roles: ["Doctors & Specialists", "Nurses", "Healthcare Administrators", "Medical Technicians"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop&q=80"
    },
    {
      title: "Hospitality",
      description: "Premium hospitality recruitment for luxury hotels, resorts, and tourism industry leaders in the Middle East.",
      roles: ["Hotel Managers", "Chefs", "Guest Relations", "Tourism Specialists"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop&q=80"
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
                    <h3 className="fluid-text-2xl font-semibold mb-4 text-gray-900">Key Features</h3>
                    <div className="grid gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="fluid-text-2xl font-semibold mb-4 text-gray-900">Key Benefits</h3>
                    <div className="grid gap-3">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="bg-yellow hover:bg-yellow/90 text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-[1.03]">
                    Learn More <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 px-4" style={{backgroundColor: '#F5F3EB'}}>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="fluid-text-4xl font-bold mb-6 text-gray-900">
              Industries We <span className="text-yellow">Serve</span>
            </h2>
            <p className="fluid-text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specialized expertise across key sectors driving the Middle East and South Asian economies.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {industries.map((industry, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="group bg-white rounded-3xl border-0 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={`${industry.title} industry professionals`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      style={{filter: 'saturate(0.8) brightness(0.9)'}}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{industry.title}</h3>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">{industry.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Key Roles:</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.roles.map((role, idx) => (
                          <span key={idx} className="px-3 py-1 bg-yellow/20 text-gray-700 rounded-full text-sm">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest Insights Blog Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="fluid-text-4xl font-bold mb-6 text-gray-900">
              Latest <span className="text-yellow">Insights</span>
            </h2>
            <p className="fluid-text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay informed with expert analysis and market insights from our recruitment specialists.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {blogPosts.map((post, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="group bg-white rounded-3xl border-0 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-yellow transition-colors duration-300">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{post.description}</p>
                    
                    <div className="flex items-center mb-4">
                      <img 
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&size=60&background=F5F3EB&color=1F2937&rounded=true`}
                        alt={`${post.author} profile`}
                        className="w-12 h-12 rounded-xl mr-3"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{post.author}</p>
                        <p className="text-sm text-gray-600">{post.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <Button variant="ghost" className="w-full text-yellow hover:bg-yellow/10 font-semibold transition-all duration-300 group-hover:bg-yellow group-hover:text-black">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
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