import { X, Calendar } from 'lucide-react';
import React from 'react';

interface ServiceBookingModalProps {
  slots: string[];
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ServiceBookingModal({ slots, isOpen, onClose, onSubmit }: ServiceBookingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm animate-in fade-in">
       <form onSubmit={onSubmit} className="bg-card w-full max-w-md rounded-3xl border border-white/10 shadow-2xl p-6 relative flex flex-col gap-6">
          <button type="button" onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-text-muted hover:text-white transition-colors">
             <X className="w-5 h-5" />
          </button>
          
          <h3 className="text-xl font-bold tracking-tight flex items-center gap-2 text-primary">
             <Calendar className="w-6 h-6" /> Book Regulator Check
          </h3>
          
          <div className="flex flex-col gap-3">
             <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Service Center</label>
             <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-semibold text-text-primary focus:outline-none focus:ring-2 focus:ring-primary appearance-none">
                <option value="km">Kumar Motors, Chennai</option>
             </select>
             
             <label className="text-xs font-bold text-text-muted uppercase tracking-wider mt-2">Available Slot</label>
             <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-semibold text-text-primary focus:outline-none focus:ring-2 focus:ring-primary appearance-none">
                {slots.map(s => {
                   const d = new Date(s);
                   return <option key={s} value={s}>{d.toLocaleDateString()} at {d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</option>
                })}
             </select>
          </div>
          
          <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 flex justify-between items-center text-sm font-bold mt-2">
             <span>Total Amount</span>
             <span className="text-primary text-lg">₹499</span>
          </div>
          
          <button type="submit" className="w-full py-4 bg-primary hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-colors mt-2">
             Confirm & Pay
          </button>
       </form>
    </div>
  );
}
