import { LiveTelemetryCard } from '../components/telemetry/LiveTelemetryCard';
import { ConversionHealthCard } from '../components/health/ConversionHealthCard';
import { Cpu, Droplet, Activity } from 'lucide-react';

export function TelemetryView({ currentTelemetry }: { currentTelemetry: any }) {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Full Telemetry</h1>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-accent/20 border border-accent/20 rounded-full text-xs font-bold text-accent uppercase tracking-widest animate-pulse">Live Output</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Real-time Section */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <LiveTelemetryCard data={currentTelemetry} />
        </div>

        {/* Detailed Data Grids */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-card/40 border border-white/5 rounded-3xl p-6 flex flex-col gap-6">
                <div className="flex items-center gap-2">
                   <Cpu className="w-5 h-5 text-primary" />
                   <h3 className="font-bold text-text-primary">Engine Data</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                   <div className="flex flex-col gap-1">
                      <span className="text-text-muted text-xs font-bold uppercase">Throttle Pos</span>
                      <span className="text-text-primary font-bold">14.2%</span>
                   </div>
                   <div className="flex flex-col gap-1">
                      <span className="text-text-muted text-xs font-bold uppercase">Load (Calc)</span>
                      <span className="text-text-primary font-bold">{currentTelemetry.engine_load_pct}%</span>
                   </div>
                   <div className="flex flex-col gap-1">
                      <span className="text-text-muted text-xs font-bold uppercase">MAP</span>
                      <span className="text-text-primary font-bold">{currentTelemetry.map_bar} bar</span>
                   </div>
                   <div className="flex flex-col gap-1">
                      <span className="text-text-muted text-xs font-bold uppercase">IAT</span>
                      <span className="text-text-primary font-bold">{currentTelemetry.iat_c}°C</span>
                   </div>
                </div>
             </div>

             <div className="bg-card/40 border border-white/5 rounded-3xl p-6 flex flex-col gap-6">
                <div className="flex items-center gap-2">
                   <Droplet className="w-5 h-5 text-accent" />
                   <h3 className="font-bold text-text-primary">Fuel System</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                   <div className="flex flex-col gap-1">
                      <span className="text-text-muted text-xs font-bold uppercase">Gas Pres</span>
                      <span className="text-text-primary font-bold">{currentTelemetry.gas_pressure_bar} bar</span>
                   </div>
                   <div className="flex flex-col gap-1">
                      <span className="text-text-muted text-xs font-bold uppercase">Reg Pres</span>
                      <span className="text-text-primary font-bold">{currentTelemetry.regulator_pressure_bar} bar</span>
                   </div>
                   <div className="flex flex-col gap-1">
                      <span className="text-text-muted text-xs font-bold uppercase">Gas Temp</span>
                      <span className="text-text-primary font-bold">{currentTelemetry.gas_temp_c}°C</span>
                   </div>
                   <div className="flex flex-col gap-1">
                      <span className="text-text-muted text-xs font-bold uppercase">Inject Time</span>
                      <span className="text-text-primary font-bold">{currentTelemetry.gas_injector_ms}ms</span>
                   </div>
                </div>
             </div>
          </div>

          <ConversionHealthCard health={currentTelemetry.conversion_health || {}} />
          
          <div className="bg-card/40 border border-white/5 rounded-3xl p-6 flex flex-col gap-6">
                <div className="flex items-center gap-2">
                   <Activity className="w-5 h-5 text-warn" />
                   <h3 className="font-bold text-text-primary">System Calibration</h3>
                </div>
                <div className="grid grid-cols-4 gap-4 text-sm">
                   <div className="flex flex-col gap-1">
                      <span className="text-text-muted text-[10px] font-bold uppercase">Latency</span>
                      <span className="text-text-primary font-bold">{currentTelemetry.switch_latency_ms_last}ms</span>
                   </div>
                   <div className="flex flex-col gap-1">
                      <span className="text-text-muted text-[10px] font-bold uppercase">Lambda</span>
                      <span className="text-text-primary font-bold">{currentTelemetry.lambda}</span>
                   </div>
                   <div className="flex flex-col gap-1">
                      <span className="text-text-muted text-[10px] font-bold uppercase">Calibration</span>
                      <span className="text-text-primary font-bold">{currentTelemetry.calibration_version}</span>
                   </div>
                   <div className="flex flex-col gap-1">
                      <span className="text-text-muted text-[10px] font-bold uppercase">RPM Filter</span>
                      <span className="text-text-primary font-bold">Enabled</span>
                   </div>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
}
