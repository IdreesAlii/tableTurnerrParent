import TestimonialsCarouselSection from '@/components/landing/testimonials-carousel-section';
import OurServicesCarouselSection from '@/components/landing/our-services-carousel-section';
import OwnersTestimonialsSection from '@/components/landing/owners-testimonials-section';
import AboutOwnerSection from '@/components/landing/about-owner-section';
import QualificationCriteriaSection from '@/components/landing/qualification-criteria-section';
import FooterSection from '@/components/landing/footer-section';
import { HeroSection, HeroHeader } from '@/components/landing/hero-section';
import PostHeroSubSection from '@/components/landing/post-hero-sub-section';
import WhatOwnerDoesCircularSection from '@/components/landing/what-owner-does-circular-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroHeader />
      <HeroSection />
      <PostHeroSubSection />
      <main className="flex-grow">
        <TestimonialsCarouselSection />
        <OurServicesCarouselSection />
        <OwnersTestimonialsSection />
        <AboutOwnerSection />
        <WhatOwnerDoesCircularSection />
        <QualificationCriteriaSection />
      </main>
      <FooterSection />
    </div>
  );
}
