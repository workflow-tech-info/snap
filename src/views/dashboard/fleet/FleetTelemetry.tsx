import { 
  Activity, 
  Zap, 
  Thermometer, 
  BarChart2, 
  Download
} from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export function FleetTelemetry() {
  const telemetrySamples = [
    { time: '10:00', rpm: 2100, pressure: 198, load: 45 },
    { time: '11:00', rpm: 2300, pressure: 194, load: 52 },
    { time: '12:00', rpm: 2180, pressure: 195, load: 48 },
    { time: '13:00', rpm: 2250, pressure: 190, load: 55 },
    { time: '14:00', rpm: 2100, pressure: 192, load: 50 },
    { time: '15:00', rpm: 2180, pressure: 195, load: 48 },
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight italic uppercase tracking-tighter text-white">Engine Telemetry</h1>
        <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold transition-all hover:bg-white/10 group">
          <Download className="w-4 h-4 group-hover:scale-110 transition-transform" /> Sync ECU
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         <div className="bg-card/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-4">
            <Activity className="w-8 h-8 text-primary" />
            <div className="flex flex-col">
               <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">Avg RPM</span>
               <span className="text-3xl font-black italic">2,180</span>
            </div>
         </div>
         <div className="bg-card/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-4">
            <Zap className="w-8 h-8 text-accent" />
            <div className="flex flex-col">
               <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">Pressure</span>
               <span className="text-3xl font-black italic text-accent">195 bar</span>
            </div>
         </div>
         <div className="bg-card/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-4">
            <BarChart2 className="w-8 h-8 text-primary" />
            <div className="flex flex-col">
               <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">Load Index</span>
               <span className="text-3xl font-black italic">48%</span>
            </div>
         </div>
         <div className="bg-card/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-4">
            <Thermometer className="w-8 h-8 text-danger" />
            <div className="flex flex-col">
               <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">Coolant Temp</span>
               <span className="text-3xl font-black italic text-danger">91°C</span>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         <div className="lg:col-span-12 bg-card/40 border border-white/5 rounded-[40px] p-10">
            <div className="h-80 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={telemetrySamples}>
                     <CartesianGrid strokeDasharray="3 3" stroke="#ffffff03" vertical={false} />
                     <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#9FB4D6', fontSize: 10, fontWeight: 'bold'}} />
                     <YAxis axisLine={false} tickLine={false} tick={{fill: '#9FB4D6', fontSize: 10}} />
                     <Tooltip contentStyle={{ backgroundColor: '#0B1220', border: 'none', borderRadius: '12px' }} />
                     <Line type="monotone" dataKey="rpm" stroke="#0B68FF" strokeWidth={3} dot={false} strokeDasharray="5 5" />
                     <Line type="monotone" dataKey="pressure" stroke="#00C972" strokeWidth={3} dot={{ r: 4, fill: '#00C972', strokeWidth: 0 }} />
                  </LineChart>
               </ResponsiveContainer>
            </div>
         </div>
      </div>
    </div>
  );
}
