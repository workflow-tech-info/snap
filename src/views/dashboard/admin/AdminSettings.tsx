import { 
  ShieldCheck, 
  ChevronRight,
  Database,
  Cpu
} from 'lucide-react';

export function AdminSettings() {
  const sections = [
    { title: 'Global ECU Config', desc: 'Firmware parameters and communication interval tuning.', icon: Cpu },
    { title: 'Workshop Permissions', desc: 'Access control and role management for partners.', icon: ShieldCheck },
    { title: 'System Webhooks', desc: 'Real-time event integration for external partners.', icon: Database },
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight italic uppercase tracking-tighter text-white">System Settings</h1>
      </div>

      <div className="max-w-3xl flex flex-col gap-4">
         {sections.map((s, i) => {
            const Icon = s.icon;
            return (
               <div key={i} className="bg-card/40 border border-white/5 rounded-[32px] p-8 flex items-center justify-between group hover:bg-white/5 transition-all cursor-pointer">
                  <div className="flex items-center gap-6">
                     <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-text-muted group-hover:text-primary transition-colors">
                        <Icon className="w-6 h-6" />
                     </div>
                     <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-bold text-white italic">{s.title}</h3>
                        <p className="text-xs text-text-muted italic">{s.desc}</p>
                     </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-white group-hover:translate-x-1 transition-all" />
               </div>
            );
         })}
      </div>
    </div>
  );
}
