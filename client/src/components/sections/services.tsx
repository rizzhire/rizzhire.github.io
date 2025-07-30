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
              className={`${service.bgColor} p-12 rounded-[2rem] border border-yellow/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
            >
              <CardContent className="p-0">
                <div className="flex items-center justify-between">
                  {/* Content Section */}
                  <div className="flex-1 pr-12">
                    <div className={`w-20 h-20 ${service.iconBg} rounded-[1.5rem] flex items-center justify-center mb-8 border border-yellow/30`}>
                      <service.icon className="h-10 w-10 text-gray-800" />
                    </div>
                    <h3 className="text-3xl font-bold mb-6 text-gray-900 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-base">
                          <CheckCircle className="h-5 w-5 text-yellow mr-4 flex-shrink-0" />
                          <span className="text-gray-800 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Illustration Section */}
                  <div className="flex-shrink-0 w-96 h-80 relative">
                    <div className={`w-full h-full rounded-[2rem] ${service.illustrationBg} flex items-center justify-center overflow-hidden relative`}>
                      {/* Manpower Supply Illustration */}
                      {index === 0 && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Background pattern */}
                          <div className="absolute inset-8 bg-white/8 rounded-[1.5rem]"></div>
                          <div className="absolute inset-16 bg-white/4 rounded-[1rem]"></div>
                          
                          {/* Recruitment focused elements */}
                          <div className="absolute top-10 left-10 w-24 h-18 bg-white/25 rounded-[1rem] flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <div className="flex items-center space-x-2">
                              <Users className="h-6 w-6 text-white" />
                              <Clock className="h-5 w-5 text-white opacity-80" />
                            </div>
                          </div>
                          <div className="absolute top-10 right-10 w-20 h-20 bg-white/30 rounded-[1.2rem] flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <Award className="h-8 w-8 text-white" />
                          </div>
                          <div className="absolute bottom-10 left-10 w-28 h-22 bg-white/25 rounded-[1rem] flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <div className="flex items-center space-x-2">
                              <Building2 className="h-7 w-7 text-white" />
                              <HeadphonesIcon className="h-6 w-6 text-white opacity-80" />
                            </div>
                          </div>
                          <div className="absolute bottom-10 right-10 w-22 h-16 bg-white/35 rounded-[1rem] flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <Zap className="h-7 w-7 text-white" />
                          </div>
                          
                          {/* Central element */}
                          <div className="w-36 h-36 bg-white/35 rounded-[2rem] flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-lg">
                            <BriefcaseIcon className="h-18 w-18 text-white" />
                          </div>
                        </div>
                      )}

                      {/* Management Consultancy Illustration */}
                      {index === 1 && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Background pattern */}
                          <div className="absolute inset-8 bg-white/8 rounded-[1.5rem]"></div>
                          <div className="absolute inset-16 bg-white/4 rounded-[1rem]"></div>
                          
                          {/* Management focused elements */}
                          <div className="absolute top-10 left-10 w-24 h-18 bg-white/25 rounded-[1rem] flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <div className="flex items-center space-x-2">
                              <BarChart3 className="h-6 w-6 text-white" />
                              <TrendingUp className="h-5 w-5 text-white opacity-80" />
                            </div>
                          </div>
                          <div className="absolute top-10 right-10 w-20 h-20 bg-white/30 rounded-[1.2rem] flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <UserCog className="h-8 w-8 text-white" />
                          </div>
                          <div className="absolute bottom-10 left-10 w-22 h-16 bg-white/35 rounded-[1rem] flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <DollarSign className="h-7 w-7 text-white" />
                          </div>
                          <div className="absolute bottom-10 right-10 w-28 h-22 bg-white/25 rounded-[1rem] flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <div className="flex items-center space-x-2">
                              <Building2 className="h-7 w-7 text-white" />
                              <Target className="h-6 w-6 text-white opacity-80" />
                            </div>
                          </div>
                          
                          {/* Central element */}
                          <div className="w-36 h-36 bg-white/35 rounded-[2rem] flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-lg">
                            <Target className="h-18 w-18 text-white" />
                          </div>
                        </div>
                      )}

                      {/* Recruitment Consultancy Illustration */}
                      {index === 2 && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Background pattern */}
                          <div className="absolute inset-8 bg-white/8 rounded-[1.5rem]"></div>
                          <div className="absolute inset-16 bg-white/4 rounded-[1rem]"></div>
                          
                          {/* Recruitment focused elements */}
                          <div className="absolute top-10 left-10 w-24 h-18 bg-white/25 rounded-[1rem] flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <div className="flex items-center space-x-2">
                              <Search className="h-6 w-6 text-white" />
                              <Users className="h-5 w-5 text-white opacity-80" />
                            </div>
                          </div>
                          <div className="absolute top-10 right-10 w-20 h-20 bg-white/30 rounded-[1.2rem] flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <UserCheck className="h-8 w-8 text-white" />
                          </div>
                          <div className="absolute bottom-10 left-10 w-28 h-22 bg-white/25 rounded-[1rem] flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <div className="flex items-center space-x-2">
                              <ShieldCheck className="h-7 w-7 text-white" />
                              <FileCheck className="h-6 w-6 text-white opacity-80" />
                            </div>
                          </div>
                          <div className="absolute bottom-10 right-10 w-22 h-16 bg-white/35 rounded-[1rem] flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <BriefcaseIcon className="h-7 w-7 text-white" />
                          </div>
                          
                          {/* Central element */}
                          <div className="w-36 h-36 bg-white/35 rounded-[2rem] flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-lg">
                            <Search className="h-18 w-18 text-white" />
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