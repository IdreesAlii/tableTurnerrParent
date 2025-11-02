"use client" 

import * as React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link";
import { useMotionValue, useMotionTemplate, animate } from "framer-motion";

export default function OwnerPartnershipBanner() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  React.useEffect(() => {
    const root = document.documentElement;
    const updateMousePosition = (e: MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement)?.getBoundingClientRect();
      if (rect) {
        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
      }
    };
    root.addEventListener('mousemove', updateMousePosition);
    return () => {
      root.removeEventListener('mousemove', updateMousePosition);
    };
  }, [x, y]);

  const animatedX = useMotionValue(0);
  const animatedY = useMotionValue(0);

  React.useEffect(() => {
    const path = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 0, y: 1 },
      { x: 0, y: 0 },
    ];

    const controlsX = animate(animatedX, path.map(p => p.x), {
      duration: 6,
      repeat: Infinity,
      ease: "linear"
    });
    const controlsY = animate(animatedY, path.map(p => p.y), {
      duration: 6,
      repeat: Infinity,
      ease: "linear"
    });

    return () => {
      controlsX.stop();
      controlsY.stop();
    };
  }, [animatedX, animatedY]);

  const animatedBackground = useMotionTemplate`radial-gradient(400px circle at ${animatedX}px ${animatedY}px, rgba(255, 255, 255, 0.2), transparent 80%)`;
  
  return (
    <div 
      className={cn(
        'px-10 py-16 rounded-none relative flex items-center justify-center w-full'
      )}
      style={{
        backgroundColor: 'rgb(0, 0, 0)',
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }}
    >
        <div 
            className="absolute inset-0"
            style={{
                background: animatedBackground,
            }}
        />

      <div 
        className="w-4 h-4 rounded-full absolute shadow-[0_0_20px_2px] shadow-current z-10 bg-white text-white"
        style={{
          top: `calc(${animatedY.get() * 100}% - 8px)`,
          left: `calc(${animatedX.get() * 100}% - 8px)`,
        }}
      />
      <div 
        className="absolute inset-0 border-y border-white/10"
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
