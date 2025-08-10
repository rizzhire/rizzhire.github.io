import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ConsultationButtonProps {
  className?: string;
}

export default function ConsultationButton({ className = "" }: ConsultationButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Separate scroll animations for text and arrow
  const { elementRef: textRef, isVisible: textVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -200px 0px'
  });
  const { elementRef: arrowRef, isVisible: arrowVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -200px 0px'
  });

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);
  };

  return (
    <div 
      className={`relative cursor-pointer group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Main button with water drop detachment effect */}
      <div className="relative flex items-center">
        
        {/* Main button body with unique typewriter reveal animation */}
        <div 
          className={`
            relative overflow-hidden
            bg-black text-white font-semibold text-lg
            px-8 py-4 rounded-full
            shadow-lg hover:shadow-2xl hover:shadow-black/50
            transform transition-all duration-500 ease-out
            ${isHovered ? 'scale-105 -translate-y-1' : ''}
            ${isClicked ? 'scale-98' : ''}
          `}
          style={{
            opacity: textVisible ? 1 : 0,
            ...(textVisible ? {} : {
              transform: 'translateY(32px) rotate(-3deg) scale(1.1)',
              transition: 'opacity 2s cubic-bezier(0.34,1.56,0.64,1), transform 2s cubic-bezier(0.34,1.56,0.64,1)'
            })
          }}>
          
          {/* Animated shine sweep */}
          <div className={`
            absolute inset-0 w-full h-full
            bg-gradient-to-r from-transparent via-white/60 to-transparent
            transform transition-transform duration-800 ease-out
            ${isHovered ? 'translate-x-full' : '-translate-x-full'}
            skew-x-12
          `} />
          
          {/* Button text */}
          <div className="relative z-10">
            <span className={`
              transition-all duration-300 ease-out
              ${isHovered ? 'tracking-wide' : ''}
            `}>
              Schedule Consultation
            </span>
          </div>
        </div>
        
        {/* Water drop arrow with unique magnetic pull animation - detaches on hover */}
        <div 
          className={`
            relative bg-black w-12 h-12 rounded-full
            flex items-center justify-center
            shadow-lg transition-all duration-500 ease-out
            ${isHovered 
              ? '-ml-2 translate-x-8 translate-y-2 scale-110 shadow-black/40' 
              : '-ml-6'
            }
            ${isClicked ? 'scale-125 translate-y-4' : ''}
          `} 
          style={{
            opacity: arrowVisible ? 1 : 0,
            ...(arrowVisible ? {} : {
              transform: 'translateX(80px) translateY(-48px) scale(0.5) rotate(360deg)',
              transition: 'opacity 2.5s cubic-bezier(0.68,-0.55,0.265,1.55) 600ms, transform 2.5s cubic-bezier(0.68,-0.55,0.265,1.55) 600ms'
            })
          }}>
          
          {/* Water drop connection bridge */}
          <div className={`
            absolute left-0 top-1/2 -translate-y-1/2
            w-6 h-1 bg-black
            transform transition-all duration-300 ease-out origin-left
            ${isHovered 
              ? 'scale-x-0 opacity-0' 
              : 'scale-x-100 opacity-100'
            }
          `} />
          
          {/* Water drop tail effect */}
          <div className={`
            absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2
            w-4 h-6 bg-black
            transform transition-all duration-300 ease-out
            ${isHovered 
              ? 'scale-0 opacity-0 rotate-45' 
              : 'scale-100 opacity-100'
            }
          `} style={{
            clipPath: isHovered ? 'circle(0% at 50% 50%)' : 'ellipse(50% 70% at 80% 50%)'
          }} />
          
          {/* Arrow icon with spin-in animation */}
          <ArrowUpRight className={`
            w-5 h-5 text-white relative z-10
            transition-all duration-1000ms ease-out
            ${arrowVisible 
              ? 'rotate-0 scale-100' 
              : 'rotate-[720deg] scale-0'
            }
            ${isHovered ? 'rotate-12 scale-110' : ''}
            ${isClicked ? 'rotate-45 scale-125' : ''}
          `} style={{
            transitionDelay: arrowVisible ? '1000ms' : '0ms'
          }} />
          
          {/* Ripple effect on detachment */}
          {isHovered && (
            <div className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
          )}
        </div>
      </div>
      
      {/* Floating droplets effect */}
      <div className={`
        absolute inset-0 pointer-events-none
        transition-opacity duration-300
        ${isHovered ? 'opacity-100' : 'opacity-0'}
      `}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`
              absolute w-1 h-1 bg-black rounded-full
              animate-float-up opacity-60
            `}
            style={{
              left: `${60 + i * 5}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 200}ms`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>
      
      {/* Main glow effect */}
      <div className={`
        absolute inset-0 bg-black/30 rounded-full blur-xl
        transition-all duration-500 ease-out
        ${isHovered ? 'opacity-70 scale-125' : 'opacity-0 scale-100'}
        -z-10
      `} />
      
      {/* Detached droplet glow */}
      <div className={`
        absolute right-0 top-1/2 -translate-y-1/2 translate-x-8
        w-12 h-12 bg-black/40 rounded-full blur-lg
        transition-all duration-500 ease-out
        ${isHovered ? 'opacity-60 scale-150' : 'opacity-0 scale-50'}
        -z-10
      `} />
    </div>
  );
}