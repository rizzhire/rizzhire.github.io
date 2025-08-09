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
    <section id="services" className="relative cream pt-0 pb-20 overflow-hidden">
      {/* Light Background Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Enhanced Live Moving Floating Elements */}
        <div className="absolute top-32 left-20 w-16 h-16 bg-gradient-to-r from-yellow-300/6 to-orange-300/8 rounded-lg rotate-12 blur-sm animate-floatMove"></div>
        <div className="absolute bottom-40 right-32 w-20 h-20 bg-gradient-to-r from-blue-300/6 to-cyan-300/8 rounded-full blur-md animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-10 w-12 h-12 bg-gradient-to-r from-purple-300/6 to-pink-300/8 rounded-full blur-sm animate-floatMove" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-20 right-16 w-14 h-14 bg-gradient-to-r from-green-300/6 to-emerald-300/8 rounded-lg rotate-45 blur-sm animate-rotate"></div>
        
        {/* Additional Floating Elements */}
        <div className="absolute top-60 left-1/3 w-10 h-10 bg-gradient-to-r from-rose-300/5 to-red-300/7 rounded-full blur-sm animate-floatMove" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-20 left-40 w-18 h-18 bg-gradient-to-r from-indigo-300/5 to-blue-300/7 rounded-lg rotate-30 blur-md animate-pulse-slow" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-80 right-1/4 w-8 h-8 bg-gradient-to-r from-teal-300/5 to-cyan-300/7 rounded-full blur-sm animate-rotate" style={{animationDelay: '1s'}}></div>
        
        {/* Live Moving Wave Pattern */}
        <svg className="absolute bottom-0 left-0 w-full h-16 opacity-3 animate-waveFlow" viewBox="0 0 1200 100">
          <defs>
            <linearGradient id="servicesWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0"/>
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d="M0,50 Q300,30 600,50 T1200,50" stroke="url(#servicesWaveGradient)" strokeWidth="1" fill="none"/>
        </svg>
        
        {/* Wavy Abstract Traveling Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 400">
          <defs>
            <linearGradient id="servicesWavy1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0"/>
              <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.12"/>
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="servicesWavy2" x1="100%" y1="50%" x2="0%" y2="50%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0"/>
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0"/>
            </linearGradient>
          </defs>
          
          <path 
            d="M-150,80 C-50,70 100,100 300,90 C500,80 700,70 900,80 C1000,85 1100,90 1150,90" 
            stroke="url(#servicesWavy1)" 
            strokeWidth="1.2" 
            fill="none"
            className="animate-wavyTravel1"
            style={{animationDelay: '4s'}}
          />
          
          <path 
            d="M1150,300 C1050,290 950,320 750,310 C550,300 350,290 200,285 C100,282 0,278 -150,280" 
            stroke="url(#servicesWavy2)" 
            strokeWidth="1.0" 
            fill="none"
            className="animate-wavyTravel2"
            style={{animationDelay: '8s'}}
          />
        </svg>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 mt-8">
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
              className={`${service.bgColor} p-6 rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group`}
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
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}