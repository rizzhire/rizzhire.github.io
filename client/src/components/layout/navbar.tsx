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
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="text-white font-bold text-3xl">HireNET</div>
            <div className="flex space-x-6">
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
          
          <div>
            <Button 
              onClick={location === '/job-seeker' ? navigateHome : navigateToJobSeeker}
              className="bg-yellow text-black px-6 py-1 rounded-xl font-medium hover:bg-yellow/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow/20 transform active:scale-95"
            >
              {location === '/job-seeker' ? 'For Employers' : 'For Job Seeker'}
            </Button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex justify-between items-center h-16">
          {/* Left: Hamburger Menu */}
          <button 
            className="text-white flex items-center justify-center w-10 h-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          {/* Center: Logo */}
          <div className="text-white font-bold text-3xl absolute left-1/2 transform -translate-x-1/2">
            HireNET
          </div>
          
          {/* Right: For Job Seeker Button */}
          <Button 
            onClick={location === '/job-seeker' ? navigateHome : navigateToJobSeeker}
            className="bg-yellow text-black px-2 py-0 rounded-xl font-medium hover:bg-yellow/90 transition-all duration-300 text-xs"
          >
            {location === '/job-seeker' ? 'For Employers' : 'For Job Seeker'}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 z-40" style={{backgroundColor: '#F5F3EB'}}>
            <div className="px-4 py-6 space-y-3">
              <button 
                onClick={navigateHome}
                className="w-full text-left px-4 py-3 bg-white rounded-lg shadow-sm text-gray-800 font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={navigateToServices}
                className="w-full text-left px-4 py-3 bg-white rounded-lg shadow-sm text-gray-800 font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                Services
              </button>
              <button 
                onClick={navigateToIndustries}
                className="w-full text-left px-4 py-3 bg-white rounded-lg shadow-sm text-gray-800 font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                Industries We Serve
              </button>
              <button 
                onClick={navigateToAbout}
                className="w-full text-left px-4 py-3 bg-white rounded-lg shadow-sm text-gray-800 font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={navigateToBlogs}
                className="w-full text-left px-4 py-3 bg-white rounded-lg shadow-sm text-gray-800 font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                Blogs
              </button>
              <button 
                onClick={navigateToContact}
                className="w-full text-left px-4 py-3 bg-white rounded-lg shadow-sm text-gray-800 font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
