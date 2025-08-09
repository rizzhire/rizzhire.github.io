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
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-40 h-40 bg-yellow rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-gray-400 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
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
      {/* Contact Info Cards */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Subtle Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Geometric Elements */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-100/30 rounded-full animate-float" style={{animationDuration: '8s'}}></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-gray-100/40 rotate-45 animate-float" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-yellow-50/50 rounded-full animate-float" style={{animationDuration: '12s', animationDelay: '4s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-gray-50/60 rotate-45 animate-float" style={{animationDuration: '9s', animationDelay: '1s'}}></div>
          
          {/* Subtle Wave Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1000 600">
            <defs>
              <linearGradient id="subtleWave" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.06"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,300 Q250,250 500,300 T1000,300" stroke="url(#subtleWave)" strokeWidth="1" fill="none" className="animate-pulse" style={{animationDuration: '8s'}}/>
          </svg>
          
          {/* Light Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100" height="100" viewBox="0 0 100 100" className="w-full h-full">
              <pattern id="lightGrid" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="0.8" fill="#f59e0b" opacity="0.08"/>
                <line x1="0" y1="50" x2="100" y2="50" stroke="#6b7280" strokeWidth="0.2" opacity="0.04"/>
                <line x1="50" y1="0" x2="50" y2="100" stroke="#6b7280" strokeWidth="0.2" opacity="0.04"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#lightGrid)" />
            </svg>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Locations */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <MapPin className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Locations</h3>
                
                {/* Main Office */}
                <div className="mb-4 pb-3 border-b border-gray-100 last:border-b-0 last:pb-0 last:mb-0">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                    <span className="text-xs font-semibold text-gray-800 uppercase tracking-wide">Main Office</span>
                  </div>
                  <div className="space-y-1 text-sm text-gray-700">
                    <p className="font-medium">6/7A, AJC Bose Road, Padatik Theatre</p>
                    <p>Kolkata-700017, West Bengal</p>
                  </div>
                </div>
                
                {/* Branch Office */}
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Branch Office</span>
                  </div>
                  <div className="space-y-1 text-sm text-gray-700">
                    <p className="font-medium">4th-floor Nevidita Road, Kidzee School</p>
                    <p>Siliguri 734003, West Bengal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Phone className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Phone</h3>
                <div className="space-y-1 text-sm text-gray-700">
                  <p className="font-medium">+91 333 508 5038</p>
                  <p className="font-medium">+91 9007906531</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Mail className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Email</h3>
                <div className="space-y-1 text-sm text-gray-700">
                  <p className="font-medium">contact@hirenet.in</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hours</h3>
                <div className="space-y-1 text-sm text-gray-700">
                  <p className="font-medium">Monday - Saturday: 10:30 AM - 6:00 PM</p>
                  <p className="font-bold">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
      {/* Contact Form */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Send Us a <span className="text-yellow">Message</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Whether you're looking for your next opportunity or seeking top talent, we're here to help.
            </p>
          </div>

          <Card className="bg-white p-8 md:p-12 rounded-[3rem] border-0 shadow-lg">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-semibold">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-gray-50 border-0 rounded-2xl p-4 h-12 focus:ring-2 focus:ring-yellow/50"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-semibold">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-gray-50 border-0 rounded-2xl p-4 h-12 focus:ring-2 focus:ring-yellow/50"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 font-semibold">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-gray-50 border-0 rounded-2xl p-4 h-12 focus:ring-2 focus:ring-yellow/50"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-700 font-semibold">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="bg-gray-50 border-0 rounded-2xl p-4 h-12 focus:ring-2 focus:ring-yellow/50"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-gray-700 font-semibold">Service Interest</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="bg-gray-50 border-0 rounded-2xl p-4 h-12 focus:ring-2 focus:ring-yellow/50">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recruitment">Recruitment Consultancy</SelectItem>
                      <SelectItem value="manpower">Manpower Supply</SelectItem>
                      <SelectItem value="consultancy">Management Consultancy</SelectItem>
                      <SelectItem value="jobseeker">Job Seeker Services</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-semibold">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-gray-50 border-0 rounded-2xl p-4 min-h-32 focus:ring-2 focus:ring-yellow/50 resize-none"
                    placeholder="Tell us about your requirements or inquiry..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-yellow hover:bg-yellow/90 text-black font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:scale-105"
                >
                  Send Message <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}