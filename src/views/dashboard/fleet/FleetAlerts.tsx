import { 
  AlertTriangle, 
  Info, 
  ShieldAlert, 
  ArrowRight
} from 'lucide-react';
import { cn } from '../../../lib/utils';
import fleetData from '../../../data/demo-fleet.json';

export function FleetAlerts() {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight italic uppercase tracking-tighter">Live Incident Stream</h1>
        <div className="flex items-center gap-3">
           <button className="px-6 py-3 bg-danger/10 text-danger border border-danger/20 rounded-2xl text-xs font-black uppercase tracking-widest">Mute All</button>
        </div>
      </div>

      <div className="bg-card/40 border border-white/5 rounded-[40px] overflow-hidden">
         <div className="overflow-y-auto max-h-[70vh] custom-scrollbar">
            {fleetData.alerts.map((alert) => (
               <div key={alert.id} className={cn(
                  "p-8 flex items-center justify-between border-b border-white/5 last:border-0 hover:bg-white/5 transition-all group",
                  alert.severity === 'CRITICAL' ? "bg-danger/5" : ""
               )}>
                  <div className="flex items-center gap-6">
                     <div className={cn(
                        "w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl",
                        alert.severity === 'CRITICAL' ? "bg-danger text-white" : 
                        alert.severity === 'WARNING' ? "bg-warn text-navy" : "bg-white/10 text-text-muted"
                     )}>
                        {alert.severity === 'CRITICAL' ? <ShieldAlert className="w-7 h-7" /> : 
                         alert.severity === 'WARNING' ? <AlertTriangle className="w-7 h-7" /> : <Info className="w-7 h-7" />}
                     </div>
                     <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-3">
                           <span className="text-lg font-bold text-text-primary group-hover:italic transition-all">{alert.type}</span>
                           <span className={cn(
                              "text-[8px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-md",
                              alert.severity === 'CRITICAL' ? "bg-danger/20 text-danger" : "bg-white/10 text-text-muted"
                           )}>{alert.severity}</span>
                        </div>
                        <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">Asset: {alert.vin} • Incident at {alert.time}</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-6">
                     <div className="flex flex-col items-end opacity-40">
                        <span className="text-[10px] font-bold">Packet ID</span>
                        <span className="text-xs font-mono">0x{alert.id.split('_')[1]}A92</span>
                     </div>
                     <button className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
                        <ArrowRight className="w-5 h-5" />
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
}
