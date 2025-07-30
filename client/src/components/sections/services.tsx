import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, UserCheck, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

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

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInStackingArea, setIsInStackingArea] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelTimeoutRef = useRef<NodeJS.Timeout>();

  // Detect when user enters/exits stacking area
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Enter stacking area when section is centered
      const sectionCenter = sectionRect.top + sectionRect.height / 2;
      const screenCenter = windowHeight / 2;
      const isNearCenter = Math.abs(sectionCenter - screenCenter) < windowHeight * 0.3;
      
      setIsInStackingArea(isNearCenter && sectionRect.top <= 0 && sectionRect.bottom >= windowHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle wheel events for step-by-step stacking
  const handleWheel = useCallback((e: WheelEvent) => {
    if (!isInStackingArea || isAnimating) {
      return;
    }

    e.preventDefault();
    setIsAnimating(true);

    const direction = e.deltaY > 0 ? 'down' : 'up';
    
    if (direction === 'down' && activeIndex < services.length - 1) {
      setActiveIndex(prev => prev + 1);
    } else if (direction === 'up' && activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
    }

    // Clear existing timeout
    if (wheelTimeoutRef.current) {
      clearTimeout(wheelTimeoutRef.current);
    }

    // Reset animation lock after transition
    wheelTimeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  }, [isInStackingArea, isAnimating, activeIndex, services.length]);

  // Add wheel event listener when in stacking area
  useEffect(() => {
    if (isInStackingArea) {
      window.addEventListener('wheel', handleWheel, { passive: false });
    } else {
      window.removeEventListener('wheel', handleWheel);
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }
    };
  }, [isInStackingArea, handleWheel]);

  const getCardStyle = (index: number) => {
    if (index < activeIndex) {
      // Previously stacked cards - scale down progressively
      const stackDepth = activeIndex - index;
      const scale = 1 - (stackDepth * 0.05); // Each stack level scales down by 5%
      const yOffset = stackDepth * -8; // Slight vertical offset for depth
      const opacity = Math.max(0.6, 1 - (stackDepth * 0.15)); // Maintain visibility
      
      return {
        transform: `translateY(${yOffset}px) scale(${scale})`,
        opacity,
        zIndex: 100 - stackDepth,
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        pointerEvents: 'none' as const
      };
    } else if (index === activeIndex) {
      // Active card - full size and centered
      return {
        transform: 'translateY(0) scale(1)',
        opacity: 1,
        zIndex: 100,
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        pointerEvents: 'auto' as const
      };
    } else {
      // Future cards - hidden below
      return {
        transform: 'translateY(100%) scale(0.9)',
        opacity: 0,
        zIndex: 50,
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        pointerEvents: 'none' as const
      };
    }
  };

  return (
    <section ref={sectionRef} id="services" className="relative cream" style={{ height: '400vh' }}>
      {/* Header */}
      <div className="py-16 text-center relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-yellow">Services</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive workforce solutions designed to accelerate your business growth and operational excellence.
          </p>
          {isInStackingArea && (
            <div className="mt-4 text-sm text-gray-500 animate-pulse">
              Scroll to stack cards • {activeIndex + 1} of {services.length}
            </div>
          )}
        </div>
      </div>

      {/* Fixed Stacking Container */}
      <div 
        ref={containerRef}
        className="fixed top-1/2 left-1/2 w-full max-w-lg h-80 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ zIndex: isInStackingArea ? 100 : 10 }}
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

      {/* Progress Indicators - Only show in stacking area */}
      {isInStackingArea && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-[200]">
          {services.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index <= activeIndex ? 'bg-yellow scale-110' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}

      {/* Scroll Lock Indicator */}
      {isInStackingArea && (
        <div className="fixed top-8 right-8 text-sm bg-black/80 text-white px-3 py-2 rounded-lg z-[200]">
          Scroll Lock Active
        </div>
      )}
    </section>
  );
}