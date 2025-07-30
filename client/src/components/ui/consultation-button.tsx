import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface ConsultationButtonProps {
  className?: string;
}

export default function ConsultationButton({ className = "" }: ConsultationButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative cursor-pointer group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Single connected shape using SVG for perfect curves */}
      <div className={`
        relative inline-flex items-center
        transition-all duration-600 ease-out
        ${isHovered ? 'gap-4' : 'gap-0'}
      `}>
        {/* Main pill button */}
        <div className={`
          relative bg-yellow text-black font-semibold text-lg
          px-8 py-4 shadow-lg hover:shadow-xl
          transition-all duration-600 ease-out
          transform hover:scale-[1.02]
          ${isHovered 
            ? 'rounded-full' 
            : 'rounded-l-full rounded-r-none'
          }
        `}>
          <span className="relative z-10">Schedule Consultation</span>
        </div>
        
        {/* Curved connector - only visible when not hovered */}
        <div className={`
          bg-yellow h-16 
          transition-all duration-600 ease-out
          ${isHovered 
            ? 'w-0 opacity-0' 
            : 'w-4 opacity-100'
          }
        `}
        style={{
          clipPath: isHovered ? 'none' : 'polygon(0% 30%, 100% 45%, 100% 55%, 0% 70%)'
        }}
        />
        
        {/* Arrow circle */}
        <div className={`
          bg-yellow w-16 h-16 rounded-full
          flex items-center justify-center
          shadow-lg hover:shadow-xl
          transition-all duration-600 ease-out
          transform hover:scale-105
          ${isHovered 
            ? 'rounded-full ml-0' 
            : 'rounded-l-none rounded-r-full -ml-4'
          }
        `}>
          <ArrowUpRight 
            className={`
              text-black transition-all duration-400 ease-out
              ${isHovered ? 'w-6 h-6 opacity-100' : 'w-5 h-5 opacity-90'}
            `} 
          />
        </div>
      </div>
      
      {/* Subtle glow effect */}
      <div className={`
        absolute inset-0 bg-yellow/30 rounded-full blur-lg
        transition-opacity duration-500
        ${isHovered ? 'opacity-60' : 'opacity-0'}
        -z-10
      `} />
    </div>
  );
}