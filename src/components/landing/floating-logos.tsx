"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef, useCallback } from "react";

// Define the properties for each logo
const logos = [
  {
    img: "/Icons/google_ads.svg",
    name: "Google Ads",
    bgColor: "bg-white",
  },
  {
    img: "/Icons/google_maps.svg",
    name: "Google Maps",
    bgColor: "bg-white",
  },
  {
    img: "/Icons/yelp.svg",
    name: "Yelp",
    bgColor: "bg-red-500", // Fallback, will be overridden
  },
  {
    img: "/Icons/clover.svg",
    name: "Clover",
    bgColor: "bg-green-500", // Fallback, will be overridden
  },
  {
    img: "/Icons/instagram.svg",
    name: "Instagram",
    bgColor: "bg-white", // Fallback, will be overridden
  },
];

interface Ball {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  img: string;
  name: string;
  bgColor: string;
}

interface PhysicsLogoCloudProps {
  onDraggingStateChange: (isDragging: boolean) => void;
}

const PhysicsLogoCloud: React.FC<PhysicsLogoCloudProps> = ({ onDraggingStateChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ballsRef = useRef<Ball[]>([]);
  const animationFrameId = useRef<number>();
  const [isClient, setIsClient] = useState(false);
  const [renderedBalls, setRenderedBalls] = useState<Ball[]>([]);

  // For interaction
  const grabbedBallIndex = useRef<number | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const prevMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const init = useCallback(() => {
    if (!containerRef.current || !isClient) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    const initialBalls = logos.map((logo, i) => {
        const radius = 50; // Set a fixed radius for all balls
        return {
          id: i,
          x: radius + Math.random() * (width - radius * 2),
          y: radius + Math.random() * (height - radius * 2),
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          radius: radius,
          img: logo.img,
          name: logo.name,
          bgColor: logo.bgColor
        }
    });
    ballsRef.current = initialBalls;
    setRenderedBalls(initialBalls);
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;
    
    init();

    const animate = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      const balls = ballsRef.current;
      const damping = 0.995;
      const minSpeed = 0.1;

      balls.forEach((ball, index) => {
        if (grabbedBallIndex.current === index) return;

        // Update position
        ball.x += ball.vx;
        ball.y += ball.vy;
        
        // Apply damping
        ball.vx *= damping;
        ball.vy *= damping;

        // Ensure minimum speed
        const speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
        if (speed > 0.01 && speed < minSpeed) {
            const angle = Math.atan2(ball.vy, ball.vx);
            ball.vx = Math.cos(angle) * minSpeed;
            ball.vy = Math.sin(angle) * minSpeed;
        }

        // Wall collisions
        if (ball.x - ball.radius < 0) {
          ball.x = ball.radius;
          ball.vx *= -1;
        } else if (ball.x + ball.radius > width) {
          ball.x = width - ball.radius;
          ball.vx *= -1;
        }
        if (ball.y - ball.radius < 0) {
          ball.y = ball.radius;
          ball.vy *= -1;
        } else if (ball.y + ball.radius > height) {
          ball.y = height - ball.radius;
          ball.vy *= -1;
        }
      });

      // Ball collisions
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const ballA = balls[i];
          const ballB = balls[j];

          const dx = ballB.x - ballA.x;
          const dy = ballB.y - ballA.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const minDistance = ballA.radius + ballB.radius;

          if (distance < minDistance) {
            const overlap = minDistance - distance;
            const overlapX = (dx / distance) * overlap;
            const overlapY = (dy / distance) * overlap;
            
            ballA.x -= overlapX / 2;
            ballA.y -= overlapY / 2;
            ballB.x += overlapX / 2;
            ballB.y += overlapY / 2;
            
            const angle = Math.atan2(dy, dx);
            const u1 = { x: ballA.vx, y: ballA.vy };
            const u2 = { x: ballB.vx, y: ballB.vy };
            
            const rotatedU1 = { x: u1.x * Math.cos(angle) + u1.y * Math.sin(angle), y: u1.x * -Math.sin(angle) + u1.y * Math.cos(angle) };
            const rotatedU2 = { x: u2.x * Math.cos(angle) + u2.y * Math.sin(angle), y: u2.x * -Math.sin(angle) + u2.y * Math.cos(angle) };
            const v1 = { x: rotatedU2.x, y: rotatedU1.y };
            const v2 = { x: rotatedU1.x, y: rotatedU2.y };
            const finalV1 = { x: v1.x * Math.cos(-angle) + v1.y * Math.sin(-angle), y: v1.x * -Math.sin(-angle) + v1.y * Math.cos(-angle) };
            const finalV2 = { x: v2.x * Math.cos(-angle) + v2.y * Math.sin(-angle), y: v2.x * -Math.sin(-angle) + v2.y * Math.cos(-angle) };

            ballA.vx = finalV1.x; ballA.vy = finalV1.y;
            ballB.vx = finalV2.x; ballB.vy = finalV2.y;
          }
        }
      }
      
      setRenderedBalls(balls.map(b => ({...b})));
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if(animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isClient, init]);


  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    onDraggingStateChange(true);
    grabbedBallIndex.current = index;
    const rect = containerRef.current!.getBoundingClientRect();
    mousePos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    prevMousePos.current = mousePos.current;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (grabbedBallIndex.current === null) return;
    e.stopPropagation();
    const rect = containerRef.current!.getBoundingClientRect();
    prevMousePos.current = mousePos.current;
    mousePos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };

    const ball = ballsRef.current[grabbedBallIndex.current];
    if (ball) {
      ball.x = mousePos.current.x;
      ball.y = mousePos.current.y;
    }
  };

  const handleMouseUp = () => {
    if (grabbedBallIndex.current === null) return;
    onDraggingStateChange(false);
    const ball = ballsRef.current[grabbedBallIndex.current];
    if (ball) {
      const dx = mousePos.current.x - prevMousePos.current.x;
      const dy = mousePos.current.y - prevMousePos.current.y;
      ball.vx = dx * 0.2;
      ball.vy = dy * 0.2;
    }
    grabbedBallIndex.current = null;
  };

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {renderedBalls.map((ball, index) => {
        const style: React.CSSProperties = {
            width: ball.radius * 2,
            height: ball.radius * 2,
            left: ball.x,
            top: ball.y,
            transform: `translate(-50%, -50%)`,
        };
        const imgStyle: React.CSSProperties = {
            width: ball.radius,
            height: ball.radius,
        };
        let finalBgClass = ball.bgColor;

        if (ball.name === "Clover") {
            finalBgClass = 'bg-[#228800]';
        } else if (ball.name === "Yelp") {
            finalBgClass = 'bg-[#D12700]';
            imgStyle.filter = 'brightness(0) invert(1)';
        } else if (ball.name === "Instagram") {
            style.backgroundImage = 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)';
            finalBgClass = ''; // Use inline style for gradient, so no bg class needed
        }

        const className = cn(
            "absolute flex items-center justify-center rounded-full shadow-lg cursor-grab active:cursor-grabbing",
            finalBgClass
        );

        return (
            <div
              key={ball.id}
              onMouseDown={(e) => handleMouseDown(e, index)}
              className={className}
              style={style}
            >
              <img
                src={ball.img}
                alt={ball.name}
                className="object-contain pointer-events-none"
                style={imgStyle}
              />
            </div>
        );
      })}
    </div>
  );
};

export default PhysicsLogoCloud;
