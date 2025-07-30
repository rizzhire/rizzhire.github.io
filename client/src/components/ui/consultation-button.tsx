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
      style={{ width: 'fit-content' }}
    >
      {/* Main pill-shaped button with connected circle */}
      <div className={`
        relative flex items-center
        bg-yellow text-black
        font-semibold text-lg
        shadow-lg hover:shadow-xl
        transition-all duration-600 ease-out
        transform hover:scale-[1.02]
        ${isHovered 
          ? 'rounded-l-full rounded-r-full' 
          : 'rounded-full'
        }
      `}>
        {/* Text part */}
        <div className="px-8 py-4">
          <span className="relative z-10">Schedule Consultation</span>
        </div>
        
        {/* Connected circle part */}
        <div className={`
          flex items-center justify-center
          bg-yellow
          transition-all duration-600 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
          ${isHovered 
            ? 'w-16 h-16 rounded-full ml-4 mr-0' 
            : 'w-16 h-16 rounded-full -ml-8 mr-0'
          }
        `}>
          <ArrowUpRight 
            className={`
              text-black transition-all duration-400 ease-out
              ${isHovered ? 'w-6 h-6 opacity-100 rotate-0' : 'w-5 h-5 opacity-80 rotate-45'}
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