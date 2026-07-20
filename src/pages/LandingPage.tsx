import Footer from '@/features/marketing/components/Footer';
import Features from '@/features/marketing/components/Features';
import FAQ from '@/features/marketing/components/FAQ';
import Hero from '@/features/marketing/components/Hero';
import HowItWorks from '@/features/marketing/components/HowItWorks';
import MarketplacePreview from '@/features/marketing/components/MarketplacePreview';
import Navbar from '@/features/marketing/components/Navbar';
import Security from '@/features/marketing/components/Security';
import Stats from '@/features/marketing/components/Stats';
import CTA from '@/features/marketing/components/CTA';

export default function LandingPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <MarketplacePreview />
        <Features />
        <HowItWorks />
        <Security />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  );
}