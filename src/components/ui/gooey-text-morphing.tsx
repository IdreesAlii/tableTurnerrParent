"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
  loop?: boolean;
  onComplete?: () => void; // called once after one full cycle
}

export function GooeyText({
  texts,
  morphTime = 1,
  cooldownTime = 0.25,
  className,
  textClassName,
  loop = true,
  onComplete,
}: GooeyTextProps) {
  const text1Ref = React.useRef<HTMLSpanElement>(null);
  const text2Ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
  // state for deterministic morphing (no repeated words)
  let current = 0;
  let next = texts.length > 1 ? 1 : 0;
  let morph = 0;
  let cooldown = 0;
  let rafId: number;
  // number of morph transitions to run when not looping
  let morphsRemaining = loop ? Infinity : Math.max(0, texts.length - 1);

  const now = () => performance.now();
  let lastTime = now();

    const setMorph = (fraction: number) => {
      if (text1Ref.current && text2Ref.current) {
        text2Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        fraction = 1 - fraction;
        text1Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        text1Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
      }
    };

    const doCooldown = () => {
      morph = 0;
      if (text1Ref.current && text2Ref.current) {
        text2Ref.current.style.filter = "";
        text2Ref.current.style.opacity = "100%";
        text1Ref.current.style.filter = "";
        text1Ref.current.style.opacity = "0%";
      }
    };

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;
      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    };

    function animate() {
      const nowTime = now();
      const dt = (nowTime - lastTime) / 1000;
      lastTime = nowTime;

      if (morphsRemaining <= 0) return;

      if (cooldown > 0) {
        cooldown -= dt;
        if (cooldown <= 0) {
          // advance to next pair
          current = next;
          next = (current + 1) % texts.length;
          // update DOM texts
          if (text1Ref.current && text2Ref.current) {
            text1Ref.current.textContent = texts[current];
            text2Ref.current.textContent = texts[next];
            text1Ref.current.style.opacity = "100%";
            text2Ref.current.style.opacity = "0%";
            text1Ref.current.style.filter = "";
            text2Ref.current.style.filter = "";
          }
        }
      } else {
        // morph phase
        morph += dt;
        const fraction = Math.min(morph / morphTime, 1);
        setMorph(fraction === 0 ? 0.0001 : fraction);

        if (fraction >= 1) {
          // finished morph to "next"
          morphsRemaining = morphsRemaining === Infinity ? Infinity : morphsRemaining - 1;
          if (!loop && morphsRemaining <= 0) {
            // final morph done; call onComplete
            if (onComplete) onComplete();
            return;
          }
          // start cooldown before next morph
          cooldown = cooldownTime;
          morph = 0;
        }
      }

      rafId = requestAnimationFrame(animate);
    }

    // initialize DOM
    if (text1Ref.current && text2Ref.current) {
      text1Ref.current.textContent = texts[current];
      text2Ref.current.textContent = texts[next];
      text1Ref.current.style.opacity = "100%";
      text2Ref.current.style.opacity = "0%";
    }

    animate();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [texts, morphTime, cooldownTime, onComplete]);

  return (
    <div className={cn("relative", className)}>
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div className="flex items-center justify-center" style={{ filter: "url(#threshold)" }}>
        <span
          ref={text1Ref}
          className={cn(
            "absolute inline-block select-none text-center text-6xl md:text-[60pt]",
            "text-foreground",
            textClassName
          )}
        />
        <span
          ref={text2Ref}
          className={cn(
            "absolute inline-block select-none text-center text-6xl md:text-[60pt]",
            "text-foreground",
            textClassName
          )}
        />
      </div>
    </div>
  );
}

export default GooeyText;
