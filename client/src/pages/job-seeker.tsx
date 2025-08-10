import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ObjectUploader } from "@/components/ObjectUploader";
import { Upload, CheckCircle, Star, User, Briefcase, Phone } from "lucide-react";
import JobListings from "@/components/sections/job-listings";
import SuccessStories from "@/components/sections/success-stories";
import WhyChooseHireNet from "@/components/sections/why-choose-hirenet";
import Contact from "@/components/sections/contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertResumeSchema } from "@shared/schema";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { UploadResult } from "@uppy/core";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import indianEmblemImage from "@assets/emblem-of-india-logo-png_seeklogo-311715_1754816803273.png";

const resumeFormSchema = insertResumeSchema.extend({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  currentLocation: z.string().optional(),
  experience: z.string().optional(),
  currentSalary: z.string().optional(),
  industry: z.string().optional(),
  jobTitle: z.string().optional(),
  resume: z.string().optional(),
});

type ResumeFormData = z.infer<typeof resumeFormSchema>;

// Job Seeker Success Stories Data
const jobSeekerTestimonials = [
  {
    id: 1,
    name: "Ravi Kumar",
    position: "Chef",
    company: "Al Manara Restaurant",
    location: "Dubai, UAE (Originally from Punjab, India)",
    quote: "HireNET team help me very much. Small hotel in Amritsar giving me only 15000 rupees. Now in Dubai getting good salary, can send money to family. Food cooking same but here better opportunity. Thank you HireNET.",
    rating: 5,
    initials: "RK"
  },
  {
    id: 2,
    name: "Suresh Yadav",
    position: "Safety Officer",
    company: "Gulf Construction Co.",
    location: "Doha, Qatar (Originally from Bihar, India)",
    quote: "After 12th I did safety course in Delhi. HireNET find me job in Qatar construction. Free room and food also getting. Family very proud of me. Thank you HireNET for changing life.",
    rating: 5,
    initials: "SY"
  },
  {
    id: 3,
    name: "Priya Singh",
    position: "Receptionist",
    company: "Dubai Medical Center",
    location: "Dubai, UAE (Originally from Uttar Pradesh, India)",
    quote: "HireNET provided excellent support throughout my job search process. They helped improve my English communication skills and prepared me for interviews. The receptionist position at Dubai Medical Center has given me valuable international experience and much better compensation than my previous role in Lucknow.",
    rating: 5,
    initials: "PS"
  },
  {
    id: 4,
    name: "Mohan Patel",
    position: "Electrical Engineer",
    company: "Bahrain Power Systems",
    location: "Manama, Bahrain (Originally from Gujarat, India)",
    quote: "Small factory in Ahmedabad giving very less salary after diploma. HireNET show me opportunity in Bahrain. Now working as technician in big company, learning new things. Good for career growth.",
    rating: 5,
    initials: "MP"
  },
  {
    id: 5,
    name: "Kavita Sharma",
    position: "HR Executive",
    company: "Al Noor Trading",
    location: "Kuwait City, Kuwait (Originally from Rajasthan, India)",
    quote: "Despite having an MBA from Jaipur, I struggled to find suitable opportunities in India. HireNET's professional approach and thorough preparation helped me secure this HR executive position. They provided valuable guidance on visa procedures and cultural adaptation. I'm extremely satisfied with my career progression in Kuwait.",
    rating: 5,
    initials: "KS"
  },
  {
    id: 6,
    name: "Deepak Gupta",
    position: "Digital Marketing Executive",
    company: "Riyadh Media House",
    location: "Riyadh, Saudi Arabia (Originally from Delhi, India)",
    quote: "HireNET's team understood my digital marketing background and connected me with the right opportunities. They helped build my portfolio and provided excellent interview coaching. Working with major Saudi clients has significantly enhanced my professional skills and opened new career paths in the Middle East market.",
    rating: 5,
    initials: "DG"
  },
  {
    id: 7,
    name: "Sunita Devi",
    position: "Housekeeping Supervisor",
    company: "Oman Grand Hotel",
    location: "Muscat, Oman (Originally from West Bengal, India)",
    quote: "Hotel work in Kolkata giving me very less money. HireNET help me get supervisor job in Oman. Good salary, room free, children can study in good school. Very happy with HireNET team support.",
    rating: 5,
    initials: "SD"
  },
  {
    id: 8,
    name: "Ramesh Nair",
    position: "Store Keeper",
    company: "Emirates Logistics",
    location: "Dubai, UAE (Originally from Kerala, India)",
    quote: "After commerce degree, small shop in Kochi not giving good money. HireNET find store keeper work in Dubai warehouse. Company very good, overtime pay also getting. Next year bringing family to Dubai.",
    rating: 5,
    initials: "RN"
  }
];

export default function JobSeekerPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPhoneSelectorOpen, setIsPhoneSelectorOpen] = useState(false);
  const { toast } = useToast();
  
  // Phone numbers for 1 On 1 Call
  const phoneNumbers = [
    { number: "+913335085038" },
    { number: "+919477119466" }
  ];
  
  // Function to initiate phone call
  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
    setIsPhoneSelectorOpen(false);
  };
  
  // Scroll animations for different sections
  const { elementRef: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation({
    threshold: 0.8,
    rootMargin: '0px 0px -300px 0px'
  });
  
  // Certification animation hook
  const certificationAnimation = useScrollAnimation({ 
    threshold: 0.1, 
    rootMargin: '0px 0px -100px 0px' 
  });

  const form = useForm<ResumeFormData>({
    resolver: zodResolver(resumeFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      currentLocation: "",
      experience: "",
      currentSalary: "",
      industry: "",
      jobTitle: "",
      resume: "",
      fileName: "",
      filePath: "",
    },
  });

  const uploadMutation = useMutation({
    mutationFn: () => apiRequest("/api/resumes/upload", "POST"),
  });

  const resumeMutation = useMutation({
    mutationFn: (data: ResumeFormData) => apiRequest("/api/resumes", "POST", data),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your resume has been uploaded successfully.",
      });
      setIsDialogOpen(false);
      form.reset();
      setUploadedFile(null);
      setIsSubmitting(false);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit resume. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });



  const handleGetUploadParameters = async () => {
    const result = await uploadMutation.mutateAsync();
    return {
      method: "PUT" as const,
      url: (result as any).uploadURL,
    };
  };

  const handleUploadComplete = (result: UploadResult<Record<string, unknown>, Record<string, unknown>>) => {
    if (result.successful && result.successful.length > 0) {
      const file = result.successful[0];
      const fileName = file.name || "resume.pdf";
      const filePath = (file as any).uploadURL || "";
      
      setUploadedFile(fileName);
      form.setValue("fileName", fileName);
      form.setValue("filePath", filePath);
      
      toast({
        title: "File uploaded!",
        description: "Please fill in your details to complete the submission.",
      });
    }
  };

  const onSubmit = (data: ResumeFormData) => {
    if (!data.filePath) {
      toast({
        title: "Error",
        description: "Please upload a resume file first.",
        variant: "destructive",
      });
      return;
    }
    resumeMutation.mutate(data);
  };

  return (
    <div className="min-h-screen page-transition">
      {/* Hero Section for Job Seekers */}
      <section className="relative py-20 cream overflow-hidden">
        {/* Enhanced Background Graphics (Same as Transform Your Workforce) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Enhanced Live Moving Floating Circles - More Visible */}
          <div className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-yellow-200/25 to-yellow-300/35 rounded-full blur-3xl animate-floatMoveEnhanced"></div>
          <div className="absolute top-40 right-20 w-36 h-36 bg-gradient-to-r from-blue-200/22 to-cyan-200/32 rounded-full blur-2xl animate-pulseEnhanced" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-56 h-56 bg-gradient-to-r from-orange-200/20 to-yellow-200/30 rounded-full blur-3xl animate-floatMoveEnhanced" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 right-1/3 w-40 h-40 bg-gradient-to-r from-purple-200/22 to-pink-200/32 rounded-full blur-2xl animate-rotateEnhanced" style={{animationDelay: '1.5s'}}></div>
          
          {/* Additional Enhanced Elements */}
          <div className="absolute top-1/2 left-8 w-32 h-32 bg-gradient-to-r from-emerald-200/25 to-green-200/35 rounded-full blur-2xl animate-pulseEnhanced" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-60 right-12 w-28 h-28 bg-gradient-to-r from-rose-200/22 to-red-200/32 rounded-full blur-xl animate-floatMoveEnhanced" style={{animationDelay: '4s'}}></div>
          
          {/* More Colorful Floating Elements for Empty Spaces */}
          <div className="absolute top-32 left-1/3 w-44 h-44 bg-gradient-to-r from-indigo-200/20 to-violet-200/30 rounded-full blur-3xl animate-pulseEnhanced" style={{animationDelay: '2.5s'}}></div>
          <div className="absolute bottom-40 right-20 w-36 h-36 bg-gradient-to-r from-teal-200/22 to-cyan-200/32 rounded-full blur-2xl animate-rotateEnhanced" style={{animationDelay: '1.8s'}}></div>
          <div className="absolute top-48 right-1/3 w-40 h-40 bg-gradient-to-r from-amber-200/20 to-orange-200/30 rounded-full blur-2xl animate-floatMoveEnhanced" style={{animationDelay: '3.5s'}}></div>
          <div className="absolute bottom-48 left-16 w-32 h-32 bg-gradient-to-r from-lime-200/25 to-emerald-200/35 rounded-full blur-xl animate-pulseEnhanced" style={{animationDelay: '4.2s'}}></div>
          <div className="absolute top-72 left-1/2 w-24 h-24 bg-gradient-to-r from-fuchsia-200/22 to-purple-200/32 rounded-full blur-xl animate-rotateEnhanced" style={{animationDelay: '5s'}}></div>
          <div className="absolute bottom-60 right-1/4 w-28 h-28 bg-gradient-to-r from-sky-200/20 to-blue-200/30 rounded-full blur-xl animate-floatMoveEnhanced" style={{animationDelay: '6s'}}></div>
          
          {/* Enhanced Moving Geometric Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-8 animate-waveFlow" viewBox="0 0 1000 600">
            <defs>
              <linearGradient id="jobSeekerGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,300 Q250,100 500,300 T1000,300" stroke="url(#jobSeekerGradient1)" strokeWidth="2" fill="none"/>
            <path d="M0,200 Q300,400 600,200 T1000,200" stroke="url(#jobSeekerGradient1)" strokeWidth="1.5" fill="none"/>
          </svg>
          
          {/* Wavy Abstract Traveling Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600">
            <defs>
              <linearGradient id="jobSeekerWavy1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0"/>
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="jobSeekerWavy2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0"/>
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.12"/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="jobSeekerWavy3" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0"/>
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.13"/>
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="jobSeekerWavy4" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0"/>
                <stop offset="50%" stopColor="#f97316" stopOpacity="0.11"/>
                <stop offset="100%" stopColor="#f97316" stopOpacity="0"/>
              </linearGradient>
            </defs>
            
            <path 
              d="M-150,100 C-50,90 100,120 350,110 C600,105 800,95 950,92 C1050,90 1100,88 1150,90" 
              stroke="url(#jobSeekerWavy1)" 
              strokeWidth="1.5" 
              fill="none"
              className="animate-wavyTravel1"
              style={{animationDelay: '1s'}}
            />
            
            <path 
              d="M1150,200 C1050,210 900,170 650,180 C400,185 250,205 100,208 C0,210 -50,211 -150,210" 
              stroke="url(#jobSeekerWavy2)" 
              strokeWidth="1.2" 
              fill="none"
              className="animate-wavyTravel2"
              style={{animationDelay: '3s'}}
            />
            
            <path 
              d="M-150,400 C-50,390 100,420 350,410 C600,405 800,395 950,392 C1050,390 1100,388 1150,390" 
              stroke="url(#jobSeekerWavy3)" 
              strokeWidth="1.3" 
              fill="none"
              className="animate-wavyTravel3"
              style={{animationDelay: '5s'}}
            />
            
            <path 
              d="M1150,500 C1050,510 900,470 650,480 C400,485 250,505 100,508 C0,510 -50,511 -150,510" 
              stroke="url(#jobSeekerWavy4)" 
              strokeWidth="1.0" 
              fill="none"
              className="animate-wavyTravel4"
              style={{animationDelay: '7s'}}
            />
          </svg>
          
          {/* Very Light Dots Pattern */}
          <div className="absolute inset-0 opacity-2">
            <svg width="40" height="40" viewBox="0 0 40 40" className="w-full h-full">
              <pattern id="jobSeekerDotsPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="#f59e0b" opacity="0.1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#jobSeekerDotsPattern)" />
            </svg>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Launch Your <span className="text-yellow">Global Career</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect with premium employers across the Middle East and beyond. 
              Your next career opportunity awaits.
            </p>

            {/* Government Certification Section - Moved here */}
            <div 
              ref={certificationAnimation.elementRef}
              className="max-w-4xl mx-auto px-4 pt-4"
            >
              <motion.div 
                initial={{ 
                  opacity: 0, 
                  y: 60,
                  scale: 0.7,
                  rotateY: -30
                }}
                animate={certificationAnimation.isVisible ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateY: 0
                } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl hover:scale-[1.005] hover:-translate-y-0.5 hover:bg-white/90 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row items-center gap-6 min-h-[160px]">
                  {/* Indian Government Emblem */}
                  <motion.div 
                    initial={{ 
                      opacity: 0, 
                      y: 60,
                      scale: 0.7,
                      rotateY: -30
                    }}
                    animate={certificationAnimation.isVisible ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      rotateY: 0
                    } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    className="flex-shrink-0 h-full flex items-center"
                  >
                    <img 
                      src={indianEmblemImage} 
                      alt="Government of India Emblem" 
                      className="h-32 w-auto object-contain filter sepia-[.8] hue-rotate-[40deg] saturate-[1.8] brightness-[1.1]"
                    />
                  </motion.div>

                  {/* Certification Text */}
                  <motion.div 
                    initial={{ 
                      opacity: 0, 
                      y: 60,
                      scale: 0.7,
                      rotateY: -30
                    }}
                    animate={certificationAnimation.isVisible ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      rotateY: 0
                    } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    className="flex-1 text-center md:text-left"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                      Approved By <span className="text-yellow">Government Of India</span>
                    </h3>
                    <p className="text-md md:text-lg text-gray-700 font-medium mb-2">
                      Ministry of External Affairs
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Officially recognized recruitment agency authorized to facilitate international employment 
                      opportunities for Indian professionals across the Middle East region.
                    </p>
                  </motion.div>

                  {/* Verification Badge */}
                  <motion.div 
                    initial={{ 
                      opacity: 0, 
                      y: 60,
                      scale: 0.7,
                      rotateY: -30
                    }}
                    animate={certificationAnimation.isVisible ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      rotateY: 0
                    } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    className="flex-shrink-0"
                  >
                    <div className="bg-gradient-to-r from-yellow/20 to-yellow/30 rounded-2xl px-3 py-2 border border-yellow/30 hover:from-yellow/30 hover:to-yellow/40 hover:scale-[1.01] transition-all duration-300 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-semibold text-gray-800">Verified</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        Government Approved
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center pt-8">
              {/* Buttons Row */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      className="bg-yellow text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow/90 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow/25 transform active:scale-95 shadow-lg" 
                      data-testid="button-open-upload-dialog"
                    >
                      <Upload className="mr-2 h-5 w-5" />
                      Upload Your Resume
                    </Button>
                  </DialogTrigger>
                <DialogContent className="max-w-none w-[95vw] sm:w-[90vw] md:w-[80vw] lg:w-[60vw] xl:w-[50vw] max-h-[90vh] p-0 border-none shadow-2xl glass-dialog" style={{ 
                  borderRadius: '40px',
                  background: 'rgba(255, 255, 255, 0.25) !important',
                  backdropFilter: 'blur(20px) saturate(180%) brightness(110%) !important',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%) brightness(110%) !important',
                  border: '1px solid rgba(255, 255, 255, 0.3) !important',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                  zIndex: 9999,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <DialogHeader className="sr-only">
                    <DialogTitle>Submit Your Resume</DialogTitle>
                    <DialogDescription>
                      Join thousands of professionals who found their dream careers through HireNET
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex-1 overflow-y-auto overflow-x-hidden dialog-scroll-container" style={{ 
                    borderRadius: '40px',
                    background: 'transparent'
                  }}>
                    <div className="p-8 space-y-8" style={{ background: 'transparent' }}>
                      <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">Submit Your Resume</h2>
                        <p className="text-gray-600">Join thousands of professionals who found their dream careers through HireNET</p>
                      </div>
                      
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                          
                          {/* Resume Upload Section */}
                          <div className="space-y-4">
                            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                              <div className="w-10 h-10 bg-yellow/20 rounded-full flex items-center justify-center">
                                <Upload className="w-5 h-5 text-yellow-600" />
                              </div>
                              <h3 className="text-xl font-semibold text-gray-900">Resume Upload</h3>
                            </div>
                            
                            {uploadedFile ? (
                              <div className="flex items-center gap-3 p-6 border border-green-200 rounded-2xl" style={{ background: 'transparent' }}>
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                  <CheckCircle className="h-6 w-6 text-green-600" />
                                </div>
                                <div>
                                  <p className="font-semibold text-green-800">{uploadedFile}</p>
                                  <p className="text-sm text-green-600">Successfully uploaded</p>
                                </div>
                              </div>
                            ) : (
                              <ObjectUploader
                                maxNumberOfFiles={1}
                                maxFileSize={5242880}
                                onGetUploadParameters={async () => {
                                  const response = await fetch('/api/objects/upload', {
                                    method: 'POST',
                                  });
                                  const data = await response.json();
                                  return {
                                    method: 'PUT' as const,
                                    url: data.uploadURL,
                                  };
                                }}
                                onComplete={(result) => {
                                  if (result.successful && result.successful.length > 0) {
                                    const fileName = result.successful[0].name;
                                    if (fileName) {
                                      setUploadedFile(fileName);
                                      form.setValue('resume', fileName);
                                    }
                                  }
                                }}
                                buttonClassName="w-full h-24 bg-white border-2 border-dashed border-gray-300 rounded-2xl hover:border-yellow-400 hover:bg-yellow-50/50 transition-all duration-200"
                              >
                                <div className="text-center space-y-2">
                                  <div className="text-gray-600 font-medium">Click to upload or drag and drop</div>
                                  <div className="text-sm text-gray-500">PDF files only • Maximum 5MB</div>
                                </div>
                              </ObjectUploader>
                            )}
                          </div>

                          {/* Personal Information Section */}
                          <div className="space-y-4">
                            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <User className="w-5 h-5 text-blue-600" />
                              </div>
                              <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-sm font-semibold text-gray-700">Full Name *</FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="Enter your full name"
                                        className="h-12 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                                        {...field}
                                        data-testid="input-full-name"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-sm font-semibold text-gray-700">Email Address *</FormLabel>
                                    <FormControl>
                                      <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="h-12 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                                        {...field}
                                        data-testid="input-email"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-sm font-semibold text-gray-700">Phone Number</FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="Enter your phone number"
                                        className="h-12 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                                        {...field}
                                        data-testid="input-phone"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="currentLocation"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-sm font-semibold text-gray-700">Current Location</FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="City, Country"
                                        className="h-12 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                                        {...field}
                                        data-testid="input-location"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>

                          {/* Career Details Section */}
                          <div className="space-y-4">
                            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                <Briefcase className="w-5 h-5 text-purple-600" />
                              </div>
                              <h3 className="text-xl font-semibold text-gray-900">Career Details</h3>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <FormField
                                control={form.control}
                                name="experience"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-sm font-semibold text-gray-700">Years of Experience</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <FormControl>
                                        <SelectTrigger className="h-12 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20" data-testid="select-experience">
                                          <SelectValue placeholder="Select experience level" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        <SelectItem value="0-1">0-1 years</SelectItem>
                                        <SelectItem value="2-5">2-5 years</SelectItem>
                                        <SelectItem value="6-10">6-10 years</SelectItem>
                                        <SelectItem value="11+">11+ years</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="currentSalary"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-sm font-semibold text-gray-700">Current Salary (USD/year)</FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="e.g. 50000"
                                        className="h-12 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                                        {...field}
                                        data-testid="input-salary"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            
                            <FormField
                              control={form.control}
                              name="industry"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-sm font-semibold text-gray-700">Industry</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="h-12 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20" data-testid="select-industry">
                                        <SelectValue placeholder="Select your industry" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="healthcare">Healthcare</SelectItem>
                                      <SelectItem value="construction">Construction</SelectItem>
                                      <SelectItem value="hospitality">Hospitality</SelectItem>
                                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                                      <SelectItem value="retail">Retail</SelectItem>
                                      <SelectItem value="finance">Finance</SelectItem>
                                      <SelectItem value="education">Education</SelectItem>
                                      <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="jobTitle"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-sm font-semibold text-gray-700">Desired Job Title</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="e.g. Senior Nurse, Construction Supervisor"
                                      className="h-12 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                                      {...field}
                                      data-testid="input-job-title"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="pt-6 border-t border-gray-100">
                            <Button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full bg-yellow hover:bg-yellow/90 text-black font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
                              data-testid="button-submit-resume"
                            >
                              {isSubmitting ? 'Submitting...' : 'Submit Resume'}
                            </Button>
                          </div>
                        </form>
                      </Form>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              
              {/* 1 On 1 Call Button */}
              <Dialog open={isPhoneSelectorOpen} onOpenChange={setIsPhoneSelectorOpen}>
                <DialogTrigger asChild>
                  <Button 
                    className="bg-white text-black border-2 border-yellow px-8 py-4 rounded-full font-semibold hover:bg-yellow hover:border-yellow transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow/25 transform active:scale-95 shadow-lg" 
                    data-testid="button-1on1-call"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    1 On 1 Call
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md" style={{ borderRadius: '40px' }}>
                  <DialogHeader>
                    <DialogTitle>Select Phone Number</DialogTitle>
                    <DialogDescription>
                      Choose a number to call for 1-on-1 consultation
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    {phoneNumbers.map((phone, index) => (
                      <Button
                        key={index}
                        onClick={() => handlePhoneCall(phone.number)}
                        className="w-full justify-center text-center p-4 h-auto bg-gray-50 hover:bg-yellow/20 text-black border border-gray-200 hover:border-yellow rounded-2xl"
                        data-testid={`button-call-${phone.number}`}
                      >
                        <span className="font-semibold text-lg">{phone.number}</span>
                      </Button>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
              </div>
              
              {/* Free resume review text below buttons */}
              <p className="text-gray-500 text-sm">Free resume review and optimization included</p>
            </div>
          </div>
        </div>
      </section>



      {/* Latest Opportunities */}
      <JobListings />

      {/* Job Seeker Success Stories */}
      <section 
        className="relative py-16 pb-8 overflow-hidden" 
        style={{ backgroundColor: '#F2F0E8' }}
      >
        {/* Enhanced Background Graphics (Same as Launch Your Global Career) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Enhanced Live Moving Floating Circles - More Visible */}
          <div className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-yellow-200/25 to-yellow-300/35 rounded-full blur-3xl animate-floatMoveEnhanced"></div>
          <div className="absolute top-40 right-20 w-36 h-36 bg-gradient-to-r from-blue-200/22 to-cyan-200/32 rounded-full blur-2xl animate-pulseEnhanced" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-56 h-56 bg-gradient-to-r from-orange-200/20 to-yellow-200/30 rounded-full blur-3xl animate-floatMoveEnhanced" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 right-1/3 w-40 h-40 bg-gradient-to-r from-purple-200/22 to-pink-200/32 rounded-full blur-2xl animate-rotateEnhanced" style={{animationDelay: '1.5s'}}></div>
          
          {/* Additional Enhanced Elements */}
          <div className="absolute top-1/2 left-8 w-32 h-32 bg-gradient-to-r from-emerald-200/25 to-green-200/35 rounded-full blur-2xl animate-pulseEnhanced" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-60 right-12 w-28 h-28 bg-gradient-to-r from-rose-200/22 to-red-200/32 rounded-full blur-xl animate-floatMoveEnhanced" style={{animationDelay: '4s'}}></div>
          
          {/* More Colorful Floating Elements for Empty Spaces */}
          <div className="absolute top-32 left-1/3 w-44 h-44 bg-gradient-to-r from-indigo-200/20 to-violet-200/30 rounded-full blur-3xl animate-pulseEnhanced" style={{animationDelay: '2.5s'}}></div>
          <div className="absolute bottom-40 right-20 w-36 h-36 bg-gradient-to-r from-teal-200/22 to-cyan-200/32 rounded-full blur-2xl animate-rotateEnhanced" style={{animationDelay: '1.8s'}}></div>
          <div className="absolute top-48 right-1/3 w-40 h-40 bg-gradient-to-r from-amber-200/20 to-orange-200/30 rounded-full blur-2xl animate-floatMoveEnhanced" style={{animationDelay: '3.5s'}}></div>
          <div className="absolute bottom-48 left-16 w-32 h-32 bg-gradient-to-r from-lime-200/25 to-emerald-200/35 rounded-full blur-xl animate-pulseEnhanced" style={{animationDelay: '4.2s'}}></div>
          <div className="absolute top-72 left-1/2 w-24 h-24 bg-gradient-to-r from-fuchsia-200/22 to-purple-200/32 rounded-full blur-xl animate-rotateEnhanced" style={{animationDelay: '5s'}}></div>
          <div className="absolute bottom-60 right-1/4 w-28 h-28 bg-gradient-to-r from-sky-200/20 to-blue-200/30 rounded-full blur-xl animate-floatMoveEnhanced" style={{animationDelay: '6s'}}></div>
          
          {/* Enhanced Moving Geometric Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-8 animate-waveFlow" viewBox="0 0 1000 600">
            <defs>
              <linearGradient id="successStoriesGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,300 Q250,100 500,300 T1000,300" stroke="url(#successStoriesGradient1)" strokeWidth="2" fill="none"/>
            <path d="M0,200 Q300,400 600,200 T1000,200" stroke="url(#successStoriesGradient1)" strokeWidth="1.5" fill="none"/>
          </svg>
          
          {/* Wavy Abstract Traveling Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600">
            <defs>
              <linearGradient id="successStoriesWavy1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0"/>
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="successStoriesWavy2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0"/>
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.12"/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="successStoriesWavy3" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0"/>
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.13"/>
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="successStoriesWavy4" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0"/>
                <stop offset="50%" stopColor="#f97316" stopOpacity="0.11"/>
                <stop offset="100%" stopColor="#f97316" stopOpacity="0"/>
              </linearGradient>
            </defs>
            
            <path 
              d="M-150,100 C-50,90 100,120 350,110 C600,105 800,95 950,92 C1050,90 1100,88 1150,90" 
              stroke="url(#successStoriesWavy1)" 
              strokeWidth="1.5" 
              fill="none"
              className="animate-wavyTravel1"
              style={{animationDelay: '1s'}}
            />
            
            <path 
              d="M1150,200 C1050,210 900,170 650,180 C400,185 250,205 100,208 C0,210 -50,211 -150,210" 
              stroke="url(#successStoriesWavy2)" 
              strokeWidth="1.2" 
              fill="none"
              className="animate-wavyTravel2"
              style={{animationDelay: '3s'}}
            />
            
            <path 
              d="M-150,400 C-50,390 100,420 350,410 C600,405 800,395 950,392 C1050,390 1100,388 1150,390" 
              stroke="url(#successStoriesWavy3)" 
              strokeWidth="1.3" 
              fill="none"
              className="animate-wavyTravel3"
              style={{animationDelay: '5s'}}
            />
            
            <path 
              d="M1150,500 C1050,510 900,470 650,480 C400,485 250,505 100,508 C0,510 -50,511 -150,510" 
              stroke="url(#successStoriesWavy4)" 
              strokeWidth="1.0" 
              fill="none"
              className="animate-wavyTravel4"
              style={{animationDelay: '7s'}}
            />
          </svg>
          
          {/* Very Light Dots Pattern */}
          <div className="absolute inset-0 opacity-2">
            <svg width="40" height="40" viewBox="0 0 40 40" className="w-full h-full">
              <pattern id="successStoriesDotsPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="#f59e0b" opacity="0.1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#successStoriesDotsPattern)" />
            </svg>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={testimonialsRef} 
            className="text-center mb-16"
          >
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
              Success <span className="text-yellow">Stories</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
              transition={{ 
                duration: 0.4, 
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              Real career transformations from professionals who found their dream jobs through HireNET.
            </motion.p>
          </div>

          <motion.div 
            className="relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
            transition={{ 
              duration: 0.6, 
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <div className="overflow-x-auto pb-4 scrollbar-hide testimonials-container">
              <div className="flex gap-6 w-max px-12 py-2">
                {jobSeekerTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.6 + (index * 0.1),
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <Card 
                    className="bg-white p-8 rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex-shrink-0 w-[350px] h-[400px] group"
                  >
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 mr-3 overflow-hidden rounded-2xl border-2 border-yellow/20 bg-yellow flex items-center justify-center">
                        <span className="text-black font-bold text-lg">{testimonial.initials}</span>
                      </div>
                      <div className="flex text-yellow">
                        {Array(testimonial.rating).fill(0).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-gray-700 mb-4 italic text-sm flex-1">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-sm mt-auto">
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.position}</div>
                      <div className="text-gray-600">{testimonial.company}</div>
                      <div className="text-gray-500 text-xs">{testimonial.location}</div>
                    </div>
                  </CardContent>
                  </Card>
                </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose HireNET */}
      <WhyChooseHireNet />

      {/* Contact Section */}
      <Contact emailMode="single" />
    </div>
  );
}