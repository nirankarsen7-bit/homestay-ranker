import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, ChevronDown } from 'lucide-react';

const faqs = [
  { q: "Is there any monthly/yearly fee?", a: "Not at all! It's a one-time payment. After that, the website is yours for a lifetime. Only domain renewal (₹500-800/year) and hosting (₹2000-3000/year) are required, which is the industry standard." },
  { q: "How can I pay? Is EMI available?", a: "You can pay via UPI, card, net banking, or bank transfer. Yes! We also provide a 10-month EMI option (no interest, no hidden charges)." },
  { q: "How much time will it take to set up?", a: "Starter: 5-7 days, Growth: 7-10 days, Premium: 3-5 days (fast-track). We don't rush; we deliver quality." },
  { q: "What if I don't have technical knowledge?", a: "No problem! We will set up everything for you. You only need to provide photos and content. Plus, we will provide video training on how to use it." },
  { q: "What is the refund policy?", a: "30-day money-back guarantee. If you are not satisfied (no questions asked), we will refund your money completely." },
  { q: "Can I upgrade later?", a: "Absolutely! You can upgrade from Starter to Growth or Premium. The amount you paid earlier will be adjusted." },
  { q: "For how long is support free?", a: "Starter: 1 month, Growth: 6 months, Premium: Lifetime! Support means help on WhatsApp/phone/email." },
  { q: "Are domain and hosting included?", a: "Yes, included for the first year. From the second year, you will have to renew it (around ₹3000/year total)." }
];

const tableFeatures = [
  { name: "Website (pages)", starter: "5 pages", growth: "10 pages", premium: "Unlimited" },
  { name: "Google My Business", starter: true, growth: true, premium: true },
  { name: "Mobile Responsive", starter: true, growth: true, premium: true },
  { name: "Booking Engine", starter: false, growth: true, premium: true },
  { name: "Payment Gateway", starter: false, growth: true, premium: true },
  { name: "Duplicate Removal", starter: false, growth: false, premium: true },
  { name: "Brand Monitoring", starter: false, growth: false, premium: true },
  { name: "Support Duration", starter: "1 month", growth: "6 months", premium: "Lifetime" },
  { name: "Analytics Dashboard", starter: false, growth: "Basic", premium: "Advanced" },
  { name: "Dynamic Pricing", starter: false, growth: false, premium: true },
];

export default function PricingSection() {
  const [isEmi, setIsEmi] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const renderValue = (value: any) => {
    if (value === true) return <Check className="w-5 h-5 text-[#2D5016] mx-auto" />;
    if (value === false) return <X className="w-5 h-5 text-[#C1272D] mx-auto" />;
    return <span className="text-[#666] font-poppins">{value}</span>;
  };

  return (
    <div id="pricing" className="w-full bg-white scroll-mt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#2D5016] to-[#1A3A0F] pt-[80px] md:pt-[100px] pb-[200px] relative overflow-hidden">
        {/* Subtle prayer flag bunting pattern */}
        <div className="absolute top-0 left-0 w-full h-[60px] opacity-10 flex gap-4 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
             <div key={i} className="w-12 h-16 bg-white shrink-0 shadow-md origin-top transform rotate-[-5deg]" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
          ))}
        </div>

        <div className="max-w-[1200px] mx-auto px-5 text-center relative z-10">
          <h2 className="font-poppins font-bold text-[36px] md:text-[56px] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] leading-[1.2]">
            Simple Pricing. No Hidden Costs. Guaranteed! 💯
          </h2>
          <p className="font-noto text-[18px] md:text-[22px] text-white/90 mt-[15px]">
            Pay once, own for a lifetime
          </p>

          <div className="flex flex-wrap justify-center items-center gap-[20px] md:gap-[40px] mt-[40px]">
            {['✓ No Monthly Fees', '✓ Lifetime Support', '✓ Money-Back Guarantee', '✓ 500+ Happy Owners'].map((badge, idx) => (
              <span key={idx} className="font-poppins font-medium text-[15px] text-white">
                {badge}
              </span>
            ))}
          </div>

          <div className="inline-flex bg-white/15 backdrop-blur-[10px] rounded-[50px] p-[8px] mt-[50px]">
            <button 
              onClick={() => setIsEmi(false)}
              className={`px-[20px] md:px-[35px] py-[12px] rounded-[40px] font-poppins font-medium text-[14px] md:text-[16px] transition-all duration-300 ${!isEmi ? 'bg-white text-[#2D5016] shadow-[0_4px_12px_rgba(0,0,0,0.15)]' : 'bg-transparent text-white/80'}`}
            >
              One-Time Payment
            </button>
            <button 
              onClick={() => setIsEmi(true)}
              className={`px-[20px] md:px-[35px] py-[12px] rounded-[40px] font-poppins font-medium text-[14px] md:text-[16px] transition-all duration-300 ${isEmi ? 'bg-white text-[#2D5016] shadow-[0_4px_12px_rgba(0,0,0,0.15)]' : 'bg-transparent text-white/80'}`}
            >
              EMI Option
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="max-w-[1400px] mx-auto px-[20px] pb-[100px] -mt-[100px] relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px] items-start">
          
          {/* PACKAGE 1: STARTER */}
          <div className="bg-white rounded-[25px] p-[35px] md:p-[45px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-[2px] border-[#E0E0E0] transition-all duration-300 hover:-translate-y-[10px] hover:shadow-[0_12px_45px_rgba(0,0,0,0.18)] hover:border-[#4A90A4]">
            <div className="bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] px-[25px] py-[12px] rounded-[30px] inline-block font-poppins font-semibold text-[14px] text-[#1976D2] mb-[20px]">
              Starter
            </div>
            <h3 className="font-poppins font-bold text-[32px] text-[#1A1A1A] mb-[10px] leading-none">STARTER</h3>
            <p className="font-noto text-[16px] text-[#666] mb-[30px]">Small start, big impact</p>

            <div className="bg-[#F9F9F9] rounded-[15px] p-[25px] text-center mb-[30px]">
              <div className="font-poppins font-medium text-[20px] text-[#999] line-through mb-[10px]">₹15,999</div>
              <div className="flex justify-center items-end gap-1 mb-3 text-center w-full">
                <span className="font-poppins font-black text-[42px] md:text-[52px] text-[#2D5016] leading-none">₹9,999</span>
                <span className="font-noto text-[14px] text-[#999] leading-[1.5]">/one-time</span>
              </div>
              <div className="bg-[#FFD700] px-[15px] py-[6px] rounded-[20px] inline-block font-poppins font-semibold text-[13px] text-[#1A1A1A]">
                Save ₹6,000!
              </div>
              {isEmi && (
                <div className="font-poppins font-medium text-[16px] text-[#4A90A4] mt-[15px]">
                  or ₹1,000/month × 10 months
                </div>
              )}
            </div>

            <h4 className="font-poppins font-semibold text-[18px] text-[#1A1A1A] mb-[20px] border-b-[2px] border-[#E0E0E0] pb-[10px]">You will get:</h4>
            
            <div className="space-y-[15px] mb-[20px]">
              {['Basic website (5 pages)', 'Google My Business listing', 'Mobile responsive design', 'Contact form integration', 'WhatsApp chat widget', '1 month free support', 'Basic SEO setup'].map((item, i) => (
                <div key={i} className="flex items-start gap-[12px]">
                  <div className="w-[28px] h-[28px] rounded-full bg-[#E8F5E9] flex items-center justify-center shrink-0">
                    <Check className="w-[18px] h-[18px] text-[#2D5016]" />
                  </div>
                  <span className="font-noto text-[14px] md:text-[15px] text-[#333] leading-[1.5] mt-1">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-[15px] mb-[30px] opacity-70">
              {['Booking engine', 'Payment gateway', 'Duplicate removal'].map((item, i) => (
                <div key={i} className="flex items-start gap-[12px]">
                  <div className="w-[28px] h-[28px] flex items-center justify-center shrink-0">
                    <X className="w-[18px] h-[18px] text-[#C1272D]" />
                  </div>
                  <span className="font-noto text-[14px] md:text-[15px] text-[#666] leading-[1.5] mt-1">{item}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-[18px] bg-gradient-to-br from-[#4A90A4] to-[#2980B9] rounded-[12px] font-poppins font-semibold text-[18px] text-white transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(74,144,164,0.4)]">
              Select Starter
            </button>
            <div className="text-center mt-[20px] font-noto text-[14px] text-[#666]">
              👉 Best for: Owners coming online for the first time
            </div>
          </div>

          {/* PACKAGE 2: GROWTH (POPULAR) */}
          <div className="bg-white rounded-[25px] p-[35px] md:p-[45px] shadow-[0_12px_45px_rgba(0,0,0,0.18)] border-[3px] border-[#FFD700] transition-all duration-300 relative lg:scale-105 z-10">
            <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FF6B35] to-[#C1272D] px-[30px] py-[10px] rounded-[25px] font-poppins font-bold text-[14px] text-white shadow-[0_4px_15px_rgba(193,39,45,0.4)] whitespace-nowrap animate-pulse">
              ⭐ Most Selected! ⭐
            </div>

            <div className="bg-gradient-to-br from-[#FFE5E0] to-[#FFF0ED] px-[25px] py-[12px] rounded-[30px] inline-block font-poppins font-semibold text-[14px] text-[#C1272D] mb-[20px] mt-4 lg:mt-0">
              Real Deal
            </div>
            <h3 className="font-poppins font-bold text-[32px] text-[#1A1A1A] mb-[10px] leading-none">GROWTH</h3>
            <p className="font-noto text-[16px] text-[#666] mb-[30px]">Complete solution, killer price</p>

            <div className="bg-[#F9F9F9] rounded-[15px] p-[25px] text-center mb-[30px]">
              <div className="font-poppins font-medium text-[20px] text-[#999] line-through mb-[10px]">₹35,999</div>
              <div className="flex justify-center items-end gap-1 mb-3 text-center w-full">
                <span className="font-poppins font-black text-[42px] md:text-[52px] text-[#2D5016] leading-none">₹19,999</span>
                <span className="font-noto text-[14px] text-[#999] leading-[1.5]">/one-time</span>
              </div>
              <div className="bg-[#FFD700] px-[15px] py-[6px] rounded-[20px] inline-block font-poppins font-semibold text-[13px] text-[#1A1A1A]">
                Save ₹16,000!
              </div>
              {isEmi && (
                <div className="font-poppins font-medium text-[16px] text-[#4A90A4] mt-[15px]">
                  or ₹2,000/month × 10 months
                </div>
              )}
            </div>

            <h4 className="font-poppins font-semibold text-[18px] text-[#1A1A1A] mb-[20px] border-b-[2px] border-[#E0E0E0] pb-[10px]">Everything in Starter, PLUS:</h4>
            
            <div className="space-y-[15px]">
              {[
                {text:'Everything in Starter', bold:false},
                {text:'⭐ Direct booking engine (commission-free!)', bold:true},
                {text:'⭐ Payment gateway integrated', bold:true},
                {text:'⭐ Guest database system', bold:true},
                {text:'⭐ Review management widget', bold:true},
                {text:'Advanced SEO (local keywords)', bold:false},
                {text:'10 pages website (extra sections)', bold:false},
                {text:'Email marketing setup', bold:false},
                {text:'6 months priority support', bold:false},
                {text:'Monthly analytics reports', bold:false},
                {text:'Social media integration', bold:false}
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-[12px]">
                  <div className="w-[28px] h-[28px] rounded-full bg-[#E8F5E9] flex items-center justify-center shrink-0">
                    <Check className="w-[18px] h-[18px] text-[#2D5016]" />
                  </div>
                  <span className={`font-noto text-[14px] md:text-[15px] text-[#333] leading-[1.5] mt-1 ${item.bold ? 'font-bold' : ''}`}>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#FFF9E6] border-l-[4px] border-[#FFD700] p-[15px] rounded-r-[8px] mt-[20px]">
              <div className="font-poppins font-semibold text-[15px] text-[#F39C12] mb-[10px]">🎁 FREE Bonuses (Worth ₹10,000!):</div>
              <ul className="space-y-[6px]">
                {['Professional photoshoot guide', 'Guest communication templates', 'Pricing strategy worksheet'].map((item, i) => (
                  <li key={i} className="font-noto text-[14px] text-[#666] leading-[1.5] flex items-start"><span className="mr-2">&bull;</span>{item}</li>
                ))}
              </ul>
            </div>

            <button className="w-full mt-[30px] py-[18px] bg-gradient-to-r from-[#FF6B35] to-[#C1272D] rounded-[12px] font-poppins font-semibold text-[18px] text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,107,53,0.5)] hover:shadow-[0_0_30px_rgba(255,107,53,0.8)]">
              Get Growth Package →
            </button>
            <div className="text-center mt-[20px] font-poppins font-bold text-[14px] md:text-[15px] text-[#C1272D]">
              👉 Best for: Serious owners who want to be completely free from agent dependence
            </div>
            
            <div className="bg-[#E8F5E9] p-[12px] rounded-[8px] mt-[15px] text-center font-noto text-[13px] text-[#2D5016] font-medium">
              📊 80% of owners choose this package!
            </div>
          </div>

          {/* PACKAGE 3: PREMIUM */}
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] rounded-[25px] p-[35px] md:p-[45px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-[2px] border-[#FFD700] transition-all duration-300">
            <div className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] px-[25px] py-[12px] rounded-[30px] inline-block font-poppins font-semibold text-[14px] text-[#1A1A1A] mb-[20px]">
              Total Control
            </div>
            <h3 className="font-poppins font-bold text-[32px] bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent mb-[10px] leading-none">PREMIUM</h3>
            <p className="font-noto text-[16px] text-white/80 mb-[30px]">Invest once, secure your property</p>

            <div className="bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-[15px] p-[25px] text-center mb-[30px]">
              <div className="font-poppins font-medium text-[20px] text-[#999] line-through mb-[10px]">₹59,999</div>
              <div className="flex justify-center items-end gap-1 mb-3 text-center w-full">
                <span className="font-poppins font-black text-[42px] md:text-[52px] text-[#FFD700] leading-none">₹34,999</span>
                <span className="font-noto text-[14px] text-[#999] leading-[1.5]">/one-time</span>
              </div>
              <div className="bg-[#FFD700] px-[15px] py-[6px] rounded-[20px] inline-block font-poppins font-semibold text-[13px] text-[#1A1A1A]">
                Save ₹25,000!
              </div>
              {isEmi && (
                <div className="font-poppins font-medium text-[16px] text-[#FFD700] mt-[15px]">
                  or ₹3,500/month × 10 months
                </div>
              )}
            </div>

            <h4 className="font-poppins font-semibold text-[18px] text-[#FFD700] mb-[20px] border-b-[2px] border-[#FFD700]/30 pb-[10px]">Everything in Growth, PLUS:</h4>
            
            <div className="space-y-[15px]">
              {[
                'Everything in Growth',
                '🛡️ Duplicate listing removal (worth ₹10K!)',
                '🛡️ Brand monitoring (lifetime)',
                '📊 Competitor tracking tool',
                '💹 Dynamic pricing suggestions',
                '📈 Advanced analytics dashboard',
                '🎯 Premium SEO (guaranteed ranking)',
                '⚖️ Legal support (if needed)',
                '📜 Digital ownership certificate',
                '👥 Priority in owner community',
                'Unlimited pages website',
                'Multi-property management (if you expand)',
                'Lifetime priority support',
                'Quarterly strategy calls'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-[12px]">
                  <div className="w-[28px] h-[28px] rounded-full bg-[#FFD700]/20 flex items-center justify-center shrink-0">
                    <Check className="w-[18px] h-[18px] text-[#FFD700]" />
                  </div>
                  <span className="font-noto text-[14px] md:text-[15px] text-white/90 leading-[1.5] mt-1">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#FFD700]/15 border-[2px] border-dashed border-[#FFD700] p-[20px] rounded-[12px] mt-[20px]">
              <div className="font-poppins font-bold text-[16px] text-[#FFD700] mb-[10px]">👑 VIP Perks:</div>
              <ul className="space-y-[6px]">
                {['Dedicated account manager', 'Fast-track setup (3 days)', 'Free consultation calls (anytime)', 'First access to new features'].map((item, i) => (
                  <li key={i} className="font-noto text-[14px] text-white/80 leading-[1.5] flex items-start"><span className="mr-2 text-[#FFD700]">&bull;</span>{item}</li>
                ))}
              </ul>
            </div>

            <button className="w-full mt-[30px] py-[18px] bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-[12px] font-poppins font-semibold text-[18px] text-[#1A1A1A] transition-all duration-300 shadow-[0_0_30px_rgba(255,215,0,0.6)] hover:shadow-[0_0_40px_rgba(255,215,0,0.9)] hover:scale-105">
              Get Premium Package →
            </button>
            <div className="text-center mt-[20px] font-noto text-[14px] text-[#FFD700]">
              👉 Best for: Established properties or owners who want to dominate the market
            </div>
            
            <div className="bg-[#FFD700]/10 border border-[#FFD700] p-[15px] rounded-[10px] mt-[20px] text-center">
              <div className="font-poppins font-semibold text-[15px] text-[#FFD700] mb-1">
                🏆 Guaranteed Results
              </div>
              <p className="font-noto text-[13px] text-white/80">
                No increase in direct bookings in 6 months? 100% refund!
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="mt-[100px] px-[20px]">
         <div className="max-w-[800px] mx-auto text-center mb-[50px]">
            <h2 className="font-poppins font-bold text-[32px] md:text-[42px] text-[#1A1A1A] leading-[1.2]">
               Detailed Comparison 📋
            </h2>
            <p className="font-noto text-[18px] text-[#666] mt-[15px]">
               See side-by-side which package is perfect for you
            </p>
         </div>

         <div className="max-w-[1200px] mx-auto bg-white rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.1)] overflow-hidden hidden md:block">
            <div className="grid grid-cols-[40%_20%_20%_20%]">
              {/* Header */}
              <div className="bg-gradient-to-br from-[#2D5016] to-[#4A7C59] p-[25px] font-poppins font-semibold text-[18px] text-white flex items-end border-b border-[#E0E0E0]">
                Features
              </div>
              <div className="bg-gradient-to-br from-[#2D5016] to-[#4A7C59] p-[25px] text-center text-white border-b border-[#E0E0E0]">
                <div className="font-poppins font-semibold text-[18px]">Starter</div>
              </div>
              <div className="bg-gradient-to-br from-[#2D5016] to-[#4A7C59] p-[25px] text-center text-white relative border-b border-[#E0E0E0]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#FFD700] text-[#1A1A1A] font-poppins font-bold text-[10px] px-[10px] py-[3px] rounded-b-[10px] tracking-wide">
                  POPULAR
                </div>
                <div className="font-poppins font-semibold text-[18px] mt-2">Growth</div>
              </div>
              <div className="bg-gradient-to-br from-[#2D5016] to-[#4A7C59] p-[25px] text-center text-white border-b border-[#E0E0E0]">
                <div className="font-poppins font-semibold text-[18px]">Premium</div>
              </div>

              {/* Rows */}
              {tableFeatures.map((row, idx) => (
                <React.Fragment key={idx}>
                  <div className={`p-[18px_20px] flex items-center border-b border-[#E0E0E0] ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F9F9F9]'}`}>
                    <span className="font-noto font-medium text-[15px] text-[#333]">{row.name}</span>
                  </div>
                  <div className={`p-[18px_20px] flex items-center justify-center border-b border-[#E0E0E0] ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F9F9F9]'}`}>
                    {renderValue(row.starter)}
                  </div>
                  <div className={`p-[18px_20px] flex items-center justify-center border-b border-[#E0E0E0] bg-[#FFD700]/10`}>
                    <div className={typeof row.growth === 'string' ? "font-poppins font-semibold text-[#C1272D]" : ""}>
                      {renderValue(row.growth)}
                    </div>
                  </div>
                  <div className={`p-[18px_20px] flex items-center justify-center border-b border-[#E0E0E0] ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F9F9F9]'}`}>
                    {renderValue(row.premium)}
                  </div>
                </React.Fragment>
              ))}

              {/* CTA Row */}
              <div className="bg-[#F5F5F5] p-[30px_20px] border-t border-[#E0E0E0] flex items-center">
                <span className="font-poppins font-semibold text-[16px] text-[#333]">Choose a plan</span>
              </div>
              <div className="bg-[#F5F5F5] p-[30px_20px] border-t border-[#E0E0E0] flex justify-center">
                 <button className="w-full max-w-[200px] py-[12px] bg-gradient-to-br from-[#4A90A4] to-[#2980B9] rounded-[8px] font-poppins font-semibold text-[14px] text-white">Starter</button>
              </div>
              <div className="bg-[#F5F5F5] p-[30px_20px] border-t border-[#E0E0E0] flex justify-center bg-[#FFD700]/10">
                 <button className="w-full max-w-[200px] py-[12px] bg-gradient-to-r from-[#FF6B35] to-[#C1272D] rounded-[8px] font-poppins font-semibold text-[14px] text-white">Growth</button>
              </div>
              <div className="bg-[#F5F5F5] p-[30px_20px] border-t border-[#E0E0E0] flex justify-center">
                 <button className="w-full max-w-[200px] py-[12px] bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-[8px] font-poppins font-semibold text-[14px] text-[#1A1A1A]">Premium</button>
              </div>

            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#F5F5F5] py-[100px] px-[20px] mt-[80px]">
        <h2 className="font-poppins font-bold text-[32px] md:text-[42px] text-[#1A1A1A] text-center mb-[60px] leading-[1.2]">
           Any other questions? Ask us! 💬
        </h2>

        <div className="max-w-[900px] mx-auto space-y-[15px]">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-[15px] border-[2px] transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.06)] overflow-hidden ${isOpen ? 'border-[#2D5016] bg-gradient-to-br from-[#F9F9F9] to-white' : 'border-transparent hover:border-[#4A90A4] hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)]'}`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full text-left p-[25px_30px] flex justify-between items-center bg-transparent outline-none focus:outline-none"
                >
                  <span className="font-poppins font-semibold text-[16px] md:text-[18px] text-[#1A1A1A] pr-4">{faq.q}</span>
                  <ChevronDown className={`w-[24px] h-[24px] text-[#4A90A4] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-[30px] pb-[25px] font-noto text-[15px] md:text-[16px] text-[#666] leading-[1.8]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-gradient-to-br from-[#C1272D] to-[#8B0000] py-[100px] px-[20px] text-center text-white relative overflow-hidden">
        {/* Animated background sub-pattern placeholder */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />
        
        <div className="relative z-10 max-w-[1000px] mx-auto">
          <div className="font-poppins font-medium text-[16px] text-[#FFD700] mb-[20px]">
            Last Chance! 🎯
          </div>
          
          <h2 className="font-poppins font-black text-[36px] md:text-[56px] leading-[1.2] mb-[20px]">
            Start now, say Goodbye to Agents!
          </h2>
          
          <p className="font-noto text-[18px] md:text-[22px] text-white/90 mb-[40px]">
            The first 50 owners this month will get:
          </p>

          <div className="flex flex-wrap justify-center gap-[30px] mb-[60px]">
             {[
               { icon: '🎁', title: 'Free Photoshoot Guide', val: '(Worth ₹5,000)' },
               { icon: '🚀', title: 'Priority Setup', val: '(Save 5 days)' },
               { icon: '⚡', title: 'Extra 3 Months Support', val: '(Worth ₹3,000)' },
             ].map((bonus, i) => (
                <div key={i} className="min-w-[280px] bg-white/15 backdrop-blur-[10px] border border-white/20 rounded-[20px] p-[25px]">
                  <div className="text-[48px] mb-[15px]">{bonus.icon}</div>
                  <h3 className="font-poppins font-semibold text-[20px] mb-[5px]">{bonus.title}</h3>
                  <p className="font-noto text-[14px] text-white/80">{bonus.val}</p>
                </div>
             ))}
          </div>

          <div className="flex flex-wrap justify-center items-center gap-[30px]">
             <button className="bg-[#FFD700] text-[#1A1A1A] px-[40px] md:px-[60px] py-[20px] md:py-[25px] rounded-[50px] font-poppins font-bold text-[18px] md:text-[22px] shadow-[0_8px_25px_rgba(255,215,0,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_35px_rgba(255,215,0,0.6)]">
               Yes, I'm Ready! 🚀
             </button>
             <button className="bg-transparent border-[2px] border-white/50 text-white px-[40px] md:px-[60px] py-[20px] md:py-[25px] rounded-[50px] font-poppins font-bold text-[18px] md:text-[22px] transition-all duration-300 hover:bg-white/10 hover:border-white">
               I will Call first 📞
             </button>
          </div>

          <div className="mt-[30px] font-poppins font-medium text-[16px] text-[#FFD700] flex items-center justify-center gap-2">
            ⏰ Only 27 slots left | Offer valid till 28 Feb
          </div>

          <div className="mt-[50px] flex flex-wrap justify-center gap-[40px] opacity-80">
             {[
               { icon: '🛡️', text: '30-Day Guarantee' },
               { icon: '💯', text: '500+ Owners Trust' },
               { icon: '✓', text: '100% Safe Payment' },
             ].map((b, i) => (
               <div key={i} className="flex items-center gap-2 font-noto text-[14px]">
                 <span className="text-[18px]">{b.icon}</span> {b.text}
               </div>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
}
