'use client';
import { Globe, ShoppingCart, Truck, Megaphone, Smartphone, Award } from 'lucide-react';
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Website",
    date: "owner.com",
    content: "SEO + conversion optimized. Owner.com builds a website designed to rank in Google local search, and convert visitors into direct orders.",
    category: "Website",
    icon: Globe,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Online Orders",
    date: "Pulse 2.0",
    content: "Simple, fast, upsells. A streamlined ordering experience with intelligent upselling and higher conversion rates.",
    category: "Ordering",
    icon: ShoppingCart,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Zero-Commission Delivery",
    date: "PYMNTS",
    content: "Flat fee. Rather than paying 20-30% per order on third-party marketplaces, you get a flat fee delivery model, improving your margins.",
    category: "Delivery",
    icon: Truck,
    relatedIds: [2],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 4,
    title: "Automated Marketing",
    date: "owner.com",
    content: "“Always on” automations. Built-in email, SMS & push campaigns, loyalty automation, capturing and using your own customer data.",
    category: "Marketing",
    icon: Megaphone,
    relatedIds: [1, 5, 6],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 5,
    title: "Custom Mobile App",
    date: "owner.com",
    content: "Home-screen presence. Your customers download your branded app — not a marketplace. Builds loyalty and repeat orders.",
    category: "Mobile",
    icon: Smartphone,
    relatedIds: [4, 6],
    status: "completed" as const,
    energy: 80,
  },
    {
    id: 6,
    title: "Loyalty Program",
    date: "owner.com",
    content: "Return customer generation. A rewards system integrated into your app and ordering platform, encouraging repeat visits and higher lifetime value.",
    category: "Loyalty",
    icon: Award,
    relatedIds: [4, 5],
    status: "completed" as const,
    energy: 75,
  },
];

export default function WhatOwnerDoes() {
  return (
    <section className="py-20 px-4 text-center">
      <h2 className="text-4xl font-bold mb-4">What Owner.com Does For You</h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Owner.com provides a suite of tools to help you manage and grow your restaurant, all integrated into one powerful platform.
      </p>
      <div className="h-[500px] w-full">
         <RadialOrbitalTimeline timelineData={timelineData} />
      </div>
    </section>
  );
}
