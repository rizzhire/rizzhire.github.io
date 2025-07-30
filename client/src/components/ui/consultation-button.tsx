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
        {/* Connected button shape with waist bridge */}
        {!isHovered && (
          <div className="relative flex items-center">
            {/* Main rectangular button with arrow on left */}
            <div className="bg-yellow text-black font-semibold text-lg pl-12 pr-8 py-4 rounded-l-full rounded-r-[8px] relative">
              <ArrowUpRight className="w-5 h-5 text-black absolute left-4 top-1/2 transform -translate-y-1/2" />
              Schedule Consultation
            </div>
            
            {/* Waist bridge connector */}
            <div className="bg-yellow h-12 w-4 relative" 
                 style={{clipPath: 'polygon(0% 25%, 100% 40%, 100% 60%, 0% 75%)'}}>
            </div>
            
            {/* Connected circular element with increased curve */}
            <div className="bg-yellow w-16 h-16 rounded-full flex items-center justify-center -ml-4 relative z-10">
              <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
          </div>
        )}
        
        {/* Separated state on hover */}
        {isHovered && (
          <>
            <div className="bg-yellow pl-12 pr-8 py-4 rounded-full transform hover:scale-105 transition-transform duration-300 relative">
              <ArrowUpRight className="w-5 h-5 text-black absolute left-4 top-1/2 transform -translate-y-1/2" />
              <span className="text-black font-semibold text-lg">Schedule Consultation</span>
            </div>
            <div className="bg-yellow w-16 h-16 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-2 h-2 bg-black rounded-full"></div>
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