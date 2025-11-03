'use client';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number; // Speed in pixels per second
  reverse?: boolean;
  className?: string;
  pauseOnHover?: boolean;
};

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 50,
  reverse = false,
  className,
  pauseOnHover = true,
}: InfiniteSliderProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const contentBlock = scroller.children[0] as HTMLElement;
    if (!contentBlock) return;

    const loopWidth = contentBlock.offsetWidth;
    let animationFrameId: number;
    
    let currentPosition = 0;
    const direction = reverse ? 1 : -1;
    let lastTimestamp: number | null = null;

    const animate = (timestamp: number) => {
      if (lastTimestamp === null) {
        lastTimestamp = timestamp;
      }
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      if (!isHovering || !pauseOnHover) {
        const moveDistance = (speed * deltaTime) / 1000;
        currentPosition += moveDistance * direction;

        if (Math.abs(currentPosition) >= loopWidth) {
          currentPosition %= loopWidth;
        }
        
        scroller.style.transform = `translateX(${currentPosition}px)`;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [children, gap, speed, reverse, isHovering, pauseOnHover]);

  return (
    <div
      className={cn(
        'overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]',
        className
      )}
      onMouseEnter={() => pauseOnHover && setIsHovering(true)}
      onMouseLeave={() => pauseOnHover && setIsHovering(false)}
    >
      <div
        ref={scrollerRef}
        className="flex w-max"
        style={{ willChange: 'transform' }}
      >
        <div className="flex shrink-0 items-center" style={{ gap: `${gap}px` }}>{children}</div>
        <div aria-hidden="true" className="flex shrink-0 items-center" style={{ gap: `${gap}px` }}>{children}</div>
      </div>
    </div>
  );
}
