
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -60,
      scale: 0.8,
      rotateY: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 120,
        damping: 18
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: 60,
      scale: 0.9,
      rotateY: 20
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.9,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take the next step in your career journey? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div 
            ref={infoRef}
            initial="hidden"
            animate={infoVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="perspective-1000"
          >
            <motion.h3 
              className="text-2xl font-bold mb-6"
              variants={itemVariants}
            >
              Contact Information
            </motion.h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-center group cursor-pointer"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  x: 8,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center mr-4"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0 8px 25px rgba(245, 215, 66, 0.4)"
                  }}
                >
                  <Mail className="h-6 w-6 text-black" />
                </motion.div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">contact@hirenet.in</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center group cursor-pointer"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  x: 8,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center mr-4"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0 8px 25px rgba(245, 215, 66, 0.4)"
                  }}
                >
                  <Phone className="h-6 w-6 text-black" />
                </motion.div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">+91 333 508 5038</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center group cursor-pointer"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  x: 8,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center mr-4"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0 8px 25px rgba(245, 215, 66, 0.4)"
                  }}
                >
                  <MapPin className="h-6 w-6 text-black" />
                </motion.div>
                <div>
                  <h4 className="font-semibold">Office</h4>
                  <p className="text-gray-600">Dubai International Financial Centre<br />Dubai, United Arab Emirates</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            ref={formRef}
            initial="hidden"
            animate={formVisible ? "visible" : "hidden"}
            variants={cardVariants}
            className="perspective-1000"
          >
            <Card 
              className="border-2 border-gray-100 overflow-hidden"
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
                    className="border-2 border-gray-200 focus:border-yellow rounded-3xl px-6 py-4"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2 border-gray-200 focus:border-yellow rounded-3xl px-6 py-4"
                  />
                </div>
                
                <Input
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-2 border-gray-200 focus:border-yellow rounded-3xl px-6 py-4"
                />
                
                <Textarea
                  name="message"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="border-2 border-gray-200 focus:border-yellow resize-none rounded-3xl px-6 py-4"
                />
                
                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full bg-yellow text-black hover:bg-yellow/90 font-semibold rounded-3xl py-4"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
