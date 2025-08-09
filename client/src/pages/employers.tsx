import Navbar from "@/components/layout/navbar";
import Contact from "@/components/sections/contact";

export default function Employers() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section for Employers */}
      <section className="relative py-20 cream overflow-hidden">
        {/* Enhanced Background Graphics (Same as Launch Your Global Career) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Enhanced Live Moving Floating Circles - More Visible */}
          <div className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-yellow-200/25 to-yellow-300/35 rounded-full blur-3xl animate-floatMoveEnhanced"></div>
          <div className="absolute top-40 right-20 w-36 h-36 bg-gradient-to-r from-blue-200/22 to-cyan-200/32 rounded-full blur-2xl animate-pulseEnhanced" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-56 h-56 bg-gradient-to-r from-orange-200/20 to-yellow-200/30 rounded-full blur-3xl animate-floatMoveEnhanced" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 right-1/3 w-40 h-40 bg-gradient-to-r from-purple-200/22 to-pink-200/32 rounded-full blur-2xl animate-rotateEnhanced" style={{animationDelay: '1.5s'}}></div>
          
          {/* Additional Enhanced Elements */}
          <div className="absolute top-1/2 left-8 w-32 h-32 bg-gradient-to-r from-emerald-200/25 to-green-200/35 rounded-full blur-2xl animate-pulseEnhanced" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-60 right-12 w-28 h-28 bg-gradient-to-r from-rose-200/22 to-red-200/32 rounded-full blur-xl animate-floatMoveEnhanced" style={{animationDelay: '4s'}}></div>
          
          {/* More Colorful Floating Elements for Empty Spaces */}
          <div className="absolute top-32 left-1/3 w-44 h-44 bg-gradient-to-r from-indigo-200/20 to-violet-200/30 rounded-full blur-3xl animate-pulseEnhanced" style={{animationDelay: '2.5s'}}></div>
          <div className="absolute bottom-40 right-20 w-36 h-36 bg-gradient-to-r from-teal-200/22 to-cyan-200/32 rounded-full blur-2xl animate-rotateEnhanced" style={{animationDelay: '1.8s'}}></div>
          <div className="absolute top-48 right-1/3 w-40 h-40 bg-gradient-to-r from-amber-200/20 to-orange-200/30 rounded-full blur-2xl animate-floatMoveEnhanced" style={{animationDelay: '3.5s'}}></div>
          <div className="absolute bottom-48 left-16 w-32 h-32 bg-gradient-to-r from-lime-200/25 to-emerald-200/35 rounded-full blur-xl animate-pulseEnhanced" style={{animationDelay: '4.2s'}}></div>
          <div className="absolute top-72 left-1/2 w-24 h-24 bg-gradient-to-r from-fuchsia-200/22 to-purple-200/32 rounded-full blur-xl animate-rotateEnhanced" style={{animationDelay: '5s'}}></div>
          <div className="absolute bottom-60 right-1/4 w-28 h-28 bg-gradient-to-r from-sky-200/20 to-blue-200/30 rounded-full blur-xl animate-floatMoveEnhanced" style={{animationDelay: '6s'}}></div>
          
          {/* Enhanced Moving Geometric Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-8 animate-waveFlow" viewBox="0 0 1000 600">
            <defs>
              <linearGradient id="employersGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,300 Q250,100 500,300 T1000,300" stroke="url(#employersGradient1)" strokeWidth="2" fill="none"/>
            <path d="M0,200 Q300,400 600,200 T1000,200" stroke="url(#employersGradient1)" strokeWidth="1.5" fill="none"/>
          </svg>
          
          {/* Wavy Abstract Traveling Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600">
            <defs>
              <linearGradient id="employersWavy1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0"/>
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="employersWavy2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0"/>
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.12"/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="employersWavy3" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0"/>
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.13"/>
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="employersWavy4" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0"/>
                <stop offset="50%" stopColor="#f97316" stopOpacity="0.11"/>
                <stop offset="100%" stopColor="#f97316" stopOpacity="0"/>
              </linearGradient>
            </defs>
            
            <path 
              d="M-150,100 C-50,90 100,120 350,110 C600,105 800,95 950,92 C1050,90 1100,88 1150,90" 
              stroke="url(#employersWavy1)" 
              strokeWidth="1.5" 
              fill="none"
              className="animate-wavyTravel1"
              style={{animationDelay: '1s'}}
            />
            
            <path 
              d="M1150,200 C1050,210 900,170 650,180 C400,185 250,205 100,208 C0,210 -50,211 -150,210" 
              stroke="url(#employersWavy2)" 
              strokeWidth="1.2" 
              fill="none"
              className="animate-wavyTravel2"
              style={{animationDelay: '3s'}}
            />
            
            <path 
              d="M-150,400 C-50,390 100,420 350,410 C600,405 800,395 950,392 C1050,390 1100,388 1150,390" 
              stroke="url(#employersWavy3)" 
              strokeWidth="1.3" 
              fill="none"
              className="animate-wavyTravel3"
              style={{animationDelay: '5s'}}
            />
            
            <path 
              d="M1150,500 C1050,510 900,470 650,480 C400,485 250,505 100,508 C0,510 -50,511 -150,510" 
              stroke="url(#employersWavy4)" 
              strokeWidth="1.0" 
              fill="none"
              className="animate-wavyTravel4"
              style={{animationDelay: '7s'}}
            />
          </svg>
          
          {/* Very Light Dots Pattern */}
          <div className="absolute inset-0 opacity-2">
            <svg width="40" height="40" viewBox="0 0 40 40" className="w-full h-full">
              <pattern id="employersDotsPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="#f59e0b" opacity="0.1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#employersDotsPattern)" />
            </svg>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Transform Your <span className="text-yellow">Workforce</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Partner with HireNET to access premium talent across the Middle East. 
              Build exceptional teams with our comprehensive recruitment solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button className="bg-yellow text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow/90 transition-all duration-300 hover:scale-105 shadow-lg btn-hover ripple">
                Post a Job
              </button>
              <p className="text-gray-500 text-sm">Free consultation and talent matching included</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}