import { 
  LayoutDashboard, 
  Car, 
  Route, 
  Activity, 
  Wrench, 
  IndianRupee, 
  FileCheck, 
  BarChart3, 
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
  X as CloseIcon
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../lib/utils';
import { useNavigate, Link } from 'react-router-dom';

export type NavSection = 
  | 'overview' 
  | 'vehicles' 
  | 'trips' 
  | 'telemetry' 
  | 'maintenance' 
  | 'finance' 
  | 'compliance' 
  | 'reports' 
  | 'settings';

interface SidebarProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const navItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'vehicles', label: 'Vehicles', icon: Car },
  { id: 'trips', label: 'Trips', icon: Route },
  { id: 'telemetry', label: 'Telemetry', icon: Activity },
  { id: 'maintenance', label: 'Maintenance', icon: Wrench },
  { id: 'finance', label: 'Finance', icon: IndianRupee },
  { id: 'compliance', label: 'Compliance', icon: FileCheck },
  { id: 'reports', label: 'Reports', icon: BarChart3 },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export function Sidebar({ activeSection, onNavigate, isCollapsed, onToggleCollapse }: SidebarProps) {
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Close mobile menu on navigate
  const handleNavigate = (section: NavSection) => {
    onNavigate(section);
    setIsMobileOpen(false);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-6 right-6 z-[100] p-3 bg-primary text-white rounded-2xl shadow-xl active:scale-95 transition-transform"
      >
        {isMobileOpen ? <CloseIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar Container */}
      <aside className={cn(
        "h-screen fixed left-0 top-0 bg-card/80 backdrop-blur-3xl border-r border-white/5 flex flex-col z-50 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-20" : "w-64",
        isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        {/* Collapse Toggle (Desktop only) */}
        <button 
          onClick={onToggleCollapse}
          className="hidden lg:flex absolute -right-3 top-24 w-6 h-6 bg-primary text-white rounded-full items-center justify-center shadow-lg hover:scale-110 transition-transform z-[60]"
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>

        {/* Logo */}
        <div className={cn(
          "p-8 mb-4 transition-all duration-300",
          isCollapsed ? "px-6 items-center" : "px-8 items-start"
        )}>
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(11,104,255,0.4)]">
              <span className="text-white font-black text-xl italic tracking-tighter">S</span>
            </div>
            {!isCollapsed && (
              <span className="text-xl font-bold tracking-tight text-text-primary animate-in fade-in duration-500">SNAP</span>
            )}
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-4 flex flex-col gap-1 overflow-hidden">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id as NavSection)}
                title={isCollapsed ? item.label : undefined}
                className={cn(
                  "w-full flex items-center transition-all duration-200 group text-sm relative h-10",
                  isCollapsed ? "justify-center px-0 rounded-full" : "gap-3 px-4 rounded-xl",
                  isActive 
                    ? "bg-primary text-white shadow-[0_10px_20px_rgba(11,104,255,0.2)]" 
                    : "text-text-muted hover:bg-white/5 hover:text-text-primary"
                )}
              >
                <Icon className={cn(
                  "w-4 h-4 transition-transform group-hover:scale-110 shrink-0",
                  isActive ? "text-white" : "text-text-muted group-hover:text-text-primary"
                )} />
                {!isCollapsed && (
                  <span className="truncate animate-in fade-in slide-in-from-left-2 duration-300">{item.label}</span>
                )}
                {isActive && isCollapsed && (
                  <div className="absolute right-0 w-1 h-6 bg-primary rounded-l-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer / Profile */}
        <div className={cn(
          "p-4 border-t border-white/5 flex flex-col gap-1 transition-all",
          isCollapsed ? "items-center" : "items-stretch"
        )}>
          {!isCollapsed && (
            <button 
              onClick={() => navigate('/switch')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-text-muted hover:text-text-primary transition-colors text-[10px] font-bold uppercase tracking-widest animate-in fade-in"
            >
              <ChevronLeft className="w-3 h-3" /> Switch Role
            </button>
          )}
          <div className={cn(
            "flex items-center rounded-xl bg-white/5 border border-white/5 transition-all overflow-hidden",
            isCollapsed ? "w-10 h-10 justify-center p-0 border-none" : "gap-3 px-4 py-3"
          )}>
             <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-[10px] font-black shrink-0">
                AS
             </div>
             {!isCollapsed && (
               <div className="flex flex-col min-w-0 animate-in fade-in duration-300">
                  <span className="text-sm font-bold text-text-primary truncate">Ankit Sharma</span>
                  <span className="text-[10px] text-text-muted font-bold truncate">PREMIUM PLAN</span>
               </div>
             )}
          </div>
          
          <button 
            onClick={handleLogout}
            title={isCollapsed ? "Logout" : undefined}
            className={cn(
              "flex items-center transition-all text-text-muted hover:bg-danger/10 hover:text-danger text-sm font-bold group h-12",
              isCollapsed ? "justify-center rounded-full px-0" : "gap-3 px-4 rounded-xl w-full"
            )}
          >
            <LogOut className="w-5 h-5 shrink-0 group-hover:-translate-x-1 transition-transform" />
            {!isCollapsed && (
              <span className="animate-in fade-in duration-300">Logout</span>
            )}
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div 
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden fixed inset-0 bg-navy/60 backdrop-blur-sm z-40 animate-in fade-in duration-300" 
        />
      )}
    </>
  );
}
