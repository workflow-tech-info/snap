interface GaugeProps {
  label: string;
  value: number;
  min: number;
  max: number;
  unit: string;
  color: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function Gauge({ label, value, min, max, unit, color, className, size = 100, strokeWidth = 8 }: GaugeProps) {
  // calculate SVG metrics for an incomplete circle (arc)
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  // 3/4 circle
  const strokeDasharray = `${(circumference * 0.75)} ${circumference}`;
  
  const percentage = Math.max(0, Math.min(1, (value - min) / (max - min)));
  const strokeDashoffset = (circumference * 0.75) * (1 - percentage);
  
  // Transform to rotate the arc start to bottom-left
  const center = size / 2;

  // Animation easing handles in CSS using tailwind "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
  
  return (
    <div className={`flex flex-col items-center justify-center ${className || ''}`}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg fill="none" viewBox={`0 0 ${size} ${size}`} className="rotate-[135deg] transform origin-center absolute inset-0">
          <circle 
            cx={center} 
            cy={center} 
            r={radius} 
            stroke="rgba(255,255,255,0.05)" 
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
          />
          <circle 
             cx={center} 
             cy={center} 
             r={radius} 
             stroke={DOMMatrixReadOnly ? `var(--color-${color})` : color}
             className="transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
             style={{ stroke: `var(--color-${color}, ${color})` }}
             strokeWidth={strokeWidth}
             strokeDasharray={strokeDasharray}
             strokeDashoffset={strokeDashoffset}
             strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-2">
          <span className="text-xl font-semibold tracking-tight text-white drop-shadow-sm">
            {Number.isInteger(value) ? value : value.toFixed(1)}
          </span>
          <span className="text-[10px] font-medium text-text-muted uppercase tracking-[0.2em]">{unit}</span>
        </div>
      </div>
      <div className="text-[10px] font-semibold text-text-muted mt-1 uppercase tracking-widest">{label}</div>
    </div>
  );
}
