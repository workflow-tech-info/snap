import { 
  Warehouse, 
  Users, 
  Star,
  ChevronRight,
  Search,
  Activity
} from 'lucide-react';
import { cn } from '../../../lib/utils';
import demoAdmin from '../../../data/demo-admin.json';

export function AdminWorkshops() {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight italic uppercase tracking-tighter text-white">Workshop Partners</h1>
        <div className="relative group shrink-0 w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input type="text" placeholder="Locate workshop..." className="w-full pl-12 pr-4 py-3 rounded-2xl bg-card/40 border border-white/5 focus:border-primary/50 outline-none font-bold text-sm transition-all" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {demoAdmin.workshop_performance.map((w, i) => (
            <div key={i} className="bg-card/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-6 group hover:translate-y-[-4px] transition-all">
               <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1">
                     <span className="text-[10px] font-black text-primary uppercase tracking-widest">{w.city} Cluster</span>
                     <h3 className="text-2xl font-black italic tracking-tight">{w.name}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-text-muted">
                     <Warehouse className="w-6 h-6" />
                  </div>
               </div>

               <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between py-3 border-b border-white/5">
                     <div className="flex items-center gap-2 text-text-muted font-bold text-xs uppercase tracking-tight">
                        <Users className="w-3.5 h-3.5" /> Team Size
                     </div>
                     <span className="font-black italic">{w.technicians} Techs</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-white/5">
                     <div className="flex items-center gap-2 text-text-muted font-bold text-xs uppercase tracking-tight">
                        <Activity className="w-3.5 h-3.5" /> Total Installs
                     </div>
                     <span className="font-black italic">{w.installs} Units</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-white/5">
                     <div className="flex items-center gap-2 text-text-muted font-bold text-xs uppercase tracking-tight">
                        <Star className="w-3.5 h-3.5" /> Trust Rating
                     </div>
                     <div className="flex items-center gap-1.5">
                        <span className="font-black italic">{w.rating}</span>
                        <div className="flex gap-0.5">
                           {[1,2,3,4,5].map(s => <div key={s} className={cn("w-1 h-1 rounded-full", s <= Math.floor(w.rating) ? "bg-warn" : "bg-white/10")} />)}
                        </div>
                     </div>
                  </div>
               </div>

               <button className="mt-4 w-full py-4 border border-white/10 rounded-2xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all">
                  Workshop Operations <ChevronRight className="w-4 h-4" />
               </button>
            </div>
         ))}
      </div>
    </div>
  );
}
