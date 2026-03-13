import { TripRow } from './TripRow';

interface RecentTripsProps {
  trips: any[];
  onTripClick: (tripId: string) => void;
}

export function RecentTrips({ trips, onTripClick }: RecentTripsProps) {
  return (
    <div className="bg-card/40 backdrop-blur-xl border border-white/5 shadow-2xl rounded-3xl p-6 flex flex-col gap-5 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -z-10" />

      <h2 className="text-lg font-semibold text-text-primary tracking-tight">Recent Trips</h2>

      <div className="flex flex-col gap-3">
        {trips.map((trip) => (
          <TripRow key={trip.trip_id} trip={trip} onClick={onTripClick} />
        ))}
      </div>
    </div>
  );
}
