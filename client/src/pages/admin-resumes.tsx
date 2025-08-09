import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, FileText, Calendar, User, Mail, Phone, Briefcase } from "lucide-react";
import type { Resume } from "@shared/schema";

export default function AdminResumesPage() {
  const { data: resumes, isLoading } = useQuery<Resume[]>({
    queryKey: ["/api/resumes"],
  });

  const formatDate = (date: Date | null) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const exportToCSV = () => {
    if (!resumes || resumes.length === 0) return;

    const headers = ["ID", "Name", "Email", "Phone", "Position", "Experience", "File Name", "Uploaded At"];
    const csvContent = [
      headers.join(","),
      ...resumes.map(resume => [
        resume.id,
        `"${resume.name}"`,
        `"${resume.email}"`,
        `"${resume.phone || ''}"`,
        `"${resume.position || ''}"`,
        `"${resume.experience || ''}"`,
        `"${resume.fileName}"`,
        `"${formatDate(resume.uploadedAt)}"`
      ].join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `resumes-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F2F0E8] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">Loading resumes...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2F0E8] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Resume Submissions</h1>
            <p className="text-gray-600 mt-2">
              {resumes?.length || 0} resume(s) submitted
            </p>
          </div>
          <Button 
            onClick={exportToCSV}
            className="bg-yellow text-black hover:bg-yellow/90"
            data-testid="button-export-csv"
          >
            <Download className="mr-2 h-4 w-4" />
            Export to CSV
          </Button>
        </div>

        {!resumes || resumes.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No resumes submitted yet</h3>
              <p className="text-gray-500">Resume submissions will appear here when candidates upload their resumes.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {resumes.map((resume) => (
              <Card key={resume.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <User className="h-5 w-5" />
                        {resume.name}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {resume.email}
                        </Badge>
                        {resume.phone && (
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {resume.phone}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="flex items-center gap-1 mb-2">
                        <Calendar className="h-3 w-3" />
                        {formatDate(resume.uploadedAt)}
                      </Badge>
                      <p className="text-sm text-gray-500">ID: {resume.id}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    {resume.position && (
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">
                          <strong>Position:</strong> {resume.position}
                        </span>
                      </div>
                    )}
                    {resume.experience && (
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">
                          <strong>Experience:</strong> {resume.experience}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FileText className="h-4 w-4" />
                      <span>{resume.fileName}</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(resume.filePath, '_blank')}
                      data-testid={`button-download-${resume.id}`}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}