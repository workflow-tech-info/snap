import { 
  Users, 
  Car, 
  Fuel, 
  TrendingUp, 
  Zap, 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  Search, 
  Filter,
  ArrowUpRight
} from 'lucide-react';
import { cn } from '../../../lib/utils';
import fleetData from '../../../data/demo-fleet.json';
import { SmartFleetInsights } from '../../../components/intelligence/SmartFleetInsights';

export function FleetOverview() {
  const s = fleetData.fleet_summary;

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Fleet Command Center</h1>
        <div className="flex items-center gap-3 px-4 py-2 bg-accent/5 border border-accent/20 rounded-full w-fit">
           <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(0,201,114,0.4)]" />
           <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] leading-none">Network Synchronized</span>
        </div>
      </div>

      {/* Top KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col gap-4 group hover:bg-white/[0.05] transition-all">
           <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform border border-primary/10">
              <Users className="w-5 h-5" strokeWidth={1.5} />
           </div>
           <div className="flex flex-col">
              <span className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mb-1 opacity-70">Fleet Size</span>
              <span className="text-3xl font-semibold text-text-primary tracking-tight">{s.total_vehicles}</span>
           </div>
        </div>
        <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col gap-4 group hover:bg-white/[0.05] transition-all">
           <div className="w-10 h-10 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-105 transition-transform border border-accent/10">
              <Car className="w-5 h-5" strokeWidth={1.5} />
           </div>
           <div className="flex flex-col">
              <span className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mb-1 opacity-70">Active Trips</span>
              <span className="text-3xl font-semibold text-accent tracking-tight">{s.active_now}</span>
           </div>
        </div>
        <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col gap-4 group hover:bg-white/[0.05] transition-all">
           <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-text-muted group-hover:scale-105 transition-transform border border-white/5">
              <Activity className="w-5 h-5" strokeWidth={1.5} />
           </div>
           <div className="flex flex-col">
              <span className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mb-1 opacity-70">Unit Offline</span>
              <span className="text-3xl font-semibold text-text-primary/40 tracking-tight">{s.offline}</span>
           </div>
        </div>
        <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col gap-4 group hover:bg-white/[0.05] transition-all">
           <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform border border-primary/10">
              <Zap className="w-5 h-5" strokeWidth={1.5} />
           </div>
           <div className="flex flex-col">
              <span className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mb-1 opacity-70">EV Deployment</span>
              <span className="text-3xl font-semibold text-text-primary tracking-tight">{s.on_ev} <span className="text-[10px] opacity-40 uppercase tracking-widest">units</span></span>
           </div>
        </div>
        <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col gap-4 group hover:bg-white/[0.05] transition-all">
           <div className="w-10 h-10 rounded-2xl bg-warn/10 flex items-center justify-center text-warn group-hover:scale-105 transition-transform border border-warn/10">
              <Fuel className="w-5 h-5" strokeWidth={1.5} />
           </div>
           <div className="flex flex-col">
              <span className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mb-1 opacity-70">CNG Usage</span>
              <span className="text-3xl font-semibold text-text-primary tracking-tight">{s.on_cng}</span>
           </div>
        </div>
        <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col gap-4 group hover:bg-white/[0.05] transition-all">
           <div className="w-10 h-10 rounded-2xl bg-danger/10 flex items-center justify-center text-danger group-hover:scale-105 transition-transform border border-danger/10">
              <Fuel className="w-5 h-5" strokeWidth={1.5} />
           </div>
           <div className="flex flex-col">
              <span className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mb-1 opacity-70">Petrol Failover</span>
              <span className="text-3xl font-semibold text-danger tracking-tight">{s.on_petrol}</span>
           </div>
        </div>
      </div>

      {/* Savings & Efficiency */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
         <div className="bg-accent/10 border border-accent/20 rounded-[32px] p-8 flex flex-col gap-5 relative overflow-hidden group">
            <ArrowUpRight className="absolute -right-6 -top-6 w-32 h-32 text-accent opacity-[0.03] group-hover:scale-110 transition-transform" strokeWidth={1} />
            <div className="flex flex-col">
               <span className="text-[10px] font-semibold text-accent uppercase tracking-[0.2em] mb-1">Savings Today</span>
               <span className="text-4xl font-semibold text-white tracking-tight">₹{s.fuel_savings_today.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2 opacity-60">
               <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
               <span className="text-[10px] font-medium text-accent uppercase tracking-widest">Real-time Valuation</span>
            </div>
         </div>
         <div className="bg-primary/10 border border-primary/20 rounded-[32px] p-8 flex flex-col gap-5 relative overflow-hidden group">
            <div className="flex flex-col relative z-10">
               <span className="text-[10px] font-semibold text-primary uppercase tracking-[0.2em] mb-1">Monthly Gross</span>
               <span className="text-4xl font-semibold text-white tracking-tight">₹{(s.fuel_savings_month / 1000).toFixed(1)}K</span>
            </div>
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest opacity-80">+12% vs last month</span>
         </div>
         <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-[32px] p-8 flex flex-col gap-5 group hover:bg-white/[0.03] transition-all">
            <div className="flex flex-col">
               <span className="text-[10px] font-semibold text-text-muted uppercase tracking-[0.2em] mb-1">Lifetime Impact</span>
               <span className="text-4xl font-semibold text-white tracking-tight">₹1.42 Cr</span>
            </div>
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest opacity-80">78% ROI Achieved</span>
         </div>
         <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-[32px] p-8 flex flex-col gap-5 group hover:bg-white/[0.03] transition-all">
            <div className="flex flex-col">
               <span className="text-[10px] font-semibold text-text-muted uppercase tracking-[0.2em] mb-1">Avg Fleet Efficiency</span>
               <span className="text-4xl font-semibold text-white tracking-tight">{s.avg_efficiency_km_kg} <span className="text-sm font-medium opacity-40 uppercase tracking-widest ml-1">km/kg</span></span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mt-1">
               <div className="h-full bg-accent" style={{ width: '88%' }} />
            </div>
         </div>
      </div>

      {/* Fleet Health Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
         <div className="p-7 rounded-[40px] bg-accent/5 border border-accent/20 flex flex-col gap-4 group cursor-pointer hover:bg-accent/10 transition-all">
            <CheckCircle2 className="w-7 h-7 text-accent" strokeWidth={1.5} />
            <div className="flex flex-col">
               <span className="text-3xl font-semibold text-white tracking-tight">{s.health.healthy}</span>
               <span className="text-[10px] font-bold text-accent uppercase tracking-widest mt-1">Optimal Status</span>
            </div>
         </div>
         <div className="p-7 rounded-[40px] bg-warn/5 border border-warn/20 flex flex-col gap-4 group cursor-pointer hover:bg-warn/10 transition-all">
            <AlertTriangle className="w-7 h-7 text-warn" strokeWidth={1.5} />
            <div className="flex flex-col">
               <span className="text-3xl font-semibold text-white tracking-tight">{s.health.attention}</span>
               <span className="text-[10px] font-bold text-warn uppercase tracking-widest mt-1">Action Required</span>
            </div>
         </div>
         <div className="p-7 rounded-[40px] bg-danger/5 border border-danger/20 flex flex-col gap-4 group cursor-pointer hover:bg-danger/10 transition-all">
            <Activity className="w-7 h-7 text-danger" strokeWidth={1.5} />
            <div className="flex flex-col">
               <span className="text-3xl font-semibold text-white tracking-tight">{s.health.critical}</span>
               <span className="text-[10px] font-bold text-danger uppercase tracking-widest mt-1">Critical Faults</span>
            </div>
         </div>
         <div className="p-7 rounded-[40px] bg-white/5 border border-white/10 flex flex-col gap-4 group hover:bg-white/[0.08] transition-all">
            <Zap className="w-7 h-7 text-primary" strokeWidth={1.5} />
            <div className="flex flex-col">
               <span className="text-3xl font-semibold text-white tracking-tight">{s.health.regulator_issues}</span>
               <span className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mt-1">Regulator Tech</span>
            </div>
         </div>
         <div className="p-7 rounded-[40px] bg-white/5 border border-white/10 flex flex-col gap-4 group hover:bg-white/[0.08] transition-all">
            <TrendingUp className="w-7 h-7 text-primary" strokeWidth={1.5} />
            <div className="flex flex-col">
               <span className="text-3xl font-semibold text-white tracking-tight">{s.health.injector_issues}</span>
               <span className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mt-1">Injector Diagnostics</span>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         {/* Live Vehicle Status Table */}
         <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-[40px] overflow-hidden shadow-2xl">
               <div className="p-8 border-b border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                     <Activity className="w-6 h-6 text-primary" strokeWidth={1.5} />
                     <h2 className="text-xl font-semibold tracking-tight text-white">Live Fleet Roster <span className="text-[11px] font-medium text-text-muted opacity-40 uppercase tracking-widest ml-3">Automated Insight Preview</span></h2>
                  </div>
                  <div className="flex items-center gap-4 w-full md:w-auto">
                     <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted opacity-50" />
                        <input type="text" placeholder="Search Fleet Units..." className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none font-medium text-xs text-text-primary focus:border-primary/50 transition-colors" />
                     </div>
                     <button className="p-3 rounded-2xl bg-white/5 border border-white/10 text-text-muted hover:text-white transition-all hover:bg-white/10">
                        <Filter className="w-4 h-4" />
                     </button>
                  </div>
               </div>
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[1000px]">
                     <thead>
                        <tr className="border-b border-white/5 text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] bg-white/[0.02]">
                           <th className="px-8 py-5">Vehicle Identification</th>
                           <th className="px-8 py-5">Personnel</th>
                           <th className="px-8 py-5">Live Deployment</th>
                           <th className="px-8 py-5 text-center">Fuel System</th>
                           <th className="px-8 py-5 text-center">Velocity</th>
                           <th className="px-8 py-5 text-center">Primary Metric</th>
                           <th className="px-8 py-5 text-center">Fuel/Charge</th>
                           <th className="px-8 py-5 text-center">Health</th>
                           <th className="px-8 py-5 text-right">Heartbeat</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-white/5">
                        {fleetData.vehicles.map((v) => (
                          <tr key={v.vin} className="hover:bg-white/[0.04] transition-colors group text-sm">
                             <td className="px-8 py-5 font-mono text-xs text-text-primary opacity-90">{v.vin}</td>
                             <td className="px-8 py-5 font-medium text-text-primary">{v.driver}</td>
                             <td className="px-8 py-5 text-text-muted font-medium opacity-80">{v.location}</td>
                             <td className="px-8 py-5 text-center">
                                 <span className={cn(
                                    "px-3 py-1 rounded-lg text-[10px] font-bold tracking-widest uppercase border",
                                    v.fuel_mode === 'CNG' ? "bg-primary/5 text-primary border-primary/20" : 
                                    v.fuel_mode === 'EV' ? "bg-accent/5 text-accent border-accent/20" :
                                    "bg-danger/5 text-danger border-danger/20"
                                 )}>
                                    {v.fuel_mode}
                                 </span>
                             </td>
                             <td className="px-8 py-5 text-center font-semibold text-text-primary">{v.speed} <span className="text-[10px] font-medium opacity-30 uppercase ml-1">km/h</span></td>
                             <td className="px-8 py-5 text-center text-text-muted/60 font-mono text-xs">{v.fuel_mode === 'EV' ? `${v.temp}°C` : v.rpm}</td>
                             <td className="px-8 py-5 text-center">
                                 <span className={cn("font-semibold", 
                                   ((v as any).gas_pressure < 50 && v.fuel_mode === 'CNG') || ((v as any).soc < 20 && v.fuel_mode === 'EV') ? "text-danger" : "text-text-primary"
                                 )}>
                                    {v.fuel_mode === 'EV' ? (v as any).soc : (v as any).gas_pressure} 
                                    <span className="text-[10px] font-medium opacity-30 uppercase ml-1">{v.fuel_mode === 'EV' ? '%' : 'bar'}</span>
                                 </span>
                             </td>
                             <td className="px-8 py-5 text-center">
                                <div className="flex flex-col items-center gap-1.5">
                                   <span className={cn("font-bold text-xs tracking-tighter", v.health_score > 90 ? "text-accent" : v.health_score > 80 ? "text-warn" : "text-danger")}>
                                      {v.health_score}%
                                   </span>
                                   <div className="w-14 h-1 bg-white/5 rounded-full overflow-hidden">
                                      <div className={cn("h-full", v.health_score > 90 ? "bg-accent" : "bg-warn")} style={{ width: `${v.health_score}%` }} />
                                   </div>
                                </div>
                             </td>
                             <td className="px-8 py-5 text-right font-medium text-text-muted/50 text-xs">{v.last_seen}</td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>

         {/* Smart Insights Panel */}
         <div className="lg:col-span-4 h-full">
            <SmartFleetInsights />
         </div>
      </div>
    </div>
  );
}
