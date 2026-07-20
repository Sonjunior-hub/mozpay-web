import Navbar from '@/features/marketing/components/Navbar';
import Hero from '@/features/marketing/components/Hero';
import Stats from '@/features/marketing/components/Stats';
import MarketplacePreview from '@/features/marketing/components/MarketplacePreview';
import Features from '@/features/marketing/components/Features';
import HowItWorks from '@/features/marketing/components/HowItWorks';
import Security from '@/features/marketing/components/Security';
import FAQ from '@/features/marketing/components/FAQ';
import CTA from '@/features/marketing/components/CTA';
import Footer from '@/features/marketing/components/Footer';


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