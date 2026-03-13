import { Wrench, ShieldCheck, CalendarCheck, Activity } from 'lucide-react';

interface MaintenanceProps {
  data: {
    kit_brand: string;
    kit_serial: string;
    type: string;
    cylinder: { type: string, water_l: number, gas_kg_est: number, weight_kg: number, mount: string };
    install_date: string;
    warranty_kit_months: number;
    warranty_cylinder_months: number;
    hydro_test_due: string;
    filters: {
      low_pressure_last: string, low_pressure_next_due: string,
      high_pressure_last: string, high_pressure_next_due: string
    };
  };
  slots: string[];
  onBookService: () => void;
}

export function MaintenanceCard({ data, slots, onBookService }: MaintenanceProps) {
  return (
    <div className="bg-card/40 backdrop-blur-xl border border-white/5 shadow-2xl rounded-3xl p-6 flex flex-col gap-6 w-full h-full relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px] -z-10" />

      <h2 className="text-lg font-bold text-text-primary tracking-tight flex items-center gap-2">
        <Wrench className="w-5 h-5 text-primary" /> Maintenance & Warranties
      </h2>

      {/* Kit & Cylinder Specs */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/5 rounded-2xl p-4 flex flex-col gap-2">
           <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Kit Information</span>
           <div className="font-bold text-sm text-text-primary">{data.kit_brand}</div>
           <div className="text-xs text-text-muted">{data.type} Injection</div>
           <div className="font-mono text-[10px] text-white/50 mt-1">{data.kit_serial}</div>
        </div>
        <div className="bg-white/5 rounded-2xl p-4 flex flex-col gap-2">
           <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Cylinder</span>
           <div className="font-bold text-sm text-text-primary">{data.cylinder.type}</div>
           <div className="text-xs text-text-muted">{data.cylinder.water_l}L / ~{data.cylinder.gas_kg_est}kg Gas</div>
           <div className="text-[10px] text-text-muted mt-1">{data.cylinder.mount}</div>
        </div>
      </div>

      {/* Warranties & Dates */}
      <div className="flex flex-col gap-3">
         <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
            <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
            <div className="flex flex-col gap-0.5 w-full">
               <div className="text-xs font-semibold text-text-muted flex justify-between">
                  <span>Kit Warranty <span className="font-normal text-[10px] ml-1">({data.warranty_kit_months} mo)</span></span>
                  <span className="text-accent font-bold">Active</span>
               </div>
               <div className="text-[10px] text-white/50">Installed: {data.install_date}</div>
            </div>
         </div>
         <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
            <Activity className="w-5 h-5 text-warn shrink-0" />
            <div className="flex flex-col gap-0.5 w-full">
               <div className="text-xs font-semibold text-text-muted flex justify-between">
                  <span>Cylinder Hydro-test</span>
                  <span className="text-text-primary font-bold">{data.hydro_test_due}</span>
               </div>
            </div>
         </div>
      </div>

      {/* Filters */}
      <div className="border border-white/5 rounded-2xl p-4 flex flex-col gap-3">
         <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-text-muted uppercase tracking-wider text-[10px]">LP Filter</span>
            <span className="font-bold text-warn text-right leading-none">Due: {data.filters.low_pressure_next_due} <br/><span className="text-[9px] text-text-muted uppercase tracking-wider font-normal">or 40,000 km</span></span>
         </div>
         <div className="w-full h-[1px] bg-white/5" />
         <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-text-muted uppercase tracking-wider text-[10px]">HP Filter</span>
            <span className="font-bold text-text-primary text-right leading-none">Due: {data.filters.high_pressure_next_due} <br/><span className="text-[9px] text-text-muted uppercase tracking-wider font-normal">or 80,000 km</span></span>
         </div>
      </div>

      {/* Service Action */}
      <div className="bg-primary/10 border border-primary/20 rounded-2xl p-5 flex flex-col gap-4 mt-auto">
         <div className="flex items-center gap-3 text-sm font-bold text-primary">
            <CalendarCheck className="w-5 h-5" />
            Book Regulator Check
         </div>
         
         <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {slots.map(slot => {
               const d = new Date(slot);
               return (
                  <button key={slot} className="shrink-0 px-3 py-2 rounded-xl bg-white/10 hover:bg-primary text-xs font-medium text-text-primary transition-colors border border-white/10 flex flex-col gap-1 items-center justify-center min-w-[80px]">
                     <span>{d.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' })}</span>
                     <span className="font-bold">{d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</span>
                  </button>
               );
            })}
         </div>

         <div className="flex gap-3">
            <button onClick={onBookService} className="flex-1 bg-primary text-white font-bold py-3 rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20 text-sm">
               Book Now (₹499)
            </button>
            <button className="px-4 bg-white/5 text-text-primary font-bold py-3 rounded-xl hover:bg-white/10 transition-colors text-xs whitespace-nowrap">
               Urgent 24h
            </button>
         </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
