import { Users, Building2, Search, CheckCircle, BriefcaseIcon, UserCog, Target, TrendingUp, UserCheck, Clock, Award, HeadphonesIcon, Zap, BarChart3, DollarSign, FileCheck, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: Users,
      title: "Manpower Supply Services",
      description: "Streamlined staffing solutions across industries, delivered with unmatched turnaround time.",
      features: [
        "Multi-industry expertise",
        "Rapid deployment",
        "Quality assurance",
        "24/7 support"
      ],
      bgColor: "bg-gradient-to-br from-cream to-yellow/10",
      iconBg: "bg-yellow/20",
      illustrationBg: "bg-gradient-to-br from-yellow/30 to-yellow/60"
    },
    {
      icon: Target,
      title: "Management Consultancy Services",
      description: "Strategic guidance to structure your workforce, reduce attrition, and boost operational output.",
      features: [
        "Workforce optimization",
        "Performance enhancement",
        "Cost reduction",
        "Strategic planning"
      ],
      bgColor: "bg-gradient-to-br from-yellow/5 to-cream",
      iconBg: "bg-yellow/20",
      illustrationBg: "bg-gradient-to-br from-yellow/40 to-yellow/70"
    },
    {
      icon: Search,
      title: "Recruitment Consultancy Services",
      description: "End-to-end hiring assistance powered by expert sourcing, screening, and onboarding.",
      features: [
        "Executive search",
        "Talent acquisition",
        "Background verification",
        "Onboarding support"
      ],
      bgColor: "bg-gradient-to-br from-cream to-yellow/10",
      iconBg: "bg-yellow/20",
      illustrationBg: "bg-gradient-to-br from-yellow/30 to-yellow/60"
    }
  ];

  return (
    <section id="services" className="relative cream py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-yellow">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive workforce solutions designed to accelerate your business growth and operational excellence.
          </p>
        </div>

        {/* Service Cards - 3 Column Grid Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`${service.bgColor} p-8 rounded-[3rem] border border-yellow/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
            >
              <CardContent className="p-0">
                <div className={`w-16 h-16 ${service.iconBg} rounded-[2rem] flex items-center justify-center mb-6 border border-yellow/30`}>
                  <service.icon className="h-8 w-8 text-gray-800" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-yellow mr-3 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}