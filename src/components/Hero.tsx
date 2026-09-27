import React from 'react';
import { ArrowUpRight, ShieldCheck, Zap, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import heroNoirImg from '../assets/images/hero_editorial_noir_1790372216134.jpg';
import heroWhatsAppImg from '../assets/images/Hero.png';

interface HeroProps {
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  onExploreDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAuth, onExploreDemo }) => {
  return (
    <section id="home" className="relative isolate min-h-[85vh] flex items-center overflow-hidden bg-[#F6F5F1] pt-10 pb-16 lg:pt-16 lg:pb-24">
      
      {/* Background: Atmospheric editorial texture with refined light scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <img
          src={heroNoirImg}
          alt=""
          className="h-full w-full object-cover object-center opacity-10 mix-blend-multiply scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F6F5F1] via-[#F6F5F1]/95 to-[#F6F5F1]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F6F5F1] via-transparent to-[#F6F5F1]/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Value Proposition & Metrics (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Subtle unboxed editorial kicker */}
            <motion.div 
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2.5 text-xs tracking-widest text-slate-600 uppercase font-medium"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              <span>Conversational Architecture</span>
              <span className="text-slate-400" aria-hidden="true">·</span>
              <span className="text-slate-800 font-semibold">South Africa</span>
            </motion.div>

            {/* Editorial Display Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[4.25rem] font-light text-slate-950 leading-[1.08] tracking-tight text-balance">
                Where client inquiries become <span className="italic font-normal text-slate-800">effortless revenue.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-prose text-pretty pt-1">
                KwaiAssist delivers bespoke conversational intelligence for South African service businesses. Immediate ZAR quotations, instant booking coordination, and 24/7 responsiveness on WhatsApp — executed with human warmth and precision.
              </p>
            </motion.div>

            {/* Refined Conversion Prompts */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={() => onOpenAuth('signup')}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-slate-900 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/10 active:scale-[0.98] cursor-pointer"
              >
                <span>Begin Free 14-Day Trial</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onExploreDemo}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3.5 text-xs font-medium tracking-wide text-slate-800 backdrop-blur-xs transition-all duration-300 hover:bg-white hover:border-slate-400 hover:text-slate-950 active:scale-[0.98] cursor-pointer shadow-2xs"
              >
                <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
                <span>Test Live WhatsApp Simulator</span>
              </button>
            </motion.div>

            {/* Unboxed Proof / Localized Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="pt-6 border-t border-[#E5E2D9] grid grid-cols-3 gap-6 max-w-lg text-xs"
            >
              <div>
                <div className="font-serif text-2xl font-light text-slate-950 tabular-nums">&lt; 5 sec</div>
                <div className="text-slate-600 mt-0.5">Average quote speed</div>
              </div>
              <div>
                <div className="font-serif text-2xl font-light text-slate-950 tabular-nums">100%</div>
                <div className="text-slate-600 mt-0.5">SARS VAT compliant</div>
              </div>
              <div>
                <div className="font-serif text-2xl font-light text-slate-950 tabular-nums">24 / 7</div>
                <div className="text-slate-600 mt-0.5">After-hours coverage</div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual Showcase (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Soft ambient backlight */}
              <div className="absolute -inset-4 bg-emerald-600/10 rounded-3xl blur-2xl pointer-events-none" />
              
              <div className="relative overflow-visible bg-transparent">
                <img
                  src={heroWhatsAppImg}
                  alt="KwaiAssist WhatsApp conversational interface generating an instant quotation"
                  className="w-full h-auto object-contain block mix-blend-multiply bg-transparent drop-shadow-2xl"
                />
              </div>

              {/* Floating contextual reassurance card */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl border border-[#E5E2D9] p-4 shadow-lg shadow-slate-900/5 flex items-center gap-3.5 max-w-xs">
                <div className="h-9 w-9 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center shrink-0 text-emerald-700">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-slate-900">POPIA Act Verified</p>
                  <p className="text-slate-600 text-[11px]">Direct WhatsApp Cloud API</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
