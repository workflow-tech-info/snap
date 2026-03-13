import { useState } from 'react';
import { cn } from '../../../lib/utils';
import { AdminSidebar } from '../../../components/layout/AdminSidebar';
import { AdminOverview } from './AdminOverview';
import { AdminInstallations } from './AdminInstallations';
import { AdminDevices } from './AdminDevices';
import { AdminVehicles } from './AdminVehicles';
import { AdminWorkshops } from './AdminWorkshops';
import { AdminInventory } from './AdminInventory';
import { AdminTechnicians } from './AdminTechnicians';
import { AdminServiceJobs } from './AdminServiceJobs';
import { AdminCompliance } from './AdminCompliance';
import { AdminAlerts } from './AdminAlerts';
import { AdminReports } from './AdminReports';
import { AdminSettings } from './AdminSettings';

export function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'overview': return <AdminOverview />;
      case 'installations': return <AdminInstallations />;
      case 'devices': return <AdminDevices />;
      case 'vehicles': return <AdminVehicles />;
      case 'workshops': return <AdminWorkshops />;
      case 'inventory': return <AdminInventory />;
      case 'technicians': return <AdminTechnicians />;
      case 'service': return <AdminServiceJobs />;
      case 'compliance': return <AdminCompliance />;
      case 'alerts': return <AdminAlerts />;
      case 'reports': return <AdminReports />;
      case 'settings': return <AdminSettings />;
      default: return <AdminOverview />;
    }
  };

  return (
    <div className="flex bg-navy min-h-screen text-text-primary overflow-x-hidden">
      <AdminSidebar
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
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] leading-none mb-1">Authenticated</span>
              <span className="text-sm font-bold text-white">Installation Hub Admin</span>
           </div>
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                 <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                 <span className="text-[10px] font-black uppercase text-accent tracking-widest">Network Live</span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent p-[1px]">
                 <div className="w-full h-full rounded-2xl bg-navy flex items-center justify-center overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Avatar" className="w-10 h-10" />
                 </div>
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
