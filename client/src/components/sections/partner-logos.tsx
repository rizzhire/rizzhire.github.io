import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useRef, useEffect, useState } from "react";
import emaarLogo from "@assets/Emaar_logo.svg_1754407618459.png";
import nayaraLogo from "@assets/Picsart_25-08-05_22-18-08-535_1754412566927.png";
import etisalatLogo from "@assets/Etisalat_Logo-595x700_1754407618460.png";
import sodexoLogo from "@assets/Sodexo_logo.svg_1754407618461.png";
import uccLogo from "@assets/Picsart_25-08-05_22-06-20-594_1754411861151.png";
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
    if (logoName === 'Nayara Energy') {
      return isHover 
        ? 'grayscale(0%) contrast(1) brightness(1) saturate(1)' // Original colors on hover
        : 'grayscale(100%) contrast(1.5) brightness(0.7)'; // Lighter black & white to preserve logo shape
    }
    
    if (logoName === 'Etisalat') {
      return isHover 
        ? 'grayscale(0%) contrast(1) brightness(1) saturate(1)' // Original colors on hover
        : 'grayscale(100%) contrast(1.4) brightness(0.6)'; // Lighter black & white for Etisalat logo visibility
    }
    
    // Default for all other logos
    return isHover 
      ? 'grayscale(0%) contrast(1) brightness(1) saturate(1)' // Original colors on hover
      : 'grayscale(100%) contrast(1.2) brightness(0.3)'; // Standard black & white
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
    // Handle DP World to Emaar (carousel wraps around)
    if (currentLogo === 'DP World' && (nextLogo === 'Emaar' || !nextLogo)) {
      return `${baseSpacing - 48}px`; // Maximum overlapping spacing after DP World to Emaar
    }
    
    return `${baseSpacing}px`;
  };

  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: logosRef, isVisible: logosVisible } = useScrollAnimation({ rootMargin: '0px 0px -50px 0px' });
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Continuous auto-scroll using JavaScript for true infinite behavior
  const startAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
    
    autoScrollIntervalRef.current = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container || isUserScrolling) return;
      
      const scrollWidth = container.scrollWidth;
      const maxScroll = scrollWidth / 2;
      const currentScroll = container.scrollLeft;
      const scrollStep = 1; // 1px per interval for smooth motion
      
      if (currentScroll >= maxScroll - 5) {
        // Smoother seamless loop - reset when closer to end to avoid visible jump
        container.scrollLeft = 1;
      } else {
        container.scrollLeft = currentScroll + scrollStep;
      }
    }, 12); // Faster speed with ~83fps for smooth animation
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    setIsUserScrolling(true);
    
    // Handle seamless infinite scrolling during manual interaction
    const scrollWidth = container.scrollWidth;
    const maxScroll = scrollWidth / 2;
    
    // Smoother seamless looping for manual scroll
    if (container.scrollLeft >= maxScroll - 20) {
      container.scrollLeft = container.scrollLeft - maxScroll + 5;
    } else if (container.scrollLeft <= 5) {
      container.scrollLeft = container.scrollLeft + maxScroll - 5;
    }
    
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    const newTimeout = setTimeout(() => {
      setIsUserScrolling(false);
      // Auto-scroll will continue from current position
    }, 2000);
    
    setScrollTimeout(newTimeout);
  };

  // Start auto-scroll on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      startAutoScroll();
    }, 100); // Small delay to ensure component is mounted
    
    return () => {
      clearTimeout(timer);
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, []);

  // Restart auto-scroll when user stops interacting
  useEffect(() => {
    if (!isUserScrolling) {
      startAutoScroll();
    }
  }, [isUserScrolling]);

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
          className="flex overflow-x-auto scrollbar-hide"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none'
          }}
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
                  marginRight: index < partners.length - 1 
                    ? getLogoSpacing(partner.name, partners[index + 1]?.name) 
                    : getLogoSpacing(partner.name, partners[0]?.name) // Handle wraparound to first logo
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
                  marginRight: index < partners.length - 1 
                    ? getLogoSpacing(partner.name, partners[index + 1]?.name) 
                    : getLogoSpacing(partner.name, partners[0]?.name) // Handle wraparound to first logo
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
