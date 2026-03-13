import { ComplianceCard } from '../components/compliance/ComplianceCard';
import { FileText, Download, Calendar, CheckCircle2 } from 'lucide-react';
import demoData from '../data/demo-owner-vehicle.json';

export function ComplianceView({ onDownloadRTO, onShareInsurer }: { onDownloadRTO: () => void, onShareInsurer: () => void }) {
  const c = demoData.compliance;
  const k = demoData.kit_and_cylinder;
  
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Compliance & Docs</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 flex flex-col gap-8">
           <ComplianceCard data={c} onDownloadRTO={onDownloadRTO} onShareInsurer={onShareInsurer} />
        </div>

        <div className="lg:col-span-8 flex flex-col gap-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card/40 border border-white/5 rounded-3xl p-6 flex flex-col gap-6">
                 <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-text-primary">Validity Dashboard</h3>
                 </div>
                 <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                       <span className="text-text-muted">Installation Cert</span>
                       <span className="text-accent font-bold">Valid</span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                       <span className="text-text-muted">Hydro-test Expiry</span>
                       <span className="text-text-primary font-bold">{k.hydro_test_due}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-text-muted">RTO Endorsement</span>
                       <span className="text-accent font-bold">Done</span>
                    </div>
                 </div>
              </div>

              <div className="bg-card/40 border border-white/5 rounded-3xl p-6 flex flex-col gap-6">
                 <div className="flex items-center gap-2">
                    <Download className="w-5 h-5 text-accent" />
                    <h3 className="font-bold text-text-primary">Download Center</h3>
                 </div>
                 <div className="flex flex-col gap-2">
                    <button onClick={onDownloadRTO} className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between group">
                       <span className="text-xs font-bold">RTO RC (C-Endorsement)</span>
                       <FileText className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
                    </button>
                    <button className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between group">
                       <span className="text-xs font-bold">Installation Certificate</span>
                       <FileText className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
                    </button>
                    <button className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between group">
                       <span className="text-xs font-bold">Emissions Compliance</span>
                       <FileText className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
                    </button>
                 </div>
              </div>
           </div>

           <div className="bg-accent/10 border border-accent/20 rounded-3xl p-8 flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                 <CheckCircle2 className="w-8 h-8 text-accent" />
              </div>
              <div className="flex flex-col gap-1">
                 <h3 className="text-lg font-bold text-accent">Fully Compliant</h3>
                 <p className="text-sm text-text-muted font-medium">Your vehicle has all required regulatory stamps for CNG operations in India. Insurance provider has been notified.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
