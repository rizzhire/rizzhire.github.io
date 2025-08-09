import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { Link } from "wouter";

export default function FinalCTA() {
  return (
    <section className="py-20 cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white p-12 rounded-3xl animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Advance Your Career?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have successfully launched their international careers with HireNET.
          </p>
          <Button asChild className="bg-yellow text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow/90 transition-all duration-300 hover:scale-105 shadow-lg mb-4">
            <Link href="/contact">
              <Upload className="mr-2 h-5 w-5" />
              Upload Resume & Get Started
            </Link>
          </Button>
          <p className="text-gray-500">Free consultation included. No hidden fees.</p>
        </div>
      </div>
    </section>
  );
}
