import { FileText, Shield, FileCheck, Share, Download } from 'lucide-react';

interface ComplianceProps {
  data: {
    rto: { status: string; ref: string; pdf: string };
    insurance: { provider: string; policy_number: string; premium_yearly: number; endorsement_received: boolean; claims_pending: number };
  };
  onDownloadRTO: () => void;
  onShareInsurer: () => void;
}

export function ComplianceCard({ data, onDownloadRTO, onShareInsurer }: ComplianceProps) {
  return (
    <div className="bg-card/40 backdrop-blur-xl border border-white/5 shadow-2xl rounded-3xl p-6 flex flex-col gap-6 relative overflow-hidden">
      
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-warn/5 rounded-full blur-[80px] -z-10" />

      <h2 className="text-lg font-bold text-text-primary tracking-tight flex items-center gap-2">
        <FileCheck className="w-5 h-5 text-gray-400" /> Compliance
      </h2>

      {/* RTO Certificate UI */}
      <div className="bg-white/5 border border-white/5 rounded-2xl p-5 flex flex-col gap-4 group">
        <div className="flex justify-between items-start">
           <div className="flex flex-col gap-1">
              <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider flex items-center gap-1.5"><FileText className="w-3.5 h-3.5" /> RTO RC Updates</span>
              <span className="text-sm font-bold text-text-primary">PETROL + CNG</span>
              <span className="font-mono text-xs text-white/50">{data.rto.ref}</span>
           </div>
           <div className="bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border border-accent/20 inline-flex items-center">
              Active
           </div>
        </div>
        
        <button 
           onClick={onDownloadRTO}
           className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-text-primary text-xs font-bold py-2.5 rounded-xl transition-colors border border-white/10 group-hover:border-white/20"
        >
           <Download className="w-4 h-4 text-text-muted" /> Download PDF
        </button>
      </div>

      {/* Insurance UI */}
      <div className="bg-white/5 border border-white/5 rounded-2xl p-5 flex flex-col gap-4 relative overflow-hidden group">
         <div className="flex justify-between items-start z-10">
           <div className="flex flex-col gap-1">
              <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-primary" /> Motor Insurance</span>
              <span className="text-sm font-bold text-text-primary">{data.insurance.provider}</span>
              <span className="font-mono text-xs text-white/50">{data.insurance.policy_number}</span>
           </div>
         </div>

         <div className="grid grid-cols-2 gap-3 text-xs z-10">
            <div className="bg-black/20 rounded-lg p-2 flex flex-col gap-0.5">
               <span className="text-[10px] text-text-muted uppercase font-semibold">Premium</span>
               <span className="font-bold text-text-primary">₹{data.insurance.premium_yearly.toLocaleString('en-IN')} / yr</span>
            </div>
            <div className="bg-black/20 rounded-lg p-2 flex flex-col gap-0.5">
               <span className="text-[10px] text-text-muted uppercase font-semibold">Endorsement</span>
               <span className={`font-bold ${data.insurance.endorsement_received ? 'text-accent' : 'text-warn'}`}>
                 {data.insurance.endorsement_received ? 'Received ✓' : 'Pending'}
               </span>
            </div>
         </div>

         <button 
            onClick={onShareInsurer}
            className="w-full flex items-center gap-2 justify-center bg-primary/10 hover:bg-primary border border-primary/20 hover:border-primary text-primary hover:text-white text-xs font-bold py-3 rounded-xl transition-all z-10 mt-1"
         >
            <Share className="w-4 h-4" /> Notify Insurer (1-click via Email)
         </button>
      </div>

      <div className="text-[10px] text-text-muted font-medium text-center flex items-center justify-center gap-2 mt-2">
         <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse blur-[1px]" />
         Roadworthy check: Completed
      </div>

    </div>
  );
}
