import { cn } from '../../../lib/utils';
import demoAdmin from '../../../data/demo-admin.json';

export function AdminDevices() {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight italic uppercase tracking-tighter text-white">Device provisioning</h1>
      </div>

      <div className="bg-card/40 border border-white/5 rounded-[40px] overflow-hidden">
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="border-b border-white/5 text-[10px] font-black text-text-muted uppercase tracking-widest bg-white/5">
                     <th className="px-8 py-4">Device ID</th>
                     <th className="px-8 py-4">ECU Model</th>
                     <th className="px-8 py-4">Assigned Vehicle</th>
                     <th className="px-8 py-4">Firmware</th>
                     <th className="px-8 py-4">Last Seen</th>
                     <th className="px-8 py-4 text-right">Status</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  {demoAdmin.devices.map((d) => (
                    <tr key={d.id} className="hover:bg-white/5 transition-colors group text-sm">
                       <td className="px-8 py-5 font-black text-primary italic uppercase tracking-widest">{d.id}</td>
                       <td className="px-8 py-5 font-bold italic text-white">{d.model}</td>
                       <td className="px-8 py-5 font-bold text-text-muted italic">{d.vin}</td>
                       <td className="px-8 py-5 font-mono text-[10px] text-text-muted">{d.version}</td>
                       <td className="px-8 py-5 text-text-muted italic">{d.last_seen}</td>
                       <td className="px-8 py-5 text-right">
                          <span className={cn(
                             "px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest",
                             d.status === 'Online' ? "bg-accent/20 text-accent" : "bg-danger/20 text-danger"
                          )}>{d.status}</span>
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
