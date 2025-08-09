import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ObjectUploader } from "@/components/ObjectUploader";
import { Upload, CheckCircle, Star } from "lucide-react";
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

const resumeFormSchema = insertResumeSchema.extend({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  position: z.string().optional(),
  experience: z.string().optional(),
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
  const { toast } = useToast();

  const form = useForm<ResumeFormData>({
    resolver: zodResolver(resumeFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
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
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit resume. Please try again.",
        variant: "destructive",
      });
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
    <div className="min-h-screen">
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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Launch Your <span className="text-yellow">Global Career</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect with premium employers across the Middle East and beyond. 
              Your next career opportunity awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    className="bg-yellow text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow/90 transition-all duration-300 hover:scale-105 shadow-lg" 
                    data-testid="button-open-upload-dialog"
                    onClick={() => setIsDialogOpen(true)}
                  >
                    <Upload className="mr-2 h-5 w-5" />
                    Upload Your Resume
                  </Button>
                </DialogTrigger>
                <DialogContent 
                  className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:max-w-[700px] max-h-[90vh] overflow-y-auto bg-white border shadow-2xl z-50" 
                  style={{ 
                    borderRadius: '40px',
                    backfaceVisibility: 'hidden',
                    transform: 'translate(-50%, -50%) translateZ(0)',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale'
                  }}
                >
                  <DialogHeader className="space-y-3 pb-6 border-b border-gray-100 mt-4 pr-8">
                    <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      Submit Your Resume
                    </DialogTitle>
                    <p className="text-gray-600 text-sm">
                      Join thousands of professionals who found their dream careers through HireNET
                    </p>
                  </DialogHeader>
                  
                  <div className="pt-6">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
                        
                        {/* File Upload Section */}
                        <div className="space-y-6">
                          <div className="border-b border-gray-100 pb-3">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-3">
                              <div className="w-8 h-8 bg-yellow/20 rounded-full flex items-center justify-center">
                                <Upload className="w-4 h-4 text-yellow-600" />
                              </div>
                              Resume Upload
                            </h3>
                          </div>
                          
                          {uploadedFile ? (
                            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl shadow-sm">
                              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                              </div>
                              <div className="flex-1">
                                <p className="font-medium text-green-800">{uploadedFile}</p>
                                <p className="text-xs text-green-600">Successfully uploaded</p>
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-3">
                              <ObjectUploader
                                maxNumberOfFiles={1}
                                maxFileSize={5242880} // 5MB
                                allowedFileTypes={[".pdf"]}
                                onGetUploadParameters={handleGetUploadParameters}
                                onComplete={handleUploadComplete}
                                buttonClassName="w-full bg-gradient-to-br from-white to-gray-50 border-2 border-dashed border-yellow/30 hover:border-yellow/50 hover:bg-gradient-to-br hover:from-yellow/5 hover:to-yellow/10 text-gray-700 transition-all duration-300 rounded-xl shadow-sm hover:shadow-md"
                              >
                                <div className="flex flex-col items-center gap-4 py-10">
                                  <div className="text-center">
                                    <p className="font-semibold text-gray-800">Click to upload or drag and drop</p>
                                  </div>
                                </div>
                              </ObjectUploader>
                              <p className="text-center text-sm text-gray-500">PDF files only • Maximum 5MB</p>
                            </div>
                          )}
                        </div>

                        {/* Personal Information Section */}
                        <div className="space-y-6">
                          <div className="border-b border-gray-100 pb-3">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                              </div>
                              Personal Information
                            </h3>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium text-gray-700">Full Name *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your full name" 
                                  {...field} 
                                  data-testid="input-name"
                                  className="border-gray-200 focus:border-yellow focus:ring-yellow/20 rounded-xl h-12 bg-white/50 backdrop-blur-sm"
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
                              <FormLabel className="text-sm font-medium text-gray-700">Email Address *</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email" 
                                  placeholder="Enter your email" 
                                  {...field} 
                                  data-testid="input-email"
                                  className="border-gray-200 focus:border-yellow focus:ring-yellow/20 rounded-xl h-12 bg-white/50 backdrop-blur-sm"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                          </div>
                          
                          <div className="grid grid-cols-1 gap-6">
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-sm font-medium text-gray-700">Phone Number</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="Enter your phone number" 
                                      {...field} 
                                      data-testid="input-phone" 
                                      className="border-gray-200 focus:border-yellow focus:ring-yellow/20 rounded-xl h-12 bg-white/50 backdrop-blur-sm"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        {/* Career Information Section */}
                        <div className="space-y-6">
                          <div className="border-b border-gray-100 pb-3">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-3">
                              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V4a2 2 0 00-2-2H8a2 2 0 00-2 2v2m8 0h3a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h3" />
                                </svg>
                              </div>
                              Career Details
                            </h3>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="position"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-sm font-medium text-gray-700">Desired Position</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="e.g. Software Engineer, Marketing Manager" 
                                      {...field} 
                                      data-testid="input-position" 
                                      className="border-gray-200 focus:border-yellow focus:ring-yellow/20 rounded-xl h-12 bg-white/50 backdrop-blur-sm"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="experience"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-sm font-medium text-gray-700">Years of Experience</FormLabel>
                                  <Select onValueChange={field.onChange} value={field.value || ""}>
                                    <FormControl>
                                      <SelectTrigger 
                                        data-testid="select-experience"
                                        className="border-gray-200 focus:border-yellow focus:ring-yellow/20 rounded-xl h-12 bg-white/50 backdrop-blur-sm"
                                      >
                                        <SelectValue placeholder="Select your experience level" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="rounded-xl border-gray-200 bg-white/95 backdrop-blur-sm">
                                      <SelectItem value="0-1" className="rounded-lg">0-1 years</SelectItem>
                                      <SelectItem value="1-3" className="rounded-lg">1-3 years</SelectItem>
                                      <SelectItem value="3-5" className="rounded-lg">3-5 years</SelectItem>
                                      <SelectItem value="5-10" className="rounded-lg">5-10 years</SelectItem>
                                      <SelectItem value="10+" className="rounded-lg">10+ years</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-6 border-t border-gray-100">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setIsDialogOpen(false)}
                          className="flex-1 h-12 rounded-xl border-gray-200 hover:bg-gray-50 text-gray-600 font-medium"
                          data-testid="button-cancel"
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          disabled={resumeMutation.isPending}
                          className="flex-1 h-12 bg-yellow hover:bg-yellow/90 text-black rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                          data-testid="button-submit-resume"
                        >
                          {resumeMutation.isPending ? (
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                              Submitting...
                            </div>
                          ) : (
                            "Submit Resume"
                          )}
                          </Button>
                        </div>
                        
                      </form>
                    </Form>
                  </div>
                </DialogContent>
              </Dialog>
              
              <p className="text-gray-500 text-sm">Free resume review and optimization included</p>
            </div>
          </div>
        </div>
      </section>

      <JobListings />

      {/* Job Seeker Success Stories */}
      <section className="relative py-16 pb-8 overflow-hidden" style={{ backgroundColor: '#F2F0E8' }}>
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
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Success <span className="text-yellow">Stories</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real career transformations from professionals who found their dream jobs through HireNET.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="overflow-x-auto pb-4 scrollbar-hide testimonials-container">
              <div className="flex gap-6 w-max px-12 py-2">
                {jobSeekerTestimonials.map((testimonial, index) => (
                <Card 
                  key={testimonial.id} 
                  className="bg-white p-8 rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex-shrink-0 w-[350px] group"
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseHireNet />
      <Contact />
    </div>
  );
}