import { useState } from 'react';
import { cn } from '../../../lib/utils';
import { OEMSidebar } from '../../../components/layout/OEMSidebar';
import { OEMOverview } from './OEMOverview';
import { OEMNetwork } from './OEMNetwork';
import { OEMPerformance } from './OEMPerformance';
import { OEMTelemetry } from './OEMTelemetry';
import { OEMHealth } from './OEMHealth';
import { OEMRegional } from './OEMRegional';
import { OEMImpact } from './OEMImpact';
import { OEMInstallers } from './OEMInstallers';
import { OEMAlerts } from './OEMAlerts';
import { OEMReports } from './OEMReports';
import { OEMSettings } from './OEMSettings';
import { SmartMfgInsights } from '../../../components/intelligence/SmartMfgInsights';

export function OEMDashboard() {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'overview': return <OEMOverview />;
      case 'network': return <OEMNetwork />;
      case 'performance': return <OEMPerformance />;
      case 'telemetry': return <OEMTelemetry />;
      case 'health': return <OEMHealth />;
      case 'insights': return <OEMRegional />;
      case 'impact': return <OEMImpact />;
      case 'installers': return <OEMInstallers />;
      case 'alerts': return <OEMAlerts />;
      case 'reports': return <OEMReports />;
      case 'settings': return <OEMSettings />;
      default: return <OEMOverview />;
    }
  };

  return (
    <div className="flex bg-navy min-h-screen text-text-primary font-body overflow-x-hidden">
      <OEMSidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <main className={cn(
        "flex-1 transition-all duration-300 min-w-0 flex flex-col",
      )}>
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-6 md:px-10 sticky top-0 bg-navy/80 backdrop-blur-xl z-[40]">
           <div className="flex flex-col">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] leading-none mb-1">Global Dashboard</span>
              <span className="text-sm font-bold text-white">OEM Engineering Hub</span>
           </div>
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                 <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                 <span className="text-[10px] font-black uppercase text-accent tracking-widest">Ecosystem Live</span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent p-[1px]">
                 <div className="w-full h-full rounded-2xl bg-navy flex items-center justify-center overflow-hidden font-black italic text-white text-xs">OEM</div>
              </div>
           </div>
        </header>
        <div className="p-8 max-w-7xl mx-auto w-full">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
