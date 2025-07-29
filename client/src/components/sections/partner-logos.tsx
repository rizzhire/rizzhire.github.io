export default function PartnerLogos() {
  const partners = [
    "SABIC", "Etisalat", "Dubai Airports", "Majid Al Futtaim", "Emaar Properties", "DP World"
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h3 className="text-center text-2xl font-bold mb-6">Our <span className="text-yellow">Partners</span></h3>
        <p className="text-center text-gray-600">Trusted by leading organizations across the Middle East and beyond.</p>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll">
          <div className="flex space-x-12 flex-shrink-0">
            {partners.map((partner, index) => (
              <div key={index} className="w-36 h-12 bg-gray-100 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer shadow-sm border border-gray-200">
                <span className="font-medium text-gray-600 text-sm">{partner}</span>
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex space-x-12 flex-shrink-0">
            {partners.map((partner, index) => (
              <div key={`duplicate-${index}`} className="w-36 h-12 bg-gray-100 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer shadow-sm border border-gray-200">
                <span className="font-medium text-gray-600 text-sm">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
