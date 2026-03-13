import { 
  Route, 
  Clock, 
  Download,
  Activity
} from 'lucide-react';
import { cn } from '../../../lib/utils';
import fleetData from '../../../data/demo-fleet.json';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export function FleetTrips() {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight italic">Fleet Logistics & Trips</h1>
        <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold transition-all hover:bg-white/10 group">
          <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" /> Export Logs
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="bg-card/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-6">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <Activity className="w-6 h-6 text-primary" />
                     <h2 className="text-xl font-bold tracking-tight italic">Fleet Mileage Analytics</h2>
                  </div>
               </div>
               <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={fleetData.analytics.savings_chart}>
                        <defs>
                           <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#0B68FF" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="#0B68FF" stopOpacity={0}/>
                           </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                        <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#9FB4D6', fontSize: 10, fontWeight: 'bold'}} />
                        <YAxis hide />
                        <Tooltip 
                           contentStyle={{ backgroundColor: '#0B1220', border: '1px solid #ffffff10', borderRadius: '12px' }}
                           itemStyle={{ color: '#0B68FF', fontWeight: 'bold' }}
                        />
                        <Area type="monotone" dataKey="savings" stroke="#0B68FF" strokeWidth={4} fillOpacity={1} fill="url(#colorSavings)" />
                     </AreaChart>
                  </ResponsiveContainer>
               </div>
            </div>

            <div className="bg-card/40 border border-white/5 rounded-[40px] overflow-hidden">
               <div className="p-8 border-b border-white/5">
                  <h2 className="text-xl font-bold tracking-tight italic">Recent Fleet Journeys</h2>
               </div>
               <div className="overflow-x-auto">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-white/5 text-[10px] font-black text-text-muted uppercase tracking-widest bg-white/5">
                           <th className="px-8 py-4">Vehicle</th>
                           <th className="px-8 py-4">Driver</th>
                           <th className="px-8 py-4">Journey</th>
                           <th className="px-8 py-4 text-center">Distance</th>
                           <th className="px-8 py-4 text-center">Fuel</th>
                           <th className="px-8 py-4 text-right">Saving</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-white/5">
                        {fleetData.trips.map((trip, i) => (
                           <tr key={i} className="hover:bg-white/5 transition-colors group text-sm font-medium">
                              <td className="px-8 py-5 text-text-primary italic font-bold">{trip.vehicle}</td>
                              <td className="px-8 py-5">{trip.driver}</td>
                              <td className="px-8 py-5">
                                 <div className="flex items-center gap-3">
                                    <Clock className="w-3.5 h-3.5 text-text-muted" />
                                    <span>{trip.start} — {trip.end}</span>
                                 </div>
                              </td>
                              <td className="px-8 py-5 text-center">{trip.dist}</td>
                              <td className="px-8 py-5 text-center">
                                 <span className={cn(
                                    "px-3 py-1 rounded-lg font-bold text-xs",
                                    trip.saved === "₹0" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"
                                 )}>{trip.fuel}</span>
                              </td>
                              <td className="px-8 py-5 text-right font-black text-accent italic">{trip.saved}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>

         <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="p-8 rounded-[32px] bg-primary/10 border border-primary/20 flex flex-col gap-6">
               <Route className="w-8 h-8 text-primary" />
               <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold italic uppercase tracking-tighter text-white">Route Optimization</h3>
                  <p className="text-xs text-text-muted font-medium pr-4 leading-relaxed">
                     Based on last week's traffic patterns, shifting Gurugram-bound fleet by 15 mins could save ₹12k in idle fuel.
                  </p>
               </div>
            </div>

            <div className="bg-card/40 border border-white/5 rounded-[32px] p-8 flex flex-col gap-6">
               <h3 className="text-sm font-black text-text-muted uppercase tracking-widest">Global Stats</h3>
               <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-center text-sm border-b border-white/5 pb-4">
                     <span className="text-text-muted">Avg Trip Duration</span>
                     <span className="font-bold">42 mins</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-white/5 pb-4">
                     <span className="text-text-muted">Total KM Today</span>
                     <span className="font-black text-primary italic">12,480 km</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                     <span className="text-text-muted">Safety Score Index</span>
                     <span className="font-black text-accent italic">94.2/100</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
