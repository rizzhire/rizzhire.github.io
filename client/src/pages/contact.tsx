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
  const [showPhoneOptions, setShowPhoneOptions] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        { text: "• <span class='font-bold text-blue-700'>Head Office:</span><br/>6/7A, AJC Bose Road, Padatik Theatre<br/>Kolkata-700017, West Bengal, INDIA" },
        { text: "• <span class='font-bold text-blue-700'>Branch Office:</span><br/>4th-floor Nevidita Road, Kidzee School<br/>Siliguri 734003, West Bengal, INDIA" }
      ],
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        { text: "+91 333 508 5038" },
        { text: "+91 9007906531" }
      ],
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        { text: "contact@hirenet.in" }
      ],
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        { text: "Mon - Saturday:<br/>10:30 AM - 6PM" },
        { text: "Sunday: <span class='text-red-600 font-semibold'>Closed</span>" }
      ],
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
          <div className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-yellow-200/30 to-yellow-300/40 rounded-full blur-3xl animate-floatMove"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-200/25 to-cyan-200/35 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-gradient-to-r from-purple-200/20 to-pink-200/30 rounded-full blur-2xl animate-rotate" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-40 right-1/3 w-32 h-32 bg-gradient-to-r from-green-200/25 to-emerald-200/35 rounded-full blur-xl animate-bounce-slow" style={{animationDelay: '3s'}}></div>
          
          {/* Additional Floating Circles */}
          <div className="absolute bottom-40 left-1/3 w-28 h-28 bg-gradient-to-br from-yellow-300/20 to-orange-300/30 rounded-full blur-xl animate-spin-slow"></div>
          <div className="absolute top-32 right-1/4 w-24 h-24 bg-gradient-to-tl from-indigo-300/25 to-purple-300/35 rounded-full blur-xl animate-pulse"></div>
          
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
          <div className="absolute top-20 right-10 w-48 h-48 bg-gradient-to-r from-yellow-300/10 to-orange-300/15 rounded-full blur-3xl animate-floatMove"></div>
          <div className="absolute bottom-32 left-16 w-40 h-40 bg-gradient-to-r from-blue-300/10 to-cyan-300/15 rounded-full blur-2xl animate-rotate"></div>
          <div className="absolute top-1/2 right-1/4 w-36 h-36 bg-gradient-to-r from-purple-300/8 to-pink-300/12 rounded-full blur-2xl animate-pulse-slow"></div>
          
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


          <div className="grid md:grid-cols-2 gap-4 mb-16 max-w-4xl mx-auto">
            {/* Visit Us - Large Left Card */}
            {(() => {
              const VisitIcon = contactInfo[0].icon;
              return (
                <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white via-blue-50/30 to-blue-100/20 border-2 border-blue-200/50 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-0 relative z-10">
                    <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 ${contactInfo[0].color} mb-4`}>
                      <VisitIcon className="w-7 h-7" />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-gray-900 tracking-tight">{contactInfo[0].title}</h3>
                    <div className="space-y-2">
                      {contactInfo[0].details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-xs leading-normal" 
                           dangerouslySetInnerHTML={{ __html: detail.text || '' }}>
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })()}

            {/* Right Side - 3 Smaller Cards in Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Call Us - Top Right (Full Width) */}
              <div className="relative col-span-2">
                <Card 
                  className="text-center p-5 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white via-green-50/30 to-green-100/20 border-2 border-green-200/50 backdrop-blur-sm relative overflow-hidden cursor-pointer"
                  onClick={() => setShowPhoneOptions(!showPhoneOptions)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-transparent to-emerald-600/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-0 relative z-10">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-green-100 to-green-200 ${contactInfo[1].color} mb-3`}>
                      <Phone className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900 tracking-tight">{contactInfo[1].title}</h3>
                    <div className="space-y-1">
                      {contactInfo[1].details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-xs leading-normal" 
                           dangerouslySetInnerHTML={{ __html: detail.text || '' }}>
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Phone Number Selection Dropdown */}
                {showPhoneOptions && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border-2 border-green-200 z-50 overflow-hidden">
                    <div className="p-3 bg-green-50 border-b border-green-200">
                      <h4 className="font-semibold text-sm text-gray-800">Select Number to Call</h4>
                    </div>
                    <button
                      onClick={() => {
                        window.location.href = `tel:+91 333 508 5038`;
                        setShowPhoneOptions(false);
                      }}
                      className="w-full p-4 text-left hover:bg-green-50 transition-colors duration-200 border-b border-gray-100 group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-800 group-hover:text-green-700">Main Office</p>
                          <p className="text-sm text-gray-600">+91 333 508 5038</p>
                        </div>
                        <Phone className="w-4 h-4 text-green-600 group-hover:scale-110 transition-transform duration-200" />
                      </div>
                    </button>
                    <button
                      onClick={() => {
                        window.location.href = `tel:+91 9007906531`;
                        setShowPhoneOptions(false);
                      }}
                      className="w-full p-4 text-left hover:bg-green-50 transition-colors duration-200 group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-800 group-hover:text-green-700">Mobile</p>
                          <p className="text-sm text-gray-600">+91 9007906531</p>
                        </div>
                        <Phone className="w-4 h-4 text-green-600 group-hover:scale-110 transition-transform duration-200" />
                      </div>
                    </button>
                  </div>
                )}
              </div>

              {/* Email Us - Bottom Left */}
              {(() => {
                const EmailIcon = contactInfo[2].icon;
                
                const handleEmailClick = () => {
                  const email = 'contact@hirenet.in';
                  const subject = 'Inquiry from HireNET Website';
                  const body = 'Hello HireNET Team,\n\nI would like to inquire about your services.\n\nThank you.';
                  
                  // Check if it's mobile device
                  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                  
                  if (isMobile) {
                    // For mobile: Use mailto to open native email app
                    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  } else {
                    // For desktop: Try Gmail web interface first, fallback to mailto
                    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    const popup = window.open(gmailUrl, '_blank');
                    
                    // Fallback to mailto if popup is blocked
                    if (!popup) {
                      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    }
                  }
                };
                
                return (
                  <Card 
                    className="text-center p-4 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white via-purple-50/30 to-purple-100/20 border-2 border-purple-200/50 backdrop-blur-sm relative overflow-hidden cursor-pointer"
                    onClick={handleEmailClick}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-indigo-600/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-0 relative z-10">
                      <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 ${contactInfo[2].color} mb-3`}>
                        <EmailIcon className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 tracking-tight">{contactInfo[2].title}</h3>
                      <div className="space-y-1">
                        {contactInfo[2].details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-xs leading-normal" 
                             dangerouslySetInnerHTML={{ __html: detail.text || '' }}>
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })()}

              {/* Business Hours - Bottom Right */}
              {(() => {
                const ClockIcon = contactInfo[3].icon;
                return (
                  <Card className="text-center p-4 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white via-orange-50/30 to-orange-100/20 border-2 border-orange-200/50 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 via-transparent to-amber-600/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-0 relative z-10">
                      <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 ${contactInfo[3].color} mb-3`}>
                        <ClockIcon className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 tracking-tight">{contactInfo[3].title}</h3>
                      <div className="space-y-1">
                        {contactInfo[3].details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-xs leading-normal" 
                             dangerouslySetInnerHTML={{ __html: detail.text || '' }}>
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })()}
            </div>
          </div>

          {/* Single Map Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Find Us on Map</h3>
            <Card className="overflow-hidden rounded-3xl shadow-lg max-w-3xl mx-auto">
              <div className="relative h-80 bg-gradient-to-br from-gray-50 to-white">
                <iframe
                  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=6/7A%20AJC%20Bose%20Road%20Kolkata%20700017+(HireNET%20Head%20Office)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HireNET Office Locations"
                ></iframe>
                
                {/* Red Location Marker Only for Head Office */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Head Office Marker */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center animate-pulse">
                        <span className="text-white font-bold text-xs">H</span>
                      </div>
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                        Head Office - Kolkata
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Direction Buttons */}
              <div className="p-6 bg-white border-t">
                <div className="grid md:grid-cols-2 gap-4">
                  <Button 
                    className="w-full bg-yellow hover:bg-yellow/90 text-black font-semibold py-3 rounded-xl"
                    onClick={() => window.open('https://maps.google.com/?q=6/7A,+AJC+Bose+Road,+Kolkata+700017', '_blank')}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Head Office Directions
                  </Button>
                  
                  <Button 
                    className="w-full bg-yellow hover:bg-yellow/90 text-black font-semibold py-3 rounded-xl"
                    onClick={() => window.open('https://maps.google.com/?q=Nevidita+Road,+Siliguri+734003', '_blank')}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Branch Office Directions
                  </Button>
                </div>
              </div>
            </Card>
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