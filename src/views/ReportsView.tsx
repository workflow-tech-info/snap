import { FileBarChart, Download, FileJson, FileSpreadsheet } from 'lucide-react';

export function ReportsView({ onExport }: { onExport: (format: string) => void }) {
  const reports = [
    { title: 'Full Trip History', desc: 'Detailed log of all trips with GPS and fuel data.', formats: ['PDF', 'CSV', 'EXCEL'] },
    { title: 'Fuel Usage Report', desc: 'Summary of gas consumption vs savings.', formats: ['PDF', 'CSV'] },
    { title: 'Maintenance Logs', desc: 'History of services, filter changes, and inspections.', formats: ['PDF'] },
    { title: 'ECU Telemetry Export', desc: 'Raw data export for deep-dive calibration analysis.', formats: ['CSV', 'JSON'] },
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Reporting Center</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report, i) => (
          <div key={i} className="bg-card/40 border border-white/5 rounded-3xl p-8 flex flex-col gap-6 hover:border-primary/20 transition-all group">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <FileBarChart className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2">
                {report.formats.map(f => (
                  <span key={f} className="px-2 py-1 bg-white/5 rounded-md text-[9px] font-bold text-text-muted uppercase tracking-widest">{f}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{report.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed font-medium">{report.desc}</p>
            </div>

            <div className="pt-4 flex items-center gap-3">
               <button 
                 onClick={() => onExport('PDF')}
                 className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/10"
               >
                 <Download className="w-4 h-4" /> Download PDF
               </button>
               <button 
                 onClick={() => onExport('CSV')}
                 className="p-3 bg-white/5 hover:bg-white/10 text-text-muted hover:text-text-primary border border-white/5 rounded-xl transition-all"
               >
                 <FileSpreadsheet className="w-4 h-4" />
               </button>
               <button 
                 onClick={() => onExport('JSON')}
                 className="p-3 bg-white/5 hover:bg-white/10 text-text-muted hover:text-text-primary border border-white/5 rounded-xl transition-all"
               >
                 <FileJson className="w-4 h-4" />
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
