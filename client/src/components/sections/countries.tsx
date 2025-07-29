import CountryFlag from "@/components/ui/country-flag";

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

  return (
    <section id="countries" className="py-20 cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Countries We <span className="text-yellow">Serve</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expanding opportunities across strategic markets in the Middle East and Indian Ocean region.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          {countries.map((country, index) => (
            <CountryFlag key={index} country={country.name} code={country.code} />
          ))}
        </div>
      </div>
    </section>
  );
}
