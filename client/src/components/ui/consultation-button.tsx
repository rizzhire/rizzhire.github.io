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
      {/* Perfect connected shape matching mockup exactly */}
      <div className={`
        relative inline-block
        bg-yellow
        shadow-lg hover:shadow-xl
        transition-all duration-600 ease-out
        transform hover:scale-[1.02]
        ${isHovered 
          ? 'consultation-button-separated' 
          : 'consultation-button-connected'
        }
      `}>
        {/* Text container */}
        <div className="relative z-10 px-8 py-4 flex items-center">
          <span className="text-black font-semibold text-lg">Schedule Consultation</span>
          
          {/* Arrow circle positioned absolutely */}
          <div className={`
            absolute flex items-center justify-center
            w-16 h-16
            transition-all duration-600 ease-out
            ${isHovered 
              ? 'right-0 translate-x-20' 
              : 'right-0 translate-x-8'
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