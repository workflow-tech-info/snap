import { 
  Lock,
  FileCheck,
  ShieldCheck
} from 'lucide-react';
import { cn } from '../../../lib/utils';

export function AdminCompliance() {
  const complianceItems = [
    { id: 'RTO-4421', type: 'RTO Approval', vehicle: 'DL01AB1234', date: 'Installed + 2 Days', status: 'Approved' },
    { id: 'CERT-552', type: 'Install Certificate', vehicle: 'MH02XY5532', date: 'Pending Verification', status: 'Pending' },
    { id: 'TEST-12', type: 'Cylinder Hydro-test', vehicle: 'KA01PQ8891', date: 'Due in 11 months', status: 'Valid' },
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight italic uppercase tracking-tighter text-white">Compliance & Regulatory</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-card/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-4">
            <ShieldCheck className="w-10 h-10 text-accent" />
            <h3 className="text-xl font-bold italic">RTO Interface</h3>
            <p className="text-xs text-text-muted italic leading-relaxed">Direct gateway for regional transport office approvals and digital documentation sync.</p>
         </div>
         <div className="bg-card/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-4">
            <FileCheck className="w-10 h-10 text-primary" />
            <h3 className="text-xl font-bold italic">Digital Certs</h3>
            <p className="text-xs text-text-muted italic leading-relaxed">Blockchain-verified installation certificates issued for every Snap conversion.</p>
         </div>
         <div className="bg-card/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-4 opacity-40">
            <Lock className="w-10 h-10 text-text-muted" />
            <h3 className="text-xl font-bold italic">Audit Logs</h3>
            <p className="text-xs text-text-muted italic leading-relaxed">Immutable operational history for compliance audits and insurance verification.</p>
         </div>
      </div>

      <div className="bg-card/40 border border-white/5 rounded-[40px] overflow-hidden">
         <table className="w-full text-left border-collapse">
            <thead>
               <tr className="border-b border-white/5 text-[10px] font-black text-text-muted uppercase tracking-widest bg-white/5">
                  <th className="px-8 py-4">ID</th>
                  <th className="px-8 py-4">Type</th>
                  <th className="px-8 py-4">Vehicle</th>
                  <th className="px-8 py-4">Timeline</th>
                  <th className="px-8 py-4 text-right">Status</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
               {complianceItems.map((item) => (
                  <tr key={item.id} className="text-sm hover:bg-white/5 transition-all">
                     <td className="px-8 py-5 font-bold italic text-white">{item.id}</td>
                     <td className="px-8 py-5 font-medium">{item.type}</td>
                     <td className="px-8 py-5 font-bold italic text-text-muted">{item.vehicle}</td>
                     <td className="px-8 py-5 text-text-muted">{item.date}</td>
                     <td className="px-8 py-5 text-right">
                        <span className={cn(
                           "px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest",
                           item.status === 'Approved' ? "bg-accent/20 text-accent" : "bg-white/10 text-text-muted"
                        )}>{item.status}</span>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
    </div>
  );
}
