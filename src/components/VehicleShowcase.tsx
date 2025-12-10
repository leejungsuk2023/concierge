import { Tv, Wifi, Eye, Luggage, Armchair } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import vehicleInterior from 'figma:asset/24f2f9ede501f954a06f56b3803186f4157e8211.png';

export function VehicleShowcase() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Armchair,
      title: t('vehicle.feature1.title'),
      description: t('vehicle.feature1.description')
    },
    {
      icon: Tv,
      title: t('vehicle.feature2.title'),
      description: t('vehicle.feature2.description')
    },
    {
      icon: Wifi,
      title: t('vehicle.feature3.title'),
      description: t('vehicle.feature3.description')
    },
    {
      icon: Eye,
      title: t('vehicle.feature4.title'),
      description: t('vehicle.feature4.description')
    },
    {
      icon: Luggage,
      title: t('vehicle.feature5.title'),
      description: t('vehicle.feature5.description')
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#051937] to-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('vehicle.title')} <span className="text-[#D4AF37]">{t('vehicle.name')}</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            {t('vehicle.subtitle')}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Vehicle Image */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={vehicleInterior}
                alt="Kia Carnival Hi-Limousine Interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gold Border Accent */}
              <div className="absolute inset-0 border-4 border-[#D4AF37]/30 rounded-2xl pointer-events-none"></div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
          </div>

          {/* Features List */}
          <div className="space-y-6 order-1 lg:order-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl bg-[#0A2647]/50 backdrop-blur-sm border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:bg-[#0A2647]/70 transition-all duration-300 group"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37]" />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full">
            <span className="text-[#D4AF37] text-sm sm:text-base font-semibold">
              {t('vehicle.note')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}