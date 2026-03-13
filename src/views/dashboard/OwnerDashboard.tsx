import { useEffect, useState } from 'react';
import demoData from '../../data/demo-owner-vehicle.json';
import { cn } from '../../lib/utils';

// Layout & Navigation
import { Sidebar } from '../../components/layout/Sidebar';
import type { NavSection } from '../../components/layout/Sidebar';
import { GlobalCTA } from '../../components/layout/GlobalCTA';
import { ServiceBookingModal } from '../../components/modals/ServiceBookingModal';
import { X, CheckCircle2, AlertTriangle } from 'lucide-react';

// Views
import { OverviewView } from '../OverviewView';
import { TripsView } from '../TripsView';
import { TelemetryView } from '../TelemetryView';
import { MaintenanceView } from '../MaintenanceView';
import { FinanceView } from '../FinanceView';
import { ComplianceView } from '../ComplianceView';
import { ReportsView } from '../ReportsView';

export default function OwnerDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState<NavSection>('overview');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);
  const [showTripModal, setShowTripModal] = useState<string | null>(null);
  
  // Simulated Live Telemetry State
  const [currentTelemetry, setCurrentTelemetry] = useState(demoData.telemetry_live);

  // Reality Simulation Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTelemetry(prev => ({
        ...prev,
        rpm: Math.floor(prev.rpm + (Math.random() * 200 - 100)),
        throttle_pct: Math.floor(Math.max(0, Math.min(100, prev.throttle_pct + (Math.random() * 4 - 2)))),
        gas_pressure_bar: Number(Math.max(0, prev.gas_pressure_bar - 0.01).toFixed(2))
      }));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const triggerToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleBookServiceSubmit = (data: any) => {
    setShowBookingModal(false);
    triggerToast(`Service booked at ${data.workshop} for ${data.date}`, "success");
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'overview': 
        return <OverviewView currentTelemetry={currentTelemetry} onTripClick={setShowTripModal} />;
      case 'trips': 
        return <TripsView onTripClick={setShowTripModal} />;
      case 'telemetry': 
        return <TelemetryView currentTelemetry={currentTelemetry} />;
      case 'maintenance': 
        return <MaintenanceView onBookService={() => setShowBookingModal(true)} />;
      case 'finance': 
        return <FinanceView />;
      case 'compliance': 
        return (
          <ComplianceView 
            onDownloadRTO={() => triggerToast("Downloading RTO certificate...", "info")}
            onShareInsurer={() => triggerToast("Insurance update sent.", "success")}
          />
        );
      case 'reports': 
        return <ReportsView onExport={(format) => triggerToast(`Exporting report as ${format}...`, "success")} />;
      case 'vehicles':
      case 'settings':
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-text-muted gap-4 py-20 p-12 text-center">
             <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center italic font-black text-2xl border border-white/5">S</div>
             <p className="font-bold uppercase tracking-widest text-xs">Section "{activeSection}" Under Construction</p>
          </div>
        );
      default: 
        return <OverviewView currentTelemetry={currentTelemetry} onTripClick={setShowTripModal} />;
    }
  };

  return (
    <div className="min-h-screen bg-navy text-text-primary font-sans selection:bg-primary/30 flex overflow-x-hidden">
      <Sidebar 
        activeSection={activeSection} 
        onNavigate={setActiveSection} 
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      
      <main className={cn(
        "flex-1 transition-all duration-300 p-6 md:p-10 lg:p-12 mb-24 lg:mb-0 min-w-0 flex flex-col items-center",
        sidebarCollapsed ? "lg:ml-20" : "lg:ml-64",
        "ml-0"
      )}>
        <div className="w-full max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>

      {/* Global Toast */}
      {toast && (
        <div className="fixed top-8 right-8 z-[100] animate-in slide-in-from-right-4 fade-in duration-300">
           <div className={`flex items-center gap-3 px-5 py-3 rounded-2xl shadow-2xl backdrop-blur-md border ${
             toast.type === 'success' ? 'bg-accent/20 border-accent/30 text-accent font-bold' :
             toast.type === 'error' ? 'bg-danger/20 border-danger/30 text-danger font-bold' :
             'bg-white/10 border-white/20 text-white font-semibold'
           }`}>
              {toast.type === 'success' && <CheckCircle2 className="w-5 h-5" />}
              {toast.type === 'error' && <AlertTriangle className="w-5 h-5" />}
              {toast.message}
           </div>
        </div>
      )}

      {/* Common Modals */}
      {showTripModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm animate-in fade-in">
           <div className="bg-card w-full max-w-2xl rounded-3xl border border-white/10 shadow-2xl p-8 relative flex flex-col gap-6">
              <button onClick={() => setShowTripModal(null)} className="absolute top-8 right-8 p-2 rounded-full hover:bg-white/10 text-text-muted hover:text-white transition-colors">
                 <X className="w-5 h-5" />
              </button>
              <h3 className="text-2xl font-bold tracking-tight">Trip Details: {showTripModal}</h3>
              <div className="h-64 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center">
                 <span className="text-text-muted font-bold text-sm tracking-widest uppercase">Chart Overlay Visualization</span>
              </div>
              <div className="flex justify-end gap-3">
                 <button className="px-6 py-3 bg-primary text-white font-bold rounded-xl" onClick={() => triggerToast("Exporting trip report...", "success")}>
                    Export Report
                 </button>
              </div>
           </div>
        </div>
      )}

      <ServiceBookingModal 
        isOpen={showBookingModal} 
        slots={demoData.service_slots} 
        onClose={() => setShowBookingModal(false)} 
        onSubmit={handleBookServiceSubmit} 
      />

      {/* Global CTA - Sticky on Mobile */}
      <div className="lg:hidden">
        <GlobalCTA 
           onBookService={() => setShowBookingModal(true)}
           onDownloadRTO={() => triggerToast("Downloading RTO certificate...", "info")}
           onShareInsurer={() => triggerToast("Insurance update sent.", "success")}
           onOpenTripReport={() => triggerToast("Opening reports...", "info")}
        />
      </div>
    </div>
  );
}
