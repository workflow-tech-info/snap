import { Calendar, Download, Share2, FileText, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface GlobalCTAProps {
  onBookService: () => void;
  onDownloadRTO: () => void;
  onShareInsurer: () => void;
  onOpenTripReport: () => void;
}

export function GlobalCTA({ onBookService, onDownloadRTO, onShareInsurer, onOpenTripReport }: GlobalCTAProps) {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="fixed sm:relative bottom-0 left-0 right-0 sm:bottom-auto z-40 bg-navy/90 sm:bg-transparent backdrop-blur-xl sm:backdrop-blur-none border-t border-white/10 sm:border-none p-4 sm:p-0">
      
      {/* Mobile-only Upsell Banner */}
      <div className="sm:hidden mb-4 bg-primary/10 border border-primary/20 rounded-xl p-3 flex items-center justify-between shadow-lg shadow-black/50">
         <div className="flex flex-col gap-0.5">
            <span className="text-xs font-bold text-text-primary">Predictive Maintenance: ₹199 / month — 1st month free. Cancel anytime.</span>
         </div>
         <button 
            onClick={() => setSubscribed(!subscribed)}
            className={`shrink-0 ml-3 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${subscribed ? 'bg-accent/20 border-accent/30 text-accent' : 'bg-primary text-white border-primary hover:bg-white hover:text-navy hover:border-white'}`}
         >
            {subscribed ? <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5"/> Subscribed</span> : 'Subscribe'}
         </button>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 max-w-7xl mx-auto">
         <button onClick={onBookService} className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 bg-white/5 sm:bg-card/40 hover:bg-white/10 sm:backdrop-blur-xl sm:border border-white/5 sm:rounded-2xl rounded-xl p-2 sm:p-4 transition-colors">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            <span className="text-[10px] sm:text-xs font-bold text-text-primary text-center leading-tight">Book<br className="sm:hidden"/> Service</span>
         </button>
         
         <button onClick={onDownloadRTO} className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 bg-white/5 sm:bg-card/40 hover:bg-white/10 sm:backdrop-blur-xl sm:border border-white/5 sm:rounded-2xl rounded-xl p-2 sm:p-4 transition-colors">
            <Download className="w-5 h-5 sm:w-6 sm:h-6 text-text-muted" />
            <span className="text-[10px] sm:text-xs font-bold text-text-primary text-center leading-tight">Download<br className="sm:hidden"/> RTO</span>
         </button>

         <button onClick={onShareInsurer} className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 bg-white/5 sm:bg-card/40 hover:bg-white/10 sm:backdrop-blur-xl sm:border border-white/5 sm:rounded-2xl rounded-xl p-2 sm:p-4 transition-colors">
            <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            <span className="text-[10px] sm:text-xs font-bold text-text-primary text-center leading-tight">Share w/<br className="sm:hidden"/> Insurer</span>
         </button>

         <button onClick={onOpenTripReport} className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 bg-white/5 sm:bg-card/40 hover:bg-white/10 sm:backdrop-blur-xl sm:border border-white/5 sm:rounded-2xl rounded-xl p-2 sm:p-4 transition-colors">
            <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-text-muted" />
            <span className="text-[10px] sm:text-xs font-bold text-text-primary text-center leading-tight">Trip<br className="sm:hidden"/> Report</span>
         </button>
      </div>
      
    </div>
  );
}
