import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Calendar, User } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Middle East Recruitment: Digital Transformation in Talent Acquisition",
      excerpt: "As the Middle East continues its rapid economic diversification, the recruitment landscape is undergoing a revolutionary transformation. Digital technologies are reshaping how organizations identify, attract, and retain top talent across the region.",
      author: "Sarah Khan",
      role: "Senior Recruitment Analyst",
      date: "January 8, 2025",
      readTime: "8 min read",
      category: "Technology",
      featured: true
    },
    {
      id: 2,
      title: "Oil & Gas Sector Recovery: The Great Talent Resurgence",
      excerpt: "The energy sector's remarkable rebound is creating unprecedented demand for specialized professionals. From petroleum engineers to project managers, discover the roles driving this industry renaissance.",
      author: "Ahmed Al-Rashid",
      role: "Energy Sector Specialist", 
      date: "January 5, 2025",
      readTime: "7 min read",
      category: "Energy"
    },
    {
      id: 3,
      title: "UAE's Vision 2071: Building Tomorrow's Workforce Today",
      excerpt: "The Emirates' ambitious vision requires a fundamental shift in talent strategy. Explore how organizations are preparing for the jobs of the future in this comprehensive analysis.",
      author: "Priya Sharma",
      role: "Technology Recruitment Lead",
      date: "January 3, 2025", 
      readTime: "6 min read",
      category: "Strategy"
    },
    {
      id: 4,
      title: "Healthcare Recruitment in the Post-Pandemic Era: New Realities",
      excerpt: "The healthcare landscape has been permanently altered. Understanding the new dynamics of medical staffing and the evolving expectations of healthcare professionals across the region.",
      author: "Dr. Fatima Al-Zahra",
      role: "Healthcare Recruitment Director",
      date: "December 30, 2024",
      readTime: "9 min read",
      category: "Healthcare"
    },
    {
      id: 5,
      title: "Construction Mega Projects: Strategic Workforce Planning for Success",
      excerpt: "From NEOM to Dubai Creek Harbour, mega construction projects are reshaping the region. Learn the workforce strategies that determine project success or failure.",
      author: "Mohammad Hassan",
      role: "Construction Sector Head",
      date: "December 28, 2024",
      readTime: "10 min read",
      category: "Construction"
    },
    {
      id: 6,
      title: "Remote Work Revolution: How Gulf Companies Are Adapting",
      excerpt: "The shift to hybrid and remote work models is transforming corporate culture across the GCC. Discover how leading organizations are reimagining their talent strategies.",
      author: "Layla Abdulla",
      role: "Workplace Innovation Specialist",
      date: "December 25, 2024",
      readTime: "5 min read",
      category: "Workplace"
    }
  ];

  const categories = ["All", "Technology", "Energy", "Strategy", "Healthcare", "Construction", "Workplace"];

  return (
    <div className="min-h-screen" style={{backgroundColor: '#F5F3EB'}}>
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-4 overflow-hidden" style={{backgroundColor: '#F5F3EB'}}>
        {/* Enhanced Light Background Graphics with Homepage Blurred Abstract Colors */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          {/* Enhanced Live Moving Floating Circles - Homepage Style */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-200/20 to-yellow-300/30 rounded-full blur-xl animate-floatMoveEnhanced"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-200/18 to-cyan-200/28 rounded-full blur-lg animate-pulseEnhanced" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-orange-200/15 to-yellow-200/25 rounded-full blur-2xl animate-floatMoveEnhanced" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-gradient-to-r from-purple-200/18 to-pink-200/28 rounded-full blur-xl animate-rotateEnhanced" style={{animationDelay: '1.5s'}}></div>
          
          {/* Additional Enhanced Elements - Homepage Style */}
          <div className="absolute top-1/2 left-8 w-20 h-20 bg-gradient-to-r from-emerald-200/20 to-green-200/30 rounded-full blur-lg animate-pulseEnhanced" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-60 right-12 w-16 h-16 bg-gradient-to-r from-rose-200/18 to-red-200/28 rounded-full blur-md animate-floatMoveEnhanced" style={{animationDelay: '4s'}}></div>
          
          {/* Very Light Grid Pattern */}
          <div className="absolute inset-0 opacity-1">
            <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full">
              <pattern id="blogsLightGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="#f59e0b" opacity="0.03"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#blogsLightGrid)" />
            </svg>
          </div>
          
          {/* Subtle Geometric Shapes */}
          <div className="absolute top-1/4 right-1/5 w-8 h-8 bg-gradient-to-r from-yellow-200/4 to-orange-200/6 rotate-45 blur-sm"></div>
          <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-gradient-to-r from-blue-200/4 to-purple-200/6 rotate-12 blur-sm"></div>
          <div className="absolute top-2/3 right-1/3 w-10 h-2 bg-gradient-to-r from-green-200/4 to-emerald-200/6 rotate-45 blur-sm"></div>
          

          {/* Infinite Moving Geometric Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-8 animate-waveFlow" viewBox="0 0 1800 400" style={{animationDuration: '18s'}}>
            <defs>
              <linearGradient id="blogsHeroGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,200 Q250,100 500,200 T1000,200 T1400,200 T1800,200" stroke="url(#blogsHeroGradient1)" strokeWidth="2" fill="none"/>
            <path d="M0,150 Q300,250 600,150 T1000,150 T1300,150 T1600,150 T1900,150" stroke="url(#blogsHeroGradient1)" strokeWidth="1.5" fill="none"/>
          </svg>
          
          {/* Very Light Dots Pattern from Homepage */}
          <div className="absolute inset-0 opacity-2">
            <svg width="40" height="40" viewBox="0 0 40 40" className="w-full h-full">
              <pattern id="blogsDotsPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="#f59e0b" opacity="0.1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#blogsDotsPattern)" />
            </svg>
          </div>
        </div>
        
        <motion.div 
          className="relative max-w-6xl mx-auto text-center"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1 
            className="fluid-text-5xl font-bold mb-6 text-gray-900"
            variants={fadeInUp}
          >
            Industry <span className="text-yellow">Insights</span>
          </motion.h1>
          <motion.p 
            className="fluid-text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
            variants={fadeInUp}
          >
            Expert analysis, market trends, and strategic insights from Middle East recruitment leaders
          </motion.p>
          
          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mt-8"
            variants={fadeInUp}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="px-6 py-2 rounded-full border-2 border-gray-300 hover:border-yellow hover:bg-yellow/10 transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Post */}
      <section className="relative py-8 px-4 bg-white overflow-hidden">
        {/* Light Background Graphics */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-32 w-16 h-16 bg-gradient-to-r from-yellow-300/10 to-orange-300/15 rounded-lg rotate-12 blur-sm"></div>
          <div className="absolute bottom-32 left-20 w-20 h-20 bg-gradient-to-r from-blue-300/10 to-cyan-300/15 rounded-full blur-md"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="bg-gradient-to-r from-gray-50 to-white rounded-3xl border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <span className="px-3 py-1 bg-yellow/20 text-yellow-700 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="ml-3 text-gray-500 text-sm">{blogPosts[0].category}</span>
                    </div>
                    <h2 className="fluid-text-3xl font-bold mb-4 text-gray-900 leading-tight">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {blogPosts[0].excerpt}
                    </p>
                    
                    <div className="flex items-center mb-6">
                      <img 
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(blogPosts[0].author)}&size=80&background=F5F3EB&color=1F2937&rounded=true`}
                        alt={`${blogPosts[0].author} profile`}
                        className="w-12 h-12 rounded-xl mr-4"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{blogPosts[0].author}</p>
                        <p className="text-sm text-gray-600">{blogPosts[0].role}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{blogPosts[0].date}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                    
                    <Button 
                      asChild
                      className="bg-yellow hover:bg-yellow/90 text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-[1.03] w-fit"
                    >
                      <Link href={`/blog/${blogPosts[0].id}`}>
                        Read Full Article <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow/20 to-yellow/5 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-yellow/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <User className="w-16 h-16 text-yellow-700" />
                      </div>
                      <p className="text-lg font-semibold text-gray-900">Featured Insight</p>
                      <p className="text-gray-600">Industry Expert Analysis</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-8 px-4" style={{backgroundColor: '#F5F3EB'}}>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {blogPosts.slice(1).map((post, index) => (
              <motion.div key={post.id} variants={fadeInUp}>
                <Card className="group bg-white rounded-3xl border-0 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {post.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-yellow transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center mb-4">
                      <img 
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&size=60&background=F5F3EB&color=1F2937&rounded=true`}
                        alt={`${post.author} profile`}
                        className="w-10 h-10 rounded-xl mr-3"
                      />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{post.author}</p>
                        <p className="text-xs text-gray-600">{post.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      
                      <Button 
                        asChild
                        variant="ghost" 
                        className="text-yellow hover:bg-yellow/10 font-semibold transition-all duration-300 group-hover:bg-yellow group-hover:text-black p-2"
                      >
                        <Link href={`/blog/${post.id}`}>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
<section className="py-8 px-4 bg-white">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="fluid-text-4xl font-bold mb-6 text-gray-900"
            variants={fadeInUp}
          >
            Stay <span className="text-yellow">Informed</span>
          </motion.h2>
          <motion.p 
            className="fluid-text-xl text-gray-600 mb-8 leading-relaxed"
            variants={fadeInUp}
          >
            Get the latest recruitment insights and industry analysis delivered directly to your inbox.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            variants={fadeInUp}
          >
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow/50"
            />
            <Button className="bg-yellow hover:bg-yellow/90 text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-[1.03]">
              Subscribe
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}