import { HeroSection } from './components/HeroSection';
import { ServiceChoice } from './components/ServiceChoice';
import { VehicleShowcase } from './components/VehicleShowcase';
import { VIPPerks } from './components/VIPPerks';
import { PricingTable } from './components/PricingTable';
import { SocialProof } from './components/SocialProof';
import { Footer } from './components/Footer';
import { FloatingChatButton } from './components/FloatingChatButton';
import { LanguageProvider } from './contexts/LanguageContext';
import { LanguageSelector } from './components/LanguageSelector';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#051937]">
        {/* Language Selector - Fixed Position */}
        <div className="fixed top-4 sm:top-6 right-4 sm:right-6 z-50">
          <LanguageSelector />
        </div>

        {/* Hero Section */}
        <HeroSection />

        {/* Service Choice Section */}
        <ServiceChoice />

        {/* Vehicle Showcase Section */}
        <VehicleShowcase />

        {/* VIP Perks Section */}
        <VIPPerks />

        {/* Pricing Table Section */}
        <PricingTable />

        {/* Social Proof & Reviews Section */}
        <SocialProof />

        {/* Footer */}
        <Footer />

        {/* Floating Chat Button */}
        <FloatingChatButton />
      </div>
    </LanguageProvider>
  );
}