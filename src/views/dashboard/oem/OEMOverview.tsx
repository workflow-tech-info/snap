import { 
  Globe, 
  Zap, 
  TrendingUp, 
  Leaf,
  ArrowUpRight,
  Activity,
  BarChart3
} from 'lucide-react';
import demoOem from '../../../data/demo-oem.json';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { SmartMfgInsights } from '../../../components/intelligence/SmartMfgInsights';

export function OEMOverview() {
  const s = demoOem.summary;

  const chartData = [
    { name: '10 AM', cng: 4200, petrol: 1100 },
    { name: '12 PM', cng: 5800, petrol: 1400 },
    { name: '2 PM', cng: 4900, petrol: 1200 },
    { name: '4 PM', cng: 6200, petrol: 1600 },
    { name: '6 PM', cng: 7400, petrol: 1900 },
    { name: '8 PM', cng: 6800, petrol: 1500 },
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Ecosystem Summary</h1>
        <div className="flex items-center gap-3 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full w-fit">
           <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(11,104,255,0.4)]" />
           <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] leading-none">Global Sync</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col gap-4 group hover:bg-white/[0.05] transition-all shadow-xl shadow-black/10">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/10 group-hover:scale-105 transition-transform">
            <Globe className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mb-1 opacity-60">Global Fleet</span>
            <span className="text-4xl font-semibold text-text-primary tracking-tight">{s.total_vehicles.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2 text-accent text-[10px] font-bold uppercase tracking-widest leading-none">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(0,201,114,0.4)]" /> {s.online.toLocaleString()} Units Online
          </div>
        </div>
        <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col gap-4 group hover:bg-white/[0.05] transition-all shadow-xl shadow-black/10">
          <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent border border-accent/10 group-hover:scale-105 transition-transform">
            <Zap className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mb-1 opacity-60">Systems Active</span>
            <span className="text-4xl font-semibold text-text-primary tracking-tight">{s.total_kits.toLocaleString()}</span>
          </div>
          <span className="text-[10px] font-bold text-primary uppercase tracking-widest opacity-80">{s.installers} Integration Partners</span>
        </div>
        <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col gap-4 group hover:bg-white/[0.05] transition-all shadow-xl shadow-black/10">
          <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent border border-accent/10 group-hover:scale-105 transition-transform">
            <Zap className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mb-1 opacity-60">EV Fleet Health</span>
            <span className="text-4xl font-semibold text-text-primary tracking-tight">{s.total_ev_soc_avg}% <span className="text-sm font-medium opacity-40 uppercase tracking-widest">Avg SoC</span></span>
          </div>
          <div className="flex items-center gap-2 text-accent text-[10px] font-bold uppercase tracking-widest leading-none">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(0,201,114,0.4)]" /> Battery Optimization Active
          </div>
        </div>
        <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col gap-4 group hover:bg-white/[0.05] transition-all shadow-xl shadow-black/10">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/10 group-hover:scale-105 transition-transform">
            <TrendingUp className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mb-1 opacity-60">Daily Fuel Displaced</span>
            <span className="text-4xl font-semibold text-text-primary tracking-tight">{(s.daily_fuel_saved / 1000).toFixed(1)}K <span className="text-sm font-medium opacity-40 uppercase tracking-widest">L/day</span></span>
          </div>
          <div className="flex items-center gap-2 text-accent text-[10px] font-bold uppercase tracking-widest leading-none">
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} /> 12.4% Powertrain Shift
          </div>
        </div>
        <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col gap-4 group hover:bg-white/[0.05] transition-all shadow-xl shadow-black/10">
          <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent border border-accent/10 group-hover:scale-105 transition-transform">
            <Leaf className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mb-1 opacity-60">Ecosystem Impact</span>
            <span className="text-4xl font-semibold text-text-primary tracking-tight">812 <span className="text-sm font-medium opacity-40 uppercase tracking-widest">Tons</span></span>
          </div>
          <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest opacity-40 leading-none">Net CO₂ Reduction</span>
        </div>
    </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        {/* Trend Chart */}
        <div className="xl:col-span-8 flex flex-col gap-8">
           <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-[40px] p-8 shadow-2xl relative overflow-hidden group h-full">
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] group-hover:bg-primary/10 transition-all duration-1000" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10 relative z-10">
                 <div className="flex items-center gap-3">
                    <Activity className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    <h2 className="text-xl font-semibold tracking-tight text-white uppercase tracking-tighter">System Utilization Trend</h2>
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="px-4 py-1.5 rounded-full bg-primary/5 text-primary border border-primary/20 text-[10px] font-bold uppercase tracking-widest">CNG/EV Hybrid Mix</div>
                    <div className="px-4 py-1.5 rounded-full bg-white/5 text-text-muted border border-white/10 text-[10px] font-bold uppercase tracking-widest">ICE Baseline</div>
                 </div>
              </div>
              <div className="h-96 w-full relative z-10 pr-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="cngGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0B68FF" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#0B68FF" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9FB4D6', fontSize: 10, fontWeight: '500'}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#9FB4D6', fontSize: 10}} dx={-10} />
                    <Tooltip contentStyle={{ backgroundColor: '#0B1220', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', color: '#fff' }} />
                    <Area type="monotone" dataKey="cng" stroke="#0B68FF" strokeWidth={3} fillOpacity={1} fill="url(#cngGradient)" />
                    <Area type="monotone" dataKey="petrol" stroke="#00C972" strokeWidth={2} fillOpacity={0} strokeDasharray="10 5" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
           </div>
        </div>

        {/* Intelligence Sidepanel */}
        <div className="xl:col-span-4 flex flex-col gap-8">
           <SmartMfgInsights />
           
           <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-[40px] p-8 flex flex-col gap-8 shadow-2xl">
              <div className="flex items-center gap-3">
                 <BarChart3 className="w-6 h-6 text-accent" strokeWidth={1.5} />
                 <h2 className="text-xl font-semibold tracking-tight text-white uppercase tracking-tighter">Regional Density</h2>
              </div>
              <div className="flex flex-col gap-10">
                {demoOem.regional_insights.slice(0, 4).map((region, i) => (
                  <div key={i} className="flex flex-col gap-4 group translate-x-0 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-text-primary uppercase tracking-widest">{region.region}</span>
                      <span className="text-sm font-semibold text-white tracking-tight">{region.vehicles.toLocaleString()} <span className="text-[10px] font-medium opacity-30 uppercase tracking-widest ml-1">V-Units</span></span>
                    </div>
                    <div className="h-2 w-full bg-navy/50 rounded-full overflow-hidden border border-white/5">
                      <div className="h-full bg-accent group-hover:shadow-[0_0_15px_rgba(0,201,114,0.3)] transition-all duration-500 rounded-full" style={{ width: `${(region.vehicles / 15000) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full py-5 bg-navy border border-white/5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/5 hover:border-white/10 transition-all text-text-muted hover:text-white">Expand Global Insights</button>
           </div>
        </div>
      </div>
    </div>
  );
}
