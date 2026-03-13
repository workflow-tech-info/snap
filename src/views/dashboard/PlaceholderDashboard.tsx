export default function PlaceholderDashboard({ role }: { role: string }) {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center p-12">
      <div className="w-full max-w-4xl bg-card/40 backdrop-blur-3xl border border-white/5 rounded-[40px] p-20 flex flex-col items-center gap-8 text-center">
         <div className="w-20 h-20 rounded-3xl bg-primary/20 flex items-center justify-center text-primary italic font-black text-4xl shadow-inner">S</div>
         <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-black tracking-tighter uppercase italic">{role} Dashboard</h1>
            <p className="text-text-muted text-lg font-medium max-w-md">The {role} module is currently under development. High-fidelity components for this role are being finalized by design.</p>
         </div>
         <div className="bg-white/5 border border-white/10 rounded-2xl px-8 py-4 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-warn animate-pulse" />
            <span className="text-text-muted text-sm font-bold uppercase tracking-widest leading-none">Engineering Build 0.4.1</span>
         </div>
         <a href="/login" className="text-primary font-bold hover:underline">Back to Login</a>
      </div>
    </div>
  );
}
