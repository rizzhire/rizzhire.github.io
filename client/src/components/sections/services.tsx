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

        {/* Service Cards - Landscape Layout */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`${service.bgColor} p-8 rounded-[3rem] border border-yellow/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
            >
              <CardContent className="p-0">
                <div className="flex items-center justify-between">
                  {/* Content Section */}
                  <div className="flex-1 pr-8">
                    <div className={`w-16 h-16 ${service.iconBg} rounded-[2rem] flex items-center justify-center mb-6 border border-yellow/30`}>
                      <service.icon className="h-8 w-8 text-gray-800" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-6 text-base leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-yellow mr-3 flex-shrink-0" />
                          <span className="text-gray-800 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Clear Illustration Section */}
                  <div className="flex-shrink-0 w-64 h-80 relative">
                    <div className={`w-full h-full rounded-[2.5rem] bg-white/90 border-2 border-yellow/30 flex items-center justify-center overflow-hidden relative shadow-inner`}>
                      {/* Manpower Supply Illustration */}
                      {index === 0 && (
                        <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow/20 to-yellow/40 rounded-[2rem]">
                          {/* Clear workforce illustration */}
                          <div className="absolute top-6 left-6 w-16 h-12 bg-yellow/80 rounded-[1rem] flex items-center justify-center">
                            <Users className="h-6 w-6 text-gray-800" />
                          </div>
                          <div className="absolute top-6 right-6 w-12 h-12 bg-yellow/60 rounded-[1rem] flex items-center justify-center">
                            <Clock className="h-5 w-5 text-gray-800" />
                          </div>
                          <div className="absolute bottom-6 left-6 w-18 h-12 bg-yellow/70 rounded-[1rem] flex items-center justify-center">
                            <Building2 className="h-6 w-6 text-gray-800" />
                          </div>
                          <div className="absolute bottom-6 right-6 w-14 h-10 bg-yellow/90 rounded-[1rem] flex items-center justify-center">
                            <Award className="h-5 w-5 text-gray-800" />
                          </div>
                          
                          {/* Central workforce icon */}
                          <div className="w-24 h-24 bg-yellow rounded-[1.5rem] flex items-center justify-center shadow-lg border-2 border-yellow/60">
                            <Users className="h-12 w-12 text-gray-800" />
                          </div>
                        </div>
                      )}

                      {/* Management Consultancy Illustration */}
                      {index === 1 && (
                        <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow/20 to-yellow/40 rounded-[2rem]">
                          {/* Clear management illustration */}
                          <div className="absolute top-6 left-6 w-16 h-12 bg-yellow/80 rounded-[1rem] flex items-center justify-center">
                            <BarChart3 className="h-6 w-6 text-gray-800" />
                          </div>
                          <div className="absolute top-6 right-6 w-12 h-12 bg-yellow/60 rounded-[1rem] flex items-center justify-center">
                            <TrendingUp className="h-5 w-5 text-gray-800" />
                          </div>
                          <div className="absolute bottom-6 left-6 w-14 h-10 bg-yellow/90 rounded-[1rem] flex items-center justify-center">
                            <DollarSign className="h-5 w-5 text-gray-800" />
                          </div>
                          <div className="absolute bottom-6 right-6 w-18 h-12 bg-yellow/70 rounded-[1rem] flex items-center justify-center">
                            <UserCog className="h-6 w-6 text-gray-800" />
                          </div>
                          
                          {/* Central target icon */}
                          <div className="w-24 h-24 bg-yellow rounded-[1.5rem] flex items-center justify-center shadow-lg border-2 border-yellow/60">
                            <Target className="h-12 w-12 text-gray-800" />
                          </div>
                        </div>
                      )}

                      {/* Recruitment Consultancy Illustration */}
                      {index === 2 && (
                        <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow/20 to-yellow/40 rounded-[2rem]">
                          {/* Clear recruitment illustration */}
                          <div className="absolute top-6 left-6 w-16 h-12 bg-yellow/80 rounded-[1rem] flex items-center justify-center">
                            <Search className="h-6 w-6 text-gray-800" />
                          </div>
                          <div className="absolute top-6 right-6 w-12 h-12 bg-yellow/60 rounded-[1rem] flex items-center justify-center">
                            <UserCheck className="h-5 w-5 text-gray-800" />
                          </div>
                          <div className="absolute bottom-6 left-6 w-18 h-12 bg-yellow/70 rounded-[1rem] flex items-center justify-center">
                            <ShieldCheck className="h-6 w-6 text-gray-800" />
                          </div>
                          <div className="absolute bottom-6 right-6 w-14 h-10 bg-yellow/90 rounded-[1rem] flex items-center justify-center">
                            <FileCheck className="h-5 w-5 text-gray-800" />
                          </div>
                          
                          {/* Central search icon */}
                          <div className="w-24 h-24 bg-yellow rounded-[1.5rem] flex items-center justify-center shadow-lg border-2 border-yellow/60">
                            <Search className="h-12 w-12 text-gray-800" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}