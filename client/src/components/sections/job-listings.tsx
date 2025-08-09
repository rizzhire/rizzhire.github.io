
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Briefcase, DollarSign } from "lucide-react";
import { jobs } from "@/lib/data";
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation";

export default function JobListings() {
  const { containerRef, visibleItems } = useStaggeredAnimation(jobs.length, 100);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Latest Opportunities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your next career move with our curated selection of premium positions across the Middle East.
          </p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-2 gap-6">
          {/* Job 1 - Block/Paster Mason */}
          <Card 
            className="bg-white group hover:shadow-lg transition-all duration-500 border-2 hover:border-yellow rounded-3xl animate-flip-in opacity-100"
          >
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="job-title-container text-lg font-bold mb-3 text-gray-800 group-hover:text-yellow transition-colors">
                  BLOCK/PASTER MASON
                </h3>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-600">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span className="job-experience-container text-sm">GOOD EXPERIENCE REQUIRED</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-4 w-4 mr-2" />
                  <span className="job-salary-container text-sm">100 AED</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="job-location-container text-sm">DUBAI</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="job-date-container">Posted On 2025-01-15</span>
                </div>
                <Button 
                  className="job-apply-button bg-yellow text-black hover:bg-yellow/90 px-6 py-2 rounded-2xl text-sm font-medium"
                >
                  Apply Now
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Job 2 - Shuttering Carpenter */}
          <Card 
            className="bg-white group hover:shadow-lg transition-all duration-500 border-2 hover:border-yellow rounded-3xl animate-flip-in opacity-100"
          >
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="job-title-container text-lg font-bold mb-3 text-gray-800 group-hover:text-yellow transition-colors">
                  SHUTTERING CARPENTER
                </h3>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-600">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span className="job-experience-container text-sm">GOOD EXPERIENCE REQUIRED</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-4 w-4 mr-2" />
                  <span className="job-salary-container text-sm">120 KWD</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="job-location-container text-sm">KUWAIT</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="job-date-container">Posted On 2025-01-12</span>
                </div>
                <Button 
                  className="job-apply-button bg-yellow text-black hover:bg-yellow/90 px-6 py-2 rounded-2xl text-sm font-medium"
                >
                  Apply Now
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Job 3 - Labour */}
          <Card 
            className="bg-white group hover:shadow-lg transition-all duration-500 border-2 hover:border-yellow rounded-3xl animate-flip-in opacity-100"
          >
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="job-title-container text-lg font-bold mb-3 text-gray-800 group-hover:text-yellow transition-colors">
                  LABOUR
                </h3>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-600">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span className="job-experience-container text-sm">Minimum 3 to 4 years of Experience</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-4 w-4 mr-2" />
                  <span className="job-salary-container text-sm">800 SAR</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="job-location-container text-sm">RIYADH</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="job-date-container">Posted On 2025-01-18</span>
                </div>
                <Button 
                  className="job-apply-button bg-yellow text-black hover:bg-yellow/90 px-6 py-2 rounded-2xl text-sm font-medium"
                >
                  Apply Now
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Job 4 - Assistant Mason */}
          <Card 
            className="bg-white group hover:shadow-lg transition-all duration-500 border-2 hover:border-yellow rounded-3xl animate-flip-in opacity-100"
          >
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="job-title-container text-lg font-bold mb-3 text-gray-800 group-hover:text-yellow transition-colors">
                  ASST. MASON / SHUTTERING CAPENTER / STEEL FIXER
                </h3>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-600">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span className="job-experience-container text-sm">Minimum 3 to 4 years of Experience</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-4 w-4 mr-2" />
                  <span className="job-salary-container text-sm">1000 QAR</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="job-location-container text-sm">DOHA</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="job-date-container">Posted On 2025-01-10</span>
                </div>
                <Button 
                  className="job-apply-button bg-yellow text-black hover:bg-yellow/90 px-6 py-2 rounded-2xl text-sm font-medium"
                >
                  Apply Now
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Job 5 - Steel Fixer */}
          <Card 
            className="bg-white group hover:shadow-lg transition-all duration-500 border-2 hover:border-yellow rounded-3xl animate-flip-in opacity-100"
          >
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="job-title-container text-lg font-bold mb-3 text-gray-800 group-hover:text-yellow transition-colors">
                  STEEL FIXER
                </h3>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-600">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span className="job-experience-container text-sm">Minimum 3 to 4 years of Experience</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-4 w-4 mr-2" />
                  <span className="job-salary-container text-sm">1300 AED</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="job-location-container text-sm">DUBAI</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="job-date-container">Posted On 2025-01-20</span>
                </div>
                <Button 
                  className="job-apply-button bg-yellow text-black hover:bg-yellow/90 px-6 py-2 rounded-2xl text-sm font-medium"
                >
                  Apply Now
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Job 6 - Furniture Carpenter */}
          <Card 
            className="bg-white group hover:shadow-lg transition-all duration-500 border-2 hover:border-yellow rounded-3xl animate-flip-in opacity-100"
          >
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="job-title-container text-lg font-bold mb-3 text-gray-800 group-hover:text-yellow transition-colors">
                  FURNITURE CARPENTER
                </h3>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-600">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span className="job-experience-container text-sm">Minimum 3 to 4 years of Experience</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-4 w-4 mr-2" />
                  <span className="job-salary-container text-sm">160 KWD</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="job-location-container text-sm">KUWAIT</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="job-date-container">Posted On 2025-01-08</span>
                </div>
                <Button 
                  className="job-apply-button bg-yellow text-black hover:bg-yellow/90 px-6 py-2 rounded-2xl text-sm font-medium"
                >
                  Apply Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
