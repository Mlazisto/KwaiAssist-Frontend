import React, { useState } from 'react';
import { Calculator, TrendingUp, ArrowRight } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenAuth: (mode: 'signin' | 'signup') => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenAuth }) => {
  const [inquiriesPerWeek, setInquiriesPerWeek] = useState<number>(25);
  const [avgJobValue, setAvgJobValue] = useState<number>(1200);
  const [missedRate, setMissedRate] = useState<number>(30);

  // Calculations
  const inquiriesPerMonth = inquiriesPerWeek * 4.3;
  const missedJobsPerMonth = Math.round(inquiriesPerMonth * (missedRate / 100));
  const lostRevenuePerMonth = missedJobsPerMonth * avgJobValue;
  const recoveredRevenue = Math.round(lostRevenuePerMonth * 0.85); // 85% capture rate with instant 12s replies
  const kwaiCost = 1490; // Growth plan
  const netProfitMonthly = recoveredRevenue - kwaiCost;
  const daysToPayback = Math.max(1, Math.round((kwaiCost / (recoveredRevenue / 30)) * 10) / 10);

  return (
    <section className="py-20 bg-[#F6F5F1]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Calculator Controls */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
              <Calculator className="h-4 w-4" />
              <span>Revenue Leakage Audit</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-light text-slate-950 tracking-tight text-balance">
              How much revenue does your business lose to slow WhatsApp replies?
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              When a South African customer messages 3 service companies on WhatsApp, <strong>78% choose the first company that replies with an exact quote</strong>. If you take 2 hours to answer, that job is already booked by your competitor.
            </p>

            {/* Sliders */}
            <div className="space-y-6 pt-2">
              
              {/* Slider 1: Inquiries */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="inquiries-slider" className="text-slate-700 font-medium">Inbound WhatsApp inquiries per week</label>
                  <span className="font-mono font-bold text-slate-950 text-base tabular-nums">
                    {inquiriesPerWeek} inquiries
                  </span>
                </div>
                <input
                  id="inquiries-slider"
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={inquiriesPerWeek}
                  onChange={(e) => setInquiriesPerWeek(Number(e.target.value))}
                  aria-label="Inbound WhatsApp inquiries per week"
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>5/wk (Solo contractor)</span>
                  <span>100/wk (Busy multi-tech fleet)</span>
                </div>
              </div>

              {/* Slider 2: Average Job Value */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="job-value-slider" className="text-slate-700 font-medium">Average job invoice value</label>
                  <span className="font-mono font-bold text-emerald-700 text-base tabular-nums">
                    R{avgJobValue.toLocaleString('en-ZA')}
                  </span>
                </div>
                <input
                  id="job-value-slider"
                  type="range"
                  min="400"
                  max="8000"
                  step="100"
                  value={avgJobValue}
                  onChange={(e) => setAvgJobValue(Number(e.target.value))}
                  aria-label="Average job invoice value in Rands"
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>R400 (Standard call-out)</span>
                  <span>R8,000 (Major installation / overhaul)</span>
                </div>
              </div>

              {/* Slider 3: Missed/Delayed rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="missed-rate-slider" className="text-slate-700 font-medium">Inquiries received while busy, driving, or after hours</label>
                  <span className="font-mono font-bold text-amber-700 text-base tabular-nums">
                    {missedRate}%
                  </span>
                </div>
                <input
                  id="missed-rate-slider"
                  type="range"
                  min="10"
                  max="60"
                  step="5"
                  value={missedRate}
                  onChange={(e) => setMissedRate(Number(e.target.value))}
                  aria-label="Percentage of inquiries received while busy or after hours"
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>10% (Desk receptionist)</span>
                  <span>60% (Mostly on-site / solo owner)</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Calculated Results Box */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
              
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Monthly Leakage Projection
              </div>

              {/* Lost Revenue Highlight */}
              <div className="border-b border-slate-200 pb-6 mb-6">
                <div className="text-sm text-rose-700 flex items-center gap-1.5 font-medium">
                  <span>Currently lost to unbooked or late replies:</span>
                </div>
                <div className="font-serif text-4xl sm:text-5xl font-light text-rose-600 tabular-nums mt-1">
                  -R{lostRevenuePerMonth.toLocaleString('en-ZA')}
                  <span className="text-base text-slate-500 font-sans"> / month</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Approx. <span className="text-slate-900 font-semibold">{missedJobsPerMonth} missed jobs</span> every 30 days
                </div>
              </div>

              {/* KwaiAssist Recovered Revenue */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald-600" />
                    <span className="text-sm font-semibold text-slate-900">Estimated Recovered Revenue</span>
                  </div>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-emerald-700 tabular-nums">
                    +R{recoveredRevenue.toLocaleString('en-ZA')}
                  </span>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200/80 space-y-2.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>KwaiAssist Business Plan:</span>
                    <span className="font-mono text-slate-900 font-medium">R1,490 / mo</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Net Monthly Profit Added:</span>
                    <span className="font-mono font-bold text-emerald-700 tabular-nums">
                      +R{Math.max(0, netProfitMonthly).toLocaleString('en-ZA')} / mo
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-600 pt-1 border-t border-slate-200">
                    <span>Payback period:</span>
                    <span className="font-semibold text-slate-900">Pays for itself in {daysToPayback} days</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenAuth('signup')}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-slate-900 py-3.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10 active:scale-98 cursor-pointer"
                >
                  <span>Stop Losing Jobs — Start Free Trial</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
