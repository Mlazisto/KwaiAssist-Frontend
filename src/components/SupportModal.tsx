import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-3xl border border-[#E5E2D9] bg-white p-8 sm:p-10 shadow-2xl text-slate-800"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 rounded-full p-2 text-slate-400 hover:bg-[#EFECE6] hover:text-slate-700 transition-colors cursor-pointer"
          aria-label="Close support modal"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-5">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle2 className="h-7 w-7 text-emerald-600" />
            </div>
            <h3 className="font-serif text-3xl font-light text-slate-950">
              Inquiry Dispatched
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, {name || 'there'}. Our South African engineering desk in Johannesburg has received your inquiry and will connect back at {contact || 'your contact'} within 15 minutes.
            </p>
            <button
              onClick={onClose}
              className="mt-3 w-full rounded-full bg-slate-900 py-3.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-slate-800 transition-colors cursor-pointer shadow-md"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1">
              <div className="text-xs font-mono tracking-widest text-slate-500 uppercase font-medium">
                Concierge Desk · Johannesburg
              </div>
              <h2 className="font-serif text-3xl font-light text-slate-950">
                Speak with an Architect
              </h2>
              <p className="text-xs text-slate-600 pt-1 leading-relaxed">
                Connect with our local South African engineering team for bespoke rate card consultation, custom CRM integration, or enterprise SLA queries.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Johan van der Merwe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-[#E5E2D9] bg-[#FAF9F5] px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-slate-900 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  WhatsApp Number or Corporate Email
                </label>
                <input
                  type="text"
                  required
                  placeholder="+27 83 123 4567 or johan@practice.co.za"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full rounded-xl border border-[#E5E2D9] bg-[#FAF9F5] px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-slate-900 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  What would you like to discuss?
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us about your practice volume, suburbs serviced, or current workflow bottleneck..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-[#E5E2D9] bg-[#FAF9F5] px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-slate-900 focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 py-3.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-slate-800 transition-colors cursor-pointer shadow-md"
                >
                  <span>Dispatch Consultation Request</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>

            <div className="mt-6 pt-4 border-t border-[#E5E2D9] flex items-center justify-between text-xs text-slate-500">
              <span>Standard response window: &lt; 15 mins</span>
              <span className="font-mono text-slate-600">Rosebank Desk</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
