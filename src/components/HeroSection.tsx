import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background YouTube Video */}
      <div className="absolute inset-0 bg-black">
        <iframe
          src="https://www.youtube.com/embed/ep5cXyRNi_o?autoplay=1&mute=1&loop=1&playlist=ep5cXyRNi_o&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full md:w-auto md:h-full md:aspect-[9/16]"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            border: 'none',
            pointerEvents: 'none',
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#051937]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {/* Logo/Brand Name */}
          <div className="mb-4 sm:mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              {t('hero.title')}
            </h1>
            <div className="h-1 w-24 sm:w-32 bg-[#D4AF37] mx-auto mt-3 sm:mt-4"></div>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {t('hero.headline1')}
            <br />
            <span className="text-[#D4AF37]">{t('hero.headline2')}</span>
          </h2>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subheadline')}
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 pt-2">
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm sm:text-base">{t('hero.badge1')}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm sm:text-base">{t('hero.badge2')}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm sm:text-base">{t('hero.badge3')}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4 sm:pt-6">
            <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-[#D4AF37] hover:bg-[#C19F2F] text-[#051937] font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-base sm:text-lg">
              {t('hero.cta.book')}
            </button>
            <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#051937] font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-base sm:text-lg">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              {t('hero.cta.chat')}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}