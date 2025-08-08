import { Users, TrendingUp, UserCheck, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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

export default function Services() {
  const services = [
    {
      icon: Users,
      title: "Manpower Supply Services",
      description: "Comprehensive workforce solutions tailored to meet your organization's specific requirements across all skill levels and industries. Our expert team ensures seamless deployment of quality talent with full regulatory compliance.",
      keyBenefits: [
        "Reduced hiring costs and time-to-fill by 60%",
        "Access to pre-screened talent pool of 10,000+ professionals",
        "Flexible workforce scaling solutions for seasonal demands",
        "Full regulatory compliance assurance across 7 countries"
      ],
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      iconColor: "text-blue-600",
      accentColor: "from-blue-500/20 to-blue-600/30"
    },
    {
      icon: TrendingUp,
      title: "Management Consultancy Services",
      description: "Strategic business consulting to optimize your operations, enhance organizational efficiency, and drive sustainable growth in competitive markets. Transform your business processes with data-driven insights.",
      keyBenefits: [
        "Enhanced operational efficiency by up to 40%",
        "Strategic competitive advantage through optimization",
        "Improved organizational culture and employee satisfaction",
        "Measurable ROI on investments within 6 months"
      ],
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      iconColor: "text-green-600",
      accentColor: "from-green-500/20 to-green-600/30"
    },
    {
      icon: UserCheck,
      title: "Recruitment Consultancy Services",
      description: "End-to-end recruitment solutions connecting top talent with leading organizations across the Middle East and South Asia regions. Specialized expertise in executive search and mass recruitment.",
      keyBenefits: [
        "Access to exclusive talent networks across 15+ industries",
        "Reduced time-to-hire by 60% with quality guarantee",
        "97% successful placement rate with 6-month warranty",
        "Industry expertise spanning Oil & Gas to Technology sectors"
      ],
      bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100",
      iconColor: "text-yellow-600",
      accentColor: "from-yellow-500/20 to-yellow-600/30"
    }
  ];

  return (
    <section id="services" className="relative cream pt-2 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="fluid-text-4xl font-bold mb-6">
            Our <span className="text-yellow">Services</span>
          </h2>
          <p className="fluid-text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive workforce solutions designed to accelerate your business growth and operational excellence through strategic talent acquisition.
          </p>
        </motion.div>

        {/* Service Cards - Enhanced Design */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className={`${service.bgColor} p-8 rounded-3xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group h-full backdrop-blur-sm`}>
                <CardContent className="p-0 h-full flex flex-col">
                  {/* Icon and Title */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                    </div>
                    <h3 className="fluid-text-2xl font-bold text-gray-900 leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Key Benefits</h4>
                    {service.keyBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <div className={`bg-gradient-to-r ${service.accentColor} rounded-xl p-4 group-hover:shadow-lg transition-all duration-300`}>
                      <p className="text-sm font-medium text-gray-800 text-center">
                        Learn more about our {service.title.toLowerCase()} 
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}