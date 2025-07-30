
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For static deployment, we'll use mailto or show a success message
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:contact@hirenet.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation();
  const { elementRef: infoRef, isVisible: infoVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take the next step in your career journey? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div 
            ref={infoRef}
            className={`
              transition-all duration-700 ease-out
              ${infoVisible 
                ? 'animate-slide-in-left opacity-100' 
                : 'opacity-0 transform -translate-x-8'
              }
            `}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">contact@hirenet.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">+971 4 123 4567</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold">Office</h4>
                  <p className="text-gray-600">Dubai International Financial Centre<br />Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>
          </div>

          <Card 
            ref={formRef}
            className={`
              border-2 border-gray-100 transition-all duration-700 ease-out
              ${formVisible 
                ? 'animate-slide-in-right opacity-100' 
                : 'opacity-0 transform translate-x-8'
              }
            `}
          >
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2 border-gray-200 focus:border-yellow"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2 border-gray-200 focus:border-yellow"
                  />
                </div>
                
                <Input
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-2 border-gray-200 focus:border-yellow"
                />
                
                <Textarea
                  name="message"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="border-2 border-gray-200 focus:border-yellow resize-none"
                />
                
                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full bg-yellow text-black hover:bg-yellow/90 font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
