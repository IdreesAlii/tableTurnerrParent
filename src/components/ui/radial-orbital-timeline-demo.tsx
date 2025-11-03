"use client";

import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { features } from "@/components/landing/constants";

export function RadialOrbitalTimelineDemo() {
  return (
    <>
      <RadialOrbitalTimeline timelineData={features} />
    </>
  );
}
