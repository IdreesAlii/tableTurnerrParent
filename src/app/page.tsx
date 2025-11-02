import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import TestimonialsMarquee from '@/components/landing/testimonials-marquee';
import WhatWeDo from '@/components/landing/what-we-do';
import AboutTableturnerr from '@/components/landing/about-tableturnerr';
import DesignWork from '@/components/landing/design-work';
import AboutOwner from '@/components/landing/about-owner';
import OwnerFeatures from '@/components/landing/owner-features';
import QualificationCriteria from '@/components/landing/qualification-criteria';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <TestimonialsMarquee />
        <WhatWeDo />
        <AboutTableturnerr />
        <DesignWork />
        <AboutOwner />
        <OwnerFeatures />
        <QualificationCriteria />
      </main>
      <Footer />
    </div>
  );
}
