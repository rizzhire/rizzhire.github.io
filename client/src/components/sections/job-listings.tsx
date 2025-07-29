import { useQuery } from "@tanstack/react-query";
import JobCard from "@/components/ui/job-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Job } from "@shared/schema";

export default function JobListings() {
  const { data: jobs, isLoading } = useQuery<Job[]>({
    queryKey: ['/api/jobs'],
  });

  return (
    <section className="py-20 bg-dark-gray text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 bg-yellow rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-white rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        

        {/* Current Job Listings */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Currently <span className="text-yellow">Hiring For</span></h3>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Exclusive opportunities from our premium employer partners.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {isLoading ? (
              Array(4).fill(0).map((_, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl">
                  <Skeleton className="h-12 w-12 rounded-xl mb-6" />
                  <Skeleton className="h-8 w-3/4 mb-2" />
                  <Skeleton className="h-6 w-1/2 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-6" />
                  <Skeleton className="h-12 w-full rounded-xl" />
                </div>
              ))
            ) : (
              jobs?.map((job) => (
                <JobCard key={job.id} job={job} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
