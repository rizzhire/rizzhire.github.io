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
      
      const newStackedCards: number[] = [];
      
      // Calculate absolute positions of cards
      const card1Top = sectionRect.top + 200;
      const card1Bottom = card1Top + 320;
      const card2Top = sectionRect.top + 550; 
      const card2Bottom = card2Top + 320;
      const card3Top = sectionRect.top + 900;
      const card3Bottom = card3Top + 320;
      
      // Check if second card is fully visible and ready to stack
      const card2FullyVisible = card2Top >= 0 && card2Bottom <= windowHeight;
      const shouldStackCard2 = card2FullyVisible && card2Bottom < windowHeight * 0.8;
      
      // Check if third card is fully visible and ready to stack  
      const card3FullyVisible = card3Top >= 0 && card3Bottom <= windowHeight;
      const shouldStackCard3 = card3FullyVisible && card3Bottom < windowHeight * 0.8;
      
      if (shouldStackCard2) {
        newStackedCards.push(1);
      }
      
      if (shouldStackCard3) {
        newStackedCards.push(2);
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
    <section ref={sectionRef} id="services" className="py-20 cream relative" style={{ minHeight: '150vh' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-yellow">Services</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive workforce solutions designed to accelerate your business growth and operational excellence.
          </p>
        </div>

        <div className="relative" style={{ height: '1400px' }}>
          {services.map((service, index) => {
            // Determine card positioning
            let cardTop, cardTransform, cardZIndex;
            
            if (index === 0) {
              // First card stays in original position (becomes the base)
              cardTop = 200;
              cardTransform = 'translateX(-50%) translateY(0px) scale(1)';
              cardZIndex = 10;
            } else if (index === 1) {
              // Second card - either in original position or stacked on first
              if (stackedCards.includes(1)) {
                cardTop = 200; // Move to same position as first card
                cardTransform = 'translateX(-50%) translateY(-12px) scale(0.98) rotateX(1deg)';
                cardZIndex = 15;
              } else {
                cardTop = 200 + 350; // Original position
                cardTransform = 'translateX(-50%) translateY(0px) scale(1)';
                cardZIndex = 10;
              }
            } else if (index === 2) {
              // Third card - either in original position or stacked on top of both
              if (stackedCards.includes(2)) {
                cardTop = 200; // Move to same position as others
                cardTransform = 'translateX(-50%) translateY(-24px) scale(0.96) rotateX(2deg)';
                cardZIndex = 20;
              } else {
                cardTop = 200 + 700; // Original position
                cardTransform = 'translateX(-50%) translateY(0px) scale(1)';
                cardZIndex = 10;
              }
            }
            
            return (
              <Card 
                key={index}
                className={`
                  ${service.bgColor} p-8 rounded-2xl border-0 shadow-xl
                  absolute w-full max-w-lg mx-auto left-1/2 
                  transition-all duration-800 cubic-bezier(0.25, 0.46, 0.45, 0.94)
                `}
                style={{
                  top: `${cardTop}px`,
                  transform: cardTransform,
                  zIndex: cardZIndex,
                  boxShadow: stackedCards.includes(index)
                    ? `0 ${20 + index * 8}px ${40 + index * 16}px rgba(0,0,0,0.15)` 
                    : '0 10px 30px rgba(0,0,0,0.1)'
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
