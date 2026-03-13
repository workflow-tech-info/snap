import { useState } from 'react';
import { cn } from '../../../lib/utils';
import { FleetSidebar } from '../../../components/layout/FleetSidebar';
import type { FleetNavSection } from '../../../components/layout/FleetSidebar';

// Views
import { FleetOverview } from './FleetOverview';
import { FleetVehicles } from './FleetVehicles';
import { FleetLiveMap } from './FleetLiveMap';
import { FleetTrips } from './FleetTrips';
import { FleetFuelAnalytics } from './FleetFuelAnalytics';
import { FleetTelemetry } from './FleetTelemetry';
import { FleetMaintenance } from './FleetMaintenance';
import { FleetAlerts } from './FleetAlerts';
import { FleetDrivers } from './FleetDrivers';
import { FleetFinance } from './FleetFinance';
import { FleetReports } from './FleetReports';

export default function FleetDashboard() {
  const [activeSection, setActiveSection] = useState<FleetNavSection>('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'overview': return <FleetOverview />;
      case 'vehicles': return <FleetVehicles />;
      case 'live_map': return <FleetLiveMap />;
      case 'trips': return <FleetTrips />;
      case 'fuel_analytics': return <FleetFuelAnalytics />;
      case 'telemetry': return <FleetTelemetry />;
      case 'maintenance': return <FleetMaintenance />;
      case 'alerts': return <FleetAlerts />;
      case 'drivers': return <FleetDrivers />;
      case 'finance': return <FleetFinance />;
      case 'reports': return <FleetReports />;
      case 'settings':
        return (
          <div className="flex flex-col items-center justify-center h-full text-text-muted gap-4 py-20 p-12 text-center">
             <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center italic font-black text-2xl border border-white/5">S</div>
             <p className="font-bold uppercase tracking-widest text-xs">Section "{activeSection}" settings Under Construction</p>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full text-text-muted gap-4 py-20 p-12 text-center">
             <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center italic font-black text-2xl border border-white/5">S</div>
             <p className="font-bold uppercase tracking-widest text-xs">Section Under Construction</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-navy text-text-primary font-sans overflow-x-hidden selection:bg-accent/30 flex">
      <FleetSidebar 
        activeSection={activeSection} 
        onNavigate={setActiveSection}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      
      <main className={cn(
        "flex-1 transition-all duration-300 p-6 md:p-10 lg:p-12 mb-24 lg:mb-0 min-w-0",
        sidebarCollapsed ? "lg:ml-20" : "lg:ml-64",
        "ml-0"
      )}>
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
