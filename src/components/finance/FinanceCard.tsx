import { BadgePercent, TrendingUp, Landmark } from 'lucide-react';

interface FinanceProps {
  data: {
    conversion_cost_total: number;
    breakdown: { kit: number; cylinder: number; labour_rto: number };
    emi_sample: { lender: string; tenor_months: number; emi_monthly: number; remaining: number };
    avg_monthly_km: number;
    petrol_cost_per_l: number;
    cng_cost_per_kg: number;
    predicted_monthly_savings: number;
    breakeven_months: number;
    lifetime_savings_to_date: number;
  };
}

export function FinanceCard({ data }: FinanceProps) {
  // Precalculate widths for meter
  const progressRatio = Math.min(100, Math.max(0, (data.lifetime_savings_to_date / data.conversion_cost_total) * 100));
  
  return (
    <div className="bg-card/40 backdrop-blur-xl border border-white/5 shadow-2xl rounded-3xl p-6 flex flex-col gap-6 relative overflow-hidden">
      
      <div className="absolute top-1/2 right-0 w-32 h-64 bg-accent/5 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2" />

      <h2 className="text-lg font-bold text-text-primary tracking-tight flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-accent" /> Financials & ROI
      </h2>

      {/* Conversion Cost & EMI */}
      <div className="bg-white/5 rounded-2xl p-4 flex items-center justify-between gap-4 border border-white/5">
         <div className="flex flex-col gap-1 w-1/2">
            <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider flex items-center gap-1.5"><BadgePercent className="w-3.5 h-3.5" /> Conversion Cost</span>
            <span className="text-2xl font-bold text-text-primary tracking-tight">₹{data.conversion_cost_total.toLocaleString('en-IN')}</span>
            <span className="text-[10px] text-accent font-semibold uppercase tracking-wider mt-1 bg-accent/10 w-max px-2 py-0.5 rounded-full">Paid in full</span>
         </div>
         <div className="w-[1px] h-12 bg-white/10" />
         <div className="flex flex-col gap-1 w-1/2 pl-2">
            <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider flex items-center gap-1.5"><Landmark className="w-3.5 h-3.5" /> Loan Option</span>
            <span className="text-sm font-bold text-text-primary tracking-tight">{data.emi_sample.lender}</span>
            <span className="text-xs text-text-muted font-medium mt-0.5">{data.emi_sample.tenor_months}M @ ₹{data.emi_sample.emi_monthly.toLocaleString('en-IN')}/mo</span>
         </div>
      </div>

      {/* Breakeven Calculator UI */}
      <div className="border border-white/5 rounded-2xl p-5 flex flex-col gap-5">
         <div className="flex justify-between items-center text-sm font-medium">
            <span className="text-text-muted">Driving Avg</span>
            <span className="font-bold text-text-primary">{data.avg_monthly_km.toLocaleString('en-IN')} km/mo</span>
         </div>
         
         <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1 border-l-2 border-primary/20 pl-3">
               <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Petrol / L</span>
               <span className="text-lg font-bold text-text-primary">₹{data.petrol_cost_per_l}</span>
            </div>
            <div className="flex flex-col gap-1 border-l-2 border-accent/20 pl-3">
               <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider">CNG / kg</span>
               <span className="text-lg font-bold text-text-primary">₹{data.cng_cost_per_kg}</span>
            </div>
         </div>

         <div className="flex justify-between items-center text-sm bg-accent/10 border border-accent/20 p-3 rounded-xl mt-1">
            <span className="text-text-muted font-bold text-xs uppercase tracking-wider">Est. Monthly Savings</span>
            <span className="font-bold text-accent text-lg">₹{data.predicted_monthly_savings.toLocaleString('en-IN')}</span>
         </div>
      </div>

      {/* Breakeven Progress Meter */}
      <div className="flex flex-col gap-3 mt-auto pt-2">
         <div className="flex justify-between items-end pb-1">
            <div className="flex flex-col">
               <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider mb-1">Lifetime Savings</span>
               <span className="text-2xl font-bold text-accent tracking-tighter shadow-accent/20 drop-shadow-lg">₹{data.lifetime_savings_to_date.toLocaleString('en-IN')}</span>
            </div>
            <div className="text-right">
               <span className="text-sm font-bold text-text-primary">{data.breakeven_months} months</span>
               <div className="text-[10px] text-text-muted font-semibold uppercase tracking-wider mt-0.5">to Break-even</div>
            </div>
         </div>
         
         {/* Custom Progress Bar component inline */}
         <div className="relative w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/10 shadow-inner">
            <div 
               className="absolute top-0 left-0 h-full bg-gradient-to-r from-warn via-accent to-primary rounded-full transition-all duration-1000 ease-out"
               style={{ width: `${progressRatio}%` }} 
            />
            {/* Markers */}
            <div className="absolute top-0 left-1/4 w-[1px] h-full bg-black/30" />
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-black/30" />
            <div className="absolute top-0 left-[75%] w-[1px] h-full bg-black/30" />
         </div>
         
         <div className="flex justify-between items-center text-[10px] font-bold text-text-muted uppercase tracking-widest mt-1">
            <span>Install</span>
            <span>Target: 2027-01-09</span>
         </div>
      </div>
      
    </div>
  );
}
