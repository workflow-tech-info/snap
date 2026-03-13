import { 
  CheckCircle2, 
  Cpu, 
  Car, 
  Warehouse, 
  BarChart3,
  ArrowUpRight,
  Target
} from 'lucide-react';
import demoAdmin from '../../../data/demo-admin.json';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { SmartOpsInsights } from '../../../components/intelligence/SmartOpsInsights';

export function AdminOverview() {
  const s = demoAdmin.summary;

  const chartData = [
    { name: 'Mon', installs: 24, active: 3800 },
    { name: 'Tue', installs: 32, active: 3950 },
    { name: 'Wed', installs: 28, active: 4020 },
    { name: 'Thu', installs: 42, active: 4080 },
    { name: 'Fri', installs: 38, active: 4120 },
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Ops Control Center</h1>
        <div className="flex items-center gap-3 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full w-fit">
           <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(11,104,255,0.4)]" />
           <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] leading-none">Ops Synchronized</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col gap-4 group hover:bg-white/[0.05] transition-all shadow-xl shadow-black/10">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/10 group-hover:scale-105 transition-transform">
            <CheckCircle2 className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mb-1 opacity-60">Total Installs</span>
            <span className="text-4xl font-semibold text-text-primary tracking-tight">{s.total_installations.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2 text-accent text-[10px] font-bold uppercase tracking-widest">
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} /> +12% this month
          </div>
        </div>
        <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col gap-4 group hover:bg-white/[0.05] transition-all shadow-xl shadow-black/10">
          <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent border border-accent/10 group-hover:scale-105 transition-transform">
            <Car className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mb-1 opacity-60">Active Fleet</span>
            <span className="text-4xl font-semibold text-accent tracking-tight">{s.active_vehicles.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2 text-accent text-[10px] font-bold uppercase tracking-widest leading-none">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(0,201,114,0.4)]" /> Live Connection
          </div>
        </div>
        <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col gap-4 group hover:bg-white/[0.05] transition-all shadow-xl shadow-black/10">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/10 group-hover:scale-105 transition-transform">
            <Cpu className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mb-1 opacity-60">Provisioned Units</span>
            <span className="text-4xl font-semibold text-text-primary tracking-tight">{s.devices_online.toLocaleString()}</span>
          </div>
          <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest opacity-40">Network Health 99.8%</span>
        </div>
        <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col gap-4 group hover:bg-white/[0.05] transition-all shadow-xl shadow-black/10">
          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-text-muted border border-white/5 group-hover:scale-105 transition-transform">
            <Warehouse className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mb-1 opacity-60">Active Workshops</span>
            <span className="text-4xl font-semibold text-text-primary tracking-tight">{s.workshops_active}</span>
          </div>
          <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest opacity-40">{s.technicians_active} Certified Techs</span>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
         <div className="xl:col-span-8 flex flex-col gap-10">
             <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-[40px] p-8 shadow-2xl">
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10">
                  <div className="flex items-center gap-3">
                     <BarChart3 className="w-6 h-6 text-primary" strokeWidth={1.5} />
                     <h2 className="text-xl font-semibold tracking-tight text-white uppercase tracking-tighter">Installation Velocity</h2>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="px-4 py-1.5 rounded-full bg-primary/5 text-primary border border-primary/20 text-[10px] font-bold uppercase tracking-widest">Direct Installs</div>
                     <div className="px-4 py-1.5 rounded-full bg-accent/5 text-accent border border-accent/20 text-[10px] font-bold uppercase tracking-widest">Growth Curve</div>
                  </div>
               </div>
               <div className="h-80 w-full pr-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="primaryGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0B68FF" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#0B68FF" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9FB4D6', fontSize: 10, fontWeight: '500'}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#9FB4D6', fontSize: 10}} dx={-10} />
                    <Tooltip contentStyle={{ backgroundColor: '#0B1220', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', color: '#fff' }} />
                    <Area type="monotone" dataKey="installs" stroke="#0B68FF" strokeWidth={3} fillOpacity={1} fill="url(#primaryGradient)" />
                    <Area type="monotone" dataKey="active" stroke="#00C972" strokeWidth={3} fillOpacity={0} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-[40px] p-8 flex flex-col gap-8 shadow-2xl">
              <div className="flex items-center gap-3">
                 <Target className="w-6 h-6 text-accent" strokeWidth={1.5} />
                 <h2 className="text-xl font-semibold tracking-tight text-white uppercase tracking-tighter">Workshop Performance</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {demoAdmin.workshop_performance.map((w, i) => (
                  <div key={i} className="flex flex-col gap-3 p-5 bg-white/[0.03] border border-white/5 rounded-[32px] group hover:border-accent/20 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-text-primary">{w.name}</span>
                      <span className="text-sm font-semibold text-white tracking-tight">{w.installs} <span className="text-[10px] font-medium opacity-30 uppercase tracking-widest ml-1">installs</span></span>
                    </div>
                    <div className="h-2 w-full bg-navy/50 rounded-full overflow-hidden border border-white/5">
                      <div className="h-full bg-accent group-hover:shadow-[0_0_15px_rgba(0,201,114,0.3)] transition-all duration-500 rounded-full" style={{ width: `${(w.installs / 40) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
         </div>

         <div className="xl:col-span-4 h-full">
            <SmartOpsInsights />
         </div>
      </div>
    </div>
  );
}
