import { Bell } from 'lucide-react';

interface HeaderProps {
  greetingText: string;
  avatarText: string;
  unreadCount: number;
}

export function Header({ greetingText, avatarText, unreadCount }: HeaderProps) {
  return (
    <header className="flex items-center justify-between py-4 px-6 md:px-8 border-b border-white/5 bg-navy/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          {/* Snap Mark Placeholder */}
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center shadow-lg shadow-primary/20">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight text-text-primary hidden sm:inline-block">
            Snap
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-text-muted">
          <a href="#" className="text-text-primary font-semibold">Dashboard</a>
          <a href="#" className="hover:text-text-primary transition-colors">Trips</a>
          <a href="#" className="hover:text-text-primary transition-colors">Maintenance</a>
          <a href="#" className="hover:text-text-primary transition-colors">Finance</a>
          <a href="#" className="hover:text-text-primary transition-colors">Switch to CNG</a>
          <a href="#" className="hover:text-text-primary transition-colors">Help</a>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden sm:block text-sm font-medium text-text-primary mr-2">
          {greetingText}
        </div>
        
        <button className="relative p-2 text-text-muted hover:text-text-primary transition-colors rounded-full hover:bg-white/5">
          <Bell className="w-5 h-5" />
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-danger ring-2 ring-navy" />
          )}
        </button>
        
        <button className="flex items-center gap-2 pl-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-accent to-emerald-400 flex items-center justify-center text-navy font-bold text-sm shadow-md shadow-accent/20">
            {avatarText.split(' ').map(n => n[0]).join('')}
          </div>
        </button>
      </div>
    </header>
  );
}
