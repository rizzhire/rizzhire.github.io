interface CountryFlagProps {
  country: string;
  code: string;
}

export default function CountryFlag({ country, code }: CountryFlagProps) {
  const baseClass = "w-20 h-14 rounded-xl border border-white/20 cursor-pointer hover:scale-105 transition-transform duration-200 relative overflow-hidden" 
    + " shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20";

  const renderFlag = () => {
    switch (code) {
      case 'ae': // UAE
        return (
          <div className="w-full h-full relative">
            <div className="absolute left-0 top-0 w-1/4 h-full bg-red-600"></div>
            <div className="absolute left-1/4 top-0 w-3/4 h-full">
              <div className="h-1/3 bg-green-600"></div>
              <div className="h-1/3 bg-white"></div>
              <div className="h-1/3 bg-black"></div>
            </div>
          </div>
        );
      
      case 'qa': // Qatar
        return (
          <div className="w-full h-full relative bg-white">
            <div className="absolute left-0 top-0 w-1/3 h-full bg-purple-900"></div>
            <div className="absolute left-1/3 top-0 w-2/3 h-full bg-white"></div>
          </div>
        );
      
      case 'sa': // Saudi Arabia
        return (
          <div className="w-full h-full bg-green-600 flex items-center justify-center">
            <div className="text-white text-[8px] font-bold text-center">
              <div>🗡️</div>
              <div className="mt-1">شهادة</div>
            </div>
          </div>
        );
      
      case 'om': // Oman
        return (
          <div className="w-full h-full relative">
            <div className="absolute left-0 top-0 w-1/4 h-full bg-red-600"></div>
            <div className="absolute left-1/4 top-0 w-3/4 h-full">
              <div className="h-1/3 bg-white"></div>
              <div className="h-1/3 bg-red-600"></div>
              <div className="h-1/3 bg-green-600"></div>
            </div>
          </div>
        );
      
      case 'kw': // Kuwait
        return (
          <div className="w-full h-full relative">
            <div className="absolute left-0 top-0 w-1/4 h-full bg-black"></div>
            <div className="absolute left-1/4 top-0 w-3/4 h-full">
              <div className="h-1/3 bg-green-600"></div>
              <div className="h-1/3 bg-white"></div>
              <div className="h-1/3 bg-red-600"></div>
            </div>
          </div>
        );
      
      case 'bh': // Bahrain
        return (
          <div className="w-full h-full relative">
            <div className="absolute left-0 top-0 w-1/3 h-full bg-red-600"></div>
            <div className="absolute left-1/3 top-0 w-2/3 h-full bg-white"></div>
          </div>
        );
      
      case 'mv': // Maldives
        return (
          <div className="w-full h-full bg-red-600 flex items-center justify-center">
            <div className="w-8 h-6 bg-green-600 rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full ml-1"></div>
            </div>
          </div>
        );
      
      default:
        return <div className="w-full h-full bg-gray-300"></div>;
    }
  };

  return (
    <div className={baseClass} title={country}>
      {renderFlag()}
    </div>
  );
}
