import { 
  IndianRupee, 
  TrendingUp, 
  ArrowUpRight, 
  Download
} from 'lucide-react';
import fleetData from '../../../data/demo-fleet.json';

export function FleetFinance() {
  const f = fleetData.fleet_summary.finance;

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight italic uppercase tracking-tighter">Finance & ROI</h1>
        <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold transition-all hover:bg-white/10 group">
          <Download className="w-4 h-4" /> Financial Audit
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="bg-card/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-6">
            <IndianRupee className="w-10 h-10 text-primary" />
            <div className="flex flex-col gap-1">
               <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">Total Conversion Investment</span>
               <span className="text-3xl font-black italic">₹1.82 Cr</span>
            </div>
         </div>
         <div className="bg-accent/10 border border-accent/20 rounded-[40px] p-8 flex flex-col gap-6">
            <TrendingUp className="w-10 h-10 text-accent" />
            <div className="flex flex-col gap-1">
               <span className="text-[10px] font-black text-accent uppercase tracking-widest">Lifetime Fuel Savings</span>
               <span className="text-3xl font-black italic">₹1.42 Cr</span>
            </div>
         </div>
         <div className="bg-primary/10 border border-primary/20 rounded-[40px] p-8 flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
            <span className="text-[10px] font-black text-text-primary uppercase tracking-widest">ROI Achieved</span>
            <span className="text-5xl font-black italic text-white">{f.roi_pct}%</span>
            <p className="text-xs font-bold text-text-muted italic">Break-even estimated in 4 months</p>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="bg-card/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-6">
            <h3 className="text-xl font-bold italic uppercase tracking-tighter">Operational Unit Economics</h3>
            <div className="space-y-6 pt-4">
               <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-text-muted">Cost Per KM (Petrol)</span>
                  <span className="text-lg font-black text-danger">₹{f.cost_per_km_petrol.toFixed(2)}</span>
               </div>
               <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-text-muted">Cost Per KM (CNG)</span>
                  <span className="text-lg font-black text-accent">₹{f.cost_per_km_cng.toFixed(2)}</span>
               </div>
               <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: '30%' }} />
               </div>
               <p className="text-xs font-bold text-accent italic">Savings: ₹5.40 saved for every km driven on CNG</p>
            </div>
         </div>
         
         <div className="bg-card/60 backdrop-blur-xl border border-white/5 rounded-[40px] p-8 flex flex-col justify-center gap-6">
            <h3 className="text-sm font-black text-text-muted uppercase tracking-widest">Monthly Growth Trend</h3>
            <div className="flex items-center gap-8">
               <div className="flex flex-col">
                  <span className="text-4xl font-black text-white italic">+₹1.2L</span>
                  <span className="text-xs font-bold text-accent italic">Avg monthly increment</span>
               </div>
               <ArrowUpRight className="w-12 h-12 text-accent" />
            </div>
         </div>
      </div>
    </div>
  );
}
