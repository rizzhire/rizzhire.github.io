import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import JobSeekerPage from "@/pages/job-seeker";
import EmployersPage from "@/pages/employers";
import AdminResumesPage from "@/pages/admin-resumes";
import DeployPage from "@/pages/deploy";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Services from "@/pages/services";
import Industries from "@/pages/industries";
import Blogs from "@/pages/blogs";
import BlogDetail from "@/pages/blog-detail";
import LearnMore from "@/pages/learn-more";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/industries" component={Industries} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/blog/:id" component={BlogDetail} />
      <Route path="/learn-more" component={LearnMore} />
      <Route path="/contact" component={Contact} />
      <Route path="/job-seeker" component={JobSeekerPage} />
      <Route path="/employers" component={EmployersPage} />
      <Route path="/admin/resumes" component={AdminResumesPage} />
      <Route path="/deploy" component={DeployPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-black">
          <Navbar />
          <main className="bg-cream rounded-t-smooth seamless-container relative z-10 min-h-screen overflow-hidden mt-16 content-reveal">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
// Ready to deploy navbar partition fix and smooth curves
