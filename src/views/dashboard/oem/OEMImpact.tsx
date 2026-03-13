import { 
  Leaf, 
  TrendingUp, 
  Droplets,
  ArrowUpRight,
  Activity
} from 'lucide-react';
import { 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';
import demoOem from '../../../data/demo-oem.json';

export function OEMImpact() {
  const s = demoOem.summary;
  
  const fuelData = [
    { name: 'Mon', petrol: 480, cng: 510 },
    { name: 'Tue', petrol: 495, cng: 525 },
    { name: 'Wed', petrol: 510, cng: 540 },
    { name: 'Thu', petrol: 505, cng: 535 },
    { name: 'Fri', petrol: 520, cng: 550 },
    { name: 'Sat', petrol: 490, cng: 520 },
    { name: 'Sun', petrol: 470, cng: 500 },
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500 font-black tracking-tighter italic uppercase">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl tracking-tighter italic uppercase">Environmental & Economic Impact</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="bg-card/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-4 shadow-2xl shadow-black/40 relative overflow-hidden group">
            <Droplets className="w-10 h-10 text-primary opacity-40 mb-2" />
            <div className="flex flex-col">
               <span className="text-[10px] font-black text-text-muted uppercase tracking-widest not-italic italic opacity-60">Petrol Offset Today</span>
               <span className="text-4xl font-black italic">{s.daily_fuel_saved.toLocaleString()} <span className="text-sm opacity-40">L</span></span>
            </div>
            <div className="flex items-center gap-2 text-accent text-[10px] font-bold uppercase tracking-widest leading-none">
               <ArrowUpRight className="w-3 h-3" /> Fleet-wide impact
            </div>
         </div>
         <div className="bg-card/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-4 shadow-2xl shadow-black/40 relative overflow-hidden group">
            <Leaf className="w-10 h-10 text-accent opacity-40 mb-2" />
            <div className="flex flex-col">
               <span className="text-[10px] font-black text-text-muted uppercase tracking-widest not-italic italic opacity-60">CO₂ Reductions</span>
               <span className="text-4xl font-black italic">812,000 <span className="text-sm opacity-40">kg</span></span>
            </div>
            <div className="text-[10px] text-primary font-black uppercase tracking-widest opacity-40 leading-none">Net Carbon Credit</div>
         </div>
         <div className="bg-accent/10 border border-accent/20 rounded-[40px] p-8 flex flex-col gap-4 shadow-2xl shadow-black/40 relative overflow-hidden group">
            <TrendingUp className="w-10 h-10 text-accent opacity-60 mb-2" />
            <div className="flex flex-col">
               <span className="text-[10px] font-black text-accent uppercase tracking-widest not-italic italic opacity-60">Economic Savings</span>
               <span className="text-4xl font-black italic">₹5.1 <span className="text-sm opacity-40">Cr</span></span>
            </div>
            <div className="text-[10px] text-accent font-black uppercase tracking-widest opacity-60 leading-none">Network value today</div>
         </div>
      </div>

      <div className="bg-card/40 border border-white/5 rounded-[40px] p-10 shadow-2xl shadow-black/40">
         <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
               <Activity className="w-6 h-6 text-primary" />
               <h2 className="text-xl font-bold tracking-tight text-white uppercase tracking-tighter">Petrol Replaced vs CNG Adoption</h2>
            </div>
         </div>
         <div className="h-96 w-full font-black tracking-widest text-[10px] lowercase opacity-60">
            <ResponsiveContainer width="100%" height="100%">
               <BarChart data={fuelData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9FB4D6', fontSize: 10, fontWeight: 'black'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#9FB4D6', fontSize: 10}} />
                  <Tooltip contentStyle={{ backgroundColor: '#0B1220', border: 'none', borderRadius: '16px', color: '#fff' }} />
                  <Bar dataKey="petrol" fill="#0B68FF" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="cng" fill="#00C972" radius={[4, 4, 0, 0]} />
               </BarChart>
            </ResponsiveContainer>
         </div>
      </div>
    </div>
  );
}
