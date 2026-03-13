import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { LayoutDashboard, Users, Wrench, Factory, ArrowLeft } from 'lucide-react';

export function LoginView() {
  const [role, setRole] = useState<'owner' | 'fleet' | 'installer' | 'oem'>('owner');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'owner') navigate('/dashboard');
    else navigate(`/${role}`);
  };

  const roles = [
    { id: 'owner', label: 'Vehicle Owner', icon: LayoutDashboard, desc: 'Manage your personal car metrics.' },
    { id: 'fleet', label: 'Fleet Manager', icon: Users, desc: 'Monitor multi-vehicle performance.' },
    { id: 'installer', label: 'Installation Hub', icon: Wrench, desc: 'Manage jobs and RTO docs.' },
    { id: 'oem', label: 'OEM Partner', icon: Factory, desc: 'Large scale ecosystem data.' },
  ];

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-8 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <NavLink to="/" className="absolute top-12 left-12 flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors font-bold text-sm">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </NavLink>

      <div className="w-full max-w-xl bg-card/40 backdrop-blur-3xl border border-white/5 rounded-[40px] p-12 shadow-2xl">
        <div className="flex flex-col items-center mb-12">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center font-black italic text-3xl mb-6 shadow-xl shadow-primary/20">S</div>
            <h1 className="text-3xl font-black tracking-tight mb-2">Login to Snap</h1>
            <p className="text-text-muted font-medium">Select your portal to continue</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {roles.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setRole(r.id as any)}
                className={cn(
                  "p-5 rounded-2xl border transition-all text-left group flex flex-col gap-1",
                  role === r.id 
                    ? "bg-primary/10 border-primary shadow-lg shadow-primary/5" 
                    : "bg-white/5 border-white/5 hover:border-white/10"
                )}
              >
                <div className={cn(
                  "p-2 rounded-lg w-fit mb-2 transition-transform group-hover:scale-110",
                  role === r.id ? "bg-primary text-white" : "bg-white/5 text-text-muted"
                )}>
                  <r.icon className="w-5 h-5" />
                </div>
                <span className={cn("text-sm font-bold", role === r.id ? "text-primary" : "text-text-primary")}>{r.label}</span>
                <span className="text-[10px] text-text-muted font-bold leading-tight">{r.desc}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4">
             <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-text-muted uppercase tracking-widest px-2">Access Key</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  defaultValue="demo-access"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 text-text-primary font-bold placeholder:text-white/10 transition-all outline-none"
                />
             </div>
             
             <button type="submit" className="w-full py-5 bg-primary hover:bg-blue-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-primary/20 tracking-wide mt-4">
               LOG IN
             </button>
          </div>
        </form>

        <p className="mt-8 text-center text-xs text-text-muted font-medium">
          Don't have a Snap kit? <NavLink to="/switch" className="text-primary font-bold hover:underline">Switch to CNG</NavLink>
        </p>
      </div>
    </div>
  );
}
