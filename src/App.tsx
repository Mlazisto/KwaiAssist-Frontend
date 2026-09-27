import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveChatDemo } from './components/LiveChatDemo';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { SupportModal } from './components/SupportModal';

export default function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signup');
  const [selectedPlanId, setSelectedPlanId] = useState<string>('growth');
  const [supportModalOpen, setSupportModalOpen] = useState(false);

  const handleOpenAuth = (mode: 'signin' | 'signup', planId?: string) => {
    setAuthMode(mode);
    if (planId) setSelectedPlanId(planId);
    setAuthModalOpen(true);
  };

  const handleOpenSupport = () => {
    setSupportModalOpen(true);
  };

  const handleExploreDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F5F1] text-slate-900 flex flex-col selection:bg-emerald-500/20 selection:text-emerald-950">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenAuth={(mode) => handleOpenAuth(mode)}
        onOpenSupport={handleOpenSupport}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Home / Hero Section with right-side phone visual */}
        <Hero
          onOpenAuth={(mode) => handleOpenAuth(mode)}
          onExploreDemo={handleExploreDemo}
        />

        {/* 2. Features / Capabilities */}
        <Features />

        {/* 3. Pricing / Transparent ZAR Pricing Plans */}
        <Pricing
          onSelectPlan={(planId) => handleOpenAuth('signup', planId)}
        />

        {/* 4. Demo / Live Interactive WhatsApp Simulator */}
        <LiveChatDemo />

        {/* 5. FAQs / Frequently Asked Questions */}
        <FaqSection />

        {/* 6. Support / High Conversion CTA & Support Desk */}
        <CtaBanner
          onOpenAuth={(mode) => handleOpenAuth(mode)}
          onOpenSupport={handleOpenSupport}
        />
      </main>

      {/* Compliant Footer */}
      <Footer
        onOpenAuth={(mode) => handleOpenAuth(mode)}
        onOpenSupport={handleOpenSupport}
      />

      {/* Modals */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        selectedPlanId={selectedPlanId}
        onClose={() => setAuthModalOpen(false)}
      />

      <SupportModal
        isOpen={supportModalOpen}
        onClose={() => setSupportModalOpen(false)}
      />
    </div>
  );
}
