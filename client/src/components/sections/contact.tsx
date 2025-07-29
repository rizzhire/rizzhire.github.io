import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin } from "lucide-react";
import type { InsertContact } from "@shared/schema";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest('POST', '/api/contacts', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', company: '', message: '' });
      queryClient.invalidateQueries({ queryKey: ['/api/contacts'] });
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In <span className="text-yellow">Touch</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take the next step? Whether you're looking for talent or seeking new opportunities, we're here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="cream rounded-xl border-0 focus:ring-2 focus:ring-yellow"
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="cream rounded-xl border-0 focus:ring-2 focus:ring-yellow"
                  required
                />
              </div>
              <Input
                type="text"
                placeholder="Company Name (Optional)"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="cream rounded-xl border-0 focus:ring-2 focus:ring-yellow"
              />
              <Textarea
                placeholder="Tell us about your needs..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="cream rounded-xl border-0 focus:ring-2 focus:ring-yellow resize-none"
                required
              />
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-yellow text-black py-4 rounded-xl font-semibold hover:bg-yellow/90 transition-colors btn-hover ripple"
              >
                {contactMutation.isPending ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-yellow/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-yellow/20">
                <Mail className="h-5 w-5 text-yellow stroke-[1.5]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Email Us</h4>
                <p className="text-gray-700 font-medium">connect@hirenet.in</p>
                <p className="text-gray-500 text-sm">Get in touch anytime</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-yellow/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-yellow/20">
                <Phone className="h-5 w-5 text-yellow stroke-[1.5]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Call Us</h4>
                <p className="text-gray-700 font-medium">+1 (555) 123-4567</p>
                <p className="text-gray-500 text-sm">Mon-Fri 9AM-6PM EST</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-yellow/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-yellow/20">
                <MapPin className="h-5 w-5 text-yellow stroke-[1.5]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Visit Us</h4>
                <p className="text-gray-700 font-medium">6/7A, AJC Bose Road, Padatik Theatre Basement, Near Trimurti Petrol Pump, Kolkata-700017,  West Bengal, INDIA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
