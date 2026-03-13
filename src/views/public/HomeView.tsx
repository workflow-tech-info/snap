import { ArrowRight, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomeView() {
  return (
    <div className="min-h-screen bg-navy text-text-primary overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-navy/60 backdrop-blur-xl border-b border-white/5 px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-black italic">S</div>
          <span className="text-xl font-bold tracking-tight">SNAP</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-text-muted">
          <Link to="/" className="hover:text-primary transition-colors">Platform</Link>
          <a href="#" className="hover:text-primary transition-colors">EV & Multi-Fuel</a>
          <a href="#" className="hover:text-primary transition-colors">Fleet Intelligence</a>
          <Link to="/admin" className="hover:text-primary transition-colors">Installation Hub</Link>
        </div>
        <Link to="/login" className="px-6 py-2.5 bg-primary hover:bg-blue-500 rounded-full text-sm font-bold transition-all">
          Login
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-8 flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl aspect-square bg-primary/10 rounded-full blur-[120px] -z-10" />
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold tracking-widest uppercase mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Zap className="w-3 h-3 text-primary animate-pulse" /> Snap OS — Universal Mobility Protocol
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          INTELLIGENT <br /> 
          <span className="text-primary italic">OS FOR ANY VEHICLE.</span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-text-muted font-medium mb-12 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
          Bridge the gap between hardware and software. High-fidelity telemetry, fuel optimization, and EV health for the modern fleet ecosystem.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
           <Link to="/switch" className="px-8 py-4 bg-primary hover:bg-blue-500 text-white font-bold rounded-2xl flex items-center gap-2 transition-all shadow-xl shadow-primary/20 group">
              Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
           </Link>
           <Link to="/login" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/5 font-bold rounded-2xl transition-all">
              Launch Enterprise OS
           </Link>
        </div>

        {/* Hero Visual Mockup */}
        <div className="mt-24 w-full max-w-5xl aspect-video rounded-3xl bg-card/40 border border-white/10 relative overflow-hidden animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-500 group">
           <img 
             src="/assets/images/snap_iot_internal.png" 
             alt="SNAP IoT Internal View" 
             className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent z-10" />
           <div className="p-12 h-full flex flex-col justify-end items-start text-left relative z-20">
              <div className="flex gap-4 mb-4">
                 {[1,2,3].map(i => <div key={i} className="w-12 h-1 bg-primary/20 rounded-full overflow-hidden"><div className="w-1/2 h-full bg-primary" /></div>)}
              </div>
              <h2 className="text-3xl font-bold">Snap OS: Real-time Universal Telemetry</h2>
              <p className="text-text-muted">Direct hardware-software bridge for EV, CNG, and Internal Combustion Engines.</p>
           </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                 <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold">EV & Multi-Fuel Ready</h3>
              <p className="text-text-muted font-medium">From CNG savings to EV battery health, Snap OS handles the full fuel mix of your modern fleet.</p>
           </div>
           <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                 <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold">Universal Hardware Bridge</h3>
              <p className="text-text-muted font-medium">The Snap IoT device is a common protocol that aggregates data across disparate vehicle brands and types.</p>
           </div>
           <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-warn/10 flex items-center justify-center text-warn">
                 <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold">RTO & Safety Gold</h3>
              <p className="text-text-muted font-medium">Fully compliant installations with end-to-end RTO endorsement and insurance management.</p>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 px-8">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-black italic">S</div>
                  <span className="text-xl font-bold tracking-tight">SNAP</span>
               </div>
               <p className="text-text-muted text-sm max-w-xs font-medium">Reimagining CNG conversion with intelligence and design.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm">
               <div className="flex flex-col gap-4">
                  <span className="font-bold">Platform</span>
                  <a href="#" className="text-text-muted hover:text-primary transition-colors">Features</a>
                  <a href="#" className="text-text-muted hover:text-primary transition-colors">Safety</a>
                  <a href="#" className="text-text-muted hover:text-primary transition-colors">Pricing</a>
               </div>
               <div className="flex flex-col gap-4">
                  <span className="font-bold">Stakeholders</span>
                  <Link to="/login" className="text-text-muted hover:text-primary transition-colors">Owners</Link>
                  <a href="#" className="text-text-muted hover:text-primary transition-colors">Fleets</a>
                  <Link to="/admin" className="text-text-muted hover:text-primary transition-colors">Installers</Link>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
}
