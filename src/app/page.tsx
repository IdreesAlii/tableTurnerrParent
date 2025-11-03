import TestimonialsMarquee from '@/components/landing/testimonials-marquee';
import CatalogTabs from '@/components/landing/catalog-tabs';
import OwnerCaseStudy from '@/components/landing/owner-case-study';
import AboutOwner from '@/components/landing/about-owner';
import OwnerFeatures from '@/components/landing/owner-features';
import QualificationCriteria from '@/components/landing/qualification-criteria';
import Footer from '@/components/landing/footer';
import { HeroSection, HeroHeader } from '@/components/landing/hero-section-5';
import OwnerPartnershipBanner from '@/components/landing/owner-partnership-banner';
import WhatOwnerDoes from '@/components/landing/what-owner-does';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroHeader />
      <HeroSection />
      <OwnerPartnershipBanner />
      <main className="flex-grow">
        <TestimonialsMarquee />
        <CatalogTabs />
        <OwnerCaseStudy />
        <AboutOwner />
        <WhatOwnerDoes />
        <QualificationCriteria />
      </main>
      <Footer />
    </div>
  );
}
