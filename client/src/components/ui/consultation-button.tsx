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
      <div className={`
        transition-all duration-600 ease-out
        ${isHovered ? 'flex gap-4 items-center' : 'relative flex items-center'}
      `}>
        {/* Connected button shape joined with circle */}
        {!isHovered && (
          <div className="relative flex items-center">
            {/* Main rectangular button with rounded ends */}
            <div className="bg-yellow text-black font-semibold text-lg px-8 py-4 rounded-l-full rounded-r-full relative">
              Schedule Consultation
            </div>
            
            {/* Connected circular element touching the button */}
            <div className="bg-yellow w-16 h-16 rounded-full flex items-center justify-center -ml-8 relative z-10">
              <ArrowUpRight className="w-5 h-5 text-black" />
            </div>
          </div>
        )}
        
        {/* Separated state on hover */}
        {isHovered && (
          <>
            <div className="bg-yellow px-8 py-4 rounded-full transform hover:scale-105 transition-transform duration-300">
              <span className="text-black font-semibold text-lg">Schedule Consultation</span>
            </div>
            <div className="bg-yellow w-16 h-16 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
              <ArrowUpRight className="w-5 h-5 text-black" />
            </div>
          </>
        )}
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