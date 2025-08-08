import { useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
};

export default function BlogDetail() {
  // Mock blog data - in real app, this would fetch based on ID
  const blogPost = {
    id: 1,
    title: "The Future of Middle East Recruitment: Digital Transformation in Talent Acquisition",
    content: `
      <p>The Middle East recruitment landscape is experiencing a revolutionary transformation driven by digital technologies, artificial intelligence, and changing workforce expectations. As organizations across the GCC continue their economic diversification initiatives, the demand for skilled professionals has reached unprecedented levels.</p>

      <h2>The Digital Revolution in Recruitment</h2>
      <p>Traditional recruitment methods are rapidly being replaced by sophisticated digital platforms that leverage AI-powered matching algorithms, predictive analytics, and automated screening processes. Companies like Saudi Aramco, Emirates NBD, and ADNOC have reported up to 70% reduction in time-to-hire after implementing digital recruitment solutions.</p>

      <h2>Key Trends Shaping the Industry</h2>
      <p><strong>1. AI-Powered Candidate Matching</strong><br>
      Machine learning algorithms now analyze candidate profiles against job requirements with 95% accuracy, considering factors beyond traditional qualifications including cultural fit, career trajectory, and soft skills assessment.</p>

      <p><strong>2. Virtual Reality Assessment Centers</strong><br>
      Leading organizations are implementing VR-based assessment centers that simulate real work environments, allowing candidates to demonstrate practical skills in immersive scenarios particularly relevant for engineering and technical roles.</p>

      <p><strong>3. Blockchain-Verified Credentials</strong><br>
      The UAE has pioneered blockchain-based credential verification systems, reducing document fraud by 99% and streamlining the hiring process for international candidates.</p>

      <h2>Industry-Specific Transformations</h2>
      <p><strong>Oil & Gas Sector:</strong> Digital twin technology is being used to assess candidates' ability to work with complex industrial systems before they step foot on-site. This has reduced training costs by 40% and improved safety outcomes significantly.</p>

      <p><strong>Financial Services:</strong> RegTech integration in recruitment ensures compliance with evolving financial regulations while identifying candidates with the specific regulatory knowledge required for different markets.</p>

      <p><strong>Healthcare:</strong> Telemedicine competency assessments have become standard, with 78% of healthcare organizations now requiring digital health platform proficiency as a core skill.</p>

      <h2>The Human Element Remains Critical</h2>
      <p>Despite technological advances, successful recruitment still depends on human insight and cultural understanding. The most effective organizations combine digital efficiency with human expertise, particularly when assessing leadership potential and cultural fit within the unique business environments of the Middle East.</p>

      <h2>Looking Ahead: 2025 and Beyond</h2>
      <p>The next phase of recruitment evolution will focus on predictive career modeling, where AI systems can forecast candidate success and career progression with remarkable accuracy. Organizations investing in these technologies today are positioning themselves as employers of choice for top-tier talent.</p>

      <p>As the region continues its Vision 2030 initiatives and economic diversification efforts, the recruitment industry's digital transformation will play a crucial role in securing the human capital necessary for sustained growth and innovation.</p>
    `,
    author: "Sarah Khan",
    role: "Senior Recruitment Analyst",
    date: "January 8, 2025",
    readTime: "8 min read",
    category: "Technology"
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#F5F3EB'}}>
      {/* Header */}
      <section className="pt-32 pb-8 px-4" style={{backgroundColor: '#F5F3EB'}}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <Button asChild variant="ghost" className="mb-6 text-gray-600 hover:text-gray-900">
              <Link href="/blogs">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Insights
              </Link>
            </Button>
            
            <div className="mb-6">
              <span className="px-3 py-1 bg-yellow/20 text-yellow-700 rounded-full text-sm font-medium">
                {blogPost.category}
              </span>
            </div>
            
            <h1 className="fluid-text-4xl font-bold mb-6 text-gray-900 leading-tight">
              {blogPost.title}
            </h1>
            
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <img 
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(blogPost.author)}&size=80&background=F5F3EB&color=1F2937&rounded=true`}
                  alt={`${blogPost.author} profile`}
                  className="w-12 h-12 rounded-xl mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{blogPost.author}</p>
                  <p className="text-sm text-gray-600">{blogPost.role}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{blogPost.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{blogPost.readTime}</span>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 px-4 bg-white">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </motion.div>
      </section>

      {/* Related Articles */}
      <section className="py-16 px-4" style={{backgroundColor: '#F5F3EB'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="fluid-text-3xl font-bold mb-8 text-gray-900">
            Continue <span className="text-yellow">Reading</span>
          </h2>
          <Button asChild className="bg-yellow hover:bg-yellow/90 text-black font-semibold px-8 py-3 rounded-xl">
            <Link href="/blogs">
              View All Insights
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}