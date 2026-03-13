import { HeroRibbon } from '../components/layout/HeroRibbon';
import { LiveTelemetryCard } from '../components/telemetry/LiveTelemetryCard';
import { RecentTrips } from '../components/trips/RecentTrips';
import { SmartInsights } from '../components/intelligence/SmartInsights';
import demoData from '../data/demo-owner-vehicle.json';

export function OverviewView({ currentTelemetry, onTripClick }: { currentTelemetry: any, onTripClick: (id: string) => void }) {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <HeroRibbon vehicle={demoData.vehicle} metrics={demoData.hero} />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 flex flex-col gap-8">
          <SmartInsights />
          <RecentTrips trips={demoData.recent_trips.slice(0, 3)} onTripClick={onTripClick} />
        </div>
        
        <div className="lg:col-span-4 flex flex-col gap-8">
          <LiveTelemetryCard data={currentTelemetry} />
          <div className="bg-primary/5 border border-primary/10 rounded-[32px] p-8 flex flex-col gap-4 group hover:bg-primary/[0.08] transition-all">
            <div className="flex flex-col">
              <span className="text-[10px] font-semibold text-primary uppercase tracking-[0.2em] mb-1 opacity-70">Hardware Integrity</span>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(0,201,114,0.4)]" />
                <span className="text-lg font-semibold text-white tracking-tight">Snap Engine v2.1 — Online</span>
              </div>
            </div>
            <p className="text-[11px] text-text-muted leading-relaxed opacity-60">
              Synchronized with Snap Global Network. All sensors operating within optimal parameters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
