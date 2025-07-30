import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface ConsultationButtonProps {
  className?: string;
}

export default function ConsultationButton({ className = "" }: ConsultationButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <div 
      className={`relative cursor-pointer group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Super animated yellow button */}
      <div className={`
        relative overflow-hidden
        bg-yellow text-black font-semibold text-lg
        px-8 py-4 rounded-full
        shadow-lg hover:shadow-2xl hover:shadow-yellow/60
        transform transition-all duration-300 ease-out
        ${isHovered ? 'scale-110 -translate-y-2 rotate-1' : 'scale-100'}
        ${isClicked ? 'scale-95 translate-y-0' : ''}
        hover:bg-yellow/90
      `}>
        
        {/* Multiple animated shine effects */}
        <div className={`
          absolute inset-0 w-full h-full
          bg-gradient-to-r from-transparent via-white/40 to-transparent
          transform transition-transform duration-500 ease-out
          ${isHovered ? 'translate-x-full animate-pulse' : '-translate-x-full'}
          skew-x-12
        `} />
        
        <div className={`
          absolute inset-0 w-1/3 h-full
          bg-gradient-to-r from-white/30 to-transparent
          transform transition-all duration-700 ease-out
          ${isHovered ? 'translate-x-96 scale-150' : '-translate-x-32'}
          rotate-12
        `} />
        
        {/* Button content with micro animations */}
        <div className="relative z-10 flex items-center justify-center gap-3">
          <span className={`
            transition-all duration-300 ease-out
            ${isHovered ? 'tracking-wider text-shadow-sm' : ''}
            ${isClicked ? 'scale-95' : ''}
          `}>
            Schedule Consultation
          </span>
          
          {/* Super animated arrow */}
          <div className={`
            transition-all duration-300 ease-out
            ${isHovered ? 'translate-x-2 scale-125 rotate-45' : ''}
            ${isClicked ? 'translate-x-4 scale-150 rotate-90' : ''}
          `}>
            <ArrowUpRight className={`
              w-5 h-5 transition-all duration-300
              ${isHovered ? 'animate-bounce' : ''}
            `} />
          </div>
        </div>
        
        {/* Ripple effect on click */}
        {isClicked && (
          <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
        )}
        
        {/* Rotating border effect */}
        <div className={`
          absolute inset-0 rounded-full
          bg-gradient-to-r from-yellow via-white/20 to-yellow
          transition-all duration-500
          ${isHovered ? 'animate-spin opacity-30 scale-110' : 'opacity-0 scale-100'}
          blur-sm
        `} />
      </div>
      
      {/* Floating animated particles */}
      <div className={`
        absolute inset-0 pointer-events-none
        transition-opacity duration-300
        ${isHovered ? 'opacity-100' : 'opacity-0'}
      `}>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`
              absolute w-2 h-2 bg-yellow rounded-full
              ${isHovered ? 'animate-ping' : ''}
            `}
            style={{
              left: `${10 + i * 8}%`,
              top: `${15 + (i % 3) * 30}%`,
              animationDelay: `${i * 150}ms`,
              animationDuration: `${1 + i * 0.1}s`
            }}
          />
        ))}
      </div>
      
      {/* Expanding rings on hover */}
      <div className={`
        absolute inset-0 rounded-full border-2 border-yellow/40
        transition-all duration-500
        ${isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}
        animate-pulse
      `} />
      
      <div className={`
        absolute inset-0 rounded-full border border-yellow/20
        transition-all duration-700
        ${isHovered ? 'scale-200 opacity-0' : 'scale-110 opacity-100'}
        animate-pulse
      `} style={{ animationDelay: '200ms' }} />
      
      {/* Dynamic glow effect */}
      <div className={`
        absolute inset-0 bg-yellow/40 rounded-full blur-xl
        transition-all duration-500 ease-out
        ${isHovered ? 'opacity-100 scale-150 animate-pulse' : 'opacity-0 scale-100'}
        ${isClicked ? 'scale-200 opacity-80' : ''}
        -z-10
      `} />
      
      {/* Background wave effect */}
      <div className={`
        absolute inset-0 bg-gradient-radial from-yellow/20 to-transparent
        rounded-full transition-all duration-1000
        ${isHovered ? 'scale-300 opacity-50 animate-spin' : 'scale-100 opacity-0'}
        -z-20
      `} />
    </div>
  );
}