import { useState } from 'react';
import { 
  MessageCircle, MapPin, TrendingUp, Globe, 
  Building2, Users, Smartphone, Frown, Smile, ArrowRight,
  Calculator, ShieldAlert, AlertCircle, ChevronRight, ChevronDown, Star,
  TrendingDown, Scissors, EyeOff, Clock, UserMinus, MessageSquareOff, Lock, PhoneOff, CloudRain, Ban, Banknote, StarOff,
  Phone, Search, Hammer, Rocket, LineChart, Check, CalendarDays, CreditCard, Trash2, Shield, Scale, FileText, CircleDollarSign, BarChart3, Target, GraduationCap, Video, LifeBuoy, CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';
import PricingSection from './components/PricingSection';

const painPoints = [
  {
    id: '01', theme: 'gold', catName: 'पैसाको खेल', catIcon: '💰', label: 'Financial Drain', tag: 'Profit Chheen Raha Hai',
    title: 'B2B Agent Trap — पसिना तपाईँको, नाफा उनीहरूको',
    subtitle: 'The classic Darjeeling/Sikkim exploitation',
    desc: 'Kolkata ya Siliguri ka agent aapka room ₹1,000 mein uthata hai aur tourist ko ₹3,500 mein bechta hai. Tourist khush, agent maalaamaal — aur aap? Aap sirf bartan dhone aur khana banane mein lage hain.',
    quote: 'Daju, main din-raat guest ki seva karta hoon, aur yeh agent AC office mein baith ke mere se 3 guna zyada kamaata hai.',
    impacts: [ { icon: TrendingDown, title: 'Locked Revenue', desc: 'Aap fixed low price par atke reh jate hain.' }, { icon: Ban, title: 'No Growth', desc: 'Agent kabhi aapko owner nahi banne dega, sirf worker rakhega.' } ],
    solution: 'Aapki Direct Booking Website se Agent ka 200% margin aapki hi pocket mein aayega.'
  },
  {
    id: '02', theme: 'gold', catName: 'पैसाको खेल', catIcon: '💰', label: 'Financial Drain', tag: 'OTA Commission Loot',
    title: 'MakeMyTrip / Agoda का 25% कट',
    subtitle: 'Being listed is costing you a quarter of your revenue',
    desc: 'Aapne property saja ke rakhi, safai ki, khana banaya — booking confirm hote hi OTA ne sidha 25% kaat liya. Yeh sirf ek platform par listed rehne ka charge hai.',
    quote: 'Mere khud ke ghar mein guest aata hai, aur mai OTA ko har booking par hazaron rupaye deta hoon. Yeh toh zameen par baith ke kirae ki baat hui.',
    impacts: [ { icon: Banknote, title: 'Continuous Bleed', desc: 'Har 4th booking free mein dene jaisa hai.' }, { icon: Clock, title: 'Payout Delays', desc: 'Paisa unke bank mein hafton pada rehta hai.' } ],
    solution: 'Apna Google Maps & Direct Booking Optimize karein. No Commission.'
  },
  {
    id: '03', theme: 'gold', catName: 'पैसाको खेल', catIcon: '💰', label: 'Financial Drain', tag: 'Hidden Pricing',
    title: 'Hidden Markup — अझै कति सहने?',
    subtitle: 'Guest pays premium, you get peanuts',
    desc: 'Aapko lagta hai room ₹1200 mein gaya. Lekin actually tourist ne ₹4000 pay kiya. Bich ka paisa kahan gaya? Agent ki jeb mein. Aap kabhi exact rate jaan hi nahi pate.',
    quote: 'Guest ne mujhe apna bill dikhaya toh mere hosh udd gaye. Agent ne unse ₹8000 liya aur mujhe sirf ₹3000 diye the.',
    impacts: [ { icon: EyeOff, title: 'Zero Transparency', desc: 'Aapko kabhi actual payment slip nahi milti.' }, { icon: ShieldAlert, title: 'Expectation Mismatch', desc: 'Premium price dekar guest luxury expect karta hai.' } ],
    solution: 'Paisa seedha guest ke bank account se aapke UPI/Bank account mein aayega.'
  },
  {
    id: '04', theme: 'gold', catName: 'पैसाको खेल', catIcon: '💰', label: 'Financial Drain', tag: 'Payment Hold',
    title: 'Payment Delays — तपाईंको पैसा, उनीहरूको मुट्ठीमा',
    subtitle: 'Cash flow choking your daily operations',
    desc: 'OTA aur agents tourist se 100% advance le lete hain, par aapko paisa checkout ke baad milta hai — kabhi 7 din baad, kabhi mahine bhar baad. Daily ration tak lana mushkil padta hai.',
    quote: 'Customer ne pehle hi paise de diye, par mujhe mera hi paisa maangne ke liye 10 baar call karna padta hai.',
    impacts: [ { icon: Lock, title: 'Squeezed Operations', desc: 'Working capital zero. Ration ke liye udhaar lena padta hai.' }, { icon: PhoneOff, title: 'Ignoring Calls', desc: 'Payment ke time agent phone nahi uthata.' } ],
    solution: 'Direct booking = 100% Advance Payment booking confirm hote hi aapke paas.'
  },
  {
    id: '05', theme: 'green', catName: 'पहिचानको चोरी', catIcon: '🛡️', label: 'Identity Hijack', tag: 'Google Identity Theft',
    title: 'Google मा तपाईंको नाम, एजेन्टको नम्बर',
    subtitle: 'The ultimate digital property hijack',
    desc: 'Agent ya lease owner ne aapke homestay ke naam se Google My Business profile claim kar li hai. Guest search aapka naam karta hai, par call seedha agent ko lagta hai.',
    quote: 'Maine Google par apna homestay search kiya, number kisi aur ka tha. Koi meri mehnat par apna business chala raha hai.',
    impacts: [ { icon: UserMinus, title: 'Stolen Leads', desc: 'Ready-to-book guest competitor ko divert ho jata hai.' }, { icon: CloudRain, title: 'Fake Visibility', desc: 'Internet par aapka wajood hi nahi hai.' } ],
    solution: 'Profile Verification & Correction. Google listing sirf aapke official control mein.'
  },
  {
    id: '06', theme: 'green', catName: 'पहिचानको चोरी', catIcon: '🛡️', label: 'Identity Hijack', tag: 'Review Theft',
    title: 'Review Theft — तपाईंको सेवा, अरूको ब्राण्ड',
    subtitle: 'Building their brand on your hard work',
    desc: 'Guest khush hokar 5-star review deta hai, par kahan? Agent ki website par ya OTA par. Aapki apni property ki reputation internet par completely zero rehti hai.',
    quote: 'Hum guest ko family ki tarah rakhte hain, par unka acha review agent ki company ki rating badhata hai.',
    impacts: [ { icon: StarOff, title: 'Zero Brand Equity', desc: 'Saalon baad bhi aap wahin ke wahin khade hain.' }, { icon: Scissors, title: 'Cut Off from Reality', desc: 'Guest feedback direct aap tak rarely pahunchta hai.' } ],
    solution: 'Direct reviews on your Google Maps Profile. Build YOUR long-term asset.'
  },
  {
    id: '07', theme: 'green', catName: 'पहिचानको चोरी', catIcon: '🛡️', label: 'Identity Hijack', tag: 'Loyalty Theft',
    title: 'Repeat Guest Hijack',
    subtitle: 'Your loyal guests are being redirected',
    desc: 'Aapka guest agle saal wapas aana chahta hai. Woh agent ko call karta hai aapke yahan rukne ke liye. Agent bolta hai "Wahan availability nahi hai, main aapko better jagah deta hoon" (kyunki usey nayi jagah se zyada commission milta hai).',
    quote: 'Darjeeling itni baar aaye wo log, par mere paas dobara nahi aaye. Baad mein pata chala agent ne dusre hotel me daal diya.',
    impacts: [ { icon: Users, title: 'Lost Loyalty', desc: 'Aapne dil jeeta, par customer dusre ko mila.' }, { icon: ShieldAlert, title: 'Data Missing', desc: 'Aapke paas unka direct contact number nahi hota.' } ],
    solution: 'Own your customer data. WhatsApp automation se guest se directly connected rahein.'
  },
  {
    id: '08', theme: 'orange', catName: 'ग्राहकसँग दूरी', catIcon: '🗣️', label: 'Guest Disconnect', tag: 'Fake Promises',
    title: 'Fake Promises by Agents',
    subtitle: 'They lie, you face the angry customer',
    desc: 'Agent booking final karne ke liye guest ko jhooth bol deta hai - "Room mein AC hai", "Kanchenjunga view hai", "Market pass mein hai". Guest aata hai, gussa hota hai, aur gaali aapko padti hai.',
    quote: 'Agent ne balcony wala room promise kar diya, mere paas tha hi nahi. Guest raat ko 10 baje aakar mujhpar chillane laga.',
    impacts: [ { icon: Frown, title: 'Instant Escalation', desc: 'Check-in karte hi jhagda. Vacation spoil.' }, { icon: StarOff, title: 'Unjustified Bad Reviews', desc: 'Galti agent ki, 1-star review aapko.' } ],
    solution: 'Website par real photos aur exact amenities dikhayein. Transparency = Happy Guest.'
  },
  {
    id: '09', theme: 'orange', catName: 'ग्राहकसँग दूरी', catIcon: '🗣️', label: 'Guest Disconnect', tag: 'Pricing Control',
    title: 'Loss of Pricing Control',
    subtitle: 'Rigid rates hurting your occupancy',
    desc: 'Lamba weekend hai ya achha group hai, aap chahte hain thoda discount dekar rook lein, par price agent control karta hai. Agent zidd pe ada rehta hai apne margin ke liye aur booking chali jati hai.',
    quote: 'Ek family 4 din rukna chahti thi. Maine bola rate kam kardo de do, agent nahi maana. Room khaali raha.',
    impacts: [ { icon: Users, title: 'Lost Opportunities', desc: 'Negotiation power agent ke hath me.' }, { icon: Ban, title: 'Empty Rooms', desc: 'Low season mein pricing adjust na hona.' } ],
    solution: 'Price Setting Tool. Dynamic pricing set karein directly apni website pe.' // HandHeart is missing, let's use EyeOff or another imported one. I'll use Users
  },
  {
    id: '10', theme: 'orange', catName: 'ग्राहकसँग दूरी', catIcon: '🗣️', label: 'Guest Disconnect', tag: 'Communication Barrier',
    title: 'No Direct Contact Before Arrival',
    subtitle: 'Blind arrivals cause stress',
    desc: 'Guest special food (veg, jain) chahta hai ya elderly sath hain, par direct baat na hone se aapko preparation ka time nahi milta. Guest aakar pareshan hota hai aur aap bhi ghabra jate hain.',
    quote: 'Raat ko achanak aaye, savere ki train ka thakan tha, bata dete pehle toh khana garam milta.',
    impacts: [ { icon: MessageSquareOff, title: 'Poor Service Delivery', desc: 'Last minute chaos aur mismanagement.' }, { icon: ShieldAlert, title: 'Missed Personal Touch', desc: 'Wo "Homestay" wali feeling hi khatam.' } ],
    solution: 'Booking ke turant baad Automated WhatsApp Hello message seedha aapki taraf se.'
  },
  {
    id: '11', theme: 'orange', catName: 'ग्राहकसँग दूरी', catIcon: '🗣️', label: 'Guest Disconnect', tag: 'Tourist Fear',
    title: 'Payment Fraud Fear among Tourists',
    subtitle: 'Guest is afraid of fake agents',
    desc: 'Aaj ka tourist smart hai. Wo Facebook/Instagram agent ko advance dene se darta hai darta fraud hone ke. Agar wo owner se seedha baat karta toh booking easily confirm ho jati, par ab wo cancel kar deta hai.',
    quote: 'Tourists phone pe bolte hain aapse direct baat hue toh bharosa hua, agent pe paisa bhejne me darr lagta tha.',
    impacts: [ { icon: AlertCircle, title: 'Abandoned Bookings', desc: 'Trust deficit ke karan sales drop.' }, { icon: UserMinus, title: 'Lost Revenue', desc: 'Paisa aur guest dono doosre verified hotel me shift.' } ],
    solution: 'Website gives 100% authentic presence. Direct verified UPI payments.'
  },
  {
    id: '12', theme: 'red', catName: 'व्यापार मार्ने विष', catIcon: '⚠️', label: 'Silent Killers', tag: 'Lease Exploitation',
    title: 'Lease ka Dar (प्रपर्टीको नोक्सान)',
    subtitle: 'Off-season fear destroying your asset',
    desc: 'Booking na aane ke dar se aapne property agent ko lease par de di. Wo maintain nahi karte. Property barbaad, bedsheets gande, culture khatam. Khali pahaad ka kachra ban jata hai.',
    quote: '1 saal lease pe diya, wapas liya toh walls toot gaye the aur brand image bilkul kharab ho chuki thi.',
    impacts: [ { icon: Building2, title: 'Asset Depreciation', desc: 'Heavy repair costs later.' }, { icon: Frown, title: 'Loss of Culture', desc: 'Authentic homestay hospitality lost forever.' } ],
    solution: 'Year-round direct demand generate hogi, toh kabhi cheap lease par property dene ki zaroorat nahi padegi.'
  },
  {
    id: '13', theme: 'red', catName: 'व्यापार मार्ने विष', catIcon: '⚠️', label: 'Silent Killers', tag: 'Risk Transfer',
    title: 'Cancellation Risk Unfairness',
    subtitle: 'Heads they win, tails you lose',
    desc: 'Guest ne last moment cancel kiya. Agent ne guest se cancellation fee 50% ya 100% rakh li, par aapko usme se ek rupiya nahi diya yeh keh kar ki "party nahi aayi, koi paisa nahi milega".',
    quote: 'Mera pichle hafte ek bada group cancel hua. Agent ne unka advance kha liya aur mujhe ek paisa nahi diya.',
    impacts: [ { icon: Scissors, title: 'Total Loss', desc: 'Aapki cancellation rules bypass ho jaati hain.' }, { icon: ShieldAlert, title: 'Empty Calendar', desc: 'Na guest, na compensation.' } ],
    solution: 'Aapki Apni Cancellation Policy. Advance payment directly aapke account mein.'
  },
  {
    id: '14', theme: 'red', catName: 'व्यापार मार्ने विष', catIcon: '⚠️', label: 'Silent Killers', tag: 'Reputation Murder',
    title: 'Overpricing & Reputation Trap',
    subtitle: 'Aapki Galti Nahi — Phir Bhi Business Barbaad',
    desc: 'Aapka room original price hai ₹1,500/night. Agent usse ₹3,200 mein bechta hai. Guest ₹3,200 dekar 5-star hotel jaisi service expect karta है. Actual ₹1,500 ki service ₹3,200 me "disappointing" lagti hai.',
    quote: 'Maine raat bhar guest ki seva ki, fir bhi 2-star review aaya — \'overpriced, not worth it\'. Maine toh price set hi nahi ki thi!',
    impacts: [ { icon: TrendingDown, title: 'Lower Occupancy', desc: 'Agent-set mehengi price dekh kar check-outs ho jate hain.' }, { icon: Frown, title: 'Hidden Nightmare', desc: 'Expectation too high = Bad reviews guaranteed.' } ],
    solution: 'Direct booking website par aap apna price khud set karein. Expectation match = 5-star review.'
  }
];

const processSteps = [
  {
    id: 1,
    title: "FREE Consultation",
    desc: "We will talk in a language you request. Understand your problems. No technical jargon, just simple talk.",
    bullets: ["15-minute call (WhatsApp/Phone)", "Understand your current situation", "Create a quick solution roadmap", "Pricing transparency (no hidden cost)"],
    duration: "15 Minutes",
    icon: Phone,
    theme: { from: "#FF6B35", to: "#C1272D", border: "#FF6B35" }
  },
  {
    id: 2,
    title: "Deep Audit",
    desc: "We will do a complete checkup of your current online presence.",
    bullets: ["Google ranking check", "OTA dependency analysis", "Identify pricing gaps", "Competitor analysis"],
    duration: "2-3 Days",
    icon: Search,
    theme: { from: "#4A90A4", to: "#2980B9", border: "#4A90A4" }
  },
  {
    id: 3,
    title: "Setup & Build",
    desc: "A world-class booking system and profile tailored for your homestay.",
    bullets: ["Direct Booking Website", "Google Maps Optimization", "WhatsApp Automation Setup", "High-quality content writing"],
    duration: "5-7 Days",
    icon: Hammer,
    theme: { from: "#9B59B6", to: "#8E44AD", border: "#9B59B6" }
  },
  {
    id: 4,
    title: "Launch & Optimize",
    desc: "New system goes live! And the Google ranking game begins.",
    bullets: ["Website Live testing", "Google Profile Verification", "First direct guests onboarding", "System training (Very easy)"],
    duration: "1 Day",
    icon: Rocket,
    theme: { from: "#2D5016", to: "#27AE60", border: "#2D5016" }
  },
  {
    id: 5,
    title: "Grow & Support",
    desc: "The work doesn't end here; it just begins. We stand with you.",
    bullets: ["24/7 Priority Support", "Monthly growth tracking", "Festival & Season planning", "Continuous SEO updates"],
    duration: "Lifetime",
    icon: TrendingUp,
    theme: { from: "#FFD700", to: "#F39C12", border: "#F39C12" }
  }
];

const featuresData = [
  {
    id: 'website',
    label: '🌐 Website & Booking',
    items: [
      {
        id: 'f1', icon: Globe, title: 'Your Own Professional Website', isPremium: false,
        desc: 'Mobile-friendly, fast loading, and in your brand colors',
        benefits: ['5-7 pages (Home, Rooms, Gallery, About, Contact)', 'Available in multiple languages', 'WhatsApp chat widget integrated', 'Decorated with photos of your property']
      },
      {
        id: 'f2', icon: CalendarDays, title: 'Commission-Free Booking System', isPremium: false,
        desc: '',
        benefits: ['Real-time availability calendar', 'Instant booking confirmations', 'Automated emails/SMS to guests', 'No commission! Every penny is yours']
      },
      {
        id: 'f3', icon: CreditCard, title: 'Secure Online Payments', isPremium: false,
        desc: '',
        benefits: ['Accept UPI, Cards, Net Banking', 'Auto-receipt generation', 'Payment tracking dashboard', 'Refund management system']
      },
      {
        id: 'f4', icon: Users, title: 'Your Customer Data, Your Control', isPremium: false,
        desc: '',
        benefits: ['Every guest\'s details stay with you', 'Send special offers to repeat guests', 'Automate Birthday/Anniversary wishes', 'Export data anytime (CSV/Excel)']
      }
    ]
  },
  {
    id: 'google',
    label: '📍 Google Presence',
    items: [
      {
        id: 'f5', icon: MapPin, title: 'Top Ranking on Google Maps', isPremium: false,
        desc: '',
        benefits: ['Verified business listing', 'Correct address, phone, hours', 'Photo gallery (50+ images)', 'Review management system']
      },
      {
        id: 'f6', icon: Trash2, title: 'Remove Fake Listings', isPremium: true,
        desc: '',
        benefits: ['Identify all duplicate listings', 'Report and remove from Google', 'Send Legal notices if needed', 'Future monitoring (lifetime)']
      },
      {
        id: 'f7', icon: Search, title: 'Become #1 in Google Search', isPremium: false,
        desc: '',
        benefits: ['Local keywords optimize (Darjeeling homestay etc)', 'Content SEO (blogs, descriptions)', 'Technical SEO (speed, mobile, schema)', 'Monthly ranking reports']
      },
      {
        id: 'f8', icon: Star, title: 'Guest Reviews Showcase', isPremium: false,
        desc: '',
        benefits: ['Current Google reviews auto-display', 'Automated review requests', 'Respond to reviews from your dashboard', 'Rating badge on your website']
      }
    ]
  },
  {
    id: 'protection',
    label: '🛡️ Protection',
    items: [
      {
        id: 'f9', icon: Shield, title: '24/7 Brand Protection', isPremium: true,
        desc: '',
        benefits: ['Monthly scans for fake listings', 'Alert if someone uses your name', 'Domain protection (your .com secured)', 'Social media handle securing']
      },
      {
        id: 'f10', icon: Scale, title: 'Legal Support (If Needed)', isPremium: false,
        desc: '',
        benefits: ['Lawyer connect for disputes', 'Cease & desist templates', 'Trademark guidance', 'Free initial consultation']
      },
      {
        id: 'f11', icon: Lock, title: 'Top Security for Guest Data', isPremium: false,
        desc: '',
        benefits: ['SSL encrypted website', 'Daily backups', 'GDPR compliant systems', 'We never sell your data (written guarantee)']
      },
      {
        id: 'f12', icon: FileText, title: 'Digital Property Ownership Proof', isPremium: false,
        desc: '',
        benefits: ['Official certificate (digital + physical)', 'Website ownership documents', 'Google Business ownership proof', 'Can be used for loans/permits']
      }
    ]
  },
  {
    id: 'analytics',
    label: '📊 Analytics & Tools',
    items: [
      {
        id: 'f13', icon: CircleDollarSign, title: 'Real-Time Earnings Tracking', isPremium: false,
        desc: '',
        benefits: ['Today/week/month revenue graphs', 'Booking sources breakdown', 'Vs last year comparison', 'Profit margin calculator']
      },
      {
        id: 'f14', icon: BarChart3, title: 'Guest Behavior Insights', isPremium: false,
        desc: '',
        benefits: ['Peak season identification', 'Average booking value', 'Cancellation rate tracking', 'Lead time analysis']
      },
      {
        id: 'f15', icon: Target, title: 'Track Nearby Homestays', isPremium: true,
        desc: '',
        benefits: ['Monitor their pricing', 'Check their availability', 'Compare review scores', 'Weekly intelligence report']
      },
      {
        id: 'f16', icon: LineChart, title: 'Smart Price Suggestions', isPremium: false,
        desc: '',
        benefits: ['Demand-based pricing recommendations', 'Festival/event surge alerts', 'Competitor price comparison', 'Revenue maximization tips']
      }
    ]
  },
  {
    id: 'training',
    label: '🎓 Training & Support',
    items: [
      {
        id: 'f17', icon: GraduationCap, title: 'Step-by-step Learning', isPremium: false,
        desc: '',
        benefits: ['20+ tutorial videos', 'How to handle bookings', 'Guest communication tips', 'Social media marketing basics']
      },
      {
        id: 'f18', icon: Video, title: 'Live Q&A Sessions', isPremium: false,
        desc: '',
        benefits: ['2 webinars every month', 'Learn from Industry experts', 'Ask your doubts directly', 'Recordings are available']
      },
      {
        id: 'f19', icon: LifeBuoy, title: 'Help Always Available', isPremium: false,
        desc: '',
        benefits: ['WhatsApp support (24 hours reply)', 'Phone support (9 AM - 9 PM)', 'Email support', 'Priority support for Premium clients']
      },
      {
        id: 'f20', icon: Users, title: 'Network of 500+ Owners', isPremium: false,
        desc: '',
        benefits: ['Private Facebook/WhatsApp group', 'Share tips and experiences', 'Collaboration opportunities', 'Guest referrals network']
      }
    ]
  }
];

import HeroSection from './components/HeroSection';

export default function App() {
  const [lang, setLang] = useState<'ne' | 'hi' | 'en'>('ne');
  const [activeFeatureTab, setActiveFeatureTab] = useState('website');
  // Calculator State
  const [bookings, setBookings] = useState(15);
  const [rate, setRate] = useState(2000);
  const [commission, setCommission] = useState(25);

  const calculateLoss = () => {
    const monthlyRevenue = bookings * rate;
    const monthlyLoss = monthlyRevenue * (commission / 100);
    return {
      monthly: monthlyLoss,
      yearly: monthlyLoss * 12,
      saved: (monthlyLoss * 12) * 0.9 // Yearly savings with us (90% conversion)
    };
  };

  const loss = calculateLoss();

  return (
    <div className="min-h-screen text-slate-800 font-sans bg-[#F9F8F4] selection:bg-[#E5B63A] selection:text-[#1B3629]">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1B3629]/95 backdrop-blur-md border-b border-white/10 px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-1 text-xl md:text-2xl font-bold tracking-tight text-white cursor-pointer hover:opacity-90 transition-opacity">
          Homestay<span className="text-[#E5B63A]">Ranker</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#problems" className="hover:text-white transition-colors">Problems We Solve</a>
          <a href="#features" className="hover:text-white transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#audit" className="hover:text-white transition-colors">Free Audit</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 bg-[#E5B63A] text-[#1B3629] px-5 py-2.5 rounded-md font-bold text-sm hover:bg-[#d4a529] transition-colors">
            WhatsApp Us
          </button>
        </div>
      </nav>

      <HeroSection lang={lang} setLang={setLang} />

      {/* Trust Bar */}
      <div className="bg-[#FFFDF7] border-b border-slate-200 py-4 px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-y-3 gap-x-6 md:gap-12 text-sm font-semibold text-slate-700">
          <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-600" /> No OTA dependency</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-600" /> Google Local SEO included</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-600" /> WhatsApp direct booking</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-600" /> Hindi + Nepali support</div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-20 space-y-32">
        
        {/* Detailed 14 Points Implementation */}
        <section id="problems" className="space-y-12 text-left relative">
          
          {/* Section Header */}
          <div className="space-y-4 max-w-3xl text-center mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#B58A1F] uppercase bg-[#B58A1F]/10 px-4 py-2 rounded-full">
              14 Bitter Truths of the Hills
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1B3629] tracking-tight font-poppins">
              14 Real Problems<br/><span className="text-[#2F5E48] text-2xl md:text-4xl mt-2 block font-normal">That Nobody Told You</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mt-4 font-noto">
              We have deeply researched the homestay market in Darjeeling, Sikkim, and Kalimpong. These <span className="font-bold text-slate-900">14 pain points</span> are a reflection of your real life — something no agency has shown you yet.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6 md:gap-12 py-8 border-y border-slate-200 bg-white/50 backdrop-blur-sm rounded-3xl px-8 mb-12">
            <div className="text-center"><div className="text-3xl font-black text-[#1B3629]">14</div><div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Real Problems Identified</div></div>
            <div className="text-center"><div className="text-3xl font-black text-[#1B3629]">4</div><div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Core Categories</div></div>
            <div className="text-center"><div className="text-3xl font-black text-[#1B3629]">387+</div><div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Owners Consulted</div ></div>
            <div className="text-center"><div className="text-3xl font-black text-[#1B3629]">100%</div><div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Solution Available</div></div>
          </div>

          {/* Render 14 Points */}
          <div className="space-y-8">
            {painPoints.map((point, index) => {
              
              // Map themes to Tailwind classes
              const themes: any = {
                gold: { bg: 'bg-white', header: 'bg-[#B58A1F]', text: 'text-[#B58A1F]', border: 'border-[#B58A1F]/30', circleRing: 'border-[#f0e6c8]', circleBg: 'bg-[#FFFDF7]', quoteLine: 'border-[#B58A1F]', quoteBg: 'bg-[#FDF8EB]', iconBg: 'bg-white', iconBorder: 'border-[#B58A1F]/30' },
                green: { bg: 'bg-white', header: 'bg-[#1B3629]', text: 'text-[#1B3629]', border: 'border-[#1B3629]/30', circleRing: 'border-[#d0e5d8]', circleBg: 'bg-[#F9FDF9]', quoteLine: 'border-[#1B3629]', quoteBg: 'bg-[#F0F8F3]', iconBg: 'bg-white', iconBorder: 'border-[#1B3629]/30' },
                orange: { bg: 'bg-white', header: 'bg-[#E57A44]', text: 'text-[#E57A44]', border: 'border-[#E57A44]/30', circleRing: 'border-[#fce0d4]', circleBg: 'bg-[#FFF9F5]', quoteLine: 'border-[#E57A44]', quoteBg: 'bg-[#FEF2EC]', iconBg: 'bg-white', iconBorder: 'border-[#E57A44]/30' },
                red: { bg: 'bg-white', header: 'bg-[#D93838]', text: 'text-[#D93838]', border: 'border-[#D93838]/30', circleRing: 'border-[#fadcdc]', circleBg: 'bg-[#FDF3F3]', quoteLine: 'border-[#D93838]', quoteBg: 'bg-[#FDF3F3]', iconBg: 'bg-white', iconBorder: 'border-[#D93838]/30' }
              };
              const t = themes[point.theme] || themes.gold;

              return (
                <motion.div 
                  key={point.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                  className={`border text-left overflow-hidden rounded-2xl hover:shadow-xl transition-all relative ${t.bg} ${t.border}`}
                >
                  <div className={`${t.header} px-6 py-2 flex items-center justify-between text-white`}>
                    <span className="text-xs font-bold uppercase tracking-widest font-noto flex items-center gap-2">{point.catIcon} {point.catName}</span>
                    <span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded">Pain Point #{point.id}</span>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
                    <div className={`${t.circleBg} w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold ${t.text} shrink-0 mt-1 border ${t.circleRing}`}>
                      {point.id}
                    </div>
                    <div className="space-y-6 flex-1">
                      <div>
                        <div className={`text-xs font-bold ${t.text} uppercase tracking-widest mb-1 flex items-center gap-2`}>
                           <AlertCircle className="w-3 h-3" /> {point.tag}
                        </div>
                        <h3 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight mt-1 font-poppins">{point.title}</h3>
                        <p className="text-slate-500 italic mt-1 font-noto">{point.subtitle}</p>
                      </div>
                      
                      <p className="text-slate-700 leading-relaxed text-base md:text-lg font-noto">
                        {point.desc}
                      </p>

                      <div className={`${t.quoteBg} border-l-4 ${t.quoteLine} p-5 text-sm md:text-base rounded-r-lg`}>
                        <div className={`text-xs font-bold ${t.text} uppercase mb-2 line-clamp-1`}>How Owners Feel</div>
                        <p className="italic text-slate-800 font-noto">"{point.quote}"</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-sm">
                        {point.impacts.map((impact, i) => (
                          <div key={i} className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                            <div className={`w-8 h-8 rounded ${t.iconBg} border ${t.iconBorder} ${t.text} flex items-center justify-center mb-3`}>
                              <impact.icon className="w-4 h-4"/>
                            </div>
                            <div className="font-bold text-slate-900 text-base mb-1">{impact.title}</div>
                            <p className="text-slate-600">{impact.desc}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="pt-4 border-t border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                         <div className={`${t.circleBg} ${t.text} px-4 py-3 rounded-lg text-sm font-semibold flex-1 w-full flex gap-3 font-noto`}>
                            <div className={`w-5 h-5 ${t.header} rounded text-white flex items-center justify-center shrink-0`}>
                               <CheckCircle2 className="w-3 h-3" />
                            </div>
                            <span className="text-slate-800">{point.solution}</span>
                         </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>


        {/* Interactive Calculator Section */}
        <section id="calculator" className="bg-[#1B3629] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
            <Calculator className="w-96 h-96" />
          </div>
          
          <div className="relative z-10">
            <div className="text-xs font-bold tracking-widest text-[#E5B63A] uppercase mb-3 text-left">Your Money, Calculated</div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-left">OTA Commission Loss Calculator</h2>
            <p className="text-emerald-100/70 mb-10 text-left">Find out how much you are giving to Agoda/MakeMyTrip every year — straight from your pocket.</p>

            <div className="bg-[#142A1F] border border-white/10 rounded-2xl p-6 md:p-8 space-y-8 max-w-4xl">
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-slate-300">Monthly bookings via OTA:</span>
                  <span className="text-[#E5B63A] font-bold text-lg">{bookings}</span>
                </div>
                <input 
                  type="range" min="1" max="100" value={bookings} 
                  onChange={(e) => setBookings(Number(e.target.value))}
                  className="w-full accent-[#E5B63A] h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-slate-300">Average room rate per night:</span>
                  <span className="text-[#E5B63A] font-bold text-lg">₹{rate.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="500" max="10000" step="100" value={rate} 
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full accent-[#E5B63A] h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-slate-300">OTA Commission %:</span>
                  <span className="text-[#E5B63A] font-bold text-lg">{commission}%</span>
                </div>
                <input 
                  type="range" min="10" max="40" value={commission} 
                  onChange={(e) => setCommission(Number(e.target.value))}
                  className="w-full accent-[#E5B63A] h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="bg-[#1B3629] border border-[#E5B63A]/20 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 justify-between mt-8">
                <div className="text-left w-full md:w-1/2">
                  <div className="text-sm text-slate-300 mb-1">You are giving OTAs every year</div>
                  <div className="text-4xl md:text-5xl font-black text-[#E5B63A]">₹{loss.yearly.toLocaleString()}</div>
                  <div className="text-xs text-slate-400 mt-2">This money is yours — but agents took it</div>
                </div>
                
                <div className="text-left w-full md:w-1/2 bg-[#1A3326] p-4 rounded-lg border border-white/5">
                  <div className="text-sm text-slate-300 mb-1">Yearly savings with us</div>
                  <div className="text-3xl font-bold text-emerald-400">₹{loss.saved.toLocaleString()}</div>
                  <div className="text-xs text-slate-400 mt-2">Can be converted to 90% direct bookings</div>
                </div>
              </div>

              <button className="w-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors mt-4">
                Want to stop this loss? <ArrowRight className="w-5 h-5 text-[#E5B63A]" /> Talk to us on WhatsApp
              </button>

            </div>
          </div>
        </section>

        {/* Guest Psychology */}
        <section className="space-y-10">
          <div className="text-left">
            <div className="text-xs font-bold tracking-widest text-[#56876D] uppercase mb-3">Guest Psychology</div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">What does the tourist think?</h2>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl">
              Today's traveler is smart. They want to deal directly with the owner, not agents. You just need to be online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* Agent Booking */}
            <div className="bg-white border text-left border-x border-b border-t-8 border-slate-200 border-t-[#FDF3F3] rounded-3xl p-8 relative hover:shadow-lg transition-shadow">
              <div className="text-[10px] font-black text-[#D93838] uppercase tracking-widest bg-[#FDF3F3] inline-block px-3 py-1.5 rounded mb-6">Agent Booking</div>
              <Frown className="w-12 h-12 text-[#D93838] mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Tourist is worried</h3>
              <ul className="space-y-4">
                {['Will the agent take my money?', 'Will the room actually be available?', 'Will I get a refund if it is canceled?', 'Are there any hidden charges?', 'Will my family be safe in the hills?'].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-slate-700 font-medium pb-2 border-b border-slate-50 last:border-0 last:pb-0">
                    <div className="w-2 h-2 rounded-full bg-[#D93838] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Booking */}
            <div className="bg-[#173223] border text-left border-x border-b border-t-8 border-[#1B3629] border-t-[#E5B63A] text-white rounded-3xl p-8 relative shadow-xl hover:shadow-2xl transition-all">
              <div className="text-[10px] font-black text-[#1B3629] bg-[#E5B63A] uppercase tracking-widest inline-block px-3 py-1.5 rounded mb-6">Direct Owner Booking</div>
              <Smile className="w-12 h-12 text-[#E5B63A] mb-4" />
              <h3 className="text-2xl font-bold text-white mb-6">Tourist is confident</h3>
              <ul className="space-y-4">
                {['I spoke directly to the owner!', 'Money is safe — it went directly to the owner', 'Trip is 100% confirmed', 'I saw real photos and reviews', 'Family trip is fully secure'].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-slate-300 font-medium pb-2 border-b border-white/5 last:border-0 last:pb-0">
                    <div className="w-2 h-2 rounded-full bg-[#E5B63A] mt-2 shrink-0" />
                    <span className="text-emerald-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="space-y-10">
          <div className="text-left">
            <div className="text-xs font-bold tracking-widest text-[#B58A1F] uppercase mb-3">What We Do</div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Your Problems,<br />Our Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { icon: Globe, title: 'Trust Website', desc: 'A website where guests book directly, owners get money directly, and 100% trust is built.', tag: 'GUEST CONFIDENCE ↑' },
              { icon: TrendingUp, title: 'Google #1 Ranking', desc: 'Local SEO — You rank at the top for searches like "Homestay in Darjeeling". Organic, permanent traffic.', tag: '90-DAY GUARANTEE' },
              { icon: Smartphone, title: 'WhatsApp Booking System', desc: 'Guests reach your WhatsApp with one click. Automated replies, booking confirmations, and payment links.', tag: 'ZERO AGENT DEPENDENCY' },
              { icon: MapPin, title: 'Google Maps Domination', desc: 'Google My Business optimization — reviews management, photos, Q&A — maps mein #1 position.', tag: 'MAPS VISIBILITY' },
              { icon: Users, title: 'Brand Building', desc: 'The story of your homestay — real photos, videos, testimonials. Depend on your own identity, not agents.', tag: 'OWNER IDENTITY' },
            ].map((sol, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col items-start h-full">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-slate-600 shrink-0">
                  <sol.icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{sol.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{sol.desc}</p>
                <div className="text-[10px] font-bold text-emerald-700/80 uppercase tracking-widest">
                  {sol.tag}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Timeline Section */}
        <section className="bg-white py-[100px] px-5 w-full rounded-3xl mt-20">
          <div className="max-w-[700px] mx-auto text-center">
            <h2 className="font-poppins font-bold text-[32px] md:text-[48px] text-[#1A1A1A] leading-[1.2]">
               How Do We Work? 🛠️
            </h2>
            <p className="font-noto text-lg md:text-[20px] text-[#666] mt-[15px]">
               Your business is transformed in 5 easy steps.
            </p>
          </div>

          <div className="max-w-[1200px] mx-auto mt-[80px] relative">
            {/* Central Line for Desktop, Left Line for Mobile */}
            <div className="absolute left-[20px] md:left-1/2 md:-ml-[2px] top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#4A90A4] to-[#2D5016] rounded-full z-0 overflow-hidden">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "linear" }}
                  className="w-full h-full bg-gradient-to-b from-[#FF6B35] to-[#FFD700] opacity-50"
                />
            </div>

            <div className="relative z-10 w-full flex flex-col items-center">
               {processSteps.map((step, index) => {
                 const isEven = index % 2 !== 0; // index 0 is step 1 (left/even styling index), index 1 is step 2 (right/odd styling index)
                 const Icon = step.icon;
                 return (
                   <div key={step.id} className={`relative flex w-full mb-[60px] flex-col md:flex-row ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                     
                     {/* Connector Dot */}
                     <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 + (index * 0.2), duration: 0.4, type: 'spring' }}
                        className="absolute left-[20px] md:left-1/2 w-[30px] h-[30px] rounded-full bg-white z-20 top-6 md:top-1/2 -ml-[15px] md:-mt-[15px] shadow-[0_0_0_8px_rgba(74,144,164,0.1)]"
                        style={{ border: `4px solid ${step.theme.border}` }}
                     />

                     <motion.div 
                       initial={{ opacity: 0, x: isEven ? 50 : -50, y: 50 }}
                       whileInView={{ opacity: 1, x: 0, y: 0 }}
                       viewport={{ once: true, margin: "-50px" }}
                       transition={{ duration: 0.6, delay: index * 0.2 }}
                       className={`w-full pl-[50px] md:pl-0 md:w-[48%] relative group`}
                     >
                       <div className={`bg-white text-left border-2 border-[#E0E0E0] rounded-[20px] p-[25px] md:p-[35px] shadow-[0_4px_15px_rgba(0,0,0,0.08)] transition-all duration-400 group-hover:-translate-y-[5px] group-hover:shadow-[0_8px_30px_rgba(74,144,164,0.2)] max-w-[500px] w-full ${isEven ? 'mr-auto md:ml-[60px]' : 'ml-auto md:mr-[60px]'}`} style={{ '--tw-border-opacity': 1, borderColor: '#E0E0E0' } as any} onMouseEnter={(e) => (e.currentTarget.style.borderColor = step.theme.border)} onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E0E0E0')}>
                         
                         {/* Badge */}
                         <div 
                           className={`absolute -top-4 -left-4 md:top-[-20px] flex items-center justify-center w-[50px] h-[50px] rounded-full text-white font-poppins font-bold text-[24px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] z-10 ${isEven ? 'md:left-[-25px]' : 'md:right-[-25px] md:left-auto'}`}
                           style={{ background: `linear-gradient(135deg, ${step.theme.from} 0%, ${step.theme.to} 100%)` }}
                         >
                           {step.id}
                         </div>

                         {/* Content */}
                         <Icon className="w-[60px] h-[60px] mb-[20px]" style={{ color: step.theme.border }} />
                         <h3 className="font-poppins font-bold text-[22px] md:text-[26px] mb-[12px]" style={{ color: step.theme.border }}>{step.id}. {step.title}</h3>
                         <p className="font-noto text-[#333] text-[16px] leading-[1.8] max-w-[400px] mb-4">
                           {step.desc}
                         </p>

                         <ul className="mt-[15px] space-y-2 mb-10">
                           {step.bullets.map((bullet, i) => (
                             <li key={i} className="flex items-start text-[15px] text-[#666] leading-[1.6] font-noto">
                               <span className="shrink-0 mt-1 mr-2" style={{ color: step.theme.border }}><Check className="w-4 h-4" /></span>
                               {bullet}
                             </li>
                           ))}
                         </ul>

                         {/* Duration Tag */}
                         <div className="absolute bottom-[20px] right-[25px] flex items-center gap-1.5 px-[16px] py-[8px] rounded-[20px] border" style={{ backgroundColor: `${step.theme.border}1A`, borderColor: `${step.theme.border}4D`, color: step.theme.border }}>
                           <Clock className="w-3.5 h-3.5" />
                           <span className="font-poppins font-medium text-[13px]">{step.duration}</span>
                         </div>
                       </div>
                     </motion.div>
                   </div>
                 );
               })}
            </div>
          </div>

          {/* Final CTA */}
          <div className="max-w-[1000px] mx-auto mt-[80px]">
             <div className="bg-gradient-to-br from-[#2D5016] to-[#4A7C59] rounded-[25px] p-[40px] md:p-[60px] text-center text-white shadow-[0_20px_50px_rgba(45,80,22,0.3)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
                <div className="relative z-10">
                  <h2 className="font-poppins font-bold text-[28px] md:text-[36px] mb-2 leading-tight">Freedom in just 5 steps! Start today 🎯</h2>
                  <p className="font-noto text-[16px] md:text-[18px] opacity-90 mb-8 max-w-2xl mx-auto">500+ owners have already started. Now it's your turn!</p>
                  <a href="#pricing" className="bg-[#FFD700] hover:bg-[#F39C12] text-[#1A1A1A] font-poppins font-bold text-[18px] md:text-[20px] px-[40px] py-[20px] rounded-[50px] shadow-[0_10px_30px_rgba(255,215,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,215,0,0.5)] transform hover:-translate-y-1 transition-all duration-300 inline-flex">
                    Book a FREE Consultation
                  </a>
                  <p className="font-noto font-light italic text-[14px] mt-6 text-white/80">No obligations. Just a friendly chat. Ready! 🙏</p>
                </div>
             </div>
          </div>
        </section>

        {/* Features Showcase Section */}
        <section id="features" className="bg-[#F5F5F5] py-[100px] px-5 w-full rounded-3xl mt-20 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 40L40 0H20L0 20M40 40V20L20 40\\' fill=\\'%232D5016\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')", backgroundSize: '20px 20px' }} />
          
          <div className="max-w-[800px] mx-auto text-center relative z-10">
            <h2 className="font-poppins font-bold text-[32px] md:text-[48px] text-[#1A1A1A] leading-[1.2]">
               You get the Full Package 📦
            </h2>
            <p className="font-noto text-[18px] md:text-[20px] text-[#666] mt-[15px]">
               Not just a website, but a complete business transformation
            </p>
          </div>

          <div className="max-w-[900px] mx-auto mt-[50px] bg-white rounded-[50px] p-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-wrap justify-center relative z-10">
            {featuresData.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFeatureTab(category.id)}
                className={`flex-1 min-w-[max-content] px-[20px] md:px-[30px] py-[12px] md:py-[15px] rounded-[40px] font-poppins font-medium text-[14px] md:text-[16px] transition-all duration-300 ${activeFeatureTab === category.id ? 'bg-gradient-to-br from-[#2D5016] to-[#4A7C59] text-white shadow-[0_4px_12px_rgba(45,80,22,0.3)]' : 'bg-transparent text-[#666] hover:bg-slate-50'}`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="max-w-[1300px] mx-auto mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] relative z-10">
            {featuresData.find(c => c.id === activeFeatureTab)?.items.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white rounded-[20px] p-[35px] border-2 border-transparent transition-all duration-300 hover:border-[#4A90A4] hover:-translate-y-[5px] hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] relative overflow-hidden group text-left"
                >
                  {/* Subtle hover gradient circle */}
                  <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-gradient-to-bl from-[#4A90A4] to-transparent rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-400 pointer-events-none" />
                  
                  {feature.isPremium && (
                    <div className="absolute top-0 right-0 bg-gradient-to-br from-[#FFD700] to-[#FFA500] px-[15px] py-[6px] rounded-bl-[15px] font-poppins font-semibold text-[11px] text-white shadow-[0_2px_8px_rgba(255,215,0,0.3)] tracking-wider">
                      PREMIUM
                    </div>
                  )}

                  <div className="w-[70px] h-[70px] rounded-full bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] flex items-center justify-center mb-[20px]">
                    <Icon className="w-[32px] h-[32px] text-[#2D5016]" />
                  </div>
                  
                  <h3 className="font-poppins font-semibold text-[20px] md:text-[22px] text-[#1A1A1A] mb-[12px] leading-[1.3]">{feature.title}</h3>
                  
                  {feature.desc && (
                    <p className="font-noto text-[#666] text-[14px] md:text-[15px] leading-[1.7] mb-[20px]">{feature.desc}</p>
                  )}

                  <ul className="mt-[15px] space-y-[10px]">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-[#333] text-[14px] leading-[1.5] font-noto">
                        <span className="shrink-0 mt-0.5 mr-2 text-[#2D5016] font-bold">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          <div className="max-w-[1000px] mx-auto mt-[80px]">
             <div className="bg-gradient-to-br from-[#4A90A4] to-[#2980B9] p-[40px] md:p-[60px] rounded-[25px] text-center text-white relative overflow-hidden shadow-xl">
               <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-[80px]" />
               <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-black/10 rounded-full blur-[80px]" />
               
               <div className="relative z-10">
                 <h2 className="font-poppins font-bold text-[32px] md:text-[42px] leading-tight mb-2">All this for just ₹19,999!</h2>
                 <p className="font-noto text-[18px] md:text-[20px] opacity-90 mb-8 max-w-2xl mx-auto">One time investment, lifetime benefit</p>
                 
                 <a href="#pricing" className="bg-[#FFD700] hover:bg-[#F39C12] text-[#1A1A1A] font-poppins font-bold text-[18px] md:text-[22px] px-[40px] md:px-[60px] py-[20px] rounded-[50px] shadow-[0_10px_30px_rgba(255,215,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,215,0,0.5)] transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2">
                   Get the Full Package <ArrowRight className="w-6 h-6" />
                 </a>
                 
                 <div className="mt-6 flex items-center justify-center gap-2 font-noto font-medium text-[16px] text-white/90">
                   <ShieldAlert className="w-5 h-5 text-[#FFD700]" /> 30-Day Money-Back Guarantee
                 </div>
               </div>
             </div>
          </div>
        </section>

      </main>

      {/* Pricing Section */}
      <PricingSection />

      {/* Free Audit Form Section */}
      <section id="audit" className="bg-[#FFFDF7] border-y border-[#E5B63A]/20 py-24 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-xs font-bold tracking-widest text-[#56876D] uppercase">Free — No Strings Attached</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1B3629] tracking-tight">
            Get a Free<br className="hidden md:block"/>"Digital Health Check" for Your Homestay
          </h2>
          <p className="text-slate-600 text-lg">
            Where is your Google ranking? What is your OTA dependency? We will send a full report on WhatsApp — absolutely free.
          </p>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl mt-10 border border-slate-100 text-left relative overflow-hidden">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 relative z-10">Check Your Homestay</h3>
            <p className="text-slate-500 text-sm mb-8 relative z-10">
              Enter your homestay name and WhatsApp number — we will send a detailed audit report within 24 hours.
            </p>
            
            <form className="space-y-4 relative z-10">
              <input 
                type="text" 
                placeholder="Your Homestay's name (e.g., Kanchenjunga View Homestay)" 
                className="w-full bg-[#1B3629]/5 border border-slate-200 text-slate-900 placeholder:text-slate-500 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E5B63A] focus:border-transparent transition-all"
              />
              <div className="flex flex-col md:flex-row gap-4">
                <input 
                  type="tel" 
                  placeholder="WhatsApp Number (e.g., 98300XXXXX)" 
                  className="w-full md:w-2/3 bg-[#1B3629]/5 border border-slate-200 text-slate-900 placeholder:text-slate-500 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E5B63A] focus:border-transparent transition-all"
                />
                <button type="submit" className="w-full md:w-1/3 bg-[#1B3629] hover:bg-[#1B3629]/90 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors whitespace-nowrap">
                  Get Free Check <ChevronRight className="w-4 h-4 text-[#E5B63A]" />
                </button>
              </div>
              <p className="text-xs text-slate-400 text-center md:text-left mt-2">
                Your data is 100% safe. We only send the report on WhatsApp, no spam.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B3629] pt-20 pb-10 px-4 md:px-8 text-white relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 border-b border-white/10 pb-12">
          
          <div className="md:col-span-1 space-y-4 text-left">
            <div className="text-2xl font-bold tracking-tight text-white mb-4">
              Homestay<span className="text-[#E5B63A]">Ranker</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              India's first dedicated digital success platform for homestay owners in the hills.
            </p>
          </div>

          <div className="text-left">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Platform</div>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="#problems" className="hover:text-white transition-colors">Problems We Solve</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Results</a></li>
              <li><a href="#audit" className="hover:text-white transition-colors">Free Audit</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div className="text-left">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Locations</div>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Darjeeling</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sikkim</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kalimpong</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kurseong</a></li>
            </ul>
          </div>

          <div className="text-left">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Contact</div>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><MessageCircle className="w-4 h-4 text-[#E5B63A]" /> WhatsApp Us</a></li>
              <li><a href="#audit" className="hover:text-white transition-colors">Free Consultation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 HomestayRanker — Let's talk over a cup of Darjeeling tea ☕</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300">Privacy</a>
            <a href="#" className="hover:text-slate-300">Terms</a>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <button className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 group">
          <MessageCircle className="w-7 h-7" />
          <span className="absolute right-16 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">WhatsApp Us</span>
        </button>
      </footer>

    </div>
  );
}
