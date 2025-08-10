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
      {/* Enhanced Live Background Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Enhanced Live Moving Floating Circles */}
        <div className="absolute top-32 right-32 w-48 h-48 bg-gradient-to-r from-yellow-200/20 to-yellow-300/30 rounded-full blur-2xl animate-floatMoveEnhanced"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-r from-blue-200/12 to-cyan-200/22 rounded-full blur-2xl animate-pulseEnhanced" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-8 w-28 h-28 bg-gradient-to-r from-purple-200/14 to-pink-200/24 rounded-full blur-xl animate-rotateEnhanced" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-52 h-52 bg-gradient-to-r from-orange-200/18 to-yellow-200/28 rounded-full blur-3xl animate-floatMoveEnhanced" style={{animationDelay: '1.5s'}}></div>
        
        {/* Medium Floating Elements */}
        <div className="absolute top-60 right-1/4 w-32 h-32 bg-gradient-to-r from-yellow-200/15 to-amber-200/25 rounded-full blur-xl animate-pulseEnhanced" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-16 left-1/5 w-20 h-20 bg-gradient-to-r from-indigo-200/11 to-blue-200/21 rounded-full blur-md animate-floatMoveEnhanced" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-80 right-1/6 w-24 h-24 bg-gradient-to-r from-amber-200/15 to-yellow-200/25 rounded-full blur-lg animate-rotateEnhanced" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-2/5 w-22 h-22 bg-gradient-to-r from-violet-200/12 to-purple-200/22 rounded-full blur-lg animate-pulseEnhanced" style={{animationDelay: '5s'}}></div>
        
        {/* Behind Services Tiles Graphics */}
        <div className="absolute top-96 left-1/4 w-36 h-36 bg-gradient-to-r from-yellow-200/12 to-orange-200/22 rounded-full blur-2xl animate-floatMoveEnhanced" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-96 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-200/10 to-cyan-200/20 rounded-full blur-2xl animate-pulseEnhanced" style={{animationDelay: '3.5s'}}></div>
        <div className="absolute top-80 left-1/2 w-28 h-28 bg-gradient-to-r from-purple-200/11 to-pink-200/21 rounded-full blur-xl animate-rotateEnhanced" style={{animationDelay: '4.5s'}}></div>
        
        {/* Small Accent Elements */}
        <div className="absolute top-40 right-1/5 w-20 h-20 bg-gradient-to-r from-yellow-200/12 to-amber-200/22 rounded-full blur-lg animate-floatMoveEnhanced" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-60 right-16 w-24 h-24 bg-gradient-to-r from-orange-200/11 to-yellow-200/21 rounded-full blur-xl animate-rotateEnhanced" style={{animationDelay: '3.5s'}}></div>
        
        {/* Additional Service Tile Background Elements */}
        <div className="absolute top-72 left-1/6 w-20 h-20 bg-gradient-to-r from-amber-200/8 to-yellow-200/18 rounded-full blur-lg animate-pulseEnhanced" style={{animationDelay: '6s'}}></div>
        <div className="absolute top-88 right-1/8 w-16 h-16 bg-gradient-to-r from-yellow-200/9 to-orange-200/19 rounded-full blur-md animate-floatMoveEnhanced" style={{animationDelay: '7s'}}></div>
        

        
        {/* Enhanced Moving Geometric Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-8 animate-waveFlow" viewBox="0 0 1000 500">
          <defs>
            <linearGradient id="servicesGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d="M0,250 Q250,130 500,250 T1000,250" stroke="url(#servicesGradient1)" strokeWidth="2" fill="none"/>
        </svg>
        
        {/* Enhanced Wavy Abstract Traveling Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 500">
          <defs>
            <linearGradient id="servicesWavy1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0"/>
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
            </linearGradient>

            <linearGradient id="servicesWavy3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0"/>
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.13"/>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="servicesWavy4" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0"/>
              <stop offset="50%" stopColor="#f97316" stopOpacity="0.11"/>
              <stop offset="100%" stopColor="#f97316" stopOpacity="0"/>
            </linearGradient>
          </defs>
          
          <path 
            d="M-100,80 C-20,75 80,90 250,85 C420,82 580,78 750,76 C850,74 920,73 1000,75" 
            stroke="url(#servicesWavy1)" 
            strokeWidth="1.5" 
            fill="none"
            className="animate-wavyTravel1"
          />

          <path 
            d="M-150,180 C-50,175 70,190 230,185 C390,182 550,178 710,176 C810,174 880,173 1050,175" 
            stroke="url(#servicesWavy3)" 
            strokeWidth="1.3" 
            fill="none"
            className="animate-wavyTravel3"
          />
          <path 
            d="M-120,420 C20,415 140,430 300,425 C460,422 620,418 780,416 C880,414 950,413 1080,415" 
            stroke="url(#servicesWavy4)" 
            strokeWidth="1.6" 
            fill="none"
            className="animate-wavyTravel4"
          />
        </svg>
        
        {/* Yellow Traveling Lines Behind Services Tiles */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="servicesTileYellow1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0"/>
              <stop offset="30%" stopColor="#f59e0b" stopOpacity="0.18"/>
              <stop offset="70%" stopColor="#fbbf24" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="servicesTileYellow2" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0"/>
              <stop offset="25%" stopColor="#f59e0b" stopOpacity="0.16"/>
              <stop offset="75%" stopColor="#fbbf24" stopOpacity="0.14"/>
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="servicesTileYellow3" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0"/>
              <stop offset="40%" stopColor="#fbbf24" stopOpacity="0.17"/>
              <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.13"/>
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0"/>
            </linearGradient>
          </defs>
          
          {/* Horizontal lines behind service tiles */}
          <path 
            d="M100,350 C250,345 400,355 550,350 C700,345 850,355 900,350" 
            stroke="url(#servicesTileYellow1)" 
            strokeWidth="2" 
            fill="none"
            className="animate-wavyTravel1"
          />
          <path 
            d="M50,420 C200,415 350,425 500,420 C650,415 800,425 950,420" 
            stroke="url(#servicesTileYellow2)" 
            strokeWidth="1.8" 
            fill="none"
            className="animate-wavyTravel3"
          />
          <path 
            d="M150,480 C300,475 450,485 600,480 C750,475 850,485 950,480" 
            stroke="url(#servicesTileYellow3)" 
            strokeWidth="1.5" 
            fill="none"
            className="animate-wavyTravel4"
          />
        </svg>

        {/* Enhanced Dynamic Dots Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-16 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-32 right-24 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-32 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-16 right-16 w-2 h-2 bg-orange-400 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-rose-400 rounded-full animate-ping" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-emerald-400 rounded-full animate-ping" style={{animationDelay: '5s'}}></div>
        </div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 mt-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-yellow">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Comprehensive workforce solutions designed to accelerate your business growth and operational excellence.
          </p>
        </div>

        {/* Service Cards - 3 Column Grid Layout */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
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