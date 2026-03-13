import { Clock, Navigation, BadgeIndianRupee } from 'lucide-react';

interface HeroProps {
  vehicle: {
    make: string;
    model: string;
    year: number;
    vin: string;
    status: string;
    fuel_mode: string;
  };
  metrics: {
    today_savings: number;
    range_left_km: number;
    gas_in_tank_kg: number;
    tank_capacity_kg: number;
    next_service: {
      distance_km: number;
      days: number;
    };
  };
}

export function HeroRibbon({ vehicle, metrics }: HeroProps) {
  return (
    <section className="w-full relative overflow-hidden bg-card border-b border-white/5 pt-8 pb-10 px-6 md:px-8">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col gap-8 relative z-10">
        
        {/* Top: Vehicle Header & Status Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <h1 className="text-3xl md:text-5xl font-semibold text-text-primary tracking-tight">
                {vehicle.make} {vehicle.model} <span className="text-text-muted font-medium opacity-50">({vehicle.year})</span>
              </h1>
              
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 border border-accent/20">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(0,201,114,0.4)]" />
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{vehicle.fuel_mode} ACTIVE</span>
              </div>
            </div>
            <p className="text-sm font-medium text-text-muted flex items-center gap-3">
              <span className="opacity-60">VIN:</span> <span className="font-mono text-xs text-text-primary">{vehicle.vin}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Device Connected
              </span>
            </p>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="h-16 w-32 md:w-56 bg-white/[0.03] rounded-2xl flex items-center justify-center text-xs text-text-muted overflow-hidden relative group border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                <img src="/snap-hero-flow.svg" className="w-full h-full object-contain p-3 opacity-80" alt="Status Visualization" />
             </div>
          </div>
        </div>

        {/* Bottom: KPI Chips Strip */}
        <div className="flex overflow-x-auto pb-4 -mb-4 snap-x md:grid md:grid-cols-3 md:gap-8 md:pb-0 md:mb-0 hide-scrollbar">
          
          <div className="snap-start shrink-0 w-72 md:w-auto bg-white/5 border border-white/5 rounded-[28px] p-6 flex flex-col gap-4 mr-4 md:mr-0">
            <div className="flex items-center gap-3 text-text-muted text-[11px] font-semibold uppercase tracking-widest">
              <BadgeIndianRupee className="w-5 h-5 text-accent opacity-80" strokeWidth={1.5} />
              Today Savings
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-semibold text-text-primary tracking-tight">₹{metrics.today_savings}</span>
            </div>
            <div className="text-[11px] text-text-muted font-medium opacity-60 italic">vs. Petrol baseline</div>
          </div>

          <div className="snap-start shrink-0 w-72 md:w-auto bg-white/5 border border-white/5 rounded-[28px] p-6 flex flex-col gap-4 mr-4 md:mr-0 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
            <div className="flex items-center gap-3 text-text-muted text-[11px] font-semibold uppercase tracking-widest relative z-10">
              <Navigation className="w-5 h-5 text-primary opacity-80" strokeWidth={1.5} />
              Estimated Range ({vehicle.fuel_mode})
            </div>
            <div className="flex items-baseline gap-2 relative z-10">
              <span className="text-4xl font-semibold text-text-primary tracking-tight">{metrics.range_left_km}</span>
              <span className="text-sm text-text-muted font-medium opacity-60 uppercase tracking-widest">km</span>
            </div>
            <div className="text-[11px] text-text-muted font-medium flex items-center justify-between relative z-10 opacity-70">
              <span>Fuel Rem: {metrics.gas_in_tank_kg} / {metrics.tank_capacity_kg} kg</span>
            </div>
          </div>

          <div className="snap-start shrink-0 w-72 md:w-auto bg-white/5 border border-white/5 rounded-[28px] p-6 flex flex-col gap-4 relative overflow-hidden">
            <div className="flex items-center gap-3 text-text-muted text-[11px] font-semibold uppercase tracking-widest">
              <Clock className="w-5 h-5 text-warn opacity-80" strokeWidth={1.5} />
              Maintenance
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold text-text-primary tracking-tight">In {metrics.next_service.distance_km} km</span>
              <span className="text-xs text-text-muted font-medium opacity-60">/ {metrics.next_service.days}d</span>
            </div>
            <div className="text-[11px] text-warn font-medium flex items-center gap-1.5 opacity-80">
              <span className="w-1.5 h-1.5 rounded-full bg-warn" />
              Filter replacement at 40k km
            </div>
          </div>

        </div>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
