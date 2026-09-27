import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  onOpenSupport: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuth, onOpenSupport }) => {
  const [sastTime, setSastTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSastTime(now.toLocaleTimeString('en-ZA', { timeZone: 'Africa/Johannesburg', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#EFECE6] text-slate-700 border-t border-[#DFDBD0] pt-14 pb-16 lg:pt-18 lg:pb-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="inline-flex items-baseline gap-1 text-2xl text-slate-950">
              <span className="font-serif italic text-2xl tracking-normal font-normal text-slate-950">Kwai</span>
              <span className="font-sans font-semibold text-lg tracking-tight text-slate-800">Assist</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 ml-0.5" />
            </a>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-sm">
              Conversational infrastructure engineered for South African service businesses, medical practices, boutique hospitality, and specialized trades.
            </p>

            <div className="pt-2 text-xs text-slate-700 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              <span>Johannesburg & Cape Town Engineering Desk</span>
            </div>
          </div>

          {/* Architecture Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono tracking-wider text-slate-900 uppercase font-semibold">Architecture</div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#features" className="text-slate-700 hover:text-slate-950 transition-colors">ZAR Valuation Engine</a></li>
              <li><a href="#demo" className="text-slate-700 hover:text-slate-950 transition-colors">Interactive Demonstration</a></li>
              <li><a href="#pricing" className="text-slate-700 hover:text-slate-950 transition-colors">Investment Schedule</a></li>
              <li><a href="#faqs" className="text-slate-700 hover:text-slate-950 transition-colors">POPIA & Cloud API Specs</a></li>
            </ul>
          </div>

          {/* Practices Served */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono tracking-wider text-slate-900 uppercase font-semibold">Practices</div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li><span>Emergency Trades</span></li>
              <li><span>Solar & Electrical</span></li>
              <li><span>Medical & Dental</span></li>
              <li><span>Boutique Hospitality</span></li>
              <li><span>Legal & Financial</span></li>
            </ul>
          </div>

          {/* Local SAST Clock & Support */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono tracking-wider text-slate-900 uppercase font-semibold">Local Desk</div>
            
            <div className="p-3.5 rounded-2xl bg-white/70 border border-[#DFDBD0] space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>South African Standard Time (SAST)</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
              </div>
              <div className="font-mono text-xl font-medium text-slate-950 tabular-nums">
                {sastTime || '02:24:00 SAST'}
              </div>
            </div>

            <button
              onClick={onOpenSupport}
              className="text-xs font-semibold text-slate-900 hover:text-emerald-800 transition-colors inline-flex items-center gap-1 cursor-pointer pt-1"
            >
              <span>Contact Concierge Desk →</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar: Unboxed Compliance & Integrity */}
        <div className="pt-8 border-t border-[#DFDBD0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-800" />
            <span>POPIA Act Compliant · SARS VAT Invoiced · Meta Verified</span>
          </div>

          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} KwaiAssist (Pty) Ltd.</span>
            <button onClick={() => onOpenAuth('signin')} className="hover:text-slate-950 transition-colors cursor-pointer">
              Client Portal
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
