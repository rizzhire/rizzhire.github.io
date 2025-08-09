import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function About() {

  const values = [
    {
      title: "Excellence",
      description: "We strive for perfection in every placement, ensuring both clients and candidates receive exceptional service."
    },
    {
      title: "Integrity",
      description: "Transparent and honest communication forms the foundation of all our professional relationships."
    },
    {
      title: "Innovation",
      description: "Leveraging cutting-edge technology and modern recruitment strategies to deliver superior results."
    },
    {
      title: "Partnership",
      description: "Building long-term relationships based on trust, reliability, and mutual success."
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-20 px-4 cream overflow-hidden">
        {/* Enhanced Background Graphics */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Live Moving Floating Circles */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-200/20 to-yellow-300/30 rounded-full blur-xl animate-floatMove"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-blue-200/20 to-cyan-200/30 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-200/15 to-pink-200/25 rounded-full blur-lg animate-rotate" style={{animationDelay: '2s'}}></div>
          
          {/* Live Moving Geometric Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-8 animate-waveFlow" viewBox="0 0 1000 400">
            <defs>
              <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,200 Q250,100 500,200 T1000,200" stroke="url(#aboutGradient)" strokeWidth="1.5" fill="none"/>
          </svg>
          
          {/* Wavy Abstract Traveling Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 400">
            <defs>
              <linearGradient id="aboutWavy1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0"/>
                <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.12"/>
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="aboutWavy2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#059669" stopOpacity="0"/>
                <stop offset="50%" stopColor="#059669" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#059669" stopOpacity="0"/>
              </linearGradient>
            </defs>
            
            <path 
              d="M-150,100 C-50,90 100,120 350,110 C600,105 800,95 950,92 C1050,90 1100,88 1150,90" 
              stroke="url(#aboutWavy1)" 
              strokeWidth="1.2" 
              fill="none"
              className="animate-wavyTravel3"
              style={{animationDelay: '3s'}}
            />
            
            <path 
              d="M1150,280 C1050,290 900,250 650,260 C400,265 250,285 100,288 C0,290 -50,291 -150,290" 
              stroke="url(#aboutWavy2)" 
              strokeWidth="1.0" 
              fill="none"
              className="animate-wavyTravel4"
              style={{animationDelay: '7s'}}
            />
          </svg>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            About <span className="text-yellow">HireNET</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transforming careers and businesses through strategic talent acquisition across the Middle East and beyond.
          </p>
        </div>
      </section>
      {/* Our Story Section */}
      <section className="relative py-20 px-4 bg-white overflow-hidden">
        {/* Light Background Graphics */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-yellow-300/10 to-orange-300/15 rounded-lg rotate-12 blur-sm animate-floatMove"></div>
          <div className="absolute bottom-40 left-32 w-20 h-20 bg-gradient-to-r from-blue-300/10 to-cyan-300/15 rounded-full blur-md animate-pulse-slow"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-yellow">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to bridge the gap between exceptional talent and leading organizations, 
                HireNET has evolved into the Middle East's premier recruitment consultancy.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our journey began with a simple belief: every organization deserves access to world-class talent, 
                and every professional deserves opportunities that match their ambitions.
              </p>
              <Button className="bg-yellow hover:bg-yellow/90 text-black font-semibold px-8 py-6 rounded-2xl">
                Learn More <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow/20 to-cream rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-20 h-20 bg-yellow/30 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-yellow/20 rounded-full"></div>
                <div className="relative z-10 text-center">
                  <div className="text-5xl font-bold text-yellow mb-4">2010</div>
                  <div className="text-gray-700 font-semibold text-xl mb-2">Founded</div>
                  <div className="text-gray-600">Started our journey from UAE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-20 px-4" style={{backgroundColor: '#F5F3EB'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-yellow">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white p-8 rounded-3xl border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section className="py-20 px-4" style={{backgroundColor: '#F5F3EB'}}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Our <span className="text-yellow">Mission</span>
          </h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-12 text-gray-600">
            To be the catalyst for career transformation and organizational growth by connecting 
            exceptional talent with visionary companies across the Middle East and beyond.
          </p>
          
          <div className="bg-gradient-to-r from-yellow/10 to-transparent rounded-3xl p-8 max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              "We believe that the right person in the right role can transform not just careers, 
              but entire organizations. Our mission is to make those transformative connections happen."
            </p>
            <div className="text-yellow font-semibold mt-6">- HireNET Leadership Team</div>
          </div>
        </div>
      </section>
    </div>
  );
}