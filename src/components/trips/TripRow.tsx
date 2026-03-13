import { Route, Calendar, Leaf, IndianRupee, ArrowRightLeft, Clock } from 'lucide-react';

interface TripRowProps {
  trip: {
    trip_id: string;
    start: string;
    from: string;
    to: string;
    distance_km: number;
    duration_min: number;
    gas_kg: number;
    switches: number;
    petrol_eq_l: number;
    savings_inr: number;
  };
  onClick: (id: string) => void;
}

export function TripRow({ trip, onClick }: TripRowProps) {
  const dt = new Date(trip.start);
  const timeString = dt.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const dateString = dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  return (
    <div 
      onClick={() => onClick(trip.trip_id)}
      className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-colors p-4 rounded-2xl cursor-pointer group flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <Route className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-text-primary tracking-tight truncate max-w-[120px] sm:max-w-none">
              {trip.from} <span className="text-text-muted font-normal mx-0.5 opacity-60">→</span> {trip.to}
            </span>
            <span className="text-[10px] text-text-muted font-medium uppercase tracking-[0.1em] flex items-center gap-1.5 opacity-80">
              <Calendar className="w-3" strokeWidth={1.5} />
              {dateString} • {timeString}
            </span>
          </div>
        </div>
        
        <div className="flex flex-col items-end text-right">
          <span className="text-sm font-semibold text-text-primary">{trip.distance_km} km</span>
          <span className="text-[10px] text-text-muted font-medium uppercase tracking-[0.1em] flex items-center gap-1.5 opacity-80">
            <Clock className="w-3" strokeWidth={1.5} />
            {trip.duration_min} min
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between bg-navy/30 rounded-xl px-4 py-2.5">
        <div className="flex items-center gap-5 text-xs font-medium text-text-muted">
          <div className="flex items-center gap-2" title="Gas Used">
            <Leaf className="w-4 h-4 text-accent opacity-80" />
            <span className="text-text-primary font-semibold">{trip.gas_kg}</span> kg
          </div>
          <div className="flex items-center gap-2" title="Switches">
            <ArrowRightLeft className="w-4 h-4 text-warn opacity-80" />
            <span className="text-text-primary font-semibold">{trip.switches}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-[11px] font-semibold text-accent bg-accent/5 px-3 py-1.5 rounded-lg border border-accent/20">
          <span className="text-text-muted font-medium text-[10px] uppercase tracking-wider mr-1 line-through opacity-50">₹{(trip.petrol_eq_l * 112.5).toFixed(0)}</span>
          <IndianRupee className="w-3 h-3" strokeWidth={1.5} />
          Save {trip.savings_inr}
        </div>
      </div>
    </div>
  );
}
