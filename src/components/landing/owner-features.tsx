"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ShoppingCart, BarChart2, Mail, Users, Star, Truck } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const features = [
  { icon: ShoppingCart, title: "Commission-Free Ordering", description: "Take unlimited orders with zero commissions." },
  { icon: BarChart2, title: "Marketing Automation", description: "Automated email & text campaigns to bring customers back." },
  { icon: Mail, title: "Email List Growth", description: "Capture customer emails with every order." },
  { icon: Users, title: "Guest Data", description: "Understand your customers with powerful analytics." },
  { icon: Star, title: "Review Management", description: "Get more 5-star reviews on Google and Yelp." },
  { icon: Truck, title: "Control Your Deliveries", description: "Use your own drivers or tap into a delivery network." },
];

export default function OwnerFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  
  const orbitRadius = isMobile ? 130 : 180;

  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-headline text-sm font-semibold uppercase text-primary tracking-widest">Owner.com Platform</p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-4">The All-In-One Restaurant Platform</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Here's what you get when your site is built on Owner.com.
          </p>
        </div>

        <div className="mt-20 flex items-center justify-center">
          <div className={cn("relative", isMobile ? 'h-[300px] w-[300px]' : 'h-[400px] w-[400px]')}>
            <div className="absolute inset-0 border-2 border-dashed border-border rounded-full animate-spin-slow"></div>
            {features.map((feature, index) => {
              const angle = (index / features.length) * 2 * Math.PI - Math.PI / 2;
              const x = Math.cos(angle) * orbitRadius;
              const y = Math.sin(angle) * orbitRadius;

              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2"
                  style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div
                    className={cn(
                      "w-16 h-16 rounded-full flex items-center justify-center bg-background border-2 cursor-pointer transition-all duration-300",
                      activeIndex === index
                        ? "bg-primary text-primary-foreground border-primary scale-110 shadow-lg"
                        : "bg-background hover:bg-muted"
                    )}
                  >
                    <feature.icon className="w-8 h-8" />
                  </div>
                </div>
              );
            })}
            <div className={cn("absolute flex items-center justify-center pointer-events-none", isMobile ? 'inset-16' : 'inset-24')}>
                <div className="text-center w-full">
                    <p className="font-headline text-xl font-bold">{features[activeIndex].title}</p>
                    <p className="text-muted-foreground mt-2 text-sm">{features[activeIndex].description}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
