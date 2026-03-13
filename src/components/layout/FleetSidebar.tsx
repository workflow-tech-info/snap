import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  BarChart3, 
  Truck, 
  MapPin, 
  Route, 
  Fuel, 
  Activity, 
  Wrench, 
  AlertCircle, 
  Users, 
  IndianRupee, 
  FileText, 
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
  X as CloseIcon
} from 'lucide-react';
import { cn } from '../../lib/utils';

export type FleetNavSection = 
  | 'overview' 
  | 'vehicles' 
  | 'live_map' 
  | 'trips' 
  | 'fuel_analytics' 
  | 'telemetry' 
  | 'maintenance' 
  | 'alerts' 
  | 'drivers' 
  | 'finance' 
  | 'reports' 
  | 'settings';

interface FleetSidebarProps {
  activeSection: FleetNavSection;
  onNavigate: (section: FleetNavSection) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const navItems = [
  { id: 'overview', label: 'Overview', icon: BarChart3 },
  { id: 'vehicles', label: 'Vehicles', icon: Truck },
  { id: 'live_map', label: 'Live Map', icon: MapPin },
  { id: 'trips', label: 'Trips', icon: Route },
  { id: 'fuel_analytics', label: 'Fuel Analytics', icon: Fuel },
  { id: 'telemetry', label: 'Telemetry', icon: Activity },
  { id: 'maintenance', label: 'Maintenance', icon: Wrench },
  { id: 'alerts', label: 'Alerts', icon: AlertCircle },
  { id: 'drivers', label: 'Drivers', icon: Users },
  { id: 'finance', label: 'Finance', icon: IndianRupee },
  { id: 'reports', label: 'Reports', icon: FileText },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export function FleetSidebar({ activeSection, onNavigate, isCollapsed, onToggleCollapse }: FleetSidebarProps) {
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleNavigate = (section: FleetNavSection) => {
    onNavigate(section);
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-6 right-6 z-[100] p-3 bg-accent text-navy rounded-2xl shadow-xl active:scale-95 transition-transform"
      >
        {isMobileOpen ? <CloseIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar Container */}
      <aside className={cn(
        "h-screen fixed left-0 top-0 bg-card/80 backdrop-blur-3xl border-r border-white/5 flex flex-col z-50 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-20" : "w-64",
        isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        {/* Collapse Toggle */}
        <button 
          onClick={onToggleCollapse}
          className="hidden lg:flex absolute -right-3 top-24 w-6 h-6 bg-accent text-navy rounded-full items-center justify-center shadow-lg hover:scale-110 transition-transform z-[60]"
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>

        {/* Logo */}
        <div className={cn(
          "p-8 transition-all duration-300",
          isCollapsed ? "px-6 items-center" : "px-8 items-start"
        )}>
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,201,114,0.4)]">
              <span className="text-navy font-black text-xl italic tracking-tighter">S</span>
            </div>
            {!isCollapsed && (
              <span className="text-xl font-bold tracking-tight text-text-primary animate-in fade-in duration-500">FLEET</span>
            )}
          </Link>
        </div>

        <nav className="flex-1 px-4 flex flex-col gap-1 overflow-y-auto custom-scrollbar pb-8 overflow-x-hidden">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id as FleetNavSection)}
                title={isCollapsed ? item.label : undefined}
                className={cn(
                  "w-full flex items-center transition-all duration-200 group text-sm font-semibold relative h-10",
                  isCollapsed ? "justify-center px-0 rounded-full" : "gap-3 px-4 rounded-xl",
                  isActive 
                    ? "bg-accent/10 text-accent font-bold" 
                    : "text-text-muted hover:bg-white/5 hover:text-text-primary"
                )}
              >
                <Icon className={cn(
                  "w-4 h-4 transition-transform group-hover:scale-110 shrink-0",
                  isActive ? "text-accent" : "text-text-muted group-hover:text-text-primary"
                )} />
                {!isCollapsed && (
                  <span className="truncate animate-in fade-in slide-in-from-left-2 duration-300">{item.label}</span>
                )}
                {isActive && isCollapsed && (
                  <div className="absolute right-0 w-1 h-5 bg-accent rounded-l-full" />
                )}
              </button>
            );
          })}
        </nav>

        <div className={cn(
          "p-4 border-t border-white/5 flex flex-col gap-1",
          isCollapsed ? "items-center" : "items-stretch"
        )}>
          {!isCollapsed && (
            <button 
              onClick={() => navigate('/login')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-text-muted hover:text-text-primary transition-colors text-[10px] font-bold uppercase tracking-widest animate-in fade-in"
            >
              <ChevronLeft className="w-3 h-3" /> Switch Role
            </button>
          )}

          <button 
            onClick={() => navigate('/login')}
            title={isCollapsed ? "Logout" : undefined}
            className={cn(
              "flex items-center transition-all text-text-muted hover:bg-danger/10 hover:text-danger text-sm font-bold group h-12",
              isCollapsed ? "justify-center rounded-full px-0" : "gap-3 px-4 rounded-xl w-full"
            )}
          >
            <LogOut className="w-4 h-4 shrink-0 group-hover:-translate-x-1 transition-transform" />
            {!isCollapsed && (
              <span className="animate-in fade-in">Logout</span>
            )}
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden fixed inset-0 bg-navy/60 backdrop-blur-sm z-40 animate-in fade-in duration-300"
        />
      )}
    </>
  );
}
