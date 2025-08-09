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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                <CardContent className="p-0 text-center relative z-10">
                  <div className="relative mb-4">
                    {/* Unique geometric icon container based on index */}
                    {index === 0 && (
                      <div className="relative w-12 h-12 mx-auto">
                        <div className="absolute inset-0 border-2 border-gray-200 rotate-45 rounded-lg group-hover:border-yellow-400 transition-colors duration-300"></div>
                        <div className="absolute inset-2 bg-gray-50 rotate-45 rounded-sm group-hover:bg-yellow-50 transition-colors duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <info.icon className="w-5 h-5 text-gray-600 group-hover:text-yellow-600 transition-colors duration-300" />
                        </div>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="relative w-12 h-12 mx-auto">
                        <div className="absolute inset-0 border-2 border-gray-200 rounded-full group-hover:border-yellow-400 transition-colors duration-300"></div>
                        <div className="absolute inset-1 border border-gray-100 rounded-full group-hover:border-yellow-200 transition-colors duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <info.icon className="w-5 h-5 text-gray-600 group-hover:text-yellow-600 transition-colors duration-300" />
                        </div>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="relative w-12 h-12 mx-auto">
                        <div className="absolute inset-0 border-2 border-gray-200 rounded-lg group-hover:border-yellow-400 transition-colors duration-300"></div>
                        <div className="absolute inset-2 bg-gray-50 rounded-sm group-hover:bg-yellow-50 transition-colors duration-300"></div>
                        <div className="absolute top-1 right-1 w-2 h-2 border-l-2 border-b-2 border-gray-200 group-hover:border-yellow-400 transition-colors duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <info.icon className="w-5 h-5 text-gray-600 group-hover:text-yellow-600 transition-colors duration-300" />
                        </div>
                      </div>
                    )}
                    {index === 3 && (
                      <div className="relative w-12 h-12 mx-auto">
                        <div className="absolute inset-0 border-2 border-gray-200 rounded-lg group-hover:border-yellow-400 transition-colors duration-300" style={{transform: 'skew(-15deg)'}}></div>
                        <div className="absolute inset-2 bg-gray-50 rounded-sm group-hover:bg-yellow-50 transition-colors duration-300" style={{transform: 'skew(-15deg)'}}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <info.icon className="w-5 h-5 text-gray-600 group-hover:text-yellow-600 transition-colors duration-300" />
                        </div>
                      </div>
                    )}
                  </div>

                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-xs leading-relaxed mb-1">{detail}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
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

      {/* Map Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Find <span className="text-yellow">Us</span>
            </h2>
            <p className="text-xl text-gray-600">Located in the heart of Kolkata's business district</p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow/20 to-cream rounded-3xl p-12 text-center">
            <div className="w-20 h-20 bg-yellow/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-10 h-10 text-yellow" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Main Office - Kolkata</h3>
            <p className="text-gray-600 text-lg mb-6">
              6/7A, AJC Bose Road, Padatik Theatre<br />
              Kolkata-700017, West Bengal, INDIA
            </p>
            <div className="mt-8 pt-6 border-t border-yellow/20">
              <h4 className="text-xl font-semibold mb-3 text-gray-800">Branch Office - Siliguri</h4>
              <p className="text-gray-600">
                4th-floor Nevidita Road, Kidzee School<br />
                Near Post Office Pradhan Nagar<br />
                Siliguri 734003
              </p>
            </div>
            <Button className="bg-yellow hover:bg-yellow/90 text-black font-semibold px-8 py-3 rounded-xl">
              Get Directions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}