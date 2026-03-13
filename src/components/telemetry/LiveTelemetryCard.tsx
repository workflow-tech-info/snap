import { AlertCircle, Zap, Droplet, Thermometer } from 'lucide-react';
import { Gauge } from './Gauge';

export function LiveTelemetryCard({ data, isOffline = false }: { data: any, isOffline?: boolean }) {
  const isEV = data.fuel_mode === 'EV';
  const timeText = isOffline ? `Offline — last seen 00:10:34 ago` : `updated 8s ago`;
  
  return (
    <div className={`bg-card/40 backdrop-blur-xl border border-white/5 shadow-2xl rounded-3xl p-6 relative overflow-hidden flex flex-col gap-6 ${isOffline ? 'opacity-80' : ''}`}>
      
      {/* Background radial gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10" />

      {/* Header */}
      <div className="flex items-center justify-between z-10">
        <h2 className="text-lg font-bold text-text-primary tracking-tight">Live Telemetry</h2>
        <div className="flex items-center gap-2">
          {isOffline ? (
            <span className="w-2 h-2 rounded-full bg-warn" />
          ) : (
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(0,201,114,0.6)]" />
          )}
          <span className="text-xs font-medium text-text-muted">{timeText}</span>
        </div>
      </div>

      {/* Gauges Row */}
      <div className="grid grid-cols-3 gap-2">
         {isEV ? (
           <>
             <Gauge label="Charge" value={data.soc} min={0} max={100} unit="%" color={data.soc < 20 ? "danger" : "accent"} />
             <Gauge label="Bat Temp" value={data.temp} min={0} max={80} unit="°C" color={data.temp > 55 ? "danger" : "accent"} />
             <Gauge label="Voltage" value={398} min={300} max={450} unit="V" color="primary" />
           </>
         ) : (
           <>
             <Gauge label="RPM" value={data.rpm} min={0} max={6000} unit="rpm" color="primary" />
             <Gauge label="Temp" value={data.coolant_c} min={0} max={120} unit="°C" color={data.coolant_c > 105 ? "danger" : "accent"} />
             <Gauge label="Gas Pres" value={data.gas_pressure_bar} min={0} max={250} unit="bar" color="primary" />
           </>
         )}
      </div>

      {/* Metrics Grid */}
      <div className="bg-white/5 rounded-2xl p-4 grid grid-cols-2 gap-x-4 gap-y-5 text-sm">
         <div className="flex flex-col gap-1">
            <span className="text-text-muted text-[10px] font-medium uppercase tracking-widest flex items-center gap-1.5"><Zap className="w-3" strokeWidth={1.5} /> {isEV ? 'Motor Load' : 'Engine Load'}</span>
            <span className="text-text-primary text-base font-semibold">{isEV ? '42%' : `${data.engine_load_pct}%`}</span>
         </div>
         <div className="flex flex-col gap-1">
            <span className="text-text-muted text-[10px] font-medium uppercase tracking-widest flex items-center gap-1.5"><Droplet className="w-3" strokeWidth={1.5} /> {isEV ? 'Battery' : 'Fuel Mode'}</span>
            <span className="text-accent text-base font-semibold">{isEV ? 'Lithium-Ion' : data.fuel_mode}</span>
         </div>
         <div className="flex flex-col gap-1">
            <span className="text-text-muted text-[10px] font-medium uppercase tracking-widest flex items-center gap-1.5"><Thermometer className="w-3" strokeWidth={1.5} /> {isEV ? 'System' : 'Environment'}</span>
            <span className="text-text-primary text-base font-semibold">{isEV ? 'Optimal' : `${data.iat_c}°C`} <span className="text-white/20 mx-1">|</span> {isEV ? 'Locked' : `${data.lambda?.toFixed(2)} λ`}</span>
         </div>
         <div className="flex flex-col gap-1">
            <span className="text-text-muted text-[10px] font-medium uppercase tracking-widest">{isEV ? 'Range Est.' : 'MAP Pressure'}</span>
            <span className="text-text-primary text-base font-semibold">{isEV ? `${data.range_left} km` : `${data.map_bar} bar`}</span>
         </div>
      </div>

      {/* Regulators & Timings */}
      <div className="border border-white/5 rounded-2xl p-4 text-[11px] font-medium text-text-muted grid grid-cols-2 gap-4">
         <div className="flex flex-col gap-2">
            <div className="flex justify-between">Regulator: <span className="text-text-primary">{data.regulator_pressure_bar?.toFixed(2)} bar</span></div>
            <div className="flex justify-between">Gas Temp: <span className="text-text-primary">{data.gas_temp_c} °C</span></div>
         </div>
         <div className="flex flex-col gap-2">
            <div className="flex justify-between">Gas Inj: <span className="text-text-primary">{data.gas_injector_ms} ms</span></div>
            <div className="flex justify-between">Petrol Baseline: <span className="text-text-primary">{data.petrol_injector_ms} ms</span></div>
         </div>
      </div>

      {/* Injector Status Array Grid */}
      <div>
        <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-3">Injector Duty</h3>
        <div className="grid grid-cols-4 gap-2">
          {data.injectors.map((inj: any, i: number) => {
            const isImbalance = inj.status === "IMBALANCE";
            return (
              <div key={i} className={`p-2 rounded-xl flex flex-col items-center justify-center gap-1 ${isImbalance ? 'bg-warn/10 border border-warn/20' : 'bg-white/5 border border-white/5'}`}>
                <span className="text-xs font-bold text-text-muted">C{inj.cylinder}</span>
                <span className={`text-sm font-bold ${isImbalance ? 'text-warn' : 'text-accent'}`}>{inj.duty_pct}%</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fault display (Clickable prototype) */}
      {data.fault_codes.length > 0 && (
         <div className="px-4 py-3 bg-danger/10 border border-danger/20 rounded-2xl flex items-start gap-3 cursor-pointer hover:bg-danger/15 transition-colors group">
            <AlertCircle className="w-5 h-5 text-danger shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
            <div className="flex flex-col gap-1">
               <div className="text-danger font-bold text-sm tracking-tight">{data.fault_codes[0].code} — Misfire (cylinder 2)</div>
               <div className="text-xs text-danger/80">Occurred {data.fault_codes[0].count} times in last 24h. Suggest: injector cleaning or re-map.</div>
            </div>
         </div>
      )}

      {/* Metadata */}
      <div className="pt-2 flex items-center justify-between text-[10px] text-text-muted uppercase tracking-wide font-semibold">
         <span>Cal: {data.calibration_version}</span>
         <span>Latency: {data.switch_latency_ms_last}ms</span>
      </div>

    </div>
  );
}
