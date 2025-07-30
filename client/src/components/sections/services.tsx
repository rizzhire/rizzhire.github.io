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

  useEffect(() => {
    let animationFrameId: number;
    
    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        if (!sectionRef.current || !containerRef.current) return;

        const currentScrollY = window.scrollY;
        const direction = currentScrollY > lastScrollY.current ? 'down' : 'up';
        scrollDirection.current = direction;
        lastScrollY.current = currentScrollY;

        const sectionRect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if we're in the stacking zone
        const sectionTop = sectionRect.top;
        const sectionBottom = sectionRect.bottom;
        const inStackingZone = sectionTop <= 0 && sectionBottom >= windowHeight;

        if (inStackingZone) {
          // Lock scroll and handle stacking animation
          if (!isScrollLocked) {
            setIsScrollLocked(true);
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${currentScrollY}px`;
            document.body.style.width = '100%';
          }

          // Calculate progress through the stacking sequence
          const sectionHeight = sectionRect.height;
          const scrolled = Math.abs(sectionTop);
          const progress = Math.min(scrolled / (sectionHeight * 0.6), 1);
          
          setScrollProgress(progress);

          // Determine current card based on scroll progress
          if (progress < 0.33) {
            setCurrentCard(0);
          } else if (progress < 0.66) {
            setCurrentCard(1);
          } else {
            setCurrentCard(2);
          }
        } else {
          // Unlock scroll when leaving stacking zone
          if (isScrollLocked) {
            setIsScrollLocked(false);
            const scrollY = document.body.style.top;
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: false });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      
      // Clean up scroll lock
      if (isScrollLocked) {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
      }
    };
  }, [isScrollLocked]);

  const getCardStyle = (index: number) => {
    const baseTransform = 'translateX(-50%) translateY(-50%)';
    const stackOffset = index * -8;
    const scaleReduction = index * 0.02;
    const opacityReduction = index * 0.1;

    if (currentCard >= index) {
      // Card is stacked
      return {
        transform: `${baseTransform} translateY(${stackOffset}px) scale(${1 - scaleReduction})`,
        opacity: Math.max(0.7, 1 - opacityReduction),
        zIndex: 20 + index,
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      };
    } else {
      // Card is hidden/waiting
      return {
        transform: `${baseTransform} translateY(100px) scale(0.9)`,
        opacity: 0,
        zIndex: 10,
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      };
    }
  };

  return (
    <section ref={sectionRef} id="services" className="relative cream" style={{ height: '400vh' }}>
      {/* Header */}
      <div className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-yellow">Services</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive workforce solutions designed to accelerate your business growth and operational excellence.
          </p>
        </div>
      </div>

      {/* Stacking Container */}
      <div 
        ref={containerRef}
        className="sticky top-0 left-0 w-full h-screen flex items-center justify-center"
        style={{ zIndex: 100 }}
      >
        {services.map((service, index) => (
          <Card 
            key={index}
            className={`
              ${service.bgColor} p-6 md:p-8 rounded-2xl border-0 shadow-2xl
              absolute w-full max-w-sm md:max-w-lg mx-auto
              backdrop-blur-sm
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
