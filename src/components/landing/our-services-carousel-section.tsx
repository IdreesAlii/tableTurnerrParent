"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import FloatingLogosComp from './floating-logos-comp';

const tabsData = [
  {
    id: 1,
    title: "Website build",
    description: "SEO-specialised, conversion-optimised.",
    visual: {
      type: 'image',
      src: '/Ropes_Laptop_Mockup.webp'
    }
  },
  {
    id: 2,
    title: "Design work",
    description: "Menu design, poster design, branding refresh.",
    visual: {
      type: 'image',
      src: '/Printing_Poster_Mockup.webp'
    }
  },
  {
    id: 3,
    title: "Setup assistance",
    description: "Google Business Profile, review optimisation, storefront digital presence.",
    visual: {
      type: 'component',
      component: FloatingLogosComp
    }
  },
  {
    id: 4,
    title: "Qualification prep",
    description: "Meeting Owner.com’s standards so you can join with confidence.",
    visual: {
      type: 'image',
      src: '/Qualifications_Screenshot.png'
    }
  },
  {
    id: 5,
    title: "Smooth transition",
    description: "Once eligible, we connect you to Owner.com and waive your setup fee.",
    visual: {
      type: 'image',
      src: '/OwnerCEO_GroupPhoto.webp'
    }
  },
];

const OurServicesCarouselSection = () => {
  const [isLogoDragging, setIsLogoDragging] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: false, watchDrag: !isLogoDragging });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit({ loop: true, skipSnaps: false, watchDrag: !isLogoDragging });
    }
  }, [isLogoDragging, emblaApi]);

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
    <section id="what-we-do-section" className="bg-background">
      <div className="container py-14 md:py-18">
        <div className="max-w-2xl mx-auto text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Your Partner in Digital Growth</h2>
          <p className="mt-4 text-lg text-muted-foreground">Our job: Get you ready, then hand you the keys. We build you a stunning, SEO-ready website and create beautiful design work for your restaurant.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 mb-8">
            {tabsData.map((tab, index) => (
              <div key={index} onClick={() => handleTabClick(index)} className="cursor-pointer px-4 py-3 relative text-center group bg-primary/5 rounded-md hover:bg-primary/10 dark:bg-transparent dark:hover:bg-transparent transition-colors">
                <div className="flex items-center justify-center gap-2">
                  <p className={cn("text-sm font-medium transition-colors", activeIndex === index ? "text-primary" : "text-muted-foreground group-hover:text-primary/80")}>
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
                <div className="rounded-lg p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
                  {tab.visual.type === 'image' ? (
                    <>
                      <div className="relative w-full" style={{ paddingTop: '66.66%' }}>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <Image src={tab.visual.src as string} alt={tab.title} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                        </div>
                      </div>
                      <div className="flex flex-col justify-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{tab.title}</h3>
                        <p className="text-lg text-muted-foreground">{tab.description}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative w-full rounded-lg bg-[#0B0B0B]/15 dark:bg-[#0B0B0B]" style={{ paddingTop: '66.66%' }}>
                        <div className="absolute top-0 left-0 w-full h-full">
                            {React.createElement(tab.visual.component as any, { onDraggingStateChange: setIsLogoDragging })}
                        </div>
                      </div>
                      <div className="flex flex-col justify-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{tab.title}</h3>
                        <p className="text-lg text-muted-foreground">{tab.description}</p>
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

export default OurServicesCarouselSection;
