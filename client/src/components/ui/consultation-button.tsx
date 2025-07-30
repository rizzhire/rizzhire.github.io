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
        {/* Perfect pill-circle shape matching mockup */}
        {!isHovered && (
          <div className="relative">
            <svg width="380" height="64" viewBox="0 0 380 64" className="drop-shadow-lg">
              {/* Main connected shape with perfect circle */}
              <path
                d="M 32 0 L 284 0 C 302 0 316 10 324 20 C 332 10 342 0 348 0 C 364 0 380 16 380 32 C 380 48 364 64 348 64 C 342 64 332 54 324 44 C 316 54 302 64 284 64 L 32 64 C 14 64 0 50 0 32 C 0 14 14 0 32 0 Z"
                fill="#FFD63F"
              />
              
              {/* Text */}
              <text
                x="160"
                y="38"
                textAnchor="middle"
                className="fill-black font-semibold"
                style={{ fontSize: '18px', fontFamily: 'system-ui, sans-serif', dominantBaseline: 'middle' }}
              >
                Schedule Consultation
              </text>
              
              {/* Arrow in circle */}
              <g transform="translate(348, 32)">
                <path
                  d="M-6 -6l12 12m0-12l-12 12"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
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