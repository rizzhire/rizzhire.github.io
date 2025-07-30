
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, DollarSign, Clock } from "lucide-react";
import { jobs } from "@/lib/data";

export default function JobListings() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Latest Opportunities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your next career move with our curated selection of premium positions across the Middle East.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <Card key={job.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-yellow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-yellow transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 font-medium">{job.company}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span className="text-sm">{job.salary}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <Badge variant="secondary" className="text-xs">
                      {job.type}
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 text-sm line-clamp-3">
                  {job.description}
                </p>

                <Button className="w-full bg-yellow text-black hover:bg-yellow/90 font-semibold">
                  View Details
                </Button>
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
