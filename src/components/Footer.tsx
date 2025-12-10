import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    t('footer.link1'),
    t('footer.link2'),
    t('footer.link3'),
    t('footer.link4'),
    t('footer.link5')
  ];

  const services = [
    t('footer.service1'),
    t('footer.service2'),
    t('footer.service3'),
    t('footer.service4'),
    t('footer.service5')
  ];

  return (
    <footer className="bg-black border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37]">
              {t('hero.title')}
            </h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t('footer.quicklinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-sm sm:text-base text-white/70 hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t('footer.services')}</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-sm sm:text-base text-white/70">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <a
                href="tel:+821089175327"
                className="flex items-start gap-3 text-sm sm:text-base text-white/70 hover:text-[#D4AF37] transition-colors duration-300"
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>+82 10 8917 5327</span>
              </a>
              <a
                href="mailto:info@bluebridge-global.com"
                className="flex items-start gap-3 text-sm sm:text-base text-white/70 hover:text-[#D4AF37] transition-colors duration-300"
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>info@bluebridge-global.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm sm:text-base text-white/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{t('footer.location')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#D4AF37]/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-white/60 text-center sm:text-left">
              {t('footer.copyright')}
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a
                href="#privacy"
                className="text-sm text-white/60 hover:text-[#D4AF37] transition-colors duration-300"
              >
                {t('footer.privacy')}
              </a>
              <a
                href="#terms"
                className="text-sm text-white/60 hover:text-[#D4AF37] transition-colors duration-300"
              >
                {t('footer.terms')}
              </a>
              <a
                href="#cookies"
                className="text-sm text-white/60 hover:text-[#D4AF37] transition-colors duration-300"
              >
                {t('footer.cookies')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}