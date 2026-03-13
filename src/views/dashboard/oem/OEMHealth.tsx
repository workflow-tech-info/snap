import { 
  Activity, 
  AlertTriangle, 
  ShieldCheck,
  Zap,
  Cpu,
  TrendingDown,
  ArrowRight
} from 'lucide-react';
import demoOem from '../../../data/demo-oem.json';

export function OEMHealth() {
  const h = demoOem.component_health;

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500 font-black tracking-tighter italic uppercase">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl">Component Assurance Hub</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         <div className="bg-card/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-4 relative overflow-hidden group hover:border-white/20 transition-all">
            <Zap className="w-10 h-10 text-warn" />
            <div className="flex flex-col">
               <span className="text-[10px] not-italic font-black text-text-muted uppercase tracking-widest">Injectors</span>
               <span className="text-3xl font-black">{h.injectors.issues} Issues</span>
            </div>
            <div className="px-3 py-1 rounded-full bg-accent/20 text-accent border border-accent/20 text-[10px] truncate max-w-fit">{h.injectors.status}</div>
         </div>
         <div className="bg-card/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-4 relative overflow-hidden group hover:border-danger/20 transition-all bg-danger/5">
            <Activity className="w-10 h-10 text-danger" />
            <div className="flex flex-col">
               <span className="text-[10px] not-italic font-black text-danger uppercase tracking-widest">Regulators</span>
               <span className="text-3xl font-black">{h.regulators.issues} Issues</span>
            </div>
            <div className="px-3 py-1 rounded-full bg-danger/20 text-danger border border-danger/20 text-[10px] truncate max-w-fit font-black tracking-widest leading-none">{h.regulators.status}</div>
            <TrendingDown className="absolute -right-4 -bottom-4 w-20 h-20 text-danger opacity-10" />
         </div>
         <div className="bg-card/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-4 relative overflow-hidden group hover:border-white/20 transition-all">
            <ShieldCheck className="w-10 h-10 text-primary" />
            <div className="flex flex-col">
               <span className="text-[10px] not-italic font-black text-text-muted uppercase tracking-widest">Sensors</span>
               <span className="text-3xl font-black">{h.sensors.issues} Issues</span>
            </div>
            <div className="px-3 py-1 rounded-full bg-accent/20 text-accent border border-accent/20 text-[10px] truncate max-w-fit">{h.sensors.status}</div>
         </div>
         <div className="bg-card/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-4 relative overflow-hidden group hover:border-white/20 transition-all">
            <Cpu className="w-10 h-10 text-text-muted" />
            <div className="flex flex-col">
               <span className="text-[10px] not-italic font-black text-text-muted uppercase tracking-widest">ECU Units</span>
               <span className="text-3xl font-black">{h.ecu.issues} Issues</span>
            </div>
            <div className="px-3 py-1 rounded-full bg-accent/20 text-accent border border-accent/20 text-[10px] truncate max-w-fit">{h.ecu.status}</div>
         </div>
      </div>

      <div className="bg-card/40 border border-white/5 rounded-[40px] p-10 flex flex-col gap-8">
         <h2 className="text-2xl font-black tracking-tighter italic uppercase text-white">Stability Incident Log</h2>
         <div className="space-y-4">
            <div className="flex items-center justify-between p-6 bg-navy/40 border border-white/5 rounded-3xl group hover:border-warn/30 transition-all cursor-pointer">
               <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-warn/10 flex items-center justify-center text-warn">
                     <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-lg font-bold">Injector Imbalance (Network Spike)</span>
                     <p className="text-xs text-text-muted tracking-normal not-italic font-medium pr-20 opacity-60">Detected in 182 vehicles using Kit Model V3. Frequency distribution suggests a batch calibration drift in Series 'A' Kits.</p>
                  </div>
               </div>
               <button className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-primary group-hover:text-white transition-all"><ArrowRight className="w-4 h-4" /></button>
            </div>
            <div className="flex items-center justify-between p-6 bg-navy/40 border border-white/5 rounded-3xl group hover:border-danger/30 transition-all cursor-pointer">
               <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-danger/10 flex items-center justify-center text-danger">
                     <TrendingDown className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-lg font-bold">Regulator Pressure Drift</span>
                     <p className="text-xs text-text-muted tracking-normal not-italic font-medium pr-20 opacity-60">Critical instability detected in 91 vehicles in high-altitude regions. Engineering review required for altitude compensation curves.</p>
                  </div>
               </div>
               <button className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-danger group-hover:text-white transition-all"><ArrowRight className="w-4 h-4" /></button>
            </div>
         </div>
      </div>
    </div>
  );
}
