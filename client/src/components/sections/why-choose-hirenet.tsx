import { Globe, Users, FileText, Headphones, Star } from "lucide-react";

export default function WhyChooseHireNet() {
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
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-yellow">HireNET</span>?
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
              
              {/* Icon with clean styling */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-yellow rounded-2xl flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="w-8 h-8 text-black stroke-[1.5]" />
                </div>
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}