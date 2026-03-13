import { 
  Package, 
  AlertTriangle, 
  TrendingDown,
  Warehouse,
  Plus
} from 'lucide-react';
import { cn } from '../../../lib/utils';
import demoAdmin from '../../../data/demo-admin.json';

export function AdminInventory() {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight italic uppercase tracking-tighter text-white">Stock Management</h1>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl text-sm font-bold shadow-[0_0_20px_rgba(11,104,255,0.3)] hover:scale-105 transition-all">
          <Plus className="w-4 h-4" /> Log Shipment
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="bg-card/40 border border-white/5 rounded-[40px] p-10 flex flex-col gap-8">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <Warehouse className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-bold italic tracking-tight uppercase">Central Warehouse</h2>
               </div>
               <span className="text-[10px] font-black text-text-muted uppercase tracking-widest leading-none">Status: Optimized</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
               {demoAdmin.inventory.map((item, i) => (
                  <div key={i} className={cn(
                     "p-6 rounded-3xl border flex items-center justify-between transition-all hover:bg-white/5",
                     item.alert ? "bg-danger/5 border-danger/20" : "bg-white/5 border-white/10"
                  )}>
                     <div className="flex items-center gap-4">
                        <div className={cn(
                           "w-12 h-12 rounded-2xl flex items-center justify-center",
                           item.alert ? "bg-danger text-white" : "bg-white/10 text-white"
                        )}>
                           <Package className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                           <span className="text-sm font-black italic">{item.item}</span>
                           <span className={cn("text-[10px] font-black uppercase tracking-widest", item.alert ? "text-danger" : "text-text-muted")}>
                              {item.status}
                           </span>
                        </div>
                     </div>
                     <div className="flex flex-col items-end">
                        <span className="text-2xl font-black italic">{item.stock}</span>
                        {item.alert && <span className="text-[10px] font-black text-danger uppercase tracking-widest animate-pulse">Low Stock Alert</span>}
                     </div>
                  </div>
               ))}
            </div>
         </div>

         <div className="flex flex-col gap-8">
            <div className="bg-danger/10 border border-danger/20 rounded-[40px] p-10 flex flex-col gap-6 relative overflow-hidden group">
               <AlertTriangle className="absolute -right-6 -top-6 w-32 h-32 text-danger opacity-10 group-hover:scale-110 transition-transform" />
               <h3 className="text-xl font-bold text-danger italic uppercase">Critical Shortages</h3>
               <div className="flex items-start gap-4 p-6 bg-navy/40 rounded-3xl border border-danger/20">
                  <TrendingDown className="w-6 h-6 text-danger" />
                  <div className="flex flex-col gap-1">
                     <span className="text-sm font-bold text-white">Regulator Stock Low (Mumbai Central)</span>
                     <p className="text-xs text-text-muted italic leading-relaxed">System predicts stockout in 48 hours based on current installation velocity. Logistics dispatch recommended.</p>
                  </div>
               </div>
               <button className="flex items-center justify-center gap-2 w-full py-4 bg-danger text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg hover:bg-danger/90 transition-all">Resolve Storage Alert</button>
            </div>

            <div className="bg-card/40 border border-white/5 rounded-[40px] p-10 flex flex-col gap-6">
               <h3 className="text-xl font-bold italic uppercase tracking-tighter">Inventory Velocity</h3>
               <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold text-text-muted">
                     <span>Sequential Kits</span>
                     <span>92% Usage Rate</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-primary" style={{ width: '92%' }} />
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-text-muted">
                     <span>Cylinders (All)</span>
                     <span>64% Usage Rate</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-accent" style={{ width: '64%' }} />
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
