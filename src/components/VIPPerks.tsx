import { Heart, UtensilsCrossed, Tag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function VIPPerks() {
  const { t } = useLanguage();

  const perks = [
    {
      image: 'https://images.unsplash.com/photo-1586974175094-0a7259238613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVjb3ZlcnklMjBzcGElMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjUzNjQ0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: t('vip.perk1.title'),
      description: t('vip.perk1.description'),
      gradient: 'from-pink-500 to-red-500'
    },
    {
      image: 'https://images.unsplash.com/photo-1760786885256-d74a606302e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBsb2NhbCUyMHJlc3RhdXJhbnQlMjBhdXRoZW50aWN8ZW58MXx8fHwxNzY1NDIzNDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: t('vip.perk2.title'),
      description: t('vip.perk2.description'),
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      image: 'https://images.unsplash.com/photo-1666980347648-23bb1e49c1e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RveCUyMHNraW4lMjBsYXNlciUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NjU0MjI5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: t('vip.perk3.title'),
      description: t('vip.perk3.description'),
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-black to-[#051937] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('vip.title')}
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
            {t('vip.subtitle')}
          </p>
        </div>

        {/* Perks Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {perks.map((perk, index) => {
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#0A2647]/80 to-[#051937] rounded-2xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D4AF37]/20"
              >
                {/* Image Container - Wide and Horizontal */}
                <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                  <ImageWithFallback
                    src={perk.image}
                    alt={perk.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${perk.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  {/* Dark Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051937] via-[#051937]/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                    {perk.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    {perk.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${perk.gradient} opacity-5 blur-3xl rounded-full pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full">
            <span className="text-[#D4AF37] text-sm sm:text-base font-semibold">
              ✨ Exclusive benefits for all our VIP guests
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}