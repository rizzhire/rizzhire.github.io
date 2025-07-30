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
      bgColor: "bg-gradient-to-br from-purple-100 to-purple-200",
      iconBg: "bg-purple-200"
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

        {/* Service Cards - 3 Column Grid Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`${service.bgColor} p-6 rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <CardContent className="p-0">
                <div className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-yellow mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
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