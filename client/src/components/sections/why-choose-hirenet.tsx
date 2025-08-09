import { Globe, Users, FileText, Headphones, ArrowRight, Star } from "lucide-react";

export default function WhyChooseHireNet() {
  const features = [
    {
      icon: Globe,
      title: "Global Placement Network",
      description: "Exclusive access to premium positions across 7 Middle Eastern countries with verified international employers.",
      stat: "10,000+",
      statLabel: "Active Positions"
    },
    {
      icon: Users,
      title: "Expert Career Guidance", 
      description: "Personalized consultation with industry veterans who understand your career aspirations and market dynamics.",
      stat: "97%",
      statLabel: "Success Rate"
    },
    {
      icon: FileText,
      title: "Professional Resume Craft",
      description: "Strategic resume optimization by recruitment specialists to maximize your interview opportunities.",
      stat: "3x",
      statLabel: "More Interviews"
    },
    {
      icon: Headphones,
      title: "Priority Career Support",
      description: "Dedicated career advisors providing continuous guidance throughout your job search journey.",
      stat: "24/7",
      statLabel: "Support Access"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#F2F0E8' }}>
      {/* Sophisticated Background Graphics */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle geometric pattern */}
        <div className="absolute top-10 left-10 w-32 h-32 opacity-[0.03]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <pattern id="hexPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <polygon points="10,1 18,6 18,14 10,19 2,14 2,6" fill="#f59e0b" stroke="#f59e0b" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#hexPattern)" />
          </svg>
        </div>
        
        {/* Floating accent circles */}
        <div className="absolute top-20 right-20 w-6 h-6 bg-yellow/8 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-yellow/6 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-yellow/4 rounded-full"></div>
        
        {/* Elegant wave lines */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="elegantWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.02"/>
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.05"/>
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.02"/>
            </linearGradient>
          </defs>
          <path 
            d="M0,100 C200,120 400,80 600,100 C800,120 1000,80 1200,100 L1200,0 L0,0 Z" 
            fill="url(#elegantWave)"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow/20 mb-6">
            <Star className="w-4 h-4 text-yellow fill-yellow" />
            <span className="text-sm font-medium text-gray-700">Premium Career Services</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Why Choose{" "}
            <span className="relative">
              <span className="text-yellow">HireNET</span>
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12">
                <path d="M0,8 Q50,2 100,8 T200,8" stroke="#f59e0b" strokeWidth="3" fill="none" opacity="0.6"/>
              </svg>
            </span>
            ?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Experience the difference with our comprehensive career acceleration platform, 
            designed for ambitious professionals seeking exceptional opportunities in the Middle East.
          </p>
        </div>

        {/* Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50 hover:border-yellow/30 transition-all duration-500 hover:shadow-xl hover:shadow-yellow/10 hover:-translate-y-2"
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
              
              {/* Icon with sophisticated styling */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow to-yellow/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-yellow/25 group-hover:shadow-yellow/40 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="w-8 h-8 text-white stroke-[1.5]" />
                </div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 w-16 h-16 bg-yellow/20 rounded-2xl mx-auto blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Statistics Badge */}
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 px-3 py-1 rounded-full">
                  <span className="font-bold text-lg text-gray-800">{feature.stat}</span>
                  <span className="text-xs text-gray-600 ml-1">{feature.statLabel}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm font-light">
                  {feature.description}
                </p>
              </div>
              
              {/* Hover arrow indicator */}
              <div className="flex justify-center mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ArrowRight className="w-5 h-5 text-yellow transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-white/50 backdrop-blur-sm px-8 py-4 rounded-2xl border border-yellow/30 shadow-lg">
            <span className="text-gray-700 font-medium">Ready to accelerate your career?</span>
            <ArrowRight className="w-5 h-5 text-yellow" />
            <span className="font-bold text-yellow">Get Started Today</span>
          </div>
        </div>
      </div>
    </section>
  );
}