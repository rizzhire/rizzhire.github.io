import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface ConsultationButtonProps {
  className?: string;
}

export default function ConsultationButton({ className = "" }: ConsultationButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative inline-block cursor-pointer group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Single connected shape using CSS mask for inverted curve */}
      <div className={`
        relative bg-yellow text-black font-semibold text-lg flex items-center
        shadow-lg hover:shadow-xl
        transition-all duration-600 ease-out
        transform hover:scale-[1.02]
        ${isHovered 
          ? 'rounded-full' 
          : 'consultation-connected-shape'
        }
      `}
      style={isHovered ? {
        padding: '16px 32px'
      } : {
        paddingLeft: '32px',
        paddingRight: '80px',
        paddingTop: '16px', 
        paddingBottom: '16px'
      }}
      >
        <span className="relative z-10">Schedule Consultation</span>
        
        {/* Arrow circle - positioned at the end of pill */}
        <div className={`
          absolute top-1/2 -translate-y-1/2
          bg-yellow
          w-16 h-16 rounded-full
          flex items-center justify-center
          shadow-lg hover:shadow-xl
          transition-all duration-600 ease-out
          transform hover:scale-105
          ${isHovered 
            ? 'right-0 translate-x-20' 
            : 'right-0 translate-x-8'
          }
        `}>
          <ArrowUpRight 
            className={`
              text-black transition-all duration-400 ease-out
              ${isHovered ? 'w-6 h-6 opacity-100 rotate-0' : 'w-5 h-5 opacity-90 rotate-0'}
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