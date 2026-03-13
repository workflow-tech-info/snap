import { 
  AlertTriangle, 
  ShieldAlert, 
  ArrowRight
} from 'lucide-react';
import { cn } from '../../../lib/utils';

export function AdminAlerts() {
  const alerts = [
    { id: 'A1', type: 'Hardware Disconnect', msg: 'Device SNAP-ECU-88231 disconnected.', severity: 'CRITICAL', workshop: 'Mumbai West' },
    { id: 'A2', type: 'Engine Fault', msg: 'Vehicle DL02XY5532 reporting injector imbalance.', severity: 'WARNING', workshop: 'Delhi Central' },
    { id: 'A3', type: 'Inventory Low', msg: 'Workshop Mumbai Central low on regulators.', severity: 'CRITICAL', workshop: 'Mumbai Central' },
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight italic uppercase tracking-tighter text-white">Network Alerts</h1>
      </div>

      <div className="flex flex-col gap-4">
         {alerts.map((alert) => (
            <div key={alert.id} className={cn(
               "p-8 rounded-[40px] border flex items-center justify-between transition-all hover:translate-x-1 cursor-pointer group",
               alert.severity === 'CRITICAL' ? "bg-danger/10 border-danger/20" : "bg-card/40 border-white/5"
            )}>
               <div className="flex items-center gap-6">
                  <div className={cn(
                     "w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl",
                     alert.severity === 'CRITICAL' ? "bg-danger text-white shadow-danger/20" : "bg-warn text-navy shadow-warn/20"
                  )}>
                     {alert.severity === 'CRITICAL' ? <ShieldAlert className="w-7 h-7" /> : <AlertTriangle className="w-7 h-7" />}
                  </div>
                  <div className="flex flex-col gap-1">
                     <span className="text-lg font-bold text-white group-hover:italic transition-all">{alert.type}</span>
                     <p className="text-sm text-text-muted italic leading-relaxed">{alert.msg}</p>
                     <span className="text-[10px] font-black text-primary uppercase tracking-widest pt-2">{alert.workshop}</span>
                  </div>
               </div>
               <button className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all">
                  <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-white transition-all" />
               </button>
            </div>
         ))}
      </div>
    </div>
  );
}
