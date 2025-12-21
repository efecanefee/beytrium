// src/pages/Explore.tsx
import { TRENDS } from '../data';
import { HiArrowTrendingUp } from 'react-icons/hi2';

const Explore = () => {
  return (
    <div className="pb-10">
      <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b-4 border-black p-4 z-20 shadow-md">
        <h1 className="text-2xl font-black">KEŞFET</h1>
      </div>

      <div className="p-4 max-w-3xl mx-auto space-y-6">
        
        {/* Trendler Kartı */}
        <div className="bg-white border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6">
            <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                <HiArrowTrendingUp  className="text-[#1ABCAA]" /> 
                GÜNDEMDEKİLER
            </h2>
            
            <div className="space-y-6">
                {TRENDS.map((trend, index) => (
                    <div key={index} className="flex justify-between items-center group cursor-pointer border-b-2 border-gray-100 pb-4 last:border-0 last:pb-0">
                        <div>
                            <p className="text-gray-500 text-xs font-bold mb-1">{trend.category}</p>
                            <p className="font-black text-xl group-hover:text-[#1ABCAA] transition-colors">{trend.tag}</p>
                            <p className="text-gray-400 text-sm font-bold">{trend.count}</p>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-2xl">👉</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Ekstra Kart (Örnek) */}
        <div className="bg-[#fbca1f] border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 text-center">
             <h3 className="text-xl font-black mb-2">DAHA FAZLASINI KEŞFET</h3>
             <p className="font-bold text-sm mb-4">İlgi alanlarına göre yeni kulüpler bul.</p>
             <button className="bg-white px-6 py-2 font-black border-4 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all">
                 KATEGORİLERE GÖZ AT
             </button>
        </div>

      </div>
    </div>
  );
};

export default Explore;