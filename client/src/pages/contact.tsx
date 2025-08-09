import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["6/7A, AJC Bose Road, Padatik Theatre", "(Near Trimurti Petrol Pump, Opp.Kia Motors)", "Kolkata-700017, West Bengal, INDIA"],
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 333 508 5038", "+91 9007906531"],
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["contact@hirenet.in"],
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Saturday: 10:30 AM - 6PM", "Sunday: Closed"],
      color: "text-orange-600"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="py-20 px-4 cream relative overflow-hidden">
        {/* Enhanced Background Graphics */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Circles */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-200/30 to-yellow-300/40 rounded-full blur-xl animate-floatMove"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-blue-200/25 to-cyan-200/35 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-200/20 to-pink-200/30 rounded-full blur-lg animate-rotate" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-40 right-1/3 w-20 h-20 bg-gradient-to-r from-green-200/25 to-emerald-200/35 rounded-full blur-md animate-bounce-slow" style={{animationDelay: '3s'}}></div>
          
          {/* Geometric Shapes */}
          <div className="absolute bottom-40 left-1/3 w-16 h-16 bg-gradient-to-br from-yellow-300/20 to-orange-300/30 transform rotate-45 blur-sm animate-spin-slow"></div>
          <div className="absolute top-32 right-1/4 w-12 h-12 bg-gradient-to-tl from-indigo-300/25 to-purple-300/35 rounded-lg rotate-12 blur-sm animate-pulse"></div>
          
          {/* Wave Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 400">
            <defs>
              <linearGradient id="contactGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="contactGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,200 Q250,100 500,200 T1000,200" stroke="url(#contactGradient1)" strokeWidth="2" fill="none" className="animate-waveFlow"/>
            <path d="M0,250 Q300,150 600,250 T1000,250" stroke="url(#contactGradient2)" strokeWidth="1.5" fill="none" className="animate-waveFlow" style={{animationDelay: '2s'}}/>
          </svg>
          
          {/* Dotted Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="grid grid-cols-20 gap-8 h-full">
              {Array.from({length: 100}).map((_, i) => (
                <div key={i} className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Get In <span className="text-yellow">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your career or find the perfect talent? Let's start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        {/* Background Graphics for Contact Section */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-yellow-300/10 to-orange-300/15 rounded-full blur-lg animate-floatMove"></div>
          <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-r from-blue-300/10 to-cyan-300/15 rounded-lg rotate-45 blur-md animate-rotate"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-r from-purple-300/8 to-pink-300/12 rounded-full blur-sm animate-pulse-slow"></div>
          
          {/* Decorative Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-8" viewBox="0 0 800 600">
            <defs>
              <linearGradient id="contactBg1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,300 Q200,200 400,300 T800,300" stroke="url(#contactBg1)" strokeWidth="1" fill="none"/>
            <path d="M0,350 Q250,250 500,350 T800,350" stroke="url(#contactBg1)" strokeWidth="0.8" fill="none" opacity="0.6"/>
          </svg>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ready to transform your recruitment process? Contact us today and let's discuss how we can help you find the perfect talent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50/50">
                <CardContent className="p-0">
                  <div className={`inline-flex p-4 rounded-full bg-gray-50 ${info.color} mb-4`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 relative overflow-hidden" style={{backgroundColor: '#F5F3EB'}}>
        {/* Form Background Graphics */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-yellow-300/15 to-orange-300/20 rounded-full blur-lg animate-bounce-slow"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-blue-300/12 to-cyan-300/18 rounded-lg rotate-45 blur-md animate-spin-slow"></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-gradient-to-r from-purple-300/10 to-pink-300/15 rounded-full blur-sm animate-pulse"></div>
          
          {/* Subtle Grid Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 600 400">
            <defs>
              <pattern id="formGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="#6b7280"/>
                <line x1="0" y1="20" x2="40" y2="20" stroke="#9ca3af" strokeWidth="0.5" opacity="0.3"/>
                <line x1="20" y1="0" x2="20" y2="40" stroke="#9ca3af" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#formGrid)"/>
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Send Us a Message</h2>
            <p className="text-gray-600 text-lg">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="rounded-xl border-gray-200 focus:border-yellow focus:ring-yellow/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="rounded-xl border-gray-200 focus:border-yellow focus:ring-yellow/20"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="rounded-xl border-gray-200 focus:border-yellow focus:ring-yellow/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium text-gray-700">Company Name</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="rounded-xl border-gray-200 focus:border-yellow focus:ring-yellow/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service" className="text-sm font-medium text-gray-700">Service Interested In</Label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger className="rounded-xl border-gray-200 focus:border-yellow focus:ring-yellow/20">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="executive-search">Executive Search</SelectItem>
                    <SelectItem value="mass-recruitment">Mass Recruitment</SelectItem>
                    <SelectItem value="hr-consulting">HR Consulting</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your requirements or how we can help you..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                  rows={6}
                  className="rounded-xl border-gray-200 focus:border-yellow focus:ring-yellow/20 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-yellow hover:bg-yellow/90 text-black font-semibold py-6 rounded-xl text-lg transition-all duration-300 hover:shadow-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}