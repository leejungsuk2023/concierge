import { Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function ServiceChoice() {
  const { t } = useLanguage();

  const medicalFeatures = [
    t('service.medical.feature1'),
    t('service.medical.feature2'),
    t('service.medical.feature3'),
    t('service.medical.feature4')
  ];

  const tourFeatures = [
    t('service.tour.feature1'),
    t('service.tour.feature2'),
    t('service.tour.feature3'),
    t('service.tour.feature4')
  ];

  return (
    <section className="bg-[#051937] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('service.title')}
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            {t('service.subtitle')}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Card A - Medical Care */}
          <div className="group relative bg-gradient-to-br from-[#0A2647] to-[#051937] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#D4AF37]/20 transition-all duration-500 transform hover:-translate-y-2">
            {/* Image */}
            <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcGF0aWVudCUyMGNhcmUlMjBjb21mb3J0fGVufDF8fHx8MTc2NTM0MDIwMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Medical Care & Recovery"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051937] via-[#051937]/50 to-transparent"></div>
              
              {/* Icon Badge */}
              <div className="absolute top-6 right-6 bg-[#D4AF37] p-3 sm:p-4 rounded-full shadow-lg">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-[#051937]" />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                {t('service.medical.title')}
              </h3>
              <p className="text-base sm:text-lg text-white/80 mb-6 leading-relaxed">
                {t('service.medical.description')}
              </p>
              
              {/* Features */}
              <ul className="space-y-2 sm:space-y-3">
                {medicalFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-white/90 text-sm sm:text-base">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 sm:mt-8 w-full py-3 sm:py-4 bg-[#D4AF37] hover:bg-[#C19F2F] text-[#051937] font-semibold rounded-lg transition-all duration-300">
                {t('service.button')}
              </button>
            </div>
          </div>

          {/* Card B - Private Tour */}
          <div className="group relative bg-gradient-to-br from-[#0A2647] to-[#051937] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#D4AF37]/20 transition-all duration-500 transform hover:-translate-y-2">
            {/* Image */}
            <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1626687843236-c8d19bdf56ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHZhY2F0aW9uJTIwbHV4dXJ5fGVufDF8fHx8MTc2NTM0MDIwMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="VVIP Private Tour"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051937] via-[#051937]/50 to-transparent"></div>
              
              {/* Icon Badge */}
              <div className="absolute top-6 right-6 bg-[#D4AF37] p-3 sm:p-4 rounded-full shadow-lg">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-[#051937]" />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                {t('service.tour.title')}
              </h3>
              <p className="text-base sm:text-lg text-white/80 mb-6 leading-relaxed">
                {t('service.tour.description')}
              </p>
              
              {/* Features */}
              <ul className="space-y-2 sm:space-y-3">
                {tourFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-white/90 text-sm sm:text-base">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 sm:mt-8 w-full py-3 sm:py-4 bg-[#D4AF37] hover:bg-[#C19F2F] text-[#051937] font-semibold rounded-lg transition-all duration-300">
                {t('service.button')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}