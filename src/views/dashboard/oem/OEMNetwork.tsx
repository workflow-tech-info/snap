import { 
  Search
} from 'lucide-react';
import { cn } from '../../../lib/utils';

export function OEMNetwork() {
  const vehicles = [
    { vin: 'DL01AB1234', city: 'Delhi', model: 'Sequential V3', mode: 'CNG', score: 91, seen: '2m ago' },
    { vin: 'MH02XY5532', city: 'Mumbai', model: 'Direct Injection V4', mode: 'Petrol', score: 84, seen: '1h ago' },
    { vin: 'KA01PQ8891', city: 'Bangalore', model: 'Sequential V3', mode: 'CNG', score: 95, seen: 'Live' },
    { vin: 'TN04ZZ1122', city: 'Chennai', mode: 'CNG', model: 'Compact ECO V1', score: 88, seen: '5m ago' },
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500 font-black tracking-tighter italic uppercase">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl tracking-tighter">Global Vehicle Registry</h1>
        <div className="flex items-center gap-4">
           <div className="relative w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input type="text" placeholder="Lookup global VIN..." className="w-full pl-12 pr-4 py-3 rounded-2xl bg-card/40 border border-white/5 focus:border-primary/50 outline-none font-bold text-sm tracking-tighter italic" />
           </div>
        </div>
      </div>

      <div className="bg-card/40 border border-white/5 rounded-[40px] overflow-hidden shadow-2xl shadow-black/40">
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="border-b border-white/5 text-[10px] font-black text-text-muted uppercase tracking-widest bg-white/5">
                     <th className="px-10 py-5">Vehicle VIN</th>
                     <th className="px-10 py-5">Cluster</th>
                     <th className="px-10 py-5">Kit Platform</th>
                     <th className="px-10 py-5 text-center">Active Mode</th>
                     <th className="px-10 py-5 text-center">Health Score</th>
                     <th className="px-10 py-5 text-right">Telemetry Status</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5 tracking-tighter">
                  {vehicles.map((v) => (
                    <tr key={v.vin} className="hover:bg-white/5 transition-all group group cursor-pointer">
                       <td className="px-10 py-6 font-black text-lg text-white pr-4">{v.vin}</td>
                       <td className="px-10 py-6 font-bold text-text-muted opacity-60">{v.city}</td>
                       <td className="px-10 py-6 font-black text-primary opacity-80">{v.model}</td>
                       <td className="px-10 py-6 text-center">
                          <span className={cn(
                             "px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest",
                             v.mode === 'CNG' ? "bg-accent/20 text-accent border border-accent/20" : "bg-white/5 text-text-muted border border-white/10"
                          )}>{v.mode}</span>
                       </td>
                       <td className="px-10 py-6 text-center font-black text-lg italic text-white opacity-90">{v.score}</td>
                       <td className="px-10 py-6 text-right font-black italic text-text-muted truncate lowercase opacity-60">
                          {v.seen === 'Live' ? <span className="text-accent animate-pulse font-black uppercase tracking-widest">{v.seen}</span> : v.seen}
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
