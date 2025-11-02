"use client";

import { Code, Brush, Megaphone, CheckSquare, Zap } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: <Code className="h-4 w-4" />,
    title: 'Website build',
    description: "SEO-specialised, conversion-optimised",
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
  },
  {
    icon: <Brush className="h-4 w-4" />,
    title: 'Design work',
    description: 'Menu design, poster design, branding refresh',
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
  },
  {
    icon: <Megaphone className="h-4 w-4" />,
    title: 'Setup assistance',
    description: 'Google Business Profile, review optimisation, storefront digital presence',
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
  },
  {
    icon: <CheckSquare className="h-4 w-4" />,
    title: "Qualification prep",
    description: "Meeting Owner.com’s standards so you can join with confidence",
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
  },
  {
    icon: <Zap className="h-4 w-4" />,
    title: "Smooth transition",
    description: "Once eligible, we connect you to Owner.com and waive your setup fee (see “About Owner” below)",
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
  },
];


export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-20 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-headline text-sm font-semibold uppercase text-primary tracking-widest">What We Do</p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-4">Full-Service Digital Solutions</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our job: Get you ready, then hand you the keys. We build you a stunning, SEO-ready website and create beautiful design work for your restaurant.
          </p>
        </div>
        <div className="mt-12 max-w-5xl mx-auto">
            <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
                {services.map((service, index) => (
                    <GridItem
                        key={index}
                        area={service.area}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
