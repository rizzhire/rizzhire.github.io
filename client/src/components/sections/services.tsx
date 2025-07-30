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

  const [stackedCards, setStackedCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;

      // Professional stacking calculation
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight * 0.8)));
      const cardsToStack = Math.floor(scrollProgress * services.length);
      
      const newStackedCards: number[] = [];
      for (let i = 0; i < Math.min(cardsToStack, services.length); i++) {
        newStackedCards.push(i);
      }
      
      setStackedCards(newStackedCards);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [services.length]);

  return (
    <section ref={sectionRef} id="services" className="py-20 cream relative" style={{ minHeight: '120vh' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-yellow">Services</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive workforce solutions designed to accelerate your business growth and operational excellence.
          </p>
        </div>

        <div className="relative" style={{ height: '1200px' }}>
          {services.map((service, index) => {
            const isStacked = stackedCards.includes(index);
            const stackOrder = stackedCards.indexOf(index);
            
            return (
              <Card 
                key={index}
                className={`
                  ${service.bgColor} p-8 rounded-2xl border-0 shadow-xl
                  absolute w-full max-w-lg mx-auto left-1/2 
                  transition-all duration-500 ease-in-out
                  backdrop-blur-sm
                `}
                style={{
                  transform: isStacked 
                    ? `translateX(-50%) translateY(${stackOrder * 40}px) scale(${1 - stackOrder * 0.03}) rotateX(${stackOrder * 1}deg)`
                    : `translateX(-50%) translateY(0px) scale(1) rotateX(0deg)`,
                  zIndex: isStacked ? 30 - stackOrder : 10,
                  top: isStacked ? `${160 + stackOrder * 15}px` : `${index * 320}px`,
                  boxShadow: isStacked 
                    ? `0 ${20 + stackOrder * 10}px ${40 + stackOrder * 20}px rgba(0,0,0,0.1)` 
                    : '0 10px 25px rgba(0,0,0,0.1)'
                }}
              >
                <CardContent className="p-0">
                  <div className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                    <service.icon className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
