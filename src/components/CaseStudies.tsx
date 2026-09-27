import React from 'react';
import { Star, MapPin, Quote } from 'lucide-react';
import saOwnerImg from '../assets/images/sa_business_owner_1790369396966.jpg';
import { TESTIMONIALS } from '../data/landingData';

export const CaseStudies: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F6F5F1]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
            Verified South African Impact
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-slate-950 tracking-tight text-balance">
            Real service businesses. Real bookings. Real Rands on the ledger.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From single-van contractors in Durbanville to bustling medical aesthetics practices in Umhlanga Ridge.
          </p>
        </div>

        {/* Featured Case Study with Photo */}
        <div className="mb-12 rounded-3xl border border-[#E5E2D9] bg-white p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <img
                src={saOwnerImg}
                alt="Jaco van der Merwe, Master Plumber in Cape Town using KwaiAssist on his phone"
                referrerPolicy="no-referrer"
                className="w-full h-[320px] object-cover object-center"
              />
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-2 text-xs font-semibold text-slate-600">Verified South African Plumber</span>
              </div>

              <Quote className="h-8 w-8 text-emerald-600/40" />

              <blockquote className="text-lg sm:text-xl font-medium text-slate-800 leading-relaxed font-serif">
                "{TESTIMONIALS[0].quote}"
              </blockquote>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between border-t border-slate-200 gap-4">
                <div>
                  <div className="text-base font-bold text-slate-950">
                    {TESTIMONIALS[0].author}
                  </div>
                  <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <span>{TESTIMONIALS[0].role} · {TESTIMONIALS[0].business}</span>
                    <span>·</span>
                    <span className="flex items-center gap-0.5 text-emerald-700 font-medium">
                      <MapPin className="h-3 w-3" />
                      {TESTIMONIALS[0].location}
                    </span>
                  </div>
                </div>

                <div className="rounded-xl bg-emerald-50 border border-emerald-200/80 px-4 py-2 text-left sm:text-right shrink-0">
                  <div className="font-mono text-xl font-bold text-emerald-800 tabular-nums">
                    {TESTIMONIALS[0].metrics}
                  </div>
                  <div className="text-[11px] text-emerald-700">
                    {TESTIMONIALS[0].metricLabel}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Secondary Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.slice(1).map((t, idx) => (
            <div key={idx} className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xs">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <div className="font-mono text-sm font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    {t.metrics}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-serif text-lg">
                  "{t.quote}"
                </p>
              </div>

              <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-950">{t.author}</div>
                  <div className="text-xs text-slate-500">{t.role} · {t.business}</div>
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-emerald-700" />
                  <span>{t.location.split(',')[0]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
