import { CheckCircle2, AlertTriangle, Activity } from 'lucide-react';
import { Gauge } from '../telemetry/Gauge';

interface ConversionHealthProps {
  health: {
    combustion_efficiency_pct: number;
    injector_balance_score: number;
    misfire_30d: number;
    regulator_pressure_stddev_bar: number;
    calibration_drift_pct: number;
    qa_last_check: { date: string; installer: string; result: string };
    pressure_test: { result: string; leak_rate_bar_per_hr: number };
  };
}

export function ConversionHealthCard({ health }: ConversionHealthProps) {
  return (
    <div className="bg-card/40 backdrop-blur-xl border border-white/5 shadow-2xl rounded-3xl p-6 flex flex-col gap-6 relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-[80px] -z-10" />

      <h2 className="text-lg font-bold text-text-primary tracking-tight">Conversion Health</h2>

      <div className="flex items-center justify-between gap-6">
        <Gauge 
           label="Combustion Eff" 
           value={health.combustion_efficiency_pct} 
           min={0} max={100} 
           unit="%" 
           color="accent" 
           size={110} 
           strokeWidth={10} 
        />
        
        <div className="flex-1 flex flex-col gap-4">
           {/* Injector Balance Score */}
           <div>
             <div className="flex justify-between items-center mb-2">
               <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Injector Balance</span>
               <span className="text-sm font-bold text-text-primary">{health.injector_balance_score} <span className="text-text-muted font-normal text-xs">/ 100</span></span>
             </div>
             <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
               <div className="h-full bg-gradient-to-r from-warn to-accent rounded-full" style={{ width: `${health.injector_balance_score}%` }} />
             </div>
             <p className="text-[10px] text-warn font-semibold uppercase tracking-wide mt-1.5 flex items-center gap-1">
               <AlertTriangle className="w-3 h-3" /> Cyl 3 slight drift
             </p>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
         <div className="bg-white/5 rounded-2xl p-4 flex flex-col gap-1">
            <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider flex items-center gap-1.5">
               <Activity className="w-3 h-3 text-warn" /> Misfires (30d)
            </span>
            <div className="flex items-end gap-2 mt-1">
               <span className="text-xl font-bold text-text-primary">{health.misfire_30d}</span>
               <span className="text-xs text-text-muted font-medium mb-1">events</span>
            </div>
            {/* Fake sparkline */}
            <svg className="w-full h-6 mt-2 overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
               <path d="M0,15 Q10,5 20,15 T40,15 T60,5 T80,15 T100,5" fill="none" stroke="var(--color-warn)" strokeWidth="2" strokeLinecap="round" className="opacity-80" />
            </svg>
         </div>

         <div className="bg-white/5 rounded-2xl p-4 flex flex-col gap-2 justify-between">
            <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Regulator Stability</span>
            <div className="flex flex-col gap-0.5">
               <span className="text-lg font-bold text-text-primary">σ {health.regulator_pressure_stddev_bar}</span>
               <span className="text-xs text-text-muted font-medium">bar std dev</span>
            </div>
            
            <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider border-t border-white/5 pt-2 mt-1">Cal Drift: <span className={health.calibration_drift_pct > 0.5 ? 'text-warn' : 'text-accent'}>+{health.calibration_drift_pct}%</span></span>
         </div>
      </div>

      <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col gap-3">
         <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-text-muted">Last QA Check</span>
            <span className="font-bold text-accent flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> Passed</span>
         </div>
         <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-text-muted">Pressure Leak Test</span>
            <span className="font-bold text-text-primary text-right">{health.pressure_test.leak_rate_bar_per_hr} <span className="text-[10px] text-text-muted uppercase tracking-wider">bar/hr</span></span>
         </div>
         <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider border-t border-white/5 pt-3 mt-1 flex justify-between">
            <span>Signed:</span>
            <span className="text-text-primary">{health.qa_last_check.installer}</span>
         </div>
      </div>
    
    </div>
  );
}
