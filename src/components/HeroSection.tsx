import React, { useEffect } from 'react';
import './HeroSection.css';

interface HeroSectionProps {
  lang: 'ne' | 'hi' | 'en';
  setLang: (lang: 'ne' | 'hi' | 'en') => void;
}

const flagData = [
  { color: 'blue', char: 'ཨོཾ', text: 'om' },
  { color: 'white', char: 'མ', text: 'ma' },
  { color: 'red', char: 'ཎི', text: 'ni' },
  { color: 'green', char: 'པདྨེ', text: 'pad me' },
  { color: 'yellow', char: 'ཧཱུྃ', text: 'hung' },
];

export default function HeroSection({ lang, setLang }: HeroSectionProps) {
  const scrollToNext = () => {
    document.getElementById('problems')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHealthCheck = () => {
    document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animate numbers
  useEffect(() => {
    const badges = document.querySelectorAll('.badge-number');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const countTo = parseFloat(target.getAttribute('data-count') || '0');
            const duration = 2000;
            const step = Math.max(0.01, countTo / (duration / 16));
            let current = 0;
            
            const updateCounter = () => {
              current += step;
              if (current < countTo) {
                target.innerText = current > 10 ? Math.floor(current).toString() : current.toFixed(1);
                requestAnimationFrame(updateCounter);
              } else {
                target.innerText = countTo.toString();
              }
            };
            
            updateCounter();
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.5 }
    );
    
    badges.forEach((badge) => observer.observe(badge));
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="hero-section">
      {/* Background Image */}
      <div 
        className="hero-video" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop')`, /* People helping each other up a mountain - Homestay growth partner metaphor */
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          filter: 'brightness(0.65) contrast(1.1)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="hero-overlay"></div>
      
      {/* Animated Prayer Flags */}
      <div className="prayer-flags-container">
        {/* String 1 */}
        <div className="flag-string string-1">
          <div className="rope"></div>
          {Array.from({ length: 20 }).map((_, i) => {
            const fd = flagData[i % 5];
            return (
              <div key={`s1-${i}`} className={`flag ${fd.color}`}>
                <div className="flag-fabric">
                  <div className="flag-inner-border">
                    <span className="tibetan-char">{fd.char}</span>
                    <span className="english-text">{fd.text}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Language Toggle */}
      <div className="language-toggle">
        <button className={`lang-btn ${lang === 'ne' ? 'active' : ''}`} onClick={() => setLang('ne')}>नेपाली</button>
        <button className={`lang-btn ${lang === 'hi' ? 'active' : ''}`} onClick={() => setLang('hi')}>हिंदी</button>
        <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>English</button>
      </div>
      
      {/* Main Content */}
      <div className="hero-content">
        {/* Om Symbol */}
        <div className="om-symbol" aria-hidden="true">ॐ</div>
        
        {/* Headline */}
        <h1 className="hero-headline">
          <span className="headline-line-1">अब Agents की दया पर नहीं,</span>
          <span className="headline-line-2">अपनी मर्जी के मालिक बनिये</span>
        </h1>
        
        {/* Subheadline */}
        <p className="hero-subheadline">
          Darjeeling, Kalimpong, Sikkim के Homestay Owners का अपना 
          <span className="highlight"> Business Protector</span>
        </p>
        
        {/* CTA Button */}
        <div className="hero-cta">
          <button className="btn-primary" onClick={scrollToHealthCheck}>
            अपना Homestay Health Check करें - बिल्कुल FREE
            <span className="arrow-icon">↓</span>
          </button>
          
          <p className="micro-text">
            <span className="clock-icon">⏱️</span>
            2 मिनट में जानें आप कितना profit खो रहे हैं
          </p>
        </div>
      </div>
      
    </section>
  );
}
