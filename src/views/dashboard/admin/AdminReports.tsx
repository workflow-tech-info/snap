import { 
  FileText, 
  Download, 
  Table as TableIcon,
  ShieldCheck,
  Zap,
  Package
} from 'lucide-react';

export function AdminReports() {
  const reports = [
    { name: 'Installation Performance', desc: 'Regional trends and workshop velocity logs.', icon: Zap },
    { name: 'Inventory Consumption', desc: 'Hardware burn rate and restock forecasting.', icon: Package },
    { name: 'Vehicle Health Audit', desc: 'Global fleet status and recurring ECU issues.', icon: ShieldCheck },
    { name: 'Workshop Financials', desc: 'Partner earnings and conversion billing data.', icon: FileText },
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight italic uppercase tracking-tighter text-white">Operation Reports</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {reports.map((report, i) => {
            const Icon = report.icon;
            return (
               <div key={i} className="bg-card/40 border border-white/5 rounded-[40px] p-10 flex flex-col gap-6 group hover:border-primary/30 hover:bg-primary/5 transition-all">
                  <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                     <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col gap-1">
                     <h3 className="text-2xl font-black italic text-white uppercase tracking-tighter">{report.name}</h3>
                     <p className="text-sm text-text-muted italic leading-relaxed pr-10">{report.desc}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                     <button className="py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase text-text-muted hover:text-white hover:bg-primary transition-all flex items-center justify-center gap-2">
                        <Download className="w-3 h-3" /> PDF
                     </button>
                     <button className="py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase text-text-muted hover:text-white hover:bg-primary transition-all flex items-center justify-center gap-2">
                        <TableIcon className="w-3 h-3" /> CSV
                     </button>
                     <button className="py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase text-text-muted hover:text-white hover:bg-primary transition-all flex items-center justify-center gap-2">
                        <TableIcon className="w-3 h-3" /> EXCEL
                     </button>
                  </div>
               </div>
            );
         })}
      </div>
    </div>
  );
}
