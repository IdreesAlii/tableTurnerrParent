"use client";

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FeatureSteps } from '@/components/ui/feature-section';

const works = [
  { step: 'Step 1', title: 'The Modern Bistro', content: 'Web Design', imageId: 'design-1' },
  { step: 'Step 2', title: 'Sushify App', content: 'Mobile App', imageId: 'design-2' },
  { step: 'Step 3', title: 'Artisan Cafe Menu', content: 'Branding', imageId: 'design-3' },
  { step: 'Step 4', title: 'Gourmet Burger Shots', content: 'Photography', imageId: 'design-4' },
];

export default function DesignWork() {
  const features = works.map(work => ({
    ...work,
    image: PlaceHolderImages.find(img => img.id === work.imageId)?.imageUrl ?? '',
  }));

  return (
    <section id="design-work" className="py-20 md:py-24 bg-background">
      <FeatureSteps 
        features={features} 
        title="Designs That Drive Business" 
        autoPlayInterval={10000}
        imageHeight="h-[500px]"
      />
    </section>
  );
}