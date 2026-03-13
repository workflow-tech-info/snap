import { cn } from '../../../lib/utils';
import demoAdmin from '../../../data/demo-admin.json';

export function AdminServiceJobs() {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight italic uppercase tracking-tighter text-white">Service Workflows</h1>
      </div>

      <div className="bg-card/40 border border-white/5 rounded-[40px] overflow-hidden">
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="border-b border-white/5 text-[10px] font-black text-text-muted uppercase tracking-widest bg-white/5">
                     <th className="px-8 py-4">Job ID</th>
                     <th className="px-8 py-4">Vehicle</th>
                     <th className="px-8 py-4">Issue Description</th>
                     <th className="px-8 py-4">Technician</th>
                     <th className="px-8 py-4 text-right">Status</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  {demoAdmin.service_jobs.map((job) => (
                    <tr key={job.id} className="hover:bg-white/5 transition-colors group text-sm">
                       <td className="px-8 py-5 font-black text-white italic">{job.id}</td>
                       <td className="px-8 py-5 font-bold italic text-text-muted">{job.vin}</td>
                       <td className="px-8 py-5 font-medium leading-relaxed pr-10">{job.issue}</td>
                       <td className="px-8 py-5 text-text-muted italic">{job.technician}</td>
                       <td className="px-8 py-5 text-right">
                          <span className={cn(
                             "px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest",
                             job.status === 'Completed' ? "bg-accent/20 text-accent" : "bg-primary/20 text-primary animate-pulse"
                          )}>{job.status}</span>
                       </td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );
}
