import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import JobListings from "@/components/sections/job-listings";
import SuccessStories from "@/components/sections/success-stories";
import WhyChooseHireNet from "@/components/sections/why-choose-hirenet";
import Contact from "@/components/sections/contact";

export default function JobSeekerPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section for Job Seekers */}
      <section className="relative min-h-screen cream overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gray-400 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-yellow rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Launch Your <span className="text-yellow">Global Career</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect with premium employers across the Middle East and beyond. 
              Your next career opportunity awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button className="bg-yellow text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow/90 transition-all duration-300 hover:scale-105 shadow-lg btn-hover ripple">
                <Upload className="mr-2 h-5 w-5" />
                Upload Your Resume
              </Button>
              <p className="text-gray-500 text-sm">Free resume review and optimization included</p>
            </div>
          </div>
        </div>
      </section>

      <JobListings />
      <SuccessStories />
      <WhyChooseHireNet />
      <Contact />
    </div>
  );
}