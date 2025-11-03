"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Gift, Mail, RefreshCcw, Search, GanttChartSquare, Star, CircleDollarSign, Pause, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const tabsData = [
  {
    id: 1,
    title: "Website build",
    description: "SEO-specialised, conversion-optimised.",
    icon: GanttChartSquare,
    visual: {
      type: 'image',
      src: '/Ropes Laptop Mockup.webp'
    }
  },
  {
    id: 2,
    title: "Design work",
    description: "Menu design, poster design, branding refresh.",
    icon: Star,
    visual: {
      type: 'image',
      src: '/Ropes Laptop Mockup.webp'
    }
  },
  {
    id: 3,
    title: "Setup assistance",
    description: "Google Business Profile, review optimisation, storefront digital presence.",
    icon: Search,
    visual: {
      type: 'image',
      src: '/Ropes Laptop Mockup.webp'
    }
  },
  {
    id: 4,
    title: "Qualification prep",
    description: "Meeting Owner.com’s standards so you can join with confidence.",
    icon: GanttChartSquare,
    visual: {
      type: 'image',
      src: '/Ropes Laptop Mockup.webp'
    }
  },
  {
    id: 5,
    title: "Smooth transition",
    description: "Once eligible, we connect you to Owner.com and waive your setup fee.",
    icon: CircleDollarSign,
    visual: {
      type: 'image',
      src: '/Ropes Laptop Mockup.webp'
    }
  },
];

const CatalogTabs = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: false });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);

    if (isPaused) return;

    const interval = setInterval(() => {
      emblaApi?.scrollNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [emblaApi, onSelect, isPaused]);
  
  const handleTabClick = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  };
  
  return (
    <section className="bg-background">
      <div className="container py-20 md:py-24">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">Your Partner in Digital Growth</h2>
          <p className="mt-4 text-lg text-muted-foreground">Our job: Get you ready, then hand you the keys. We build you a stunning, SEO-ready website and create beautiful design work for your restaurant.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 mb-8">
            {tabsData.map((tab, index) => (
              <div key={index} onClick={() => handleTabClick(index)} className="cursor-pointer px-4 py-3 relative text-center group">
                <div className="flex items-center justify-center gap-2">
                  <p className={cn("text-sm font-semibold transition-colors", activeIndex === index ? "text-primary" : "text-muted-foreground group-hover:text-primary/80")}>
                    <span className={cn("transition-opacity", activeIndex === index ? "opacity-50" : "opacity-50 group-hover:opacity-80")}>{index + 1}</span>
                    <span className="ml-2">{tab.title}</span>
                  </p>
                </div>
                <div className={cn("absolute bottom-0 left-0 right-0 h-0.5 bg-border/20")}>
                  {activeIndex === index && (
                    <div
                      key={`${activeIndex}-${isPaused}`} 
                      className={cn("h-full bg-primary origin-left", !isPaused && "animate-progress-bar-7s")}
                    />
                  )}
                </div>
              </div>
            ))}
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {tabsData.map((tab, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className={cn(tab.visual.type === 'image' ? 'bg-background' : 'bg-gradient-to-br from-background/80 to-secondary/30', "rounded-lg p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center")}>
                   {tab.visual.type === 'image' ? (
                    <>
                      <div className="flex items-center justify-center">
                        <Image src={tab.visual.src} alt={tab.title} width={600} height={400} className="object-contain" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{tab.title}</h3>
                        <p className="text-lg text-muted-foreground">{tab.description}</p>
                      </div>
                    </>
                  ) : (
                    <>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{tab.title}</h3>
                      <p className="text-lg text-muted-foreground">{tab.description}</p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute left-4 top-0 bottom-0 w-px bg-border/30"></div>
                      {tab.visual.type === 'timeline' && tab.visual.items.map((item, itemIndex) => {
                        const avatar = item.type === 'customer' ? PlaceHolderImages.find(img => img.id === item.avatarId) : null;
                        return (
                          <div key={itemIndex} className="relative mb-6">
                              <div className="absolute -left-[1.3rem] top-1/2 -translate-y-1/2 w-3 h-3 bg-border rounded-full" />
                              {item.type === 'customer' && avatar && (
                                  <div className="flex items-center gap-3 bg-background/50 backdrop-blur-sm p-2 rounded-full w-max">
                                      <Image src={avatar.imageUrl} alt={avatar.description ?? ''} width={32} height={32} data-ai-hint={avatar.imageHint} className="rounded-full" />
                                      <div>
                                          <p className="text-xs text-muted-foreground">New customer</p>
                                          <p className="font-semibold text-sm">{item.name}</p>
                                      </div>
                                  </div>
                              )}
                              {item.type === 'wait' && <p className="text-sm text-muted-foreground ml-4">{item.duration}</p>}
                              {item.type === 'action' && (
                                  <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm p-2 rounded-full w-max">
                                      <item.icon className="h-4 w-4 text-primary" />
                                      <p className="text-sm">{item.text}</p>
                                  </div>
                              )}
                              {item.type === 'customer_action' && <p className="text-sm text-muted-foreground ml-4">{item.text}</p>}
                          </div>
                        )
                      })}
                    </div>
                  </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
            <Button variant="ghost" onClick={scrollPrev} className="text-muted-foreground hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsPaused(!isPaused)} className="text-muted-foreground hover:text-primary">
              {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" onClick={scrollNext} className="text-muted-foreground hover:text-primary">
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </div>
      </div>
    </section>
  );
};

export default CatalogTabs;
