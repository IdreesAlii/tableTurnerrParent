"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const tabsData = [
  {
    title: "No Commissions, Ever",
    description: "We help you build a business that you own, not one that rents customers from delivery apps.",
    visual: {
      subtitle: "Your Business, Your Rules",
      title: "Say goodbye to profit-eating commissions",
      imageId: "catalog-1",
    }
  },
  {
    title: "Restaurant-Focused",
    description: "We only work with restaurants. We understand your challenges and speak your language.",
    visual: {
      subtitle: "Experts in Your Corner",
      title: "Solutions designed for the restaurant industry",
      imageId: "catalog-2",
    }
  },
  {
    title: "Partnership Approach",
    description: "Your success is our success. We're in this with you for the long haul.",
    visual: {
      subtitle: "Long-Term Growth",
      title: "We succeed when you succeed",
      imageId: "catalog-3",
    }
  },
];

const CatalogTabs = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [emblaRefMenu, emblaApiMenu] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onProgress = useCallback(() => {
    if (!emblaApi) return;
    const scrollProgress = emblaApi.scrollProgress();
    setProgress(scrollProgress);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    onProgress();
    emblaApi.on('select', onSelect);
    emblaApi.on('scroll', onProgress);
    const interval = setInterval(() => {
      if (emblaApi.scrollProgress() === 1) {
        emblaApi.scrollTo(0);
      } else {
        emblaApi.scrollNext();
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [emblaApi, onSelect, onProgress]);
  
  const handleTabClick = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  };

  const images = tabsData.map(tab => PlaceHolderImages.find(img => img.id === tab.visual.imageId));

  return (
    <section className="py-20 md:py-24 bg-secondary/50 overflow-hidden">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Your Partner in Digital Growth</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            {tabsData.map((tab, index) => (
              <div key={index} onClick={() => handleTabClick(index)} className="cursor-pointer">
                <div className="flex items-center gap-4">
                  <p className={cn("text-xl opacity-20", activeIndex === index && "opacity-100")}>{`0${index + 1}`}</p>
                  <p className={cn("text-xl", activeIndex === index && "font-bold")}>{tab.title}</p>
                </div>
                <div className="relative h-1 bg-border/20 rounded-full overflow-hidden mt-2">
                  <div 
                    className="absolute top-0 left-0 h-full bg-primary rounded-full"
                    style={{ 
                      transform: activeIndex === index ? `scaleX(${progress})` : (index < activeIndex ? 'scaleX(1)' : 'scaleX(0)'),
                      transformOrigin: 'left',
                      transition: activeIndex === index ? 'transform 7s linear' : 'none'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {tabsData.map((tab, index) => (
                  <div key={index} className="flex-[0_0_100%]">
                    <div className="bg-background rounded-lg p-8">
                      <p className="text-muted-foreground font-semibold">{tab.visual.subtitle}</p>
                      <p className="text-2xl font-bold mt-2 mb-6">{tab.visual.title}</p>
                      <div className="relative h-80 w-full">
                        {images[index] && (
                          <Image
                            src={images[index]?.imageUrl ?? ''}
                            alt={tab.visual.title}
                            data-ai-hint={images[index]?.imageHint}
                            fill
                            className="object-cover rounded-md"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-4 right-4 flex gap-2">
              <Button size="icon" variant="outline" onClick={scrollPrev}>
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" onClick={scrollNext}>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogTabs;
