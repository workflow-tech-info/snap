import { Sparkles, TrendingDown, AlertTriangle, Lightbulb } from 'lucide-react';
import { cn } from '../../lib/utils';

interface Insight {
  id: string;
  type: 'efficiency' | 'warning' | 'advice' | 'saving';
  text: string;
}

const defaultInsights: Insight[] = [
  { id: '1', type: 'efficiency', text: 'Fuel efficiency dropped 8% in the last 3 trips.' },
  { id: '2', type: 'warning', text: 'Injector imbalance detected in cylinder 3.' },
  { id: '3', type: 'advice', text: 'Regulator pressure slightly unstable. Service recommended within 10 days.' },
  { id: '4', type: 'saving', text: 'Vehicle could save ₹320 more this month by maintaining RPM under 3000.' },
];

export function SmartInsights() {
  return (
    <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col gap-4 overflow-hidden relative">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-5 h-5 text-primary" strokeWidth={1.5} />
        <h2 className="text-lg font-semibold text-text-primary tracking-tight">Smart Insights</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {defaultInsights.map((insight) => (
          <div 
            key={insight.id}
            className="p-4 rounded-2xl bg-white/5 border border-white/5 flex gap-4 items-start hover:bg-white/[0.08] transition-all group"
          >
            <div className={cn(
              "p-2.5 rounded-xl shrink-0 group-hover:scale-105 transition-transform",
              insight.type === 'efficiency' && "bg-danger/10 text-danger",
              insight.type === 'warning' && "bg-warn/10 text-warn",
              insight.type === 'advice' && "bg-primary/10 text-primary",
              insight.type === 'saving' && "bg-accent/10 text-accent",
            )}>
              {insight.type === 'efficiency' && <TrendingDown className="w-4 h-4" strokeWidth={2} />}
              {insight.type === 'warning' && <AlertTriangle className="w-4 h-4" strokeWidth={2} />}
              {insight.type === 'advice' && <Lightbulb className="w-4 h-4" strokeWidth={2} />}
              {insight.type === 'saving' && <IndianRupee className="w-4 h-4" strokeWidth={2} />}
            </div>
            <p className="text-[13px] font-medium text-text-muted leading-relaxed">
              {insight.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Minimal dependency for helper icon
import { IndianRupee } from 'lucide-react';
