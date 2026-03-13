import { 
  Search, 
  Filter, 
  Download, 
  Monitor
} from 'lucide-react';
import { cn } from '../../../lib/utils';
import demoAdmin from '../../../data/demo-admin.json';

export function AdminInstallations() {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight italic uppercase tracking-tighter">Installation Ledger</h1>
        <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold hover:bg-white/10 transition-all">
          <Download className="w-4 h-4" /> Export Batch
        </button>
      </div>

      <div className="bg-card/40 border border-white/5 rounded-[40px] overflow-hidden">
         <div className="p-8 border-b border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Monitor className="w-5 h-5" />
               </div>
               <h2 className="text-xl font-bold tracking-tight italic">All Conversion Jobs</h2>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
               <div className="relative flex-1 md:w-64">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                  <input type="text" placeholder="Search by VIN or ID..." className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none font-bold text-xs" />
               </div>
               <button className="p-3 rounded-2xl bg-white/5 border border-white/10 text-text-muted hover:text-white transition-all">
                  <Filter className="w-4 h-4" />
               </button>
            </div>
         </div>
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="border-b border-white/5 text-[10px] font-black text-text-muted uppercase tracking-widest bg-white/5">
                     <th className="px-8 py-4">Job ID</th>
                     <th className="px-8 py-4">Vehicle</th>
                     <th className="px-8 py-4">Customer</th>
                     <th className="px-8 py-4">Workshop</th>
                     <th className="px-8 py-4">Technician</th>
                     <th className="px-8 py-4">Kit Model</th>
                     <th className="px-8 py-4 text-center">Status</th>
                     <th className="px-8 py-4 text-right">Date</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  {demoAdmin.installations.map((job) => (
                    <tr key={job.id} className="hover:bg-white/5 transition-colors group text-sm">
                       <td className="px-8 py-5 font-black text-primary italic cursor-pointer underline-offset-4 hover:underline">{job.id}</td>
                       <td className="px-8 py-5 font-bold text-text-primary italic">{job.vin}</td>
                       <td className="px-8 py-5 font-medium">{job.customer}</td>
                       <td className="px-8 py-5 text-text-muted font-medium">{job.workshop}</td>
                       <td className="px-8 py-5 text-text-muted italic">{job.technician}</td>
                       <td className="px-8 py-5 font-bold">{job.kit}</td>
                       <td className="px-8 py-5 text-center">
                          <span className={cn(
                             "px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest",
                             job.status === 'Completed' ? "bg-accent/20 text-accent border border-accent/20" : 
                             job.status === 'In Progress' ? "bg-primary/20 text-primary border border-primary/20" :
                             "bg-white/5 text-text-muted border border-white/10"
                          )}>
                             {job.status}
                          </span>
                       </td>
                       <td className="px-8 py-5 text-right font-bold text-text-muted italic">{job.date}</td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );
}
