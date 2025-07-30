import { Users, TrendingUp, UserCheck, CheckCircle } from "lucide-react";
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
      bgColor: "bg-white",
      iconBg: "bg-gray-100"
    },
    {
      icon: TrendingUp,
      title: "Management Consultancy Services",
      description: "Strategic guidance to structure your workforce, reduce attrition, and boost operational output.",
      features: [
        "Workforce optimization",
        "Performance enhancement",
        "Cost reduction",
        "Strategic planning"
      ],
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      iconBg: "bg-purple-100"
    },
    {
      icon: UserCheck,
      title: "Recruitment Consultancy Services",
      description: "End-to-end hiring assistance powered by expert sourcing, screening, and onboarding.",
      features: [
        "Executive search",
        "Talent acquisition",
        "Background verification",
        "Onboarding support"
      ],
      bgColor: "bg-white",
      iconBg: "bg-gray-100"
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
              className={`${service.bgColor} p-8 rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden`}
            >
              <CardContent className="p-0">
                <div className="flex items-center justify-between">
                  {/* Content Section */}
                  <div className="flex-1 pr-8">
                    <div className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                      <service.icon className="h-6 w-6 text-gray-700" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-base leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-yellow mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Illustration Section */}
                  <div className="flex-shrink-0 w-80 h-64 relative">
                    <div className={`w-full h-full rounded-2xl ${index === 0 ? 'bg-gradient-to-br from-blue-400 to-blue-600' : index === 1 ? 'bg-gradient-to-br from-purple-400 to-purple-600' : 'bg-gradient-to-br from-green-400 to-green-600'} flex items-center justify-center overflow-hidden`}>
                      {/* Manpower Supply Illustration */}
                      {index === 0 && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <div className="absolute inset-4 bg-white/20 rounded-xl"></div>
                          <div className="absolute top-8 left-8 w-16 h-12 bg-white/30 rounded-lg flex items-center justify-center">
                            <Users className="h-6 w-6 text-white" />
                          </div>
                          <div className="absolute bottom-8 right-8 w-20 h-16 bg-white/30 rounded-lg flex items-center justify-center">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                              <CheckCircle className="h-5 w-5 text-blue-600" />
                            </div>
                          </div>
                          <div className="w-24 h-24 bg-white/40 rounded-2xl flex items-center justify-center">
                            <Users className="h-12 w-12 text-white" />
                          </div>
                        </div>
                      )}

                      {/* Management Consultancy Illustration */}
                      {index === 1 && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <div className="absolute inset-4 bg-white/20 rounded-xl"></div>
                          <div className="absolute top-8 left-8 w-16 h-12 bg-white/30 rounded-lg flex items-center justify-center">
                            <TrendingUp className="h-6 w-6 text-white" />
                          </div>
                          <div className="absolute bottom-8 right-8 w-20 h-16 bg-white/30 rounded-lg flex items-center justify-center">
                            <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center">
                              <CheckCircle className="h-5 w-5 text-purple-600" />
                            </div>
                          </div>
                          <div className="w-24 h-24 bg-white/40 rounded-2xl flex items-center justify-center">
                            <TrendingUp className="h-12 w-12 text-white" />
                          </div>
                        </div>
                      )}

                      {/* Recruitment Consultancy Illustration */}
                      {index === 2 && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <div className="absolute inset-4 bg-white/20 rounded-xl"></div>
                          <div className="absolute top-8 left-8 w-16 h-12 bg-white/30 rounded-lg flex items-center justify-center">
                            <UserCheck className="h-6 w-6 text-white" />
                          </div>
                          <div className="absolute bottom-8 right-8 w-20 h-16 bg-white/30 rounded-lg flex items-center justify-center">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                              <CheckCircle className="h-5 w-5 text-green-600" />
                            </div>
                          </div>
                          <div className="w-24 h-24 bg-white/40 rounded-2xl flex items-center justify-center">
                            <UserCheck className="h-12 w-12 text-white" />
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