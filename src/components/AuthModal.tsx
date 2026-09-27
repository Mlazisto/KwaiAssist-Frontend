import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Lock } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  initialMode: 'signin' | 'signup';
  selectedPlanId?: string;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode,
  selectedPlanId = 'growth',
  onClose
}) => {
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [businessName, setBusinessName] = useState('');
  const [category, setCategory] = useState('plumbing');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync mode if changed by parent
  React.useEffect(() => {
    setMode(initialMode);
    setIsSubmitted(false);
  }, [initialMode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-3xl border border-[#E5E2D9] bg-white p-8 sm:p-10 shadow-2xl text-slate-800"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 rounded-full p-2 text-slate-400 hover:bg-[#EFECE6] hover:text-slate-700 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {isSubmitted ? (
          <div className="py-6 text-center space-y-5">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle2 className="h-7 w-7 text-emerald-600" />
            </div>
            <h3 className="font-serif text-3xl font-light text-slate-950">
              {mode === 'signup' ? 'Workspace Provisioned' : 'Welcome back'}
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              {mode === 'signup'
                ? `We've initiated evaluation credentials for ${businessName || 'your business'}. Verification coordinates have been dispatched to ${phone || 'your phone'} on WhatsApp.`
                : 'Session authenticated. Redirecting to your KwaiAssist operational console...'}
            </p>
            <div className="pt-3">
              <button
                onClick={onClose}
                className="w-full rounded-full bg-slate-900 py-3.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-slate-800 transition-colors cursor-pointer shadow-md"
              >
                Access KwaiAssist Workspace
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6 space-y-1">
              <div className="text-xs font-mono tracking-widest text-slate-500 uppercase font-medium">
                {mode === 'signup' ? 'Client Onboarding' : 'Portal Sign In'}
              </div>
              <h2 className="font-serif text-3xl font-light text-slate-950">
                {mode === 'signup' ? 'Begin a Conversation' : 'Authenticate Session'}
              </h2>
            </div>

            {/* Segmented Mode Selector */}
            <div className="flex rounded-full border border-[#E5E2D9] bg-[#EFECE6] p-1 mb-6">
              <button
                onClick={() => setMode('signup')}
                className={`flex-1 py-2 text-xs font-medium tracking-wide rounded-full transition-all cursor-pointer ${
                  mode === 'signup'
                    ? 'bg-white text-slate-950 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                14-Day Evaluation
              </button>
              <button
                onClick={() => setMode('signin')}
                className={`flex-1 py-2 text-xs font-medium tracking-wide rounded-full transition-all cursor-pointer ${
                  mode === 'signin'
                    ? 'bg-white text-slate-950 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                Client Sign In
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'signup' && (
                <>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Business or Practice Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Coastal Drains or Sandton Dental"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full rounded-xl border border-[#E5E2D9] bg-[#FAF9F5] px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-slate-900 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Practice Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full rounded-xl border border-[#E5E2D9] bg-[#FAF9F5] px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-slate-900 focus:outline-none transition-colors"
                    >
                      <option value="plumbing">Plumbing & Drainage</option>
                      <option value="electrical">Electrical & Solar</option>
                      <option value="auto">Auto Mechanics & Detailing</option>
                      <option value="dental">Dental & Medical Aesthetics</option>
                      <option value="hvac">HVAC & Air Conditioning</option>
                      <option value="legal">Legal & Professional Services</option>
                      <option value="other">Other Service Practice</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      WhatsApp Business Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+27 82 000 0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-[#E5E2D9] bg-[#FAF9F5] px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-slate-900 focus:outline-none transition-colors"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Corporate Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@practice.co.za"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-[#E5E2D9] bg-[#FAF9F5] px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-slate-900 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-[#E5E2D9] bg-[#FAF9F5] px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-slate-900 focus:outline-none transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 py-3.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-slate-800 transition-colors cursor-pointer shadow-md"
                >
                  <span>{mode === 'signup' ? 'Initiate Evaluation' : 'Access Portal'}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>

            <div className="mt-6 flex items-center justify-between text-[11px] text-slate-500 pt-4 border-t border-[#E5E2D9]">
              <div className="flex items-center gap-1.5">
                <Lock className="h-3 w-3 text-slate-500" />
                <span>POPIA & 256-bit SSL encrypted</span>
              </div>
              <span>No credit card required</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
