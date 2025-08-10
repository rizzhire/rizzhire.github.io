import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface ConsultationButtonProps {
  className?: string;
}

export default function ConsultationButton({ className = "" }: ConsultationButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // No scroll animations - keeping original button behavior

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);
    // Redirect to Calendly
    window.open('https://calendly.com/contact-hirenet', '_blank');
  };

  return (
    <div 
      className={`relative cursor-pointer group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={() => setIsHovered(true)}
      onClick={handleClick}
    >
      {/* Main button with water drop detachment effect */}
      <div className="relative flex items-center">
        
        {/* Main button body */}
        <div 
          className={`
            relative overflow-hidden
            bg-black text-white font-semibold text-base max-md:text-sm
            px-7 py-3 max-md:px-6 max-md:py-2.5 rounded-full
            shadow-lg hover:shadow-2xl hover:shadow-black/50
            transform transition-all duration-500 ease-out
            ${isHovered ? 'scale-105 -translate-y-1' : ''}
            ${isClicked ? 'scale-98' : ''}
          `}>
          
          {/* Animated shine sweep */}
          <div className={`
            absolute inset-0 w-full h-full
            bg-gradient-to-r from-transparent via-white/60 to-transparent
            transform transition-transform duration-800 ease-out
            ${isHovered ? 'translate-x-full' : '-translate-x-full'}
            skew-x-12
          `} />
          
          {/* Button text */}
          <div className="relative z-10 whitespace-nowrap">
            <span className={`
              transition-all duration-300 ease-out
              ${isHovered ? 'tracking-wide' : ''}
            `}>
              Schedule Consultation
            </span>
          </div>
        </div>
        
        {/* Water drop arrow - detaches on hover */}
        <div 
          className={`
            relative bg-black w-10 h-10 max-md:w-8 max-md:h-8 rounded-full
            flex items-center justify-center
            transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
            ${isHovered 
              ? '-ml-2 translate-x-6 translate-y-2 scale-110' 
              : '-ml-5'
            }
            ${isClicked ? 'scale-125 translate-y-4' : ''}
          `}>
          
          {/* Water drop connection bridge */}
          <div className={`
            absolute left-0 top-1/2 -translate-y-1/2
            w-6 h-1 bg-black
            transform transition-all duration-250 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] origin-left
            ${isHovered 
              ? 'scale-x-0 opacity-0' 
              : 'scale-x-100 opacity-100'
            }
          `} />
          
          {/* Water drop tail effect */}
          <div className={`
            absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2
            w-4 h-6 bg-black
            transform transition-all duration-280 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
            ${isHovered 
              ? 'scale-0 opacity-0 rotate-12' 
              : 'scale-100 opacity-100'
            }
          `} style={{
            clipPath: isHovered ? 'circle(0% at 50% 50%)' : 'ellipse(50% 70% at 80% 50%)'
          }} />
          
          {/* Arrow icon */}
          <ArrowUpRight className={`
            w-5 h-5 text-white relative z-10
            transition-all duration-300 ease-in-out
            ${isHovered ? 'rotate-6 scale-105' : ''}
            ${isClicked ? 'rotate-45 scale-125' : ''}
          `} />
          
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