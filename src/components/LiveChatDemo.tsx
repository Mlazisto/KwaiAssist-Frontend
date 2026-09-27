import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  CheckCheck, 
  RefreshCw, 
  ArrowLeft,
  Phone,
  Video,
  Smile,
  Paperclip,
  Lock
} from 'lucide-react';
import { BUSINESS_PRESETS } from '../data/landingData';
import { BusinessPreset, ChatMessage, CustomBusinessConfig } from '../types';
import { CustomBusinessModal } from './CustomBusinessModal';

const DEFAULT_CUSTOM_CONFIG: CustomBusinessConfig = {
  name: 'Pretoria East Electrical & Solar',
  category: 'Solar & Electrical Engineering',
  location: 'Waterkloof & Centurion, PTA',
  primaryService: 'Inverter Diagnostic & DB Board Inspection',
  baseRate: 850,
  callOutFee: 450,
  emergencySurcharge: 250
};

export const LiveChatDemo: React.FC = () => {
  const standardPresets = BUSINESS_PRESETS.slice(0, 3);
  
  const [customConfig, setCustomConfig] = useState<CustomBusinessConfig>(DEFAULT_CUSTOM_CONFIG);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasCustomized, setHasCustomized] = useState(false);

  const buildCustomPreset = (config: CustomBusinessConfig): BusinessPreset => ({
    id: 'custom',
    name: config.name,
    category: config.category,
    location: config.location,
    avatar: '⚡',
    isCustom: true,
    initialMessages: [
      {
        id: 'c1',
        sender: 'client',
        text: `Hi, I need assistance with a ${config.primaryService.toLowerCase()} in ${config.location.split('&')[0].trim()}. What is your standard rate and call-out fee?`,
        time: '14:10'
      },
      {
        id: 'c2',
        sender: 'ai',
        text: `Sawubona! Thanks for contacting ${config.name}. For ${config.primaryService}, our standard rate is R${config.baseRate.toLocaleString()} with a R${config.callOutFee.toLocaleString()} call-out fee (waived if work proceeds). We have certified technicians available today at 15:30 or tomorrow at 09:00. Would you like to lock in a slot?`,
        time: '14:10',
        badge: 'Instant ZAR Rate Match'
      },
      {
        id: 'c3',
        sender: 'client',
        text: 'Tomorrow at 09:00 is perfect. Does this include a full VAT invoice?',
        time: '14:12'
      },
      {
        id: 'c4',
        sender: 'ai',
        text: `Yes, 100%! All our ${config.category.toLowerCase()} services include full itemized SARS VAT invoices. Your slot for tomorrow at 09:00 is confirmed. Please share your physical address and we will dispatch our team!`,
        time: '14:12',
        badge: 'Slot Locked & Synced'
      }
    ],
    quickPrompts: [
      `What is your call-out fee in ${config.location.split('&')[0].trim()}?`,
      `Do you offer emergency after-hours dispatch?`,
      `Can you book me for tomorrow morning?`
    ]
  });

  const [activePreset, setActivePreset] = useState<BusinessPreset>(standardPresets[0]);
  const [messages, setMessages] = useState<ChatMessage[]>(standardPresets[0].initialMessages);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSelectPreset = (preset: BusinessPreset) => {
    setActivePreset(preset);
    setMessages(preset.initialMessages);
  };

  const handleSaveCustom = (newConfig: CustomBusinessConfig) => {
    setCustomConfig(newConfig);
    setHasCustomized(true);
    const customPreset = buildCustomPreset(newConfig);
    setActivePreset(customPreset);
    setMessages(customPreset.initialMessages);
  };

  const handleResetChat = () => {
    setMessages(activePreset.initialMessages);
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'client',
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    // Realistic intelligent AI response matching KwaiAssist engine logic
    setTimeout(() => {
      let replyText = '';
      let badge = 'Intelligent Quote Match';

      const lower = text.toLowerCase();
      if (lower.includes('call-out') || lower.includes('callout') || lower.includes('fee') || lower.includes('rate') || lower.includes('cost') || lower.includes('price')) {
        replyText = `Our standard call-out for ${activePreset.location.split(',')[0]} is R450, which includes the first 30 minutes of diagnostic assessment. If you proceed with the repair on-site, the call-out fee is credited toward the total job invoice.`;
        badge = 'ZAR Rate Card';
      } else if (lower.includes('emergency') || lower.includes('after-hours') || lower.includes('urgent') || lower.includes('tonight')) {
        replyText = `We operate a 24/7 emergency dispatch service across ${activePreset.location}. A R350 after-hours surcharge applies between 18:00 and 07:00. Our closest on-call technician is currently within 25 minutes of your area. Shall I dispatch now?`;
        badge = 'Emergency Dispatch Buffer';
      } else if (lower.includes('book') || lower.includes('tomorrow') || lower.includes('today') || lower.includes('slot') || lower.includes('time')) {
        replyText = `Checking technician route schedule for ${activePreset.location}... We have slots open at 11:00 or 14:30. Both slots allow a 30-minute regional travel buffer. Which time suits your schedule best?`;
        badge = 'Live Calendar Reconciliation';
      } else if (lower.includes('vat') || lower.includes('invoice') || lower.includes('popia') || lower.includes('tax')) {
        replyText = `Every service booked through KwaiAssist is fully POPIA-compliant and generates an official SARS-registered VAT tax invoice sent directly to your WhatsApp and email upon completion.`;
        badge = 'SARS & POPIA Compliant';
      } else {
        replyText = `Thank you for your message. KwaiAssist has logged your request for ${activePreset.name} in ${activePreset.location}. A technician is ready to confirm your quotation and schedule. Would you like a morning or afternoon appointment?`;
        badge = 'Instant Lead Capture';
      }

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        badge
      };

      setIsTyping(false);
      setMessages(prev => [...prev, aiMsg]);
    }, 1100);
  };

  return (
    <section id="demo" className="pt-16 pb-16 lg:pt-24 lg:pb-24 bg-[#F6F5F1] relative">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs tracking-widest text-slate-600 uppercase font-medium">
            <span className="font-mono text-emerald-800">03</span>
            <span className="text-slate-400" aria-hidden="true">/</span>
            <span>Live Interactive Demonstration</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-slate-950 tracking-tight leading-[1.1] text-balance">
            Test the live WhatsApp <span className="italic font-normal text-slate-800">conversational engine.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-prose text-pretty pt-1">
            Experience how KwaiAssist greets South African inquiries, calculates itemized rate cards, buffers travel times, and confirms appointments in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Vertical Selector & Quick Action Prompts (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Scenario Selector */}
            <div className="bg-white rounded-3xl border border-[#E5E2D9] p-6 sm:p-7 space-y-4 shadow-xs">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                Select Business Persona
              </div>

              <div className="space-y-2">
                {standardPresets.map((preset) => {
                  const isSelected = activePreset.id === preset.id;
                  return (
                    <button
                      type="button"
                      key={preset.id}
                      onClick={() => handleSelectPreset(preset)}
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'border-slate-900 bg-slate-900 text-white shadow-sm'
                          : 'border-[#E5E2D9] bg-[#FAF9F5] text-slate-900 hover:border-slate-400 hover:bg-white'
                      }`}
                    >
                      <div>
                        <p className="font-medium text-xs sm:text-sm">{preset.name}</p>
                        <p className={`text-[11px] ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                          {preset.location}
                        </p>
                      </div>
                      <span className={`text-[11px] font-mono ${isSelected ? 'text-emerald-300 font-semibold' : 'text-slate-400'}`}>
                        {isSelected ? 'Active' : 'Switch'}
                      </span>
                    </button>
                  );
                })}

                {/* Custom Business Config Option */}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    activePreset.id === 'custom'
                      ? 'border-slate-900 bg-slate-900 text-white shadow-sm'
                      : 'border-dashed border-[#C5C0B3] bg-white text-slate-900 hover:border-slate-900'
                  }`}
                >
                  <div>
                    <p className="font-medium text-xs sm:text-sm">
                      {hasCustomized ? customConfig.name : 'Configure Your Business'}
                    </p>
                    <p className={`text-[11px] ${activePreset.id === 'custom' ? 'text-slate-300' : 'text-slate-500'}`}>
                      {hasCustomized ? customConfig.location : 'Set custom ZAR rate card & suburb'}
                    </p>
                  </div>
                  <span className={`text-[11px] font-mono ${activePreset.id === 'custom' ? 'text-emerald-300' : 'text-slate-500 font-medium'}`}>
                    {hasCustomized ? 'Custom Active' : 'Configure'}
                  </span>
                </button>
              </div>
            </div>

            {/* Quick Interactive Prompt Suggestions */}
            <div className="bg-white rounded-3xl border border-[#E5E2D9] p-6 sm:p-7 space-y-3 shadow-xs">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                Test Client Inquiries
              </div>

              <div className="flex flex-col gap-2">
                {activePreset.quickPrompts.map((prompt, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => handleSendMessage(prompt)}
                    className="text-left text-xs p-3 rounded-xl border border-[#E5E2D9] bg-[#FAF9F5] text-slate-800 hover:bg-white hover:border-slate-400 hover:text-slate-950 transition-all cursor-pointer active:scale-[0.99]"
                  >
                    "{prompt}"
                  </button>
                ))}
              </div>
            </div>

            {/* Operational Reassurance */}
            <div className="p-4 rounded-2xl bg-[#EFECE6] border border-[#DFDBD0] flex items-center gap-3 text-xs text-slate-700">
              <Lock className="h-4 w-4 text-emerald-800 shrink-0" />
              <span>Official WhatsApp Cloud API simulator · Zero third-party tracker latency</span>
            </div>

          </div>

          {/* Right Column: Pixel-Accurate WhatsApp Simulator (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[#E5E2D9] bg-[#EFEAE2] overflow-hidden shadow-xl shadow-slate-900/10 max-w-lg mx-auto">
              
              {/* WhatsApp Phone Header Bar */}
              <div className="bg-[#075E54] text-white px-4 py-3 flex items-center justify-between select-none">
                <div className="flex items-center gap-2.5">
                  <button 
                    type="button"
                    onClick={handleResetChat} 
                    className="p-1 -ml-1 text-white/80 hover:text-white cursor-pointer"
                    title="Reset Simulator"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>

                  <div className="h-9 w-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center font-serif text-base font-semibold text-white">
                    {activePreset.name.charAt(0)}
                  </div>

                  <div className="leading-tight">
                    <p className="font-semibold text-sm tracking-tight text-white flex items-center gap-1.5">
                      <span>{activePreset.name}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block" />
                    </p>
                    <p className="text-[11px] text-emerald-100 font-mono">
                      Verified WhatsApp Business
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-white/80">
                  <button type="button" onClick={handleResetChat} className="p-1 hover:text-white transition-colors cursor-pointer" title="Reset Conversation">
                    <RefreshCw className="h-4 w-4" />
                  </button>
                  <Phone className="h-4 w-4 opacity-70" />
                  <Video className="h-4 w-4 opacity-70" />
                </div>
              </div>

              {/* Encryption Banner */}
              <div className="py-2 px-4 text-center">
                <span className="inline-block bg-[#FFEECD] text-[#54656F] text-[10px] px-3 py-1 rounded-md shadow-2xs">
                  🔒 Messages are end-to-end encrypted & POPIA compliant.
                </span>
              </div>

              {/* Chat Message Scroll Area */}
              <div ref={chatContainerRef} className="p-4 space-y-3 min-h-[360px] max-h-[460px] overflow-y-auto">
                {messages.map((msg) => {
                  const isClient = msg.sender === 'client';
                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${isClient ? 'items-end' : 'items-start'}`}
                    >
                      {/* Message Bubble */}
                      <div
                        className={`relative max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-2xs text-xs sm:text-sm leading-relaxed ${
                          isClient
                            ? 'bg-[#E7FFDB] text-slate-900 rounded-tr-xs'
                            : 'bg-white text-slate-900 rounded-tl-xs'
                        }`}
                      >
                        {/* Message Text */}
                        <p className="text-pretty">{msg.text}</p>

                        {/* Timestamp & Read Receipts */}
                        <div className="flex items-center justify-end gap-1 text-[10px] text-slate-500 pt-1 font-mono">
                          <span>{msg.time}</span>
                          {isClient && (
                            <CheckCheck className="h-3.5 w-3.5 text-[#53BDEB]" />
                          )}
                        </div>
                      </div>

                      {/* AI Operational Action Tag (Clean Unboxed) */}
                      {!isClient && msg.badge && (
                        <span className="text-[10px] font-mono text-emerald-900 bg-emerald-100/80 px-2 py-0.5 rounded-md mt-1 ml-1 font-medium">
                          ⚡ {msg.badge}
                        </span>
                      )}
                    </div>
                  );
                })}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-1.5 bg-white text-slate-500 text-xs px-3.5 py-2.5 rounded-2xl rounded-tl-xs w-fit shadow-2xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
                    <span className="text-[11px] font-mono text-slate-400 ml-1">KwaiAssist calculating...</span>
                  </div>
                )}
              </div>

              {/* Chat Input Bar */}
              <div className="p-3 bg-[#F0F2F5] border-t border-[#E5E2D9] flex items-center gap-2">
                <div className="flex items-center gap-1 text-slate-500">
                  <Smile className="h-5 w-5 hover:text-slate-700 cursor-pointer" />
                  <Paperclip className="h-5 w-5 hover:text-slate-700 cursor-pointer" />
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex-1 flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type an inquiry in Rands or ask for a booking..."
                    className="flex-1 bg-white rounded-full px-4 py-2 text-xs sm:text-sm text-slate-900 border border-slate-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />

                  <button
                    type="submit"
                    disabled={!inputText.trim()}
                    className="h-9 w-9 rounded-full bg-[#00A884] hover:bg-[#008f6f] disabled:opacity-40 text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Custom Business Modal */}
      <CustomBusinessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentConfig={customConfig}
        onSave={handleSaveCustom}
      />
    </section>
  );
};
