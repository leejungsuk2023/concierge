import { Check, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function PricingTable() {
  const { t } = useLanguage();

  const pricingPlans = [
    {
      name: t('pricing.plan1.name'),
      price: '$120',
      priceNote: t('pricing.plan1.note'),
      features: [
        t('pricing.plan1.feature1'),
        t('pricing.plan1.feature2'),
        t('pricing.plan1.feature3'),
        t('pricing.plan1.feature4'),
        t('pricing.plan1.feature5')
      ],
      highlight: false
    },
    {
      name: t('pricing.plan2.name'),
      price: '$250',
      priceNote: t('pricing.plan2.note'),
      features: [
        t('pricing.plan2.feature1'),
        t('pricing.plan2.feature2'),
        t('pricing.plan2.feature3'),
        t('pricing.plan2.feature4'),
        t('pricing.plan2.feature5')
      ],
      highlight: false
    },
    {
      name: t('pricing.plan3.name'),
      price: '$450',
      priceNote: t('pricing.plan3.note'),
      features: [
        t('pricing.plan3.feature1'),
        t('pricing.plan3.feature2'),
        t('pricing.plan3.feature3'),
        t('pricing.plan3.feature4'),
        t('pricing.plan3.feature5')
      ],
      highlight: true,
      badge: t('pricing.plan3.badge')
    }
  ];

  return (
    <section className="bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('pricing.title')} <span className="text-[#D4AF37]">{t('pricing.highlight')}</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlight
                  ? 'bg-gradient-to-b from-[#D4AF37]/20 to-[#051937] border-2 border-[#D4AF37] transform lg:scale-105 shadow-2xl shadow-[#D4AF37]/30'
                  : 'bg-gradient-to-b from-[#0A2647] to-[#051937] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
              }`}
            >
              {/* Best Value Badge */}
              {plan.badge && (
                <div className="absolute top-6 right-6 bg-[#D4AF37] text-[#051937] px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg text-sm font-semibold">
                  <Star className="w-4 h-4 fill-current" />
                  {plan.badge}
                </div>
              )}

              <div className="p-6 sm:p-8">
                {/* Plan Name */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-bold text-[#D4AF37]">
                      {plan.price}
                    </span>
                    <span className="text-white/60">~</span>
                  </div>
                  <p className="text-sm sm:text-base text-white/70 mt-2">
                    {plan.priceNote}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-white/90 text-sm sm:text-base"
                    >
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-[#D4AF37] hover:bg-[#C19F2F] text-[#051937] shadow-lg'
                      : 'bg-white/10 hover:bg-[#D4AF37] hover:text-[#051937] text-white border border-white/20 hover:border-[#D4AF37]'
                  }`}
                >
                  {t('pricing.button')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-sm sm:text-base text-white/60 max-w-3xl mx-auto">
            {t('pricing.disclaimer')}
          </p>
        </div>
      </div>
    </section>
  );
}