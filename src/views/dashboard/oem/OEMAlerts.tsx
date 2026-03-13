import { 
  AlertTriangle, 
  ShieldAlert, 
  ArrowRight
} from 'lucide-react';
import { cn } from '../../../lib/utils';

export function OEMAlerts() {
  const alerts = [
    { id: 'O1', type: 'Network Quality Spike', msg: 'Injector failure frequency increased by 14% in Mumbai cluster over 24h.', severity: 'CRITICAL', platform: 'Sequential V3' },
    { id: 'O2', type: 'Firmware Compliance', msg: 'Batch B-442 requires mandatory v2.1.0 update to resolve sensor drift.', severity: 'WARNING', platform: 'Direct Injection V4' },
    { id: 'O3', type: 'Regional Instability', msg: ' दिल्ली region reporting recurring regulator pressure fluctuations in high-ambient temp zones.', severity: 'CRITICAL', platform: 'Compact ECO V1' },
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500 font-black tracking-tighter italic uppercase">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl tracking-tighter uppercase">Network-Wide Alert Protocol</h1>
      </div>

      <div className="flex flex-col gap-5">
         {alerts.map((alert) => (
            <div key={alert.id} className={cn(
               "p-10 rounded-[48px] border flex items-center justify-between transition-all hover:translate-x-1 cursor-pointer group shadow-2xl shadow-black/20",
               alert.severity === 'CRITICAL' ? "bg-danger/10 border-danger/20" : "bg-card/40 border-white/5"
            )}>
               <div className="flex items-center gap-8 pr-10">
                  <div className={cn(
                     "w-16 h-16 rounded-[24px] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500",
                     alert.severity === 'CRITICAL' ? "bg-danger text-white shadow-danger/20" : "bg-warn text-navy shadow-warn/20"
                  )}>
                     {alert.severity === 'CRITICAL' ? <ShieldAlert className="w-8 h-8" /> : <AlertTriangle className="w-8 h-8" />}
                  </div>
                  <div className="flex flex-col gap-2">
                     <span className="text-2xl font-black text-white group-hover:italic transition-all tracking-tighter pr-4">{alert.type}</span>
                     <p className="text-sm text-text-muted not-italic tracking-normal pr-20 opacity-60 font-body ">{alert.msg}</p>
                     <div className="flex items-center gap-4 pt-2">
                        <span className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/20 truncate lowercase tracking-widest ">{alert.platform} Platform</span>
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-[10px] font-black text-text-muted uppercase tracking-widest opacity-40">System Protocol: Active</span>
                     </div>
                  </div>
               </div>
               <button className="w-16 h-16 rounded-[24px] bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all shrink-0">
                  <ArrowRight className="w-6 h-6 text-text-muted group-hover:text-white group-hover:translate-x-1 transition-all" />
               </button>
            </div>
         ))}
      </div>
    </div>
  );
}
