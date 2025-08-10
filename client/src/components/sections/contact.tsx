
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Circle } from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

interface ContactProps {
  emailMode?: 'single' | 'both';
}

export default function Contact({ emailMode = 'both' }: ContactProps) {
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

  const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation({
    threshold: 0.3,
    rootMargin: '0px 0px -150px 0px'
  });
  const { elementRef: infoRef, isVisible: infoVisible } = useScrollAnimation({
    threshold: 0.3,
    rootMargin: '0px 0px -150px 0px'
  });

  // Typewriter hook
  const useTypewriter = (text: string, speed: number = 50, startDelay: number = 0) => {
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
      if (!infoVisible) {
        setDisplayText('');
        setIsTyping(false);
        return;
      }

      const timer = setTimeout(() => {
        setIsTyping(true);
        let i = 0;
        const typing = setInterval(() => {
          if (i < text.length) {
            setDisplayText(text.slice(0, i + 1));
            i++;
          } else {
            setIsTyping(false);
            clearInterval(typing);
          }
        }, speed);

        return () => clearInterval(typing);
      }, startDelay);

      return () => clearTimeout(timer);
    }, [text, speed, startDelay, infoVisible]);

    return { displayText, isTyping };
  };

  // Typewriter effects for each contact detail - all start at the same time
  const emailText = emailMode === 'single' ? 'contact@hirenet.in' : 'business@hirenet.in\ncontact@hirenet.in';
  const emailTypewriter = useTypewriter(emailText, 80, 800);
  const phoneTypewriter = useTypewriter('+91 333 508 5038', 100, 800);
  const mainOfficeTypewriter = useTypewriter('6/7A, AJC Bose Road, Padatik Theatre, Kolkata-700017, West Bengal', 60, 800);
  const branchOfficeTypewriter = useTypewriter('4th-floor Nevidita Road, Kidzee School, Siliguri 734003, West Bengal', 60, 800);

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
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
            transition={{ 
              duration: 0.5, 
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto max-md:text-sm"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
            transition={{ 
              duration: 0.4, 
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            Ready to take the next step in your career journey? Let's discuss how we can help you achieve your goals.
          </motion.p>
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
                className="flex items-center group"
                variants={itemVariants}
                whileHover={{ 
                  x: 4,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center mr-4"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 4px 15px rgba(245, 215, 66, 0.3)"
                  }}
                >
                  <Mail className="h-6 w-6 text-black" />
                </motion.div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600 whitespace-pre-line">
                    {emailTypewriter.displayText}
                    {emailTypewriter.isTyping && (
                      <span className="animate-pulse text-yellow">|</span>
                    )}
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center group cursor-pointer"
                variants={itemVariants}
                whileHover={{ 
                  x: 4,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center mr-4"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 4px 15px rgba(245, 215, 66, 0.3)"
                  }}
                >
                  <Phone className="h-6 w-6 text-black" />
                </motion.div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">
                    {phoneTypewriter.displayText}
                    {phoneTypewriter.isTyping && (
                      <span className="animate-pulse text-yellow">|</span>
                    )}
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start group cursor-pointer"
                variants={itemVariants}
                whileHover={{ 
                  x: 4,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center mr-4 mt-1 flex-shrink-0"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 4px 15px rgba(245, 215, 66, 0.3)"
                  }}
                >
                  <MapPin className="h-6 w-6 text-black" />
                </motion.div>
                <div className="flex-1 max-w-xl pr-12">
                  <h4 className="font-semibold mb-4">Office Locations</h4>
                  
                  {/* Main Office */}
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <Circle className="h-2 w-2 text-gray-400 fill-current mr-3 flex-shrink-0" />
                      <h5 className="font-semibold text-gray-800 text-sm">MAIN OFFICE</h5>
                    </div>
                    <div className="ml-5">
                      <p className="text-gray-600 leading-relaxed">
                        {mainOfficeTypewriter.displayText}
                        {mainOfficeTypewriter.isTyping && (
                          <span className="animate-pulse text-yellow">|</span>
                        )}
                      </p>
                    </div>
                  </div>
                  
                  {/* Branch Office */}
                  <div>
                    <div className="flex items-center mb-2">
                      <Circle className="h-2 w-2 text-gray-400 fill-current mr-3 flex-shrink-0" />
                      <h5 className="font-semibold text-gray-800 text-sm">BRANCH OFFICE</h5>
                    </div>
                    <div className="ml-5">
                      <p className="text-gray-600 leading-relaxed">
                        {branchOfficeTypewriter.displayText}
                        {branchOfficeTypewriter.isTyping && (
                          <span className="animate-pulse text-yellow">|</span>
                        )}
                      </p>
                    </div>
                  </div>
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
              className="border-2 border-gray-100 overflow-hidden rounded-3xl"
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
                    className="border-2 border-gray-200 focus:border-yellow rounded-xl px-6 py-4"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2 border-gray-200 focus:border-yellow rounded-xl px-6 py-4"
                  />
                </div>
                
                <Input
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-2 border-gray-200 focus:border-yellow rounded-xl px-6 py-4"
                />
                
                <Textarea
                  name="message"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="border-2 border-gray-200 focus:border-yellow resize-none rounded-xl px-6 py-4"
                />
                
                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full bg-yellow text-black hover:bg-yellow/90 font-semibold rounded-xl py-4"
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
