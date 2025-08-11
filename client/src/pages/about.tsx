import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function About() {
  const [isQuoteVisible, setIsQuoteVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const quoteText = "We believe that the right person in the right role can transform not just careers, but entire organizations. Our mission is to make those transformative connections happen.";

  useEffect(() => {
    if (isQuoteVisible && displayedText.length < quoteText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(quoteText.slice(0, displayedText.length + 1));
      }, 30); // Typing speed
      return () => clearTimeout(timer);
    } else if (displayedText.length === quoteText.length && !isTypingComplete) {
      setTimeout(() => setIsTypingComplete(true), 500); // Wait before showing attribution
    }
  }, [isQuoteVisible, displayedText, quoteText, isTypingComplete]);

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
      <section className="relative py-12 px-4 cream overflow-hidden">
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
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ willChange: 'transform, opacity' }}
          >
            About <span className="text-yellow">HireNET</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 max-md:text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            style={{ willChange: 'transform, opacity' }}
          >
            Transforming careers and businesses through strategic talent acquisition across the Middle East and beyond.
          </motion.p>
        </div>
      </section>
      {/* Our Story Section */}
      <section className="relative pt-8 pb-20 px-4 bg-white overflow-hidden">
        {/* Exact Background Graphics from Industries Banner */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          
          {/* Enhanced Moving Geometric Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-8 animate-waveFlow" viewBox="0 0 1000 800">
            <defs>
              <linearGradient id="storyMainGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.12"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,400 Q250,200 500,400 T1000,400" stroke="url(#storyMainGradient1)" strokeWidth="2" fill="none"/>
            <path d="M0,300 Q300,500 600,300 T1000,300" stroke="url(#storyMainGradient1)" strokeWidth="1.5" fill="none"/>
          </svg>
          
          {/* Wavy Abstract Traveling Lines - Similar to Hero */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 800">
            <defs>
              <linearGradient id="storySectionWavy1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0"/>
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.13"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="storySectionWavy2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0"/>
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.11"/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="storySectionWavy3" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0"/>
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.12"/>
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="storySectionWavy4" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0"/>
                <stop offset="50%" stopColor="#f97316" stopOpacity="0.10"/>
                <stop offset="100%" stopColor="#f97316" stopOpacity="0"/>
              </linearGradient>
            </defs>
            
            {/* Smooth Wavy Path 1: Flowing diagonal wave */}
            <path 
              d="M-150,200 C-50,190 50,220 200,210 C350,200 500,240 650,230 C800,225 900,235 1150,280" 
              stroke="url(#storySectionWavy1)" 
              strokeWidth="1.4" 
              fill="none"
              className="animate-wavyTravel1"
              style={{animationDelay: '5s'}}
            />
            
            {/* Smooth Wavy Path 2: Elegant S-curve */}
            <path 
              d="M1150,350 C1050,340 950,370 800,360 C650,350 500,390 350,380 C200,375 100,385 -150,420" 
              stroke="url(#storySectionWavy2)" 
              strokeWidth="1.1" 
              fill="none"
              className="animate-wavyTravel2"
              style={{animationDelay: '9s'}}
            />
            
            {/* Smooth Wavy Path 3: Curved bottom flow */}
            <path 
              d="M1150,580 C1000,570 900,520 700,530 C500,540 350,500 200,510 C100,515 25,505 -150,480" 
              stroke="url(#storySectionWavy3)" 
              strokeWidth="1.3" 
              fill="none"
              className="animate-wavyTravel3"
              style={{animationDelay: '13s'}}
            />
            
            {/* Smooth Wavy Path 4: Gentle middle wave */}
            <path 
              d="M-150,450 C-50,440 50,480 200,470 C350,460 500,490 650,480 C800,475 900,485 1150,495" 
              stroke="url(#storySectionWavy4)" 
              strokeWidth="1.0" 
              fill="none"
              className="animate-wavyTravel4"
              style={{animationDelay: '17s'}}
            />
          </svg>
          
          {/* Additional Graphics from Get In Touch Banner */}
          
          {/* Floating Circles */}
          <div className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-yellow-200/15 to-yellow-300/20 rounded-full blur-3xl animate-floatMove"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-200/12 to-cyan-200/17 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-gradient-to-r from-purple-200/10 to-pink-200/15 rounded-full blur-2xl animate-rotate" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-40 right-1/3 w-32 h-32 bg-gradient-to-r from-emerald-200/12 to-teal-200/17 rounded-full blur-xl animate-bounce-slow" style={{animationDelay: '3s'}}></div>
          
          {/* Additional Floating Circles */}
          <div className="absolute bottom-40 left-1/3 w-28 h-28 bg-gradient-to-br from-yellow-300/10 to-orange-300/15 rounded-full blur-xl animate-spin-slow"></div>
          <div className="absolute top-32 right-1/4 w-24 h-24 bg-gradient-to-tl from-indigo-300/12 to-purple-300/17 rounded-full blur-xl animate-pulse"></div>
          
          {/* Wave Lines from Contact Banner */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 400">
            <defs>
              <linearGradient id="storyContactGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="storyContactGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,200 Q250,100 500,200 T1000,200" stroke="url(#storyContactGradient1)" strokeWidth="2" fill="none" className="animate-waveFlow"/>
            <path d="M0,250 Q300,150 600,250 T1000,250" stroke="url(#storyContactGradient2)" strokeWidth="1.5" fill="none" className="animate-waveFlow" style={{animationDelay: '2s'}}/>
          </svg>
          
          {/* Dotted Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-3">
            <div className="grid grid-cols-20 gap-8 h-full">
              {Array.from({length: 100}).map((_, i) => (
                <div key={i} className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
              ))}
            </div>
          </div>
          
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              className="pl-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "0px 0px -150px 0px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ willChange: 'transform, opacity' }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-yellow">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">Vision of 3 Co-Founders Mr Rizwan Khan, Mr Fidous Hussain and Mr Ali Hussain to bridge the gap between exceptional talent and leading organizations, HireNET has evolved into the Middle East's premier recruitment consultancy.</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our journey began with a simple belief: every organization deserves access to world-class talent, 
                and every professional deserves opportunities that match their ambitions.
              </p>
              <Button asChild className="bg-yellow hover:bg-yellow/90 text-black font-semibold px-8 py-6 rounded-2xl">
                <Link href="/learn-more">
                  Learn More <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "0px 0px -150px 0px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="bg-gradient-to-br from-yellow/20 to-cream rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-20 h-20 bg-yellow/30 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-yellow/20 rounded-full"></div>
                <div className="relative z-10 text-center">
                  <div className="text-5xl font-bold text-yellow mb-4">2010</div>
                  <div className="text-gray-700 font-semibold text-xl mb-2">Founded</div>
                  <div className="text-gray-600">Started our journey from UAE</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="relative py-8 px-4 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-60 h-px bg-gray-300/60"></div>
        {/* Exact Background Graphics from Industries Page */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          
          {/* Evenly Distributed Colorful Graphics - Various Sizes & Minimal Opacity */}
          
          {/* Top Row - Left to Right */}
          <div className="absolute top-4 left-4 w-32 h-32 bg-gradient-to-br from-yellow-200/8 via-amber-200/12 to-orange-200/10 rounded-full blur-3xl animate-floatMoveEnhanced"></div>
          <div className="absolute top-8 left-1/4 w-28 h-28 bg-gradient-to-br from-blue-200/6 via-cyan-200/10 to-sky-200/8 rounded-full blur-2xl animate-pulseEnhanced" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-12 left-1/2 w-36 h-36 bg-gradient-to-br from-purple-200/7 via-pink-200/11 to-rose-200/9 rounded-full blur-3xl animate-rotateEnhanced" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-6 left-3/4 w-24 h-24 bg-gradient-to-br from-orange-200/5 via-red-200/9 to-pink-200/7 rounded-full blur-2xl animate-floatMoveEnhanced" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-16 right-4 w-40 h-40 bg-gradient-to-br from-indigo-200/8 via-violet-200/12 to-purple-200/10 rounded-full blur-4xl animate-pulseEnhanced" style={{animationDelay: '1.5s'}}></div>
          
          {/* Middle Top Row */}
          <div className="absolute top-20 left-8 w-20 h-20 bg-gradient-to-br from-coral-200/4 via-salmon-200/8 to-pink-200/6 rounded-full blur-xl animate-rotateEnhanced" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-24 left-1/3 w-44 h-44 bg-gradient-to-br from-magenta-200/6 via-fuchsia-200/10 to-violet-200/8 rounded-full blur-3xl animate-floatMoveEnhanced" style={{animationDelay: '2.5s'}}></div>
          <div className="absolute top-28 left-2/3 w-32 h-32 bg-gradient-to-br from-slate-200/5 via-gray-200/9 to-blue-200/7 rounded-full blur-2xl animate-pulseEnhanced" style={{animationDelay: '3.5s'}}></div>
          <div className="absolute top-32 right-8 w-28 h-28 bg-gradient-to-br from-peach-200/6 via-orange-200/10 to-amber-200/8 rounded-full blur-xl animate-rotateEnhanced" style={{animationDelay: '5s'}}></div>
          
          {/* Center Row */}
          <div className="absolute top-1/2 left-2 w-48 h-48 bg-gradient-to-br from-lavender-200/7 via-purple-200/11 to-indigo-200/9 rounded-full blur-4xl animate-floatMoveEnhanced" style={{animationDelay: '6s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-cyan-200/5 via-sky-200/9 to-blue-200/7 rounded-full blur-2xl animate-pulseEnhanced" style={{animationDelay: '4.5s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-gradient-to-br from-rose-200/6 via-pink-200/10 to-red-200/8 rounded-full blur-3xl animate-rotateEnhanced" style={{animationDelay: '7s'}}></div>
          <div className="absolute top-1/2 left-3/4 w-40 h-40 bg-gradient-to-br from-yellow-200/7 via-gold-200/11 to-amber-200/9 rounded-full blur-3xl animate-floatMoveEnhanced" style={{animationDelay: '5.5s'}}></div>
          <div className="absolute top-1/2 right-2 w-32 h-32 bg-gradient-to-br from-violet-200/6 via-purple-200/10 to-fuchsia-200/8 rounded-full blur-2xl animate-pulseEnhanced" style={{animationDelay: '6.5s'}}></div>
          
          {/* Middle Bottom Row */}
          <div className="absolute bottom-32 left-6 w-28 h-28 bg-gradient-to-br from-teal-200/5 via-cyan-200/9 to-blue-200/7 rounded-full blur-xl animate-rotateEnhanced" style={{animationDelay: '7.5s'}}></div>
          <div className="absolute bottom-28 left-1/4 w-36 h-36 bg-gradient-to-br from-orange-300/6 via-red-200/10 to-rose-200/8 rounded-full blur-3xl animate-floatMoveEnhanced" style={{animationDelay: '8s'}}></div>
          <div className="absolute bottom-24 left-1/2 w-20 h-20 bg-gradient-to-br from-blue-300/4 via-indigo-200/8 to-purple-200/6 rounded-full blur-xl animate-pulseEnhanced" style={{animationDelay: '6.2s'}}></div>
          <div className="absolute bottom-28 left-2/3 w-44 h-44 bg-gradient-to-br from-coral-200/7 via-pink-200/11 to-rose-200/9 rounded-full blur-4xl animate-rotateEnhanced" style={{animationDelay: '4.8s'}}></div>
          <div className="absolute bottom-32 right-6 w-32 h-32 bg-gradient-to-br from-amber-200/6 via-orange-200/10 to-yellow-200/8 rounded-full blur-2xl animate-floatMoveEnhanced" style={{animationDelay: '5.8s'}}></div>
          
          {/* Bottom Row - Left to Right */}
          <div className="absolute bottom-4 left-4 w-40 h-40 bg-gradient-to-br from-magenta-200/8 via-fuchsia-200/12 to-pink-200/10 rounded-full blur-3xl animate-pulseEnhanced" style={{animationDelay: '9s'}}></div>
          <div className="absolute bottom-8 left-1/4 w-24 h-24 bg-gradient-to-br from-slate-200/5 via-blue-200/9 to-indigo-200/7 rounded-full blur-xl animate-rotateEnhanced" style={{animationDelay: '8.5s'}}></div>
          <div className="absolute bottom-12 left-1/2 w-36 h-36 bg-gradient-to-br from-peach-200/7 via-coral-200/11 to-orange-200/9 rounded-full blur-3xl animate-floatMoveEnhanced" style={{animationDelay: '7.8s'}}></div>
          <div className="absolute bottom-6 left-3/4 w-28 h-28 bg-gradient-to-br from-lavender-200/6 via-violet-200/10 to-purple-200/8 rounded-full blur-2xl animate-pulseEnhanced" style={{animationDelay: '9.5s'}}></div>
          <div className="absolute bottom-16 right-4 w-32 h-32 bg-gradient-to-br from-cyan-200/7 via-sky-200/11 to-blue-200/9 rounded-full blur-2xl animate-rotateEnhanced" style={{animationDelay: '8.2s'}}></div>
          

          

          
          {/* Enhanced Moving Geometric Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-8 animate-waveFlow" viewBox="0 0 1000 800">
            <defs>
              <linearGradient id="valuesMainGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.12"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,400 Q250,200 500,400 T1000,400" stroke="url(#valuesMainGradient1)" strokeWidth="2" fill="none"/>
            <path d="M0,300 Q300,500 600,300 T1000,300" stroke="url(#valuesMainGradient1)" strokeWidth="1.5" fill="none"/>
          </svg>
          
          {/* Wavy Abstract Traveling Lines - Same as Industries */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 800">
            <defs>
              <linearGradient id="valuesSectionWavy1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0"/>
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.13"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="valuesSectionWavy2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0"/>
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.11"/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="valuesSectionWavy3" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0"/>
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.12"/>
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="valuesSectionWavy4" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0"/>
                <stop offset="50%" stopColor="#f97316" stopOpacity="0.10"/>
                <stop offset="100%" stopColor="#f97316" stopOpacity="0"/>
              </linearGradient>
            </defs>
            
            {/* Smooth Wavy Path 1: Flowing diagonal wave */}
            <path 
              d="M-150,200 C-50,190 50,220 200,210 C350,200 500,240 650,230 C800,225 900,235 1150,280" 
              stroke="url(#valuesSectionWavy1)" 
              strokeWidth="1.4" 
              fill="none"
              className="animate-wavyTravel1"
              style={{animationDelay: '5s'}}
            />
            
            {/* Smooth Wavy Path 2: Elegant S-curve */}
            <path 
              d="M1150,350 C1050,340 950,370 800,360 C650,350 500,390 350,380 C200,375 100,385 -150,420" 
              stroke="url(#valuesSectionWavy2)" 
              strokeWidth="1.1" 
              fill="none"
              className="animate-wavyTravel2"
              style={{animationDelay: '9s'}}
            />
            
            {/* Smooth Wavy Path 3: Curved bottom flow */}
            <path 
              d="M1150,580 C1000,570 900,520 700,530 C500,540 350,500 200,510 C100,515 25,505 -150,480" 
              stroke="url(#valuesSectionWavy3)" 
              strokeWidth="1.3" 
              fill="none"
              className="animate-wavyTravel3"
              style={{animationDelay: '13s'}}
            />
            
            {/* Smooth Wavy Path 4: Gentle middle wave */}
            <path 
              d="M-150,450 C-50,440 50,480 200,470 C350,460 500,490 650,480 C800,475 900,485 1150,495" 
              stroke="url(#valuesSectionWavy4)" 
              strokeWidth="1.0" 
              fill="none"
              className="animate-wavyTravel4"
              style={{animationDelay: '17s'}}
            />
          </svg>
          
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -150px 0px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ willChange: 'transform, opacity' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-yellow">Values</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 max-md:text-sm">
              The principles that guide every decision we make and every relationship we build.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.05 }}
                style={{ willChange: 'transform, opacity' }}
              >
                <Card className="bg-white p-4 rounded-3xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 aspect-square flex flex-col">
                  <CardContent className="p-0 flex flex-col h-full">
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-2 leading-tight tracking-tight">{value.title}</h3>
                    <div className="flex-1 flex items-center justify-center px-2">
                      <p className="text-gray-700 leading-snug text-xs text-center font-normal">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section className="py-20 px-4" style={{backgroundColor: '#F5F3EB'}}>
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -200px 0px" }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
          >
            Our <span className="text-yellow">Mission</span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 max-md:text-sm mb-12"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -200px 0px" }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2
            }}
          >
            To be the catalyst for career transformation and organizational growth by connecting 
            exceptional talent with visionary companies across the Middle East and beyond.
          </motion.p>
          
          <motion.div 
            className="bg-gradient-to-r from-yellow/10 to-transparent rounded-3xl p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: {
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.4
              }
            }}
            onViewportEnter={() => setIsQuoteVisible(true)}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -200px 0px" }}
          >
            <p className="text-gray-600 sacramento-quote font-normal text-[26px]" style={{fontSize: '22px', letterSpacing: '0.5px'}}>
              "{displayedText}<span className="animate-pulse">|</span>"
            </p>
            <motion.div 
              className="text-yellow font-semibold mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isTypingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              - HireNET Leadership Team
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}