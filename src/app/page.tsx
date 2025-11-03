import TestimonialsMarquee from '@/components/landing/testimonials-marquee';
import CatalogTabs from '@/components/landing/catalog-tabs';
import DesignWork from '@/components/landing/design-work';
import AboutOwner from '@/components/landing/about-owner';
import OwnerFeatures from '@/components/landing/owner-features';
import QualificationCriteria from '@/components/landing/qualification-criteria';
import Footer from '@/components/landing/footer';
import { HeroSection } from '@/components/landing/hero-section-5';
import OwnerPartnershipBanner from '@/components/landing/owner-partnership-banner';
import WhatOwnerDoes from '@/components/landing/what-owner-does';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroSection />
      <OwnerPartnershipBanner />
      <main className="flex-grow">
        <TestimonialsMarquee />
        <CatalogTabs />
        <DesignWork />
        <AboutOwner />
        <WhatOwnerDoes />
        <QualificationCriteria />
      </main>
      <Footer />
    </div>
  );
}
