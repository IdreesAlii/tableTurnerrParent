"use client" 

import * as React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link";
import { useMotionValue, useMotionTemplate, animate, motion } from "framer-motion";
import useMeasure from "react-use-measure";

export default function PostHeroSubSection() {
  let [ref, { width, height }] = useMeasure();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  React.useEffect(() => {
    if (width === 0 || height === 0) return;

    const path = [
        { x: 0, y: 0 },
        { x: width, y: 0 },
        { x: width, y: height },
        { x: 0, y: height },
        { x: 0, y: 0 },
    ];

    const totalLength = 2 * (width + height);

    const controlsX = animate(x, path.map(p => p.x), {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
      times: [0, width / totalLength, (width + height) / totalLength, (2 * width + height) / totalLength, 1]
    });
    const controlsY = animate(y, path.map(p => p.y), {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
      times: [0, width / totalLength, (width + height) / totalLength, (2 * width + height) / totalLength, 1]
    });

    return () => {
      controlsX.stop();
      controlsY.stop();
    };
  }, [x, y, width, height]);

  const animatedBackground = useMotionTemplate`radial-gradient(100px circle at ${x}px ${y}px, hsl(var(--primary) / 0.15), transparent 80%)`;
  
  return (
    <div 
      ref={ref}
      className={cn(
        'px-10 py-16 rounded-none relative flex items-center justify-center w-full overflow-hidden',
        'bg-background',
        '[background-image:linear-gradient(hsl(var(--border)_/_1)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)_/_1)_1px,transparent_1px)]',
        'dark:[background-image:linear-gradient(hsl(var(--border)_/_0.25)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)_/_0.3)_1px,transparent_1px)]'
      )}
      style={{
        backgroundSize: '20px 20px'
      }}
    >
        <motion.div 
            className="absolute inset-0"
            style={{
                background: animatedBackground,
            }}
        />

      <motion.div 
        className="w-4 h-4 rounded-full absolute shadow-[0_0_20px_2px] shadow-primary/50 z-10 bg-primary"
        style={{
          top: y,
          left: x,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div 
        className="absolute inset-0 border-y border-border border-primary/25 dark:border-primary/10"
      />

      <div className="container">
        <div className="relative z-20 text-center max-w-3xl mx-auto">
            <h2 className='font-headline text-3xl md:text-4xl font-bold text-foreground'>Official Strategic Partner of Owner.com</h2>
            <p className='text-lg text-muted-foreground mt-4'>Owner.com provides the all-in-one platform to power your restaurant's online presence, from commission-free ordering to marketing automation. {' '}
                <Link href="#owner-com" className="text-primary underline-animate font-medium">
                    Read more...
                </Link>
            </p>
        </div>
      </div>
    </div>
  )
}
