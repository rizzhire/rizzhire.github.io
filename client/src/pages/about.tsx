import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award, Users, Globe, Target } from "lucide-react";

export default function About() {
  const stats = [
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "1000+", label: "Successful Placements", icon: Users },
    { number: "50+", label: "Partner Companies", icon: Globe },
    { number: "95%", label: "Success Rate", icon: Target }
  ];

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
      <section className="py-20 px-4 bg-gradient-to-br from-cream to-yellow/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-40 h-40 bg-yellow rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gray-400 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            About <span className="text-yellow">HireNET</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Transforming careers and businesses through strategic talent acquisition across the Middle East and beyond.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-yellow" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
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
                  <div className="text-gray-600">Started our journey in Dubai</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-cream">
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
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our <span className="text-yellow">Mission</span>
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-12">
            To be the catalyst for career transformation and organizational growth by connecting 
            exceptional talent with visionary companies across the Middle East and beyond.
          </p>
          
          <div className="bg-gradient-to-r from-yellow/10 to-transparent rounded-3xl p-8 max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
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