import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Views
import { HomeView } from './views/public/HomeView';
import { LoginView } from './views/public/LoginView';
import SwitchFlow from './views/public/SwitchFlow';
import OwnerDashboard from './views/dashboard/OwnerDashboard';
import FleetDashboard from './views/dashboard/fleet/FleetDashboard';
import { AdminDashboard } from './views/dashboard/admin/AdminDashboard';
import { OEMDashboard } from './views/dashboard/oem/OEMDashboard';
import PlaceholderDashboard from './views/dashboard/PlaceholderDashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomeView />} />
        <Route path="/switch" element={<SwitchFlow />} />
        <Route path="/login" element={<LoginView />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<OwnerDashboard />} />
        <Route path="/fleet" element={<FleetDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/oem" element={<OEMDashboard />} />
        <Route path="/installer" element={<AdminDashboard />} />
        
        {/* Fallback */}
        <Route path="*" element={<HomeView />} />
      </Routes>
    </Router>
  );
}
