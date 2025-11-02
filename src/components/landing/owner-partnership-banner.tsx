"use client" 

import * as React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link";

export default function OwnerPartnershipBanner() {
  return (
    <div 
      className={cn(
        'px-10 py-16 rounded-none relative flex items-center justify-center w-full overflow-hidden'
      )}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 1)',
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }}
    >
      <div 
        className="w-3 h-3 rounded-full absolute shadow-[0_0_15px] shadow-current z-10 bg-current"
        style={{
          animation: `
            border-follow 6s linear infinite,
            color-change 6s linear infinite
          `
        }}
      />
      <div 
        className="absolute inset-0 border-y-2 border-border"
        style={{
          animation: 'border-color-change 6s linear infinite'
        }}
      />

      <div className="relative z-20 text-center max-w-3xl">
        <h2 className='font-headline text-3xl md:text-4xl font-bold'>Official Strategic Partner of Owner.com</h2>
        <p className='text-lg text-muted-foreground mt-4'>Owner.com provides the all-in-one platform to power your restaurant's online presence, from commission-free ordering to marketing automation. {' '}
            <Link href="#owner-com" className="text-primary underline-offset-4 hover:underline">
                Read more...
            </Link>
        </p>
      </div>
    </div>
  )
}
