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
        ${isHovered ? 'flex gap-4 items-center' : 'relative inline-block'}
      `}>
        {/* Connected dumbbell shape - circle touches pill top/bottom */}
        {!isHovered && (
          <svg 
            width="384" 
            height="64" 
            viewBox="0 0 384 64" 
            className="drop-shadow-lg"
          >
            <path 
              d="M 32 0 L 288 0 C 300 0 320 0 320 0 C 320 0 352 0 352 32 C 352 64 320 64 320 64 C 300 64 288 64 288 64 L 32 64 C 14 64 0 50 0 32 C 0 14 14 0 32 0 Z" 
              fill="#FFD63F" 
            />
            <circle 
              cx="352" 
              cy="32" 
              r="32" 
              fill="#FFD63F"
            />
            <text 
              x="160" 
              y="38" 
              textAnchor="middle" 
              className="fill-black font-semibold text-lg"
              style={{ fontSize: '18px', fontFamily: 'system-ui, sans-serif' }}
            >
              Schedule Consultation
            </text>
            <g transform="translate(352, 32)">
              <path 
                d="M-6 -6l12 12m0-12l-12 12" 
                stroke="black" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </g>
          </svg>
        )}
        
        {/* Separated state */}
        {isHovered && (
          <>
            <div className="bg-yellow px-8 py-4 rounded-full shadow-lg">
              <span className="text-black font-semibold text-lg">Schedule Consultation</span>
            </div>
            <div className="bg-yellow w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
              <ArrowUpRight className="w-6 h-6 text-black" />
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