import { 
  Search, 
  Download, 
  ChevronRight,
  Fuel
} from 'lucide-react';
import { cn } from '../../../lib/utils';
import fleetData from '../../../data/demo-fleet.json';

export function FleetVehicles() {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight italic">Fleet Assets</h1>
        <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl text-sm font-bold transition-all group">
          <Download className="w-4 h-4 group-hover:scale-110 transition-transform" /> Full Audit
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
         <div className="flex-1 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-focus-within:text-primary transition-colors" />
            <input 
               type="text" 
               placeholder="Search Assets..."
               className="w-full pl-12 pr-4 py-4 rounded-3xl bg-card/40 border border-white/5 focus:border-primary/50 outline-none font-bold text-sm transition-all"
            />
         </div>
      </div>

      <div className="bg-card/40 border border-white/5 rounded-[40px] overflow-hidden">
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="border-b border-white/5 bg-white/5">
                     <th className="px-8 py-6 text-[10px] font-black text-text-muted uppercase tracking-widest">Vehicle Detail</th>
                     <th className="px-8 py-6 text-[10px] font-black text-text-muted uppercase tracking-widest text-center">Type / Kit</th>
                     <th className="px-8 py-6 text-[10px] font-black text-text-muted uppercase tracking-widest text-center">Fuel Mode</th>
                     <th className="px-8 py-6 text-[10px] font-black text-text-muted uppercase tracking-widest text-center">Efficiency</th>
                     <th className="px-8 py-4 text-right">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  {fleetData.vehicles.map((v) => (
                    <tr key={v.vin} className="hover:bg-white/5 transition-colors group">
                       <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-xl bg-card flex items-center justify-center text-text-muted">
                                <Fuel className="w-5 h-5" />
                             </div>
                             <div className="flex flex-col">
                                <span className="text-sm font-bold text-text-primary italic">{v.vin}</span>
                                <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">{v.driver}</span>
                             </div>
                          </div>
                       </td>
                       <td className="px-8 py-6 text-center">
                          <div className="flex flex-col">
                             <span className="text-xs font-bold">{v.model}</span>
                             <span className="text-[10px] text-text-muted italic">{v.kit}</span>
                          </div>
                       </td>
                       <td className="px-8 py-6 text-center">
                          <span className={cn(
                             "px-3 py-1 rounded-lg text-xs font-bold",
                             v.fuel_mode === 'CNG' ? "bg-accent/10 text-accent" : "bg-primary/20 text-primary"
                          )}>
                             {v.fuel_mode}
                          </span>
                       </td>
                       <td className="px-8 py-6 text-center font-black italic text-accent">{v.health_score}%</td>
                       <td className="px-8 py-6 text-right">
                          <button className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-all"><ChevronRight className="w-4 h-4" /></button>
                       </td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );
}
