import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64; // h-16 = 4rem = 64px
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navigateToJobSeeker = () => {
    setLocation('/job-seeker');
    setIsMenuOpen(false);
  };

  const navigateHome = () => {
    setLocation('/');
    setIsMenuOpen(false);
  };

  const navigateToAbout = () => {
    setLocation('/about');
    setIsMenuOpen(false);
  };

  const navigateToContact = () => {
    setLocation('/contact');
    setIsMenuOpen(false);
  };

  const navigateToServices = () => {
    setLocation('/services');
    setIsMenuOpen(false);
  };

  const navigateToBlogs = () => {
    setLocation('/blogs');
    setIsMenuOpen(false);
  };

  const navigateToIndustries = () => {
    setLocation('/industries');
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black navbar-slide-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="text-white font-bold text-xl">HireNET</div>
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={navigateHome}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={navigateToServices}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Services
              </button>
              <button 
                onClick={navigateToIndustries}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Industries We Serve
              </button>
              <button 
                onClick={navigateToBlogs}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Blogs
              </button>
              <button 
                onClick={navigateToAbout}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={navigateToContact}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Button 
              onClick={navigateToJobSeeker}
              className="bg-yellow text-black px-6 py-2 rounded-full font-medium hover:bg-yellow/90 transition-colors duration-200"
            >
              For Job Seeker
            </Button>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button 
              onClick={navigateHome}
              className="block text-gray-300 hover:text-white transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={navigateToServices}
              className="block text-gray-300 hover:text-white transition-colors duration-200"
            >
              Services
            </button>
            <button 
              onClick={navigateToIndustries}
              className="block text-gray-300 hover:text-white transition-colors duration-200"
            >
              Industries We Serve
            </button>
            <button 
              onClick={navigateToAbout}
              className="block text-gray-300 hover:text-white transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={navigateToBlogs}
              className="block text-gray-300 hover:text-white transition-colors duration-200"
            >
              Blogs
            </button>
            <button 
              onClick={navigateToContact}
              className="block text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </button>
            <Button 
              onClick={navigateToJobSeeker}
              className="bg-yellow text-black px-6 py-2 rounded-full font-medium hover:bg-yellow/90 transition-colors duration-200 w-full"
            >
              For Job Seeker
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
