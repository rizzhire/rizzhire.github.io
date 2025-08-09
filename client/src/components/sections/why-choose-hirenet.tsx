import { Globe, Users, FileText, Headphones, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function WhyChooseHireNet() {
  const { elementRef: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.5,
    rootMargin: '0px 0px -200px 0px'
  });
  const features = [
    {
      icon: Globe,
      title: "Global Placement Opportunities",
      description: "Access to premium job positions across UAE, Qatar, Saudi Arabia, Oman, Kuwait, Bahrain, and Maldives."
    },
    {
      icon: Users,
      title: "Personalized Career Guidance", 
      description: "One-on-one consultation with industry experts to accelerate your career growth."
    },
    {
      icon: FileText,
      title: "Free Resume Review",
      description: "Professional resume optimization to increase your chances of landing interviews."
    },
    {
      icon: Headphones,
      title: "Priority Support",
      description: "Dedicated support throughout your job search journey with 24/7 assistance."
    }
  ];

  return (
    <section className="relative pt-8 pb-20 overflow-hidden" style={{ backgroundColor: '#F2F0E8' }}>
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
            <linearGradient id="whyChooseGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d="M0,300 Q250,100 500,300 T1000,300" stroke="url(#whyChooseGradient1)" strokeWidth="2" fill="none"/>
          <path d="M0,200 Q300,400 600,200 T1000,200" stroke="url(#whyChooseGradient1)" strokeWidth="1.5" fill="none"/>
        </svg>
        
        {/* Wavy Abstract Traveling Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="whyChooseWavy1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0"/>
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="whyChooseWavy2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0"/>
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.12"/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="whyChooseWavy3" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0"/>
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.13"/>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="whyChooseWavy4" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0"/>
              <stop offset="50%" stopColor="#f97316" stopOpacity="0.11"/>
              <stop offset="100%" stopColor="#f97316" stopOpacity="0"/>
            </linearGradient>
          </defs>
          
          <path 
            d="M-150,100 C-50,90 100,120 350,110 C600,105 800,95 950,92 C1050,90 1100,88 1150,90" 
            stroke="url(#whyChooseWavy1)" 
            strokeWidth="1.5" 
            fill="none"
            className="animate-wavyTravel1"
            style={{animationDelay: '1s'}}
          />
          
          <path 
            d="M1150,200 C1050,210 900,170 650,180 C400,185 250,205 100,208 C0,210 -50,211 -150,210" 
            stroke="url(#whyChooseWavy2)" 
            strokeWidth="1.2" 
            fill="none"
            className="animate-wavyTravel2"
            style={{animationDelay: '3s'}}
          />
          
          <path 
            d="M-150,400 C-50,390 100,420 350,410 C600,405 800,395 950,392 C1050,390 1100,388 1150,390" 
            stroke="url(#whyChooseWavy3)" 
            strokeWidth="1.3" 
            fill="none"
            className="animate-wavyTravel3"
            style={{animationDelay: '5s'}}
          />
          
          <path 
            d="M1150,500 C1050,510 900,470 650,480 C400,485 250,505 100,508 C0,510 -50,511 -150,510" 
            stroke="url(#whyChooseWavy4)" 
            strokeWidth="1.0" 
            fill="none"
            className="animate-wavyTravel4"
            style={{animationDelay: '7s'}}
          />
        </svg>
        
        {/* Very Light Dots Pattern */}
        <div className="absolute inset-0 opacity-2">
          <svg width="40" height="40" viewBox="0 0 40 40" className="w-full h-full">
            <pattern id="whyChooseDotsPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#f59e0b" opacity="0.1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#whyChooseDotsPattern)" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header Section */}
        <div ref={sectionRef} className="text-center mb-20 pt-8">
          <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow/20 mb-6">
            <Star className="w-4 h-4 text-yellow fill-yellow" />
            <span className="text-sm font-medium text-gray-700">Premium Career Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-yellow">HireNET</span>?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Experience the difference with our comprehensive career acceleration platform, 
            designed for ambitious professionals seeking exceptional opportunities in the Middle East.
          </p>
        </div>

        {/* Premium Feature Cards - Square Masonry Layout */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
          {/* Left Side - Square Card (Global Placement Opportunities) */}
          <div className={`group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50 hover:border-yellow/30 transition-all duration-500 hover:shadow-xl hover:shadow-yellow/10 hover:-translate-y-2 flex flex-col justify-center items-center overflow-hidden aspect-square ${isVisible ? 'animate-pop-in' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.2s' : '0s' }}>
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
            
            {/* Background Icon - Corner to Corner */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30 transition-opacity duration-300 group-hover:opacity-40">
              <Globe className="w-56 h-56 text-yellow stroke-[1]" />
            </div>
            
            {/* Content - Overlaid on background icon */}
            <div className="text-center relative z-10">
              <h3 className="text-lg font-bold mb-3 text-gray-800">
                Global Placement Opportunities
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Premium job positions across UAE, Qatar, Saudi Arabia, Oman, Kuwait, Bahrain, and Maldives with guaranteed placement assistance.
              </p>
            </div>
          </div>

          {/* Right Side - Square Grid Layout */}
          <div className="grid grid-cols-2 gap-3 aspect-square">
            {/* Top - Full Width Card (Personalized Career Guidance) */}
            <div className={`group relative bg-white/60 backdrop-blur-sm rounded-3xl p-4 border border-white/50 hover:border-yellow/30 transition-all duration-500 hover:shadow-xl hover:shadow-yellow/10 hover:-translate-y-2 col-span-2 overflow-hidden flex flex-col justify-center ${isVisible ? 'animate-pop-in' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.4s' : '0s' }}>
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
              
              {/* Background Icon - Corner to Corner */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 transition-opacity duration-300 group-hover:opacity-40">
                <Users className="w-24 h-24 text-yellow stroke-[1]" />
              </div>
              
              {/* Content - Overlaid on background icon */}
              <div className="text-center relative z-10">
                <h3 className="text-sm font-bold mb-1 text-gray-800">
                  Career Guidance
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs">
                  Expert consultation for career growth and strategic planning.
                </p>
              </div>
            </div>

            {/* Bottom Left - Free Resume Review */}
            <div className={`group relative bg-white/60 backdrop-blur-sm rounded-3xl p-4 border border-white/50 hover:border-yellow/30 transition-all duration-500 hover:shadow-xl hover:shadow-yellow/10 hover:-translate-y-2 flex flex-col justify-center overflow-hidden ${isVisible ? 'animate-pop-in' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.6s' : '0s' }}>
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
              
              {/* Background Icon - Corner to Corner */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 transition-opacity duration-300 group-hover:opacity-40">
                <FileText className="w-20 h-20 text-yellow stroke-[1]" />
              </div>
              
              {/* Content - Overlaid on background icon */}
              <div className="text-center relative z-10">
                <h3 className="text-xs font-bold mb-1 text-gray-800">
                  Resume Review
                </h3>
                <p className="text-gray-600 leading-tight text-xs">
                  Professional optimization with ATS-friendly formatting.
                </p>
              </div>
            </div>

            {/* Bottom Right - Priority Support */}
            <div className={`group relative bg-white/60 backdrop-blur-sm rounded-3xl p-4 border border-white/50 hover:border-yellow/30 transition-all duration-500 hover:shadow-xl hover:shadow-yellow/10 hover:-translate-y-2 flex flex-col justify-center overflow-hidden ${isVisible ? 'animate-pop-in' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.8s' : '0s' }}>
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
              
              {/* Background Icon - Corner to Corner */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 transition-opacity duration-300 group-hover:opacity-40">
                <Headphones className="w-20 h-20 text-yellow stroke-[1]" />
              </div>
              
              {/* Content - Overlaid on background icon */}
              <div className="text-center relative z-10">
                <h3 className="text-xs font-bold mb-1 text-gray-800">
                  Priority Support
                </h3>
                <p className="text-gray-600 leading-tight text-xs">
                  24/7 dedicated support throughout your job search journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}