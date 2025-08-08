import CountryFlag from "@/components/ui/country-flag";
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
};

export default function Countries() {
  const countries = [
    { name: "UAE", code: "ae" },
    { name: "Qatar", code: "qa" },
    { name: "Saudi Arabia", code: "sa" },
    { name: "Oman", code: "om" },
    { name: "Kuwait", code: "kw" },
    { name: "Bahrain", code: "bh" },
    { name: "Maldives", code: "mv" }
  ];

  const { containerRef, visibleItems } = useStaggeredAnimation(countries.length, 80);

  return (
    <section id="countries" className="py-20 cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Countries We <span className="text-yellow">Serve</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expanding opportunities across strategic markets in the Middle East and Indian Ocean region.
          </p>
        </motion.div>

        <div ref={containerRef} className="flex flex-wrap justify-center items-center gap-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className={`
                transition-all duration-500 ease-out
                ${visibleItems.includes(index) 
                  ? 'animate-wave-slide opacity-100' 
                  : 'opacity-0 transform translate-y-4'
                }
              `}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <CountryFlag country={country.name} code={country.code} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
