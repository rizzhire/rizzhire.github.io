
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Briefcase, DollarSign } from "lucide-react";
import { jobs } from "@/lib/data";
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";

export default function JobListings() {
  const { containerRef, visibleItems } = useStaggeredAnimation(jobs.length, 100);

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
          transition={{ 
            duration: 0.6, 
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
            transition={{ 
              duration: 0.5, 
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            Latest Opportunities
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
            transition={{ 
              duration: 0.4, 
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            Discover your next career move with our curated selection of premium positions across the Middle East.
          </motion.p>
        </motion.div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Job 1 - Block/Paster Mason */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
            transition={{ 
              duration: 0.5, 
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <Card 
              className="bg-white group hover:shadow-lg transition-all duration-500 border-2 hover:border-yellow rounded-3xl h-full"
            >
            <CardContent className="p-4 sm:p-6 h-full flex flex-col">
              <div className="mb-4">
                <h3 className="job-title-container text-base sm:text-lg font-bold mb-3 text-gray-800 group-hover:text-yellow transition-colors">
                  BLOCK/PASTER MASON
                </h3>
              </div>

              <div className="space-y-2 mb-6 flex-grow">
                <div className="flex items-center text-gray-600">
                  <Briefcase className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="job-experience-container text-sm">GOOD EXPERIENCE REQUIRED</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="job-salary-container text-sm">100 AED</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="job-location-container text-sm">DUBAI</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                  <Calendar className="h-3 sm:h-4 w-3 sm:w-4 mr-2 flex-shrink-0" />
                  <span className="job-date-container">Posted On 2025-01-15</span>
                </div>
                <Button 
                  className="job-apply-button bg-yellow text-black hover:bg-yellow/90 px-4 sm:px-6 py-2 sm:py-2 rounded-2xl text-xs sm:text-sm font-medium mobile-tap-target w-full sm:w-auto"
                >
                  Apply Now
                </Button>
              </div>
            </CardContent>
            </Card>
          </motion.div>

          {/* Job 2 - Shuttering Carpenter */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
            transition={{ 
              duration: 0.5, 
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <Card 
              className="bg-white group hover:shadow-lg transition-all duration-500 border-2 hover:border-yellow rounded-3xl h-full"
            >
            <CardContent className="p-4 sm:p-6 h-full flex flex-col">
              <div className="mb-4">
                <h3 className="job-title-container text-base sm:text-lg font-bold mb-3 text-gray-800 group-hover:text-yellow transition-colors">
                  SHUTTERING CARPENTER
                </h3>
              </div>

              <div className="space-y-2 mb-6 flex-grow">
                <div className="flex items-center text-gray-600">
                  <Briefcase className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="job-experience-container text-sm">GOOD EXPERIENCE REQUIRED</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="job-salary-container text-sm">120 KWD</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="job-location-container text-sm">KUWAIT</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                  <Calendar className="h-3 sm:h-4 w-3 sm:w-4 mr-2 flex-shrink-0" />
                  <span className="job-date-container">Posted On 2025-01-12</span>
                </div>
                <Button 
                  className="job-apply-button bg-yellow text-black hover:bg-yellow/90 px-4 sm:px-6 py-2 sm:py-2 rounded-2xl text-xs sm:text-sm font-medium mobile-tap-target w-full sm:w-auto"
                >
                  Apply Now
                </Button>
              </div>
            </CardContent>
            </Card>
          </motion.div>

          {/* Job 3 - Labour */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
            transition={{ 
              duration: 0.5, 
              delay: 1.0,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <Card 
              className="bg-white group hover:shadow-lg transition-all duration-500 border-2 hover:border-yellow rounded-3xl h-full"
            >
            <CardContent className="p-4 sm:p-6 h-full flex flex-col">
              <div className="mb-4">
                <h3 className="job-title-container text-base sm:text-lg font-bold mb-3 text-gray-800 group-hover:text-yellow transition-colors">
                  LABOUR
                </h3>
              </div>

              <div className="space-y-2 mb-6 flex-grow">
                <div className="flex items-center text-gray-600">
                  <Briefcase className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="job-experience-container text-sm">Minimum 3 to 4 years of Experience</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="job-salary-container text-sm">800 SAR</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="job-location-container text-sm">RIYADH</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                  <Calendar className="h-3 sm:h-4 w-3 sm:w-4 mr-2 flex-shrink-0" />
                  <span className="job-date-container">Posted On 2025-01-18</span>
                </div>
                <Button 
                  className="job-apply-button bg-yellow text-black hover:bg-yellow/90 px-4 sm:px-6 py-2 sm:py-2 rounded-2xl text-xs sm:text-sm font-medium mobile-tap-target w-full sm:w-auto"
                >
                  Apply Now
                </Button>
              </div>
            </CardContent>
            </Card>
          </motion.div>

          {/* Job 4 - Assistant Mason */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
            transition={{ 
              duration: 0.5, 
              delay: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <Card 
              className="bg-white group hover:shadow-lg transition-all duration-500 border-2 hover:border-yellow rounded-3xl h-full"
            >
            <CardContent className="p-4 sm:p-6 h-full flex flex-col">
              <div className="mb-4">
                <h3 className="job-title-container text-base sm:text-lg font-bold mb-3 text-gray-800 group-hover:text-yellow transition-colors">
                  ASST. MASON / SHUTTERING CAPENTER / STEEL FIXER
                </h3>
              </div>

              <div className="space-y-2 mb-6 flex-grow">
                <div className="flex items-center text-gray-600">
                  <Briefcase className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="job-experience-container text-sm">Minimum 3 to 4 years of Experience</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="job-salary-container text-sm">1000 QAR</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="job-location-container text-sm">DOHA</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                  <Calendar className="h-3 sm:h-4 w-3 sm:w-4 mr-2 flex-shrink-0" />
                  <span className="job-date-container">Posted On 2025-01-10</span>
                </div>
                <Button 
                  className="job-apply-button bg-yellow text-black hover:bg-yellow/90 px-4 sm:px-6 py-2 sm:py-2 rounded-2xl text-xs sm:text-sm font-medium mobile-tap-target w-full sm:w-auto"
                >
                  Apply Now
                </Button>
              </div>
            </CardContent>
            </Card>
          </motion.div>

          {/* Job 5 - Steel Fixer */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
            transition={{ 
              duration: 0.5, 
              delay: 1.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <Card 
              className="bg-white group hover:shadow-lg transition-all duration-500 border-2 hover:border-yellow rounded-3xl h-full"
            >
            <CardContent className="p-4 sm:p-6 h-full flex flex-col">
              <div className="mb-4">
                <h3 className="job-title-container text-base sm:text-lg font-bold mb-3 text-gray-800 group-hover:text-yellow transition-colors">
                  STEEL FIXER
                </h3>
              </div>

              <div className="space-y-2 mb-6 flex-grow">
                <div className="flex items-center text-gray-600">
                  <Briefcase className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="job-experience-container text-sm">Minimum 3 to 4 years of Experience</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="job-salary-container text-sm">1300 AED</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="job-location-container text-sm">DUBAI</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                  <Calendar className="h-3 sm:h-4 w-3 sm:w-4 mr-2 flex-shrink-0" />
                  <span className="job-date-container">Posted On 2025-01-20</span>
                </div>
                <Button 
                  className="job-apply-button bg-yellow text-black hover:bg-yellow/90 px-4 sm:px-6 py-2 sm:py-2 rounded-2xl text-xs sm:text-sm font-medium mobile-tap-target w-full sm:w-auto"
                >
                  Apply Now
                </Button>
              </div>
            </CardContent>
            </Card>
          </motion.div>

          {/* Job 6 - Furniture Carpenter */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
            transition={{ 
              duration: 0.5, 
              delay: 1.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <Card 
              className="bg-white group hover:shadow-lg transition-all duration-500 border-2 hover:border-yellow rounded-3xl"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
