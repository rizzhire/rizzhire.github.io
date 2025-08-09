
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
          {jobs.map((job, index) => (
            <Card 
              key={job.id} 
              className={`
                bg-white group hover:shadow-lg transition-all duration-500 border-2 hover:border-yellow rounded-3xl
                ${visibleItems.includes(index) 
                  ? 'animate-flip-in opacity-100' 
                  : 'opacity-0 transform rotateY-90'
                }
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-3 text-gray-800 group-hover:text-yellow transition-colors">
                    {job.title}
                  </h3>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span className="text-sm">{job.experience}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span className="text-sm">{job.salary}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Posted On {job.postedDate}</span>
                  </div>
                  <Button 
                    className="bg-yellow text-black hover:bg-yellow/90 px-6 py-2 rounded-2xl text-sm font-medium"
                  >
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-yellow text-black hover:bg-yellow/90 font-semibold px-8"
          >
            View All Positions
          </Button>
        </div>
      </div>
    </section>
  );
}
