import { 
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ScatterChart,
  Scatter,
  ZAxis
} from 'recharts';
import { 
  Compass, 
  ArrowUpRight,
  Activity
} from 'lucide-react';

export function OEMTelemetry() {
  const distributionData = [
    { name: '1000', rpm: 120, pressure: 1.2 },
    { name: '2000', rpm: 450, pressure: 1.8 },
    { name: '3000', rpm: 820, pressure: 2.1 },
    { name: '4000', rpm: 400, pressure: 2.3 },
    { name: '5000', rpm: 150, pressure: 1.9 },
    { name: '6000', rpm: 40, pressure: 1.5 },
  ];

  const scatterData = [
    { x: 2100, y: 198, z: 400 },
    { x: 2300, y: 202, z: 200 },
    { x: 2500, y: 195, z: 800 },
    { x: 1900, y: 190, z: 300 },
    { x: 2200, y: 205, z: 500 },
    { x: 2400, y: 199, z: 600 },
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500 font-black tracking-tighter italic uppercase">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl tracking-tighter italic uppercase">Ecosystem Telemetry Grid</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
         <div className="bg-card/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-3 shadow-2xl shadow-black/40">
            <span className="text-[10px] font-black text-text-muted uppercase tracking-widest opacity-60 not-italic">Avg RPM</span>
            <div className="text-4xl font-black italic leading-none mb-1">2140</div>
            <div className="text-[10px] text-accent font-black uppercase tracking-widest inline-flex items-center gap-1 leading-none"><ArrowUpRight className="w-3 h-3" /> Nominal Range</div>
         </div>
         <div className="bg-card/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-3 shadow-2xl shadow-black/40">
            <span className="text-[10px] font-black text-text-muted uppercase tracking-widest opacity-60 not-italic">Avg Gas Pressure</span>
            <div className="text-4xl font-black italic leading-none mb-1">198 <span className="text-sm opacity-40">bar</span></div>
            <div className="text-[10px] text-primary font-black uppercase tracking-widest inline-flex items-center gap-1 leading-none">Optimal Supply</div>
         </div>
         <div className="bg-card/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-3 shadow-2xl shadow-black/40">
            <span className="text-[10px] font-black text-text-muted uppercase tracking-widest opacity-60 not-italic">Lambda Average</span>
            <div className="text-4xl font-black italic leading-none mb-1">0.99</div>
            <div className="text-[10px] text-accent font-black uppercase tracking-widest inline-flex items-center gap-1 leading-none">Healthy Combustion</div>
         </div>
         <div className="bg-card/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-3 shadow-2xl shadow-black/40">
            <span className="text-[10px] font-black text-text-muted uppercase tracking-widest opacity-60 not-italic">Coolant Temp</span>
            <div className="text-4xl font-black italic leading-none mb-1">90 <span className="text-sm opacity-40">°C</span></div>
            <div className="text-[10px] text-text-muted font-black uppercase tracking-widest inline-flex items-center gap-1 leading-none italic lowercase opacity-40">Stable Thermal</div>
         </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
         <div className="bg-card/40 border border-white/5 rounded-[40px] p-10 shadow-2xl shadow-black/40">
            <div className="flex items-center gap-3 mb-10">
               <Compass className="w-6 h-6 text-primary" />
               <h2 className="text-xl font-bold italic tracking-tight uppercase">RPM Loading Distribution</h2>
            </div>
            <div className="h-80 w-full font-black tracking-widest text-[10px] lowercase opacity-60 italic">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={distributionData}>
                     <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                     <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9FB4D6', fontSize: 10, fontWeight: 'black'}} />
                     <YAxis axisLine={false} tickLine={false} tick={{fill: '#9FB4D6', fontSize: 10}} />
                     <Tooltip contentStyle={{ backgroundColor: '#0B1220', border: 'none', borderRadius: '16px', color: '#fff' }} />
                     <Area type="monotone" dataKey="rpm" stroke="#0B68FF" strokeWidth={4} fillOpacity={0.2} fill="#0B68FF" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>
         <div className="bg-card/40 border border-white/5 rounded-[40px] p-10 shadow-2xl shadow-black/40">
            <div className="flex items-center gap-3 mb-10">
               <Activity className="w-6 h-6 text-accent" />
               <h2 className="text-xl font-bold italic tracking-tight uppercase">Pressure vs Load Heatmap</h2>
            </div>
            <div className="h-80 w-full font-black tracking-widest text-[10px] lowercase opacity-60 italic ">
               <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart>
                     <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                     <XAxis type="number" dataKey="x" name="RPM" unit="rpm" axisLine={false} tickLine={false} tick={{fill: '#9FB4D6', fontSize: 10}} />
                     <YAxis type="number" dataKey="y" name="Pressure" unit="bar" axisLine={false} tickLine={false} tick={{fill: '#9FB4D6', fontSize: 10}} />
                     <ZAxis type="number" dataKey="z" range={[100, 1000]} name="Vehicles" />
                     <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ backgroundColor: '#0B1220', border: 'none', borderRadius: '16px', color: '#fff' }} />
                     <Scatter name="Telemetry Samples" data={scatterData} fill="#00C972" />
                  </ScatterChart>
               </ResponsiveContainer>
            </div>
         </div>
      </div>
    </div>
  );
}
