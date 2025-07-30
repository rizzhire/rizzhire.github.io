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
              {/* Pill shape */}
              <path
                d="M 32 0 L 280 0 C 298 0 312 14 312 32 C 312 50 298 64 280 64 L 32 64 C 14 64 0 50 0 32 C 0 14 14 0 32 0 Z"
                fill="#FFD63F"
              />
              
              {/* Perfect circle connected to pill */}
              <circle
                cx="348"
                cy="32"
                r="32"
                fill="#FFD63F"
              />
              
              {/* Connection bridge */}
              <path
                d="M 312 20 C 320 16 328 16 316 32 C 328 48 320 48 312 44"
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