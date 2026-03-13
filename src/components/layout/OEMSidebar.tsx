import { 
  Globe, 
  Settings, 
  AlertCircle, 
  FileText, 
  Wrench, 
  Users, 
  TrendingUp,
  Map,
  Zap,
  BarChart3,
  Car,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
  X as CloseIcon
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface OEMSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export function OEMSidebar({ activeSection, onSectionChange, isCollapsed, onToggleCollapse }: OEMSidebarProps) {
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleNavigate = (section: string) => {
    onSectionChange(section);
    setIsMobileOpen(false);
  };

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: Globe },
    { id: 'network', label: 'Vehicle Network', icon: Car },
    { id: 'performance', label: 'Kit Performance', icon: Zap },
    { id: 'telemetry', label: 'Telemetry Analytics', icon: BarChart3 },
    { id: 'health', label: 'Component Health', icon: Wrench },
    { id: 'insights', label: 'Regional Insights', icon: Map },
    { id: 'impact', label: 'Fuel Impact', icon: TrendingUp },
    { id: 'installers', label: 'Installers', icon: Users },
    { id: 'alerts', label: 'Alerts', icon: AlertCircle },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

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
        "h-screen fixed lg:sticky left-0 top-0 bg-navy border-r border-white/5 flex flex-col z-50 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-20" : "w-[300px]",
        isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        {/* Collapse Toggle */}
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
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity text-left">
            <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center text-white font-black italic shrink-0 shadow-[0_0_20px_rgba(11,104,255,0.4)]">S</div>
            {!isCollapsed && (
              <div className="flex flex-col animate-in fade-in duration-500">
                <span className="text-xl font-bold tracking-tighter text-white uppercase italic">SNAP OEM</span>
                <span className="text-[10px] font-black text-primary uppercase tracking-widest leading-none">Global Network</span>
              </div>
            )}
          </Link>
        </div>

        <nav className="flex-1 px-4 flex flex-col gap-1 overflow-y-auto custom-scrollbar pr-2 overflow-x-hidden">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                title={isCollapsed ? item.label : undefined}
                className={cn(
                  "flex items-center transition-all group relative h-10",
                  isCollapsed ? "justify-center px-0 rounded-full" : "gap-3 px-4 rounded-xl",
                  isActive 
                    ? "bg-primary text-white shadow-[0_10px_20px_rgba(11,104,255,0.2)]" 
                    : "text-text-muted hover:bg-white/5 hover:text-white"
                )}
              >
                <Icon className={cn("w-4 h-4 shrink-0", isActive ? "animate-pulse" : "group-hover:scale-110 transition-transform")} />
                {!isCollapsed && <span className="font-bold text-sm tracking-tight truncate animate-in fade-in slide-in-from-left-2 duration-300">{item.label}</span>}
                {isActive && !isCollapsed && (
                  <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_white]" />
                )}
                {isActive && isCollapsed && (
                  <div className="absolute right-0 w-1 h-6 bg-primary rounded-l-full" />
                )}
              </button>
            );
          })}
        </nav>

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

          <button 
            onClick={() => navigate('/login')}
            title={isCollapsed ? "Logout" : undefined}
            className={cn(
              "flex items-center transition-all text-danger/60 hover:text-danger hover:bg-danger/5 group h-12",
              isCollapsed ? "justify-center rounded-full px-0" : "gap-4 px-6 rounded-[24px] w-full"
            )}
          >
            <LogOut className="w-5 h-5 shrink-0 group-hover:-translate-x-1 transition-transform" />
            {!isCollapsed && <span className="font-bold text-sm tracking-tight animate-in fade-in duration-300">Sign Out</span>}
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
