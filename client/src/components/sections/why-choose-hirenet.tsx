import { Globe, Users, FileText, Headphones } from "lucide-react";

export default function WhyChooseHireNet() {
  const features = [
    {
      icon: Globe,
      title: "Global Placement Opportunities",
      description: "Access to premium job positions across UAE, Qatar, Saudi Arabia, Oman, Kuwait, Bahrain, and Maldives."
    },
    {
      icon: Users,
      title: "Personalized Career Guidance", 
      description: "One-on-one consultation with industry experts to accelerate your career growth."
    },
    {
      icon: FileText,
      title: "Free Resume Review",
      description: "Professional resume optimization to increase your chances of landing interviews."
    },
    {
      icon: Headphones,
      title: "Priority Support",
      description: "Dedicated support throughout your job search journey with 24/7 assistance."
    }
  ];

  return (
    <section className="py-20 bg-dark-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-yellow">HireNET</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience unparalleled career support designed to accelerate your professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-yellow rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="w-8 h-8 text-black stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}