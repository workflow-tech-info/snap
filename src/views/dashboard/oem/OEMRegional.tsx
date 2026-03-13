import { 
  TrendingUp,
  Globe,
  ChevronRight
} from 'lucide-react';
import demoOem from '../../../data/demo-oem.json';

export function OEMRegional() {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500 font-black tracking-tighter italic uppercase">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl tracking-tighter">Regional Performance Index</h1>
        <div className="flex items-center gap-4 shrink-0">
           <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 opacity-30">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white leading-none">Map View Locked</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
         <div className="bg-card/40 border border-white/5 rounded-[40px] p-10 flex flex-col gap-8 shadow-2xl shadow-black/40 h-full">
            <div className="flex items-center gap-3">
               <Globe className="w-6 h-6 text-primary" />
               <h2 className="text-xl font-bold tracking-tight text-white uppercase tracking-tighter">Market Distribution</h2>
            </div>
            
            <div className="space-y-6">
               {demoOem.regional_insights.map((r, i) => (
                  <div key={i} className="flex flex-col gap-2 group hover:translate-x-2 transition-transform cursor-pointer">
                     <div className="flex items-center justify-between">
                        <span className="text-lg font-black text-white italic tracking-tighter pr-4">{r.region} Region</span>
                        <div className="flex items-center gap-4">
                           <span className="text-sm font-black text-accent">{r.efficiency} km/kg</span>
                           <span className="text-sm font-black text-text-muted">{r.vehicles.toLocaleString()} units</span>
                        </div>
                     </div>
                     <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-primary group-hover:shadow-[0_0_10px_#0B68FF]" style={{ width: `${(r.vehicles / 15000) * 100}%` }} />
                     </div>
                  </div>
               ))}
            </div>
         </div>

         <div className="flex flex-col gap-8 h-full">
            <div className="bg-accent/5 border border-accent/20 rounded-[40px] p-8 flex flex-col gap-6 relative overflow-hidden group">
               <TrendingUp className="absolute -right-6 -top-6 w-32 h-32 text-accent opacity-5 group-hover:scale-110 transition-transform duration-1000" />
               <h3 className="text-xl font-black text-accent italic">Economic Value Generation</h3>
               <div className="grid grid-cols-2 gap-6 relative z-10">
                  <div className="flex flex-col">
                     <span className="text-[10px] font-black text-text-muted uppercase tracking-widest leading-none mb-1 pr-10 italic lowercase ">Total Monthly Savings</span>
                     <span className="text-4xl font-black">₹9.4 Cr</span>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[10px] font-black text-text-muted uppercase tracking-widest leading-none mb-1 pr-10 italic lowercase ">Avg Savings / V-Unit</span>
                     <span className="text-4xl font-black italic lowercase tracking-tighter">₹2,840</span>
                  </div>
               </div>
               <p className="text-xs text-accent/60 tracking-normal not-italic font-medium pr-10 pt-2 opacity-60">Savings calculated based on 1.2M+ trips tracked across all regions this fiscal period.</p>
            </div>

            <div className="bg-card/40 border border-white/5 rounded-[40px] p-10 flex flex-col gap-6 flex-1 shadow-2xl shadow-black/40">
               <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                     <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">Top Perfomer</span>
                     <h3 className="text-2xl font-black tracking-tight italic">Delhi cluster</h3>
                  </div>
                  <div className="px-4 py-2 bg-accent/20 border border-accent/20 rounded-2xl text-[10px] font-black text-accent uppercase tracking-widest truncate max-w-fit">Peak Efficiency</div>
               </div>
               <div className="p-6 bg-white/5 border border-white/5 rounded-3xl flex items-center justify-between group hover:border-primary/30 transition-all cursor-pointer">
                  <div className="flex flex-col">
                     <span className="text-sm font-bold opacity-60 italic tracking-tighter leading-none mb-1">Regional Reliability Score</span>
                     <span className="text-2xl font-black italic">94.2%</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-primary transition-all" />
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
