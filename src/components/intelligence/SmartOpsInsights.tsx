import { 
  Sparkles, 
  TrendingUp,
  Target,
  AlertCircle
} from 'lucide-react';
import { cn } from '../../lib/utils';
import demoAdmin from '../../data/demo-admin.json';

export function SmartOpsInsights() {
  const insights = demoAdmin.insights;

  return (
    <div className="bg-card/40 border border-white/5 rounded-[40px] p-10 flex flex-col gap-8 h-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-white shadow-[0_0_20px_rgba(11,104,255,0.4)]">
            <Sparkles className="w-5 h-5 fill-current" />
          </div>
          <h2 className="text-2xl font-black italic tracking-tight">Ops Intelligence</h2>
        </div>
        <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-text-muted">
           Admin Engine v4.1
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {insights.map((insight, i) => (
          <div 
            key={i} 
            className={cn(
               "p-6 rounded-3xl border transition-all hover:translate-x-1 cursor-pointer group flex flex-col gap-3",
               insight.impact === 'CRITICAL' ? "bg-danger/5 border-danger/20 hover:bg-danger/10" :
               insight.type === 'EFFICIENCY' ? "bg-accent/5 border-accent/20 hover:bg-accent/10" :
               "bg-white/5 border-white/10 hover:bg-white/10"
            )}
          >
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                  {insight.impact === 'CRITICAL' ? <AlertCircle className="w-4 h-4 text-danger" /> :
                   insight.type === 'EFFICIENCY' ? <TrendingUp className="w-4 h-4 text-accent" /> :
                   <Target className="w-4 h-4 text-primary" />}
                  <span className={cn(
                     "text-[10px] font-black uppercase tracking-widest",
                     insight.impact === 'CRITICAL' ? "text-danger" :
                     insight.type === 'EFFICIENCY' ? "text-accent" : "text-primary"
                  )}>
                     {insight.type} Insight
                  </span>
               </div>
               <span className="text-[10px] font-black text-text-muted/40 uppercase italic tracking-widest">{insight.impact} Impact</span>
            </div>
            <p className="text-sm font-bold text-text-primary leading-relaxed pr-8 italic">
               "{insight.message}"
            </p>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-8 border-t border-white/5 flex flex-col gap-4">
         <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-text-muted">Operational Confidence</span>
            <span className="text-sm font-black italic text-primary">94.8%</span>
         </div>
         <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-primary shadow-[0_0_10px_#0B68FF]" style={{ width: '94.8%' }} />
         </div>
      </div>
    </div>
  );
}
