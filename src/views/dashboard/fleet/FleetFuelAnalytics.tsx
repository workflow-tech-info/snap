import fleetData from '../../../data/demo-fleet.json';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export function FleetFuelAnalytics() {
  const { fuel_consumption_today } = fleetData.analytics;

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight italic uppercase tracking-tighter">Fuel Dynamics</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         <div className="bg-accent/10 border border-accent/20 rounded-[32px] p-6 flex flex-col gap-4">
            <span className="text-[10px] font-black text-accent uppercase tracking-widest">Daily CNG</span>
            <span className="text-3xl font-black italic">1,280 kg</span>
         </div>
         <div className="bg-primary/10 border border-primary/20 rounded-[32px] p-6 flex flex-col gap-4">
            <span className="text-[10px] font-black text-primary uppercase tracking-widest">Daily Petrol</span>
            <span className="text-3xl font-black italic">310 L</span>
         </div>
         <div className="bg-card/40 border border-white/5 rounded-[32px] p-6 flex flex-col gap-4">
            <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">Savings</span>
            <span className="text-3xl font-black text-accent italic">₹42.8K</span>
         </div>
         <div className="bg-card/40 border border-white/5 rounded-[32px] p-6 flex flex-col gap-4">
            <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">CO2 Offset</span>
            <span className="text-3xl font-black italic">2.8 tons</span>
         </div>
      </div>

      <div className="bg-card/40 border border-white/5 rounded-[40px] p-8">
         <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
               <BarChart data={fuel_consumption_today}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9FB4D6', fontSize: 10}} />
                  <YAxis hide />
                  <Tooltip contentStyle={{ backgroundColor: '#0B1220', border: 'none', borderRadius: '12px' }} />
                  <Bar dataKey="cng" name="CNG" fill="#00C972" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="petrol" name="Petrol" fill="#0B68FF" radius={[4, 4, 0, 0]} />
               </BarChart>
            </ResponsiveContainer>
         </div>
      </div>
    </div>
  );
}
