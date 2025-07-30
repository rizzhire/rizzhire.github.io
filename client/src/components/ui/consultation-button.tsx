import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface ConsultationButtonProps {
  className?: string;
}

export default function ConsultationButton({ className = "" }: ConsultationButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative inline-flex items-center cursor-pointer group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main pill-shaped button - default connected state */}
      <div className={`
        relative flex items-center
        bg-yellow text-black
        font-semibold text-lg
        shadow-lg hover:shadow-xl
        transition-all duration-600 ease-out
        transform hover:scale-[1.02]
        ${isHovered 
          ? 'rounded-full px-8 py-4 pr-8' 
          : 'rounded-l-full rounded-r-none px-8 py-4 pr-6'
        }
      `}>
        <span className="relative z-10">Schedule Consultation</span>
      </div>
      
      {/* Circle with arrow - connected by default, separates on hover */}
      <div className={`
        flex items-center justify-center
        bg-yellow
        w-16 h-16 rounded-full
        shadow-lg hover:shadow-xl
        transition-all duration-600 ease-out
        transform hover:scale-105
        ${isHovered 
          ? 'ml-4 translate-x-0' 
          : 'ml-0 -translate-x-2'
        }
      `}>
        <ArrowUpRight 
          className={`
            text-black transition-all duration-400 ease-out
            ${isHovered ? 'w-6 h-6 opacity-100 rotate-0' : 'w-5 h-5 opacity-90 rotate-0'}
          `} 
        />
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