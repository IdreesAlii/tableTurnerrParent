"use client";

import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"
import { PlaceHolderImages } from "@/lib/placeholder-images";


const testimonialsData = [
  {
    author: {
      name: 'Danish',
      handle: 'Grill Shack',
      avatar: PlaceHolderImages.find(img => img.id === 'testimonial-1')?.imageUrl ?? '',
      avatarHint: PlaceHolderImages.find(img => img.id === 'testimonial-1')?.imageHint,
    },
    text: "Amazing work amazing people!! Definitely my go to 🌊🔥",
  },
  {
    author: {
      name: 'Restaurant owner',
      handle: 'Miss Mat Cafe',
      avatar: PlaceHolderImages.find(img => img.id === 'testimonial-2')?.imageUrl ?? '',
      avatarHint: PlaceHolderImages.find(img => img.id === 'testimonial-2')?.imageHint,
    },
    text: "🙌🙌 amazing team",
  },
  {
    author: {
      name: 'Restaurant owner',
      handle: 'Texbbq',
      avatar: PlaceHolderImages.find(img => img.id === 'testimonial-3')?.imageUrl ?? '',
      avatarHint: PlaceHolderImages.find(img => img.id === 'testimonial-3')?.imageHint,
    },
    text: "Great communication and work from the team",
  },
  {
    author: {
      name: 'Restaurant owner',
      handle: 'Qadeer Coffee',
      avatar: PlaceHolderImages.find(img => img.id === 'testimonial-4')?.imageUrl ?? '',
      avatarHint: PlaceHolderImages.find(img => img.id === 'testimonial-4')?.imageHint,
    },
    text: "Very professional team!! 🙌🏽🙌🏽🩵🩵 great working with you",
  },
];


export default function TestimonialsMarquee() {
  return (
    <section className={cn(
      "bg-background text-foreground",
      "py-12 sm:py-24 md:py-32 px-0",
    )}>
      <div className="container">
        <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
          <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
            <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
              Loved by Restaurants Everywhere
            </h2>
          </div>

          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:80s]">
              <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                {[...Array(4)].map((_, setIndex) => (
                  testimonialsData.map((testimonial, i) => (
                    <TestimonialCard 
                      key={`${setIndex}-${i}`}
                      {...testimonial}
                    />
                  ))
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
