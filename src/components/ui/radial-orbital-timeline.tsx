'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TimelineItem {
  id: number;
  title: string;
  content: string;
  category: string;
  icon: React.ElementType;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const animationFrameRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const rotationSpeed = 0.1;

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setIsPaused(false);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems(prev => ({ [id]: !prev[id] }));
    setIsPaused(prev => !prev);
  };
  
  const calculateNodePosition = useCallback((index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 200;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    return { x, y, angle };
  }, [rotationAngle]);

  const animate = useCallback((time: number) => {
    if (lastTimeRef.current !== 0) {
      const deltaTime = time - lastTimeRef.current;
      if (!isPaused) {
        setRotationAngle(prevAngle => (prevAngle + rotationSpeed * deltaTime * 0.1) % 360);
      }
    }
    lastTimeRef.current = time;
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [isPaused]);

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animate]);

  useEffect(() => {
    let pauseTimeout: NodeJS.Timeout;

    const checkAndPause = () => {
        timelineData.forEach((item, index) => {
            const { angle } = calculateNodePosition(index, timelineData.length);
            // Check if the node is at the top (270 degrees in this coordinate system)
            if (angle > 269 && angle < 271 && !isPaused) {
                setIsPaused(true);
                setExpandedItems({ [item.id]: true });

                pauseTimeout = setTimeout(() => {
                    setExpandedItems({});
                    setIsPaused(false);
                }, 4000); // 4 seconds
            }
        });
    };

    if (!isPaused) {
      checkAndPause();
    }
    
    return () => clearTimeout(pauseTimeout);

  }, [rotationAngle, isPaused, timelineData, calculateNodePosition]);


  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ perspective: '1000px' }}
        >
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-70"></div>
            <div
              className="absolute w-24 h-24 rounded-full border border-white/10 animate-ping opacity-50"
              style={{ animationDelay: '0.5s' }}
            ></div>
            <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md"></div>
          </div>

          <div className="absolute w-96 h-96 rounded-full border border-white/10"></div>

          {timelineData.map((item, index) => {
            const { x, y } = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${x}px, ${y}px)`,
              zIndex: isExpanded ? 200 : 100,
              opacity: isExpanded ? 1 : 0.7,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${isExpanded ? 'bg-white text-black' : 'bg-black text-white'}
                  border-2 
                  ${
                    isExpanded
                      ? 'border-white shadow-lg shadow-white/30'
                      : 'border-white/40'
                  }
                  transition-all duration-300 transform
                  ${isExpanded ? 'scale-150' : ''}
                `}
                >
                  <Icon size={16} />
                </div>

                <div
                  className={`
                  absolute top-12 whitespace-nowrap
                  text-xs font-semibold tracking-wider
                  transition-all duration-300
                  ${isExpanded ? 'text-white scale-125' : 'text-white/70'}
                `}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-black/90 backdrop-blur-lg border-white/30 shadow-xl shadow-white/10 overflow-visible">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/50"></div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm mt-2">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-white/80">
                      <p>{item.content}</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
