import { 
  Search, 
  Star,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { cn } from '../../../lib/utils';
import demoOem from '../../../data/demo-oem.json';

export function OEMInstallers() {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500 font-black tracking-tighter italic uppercase">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl italic tracking-tighter uppercase">Authorized Installer Network</h1>
        <div className="relative shrink-0 w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input type="text" placeholder="Audit partner network..." className="w-full pl-12 pr-4 py-3 rounded-2xl bg-card/40 border border-white/5 focus:border-primary/50 outline-none font-bold text-sm transition-all italic tracking-tighter" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {demoOem.installers.map((w, i) => (
            <div key={i} className="bg-card/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-6 group hover:translate-y-[-4px] transition-all shadow-2xl shadow-black/40 relative overflow-hidden">
               <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
               <div className="flex items-start justify-between relative z-10">
                  <div className="flex flex-col gap-1">
                     <span className="text-[10px] font-black text-primary uppercase tracking-widest leading-none pr-10 italic lowercase opacity-60 font-body ">{w.city} Unit</span>
                     <h3 className="text-2xl font-black tracking-tighter pr-4">{w.name}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-text-muted">
                     <ShieldCheck className="w-6 h-6" />
                  </div>
               </div>

               <div className="flex flex-col gap-4 relative z-10">
                  <div className="flex items-center justify-between py-3 border-b border-white/5">
                     <div className="flex items-center gap-2 text-text-muted font-bold text-xs uppercase tracking-tight italic opacity-40">
                        Total Deployments
                     </div>
                     <span className="font-black italic tracking-tighter">{w.installations.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-white/5">
                     <div className="flex items-center gap-2 text-text-muted font-bold text-xs uppercase tracking-tight italic opacity-40">
                        Avg Failure Rate
                     </div>
                     <span className={cn(
                        "font-black italic tracking-tighter",
                        w.failure_rate > 1 ? "text-danger" : "text-accent"
                     )}>{w.failure_rate}%</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-white/5">
                     <div className="flex items-center gap-2 text-text-muted font-bold text-xs uppercase tracking-tight italic opacity-40">
                        Network Rating
                     </div>
                     <div className="flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5 text-warn fill-warn" />
                        <span className="font-black italic tracking-tighter">{w.rating}</span>
                     </div>
                  </div>
               </div>

               <button className="mt-4 w-full py-5 border border-white/10 rounded-3xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all relative z-10 shadow-lg tracking-widest italic lowercase">
                  Audit Workshop Performance <ChevronRight className="w-4 h-4" />
               </button>
            </div>
         ))}
      </div>
    </div>
  );
}
