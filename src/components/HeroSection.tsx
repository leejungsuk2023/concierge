import { useLanguage } from '../contexts/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-screen bg-[#051937]">
      {/* Background Video - ends above floating button */}
      <div className="absolute top-0 left-0 right-0" style={{ height: 'calc(100% - 100px)' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#051937]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-start items-center text-center px-4 sm:px-6 lg:px-8" style={{ paddingTop: '80px' }}>
        <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">
          {/* Logo/Brand Name */}
          <div className="mb-2 sm:mb-4">
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
        </div>
      </div>
    </section>
  );
}