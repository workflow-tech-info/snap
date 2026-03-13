import { 
  Download,
  BarChart3
} from 'lucide-react';
import { cn } from '../../../lib/utils';
import demoOem from '../../../data/demo-oem.json';

export function OEMPerformance() {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight italic uppercase tracking-tighter">Kit Analytics</h1>
        <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold hover:bg-white/10 transition-all tracking-tighter italic uppercase">
          <Download className="w-4 h-4" /> Export Model Data
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         <div className="lg:col-span-12 bg-card/40 border border-white/5 rounded-[40px] overflow-hidden">
            <div className="p-10 border-b border-white/5 flex items-center justify-between">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(11,104,255,0.1)]">
                     <BarChart3 className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-black italic uppercase tracking-tight">Model reliability matrix</h2>
               </div>
            </div>
            <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="border-b border-white/5 text-[10px] font-black text-text-muted uppercase tracking-widest bg-white/5">
                        <th className="px-10 py-5">Kit Model</th>
                        <th className="px-10 py-5 text-center">Deployment</th>
                        <th className="px-10 py-5 text-center">Avg Efficiency</th>
                        <th className="px-10 py-5 text-center">Injector Timings</th>
                        <th className="px-10 py-5 text-center">Regulator ΔP</th>
                        <th className="px-10 py-5 text-right">Failure Rate</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 capitalize tracking-tight font-medium">
                     {demoOem.kit_performance.map((kit, i) => (
                        <tr key={i} className="hover:bg-white/5 transition-all group">
                           <td className="px-10 py-6">
                              <div className="flex items-center gap-2">
                                 <span className="w-2 h-2 rounded-full bg-primary" />
                                 <span className="font-black italic text-white text-lg tracking-tighter">{kit.model}</span>
                              </div>
                           </td>
                           <td className="px-10 py-6 text-center font-bold text-text-muted">{kit.vehicles.toLocaleString()} <span className="text-[10px] opacity-40 italic lowercase">v-installed</span></td>
                           <td className="px-10 py-6 text-center">
                              <span className="px-3 py-1 rounded-lg bg-accent/20 text-accent font-black italic">{kit.efficiency} km/kg</span>
                           </td>
                           <td className="px-10 py-6 text-center font-mono text-[11px] text-text-muted">{kit.timing} ms</td>
                           <td className="px-10 py-6 text-center font-mono text-[11px] text-text-muted">{kit.pressure} bar</td>
                           <td className="px-10 py-6 text-right">
                              <span className={cn(
                                 "text-sm font-black italic",
                                 kit.failure_rate > 1 ? "text-danger" : "text-accent"
                              )}>{kit.failure_rate}%</span>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
    </div>
  );
}
