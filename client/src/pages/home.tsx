import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import PartnerLogos from "@/components/sections/partner-logos";
import Countries from "@/components/sections/countries";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream page-transition">
      <Hero />
      <Services />
      <PartnerLogos />
      <Countries />
      <Testimonials />
      <Contact />
    </div>
  );
}
