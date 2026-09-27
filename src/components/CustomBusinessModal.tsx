import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Store, 
  MapPin, 
  Coins, 
  Wrench, 
  Zap, 
  Scissors, 
  ShieldCheck, 
  ArrowRight,
  RotateCcw
} from 'lucide-react';
import { CustomBusinessConfig } from '../types';

interface CustomBusinessModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentConfig: CustomBusinessConfig;
  onSave: (config: CustomBusinessConfig) => void;
}

const TEMPLATE_PRESETS: Array<{ label: string; icon: React.ReactNode; config: CustomBusinessConfig }> = [
  {
    label: '⚡ Solar & Electrical',
    icon: <Zap className="h-3.5 w-3.5" />,
    config: {
      name: 'VoltGuard Solar & DB Solutions',
      category: 'Solar & Electrical Engineering',
      location: 'Pretoria East & Centurion',
      primaryService: 'Inverter & Battery Diagnostic',
      baseRate: 850,
      callOutFee: 500,
      emergencySurcharge: 300
    }
  },
  {
    label: '✂️ Boutique Salon & Spa',
    icon: <Scissors className="h-3.5 w-3.5" />,
    config: {
      name: 'Maison Luxe Hair & Aesthetics',
      category: 'Beauty & Wellness Studio',
      location: 'Rosebank & Parkhurst, JHB',
      primaryService: 'Full Balayage, Cut & Treatment',
      baseRate: 1450,
      callOutFee: 0,
      emergencySurcharge: 150
    }
  },
  {
    label: '🛡️ Locksmith & Security',
    icon: <ShieldCheck className="h-3.5 w-3.5" />,
    config: {
      name: 'SureLock 24/7 Security & Access',
      category: 'Mobile Locksmith & Gate Automation',
      location: 'Durban North & Umhlanga',
      primaryService: 'Emergency Lockout & Rekeying',
      baseRate: 650,
      callOutFee: 400,
      emergencySurcharge: 250
    }
  },
  {
    label: '🔧 Appliance & Refrigeration',
    icon: <Wrench className="h-3.5 w-3.5" />,
    config: {
      name: 'FrostTech Fridge & Oven Repairs',
      category: 'Appliance & Cold Room Repairs',
      location: 'Southern Suburbs & Constantia',
      primaryService: 'Compressor & Thermostat Repair',
      baseRate: 720,
      callOutFee: 450,
      emergencySurcharge: 200
    }
  }
];

export const CustomBusinessModal: React.FC<CustomBusinessModalProps> = ({
  isOpen,
  onClose,
  currentConfig,
  onSave
}) => {
  const [formData, setFormData] = useState<CustomBusinessConfig>(currentConfig);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;
    onSave(formData);
    onClose();
  };

  const handleApplyTemplate = (template: CustomBusinessConfig) => {
    setFormData(template);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog Surface */}
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#FAF9F5] border border-[#E5E2D9] p-6 sm:p-8 shadow-2xl z-10 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/80 px-2.5 py-0.5 text-xs font-medium text-emerald-800 border border-emerald-300/60">
              <Sparkles className="h-3 w-3 text-emerald-700" />
              Interactive Practice Simulator
            </span>
          </div>
          
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-slate-950 tracking-tight">
            Configure your <span className="italic font-normal text-slate-800">business parameters</span>
          </h3>
          
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Enter your practice details and ZAR rate cards below. The WhatsApp simulator will instantly adapt its top bar, automated quote breakdown, and client slot booking to your brand.
          </p>
        </div>

        {/* Quick Fill Templates */}
        <div className="mb-6 p-3.5 rounded-2xl bg-[#F0EFEA] border border-[#E5E2D9]/80 space-y-2">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-1.5">
            <RotateCcw className="h-3 w-3" /> Quick Template Fill:
          </div>
          <div className="flex flex-wrap gap-2">
            {TEMPLATE_PRESETS.map((tmpl, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleApplyTemplate(tmpl.config)}
                className="text-xs px-3 py-1.5 rounded-xl bg-white hover:bg-slate-900 hover:text-white border border-slate-200 text-slate-700 transition-all cursor-pointer font-medium shadow-2xs flex items-center gap-1.5"
              >
                {tmpl.label}
              </button>
            ))}
          </div>
        </div>

        {/* Configuration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Row 1: Business Name & Industry */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5 flex items-center gap-1.5">
                <Store className="h-3.5 w-3.5 text-slate-500" /> Business Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Pretoria East Electrical"
                className="w-full rounded-xl border border-[#D5D1C5] bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5 flex items-center gap-1.5">
                <Wrench className="h-3.5 w-3.5 text-slate-500" /> Trade / Service Category
              </label>
              <input
                type="text"
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="e.g. Solar & Inverter Engineering"
                className="w-full rounded-xl border border-[#D5D1C5] bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 shadow-2xs"
              />
            </div>
          </div>

          {/* Row 2: Suburbs & Primary Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5 flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-slate-500" /> Service Area / Suburbs
              </label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Waterkloof & Menlyn, PTA"
                className="w-full rounded-xl border border-[#D5D1C5] bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-slate-500" /> Core Service Package
              </label>
              <input
                type="text"
                required
                value={formData.primaryService}
                onChange={(e) => setFormData({ ...formData, primaryService: e.target.value })}
                placeholder="e.g. Inverter Fault Diagnostic"
                className="w-full rounded-xl border border-[#D5D1C5] bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 shadow-2xs"
              />
            </div>
          </div>

          {/* Row 3: Pricing Rules (ZAR) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5 flex items-center gap-1">
                <Coins className="h-3.5 w-3.5 text-slate-500" /> Base Service Rate
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs font-semibold text-slate-500">R</span>
                <input
                  type="number"
                  min="0"
                  required
                  value={formData.baseRate}
                  onChange={(e) => setFormData({ ...formData, baseRate: Number(e.target.value) })}
                  className="w-full rounded-xl border border-[#D5D1C5] bg-white pl-8 pr-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-slate-900 shadow-2xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5 flex items-center gap-1">
                <Coins className="h-3.5 w-3.5 text-slate-500" /> Call-Out Fee
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs font-semibold text-slate-500">R</span>
                <input
                  type="number"
                  min="0"
                  required
                  value={formData.callOutFee}
                  onChange={(e) => setFormData({ ...formData, callOutFee: Number(e.target.value) })}
                  className="w-full rounded-xl border border-[#D5D1C5] bg-white pl-8 pr-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-slate-900 shadow-2xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5 flex items-center gap-1">
                <Coins className="h-3.5 w-3.5 text-slate-500" /> After-Hours Surcharge
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs font-semibold text-slate-500">R</span>
                <input
                  type="number"
                  min="0"
                  required
                  value={formData.emergencySurcharge}
                  onChange={(e) => setFormData({ ...formData, emergencySurcharge: Number(e.target.value) })}
                  className="w-full rounded-xl border border-[#D5D1C5] bg-white pl-8 pr-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-slate-900 shadow-2xs"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#E5E2D9] mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-medium tracking-tight shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Launch Simulator</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
