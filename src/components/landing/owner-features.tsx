"use client";

import { RadialOrbitalTimelineDemo } from "@/components/ui/radial-orbital-timeline-demo";

export default function OwnerFeatures() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            What Owner.com Does For You
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A powerful, all-in-one solution designed specifically for restaurants, without the enterprise price tag.
          </p>
        </div>
        <div className="mt-16">
          <RadialOrbitalTimelineDemo />
        </div>
      </div>
    </section>
  );
}
