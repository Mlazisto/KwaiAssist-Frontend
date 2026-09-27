import { BusinessPreset, PricingPlan, Testimonial, FaqItem } from '../types';

export const BUSINESS_PRESETS: BusinessPreset[] = [
  {
    id: 'plumber',
    name: 'RapidFlow Plumbing & Drains',
    category: 'Emergency Plumbing',
    location: 'Cape Town & Southern Suburbs',
    avatar: '🔧',
    initialMessages: [
      {
        id: '1',
        sender: 'client',
        text: 'Hi, my kitchen drain is completely blocked and water is standing in the sink. Can someone come tomorrow morning?',
        time: '08:42'
      },
      {
        id: '2',
        sender: 'ai',
        text: 'Hi, we can definitely unblock that for you tomorrow. Service: Drain unblocking and high-pressure jetting. Rate: From R850 per blocked point. We have slots open tomorrow: 10:00 AM & 14:00 PM. Would 10:00 AM work for you?',
        time: '08:42',
        badge: 'Instant Quote & Slot Match'
      },
      {
        id: '3',
        sender: 'client',
        text: 'Yes, tomorrow at 10:00 AM is perfect for me. 14 Main Road.',
        time: '08:43'
      },
      {
        id: '4',
        sender: 'ai',
        text: 'Booking confirmed! Our technician will arrive at 10:00 AM. If anything changes, simply reply here.',
        time: '08:43',
        badge: 'Calendar Synced'
      }
    ],
    quickPrompts: [
      'Do you charge a call-out fee in Constantia?',
      'Can you replace a leaking burst geyser today?',
      'What are your weekend emergency rates?'
    ]
  },
  {
    id: 'auto',
    name: 'Apex Precision Auto & Detailing',
    category: 'Auto Care & Ceramic Coating',
    location: 'Sandton & Bryanston, JHB',
    avatar: '🚗',
    initialMessages: [
      {
        id: 'a1',
        sender: 'client',
        text: 'Good day, what is your price for a Stage 2 paint correction and full ceramic coating on an SUV?',
        time: '19:15'
      },
      {
        id: 'a2',
        sender: 'ai',
        text: 'Hello! For mid-to-large SUVs, our Stage 2 Paint Correction + 3-Year Ceramic Coating package starts at R4,950. It includes decontamination, 2-stage machine polish, and hydrophobic glass sealant. We have drop-off availability this Thursday at 08:30 AM in Sandton. Would you like to reserve that bay?',
        time: '19:15',
        badge: 'Catalog Matched'
      },
      {
        id: 'a3',
        sender: 'client',
        text: 'Yes please, Thursday 08:30 suits me. It is a 2023 BMW X5.',
        time: '19:18'
      },
      {
        id: 'a4',
        sender: 'ai',
        text: 'Bay reserved for your BMW X5 on Thursday at 08:30 AM! You will receive a reminder pin on WhatsApp the day before. Let us know if you need our loaner vehicle option.',
        time: '19:18',
        badge: 'Bay Reserved'
      }
    ],
    quickPrompts: [
      'How long does the ceramic coating take?',
      'Do you offer mobile detailing at my home office?',
      'Can I get an invoice for my company fleet?'
    ]
  },
  {
    id: 'dental',
    name: 'Aura Aesthetics & Smile Clinic',
    category: 'Medical & Dental Clinic',
    location: 'Umhlanga Ridge, Durban',
    avatar: '✨',
    initialMessages: [
      {
        id: 'd1',
        sender: 'client',
        text: 'Hi there, do you have any opening for a dental hygiene cleaning and teeth whitening consult this Friday afternoon?',
        time: '21:04'
      },
      {
        id: 'd2',
        sender: 'ai',
        text: 'Hi Sarah! Yes, Dr. Naidoo has two consultation slots available this Friday: 14:30 and 16:15. The combined scaling, polish & whitening evaluation is R1,150 (medical aid claimable). Which time frame suits you best?',
        time: '21:04',
        badge: 'Doctor Schedule Checked'
      },
      {
        id: 'd3',
        sender: 'client',
        text: '16:15 please. Can I submit to Discovery Health?',
        time: '21:07'
      },
      {
        id: 'd4',
        sender: 'ai',
        text: 'Done! Your appointment is scheduled for Friday at 16:15. Yes, we provide full ICD-10 medical aid tariff codes for seamless Discovery Health claims. See you Friday in Umhlanga Ridge!',
        time: '21:07',
        badge: 'Appointment Locked'
      }
    ],
    quickPrompts: [
      'Do you do emergency root canal procedures?',
      'What are your operating hours on Saturdays?',
      'Can you send your clinic GPS location pin?'
    ]
  },
  {
    id: 'solar',
    name: 'VoltGuard Solar & Electrical',
    category: 'Solar & Inverter Installations',
    location: 'Centurion & Pretoria East',
    avatar: '⚡',
    initialMessages: [
      {
        id: 's1',
        sender: 'client',
        text: 'Hi, our inverter keeps tripping when stage 4 load-shedding kicks in. Can you send someone to inspect?',
        time: '13:20'
      },
      {
        id: 's2',
        sender: 'ai',
        text: 'Sawubona! We can get a qualified electrical engineer to run a full diagnostic on your inverter, DB board, and lithium batteries. Diagnostic call-out in Pretoria is R650. We can dispatch a team today at 15:30 or tomorrow at 09:00. Which would you prefer?',
        time: '13:20',
        badge: 'Engineer Dispatch'
      },
      {
        id: 's3',
        sender: 'client',
        text: 'Today at 15:30 would be great. Address is 42 Silver Lakes Drive.',
        time: '13:22'
      },
      {
        id: 's4',
        sender: 'ai',
        text: 'Confirmed! Pieter from VoltGuard will be with you at 15:30 today at 42 Silver Lakes Drive. His mobile is +27 82 459 8812. We look forward to getting your power sorted!',
        time: '13:22',
        badge: 'Technician Assigned'
      }
    ],
    quickPrompts: [
      'Do you issue electrical Certificates of Compliance (CoC)?',
      'What is your quote for an 8kW Deye inverter system?',
      'Do you offer monthly finance on solar installations?'
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'solo',
    name: 'Solo Trades & Pro',
    description: 'Designed for independent plumbers, electricians, mechanics, and solo contractors.',
    priceMonthly: 590,
    priceAnnualMonthly: 470,
    features: [
      '1 Dedicated WhatsApp Business number',
      'Up to 450 automated AI conversations / month',
      'Custom South African service rate card (ZAR)',
      'Google Calendar & Cal.com live slot sync',
      'Instant human takeover alert via WhatsApp/SMS',
      'Standard business hours & after-hours routing',
      'POPIA compliant customer data storage'
    ],
    ctaLabel: 'Start 14-Day Free Trial'
  },
  {
    id: 'growth',
    name: 'Business Growth',
    description: 'For busy service companies, clinics, workshops, and multi-technician teams.',
    priceMonthly: 1490,
    priceAnnualMonthly: 1190,
    popular: true,
    features: [
      'Everything in Solo Trades, plus:',
      'WhatsApp + Instagram DM + Facebook Messenger',
      'Unlimited automated client conversations',
      'Multi-technician dispatch & suburb routing',
      'Deposit payment link generation (PayFast / Ozow / Yoco)',
      'Multilingual SA replies (English, Afrikaans, isiZulu, Sesotho)',
      'Automated customer follow-ups & review requests',
      'Priority WhatsApp support desk (24-hour turnaround)'
    ],
    ctaLabel: 'Claim Most Popular Plan'
  },
  {
    id: 'enterprise',
    name: 'Franchise & Fleet',
    description: 'For multi-branch companies, large dealerships, franchises, and regional service operators.',
    priceMonthly: 3490,
    priceAnnualMonthly: 2790,
    features: [
      'Everything in Business Growth, plus:',
      'Up to 5 WhatsApp Business numbers included',
      'Custom ERP / CRM / Jobber / Zoho webhooks',
      'Dedicated account manager in South Africa',
      'Custom SLA with 99.9% uptime guarantee',
      'Automated voice note transcription & response',
      'Custom onboarding & team training session'
    ],
    ctaLabel: 'Talk to Enterprise Team'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Before KwaiAssist, I was losing at least 4 to 6 plumbing inquiries every single weekend because I was under a sink or driving. Within our first month, the AI booked 38 jobs on WhatsApp while I was working. That added over R42,000 in invoiced revenue.',
    author: 'Jaco van der Merwe',
    role: 'Founder & Master Plumber',
    business: 'Cape Coastal Drains & Plumbing',
    location: 'Cape Town, Western Cape',
    metrics: '+R42,000 / mo',
    metricLabel: 'Recovered After-Hours Invoicing'
  },
  {
    quote: 'In Johannesburg, if you don’t reply on WhatsApp in under 3 minutes, clients simply message the next workshop on Google. KwaiAssist answers within 15 seconds, gives exact diagnostic rates, and books them in. Our bay bookings increased by 47%.',
    author: 'Thabo Mokoena',
    role: 'Managing Director',
    business: 'Apex Performance Auto',
    location: 'Midrand & Sandton, Gauteng',
    metrics: '12 seconds',
    metricLabel: 'Average WhatsApp Response Time'
  },
  {
    quote: 'Our aesthetic practice receives dozens of messages at night asking about pricing and doctor availability. KwaiAssist answers politely, explains treatments clearly, and locks appointments straight into Dr. Naidoo’s calendar without our front desk lifting a finger.',
    author: 'Dr. Priya Naidoo',
    role: 'Clinical Director',
    business: 'Umhlanga Ridge Medical & Aesthetics',
    location: 'Durban, KwaZulu-Natal',
    metrics: '94%',
    metricLabel: 'Inquiry-to-Consultation Conversion'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Can I keep my current WhatsApp Business phone number?',
    answer: 'Yes! You can connect your existing South African mobile or landline number directly through the official Meta WhatsApp Cloud API. You do not lose your chat history or client contacts.'
  },
  {
    question: 'How does KwaiAssist know our specific pricing and call-out rates?',
    answer: 'During a simple 5-minute setup, you enter your service menu, pricing brackets in Rands (ZAR), travel/call-out fees by suburb, and open operating hours. The AI accurately calculates quotes based on your exact rules and never guesses random amounts.'
  },
  {
    question: 'What happens if a client asks a complicated or custom question?',
    answer: 'KwaiAssist detects complex requests or upset customers and instantly triggers a "Human Handover". You or your team receive an urgent WhatsApp alert and push notification with the full conversation transcript so you can step in seamlessly.'
  },
  {
    question: 'Is KwaiAssist compliant with South Africa’s POPIA Act?',
    answer: 'Yes, 100%. All customer data, phone numbers, and booking records are stored with end-to-end encryption in accordance with the Protection of Personal Information Act (POPIA). Data is never sold, shared, or used to train public models.'
  },
  {
    question: 'Does KwaiAssist understand South African slang, suburbs, and languages?',
    answer: 'Absolutely. Built specifically for Mzansi businesses, KwaiAssist understands local terms like "geyser burst", "DB board", "load-shedding", "now now", "just now", and common Afrikaans and vernacular greetings alongside English.'
  },
  {
    question: 'How does the 14-day free trial work?',
    answer: 'You get full, unrestricted access to the Business Growth tier for 14 days without entering credit card details. Connect your WhatsApp, test it with real client messages, and watch your booking rate soar before deciding to subscribe.'
  }
];
