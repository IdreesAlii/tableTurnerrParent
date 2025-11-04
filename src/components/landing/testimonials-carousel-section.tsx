'use client';
import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"


const testimonialsData = [
  {
    author: {
      name: 'Grill Shack',
      handle: 'Restaurant owner',
      avatar: '/Client_Logos/GrillShack.webp',
      avatarHint: 'Grill Shack Logo',
    },
    text: "Amazing work amazing people!! Definitely my go to 🌊🔥",
  },
  {
    author: {
      name: 'Miss Mat Cafe',
      handle: 'Restaurant owner',
      avatar: '/Client_Logos/MissMatCafe.webp',
      avatarHint: 'Miss Mat Cafe Logo',
    },
    text: "Amazing team 🙌🙌",
  },
  {
    author: {
      name: 'Texbbq',
      handle: 'Restaurant owner',
      avatar: '/Client_Logos/TexBBQ.webp',
      avatarHint: 'Texbbq Logo',
    },
    text: "Great communication and work from the team",
  },
  {
    author: {
      name: 'Qadeer Coffee',
      handle: 'Restaurant owner',
      avatar: '/Client_Logos/QadeerCoffee.webp',
      avatarHint: 'Qadeer Coffee Logo',
    },
    text: "Very professional team!! 🙌🏽🙌🏽 great working with you",
  },
];


export default function TestimonialsCarouselSection() {
  return (
    <section className={cn(
      "bg-background text-foreground",
      "py-14 md:py-18 sm:py-18 px-0",
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
              {/* Use two identical sets and the `marquee-slow` keyframe (translateX(-50%)) so the loop is seamless */}
              <div className="flex w-max animate-marquee-slow">
                <div className="flex shrink-0 justify-around [gap:var(--gap)]">
                  {[...Array(4)].map((_, setIndex) => (
                    testimonialsData.map((testimonial, i) => (
                      <TestimonialCard 
                        key={`a-${setIndex}-${i}`}
                        {...testimonial}
                      />
                    ))
                  ))}
                </div>

                <div aria-hidden className="flex shrink-0 justify-around [gap:var(--gap)]">
                  {[...Array(4)].map((_, setIndex) => (
                    testimonialsData.map((testimonial, i) => (
                      <TestimonialCard 
                        key={`b-${setIndex}-${i}`}
                        {...testimonial}
                      />
                    ))
                  ))}
                </div>
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
