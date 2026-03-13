import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Car, Fuel, Zap, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function SwitchFlow() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-navy text-text-primary px-8 py-20 flex flex-col items-center">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <button onClick={() => navigate('/')} className="mb-12 flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors font-bold text-sm self-start max-w-7xl mx-auto w-full">
        <ArrowLeft className="w-4 h-4" /> Cancel
      </button>

      <div className="w-full max-w-4xl">
        <div className="flex items-center justify-between mb-16 px-4">
           {[1, 2, 3].map((s) => (
             <div key={s} className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all shadow-lg ${
                  step === s ? "bg-primary text-white shadow-primary/20 scale-110" : 
                  step > s ? "bg-accent/20 text-accent border border-accent/20" : 
                  "bg-white/5 text-text-muted border border-white/10"
                }`}>
                  {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                </div>
                <div className="hidden md:flex flex-col">
                   <span className={`text-[10px] font-black uppercase tracking-widest ${step === s ? "text-primary" : "text-text-muted"}`}>Step 0{s}</span>
                   <span className={`text-sm font-bold ${step === s ? "text-text-primary" : "text-text-muted"}`}>
                      {s === 1 ? "Vehicle Info" : s === 2 ? "Kit Configuration" : "Installation"}
                   </span>
                </div>
                {s < 3 && <div className="hidden md:block w-24 h-px bg-white/5 mx-4" />}
             </div>
           ))}
        </div>

        <div className="bg-card/40 backdrop-blur-2xl border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
           {step === 1 && (
             <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                   <h2 className="text-3xl font-black tracking-tight italic">Check Compatibility</h2>
                   <p className="text-text-muted font-medium">Find the perfect Sequential Kit for your engine.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black text-text-muted uppercase tracking-widest px-2">Vehicle Make</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 font-bold outline-none focus:border-primary/50 appearance-none">
                         <option>Honda</option>
                         <option>Hyundai</option>
                         <option>Maruti Suzuki</option>
                         <option>Toyota</option>
                      </select>
                   </div>
                   <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black text-text-muted uppercase tracking-widest px-2">Model</label>
                      <input type="text" placeholder="e.g. City ZX" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 font-bold outline-none focus:border-primary/50" />
                   </div>
                   <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black text-text-muted uppercase tracking-widest px-2">Year</label>
                      <input type="number" placeholder="2022" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 font-bold outline-none focus:border-primary/50" />
                   </div>
                   <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black text-text-muted uppercase tracking-widest px-2">City</label>
                      <input type="text" placeholder="Chennai" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 font-bold outline-none focus:border-primary/50" />
                   </div>
                </div>

                <button onClick={() => setStep(2)} className="w-full py-5 bg-primary hover:bg-blue-500 text-white font-black rounded-2xl shadow-xl shadow-primary/20 transition-all mt-4 tracking-wide group flex items-center justify-center gap-2">
                   VIEW COMPATIBLE KITS <Zap className="w-5 h-5 fill-current" />
                </button>
             </div>
           )}

           {step === 2 && (
             <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                   <h2 className="text-3xl font-black tracking-tight italic">Snap Pro v3</h2>
                   <p className="text-accent font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> 100% COMPATIBLE WITH HONDA CITY ZX
                   </p>
                </div>

                <div className="p-6 rounded-3xl bg-primary/5 border border-primary/20 flex flex-col md:flex-row items-center gap-6">
                   <div className="w-32 h-32 rounded-2xl bg-primary/10 flex items-center justify-center relative shadow-inner">
                      <Car className="w-16 h-16 text-primary opacity-50" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-20 h-2 bg-primary/30 rounded-full blur-xl animate-pulse" />
                      </div>
                   </div>
                   <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-bold">Snap Sequential Performance Kit</h3>
                      <p className="text-text-muted text-sm font-medium pr-4">Includes 32-bit ECU, high-speed injectors, and 14kg Composite Tank. End-to-end telemetry included.</p>
                   </div>
                   <div className="flex flex-col items-center md:items-end gap-1">
                      <span className="text-xs font-bold text-text-muted uppercase tracking-widest">Pricing From</span>
                      <span className="text-3xl font-black">₹54,500</span>
                      <span className="text-[10px] font-bold text-accent px-2 py-0.5 bg-accent/20 rounded-full">EMI Starts @ ₹4,800</span>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <button onClick={() => setStep(3)} className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all flex flex-col gap-2 group text-left">
                      <Fuel className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                      <span className="font-bold">60L / 12kg Cylinder</span>
                      <span className="text-xs text-text-muted font-medium italic">Standard boot space retention. Best for city use.</span>
                   </button>
                   <button onClick={() => setStep(3)} className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all flex flex-col gap-2 group text-left">
                      <Fuel className="w-6 h-6 text-accent mb-2 group-hover:scale-110 transition-transform" />
                      <span className="font-bold">75L / 15kg Cylinder</span>
                      <span className="text-xs text-text-muted font-medium italic">Extended range for highway travel. Higher capacity.</span>
                   </button>
                </div>
             </div>
           )}

           {step === 3 && (
             <div className="flex flex-col items-center gap-8 py-8 text-center animate-in zoom-in-95 duration-700">
                <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center shadow-xl shadow-accent/20">
                   <CheckCircle2 className="w-12 h-12 text-accent" />
                </div>
                <div className="flex flex-col gap-2">
                   <h2 className="text-4xl font-black tracking-tight italic">Success!</h2>
                   <p className="text-text-muted text-lg max-w-sm font-medium">Your configuration is saved. An expert from Kumar Motors (Chennai) will contact you in the next 2 hours.</p>
                </div>
                <div className="flex flex-col gap-3 w-full max-w-xs">
                   <button onClick={() => navigate('/')} className="w-full py-4 bg-primary hover:bg-blue-500 text-white font-bold rounded-2xl transition-all">
                      Go to Home
                   </button>
                   <button onClick={() => setStep(1)} className="text-text-muted hover:text-text-primary text-sm font-bold transition-colors">
                      Restart Configuration
                   </button>
                </div>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
