import { 
  Wrench, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';
import { cn } from '../../../lib/utils';

export function FleetMaintenance() {
  const maintenanceFocus = [
    { title: 'Vehicles needing service soon', count: 12, sub: 'Within 10 days', color: 'text-primary' },
    { title: 'Cylinder hydro-test due', count: 4, sub: 'Due this month', color: 'text-warn' },
    { title: 'Filter replacement due', count: 9, sub: 'Immediate attention', color: 'text-accent' },
    { title: 'Injector imbalance alerts', count: 3, sub: 'Critical sync required', color: 'text-danger' }
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight italic uppercase tracking-tighter text-white">Maintenance Forecasting</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {maintenanceFocus.map((item, i) => (
            <div key={i} className="bg-card/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-6 group hover:border-primary/30 transition-all cursor-pointer">
               <div className={cn("w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center", item.color)}>
                  <Wrench className="w-6 h-6" />
               </div>
               <div className="flex flex-col">
                  <span className="text-4xl font-black italic text-white">{item.count}</span>
                  <span className="text-[10px] font-black text-text-muted uppercase tracking-widest pt-1 leading-tight">{item.title}</span>
                  <span className={cn("text-[10px] font-bold italic pt-1", item.color)}>{item.sub}</span>
               </div>
            </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="bg-card/40 border border-white/5 rounded-[40px] p-10 flex flex-col gap-8">
            <h3 className="text-xl font-bold italic tracking-tighter uppercase">Predictive Service Timeline</h3>
            <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-white/5">
                <div className="relative pl-10">
                   <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-accent animate-pulse" />
                   <div className="flex flex-col">
                      <span className="font-bold text-white">VIN: DL01AB1234 — Sequential Master Service</span>
                      <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">Scheduled for tomorrow • Gurgaon Center</span>
                   </div>
                </div>
                <div className="relative pl-10">
                   <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-primary" />
                   <div className="flex flex-col">
                      <span className="font-bold text-white">VIN: KA01ZZ9999 — Cylinder Hydro-test</span>
                      <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">Scheduled for March 12 • Bengaluru Center</span>
                   </div>
                </div>
                <div className="relative pl-10">
                   <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white/10" />
                   <div className="flex flex-col">
                      <span className="font-bold text-text-muted">VIN: DL03KH9090 — Map Synchronization</span>
                      <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">Next month baseline</span>
                   </div>
                </div>
            </div>
         </div>

         <div className="flex flex-col gap-8">
            <div className="bg-primary/10 border border-primary/20 rounded-[40px] p-10 flex flex-col gap-6">
               <ShieldCheck className="w-10 h-10 text-primary" />
               <h4 className="text-xl font-bold italic tracking-tighter uppercase text-white">Snap Pro-care Active</h4>
               <p className="text-xs font-medium text-text-muted leading-relaxed">
                  Your enterprise fleet is covered under Snap's Platinum Warranty. All software calibrations are delivered <span className="text-primary font-bold">Over-The-Air (OTA)</span> instantly.
               </p>
               <button className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest group">
                  Contact Support Specialist <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}
