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
      {/* Attractive gradient button with fancy animations */}
      <div className={`
        relative overflow-hidden
        bg-gradient-to-r from-yellow via-yellow to-amber-400
        text-black font-semibold text-lg
        px-8 py-4 rounded-full
        shadow-lg hover:shadow-2xl
        transform transition-all duration-500 ease-out
        hover:scale-105 hover:-translate-y-1
        ${isHovered ? 'shadow-yellow/50' : ''}
      `}>
        {/* Animated background shine effect */}
        <div className={`
          absolute inset-0 w-full h-full
          bg-gradient-to-r from-transparent via-white/20 to-transparent
          transform transition-transform duration-700 ease-out
          ${isHovered ? 'translate-x-full' : '-translate-x-full'}
        `} />
        
        {/* Button content */}
        <div className="relative z-10 flex items-center justify-center gap-3">
          <span className="transition-all duration-300">
            Schedule Consultation
          </span>
          
          {/* Animated arrow */}
          <div className={`
            transition-all duration-300 ease-out
            ${isHovered ? 'translate-x-1 scale-110' : ''}
          `}>
            <ArrowUpRight className={`
              w-5 h-5 transition-all duration-300
              ${isHovered ? 'rotate-12' : ''}
            `} />
          </div>
        </div>
        
        {/* Pulse effect on hover */}
        <div className={`
          absolute inset-0 rounded-full
          bg-gradient-to-r from-yellow/50 to-amber-400/50
          transition-all duration-500
          ${isHovered ? 'animate-pulse scale-110' : 'scale-100 opacity-0'}
        `} />
      </div>
      
      {/* Floating particles effect */}
      <div className={`
        absolute inset-0 pointer-events-none
        transition-opacity duration-500
        ${isHovered ? 'opacity-100' : 'opacity-0'}
      `}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`
              absolute w-1 h-1 bg-yellow rounded-full
              animate-bounce
            `}
            style={{
              left: `${20 + i * 12}%`,
              top: `${20 + (i % 2) * 60}%`,
              animationDelay: `${i * 100}ms`,
              animationDuration: '1.5s'
            }}
          />
        ))}
      </div>
      
      {/* Glow effect */}
      <div className={`
        absolute inset-0 bg-yellow/30 rounded-full blur-xl
        transition-all duration-500
        ${isHovered ? 'opacity-70 scale-125' : 'opacity-0 scale-100'}
        -z-10
      `} />
    </div>
  );
}