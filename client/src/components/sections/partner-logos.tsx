import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useRef, useEffect, useState } from "react";
import emaarLogo from "@assets/Emaar_logo.svg_1754407618459.png";
import nayaraLogo from "@assets/Logo_Nayara_Energy_1754407618460.jpg";
import etisalatLogo from "@assets/Etisalat_Logo-595x700_1754407618460.png";
import sodexoLogo from "@assets/Sodexo_logo.svg_1754407618461.png";
import uccLogo from "@assets/ucc-logo_1754407618462.jpg";
import dpWorldLogo from "@assets/DP_World_2021_logo_1754407618463.png";

export default function PartnerLogos() {
  const partners = [
    { name: "Emaar", image: emaarLogo },
    { name: "Nayara Energy", image: nayaraLogo },
    { name: "Etisalat", image: etisalatLogo },
    { name: "Sodexo", image: sodexoLogo },
    { name: "UCC", image: uccLogo },
    { name: "DP World", image: dpWorldLogo }
  ];

  const getLogoFilter = (logoName: string, isHover: boolean) => {
    switch (logoName) {
      case 'Nayara Energy':
        return isHover 
          ? 'grayscale(70%) contrast(3) brightness(1) saturate(0) invert(0.1)' 
          : 'grayscale(100%) contrast(3.5) brightness(0.3) saturate(0) invert(0.2)';
      case 'UCC':
        return isHover 
          ? 'grayscale(70%) contrast(1.8) brightness(0.8) saturate(0)' 
          : 'grayscale(100%) contrast(2) brightness(0.5) saturate(0)';
      default:
        return isHover 
          ? 'grayscale(70%) contrast(1) brightness(0.6)' 
          : 'grayscale(100%) contrast(1.2) brightness(0.3)';
    }
  };

  const getLogoSpacing = (currentLogo: string, nextLogo: string) => {
    // Base spacing
    const baseSpacing = 32;
    
    // Special spacing adjustments based on logo combinations
    if (currentLogo === 'Nayara Energy' && nextLogo === 'Etisalat') {
      return `${baseSpacing - 48}px`; // Maximum overlapping for perfect uniformity
    }
    if (currentLogo === 'Etisalat' && nextLogo === 'Sodexo') {
      return `${baseSpacing - 8}px`; // Closer spacing for better balance
    }
    if (currentLogo === 'UCC' && nextLogo === 'DP World') {
      return `${baseSpacing - 48}px`; // Maximum overlapping spacing before DP World
    }
    if (currentLogo === 'DP World' && nextLogo === 'Emaar') {
      return `${baseSpacing}px`; // Closer spacing after DP World
    }
    
    return `${baseSpacing}px`;
  };

  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: logosRef, isVisible: logosVisible } = useScrollAnimation({ rootMargin: '0px 0px -50px 0px' });
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isUserScrolling) return;

    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const maxScroll = scrollWidth / 2; // Half because we duplicate logos

    let animationId: number;
    let startTime: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      
      // 30 seconds for full cycle (same speed as before)
      const progress = (elapsed / 30000) % 1;
      const newScrollX = progress * maxScroll;
      
      setScrollX(newScrollX);
      container.scrollLeft = newScrollX;

      if (newScrollX >= maxScroll - 1) {
        container.scrollLeft = 0;
        setScrollX(0);
        startTime = currentTime;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isUserScrolling]);

  const handleScroll = () => {
    setIsUserScrolling(true);
    
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    const newTimeout = setTimeout(() => {
      setIsUserScrolling(false);
    }, 2000);
    
    setScrollTimeout(newTimeout);
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div 
        ref={titleRef}
        className={`
          max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 transition-all duration-700 ease-out
          ${titleVisible 
            ? 'animate-slide-up-fade opacity-100' 
            : 'opacity-0 transform translate-y-4'
          }
        `}
      >
        <h3 className="text-center text-2xl font-bold mb-6">Our <span className="text-yellow">Partners</span></h3>
        <p className="text-center text-gray-600">Trusted by leading organizations across the Middle East and beyond.</p>
      </div>
      
      <div 
        ref={logosRef}
        className={`
          relative transition-all duration-800 ease-out
          ${logosVisible 
            ? 'animate-slide-up-fade opacity-100' 
            : 'opacity-0 transform translate-y-8'
          }
        `}
      >
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onScroll={handleScroll}
        >
          <div className="flex items-center flex-shrink-0 px-6">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-center cursor-pointer transition-all duration-300 group ${
                  partner.name === 'DP World' ? 'w-64 h-24' : 'w-48 h-16'
                }`}
                style={{
                  marginRight: index < partners.length - 1 ? getLogoSpacing(partner.name, partners[index + 1]?.name) : '0px'
                }}
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className={`object-contain transition-all duration-300 group-hover:scale-105 ${
                    partner.name === 'DP World' ? 'w-full h-full scale-[4.0]' : 'max-w-full max-h-full'
                  }`}
                  style={{
                    filter: getLogoFilter(partner.name, false),
                    transform: partner.name === 'Sodexo' 
                      ? 'translateY(-4px)' 
                      : partner.name === 'DP World' 
                        ? 'translateY(-2px)' 
                        : 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = getLogoFilter(partner.name, true);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = getLogoFilter(partner.name, false);
                  }}
                />
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center flex-shrink-0 px-6">
            {partners.map((partner, index) => (
              <div 
                key={`duplicate-${index}`} 
                className={`flex items-center justify-center cursor-pointer transition-all duration-300 group ${
                  partner.name === 'DP World' ? 'w-64 h-24' : 'w-48 h-16'
                }`}
                style={{
                  marginRight: index < partners.length - 1 ? getLogoSpacing(partner.name, partners[index + 1]?.name) : '0px'
                }}
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className={`object-contain transition-all duration-300 group-hover:scale-105 ${
                    partner.name === 'DP World' ? 'w-full h-full scale-[4.0]' : 'max-w-full max-h-full'
                  }`}
                  style={{
                    filter: getLogoFilter(partner.name, false),
                    transform: partner.name === 'Sodexo' 
                      ? 'translateY(-4px)' 
                      : partner.name === 'DP World' 
                        ? 'translateY(-2px)' 
                        : 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = getLogoFilter(partner.name, true);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = getLogoFilter(partner.name, false);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
