import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  onOpenSupport: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth, onOpenSupport }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Capabilities', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Live Demonstration', href: '#demo' },
    { name: 'Inquiries', href: '#faqs' },
    { name: 'Concierge', href: '#support' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F6F5F1]/90 backdrop-blur-xl border-b border-[#E5E2D9] transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        
        {/* Zone 1: Single text element wordmark with editorial elegance */}
        <a 
          href="#home" 
          className="group flex items-baseline gap-1 text-2xl text-slate-950 tracking-tight transition-opacity hover:opacity-90"
        >
          <span className="font-serif italic text-2xl tracking-normal font-normal text-slate-950">Kwai</span>
          <span className="font-sans font-semibold text-lg tracking-tight text-slate-800">Assist</span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mb-0.5 ml-0.5 opacity-90 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* Zone 2: Editorial Text Navigation Links with subtle hover line */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-wide text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="relative py-1 transition-colors hover:text-slate-950 group whitespace-nowrap"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-slate-900 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Refined Conversion Paths (Begin a Conversation & Sign In) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => onOpenAuth('signup')}
            className="group inline-flex items-center gap-2 rounded-full border border-slate-900 bg-slate-900 px-4.5 py-2 text-xs font-medium tracking-wide text-white shadow-xs transition-all duration-300 hover:bg-slate-800 hover:border-slate-800 cursor-pointer"
          >
            <span>Begin a Conversation</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </button>

          <button
            onClick={() => onOpenAuth('signin')}
            className="px-3 py-2 text-xs font-medium tracking-wide text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
          >
            Sign in
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 text-slate-700 hover:text-slate-950 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F6F5F1]/95 backdrop-blur-2xl px-6 pt-4 pb-8 space-y-4 border-b border-[#E5E2D9] shadow-lg">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-sm font-medium text-slate-700 hover:text-slate-950 transition-colors py-1.5"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-[#E5E2D9] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('signup');
              }}
              className="w-full rounded-full bg-slate-900 py-2.5 text-center text-xs font-semibold tracking-wide text-white hover:bg-slate-800 transition-colors cursor-pointer shadow-sm"
            >
              Begin a Conversation
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('signin');
              }}
              className="w-full rounded-full border border-slate-300 py-2.5 text-center text-xs font-medium tracking-wide text-slate-700 hover:text-slate-950 hover:bg-[#EFECE6] transition-colors cursor-pointer"
            >
              Sign in
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
