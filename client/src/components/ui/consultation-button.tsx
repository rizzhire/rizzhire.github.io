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
      {/* Main pill-shaped button */}
      <div className={`
        relative
        bg-yellow text-black
        px-8 py-4 font-semibold text-lg
        rounded-full
        shadow-lg hover:shadow-xl
        transition-all duration-500 ease-out
        transform hover:scale-[1.02]
      `}>
        <span className="relative z-10">Schedule Consultation</span>
      </div>
      
      {/* Separated circle with arrow - creates the "i" shape */}
      <div className={`
        absolute top-1/2 -translate-y-1/2
        bg-yellow
        flex items-center justify-center
        w-16 h-16 rounded-full
        shadow-lg hover:shadow-xl
        transition-all duration-600 ease-out
        transform hover:scale-105
        ${isHovered 
          ? 'right-0 translate-x-20 opacity-100' 
          : 'right-0 translate-x-6 opacity-100'
        }
      `}>
        <ArrowUpRight 
          className={`
            text-black transition-all duration-400 ease-out
            ${isHovered ? 'w-6 h-6 opacity-100 rotate-0' : 'w-5 h-5 opacity-80 rotate-0'}
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