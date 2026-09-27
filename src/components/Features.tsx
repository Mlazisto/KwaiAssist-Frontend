import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, SlidersHorizontal, Calculator, CalendarCheck, Shield, Clock, MapPin } from 'lucide-react';
import dashboardImg from '../assets/images/whatsapp_analytics_dashboard_1790369407975.jpg';

export const Features: React.FC = () => {
  // Interactive ROI Valuation Estimator (high-density precision tool)
  const [monthlyInquiries, setMonthlyInquiries] = useState<number>(120);
  const [avgJobValue, setAvgJobValue] = useState<number>(2400);

  // Typical recovery of 28% lost after-hours/delayed leads
  const recoveredJobs = Math.round(monthlyInquiries * 0.28);
  const recoveredRevenue = recoveredJobs * avgJobValue;
  const hoursSaved = Math.round((monthlyInquiries * 15) / 60);

  return (
    <section id="features" className="relative pt-16 pb-16 lg:pt-24 lg:pb-24 bg-[#F6F5F1]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs tracking-widest text-slate-600 uppercase font-medium">
            <span className="font-mono text-emerald-700">01</span>
            <span className="text-slate-400" aria-hidden="true">/</span>
            <span>Capabilities & System Architecture</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-slate-950 tracking-tight leading-[1.1] text-balance">
            Precision engineering for <span className="italic font-normal text-slate-800">high-trust client relationships.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-prose text-pretty pt-1">
            South African service clients demand immediate, transparent answers. KwaiAssist replaces friction and unanswered voicemails with instant, context-aware WhatsApp operations.
          </p>
        </div>

        {/* Bento Grid: Editorial Chapters */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Chapter 01: Large Marquee Capability with Dashboard */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-3xl border border-[#E5E2D9] bg-white p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:border-[#D5D1C5] hover:shadow-md transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span className="font-mono text-emerald-800 font-semibold">01.01</span>
                <span className="uppercase tracking-wider">ZAR Valuation Engine</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-light text-slate-950 leading-snug">
                Transparent quotes calculated to your exact regional rate card.
              </h3>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-prose">
                Upload custom call-out schedules, after-hours emergency multipliers, and distance rates across South African metros. Inquiries receive accurate, itemized breakdowns in seconds.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-[#E5E2D9] bg-[#F6F5F1]">
              <img
                src={dashboardImg}
                alt="KwaiAssist WhatsApp analytics console showing verified South African lead metrics"
                className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* Chapter 02: Calendar Synchronization & Suburb Travel Buffers */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 rounded-3xl border border-[#E5E2D9] bg-white p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:border-[#D5D1C5] hover:shadow-md transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span className="font-mono text-emerald-800 font-semibold">01.02</span>
                <span className="uppercase tracking-wider">Calendar Reconciliation</span>
              </div>

              <h3 className="font-serif text-3xl font-light text-slate-950 leading-snug">
                Intelligent slot coordination with regional transit buffers.
              </h3>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Connects directly to Google Calendar and Outlook. KwaiAssist intelligently buffers travel times between Gauteng, Western Cape, or KwaZulu-Natal suburbs to prevent overlapping appointments.
              </p>
            </div>

            {/* Clean Structured Agenda Preview */}
            <div className="mt-8 rounded-2xl border border-[#E5E2D9] bg-[#FAF9F5] p-5 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-600 pb-2 border-b border-[#E5E2D9]">
                <span>Today's Dispatched Slate</span>
                <span className="text-slate-900 font-mono font-medium">Live Sync</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-lg bg-white border border-[#E5E2D9] flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-900">Sandton Solar Inverter Diagnostic</p>
                    <p className="text-slate-600 text-[11px]">09:00 - 10:30 · Confirmed</p>
                  </div>
                  <span className="font-mono text-emerald-800 font-medium">R1,850</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#E5E2D9] flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-900">Rosebank DB Board Compliance</p>
                    <p className="text-slate-600 text-[11px]">11:15 - 12:45 · 45m Buffer</p>
                  </div>
                  <span className="font-mono text-emerald-800 font-medium">R2,400</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Chapter 03: POPIA Compliance & Encrypted Dispatch */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 rounded-3xl border border-[#E5E2D9] bg-white p-8 flex flex-col justify-between shadow-xs hover:border-[#D5D1C5] hover:shadow-md transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span className="font-mono text-emerald-800 font-semibold">01.03</span>
                <span className="uppercase tracking-wider">POPIA Act Privacy</span>
              </div>
              <h3 className="font-serif text-2xl font-light text-slate-950">
                Lawful consent capture with zero telemetry leaks.
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                All client interactions strictly comply with South Africa's Protection of Personal Information Act. Encrypted customer data and explicit opt-in confirmation.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E5E2D9] flex items-center gap-2 text-xs text-slate-800 font-medium">
              <Shield className="h-4 w-4 text-emerald-700" />
              <span>Full POPIA & SARS Audit Trail</span>
            </div>
          </motion.div>

          {/* Chapter 04: Emergency Routing & After-Hours Multipliers */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 rounded-3xl border border-[#E5E2D9] bg-white p-8 flex flex-col justify-between shadow-xs hover:border-[#D5D1C5] hover:shadow-md transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span className="font-mono text-emerald-800 font-semibold">01.04</span>
                <span className="uppercase tracking-wider">Emergency Protocol</span>
              </div>
              <h3 className="font-serif text-2xl font-light text-slate-950">
                After-hours surcharges & urgent team alerts.
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Distinguish urgent burst-pipe or power outage emergencies from general quotes. Instantly apply weekend surcharges and notify on-call technicians via SMS/WhatsApp.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E5E2D9] flex items-center gap-2 text-xs text-slate-800 font-medium">
              <Clock className="h-4 w-4 text-emerald-700" />
              <span>Sub-60s On-Call Dispatch</span>
            </div>
          </motion.div>

          {/* Chapter 05: Multi-Suburb Distance Rate Engine */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 rounded-3xl border border-[#E5E2D9] bg-white p-8 flex flex-col justify-between shadow-xs hover:border-[#D5D1C5] hover:shadow-md transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span className="font-mono text-emerald-800 font-semibold">01.05</span>
                <span className="uppercase tracking-wider">Regional Routing</span>
              </div>
              <h3 className="font-serif text-2xl font-light text-slate-950">
                Zone-based call-out calculation across provinces.
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Define regional radii and suburb tiering (e.g. Atlantic Seaboard vs Northern Suburbs, Sandton vs Pretoria). Automatic km surcharge calculation.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E5E2D9] flex items-center gap-2 text-xs text-slate-800 font-medium">
              <MapPin className="h-4 w-4 text-emerald-700" />
              <span>Gauteng, Western Cape, KZN Ready</span>
            </div>
          </motion.div>

        </div>

        {/* Tactile ROI Valuation Estimator */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-[#E5E2D9] bg-white p-8 sm:p-12 shadow-md shadow-slate-900/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-xs tracking-widest text-slate-600 uppercase font-medium">
                <Calculator className="h-4 w-4 text-emerald-700" />
                <span>Interactive Valuation Simulator</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-light text-slate-950 leading-tight">
                Calculate your practice's monthly after-hours recovery.
              </h3>

              <p className="text-sm text-slate-700 leading-relaxed">
                South African clients who inquire after 17:00 or on weekends typically book the first business that responds with an accurate price. KwaiAssist captures these lost conversions.
              </p>

              {/* Sliders */}
              <div className="space-y-6 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-medium text-slate-800 mb-2">
                    <span>Monthly WhatsApp Inquiries</span>
                    <span className="font-mono text-slate-950 font-bold">{monthlyInquiries} inquiries</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="500"
                    step="10"
                    value={monthlyInquiries}
                    onChange={(e) => setMonthlyInquiries(Number(e.target.value))}
                    className="w-full h-2 bg-[#E5E2D9] rounded-lg appearance-none cursor-pointer"
                    aria-label="Monthly WhatsApp Inquiries slider"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                    <span>30</span>
                    <span>250</span>
                    <span>500+</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-slate-800 mb-2">
                    <span>Average Service / Job Value (ZAR)</span>
                    <span className="font-mono text-slate-950 font-bold">R{avgJobValue.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="15000"
                    step="250"
                    value={avgJobValue}
                    onChange={(e) => setAvgJobValue(Number(e.target.value))}
                    className="w-full h-2 bg-[#E5E2D9] rounded-lg appearance-none cursor-pointer"
                    aria-label="Average Job Value slider"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                    <span>R500</span>
                    <span>R7,500</span>
                    <span>R15,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculated Output Readout */}
            <div className="lg:col-span-7 bg-[#FAF9F5] rounded-2xl border border-[#E5E2D9] p-8 sm:p-10 space-y-6">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-600">
                Projected Monthly Yield (28% Recovery Benchmark)
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-1">
                  <div className="text-xs text-slate-600">Recovered Monthly Revenue</div>
                  <div className="font-serif text-4xl sm:text-5xl font-light text-slate-950 tabular-nums">
                    R{recoveredRevenue.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-emerald-800 font-medium">+{recoveredJobs} booked jobs/mo</div>
                </div>

                <div className="space-y-1">
                  <div className="text-xs text-slate-600">Admin Hours Reclaimed</div>
                  <div className="font-serif text-4xl sm:text-5xl font-light text-slate-950 tabular-nums">
                    {hoursSaved} hrs
                  </div>
                  <div className="text-[11px] text-slate-600">Automated quoting & dispatch</div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E5E2D9] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <span className="text-slate-600">
                  Based on KwaiAssist Pro tier (R1,499/mo) = <strong className="text-slate-900 font-semibold">{Math.round(recoveredRevenue / 1499)}x estimated ROI</strong>
                </span>
                <a
                  href="#pricing"
                  className="font-semibold text-slate-900 hover:text-emerald-800 transition-colors inline-flex items-center gap-1 shrink-0"
                >
                  <span>View Pricing Plans</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
