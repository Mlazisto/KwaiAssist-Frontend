import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Lock, Loader2, Sparkles } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  initialMode: 'signin' | 'signup';
  selectedPlanId?: string;
  onClose: () => void;
}

type SocialProvider = 'google' | 'apple' | 'meta';

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
  const [activeProvider, setActiveProvider] = useState<SocialProvider | null>(null);
  const [isLoadingProvider, setIsLoadingProvider] = useState<SocialProvider | null>(null);
  const [socialStep, setSocialStep] = useState<'initial' | 'b2b_details'>('initial');

  // Sync mode if changed by parent
  React.useEffect(() => {
    setMode(initialMode);
    setIsSubmitted(false);
    setActiveProvider(null);
    setIsLoadingProvider(null);
    setSocialStep('initial');
  }, [initialMode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleSocialAuth = (provider: SocialProvider) => {
    setIsLoadingProvider(provider);
    
    setTimeout(() => {
      setIsLoadingProvider(null);
      setActiveProvider(provider);

      if (mode === 'signin') {
        // Direct login success
        setIsSubmitted(true);
      } else {
        // For B2B WhatsApp platform signup, prompt rapid 15s step to attach business number
        if (!email) {
          if (provider === 'google') setEmail('owner@practice.co.za');
          if (provider === 'apple') setEmail('practice-lead@privaterelay.appleid.com');
          if (provider === 'meta') setEmail('info@business.co.za');
        }
        setSocialStep('b2b_details');
      }
    }, 600);
  };

  const handleCompleteSocialB2B = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-3xl border border-[#E5E2D9] bg-white p-8 sm:p-10 shadow-2xl text-slate-800 max-h-[90vh] overflow-y-auto"
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
            
            {activeProvider && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F5] border border-[#E5E2D9] text-[11px] font-mono text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Authenticated via {activeProvider.toUpperCase()} SSO</span>
              </div>
            )}

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
        ) : socialStep === 'b2b_details' && mode === 'signup' ? (
          /* Step 2: B2B WhatsApp Connection after 1-Tap Social Auth */
          <div>
            <div className="mb-6 space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-emerald-700 uppercase font-medium">
                <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                <span>Account Verified ({activeProvider?.toUpperCase()})</span>
              </div>
              <h2 className="font-serif text-3xl font-light text-slate-950">
                Connect WhatsApp Dispatch
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                Link your South African business number so KwaiAssist can automate your incoming customer inquiries.
              </p>
            </div>

            <form onSubmit={handleCompleteSocialB2B} className="space-y-4">
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

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSocialStep('initial')}
                  className="rounded-full border border-[#E5E2D9] bg-[#FAF9F5] px-4 py-3 text-xs font-medium text-slate-600 hover:bg-[#EFECE6] transition-colors cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 py-3.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-slate-800 transition-colors cursor-pointer shadow-md"
                >
                  <span>Activate 14-Day Evaluation</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
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
                onClick={() => {
                  setMode('signup');
                  setSocialStep('initial');
                }}
                className={`flex-1 py-2 text-xs font-medium tracking-wide rounded-full transition-all cursor-pointer ${
                  mode === 'signup'
                    ? 'bg-white text-slate-950 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                14-Day Evaluation
              </button>
              <button
                onClick={() => {
                  setMode('signin');
                  setSocialStep('initial');
                }}
                className={`flex-1 py-2 text-xs font-medium tracking-wide rounded-full transition-all cursor-pointer ${
                  mode === 'signin'
                    ? 'bg-white text-slate-950 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                Client Sign In
              </button>
            </div>

            {/* Direct Email/Password Form */}
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

            {/* Hairline Editorial Divider */}
            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E5E2D9]"></div>
              </div>
              <span className="relative bg-white px-3 text-[11px] font-mono uppercase tracking-widest text-slate-500">
                or authenticate with
              </span>
            </div>

            {/* Social SSO Options: Google, Apple, Meta */}
            <div className="grid grid-cols-3 gap-3">
              {/* Google */}
              <button
                type="button"
                onClick={() => handleSocialAuth('google')}
                disabled={isLoadingProvider !== null}
                className="group relative flex items-center justify-center gap-2 rounded-2xl border border-[#E5E2D9] bg-[#FAF9F5] px-3 py-2.5 text-xs font-medium text-slate-700 hover:bg-[#EFECE6] hover:border-slate-400 hover:text-slate-950 transition-all cursor-pointer shadow-xs focus-visible:ring-2 focus-visible:ring-slate-900 disabled:opacity-50"
                aria-label="Sign in with Google"
              >
                {isLoadingProvider === 'google' ? (
                  <Loader2 className="h-4 w-4 animate-spin text-slate-600" />
                ) : (
                  <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      fill="#EA4335"
                    />
                  </svg>
                )}
                <span className="hidden sm:inline">Google</span>
              </button>

              {/* Apple */}
              <button
                type="button"
                onClick={() => handleSocialAuth('apple')}
                disabled={isLoadingProvider !== null}
                className="group relative flex items-center justify-center gap-2 rounded-2xl border border-[#E5E2D9] bg-[#FAF9F5] px-3 py-2.5 text-xs font-medium text-slate-700 hover:bg-[#EFECE6] hover:border-slate-400 hover:text-slate-950 transition-all cursor-pointer shadow-xs focus-visible:ring-2 focus-visible:ring-slate-900 disabled:opacity-50"
                aria-label="Sign in with Apple"
              >
                {isLoadingProvider === 'apple' ? (
                  <Loader2 className="h-4 w-4 animate-spin text-slate-600" />
                ) : (
                  <svg className="h-4 w-4 shrink-0 fill-slate-900" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.87c.62-.75 1.04-1.8 0.92-2.87-.9.04-1.99.6-2.63 1.35-.57.65-1.07 1.72-.94 2.76 1 .08 2.03-.49 2.65-1.24z" />
                  </svg>
                )}
                <span className="hidden sm:inline">Apple</span>
              </button>

              {/* Meta */}
              <button
                type="button"
                onClick={() => handleSocialAuth('meta')}
                disabled={isLoadingProvider !== null}
                className="group relative flex items-center justify-center gap-2 rounded-2xl border border-[#E5E2D9] bg-[#FAF9F5] px-3 py-2.5 text-xs font-medium text-slate-700 hover:bg-[#EFECE6] hover:border-slate-400 hover:text-slate-950 transition-all cursor-pointer shadow-xs focus-visible:ring-2 focus-visible:ring-slate-900 disabled:opacity-50"
                aria-label="Sign in with Meta or Facebook"
              >
                {isLoadingProvider === 'meta' ? (
                  <Loader2 className="h-4 w-4 animate-spin text-slate-600" />
                ) : (
                  <svg className="h-4 w-4 shrink-0 fill-[#0081FB]" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                )}
                <span className="hidden sm:inline">Meta</span>
              </button>
            </div>

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
