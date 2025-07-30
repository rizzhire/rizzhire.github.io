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
      if (!sectionRef.current || !containerRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = sectionRect.top;
      
      // When container reaches the middle of screen, start the stacking sequence
      const containerCenter = containerRect.top + containerRect.height / 2;
      const screenCenter = windowHeight / 2;
      
      // Container is in position when it's centered on screen
      const isContainerCentered = Math.abs(containerCenter - screenCenter) < 100;
      
      if (!isContainerCentered && sectionTop > -windowHeight * 0.5) {
        // Still scrolling to center position
        setCurrentCard(0);
        return;
      }
      
      // Once centered, calculate stacking progress based on how much we've scrolled past center
      const scrollPastCenter = Math.max(0, -sectionTop - windowHeight * 0.5);
      const cardHeight = 400; // Approximate card transition distance
      
      // Each card appears after scrolling one card height
      const cardIndex = Math.floor(scrollPastCenter / cardHeight);
      setCurrentCard(Math.min(cardIndex, services.length - 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getCardStyle = (index: number) => {
    if (index < currentCard) {
      // Previously active cards - stay stacked and visible in SAME position
      const stackDepth = currentCard - index;
      const yOffset = stackDepth * -5; // Small offset for depth perception
      const scaleReduction = stackDepth * 0.03; // Minimal scale reduction
      const opacityReduction = stackDepth * 0.2; // Keep visible
      
      return {
        transform: `translateY(${yOffset}px) scale(${1 - scaleReduction})`,
        opacity: Math.max(0.7, 1 - opacityReduction),
        zIndex: 90 - stackDepth,
        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      };
    } else if (index === currentCard) {
      // Currently active card - STAYS IN SAME FIXED POSITION
      return {
        transform: 'translateY(0) scale(1)',
        opacity: 1,
        zIndex: 100,
        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      };
    } else {
      // Future cards - waiting below the container
      return {
        transform: 'translateY(100%) scale(0.9)',
        opacity: 0,
        zIndex: 50,
        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      };
    }
  };

  return (
    <section ref={sectionRef} id="services" className="relative cream" style={{ height: '500vh' }}>
      {/* Header */}
      <div className="py-16 text-center relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-yellow">Services</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive workforce solutions designed to accelerate your business growth and operational excellence.
          </p>
        </div>
      </div>

      {/* Sticky Card Container - STAYS FIXED IN CENTER */}
      <div 
        ref={containerRef}
        className="sticky top-1/2 left-1/2 w-full max-w-lg mx-auto h-96 transform -translate-x-1/2 -translate-y-1/2"
        style={{ zIndex: 50 }}
      >
        {services.map((service, index) => (
          <Card 
            key={index}
            className={`
              ${service.bgColor} p-6 md:p-8 rounded-2xl border-0 shadow-2xl
              absolute w-full h-full left-0 top-0
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