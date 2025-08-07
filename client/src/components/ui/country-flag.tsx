import qatarFlag from "@assets/Flag_of_Qatar.svg_1754548846373.png";
import uaeFlag from "@assets/Flag_of_the_United_Arab_Emirates.svg_1754548846373.png";
import saudiFlag from "@assets/Flag_of_Saudi_Arabia.svg_1754548846374.png";
import bahrainFlag from "@assets/Flag_of_Bahrain.svg_1754548846374.png";
import omanFlag from "@assets/Flag_of_Oman.svg_1754548846376.png";
import kuwaitFlag from "@assets/Flag_of_Kuwait.svg_1754548846378.png";
import maldivesFlag from "@assets/Flag_of_Maldives.svg_1754548846378.png";

interface CountryFlagProps {
  country: string;
  code: string;
}

export default function CountryFlag({ country, code }: CountryFlagProps) {
  const baseClass = "w-20 h-14 md:w-28 md:h-20 rounded-2xl border border-white/20 cursor-pointer hover:scale-105 transition-transform duration-200 relative overflow-hidden" 
    + " shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20";

  const getFlagImage = () => {
    switch (code) {
      case 'ae': return uaeFlag;
      case 'qa': return qatarFlag;
      case 'sa': return saudiFlag;
      case 'om': return omanFlag;
      case 'kw': return kuwaitFlag;
      case 'bh': return bahrainFlag;
      case 'mv': return maldivesFlag;
      default: return '';
    }
  };

  return (
    <div className={baseClass} title={country}>
      <img 
        src={getFlagImage()} 
        alt={`${country} Flag`}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
