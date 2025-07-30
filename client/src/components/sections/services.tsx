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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const scrollDirection = useRef<'up' | 'down'>('down');

  const [isInStackingZone, setIsInStackingZone] = useState(false);
  const scrollDebounceRef = useRef<NodeJS.Timeout>();
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || isAnimatingRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if section center is near viewport center (trigger zone)
      const sectionCenter = sectionRect.top + sectionRect.height / 2;
      const viewportCenter = windowHeight / 2;
      const inZone = Math.abs(sectionCenter - viewportCenter) < windowHeight * 0.3;

      if (inZone && !isInStackingZone) {
        setIsInStackingZone(true);
        setCurrentCard(0); // Show first card when entering zone
      } else if (!inZone && isInStackingZone) {
        setIsInStackingZone(false);
        setCurrentCard(0); // Reset when leaving zone
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (!isInStackingZone || isAnimatingRef.current) return;

      e.preventDefault();
      e.stopPropagation();

      // Clear existing timeout
      if (scrollDebounceRef.current) {
        clearTimeout(scrollDebounceRef.current);
      }

      // Debounce wheel events to prevent multiple triggers
      scrollDebounceRef.current = setTimeout(() => {
        const direction = e.deltaY > 0 ? 'down' : 'up';
        
        isAnimatingRef.current = true;

        if (direction === 'down') {
          if (currentCard < services.length - 1) {
            setCurrentCard(prev => prev + 1);
          } else {
            // All cards stacked - exit stacking mode and continue scroll
            setIsInStackingZone(false);
            setCurrentCard(0);
            // Allow normal scroll to continue
            setTimeout(() => {
              window.scrollBy({ top: 300, behavior: 'smooth' });
            }, 100);
          }
        } else {
          if (currentCard > 0) {
            setCurrentCard(prev => prev - 1);
          } else {
            // All cards unstacked - exit stacking mode and continue scroll
            setIsInStackingZone(false);
            setCurrentCard(0);
            // Allow normal scroll to continue upward
            setTimeout(() => {
              window.scrollBy({ top: -300, behavior: 'smooth' });
            }, 100);
          }
        }

        // Reset animation flag after transition
        setTimeout(() => {
          isAnimatingRef.current = false;
        }, 600);
      }, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      if (scrollDebounceRef.current) {
        clearTimeout(scrollDebounceRef.current);
      }
    };
  }, [isInStackingZone, currentCard]);

  const getCardStyle = (index: number) => {
    const baseTransform = 'translateX(-50%) translateY(-50%)';
    
    if (!isInStackingZone) {
      // Hide all cards when not in stacking zone
      return {
        transform: `${baseTransform} scale(0.8)`,
        opacity: 0,
        zIndex: 10,
        transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      };
    }
    
    if (index <= currentCard) {
      // Card is visible and stacked
      const stackDepth = currentCard - index;
      const isActive = index === currentCard;
      
      if (isActive) {
        // Active card - full size on top
        return {
          transform: `${baseTransform} scale(1)`,
          opacity: 1,
          zIndex: 100 + index,
          transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        };
      } else {
        // Stacked card - smaller and behind
        const scaleReduction = stackDepth * 0.08;
        const opacityReduction = stackDepth * 0.3;
        
        return {
          transform: `${baseTransform} scale(${1 - scaleReduction})`,
          opacity: Math.max(0.4, 1 - opacityReduction),
          zIndex: 100 - stackDepth,
          transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        };
      }
    } else {
      // Card waiting to be revealed
      return {
        transform: `${baseTransform} scale(0.8)`,
        opacity: 0,
        zIndex: 50,
        transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      };
    }
  };

  return (
    <section ref={sectionRef} id="services" className="relative cream" style={{ height: '200vh' }}>
      {/* Header */}
      <div className="py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-yellow">Services</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive workforce solutions designed to accelerate your business growth and operational excellence.
          </p>
        </div>
      </div>

      {/* Stacking Container - Fixed positioning for true centering */}
      <div 
        ref={containerRef}
        className="sticky top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden"
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

      {/* Progress Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-2">
          {services.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentCard >= index ? 'bg-yellow' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
