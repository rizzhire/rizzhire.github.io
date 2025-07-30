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

  const [currentStep, setCurrentStep] = useState(0); // 0-8 steps (3 steps per card)
  const [isInStackingZone, setIsInStackingZone] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollDebounceRef = useRef<NodeJS.Timeout>();
  const isAnimatingRef = useRef(false);
  const totalSteps = 9; // 3 cards × 3 steps each

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || isAnimatingRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if first card should be centered and stacking should begin
      const sectionTop = sectionRect.top;
      const sectionCenter = sectionTop + sectionRect.height / 2;
      const viewportCenter = windowHeight / 2;
      const shouldEnterZone = sectionCenter <= viewportCenter && sectionRect.bottom > viewportCenter;

      if (shouldEnterZone && !isInStackingZone) {
        setIsInStackingZone(true);
        setIsScrollLocked(true);
        setCurrentStep(0);
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.top = `-${window.scrollY}px`;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (!isInStackingZone || isAnimatingRef.current) return;

      e.preventDefault();
      e.stopPropagation();

      if (scrollDebounceRef.current) {
        clearTimeout(scrollDebounceRef.current);
      }

      scrollDebounceRef.current = setTimeout(() => {
        const direction = e.deltaY > 0 ? 'down' : 'up';
        isAnimatingRef.current = true;

        if (direction === 'down') {
          if (currentStep < totalSteps - 1) {
            setCurrentStep(prev => prev + 1);
          } else {
            // All steps complete - unlock and continue scroll
            const scrollY = document.body.style.top;
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
            
            setIsInStackingZone(false);
            setIsScrollLocked(false);
            setCurrentStep(0);
            
            setTimeout(() => {
              window.scrollBy({ top: 200, behavior: 'smooth' });
            }, 100);
          }
        } else {
          if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
          } else {
            // All steps reversed - unlock and continue scroll up
            const scrollY = document.body.style.top;
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
            
            setIsInStackingZone(false);
            setIsScrollLocked(false);
            
            setTimeout(() => {
              window.scrollBy({ top: -200, behavior: 'smooth' });
            }, 100);
          }
        }

        setTimeout(() => {
          isAnimatingRef.current = false;
        }, 300);
      }, 80);
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
      // Cleanup scroll lock
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isInStackingZone, currentStep]);

  const getCardStyle = (index: number) => {
    const baseTransform = 'translateX(-50%) translateY(-50%)';
    
    if (!isInStackingZone) {
      // Hide all cards when not in stacking zone
      return {
        transform: `${baseTransform} scale(0)`,
        opacity: 0,
        zIndex: 10,
        transition: 'transform 0.3s ease, opacity 0.3s ease'
      };
    }

    // Calculate which card should be active based on current step
    const cardStep = Math.floor(currentStep / 3); // Which card is being focused (0, 1, 2)
    const subStep = currentStep % 3; // Sub-step within that card (0, 1, 2)
    
    if (index < cardStep) {
      // Previous cards - fully stacked behind
      const stackDepth = cardStep - index;
      const baseScale = 1 - (stackDepth * 0.1);
      
      return {
        transform: `${baseTransform} scale(${Math.max(0.7, baseScale)})`,
        opacity: Math.max(0.3, 1 - (stackDepth * 0.2)),
        zIndex: 50 - stackDepth,
        transition: 'transform 0.3s ease, opacity 0.3s ease'
      };
    } else if (index === cardStep) {
      // Current active card - scaling up through sub-steps
      const scaleProgress = (subStep + 1) / 3; // 0.33, 0.66, 1.0
      const scale = 0.7 + (scaleProgress * 0.3); // Scale from 0.7 to 1.0
      
      return {
        transform: `${baseTransform} scale(${scale})`,
        opacity: scaleProgress,
        zIndex: 100 + index,
        transition: 'transform 0.3s ease, opacity 0.3s ease'
      };
    } else if (index === cardStep + 1 && subStep > 0) {
      // Next card - starting to appear behind current card
      const appearProgress = subStep / 3;
      const scale = 0.5 + (appearProgress * 0.2); // Scale from 0.5 to 0.7
      
      return {
        transform: `${baseTransform} scale(${scale})`,
        opacity: appearProgress * 0.5,
        zIndex: 90 + index,
        transition: 'transform 0.3s ease, opacity 0.3s ease'
      };
    } else {
      // Future cards - hidden
      return {
        transform: `${baseTransform} scale(0.5)`,
        opacity: 0,
        zIndex: 10,
        transition: 'transform 0.3s ease, opacity 0.3s ease'
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

      {/* Step Progress Indicators */}
      {isInStackingZone && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1 z-[200]">
          {Array.from({ length: totalSteps }, (_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                index <= currentStep ? 'bg-yellow' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
