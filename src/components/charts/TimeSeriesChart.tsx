import { 
  ResponsiveContainer, 
  ComposedChart, 
  Line, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid,
  ReferenceLine
} from 'recharts';
import { ArrowDownUp } from 'lucide-react';

interface TimeSeriesProps {
  data: {
    timestamps_iso: string[];
    rpm: number[];
    gas_pressure_bar: number[];
    lambda: number[];
    regulator_pressure_bar: number[];
  };
}

export function TimeSeriesChart({ data }: TimeSeriesProps) {
  // Format the arrays into array of objects for Recharts
  const chartData = data.timestamps_iso.map((ts, i) => {
    const d = new Date(ts);
    return {
      timeStr: d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      timestamp: ts,
      rpm: data.rpm[i],
      gasPressure: data.gas_pressure_bar[i],
      lambda: data.lambda[i],
      regPressure: data.regulator_pressure_bar[i]
    };
  });

  return (
    <div className="bg-card/40 backdrop-blur-xl border border-white/5 shadow-2xl rounded-3xl p-6 flex flex-col gap-6 w-full h-full relative">
      <div className="flex items-center justify-between z-10">
        <h2 className="text-lg font-bold text-text-primary tracking-tight">Trip Telemetry Overlay</h2>
        <div className="flex items-center gap-4 text-xs font-semibold text-text-muted">
           <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-primary" /> RPM</div>
           <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-accent" /> Lambda</div>
           <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-warn" /> Gas Pres</div>
           <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-white/20" /> Reg Pres</div>
        </div>
      </div>
      
      {/* Chart A: Main Overlay */}
      <div className="w-full h-64 md:h-80 -ml-4 z-10">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorReg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="rgba(255,255,255,0.1)" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="rgba(255,255,255,0.1)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis dataKey="timeStr" stroke="rgba(255,255,255,0.2)" fontSize={10} tickMargin={10} minTickGap={30} />
            
            <YAxis yAxisId="rpm" orientation="left" stroke="rgba(255,255,255,0.2)" fontSize={10} tickCount={5} domain={[0, 4500]} />
            <YAxis yAxisId="lambda" orientation="right" stroke="rgba(255,255,255,0)" fontSize={10} domain={[0.8, 1.2]} hide />
            <YAxis yAxisId="pressure" orientation="right" stroke="rgba(255,255,255,0)" fontSize={10} domain={[0, 250]} hide />
            
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(11, 18, 32, 0.95)', backdropFilter: 'blur(10px)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
              itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
              labelStyle={{ color: '#9FB4D6', fontSize: '10px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}
            />
            
            {/* References for Switch Events (mock indices 12 and 22 for switch events) */}
            <ReferenceLine x={chartData[12]?.timeStr} stroke="rgba(0, 201, 114, 0.4)" strokeDasharray="3 3" yAxisId="rpm" />
            <ReferenceLine x={chartData[22]?.timeStr} stroke="rgba(255, 159, 67, 0.4)" strokeDasharray="3 3" yAxisId="rpm" />

            <Area yAxisId="pressure" type="monotone" dataKey="regPressure" name="Reg Pres (bar)" stroke="rgba(255,255,255,0.4)" fillOpacity={1} fill="url(#colorReg)" />
            <Line yAxisId="rpm" type="monotone" dataKey="rpm" name="RPM" stroke="var(--color-primary)" strokeWidth={2} dot={false} activeDot={{ r: 6, strokeWidth: 0 }} />
            <Line yAxisId="pressure" type="monotone" dataKey="gasPressure" name="Gas Pres (bar)" stroke="var(--color-warn)" strokeWidth={2} dot={false} />
            <Line yAxisId="lambda" type="monotone" dataKey="lambda" name="Lambda" stroke="var(--color-accent)" strokeWidth={2} dot={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Chart B: Switch Timeline Strip */}
      <div className="mt-2 w-full pt-4 border-t border-white/5 flex flex-col gap-3 z-10">
         <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider flex items-center gap-2">
           <ArrowDownUp className="w-3.5 h-3.5" />
           Switch Timeline
         </h3>
         <div className="flex items-center gap-4 overflow-x-auto hide-scrollbar pb-2">
            <div className="shrink-0 relative pl-4 border-l-2 border-accent py-1">
               <div className="absolute top-1/2 -left-[5px] -translate-y-1/2 w-2 h-2 rounded-full bg-accent ring-4 ring-navy" />
               <div className="text-xs font-bold text-text-primary">Petrol → CNG</div>
               <div className="text-[10px] text-text-muted font-semibold mt-0.5">18:20:31 • Latency <span className="text-accent ml-0.5">410 ms</span></div>
            </div>
            
            <div className="shrink-0 relative pl-4 border-l-2 border-warn py-1 opacity-60">
               <div className="absolute top-1/2 -left-[5px] -translate-y-1/2 w-2 h-2 rounded-full bg-warn ring-4 ring-navy" />
               <div className="text-xs font-bold text-text-primary">CNG → Petrol</div>
               <div className="text-[10px] text-text-muted font-semibold mt-0.5">18:32:15 • Latency <span className="text-warn ml-0.5">320 ms</span></div>
            </div>

            <div className="shrink-0 relative pl-4 border-l-2 border-accent py-1 opacity-60">
               <div className="absolute top-1/2 -left-[5px] -translate-y-1/2 w-2 h-2 rounded-full bg-accent ring-4 ring-navy" />
               <div className="text-xs font-bold text-text-primary">Petrol → CNG</div>
               <div className="text-[10px] text-text-muted font-semibold mt-0.5">18:38:00 • Latency <span className="text-accent ml-0.5">370 ms</span></div>
            </div>
         </div>
      </div>
    </div>
  );
}
