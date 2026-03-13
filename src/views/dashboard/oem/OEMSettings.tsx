import { 
  ShieldCheck, 
  Database, 
  Cpu, 
  ChevronRight,
  Globe
} from 'lucide-react';

export function OEMSettings() {
  const sections = [
    { title: 'Manufacturer Profile', icon: Globe, desc: 'Global OEM identity and manufacturing clusters' },
    { title: 'Kit Platforms', icon: Cpu, desc: 'Configure ECU logic limits and sensor distributions' },
    { title: 'Ecosystem Access', icon: ShieldCheck, desc: 'Regional distribution partner API permissions' },
    { title: 'Data Sovereignty', icon: Database, desc: 'Ecosystem telemetry storage and ingestion logic' },
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500 font-black tracking-tighter italic uppercase">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl tracking-tighter uppercase">Ecosystem Configuration</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {sections.map((section, i) => (
            <div key={i} className="bg-card/40 border border-white/5 rounded-[40px] p-10 flex flex-col gap-8 group hover:border-white/20 transition-all cursor-pointer shadow-2xl shadow-black/20">
               <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-text-muted group-hover:bg-primary group-hover:text-white transition-all shadow-xl">
                     <section.icon className="w-8 h-8" />
                  </div>
                  <ChevronRight className="w-6 h-6 text-text-muted opacity-40" />
               </div>
               <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-black italic tracking-tighter text-white pr-4 uppercase ">{section.title}</h3>
                  <p className="text-sm text-text-muted not-italic tracking-normal opacity-60 font-body ">{section.desc}</p>
               </div>
            </div>
         ))}
      </div>

      <div className="mt-8 p-10 bg-white/5 border border-white/5 rounded-[40px] flex items-center justify-between">
         <div className="flex flex-col">
            <span className="text-[10px] font-black text-primary uppercase tracking-widest mb-1 italic">Security Protocol</span>
            <span className="text-xl font-bold tracking-tight text-white italic">Hardened Manufacturer API active</span>
         </div>
         <div className="h-2 w-48 bg-navy rounded-full overflow-hidden shrink-0 ml-10">
            <div className="h-full bg-accent" style={{ width: '88%' }} />
         </div>
      </div>
    </div>
  );
}
