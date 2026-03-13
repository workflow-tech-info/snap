import { RecentTrips } from '../components/trips/RecentTrips';
import { TimeSeriesChart } from '../components/charts/TimeSeriesChart';
import { Download } from 'lucide-react';
import demoData from '../data/demo-owner-vehicle.json';

export function TripsView({ onTripClick }: { onTripClick: (id: string) => void }) {
  return (
    <div className="flex flex-col gap-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white uppercase tracking-tighter">Trip Analytics</h1>
        <button className="flex items-center gap-3 px-6 py-4 bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all text-text-muted hover:text-white">
          <Download className="w-4 h-4" strokeWidth={2.5} /> Export Dataset
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-[40px] p-8 flex flex-col gap-4 group hover:bg-white/[0.03] transition-all shadow-2xl">
          <span className="text-[10px] font-semibold text-text-muted uppercase tracking-[0.2em] opacity-60">Total Deployment</span>
          <span className="text-4xl font-semibold text-text-primary tracking-tight">1,240 <span className="text-sm font-medium opacity-30 uppercase ml-1">km</span></span>
        </div>
        <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-[40px] p-8 flex flex-col gap-4 group hover:bg-white/[0.03] transition-all shadow-2xl">
          <span className="text-[10px] font-semibold text-text-muted uppercase tracking-[0.2em] opacity-60">Efficiency Index</span>
          <span className="text-4xl font-semibold text-accent tracking-tight">94<span className="text-sm font-medium opacity-50 ml-0.5">%</span></span>
        </div>
        <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-[40px] p-8 flex flex-col gap-4 group hover:bg-white/[0.03] transition-all shadow-2xl">
          <span className="text-[10px] font-semibold text-text-muted uppercase tracking-[0.2em] opacity-60">CNG Volume Used</span>
          <span className="text-4xl font-semibold text-text-primary tracking-tight">42.5 <span className="text-sm font-medium opacity-30 uppercase ml-1">kg</span></span>
        </div>
        <div className="bg-accent/5 border border-accent/20 rounded-[40px] p-8 flex flex-col gap-4 group hover:bg-accent/[0.08] transition-all shadow-2xl">
          <span className="text-[10px] font-semibold text-accent uppercase tracking-[0.2em] opacity-80">Aggregate Savings</span>
          <span className="text-4xl font-semibold text-white tracking-tight">₹4,230</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-12">
          <TimeSeriesChart data={demoData.timeseries_sample} />
        </div>
        <div className="lg:col-span-12">
          <RecentTrips trips={demoData.recent_trips} onTripClick={onTripClick} />
        </div>
      </div>
    </div>
  );
}
