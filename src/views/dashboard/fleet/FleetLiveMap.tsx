import { 
  Navigation, 
  Car, 
  Search,
  Filter
} from 'lucide-react';
import { cn } from '../../../lib/utils';
import fleetData from '../../../data/demo-fleet.json';

export function FleetLiveMap() {
  return (
    <div className="flex flex-col gap-8 h-[calc(100vh-100px)] animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between shrink-0">
        <h1 className="text-3xl font-black tracking-tight italic">Live Fleet Tracking</h1>
        <div className="flex items-center gap-4">
           <div className="px-6 py-2 bg-card/40 border border-white/5 rounded-2xl flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-bold tracking-tight">38 Vehicles in Motion</span>
           </div>
           <button className="p-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all">
              <Filter className="w-4 h-4" />
           </button>
        </div>
      </div>

      <div className="flex-1 min-h-0 flex gap-8">
        {/* Left Column: Map Side Panel */}
        <div className="w-96 flex flex-col gap-6 overflow-y-auto pr-2 pb-4 h-full custom-scrollbar">
           <div className="relative group shrink-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input type="text" placeholder="Filter tracked assets..." className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card/40 border border-white/5 focus:border-primary/50 outline-none font-bold text-sm transition-all" />
           </div>

           <div className="flex flex-col gap-3">
              {fleetData.tracking.map((t) => {
                const v = fleetData.vehicles.find(veh => veh.vin === t.vin);
                return (
                  <div key={t.vin} className="p-5 rounded-3xl bg-card/40 border border-white/5 hover:border-primary/30 transition-all group cursor-pointer relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                       <Navigation className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex items-center gap-4 mb-4 relative z-10">
                       <div className={cn(
                          "w-12 h-12 rounded-2xl flex items-center justify-center relative shadow-inner",
                          t.fuel === 'CNG' ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                       )}>
                          <Car className="w-6 h-6" />
                          <span className={cn(
                             "absolute -bottom-1 -right-1 w-3 h-3 border-2 border-navy rounded-full",
                             t.status === 'moving' ? (t.fuel === 'CNG' ? "bg-accent" : "bg-primary") : "bg-white/20"
                          )} />
                       </div>
                       <div className="flex flex-col">
                          <span className="text-sm font-bold tracking-tight italic">{t.vin}</span>
                          <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">{v?.driver}</span>
                       </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 relative z-10">
                       <div className="flex flex-col gap-0.5">
                          <span className="text-[9px] font-black text-text-muted uppercase tracking-widest">Speed</span>
                          <span className="text-base font-bold text-text-primary">{t.speed}</span>
                       </div>
                       <div className="flex flex-col gap-0.5">
                          <span className="text-[9px] font-black text-text-muted uppercase tracking-widest">Fuel</span>
                          <span className={cn("text-base font-bold", t.fuel === 'CNG' ? "text-accent" : "text-primary")}>{t.fuel}</span>
                       </div>
                       <div className="flex flex-col gap-0.5">
                          <span className="text-[9px] font-black text-text-muted uppercase tracking-widest">Efficiency</span>
                          <span className="text-base font-bold text-accent">{v?.health_score}%</span>
                       </div>
                    </div>
                  </div>
                );
              })}
           </div>
        </div>

        {/* Center: Map */}
        <div className="flex-1 bg-card/40 border border-white/5 rounded-[40px] relative overflow-hidden">
           <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
           
           <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
              <svg className="absolute inset-0 w-full h-full text-white/[0.02]" viewBox="0 0 1000 600">
                 <path d="M100,200 Q300,50 500,200 T900,200" fill="none" stroke="currentColor" strokeWidth="60" strokeLinecap="round" />
                 <path d="M150,400 Q400,300 600,450 T850,350" fill="none" stroke="currentColor" strokeWidth="40" strokeLinecap="round" />
              </svg>

              {fleetData.tracking.map((t, i) => (
                 <div key={t.vin} className="absolute transition-all duration-1000" style={{ left: `${15 + (i * 18)}%`, top: `${20 + (i * 12)}%` }}>
                    <div className="relative group/pip">
                       <div className={cn(
                          "w-10 h-10 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-md border border-white/20 relative z-20 pointer-events-auto cursor-pointer group-hover/pip:scale-125 transition-transform",
                          t.fuel === 'CNG' ? "bg-accent/40 text-accent border-accent/40" : "bg-primary/40 text-primary border-primary/40"
                       )}>
                          <Car className="w-5 h-5" />
                       </div>
                       <div className={cn("absolute inset-0 rounded-2xl animate-ping scale-150 -z-10", t.fuel === 'CNG' ? "bg-accent/20" : "bg-primary/20")} />
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
