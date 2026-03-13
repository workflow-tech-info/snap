import { 
  ArrowRight
} from 'lucide-react';
import demoAdmin from '../../../data/demo-admin.json';

export function AdminVehicles() {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight italic uppercase tracking-tighter text-white">Platform Fleet Registry</h1>
      </div>

      <div className="bg-card/40 border border-white/5 rounded-[40px] overflow-hidden">
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="border-b border-white/5 text-[10px] font-black text-text-muted uppercase tracking-widest bg-white/5">
                     <th className="px-8 py-4">Vehicle ID</th>
                     <th className="px-8 py-4">Owner</th>
                     <th className="px-8 py-4">City</th>
                     <th className="px-8 py-4">Vehicle Model</th>
                     <th className="px-8 py-4">Kit Version</th>
                     <th className="px-8 py-4 text-center">Health</th>
                     <th className="px-8 py-4 text-right">Action</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  {demoAdmin.installations.map((v) => (
                    <tr key={v.vin} className="hover:bg-white/5 transition-colors group text-sm">
                       <td className="px-8 py-5 font-black text-white italic uppercase tracking-widest">{v.vin}</td>
                       <td className="px-8 py-5 font-medium">{v.customer}</td>
                       <td className="px-8 py-5 text-text-muted italic">{v.workshop.split(' ')[0]}</td>
                       <td className="px-8 py-5 font-bold">Maruti WagonR</td>
                       <td className="px-8 py-5 font-mono text-[10px] text-primary">{v.kit}</td>
                       <td className="px-8 py-5 text-center">
                          <div className="flex flex-col items-center gap-1">
                             <span className="font-black text-xs text-accent italic">91/100</span>
                             <div className="w-12 h-1 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-accent" style={{ width: '91%' }} />
                             </div>
                          </div>
                       </td>
                       <td className="px-8 py-5 text-right">
                          <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-primary transition-all group-hover:scale-105">
                             <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-white" />
                          </button>
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
