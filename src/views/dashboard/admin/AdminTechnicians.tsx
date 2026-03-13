import { 
  Activity, 
  Award,
  ChevronRight,
  Star
} from 'lucide-react';
import demoAdmin from '../../../data/demo-admin.json';

export function AdminTechnicians() {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight italic uppercase tracking-tighter text-white">Technician Workforce</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {demoAdmin.technicians.map((t, i) => (
            <div key={i} className="bg-card/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-6 relative overflow-hidden group">
               <Award className="absolute -right-4 -top-4 w-24 h-24 text-primary opacity-5 group-hover:scale-110 transition-transform" />
               <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                     <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${t.name}`} alt={t.name} className="w-14 h-14" />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-lg font-bold text-white italic">{t.name}</span>
                     <span className="text-[10px] font-black text-primary uppercase tracking-widest">{t.workshop}</span>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                     <span className="text-[9px] font-black text-text-muted uppercase tracking-widest">Installs</span>
                     <div className="text-xl font-black italic">{t.installs}</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                     <span className="text-[9px] font-black text-text-muted uppercase tracking-widest">Avg Time</span>
                     <div className="text-xl font-black italic">{t.avg_time}</div>
                  </div>
               </div>

               <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1.5">
                     <Star className="w-4 h-4 text-warn fill-warn" />
                     <span className="text-lg font-black italic">{t.rating}</span>
                  </div>
                  <button className="text-[10px] font-black uppercase text-primary tracking-widest hover:translate-x-1 transition-transform inline-flex items-center gap-2">Full Profile <ChevronRight className="w-3 h-3" /></button>
               </div>
            </div>
         ))}
      </div>

      <div className="bg-card/40 border border-white/5 rounded-[40px] p-10">
         <div className="flex items-center gap-3 mb-8">
            <Activity className="w-6 h-6 text-accent" />
            <h2 className="text-xl font-bold italic tracking-tight uppercase">Performance Heatmap</h2>
         </div>
         <div className="flex items-center justify-center h-48 border border-white/5 rounded-3xl opacity-20 bg-white/5">
            <div className="text-sm font-bold uppercase tracking-[0.2em]">Workforce Distribution Visualization</div>
         </div>
      </div>
    </div>
  );
}
