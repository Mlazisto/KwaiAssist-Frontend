import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data/landingData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="pt-16 pb-16 lg:pt-24 lg:pb-24 bg-[#FAF9F5] border-y border-[#E5E2D9]">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
        
        {/* Editorial Section Header */}
        <div className="max-w-2xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs tracking-widest text-slate-600 uppercase font-medium">
            <span className="font-mono text-emerald-800">04</span>
            <span className="text-slate-400" aria-hidden="true">/</span>
            <span>Inquiries & Specifications</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-light text-slate-950 tracking-tight leading-[1.1] text-balance">
            Common questions regarding <span className="italic font-normal text-slate-800">implementation.</span>
          </h2>

          <p className="text-base text-slate-700 leading-relaxed pt-1 max-w-prose text-pretty">
            Details concerning existing WhatsApp number migration, POPIA compliance, and WhatsApp Cloud API infrastructure.
          </p>
        </div>

        {/* Minimalist Editorial Accordion */}
        <div className="border-t border-[#E5E2D9]">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border-b border-[#E5E2D9] transition-colors"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between py-6 text-left transition-colors cursor-pointer group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className={`font-serif text-xl sm:text-2xl font-light pr-6 transition-colors duration-200 ${
                    isOpen ? 'text-slate-950 font-normal' : 'text-slate-800 group-hover:text-slate-950'
                  }`}>
                    {item.question}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E2D9] text-slate-600 shrink-0 transition-all duration-300 group-hover:border-slate-400 group-hover:text-slate-950">
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-slate-950' : ''}`} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm sm:text-base text-slate-700 leading-relaxed max-w-prose text-pretty">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
