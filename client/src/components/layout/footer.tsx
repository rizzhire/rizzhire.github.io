import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">HireNET</div>
            <p className="text-gray-300 mb-4">
              Premium recruitment solutions connecting talent with opportunities across the Middle East and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-yellow rounded-lg flex items-center justify-center hover:bg-yellow/90 transition-colors">
                <Linkedin className="h-5 w-5 text-black" />
              </a>
              <a href="#" className="w-10 h-10 bg-yellow rounded-lg flex items-center justify-center hover:bg-yellow/90 transition-colors">
                <Twitter className="h-5 w-5 text-black" />
              </a>
              <a href="#" className="w-10 h-10 bg-yellow rounded-lg flex items-center justify-center hover:bg-yellow/90 transition-colors">
                <Instagram className="h-5 w-5 text-black" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow transition-colors">Executive Search</a></li>
              <li><a href="#" className="hover:text-yellow transition-colors">Mass Recruitment</a></li>
              <li><a href="#" className="hover:text-yellow transition-colors">HR Consulting</a></li>
              <li><a href="#" className="hover:text-yellow transition-colors">Career Guidance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Industries</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-yellow transition-colors">Healthcare</a></li>
              <li><a href="#" className="hover:text-yellow transition-colors">Finance</a></li>
              <li><a href="#" className="hover:text-yellow transition-colors">Engineering</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/about" className="hover:text-yellow transition-colors">About Us</a></li>
              <li><a href="/careers" className="hover:text-yellow transition-colors">Careers</a></li>
              <li><a href="/blogs" className="hover:text-yellow transition-colors">Blog</a></li>
              <li><a href="/contact" className="hover:text-yellow transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 HireNET. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
