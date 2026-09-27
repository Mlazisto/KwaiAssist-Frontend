import React, { useState } from 'react';
import { Check, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { PRICING_PLANS } from '../data/landingData';

interface PricingProps {
  onSelectPlan: (planId: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="pricing" className="pt-16 pb-16 lg:pt-24 lg:pb-24 bg-[#FAF9F5] border-y border-[#E5E2D9]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs tracking-widest text-slate-600 uppercase font-medium">
            <span className="font-mono text-emerald-800">02</span>
            <span className="text-slate-400" aria-hidden="true">/</span>
            <span>Investment Schedule</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-slate-950 tracking-tight leading-[1.1] text-balance">
            Transparent investment in <span className="italic font-normal text-slate-800">operational serenity.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-prose text-pretty pt-1">
            No lock-in contracts or surprise overages. Invoiced in South African Rands (ZAR) with complete SARS-compliant VAT tax invoices.
          </p>

          {/* Minimalist Segmented Billing Toggle */}
          <div className="pt-4">
            <div className="inline-flex items-center gap-1 rounded-full border border-[#E5E2D9] bg-[#EFECE6] p-1.5" role="tablist">
              <button
                role="tab"
                aria-selected={billingCycle === 'monthly'}
                onClick={() => setBillingCycle('monthly')}
                className={`rounded-full px-5 py-2 text-xs font-medium tracking-wide transition-all cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-slate-950 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                Monthly Settlement
              </button>
              <button
                role="tab"
                aria-selected={billingCycle === 'annual'}
                onClick={() => setBillingCycle('annual')}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-medium tracking-wide transition-all cursor-pointer ${
                  billingCycle === 'annual'
                    ? 'bg-white text-slate-950 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <span>Annual Pre-paid</span>
                <span className="text-[10px] uppercase font-mono text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 font-bold">
                  -20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, index) => {
            const price = billingCycle === 'annual' ? plan.priceAnnualMonthly : plan.priceMonthly;
            const isFeatured = plan.popular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-3xl border flex flex-col justify-between p-8 sm:p-10 transition-all duration-300 ${
                  isFeatured
                    ? 'border-2 border-slate-900 bg-white shadow-xl shadow-slate-900/5 ring-1 ring-slate-900/5'
                    : 'border-[#E5E2D9] bg-[#F6F5F1] hover:border-[#D5D1C5] hover:bg-white hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl font-normal text-slate-950">{plan.name}</h3>
                    {isFeatured && (
                      <span className="text-[11px] font-mono tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded uppercase font-semibold">
                        Recommended
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-slate-700 min-h-[38px] leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 border-y border-[#E5E2D9] py-5">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-serif text-4xl sm:text-5xl font-light text-slate-950 tabular-nums">
                        {price > 0 ? `R${price.toLocaleString()}` : 'Custom'}
                      </span>
                      <span className="text-xs text-slate-600 font-mono">
                        {price > 0 ? (billingCycle === 'annual' ? '/mo (billed annually)' : '/month') : 'enterprise quote'}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-6 space-y-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-medium">Included Infrastructure</div>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E5E2D9]">
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full group inline-flex items-center justify-center gap-2 rounded-full py-3.5 px-6 text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer active:scale-[0.98] ${
                      isFeatured
                        ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-md shadow-slate-900/10'
                        : 'border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    <span>{plan.ctaLabel || 'Get Started'}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <p className="text-[11px] text-center text-slate-500 mt-2.5">
                    {price > 0 ? '14-day free trial · Instant setup' : 'Dedicated concierge onboarding'}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reassurance Footer */}
        <div className="mt-14 pt-8 border-t border-[#E5E2D9] flex flex-wrap items-center justify-between gap-6 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-700" />
            <span>SARS Compliant Tax Invoicing · Invoiced in ZAR (Rand)</span>
          </div>
          <div className="flex items-center gap-6">
            <span>PayFast & Ozow Instant EFT Accepted</span>
            <span>·</span>
            <span>No Long-Term Lock-in</span>
          </div>
        </div>

      </div>
    </section>
  );
};
