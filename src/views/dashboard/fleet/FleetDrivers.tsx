import { cn } from '../../../lib/utils';
import fleetData from '../../../data/demo-fleet.json';

export function FleetDrivers() {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight italic uppercase tracking-tighter">Driver Performance</h1>
      </div>

      <div className="bg-card/40 border border-white/5 rounded-[40px] overflow-hidden">
         <table className="w-full text-left">
            <thead>
               <tr className="border-b border-white/5 bg-white/5 text-[10px] font-black text-text-muted uppercase tracking-widest">
                  <th className="px-8 py-5">Driver Name</th>
                  <th className="px-8 py-5 text-center">Score</th>
                  <th className="px-8 py-5 text-center">Efficiency</th>
                  <th className="px-8 py-5 text-center">Harsh Events</th>
                  <th className="px-8 py-5 text-right">Idle Time</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
               {fleetData.drivers.map((d, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                     <td className="px-8 py-5">
                        <div className="flex flex-col">
                           <span className="font-bold text-white">{d.name}</span>
                           <span className="text-[10px] text-text-muted italic">{d.vehicle}</span>
                        </div>
                     </td>
                     <td className="px-8 py-5 text-center">
                        <span className={cn("font-black text-xl italic", d.score > 85 ? "text-accent" : "text-warn")}>{d.score}</span>
                     </td>
                     <td className="px-8 py-5 text-center font-bold">{d.efficiency} km/kg</td>
                     <td className="px-8 py-5 text-center">
                        <span className={cn("px-3 py-1 rounded-lg text-xs font-bold", d.harsh_events > 5 ? "bg-danger/20 text-danger" : "bg-white/5 text-text-muted")}>
                           {d.harsh_events}
                        </span>
                     </td>
                     <td className="px-8 py-5 text-right font-mono text-text-muted">{d.idle_time} mins</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
    </div>
  );
}
