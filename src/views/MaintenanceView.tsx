import { MaintenanceCard } from '../components/maintenance/MaintenanceCard';
import { Truck, ShieldCheck, History, AlertTriangle } from 'lucide-react';
import demoData from '../data/demo-owner-vehicle.json';

export function MaintenanceView({ onBookService }: { onBookService: () => void }) {
  const k = demoData.kit_and_cylinder;
  
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Maintenance & Health</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 flex flex-col gap-6">
           <div className="bg-warn/10 border border-warn/20 rounded-3xl p-6 flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-warn shrink-0" />
              <div className="flex flex-col gap-1">
                 <span className="text-sm font-bold text-warn">Upcoming Service Required</span>
                 <p className="text-xs text-text-muted">Your 40k KM maintenance filter replacement is due in 840 km.</p>
              </div>
           </div>

           <MaintenanceCard 
             data={k} 
             slots={demoData.service_slots} 
             onBookService={onBookService} 
           />
        </div>

        <div className="lg:col-span-8 flex flex-col gap-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card/40 border border-white/5 rounded-3xl p-6 flex flex-col gap-6">
                 <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-text-primary">Installation Kit</h3>
                 </div>
                 <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                       <span className="text-text-muted">ECU Serial</span>
                       <span className="text-text-primary font-mono font-bold">{k.kit_serial}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                       <span className="text-text-muted">Kit Brand</span>
                       <span className="text-text-primary font-bold">{k.kit_brand}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-text-muted">Warranty (Kit)</span>
                       <span className="text-text-primary font-bold">{k.warranty_kit_months} Months</span>
                    </div>
                 </div>
              </div>

              <div className="bg-card/40 border border-white/5 rounded-3xl p-6 flex flex-col gap-6">
                 <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                    <h3 className="font-bold text-text-primary">Cylinder Specs</h3>
                 </div>
                 <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                       <span className="text-text-muted">Capacity</span>
                       <span className="text-text-primary font-bold">{k.cylinder.water_l} L / {k.cylinder.gas_kg_est} Kg</span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                       <span className="text-text-muted">Hydro-test Due</span>
                       <span className="text-warn font-bold">{k.hydro_test_due}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-text-muted">Mount Type</span>
                       <span className="text-text-primary font-bold">{k.cylinder.mount}</span>
                    </div>
                 </div>
              </div>
           </div>

           <div className="bg-card/40 border border-white/5 rounded-3xl p-6 flex flex-col gap-6">
              <div className="flex items-center gap-2 border-b border-white/5 pb-4">
                 <History className="w-5 h-5 text-text-muted" />
                 <h3 className="font-bold text-text-primary">Filter Status</h3>
              </div>
              <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between text-sm">
                     <div className="flex flex-col">
                        <span className="text-text-primary font-bold">Low Pressure Filter</span>
                        <span className="text-[10px] text-text-muted uppercase tracking-wider">Next due: {k.filters.low_pressure_next_due}</span>
                     </div>
                     <div className="flex flex-col items-end">
                        <span className="text-text-primary font-semibold">Last: {k.filters.low_pressure_last}</span>
                        <span className="text-[10px] text-accent font-bold uppercase tracking-wider">OK</span>
                     </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                     <div className="flex flex-col">
                        <span className="text-text-primary font-bold">High Pressure Filter</span>
                        <span className="text-[10px] text-text-muted uppercase tracking-wider">Next due: {k.filters.high_pressure_next_due}</span>
                     </div>
                     <div className="flex flex-col items-end">
                        <span className="text-text-primary font-semibold">Last: {k.filters.high_pressure_last}</span>
                        <span className="text-[10px] text-accent font-bold uppercase tracking-wider">OK</span>
                     </div>
                  </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
