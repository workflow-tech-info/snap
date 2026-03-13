import { 
  FileText, 
  Download, 
  FileJson, 
  Table as TableIcon,
  ShieldCheck,
  Calendar
} from 'lucide-react';

export function FleetReports() {
  const reports = [
    { name: 'Fleet Fuel Economy Audit', date: 'March 07, 2026', type: 'Monthly', size: '4.2 MB' },
    { name: 'Weekly Trip Log Aggregator', date: 'March 01, 2026', type: 'Weekly', size: '1.8 MB' },
    { name: 'Asset Health & ECU Diagnostics', date: 'Feb 28, 2026', type: 'Monthly', size: '12.5 MB' },
    { name: 'Driver Behavior & Safety Report', date: 'Feb 28, 2026', type: 'Monthly', size: '2.1 MB' },
    { name: 'ROI & Savings Investment Statement', date: 'Jan 31, 2026', type: 'Quarterly', size: '1.2 MB' },
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight italic uppercase tracking-tighter">Report Generation Center</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         <div className="lg:col-span-8 flex flex-col gap-4">
            {reports.map((report, i) => (
               <div key={i} className="p-6 rounded-[32px] bg-card/40 border border-white/5 hover:border-primary/30 transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-5">
                     <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-text-muted group-hover:text-primary transition-colors">
                        <FileText className="w-6 h-6" />
                     </div>
                     <div className="flex flex-col">
                        <span className="font-bold text-text-primary group-hover:italic transition-all">{report.name}</span>
                        <div className="flex items-center gap-3 text-[10px] font-black text-text-muted uppercase tracking-widest pt-1">
                           <span>{report.date}</span>
                           <span className="w-1 h-1 rounded-full bg-white/20" />
                           <span>{report.type}</span>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                     <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all"><TableIcon className="w-4 h-4" /></button>
                     <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all"><FileJson className="w-4 h-4" /></button>
                     <button className="px-6 py-3 rounded-xl bg-primary text-white font-black text-[10px] tracking-widest uppercase flex items-center gap-2">
                        <Download className="w-4 h-4" /> PDF
                     </button>
                  </div>
               </div>
            ))}
         </div>

         <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-card/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-8">
               <h3 className="text-xl font-bold italic tracking-tighter uppercase">Quick Export</h3>
               <div className="grid grid-cols-1 gap-4">
                  <button className="w-full p-6 rounded-3xl bg-white/5 border border-white/5 text-left hover:bg-white/10 transition-all flex flex-col gap-2">
                     <Calendar className="w-5 h-5 text-primary" />
                     <span className="text-sm font-bold">Last 24 Hours Log</span>
                     <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">CSV + PDF Bundle</span>
                  </button>
                  <button className="w-full p-6 rounded-3xl bg-white/5 border border-white/5 text-left hover:bg-white/10 transition-all flex flex-col gap-2">
                     <ShieldCheck className="w-5 h-5 text-accent" />
                     <span className="text-sm font-bold">Health Audit Summary</span>
                     <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">Ready to Download</span>
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
