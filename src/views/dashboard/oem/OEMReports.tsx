import { 
  FileText, 
  Download, 
  Calendar,
  Globe
} from 'lucide-react';

export function OEMReports() {
  const reports = [
    { id: 'R1', title: 'Global Kit Reliability (Monthly)', type: 'PDF', size: '4.2 MB' },
    { id: 'R2', title: 'Regional Fuel Impact Matrix', type: 'Excel', size: '12.8 MB' },
    { id: 'R3', title: 'Component MTBF Analysis', type: 'PDF', size: '2.1 MB' },
    { id: 'R4', title: 'Installer Network Audit', type: 'CSV', size: '0.8 MB' },
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500 font-black tracking-tighter italic uppercase">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl tracking-tighter uppercase">Manufacturer Intelligence Center</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {reports.map((report) => (
            <div key={report.id} className="bg-card/40 border border-white/5 rounded-[40px] p-10 flex items-center justify-between group hover:border-primary/30 transition-all cursor-pointer shadow-2xl shadow-black/20">
               <div className="flex items-center gap-8 pr-10">
                  <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-text-muted group-hover:bg-primary group-hover:text-white transition-all shadow-xl">
                     <FileText className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col gap-1">
                     <span className="text-xl font-black italic tracking-tighter pr-4 ">{report.title}</span>
                     <div className="flex items-center gap-4 text-[10px] font-black text-text-muted uppercase tracking-widest opacity-40">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Updated Today</span>
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                        <span>{report.size}</span>
                     </div>
                  </div>
               </div>
               <button className="flex flex-col items-center gap-2 group-hover:text-primary transition-all">
                  <Download className="w-6 h-6" />
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100">{report.type}</span>
               </button>
            </div>
         ))}
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-[40px] p-12 flex items-center justify-between relative overflow-hidden group">
         <Globe className="absolute -right-10 -bottom-10 w-48 h-48 text-primary opacity-5 group-hover:rotate-12 transition-transform duration-[3000ms]" />
         <div className="flex flex-col gap-4 relative z-10">
            <h2 className="text-2xl font-black tracking-tight italic uppercase text-white">Automated Batch Reporting</h2>
            <p className="text-sm text-primary/60 not-italic tracking-normal max-w-lg font-medium opacity-60">Configure automated delivery of kit performance metrics to your engineering and compliance departments every 24 hours.</p>
            <div className="flex items-center gap-4 mt-2">
               <button className="px-8 py-4 bg-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-primary/80 transition-all shadow-lg shadow-primary/20">Configure Pipeline</button>
            </div>
         </div>
      </div>
    </div>
  );
}
