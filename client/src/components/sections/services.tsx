import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, UserCheck, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
      iconBg: "bg-yellow/20"
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
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
      iconBg: "bg-yellow/20"
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
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
      iconBg: "bg-yellow/20"
    }
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      
      // Calculate scroll progress through the section
      const scrollProgress = Math.max(0, Math.min(1, -sectionTop / (sectionHeight - windowHeight)));
      
      // Determine which card should be active based on scroll progress
      const cardIndex = Math.floor(scrollProgress * services.length);
      setCurrentCard(Math.min(cardIndex, services.length - 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getCardStyle = (index: number) => {
    if (index <= currentCard) {
      // Card is visible and stacked
      const stackDepth = currentCard - index;
      const isActive = index === currentCard;
      
      if (isActive) {
        // Active card on top
        return {
          transform: 'translateX(-50%) translateY(-50%) scale(1)',
          opacity: 1,
          zIndex: 100 + index,
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        };
      } else {
        // Stacked card behind
        const yOffset = stackDepth * -6; // Slight vertical offset for depth
        const scaleReduction = stackDepth * 0.05;
        const opacityReduction = stackDepth * 0.2;
        
        return {
          transform: `translateX(-50%) translateY(calc(-50% + ${yOffset}px)) scale(${1 - scaleReduction})`,
          opacity: Math.max(0.4, 1 - opacityReduction),
          zIndex: 100 - stackDepth,
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        };
      }
    } else {
      // Card not revealed yet
      return {
        transform: 'translateX(-50%) translateY(-50%) scale(0.8)',
        opacity: 0,
        zIndex: 50,
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      };
    }
  };

  return (
    <section ref={sectionRef} id="services" className="relative cream" style={{ height: '400vh' }}>
      {/* Header */}
      <div className="py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-yellow">Services</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive workforce solutions designed to accelerate your business growth and operational excellence.
          </p>
        </div>
      </div>

      {/* Sticky Card Container */}
      <div 
        ref={containerRef}
        className="sticky top-0 left-0 w-full h-screen flex items-center justify-center"
        style={{ zIndex: 50 }}
      >
        {services.map((service, index) => (
          <Card 
            key={index}
            className={`
              ${service.bgColor} p-6 md:p-8 rounded-2xl border-0 shadow-2xl
              absolute w-full max-w-sm md:max-w-lg mx-auto left-1/2 top-1/2
            `}
            style={getCardStyle(index)}
          >
            <CardContent className="p-0">
              <div className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
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

      {/* Card Progress Indicators */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-[200]">
        {services.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index <= currentCard ? 'bg-yellow' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
}