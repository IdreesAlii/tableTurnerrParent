"use client";

import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  business: string;
  quote: string;
  videoUrl: string;
  thumbnailUrl: string;
  metrics: {
    value: string;
    label: string;
  }[];
  caseStudyUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Yuliana Vasquez",
    business: "Owner of Samos Oaxaca",
    quote: "Owner.com is the secret to our online success. It makes online marketing so easy, and our guests love using our new ordering system and app.",
    videoUrl: "https://player.vimeo.com/progressive_redirect/playback/794723134/rendition/1080p/file.mp4?loc=external&signature=9c18dceb1831335c62e2b0fa77a192fd9b78659a9cf459518a69598dfeeb7cd2",
    thumbnailUrl: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e8cfd3d16a1d049a31003_oaxaca.jpg",
    metrics: [
      { value: "+$150,000", label: "Online sales" },
      { value: "+377%", label: "Growth" }
    ],
    caseStudyUrl: "/case-studies/samos-oaxaca"
  },
  {
    id: 2,
    name: "Rahul Bhatia",
    business: "Owner of Saffron Indian Kitchen",
    quote: "The platform has been like a superpower for restaurants that increases sales and drives new customers consistently.",
    videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1022312278/rendition/1080p/file.mp4?loc=external&signature=98f139176705c17ecbcfab3d25d3729eb2179fe26c8012c3dbf6ccd5450a138e",
    thumbnailUrl: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/674e14188f2c09047d065fb0_hero-shot-2.jpg",
    metrics: [
      { value: "+$4,500,000", label: "Online sales" },
      { value: "+4", label: "Locations" }
    ],
    caseStudyUrl: "/case-studies/saffron"
  },
  {
    id: 3,
    name: "Hiroyuki Aidichi",
    business: "Owner of Aburaya Fried Chicken",
    quote: "The best part is your customer service. It's so quick and friendly; it just made my life easier. If somebody asks me, I recommend Owner.",
    videoUrl: "https://player.vimeo.com/progressive_redirect/playback/932909598/rendition/1080p/file.mp4?loc=external&signature=918937f76f6c9a7dcbea86cdeac8ec11184f1fc519bf782f7250b9a14e66f909",
    thumbnailUrl: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e8d53453d0329f6c20a21_aburaya.jpg",
    metrics: [
      { value: "+$300,000", label: "Online sales" },
      { value: "$100,000", label: "Delivery fees saved" }
    ],
    caseStudyUrl: "/case-studies/aburaya"
  },
  {
    id: 4,
    name: "Jay Saadat",
    business: "Co-owner of HillCrust Pizza",
    quote: "You guys got the website out pretty quick, man. I think it was up within, honestly, like a few days. Customers say the website is super user-friendly.",
    videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1061387330/rendition/1080p/file.mp4?loc=external&signature=8a599a5ee28d36a173b5f6026f3e5c5e0a38686bf05f23e9098a00b7169e79ec&user_id=220984361",
    thumbnailUrl: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/67c2468d224cef63e84e8415_Screenshot%202025-02-28%20at%206.27.53%E2%80%AFPM.png",
    metrics: [
      { value: "25%", label: "increase in online orders" },
      { value: "5-figure", label: "savings in third-party fees" }
    ],
    caseStudyUrl: "/case-studies/hillcrust-pizza"
  },
  {
    id: 5,
    name: "Said Hofiani",
    business: "Owner of San Diego Kabob Shack",
    quote: "Ever since signing up, we saw bigger returns. This product is so damn good, man. It just pays for itself.",
    videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1062138717/rendition/1080p/file.mp4?loc=external&signature=58a3672757ee459859c055f0b890486b16a94b949515b6aa987671507ae22e80&user_id=220984361",
    thumbnailUrl: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/67c24cd9c675df3d7d4c7594_Screenshot%202025-02-28%20at%206.54.58%E2%80%AFPM.png",
    metrics: [
      { value: "$9k", label: "sales in first month" },
      { value: "60%", label: "growth year-over-year" }
    ],
    caseStudyUrl: "/case-studies/san-diego-kabob-shack"
  }
];

export default function OwnersTestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const handleVideoClick = (testimonialId: number, videoUrl: string) => {
    setIsPlaying(testimonialId);
    // You can implement video modal here
  };

  return (
    <section id="design-work" className="relative py-14 md:py-18 sm:py-18 bg-background overflow-hidden">
             <div className="max-w-2xl mx-auto text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">Tables Owner.com has turned</h2>
          <p className="mt-4 text-lg text-muted-foreground">Some restaurants who grew exponentially after signing up with Owner.</p>
        </div>
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Carousel */}
          <div className="relative">
            <div className="overflow-visible" ref={emblaRef}>
              <div className="flex items-center">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="flex-[0_0_100%] min-w-0 px-4"
                  >
                    <motion.div
                      initial={{ opacity: 0.3, scale: 0.9 }}
                      animate={{
                        opacity: index === selectedIndex ? 1 : 0.3,
                        scale: index === selectedIndex ? 1 : 0.9,
                      }}
                      transition={{ duration: 0.3 }}
                      className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border"
                    >
                      <div className="flex flex-col md:flex-row gap-0">
                        {/* Video Section - Left Side */}
                        <div className="md:w-52 lg:w-56 flex-shrink-0">
                          <div
                            onClick={() => handleVideoClick(testimonial.id, testimonial.videoUrl)}
                            className="relative group cursor-pointer h-72 md:h-full"
                          >
                            <img
                              src={testimonial.thumbnailUrl}
                              alt={testimonial.name}
                              className="w-full h-full object-cover object-center"
                            />
                            
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/40" />
                            
                            {/* Owner Info - Bottom Left */}
                            <div className="absolute bottom-4 left-4 text-white z-10">
                              <p className="text-sm font-semibold leading-tight">
                                {testimonial.name}
                              </p>
                              <p className="text-xs text-white/80 mt-0.5">
                                {testimonial.business}
                              </p>
                            </div>

                            {/* Play Button - Bottom Right */}
                            <div className="absolute bottom-4 right-4 z-10">
                              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                <Play className="w-5 h-5 text-black fill-black ml-0.5" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Content Section - Right Side */}
                        <div className="flex-1 py-6 px-6 md:py-8 md:px-8 lg:py-10 lg:px-10 flex flex-col justify-between text-center md:text-left">
                          {/* Quote */}
                          <p className="text-lg md:text-xl lg:text-2xl font-normal text-foreground leading-relaxed">
                            "{testimonial.quote}"
                          </p>

                          {/* Metrics and CTA Row */}
                          <div className="flex flex-col items-center md:flex-row md:justify-between gap-6 mt-8">
                            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-4 md:gap-x-8">
                                {testimonial.metrics.map((metric, idx) => (
                                <div key={idx}>
                                    <p className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-1">
                                    {metric.value}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                    {metric.label}
                                    </p>
                                </div>
                                ))}
                            </div>
                            <a
                                href={testimonial.caseStudyUrl}
                                className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-5 py-2.5 rounded-md text-base font-medium transition-colors whitespace-nowrap"
                            >
                                See {testimonial.name.split(' ')[0]}'s story
                            </a>
                           </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Bar - Bottom Center */}
            <div className="flex justify-center gap-1 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className="group relative h-1 transition-all duration-300"
                  aria-label={`Go to testimonial ${index + 1}`}
                  style={{ width: index === selectedIndex ? '32px' : '8px' }}
                >
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-300",
                      index === selectedIndex
                        ? "bg-primary"
                        : "bg-muted-foreground/30 group-hover:bg-muted-foreground/50"
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
