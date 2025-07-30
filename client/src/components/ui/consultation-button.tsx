import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface ConsultationButtonProps {
  className?: string;
}

export default function ConsultationButton({ className = "" }: ConsultationButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative flex items-center cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main horizontal bar with text */}
      <div className={`
        relative bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 
        text-white px-10 py-5 font-semibold text-lg tracking-wide
        transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        ${isHovered 
          ? 'rounded-l-full rounded-r-none pr-8 shadow-2xl' 
          : 'rounded-full pr-10 shadow-lg'
        }
        transform hover:scale-[1.03]
        backdrop-blur-sm
        border border-white/10
      `}>
        <span className="relative z-10 font-medium">Schedule Consultation</span>
        
        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                       opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-full" />
      </div>
      
      {/* Dot that transforms into circle with arrow */}
      <div className={`
        relative bg-gradient-to-br from-pink-500 via-pink-600 to-purple-600
        flex items-center justify-center
        transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        shadow-lg border border-white/20 backdrop-blur-sm
        ${isHovered 
          ? 'w-20 h-20 rounded-full ml-0 scale-100 shadow-2xl rotate-12' 
          : 'w-6 h-6 rounded-full -ml-3 scale-90 rotate-0'
        }
      `}>
        <ArrowUpRight 
          className={`
            text-white transition-all duration-500 ease-out
            ${isHovered 
              ? 'w-8 h-8 opacity-100 rotate-0 scale-100' 
              : 'w-0 h-0 opacity-0 rotate-180 scale-50'
            }
          `} 
        />
        
        {/* Inner glow for the circle */}
        <div className={`
          absolute inset-0 bg-gradient-to-br from-white/30 to-transparent 
          rounded-full transition-opacity duration-500
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `} />
      </div>
      
      {/* Enhanced glow effect on hover */}
      <div className={`
        absolute inset-0 bg-gradient-to-r from-pink-400 via-pink-500 to-purple-500
        rounded-full blur-2xl transition-all duration-700
        ${isHovered ? 'opacity-30 scale-110' : 'opacity-0 scale-95'}
        -z-10
      `} />
      
      {/* Outer ambient glow */}
      <div className={`
        absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300
        rounded-full blur-3xl transition-all duration-1000
        ${isHovered ? 'opacity-20 scale-125' : 'opacity-0 scale-90'}
        -z-20
      `} />
    </div>
  );
}