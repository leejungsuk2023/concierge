import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function SocialProof() {
  const { t } = useLanguage();

  const reviews = [
    {
      name: t('social.review1.name'),
      location: t('social.review1.location'),
      rating: 5,
      review: t('social.review1.text'),
      image: 'https://images.unsplash.com/photo-1642337707259-0fdcc8fd06f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwdGVzdGltb25pYWx8ZW58MXx8fHwxNzY1Mjc2NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: t('social.review2.name'),
      location: t('social.review2.location'),
      rating: 5,
      review: t('social.review2.text'),
      image: 'https://images.unsplash.com/photo-1642337707259-0fdcc8fd06f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwdGVzdGltb25pYWx8ZW58MXx8fHwxNzY1Mjc2NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: t('social.review3.name'),
      location: t('social.review3.location'),
      rating: 5,
      review: t('social.review3.text'),
      image: 'https://images.unsplash.com/photo-1642337707259-0fdcc8fd06f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwdGVzdGltb25pYWx8ZW58MXx8fHwxNzY1Mjc2NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: t('social.review4.name'),
      location: t('social.review4.location'),
      rating: 5,
      review: t('social.review4.text'),
      image: 'https://images.unsplash.com/photo-1642337707259-0fdcc8fd06f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwdGVzdGltb25pYWx8ZW58MXx8fHwxNzY1Mjc2NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const stats = [
    { number: t('social.stat1.number'), label: t('social.stat1.label') },
    { number: t('social.stat2.number'), label: t('social.stat2.label') },
    { number: t('social.stat3.number'), label: t('social.stat3.label') },
    { number: t('social.stat4.number'), label: t('social.stat4.label') }
  ];

  return (
    <section className="bg-gradient-to-b from-black to-[#051937] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('social.title')} <span className="text-[#D4AF37]">{t('social.highlight')}</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            {t('social.subtitle')}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 rounded-xl bg-[#0A2647]/50 backdrop-blur-sm border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D4AF37] mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-white/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0A2647]/80 to-[#051937]/80 backdrop-blur-sm border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-[#D4AF37]" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] fill-current"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-base sm:text-lg text-white/90 mb-6 leading-relaxed relative z-10">
                &quot;{review.review}&quot;
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#D4AF37]/20 overflow-hidden border-2 border-[#D4AF37]/30">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-semibold text-white">
                    {review.name}
                  </div>
                  <div className="text-sm text-white/60">
                    {review.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 sm:mt-16 flex flex-wrap justify-center items-center gap-6 sm:gap-8">
          <div className="text-center">
            <div className="text-white/60 text-sm mb-2">{t('social.trust1.label')}</div>
            <div className="text-white font-semibold">{t('social.trust1.name')}</div>
          </div>
          <div className="w-px h-12 bg-white/20"></div>
          <div className="text-center">
            <div className="text-white/60 text-sm mb-2">{t('social.trust2.label')}</div>
            <div className="text-white font-semibold">{t('social.trust2.name')}</div>
          </div>
          <div className="w-px h-12 bg-white/20"></div>
          <div className="text-center">
            <div className="text-white/60 text-sm mb-2">{t('social.trust3.label')}</div>
            <div className="text-white font-semibold">{t('social.trust3.name')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}