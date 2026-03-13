import { 
  Sparkles, 
  TrendingUp, 
  Target, 
  AlertCircle 
} from 'lucide-react';
import { cn } from '../../lib/utils';
import demoOem from '../../data/demo-oem.json';

export function SmartMfgInsights() {
  return (
    <div className="bg-card/40 border border-white/5 rounded-[40px] p-10 flex flex-col gap-10 shadow-3xl shadow-black/60 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-20 -mt-20 group-hover:bg-primary/20 transition-all duration-1000" />
      
      <div className="flex items-center gap-4 relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(11,104,255,0.2)]">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-black italic tracking-tighter uppercase text-white">Smart Mfg Intelligence</h2>
          <span className="text-[10px] font-black text-primary uppercase tracking-widest leading-none">Engineering Recommendations</span>
        </div>
      </div>

      <div className="flex flex-col gap-6 relative z-10">
        {demoOem.insights.map((insight, i) => (
          <div key={i} className="p-8 bg-navy/60 border border-white/5 rounded-[32px] group/item hover:border-primary/40 transition-all cursor-pointer">
            <div className="flex items-center gap-3 mb-4">
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center",
                insight.impact === 'CRITICAL' ? "bg-danger/10 text-danger" : "bg-accent/10 text-accent font-black "
              )}>
                {insight.impact === 'CRITICAL' ? <AlertCircle className="w-5 h-5" /> : <Target className="w-5 h-5" />}
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black opacity-40 tracking-[0.2em] italic uppercase lowercase pr-10">{insight.type}</span>
                <span className={cn(
                  "text-[10px] font-black uppercase tracking-widest leading-none",
                  insight.impact === 'CRITICAL' ? "text-danger" : "text-accent"
                )}>{insight.impact} IMPACT</span>
              </div>
            </div>
            <p className="text-sm text-white font-bold italic tracking-tight leading-relaxed pr-4">{insight.message}</p>
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-white/5 mt-auto relative z-10">
         <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-primary/20 transition-all">
            <div className="flex items-center gap-3">
               <TrendingUp className="w-4 h-4 text-primary" />
               <span className="text-[10px] font-black uppercase text-text-muted italic tracking-widest">Prediction Accuracy</span>
            </div>
            <span className="text-sm font-black italic text-primary">98.4%</span>
         </div>
      </div>
    </div>
  );
}
