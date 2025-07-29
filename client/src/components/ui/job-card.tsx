import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, DollarSign, Calendar } from "lucide-react";
import type { Job } from "@shared/schema";

interface JobCardProps {
  job: Job;
}

const iconColorClasses = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  orange: "bg-orange-100 text-orange-600",
  purple: "bg-purple-100 text-purple-600",
  red: "bg-red-100 text-red-600",
  gray: "bg-gray-100 text-gray-600"
};

export default function JobCard({ job }: JobCardProps) {
  const iconColorClass = iconColorClasses[job.iconColor as keyof typeof iconColorClasses] || iconColorClasses.gray;
  const typeColor = job.type === "Full-time" ? "bg-yellow text-black" : "bg-gray-200 text-gray-700";

  return (
    <Card className="bg-white p-8 rounded-3xl card-hover border-0">
      <CardContent className="p-0">
        <div className="flex items-start justify-between mb-6">
          <div className={`w-12 h-12 ${iconColorClass} rounded-xl flex items-center justify-center`}>
            <i className={`${job.icon} text-xl`}></i>
          </div>
          <Badge className={`${typeColor} px-3 py-1 rounded-full text-sm font-medium`}>
            {job.type}
          </Badge>
        </div>
        <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
        <p className="text-yellow font-semibold mb-4">{job.company}</p>
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            {job.location}
          </div>
          <div className="flex items-center text-gray-600">
            <DollarSign className="h-4 w-4 mr-2" />
            {job.salary}
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            Apply by: {job.deadline}
          </div>
        </div>
        <Button className="w-full bg-yellow text-black py-3 rounded-xl font-semibold hover:bg-yellow/90 transition-colors">
          Contact to Apply
        </Button>
      </CardContent>
    </Card>
  );
}
