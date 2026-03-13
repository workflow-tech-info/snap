import { FinanceCard } from '../components/finance/FinanceCard';
import { DollarSign, Wallet, TrendingUp, ArrowUpRight } from 'lucide-react';
import demoData from '../data/demo-owner-vehicle.json';

export function FinanceView() {
  const f = demoData.finance;
  
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Finance & Savings</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 flex flex-col gap-8">
           <FinanceCard data={f} />
           
           <div className="bg-accent/10 border border-accent/20 rounded-3xl p-6 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                 <TrendingUp className="w-5 h-5 text-accent" />
                 <h3 className="font-bold text-accent">Efficiency Bonus</h3>
              </div>
              <p className="text-xs text-text-muted font-medium">You saved an additional <span className="text-accent font-bold">₹840</span> this month compared to the regional average CNG user.</p>
           </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card/40 border border-white/5 rounded-3xl p-6 flex flex-col gap-6">
                 <div className="flex items-center gap-2 justify-between">
                    <div className="flex items-center gap-2">
                       <DollarSign className="w-5 h-5 text-primary" />
                       <h3 className="font-bold text-text-primary">Conversion Cost</h3>
                    </div>
                    <span className="text-xs font-bold text-text-muted">₹{f.conversion_cost_total} Total</span>
                 </div>
                 <div className="flex flex-col gap-4">
                    {Object.entries(f.breakdown).map(([item, cost], i) => (
                       <div key={i} className="flex justify-between items-center text-sm border-b border-white/5 last:border-0 pb-2 last:pb-0">
                          <span className="text-text-muted capitalize">{item.replace('_', ' ')}</span>
                          <span className="text-text-primary font-bold">₹{String(cost)}</span>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="bg-card/40 border border-white/5 rounded-3xl p-6 flex flex-col gap-6">
                 <div className="flex items-center gap-2">
                    <Wallet className="w-5 h-5 text-warn" />
                    <h3 className="font-bold text-text-primary">EMI Plan</h3>
                 </div>
                 <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-text-muted">Monthly Installment</span>
                       <span className="text-text-primary font-bold">₹{f.emi_sample.emi_monthly}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold text-accent">
                       <span>Status</span>
                       <span>{f.emi_sample.remaining === 0 ? "Completed" : "Active"}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-text-muted">Tenure</span>
                       <span className="text-text-primary font-bold">{f.emi_sample.tenor_months} Months</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mt-2">
                       <div className="h-full bg-accent w-full" />
                    </div>
                 </div>
              </div>
           </div>

           <div className="bg-card/40 border border-white/5 rounded-3xl p-8 flex flex-col gap-6 relative overflow-hidden text-balance">
              <div className="absolute top-0 right-0 p-8">
                 <ArrowUpRight className="w-8 h-8 text-primary opacity-20" />
              </div>
              <h3 className="text-lg font-bold">Long-term Comparison</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                 <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Petrol Cost (Est)</span>
                    <span className="text-xl font-bold line-through opacity-50">₹14,200</span>
                 </div>
                 <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-text-muted font-bold uppercase tracking-widest">CNG Cost</span>
                    <span className="text-xl font-bold">₹4,840</span>
                 </div>
                 <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-accent font-bold uppercase tracking-widest">Net Savings</span>
                    <span className="text-xl font-bold text-accent">₹{f.lifetime_savings_to_date}</span>
                 </div>
                 <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Savings / Monthly</span>
                    <span className="text-xl font-bold">₹{f.predicted_monthly_savings}</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
