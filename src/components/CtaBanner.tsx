import React from 'react';
import { ArrowUpRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import craftDeskImg from '../assets/images/studio_craft_desk_1790372227211.jpg';

interface CtaBannerProps {
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  onOpenSupport: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenAuth, onOpenSupport }) => {
  return (
    <section id="support" className="pt-16 pb-16 lg:pt-24 lg:pb-24 bg-[#F6F5F1] relative overflow-hidden">
      
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Editorial Architecture Card with Organic Studio Backdrop */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl border border-[#E5E2D9] bg-white overflow-hidden p-10 sm:p-14 lg:p-18 shadow-xl shadow-slate-900/5"
        >
          {/* Subtle photographic background */}
          <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
            <img
              src={craftDeskImg}
              alt=""
              className="h-full w-full object-cover object-center opacity-10 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/70" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            
            <div className="flex items-center gap-2 text-xs tracking-widest text-slate-600 uppercase font-medium">
              <span className="font-mono text-emerald-800">05</span>
              <span className="text-slate-400" aria-hidden="true">/</span>
              <span>Bespoke Concierge</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-slate-950 tracking-tight leading-[1.1] text-balance">
              Elevate your practice to <span className="italic font-normal text-slate-800">continuous client responsiveness.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal pt-1 max-w-prose text-pretty">
              Our South African engineering desk configures your rate cards, suburb transit boundaries, and conversational tone on your existing WhatsApp Business number in under 24 hours.
            </p>

            {/* Refined Conversion Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenAuth('signup')}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-slate-900 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-slate-800 active:scale-[0.98] cursor-pointer shadow-lg shadow-slate-900/10"
              >
                <span>Schedule Implementation Review</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onOpenSupport}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-4 text-xs font-medium tracking-wide text-slate-800 backdrop-blur-xs transition-all duration-300 hover:bg-white hover:border-slate-400 hover:text-slate-950 active:scale-[0.98] cursor-pointer"
              >
                <MessageCircle className="h-4 w-4 text-emerald-700" />
                <span>Speak with Concierge</span>
              </button>
            </div>

            <div className="pt-6 border-t border-[#E5E2D9] flex items-center gap-2 text-xs text-slate-600">
              <ShieldCheck className="h-4 w-4 text-emerald-700" />
              <span>Zero downtime number migration · Keep all existing client chats and contacts intact</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
