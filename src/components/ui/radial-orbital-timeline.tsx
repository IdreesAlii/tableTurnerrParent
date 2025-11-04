'use client';
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MiddleDot } from "@/components/icons/middle-dot";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData = [],
}: RadialOrbitalTimelineProps) {
  const { resolvedTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const centerViewOnNode = (nodeId: number) => {
    if (!nodeRefs.current[nodeId] || timelineData.length === 0) return;
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    if (nodeIndex === -1) return;
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const showItem = (id: number) => {
    setExpandedItems({ [id]: true });
    setActiveNodeId(id);
    centerViewOnNode(id);
  };

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setAutoRotate(true);
    }
  };

  const handleItemClick = (id: number) => {
    if (activeNodeId === id) {
      setAutoRotate(true);
    } else {
      setAutoRotate(false);
      showItem(id);
    }
  };

  useEffect(() => {
    if (!autoRotate || timelineData.length === 0 || !hasMounted) {
      return;
    }

    const timer = setTimeout(() => {
      const currentIndex = activeNodeId !== null
        ? timelineData.findIndex((item) => item.id === activeNodeId)
        : -1;
      const nextIndex = (currentIndex + 1) % timelineData.length;
      showItem(timelineData[nextIndex].id);
    }, activeNodeId === null ? 0 : 2355);

    return () => clearTimeout(timer);
  }, [autoRotate, activeNodeId, timelineData, hasMounted]);


  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 200;
    const radian = (angle * Math.PI) / 180;

    const x = parseFloat((radius * Math.cos(radian)).toFixed(4));
    const y = parseFloat((radius * Math.sin(radian)).toFixed(4));

    const zIndex = Math.round(100 + 50 * Math.sin(radian));
    const opacity = parseFloat(Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    ).toFixed(4));

    return { x, y, angle, zIndex, opacity };
  };

  // Theme-based colors
  const isDark = resolvedTheme === "dark";
  const bgMain = isDark ? "bg-black" : "bg-white";
  const bgPulse = isDark ? "bg-white" : "bg-black";
  const borderPulse = isDark ? "border-white/20" : "border-black/20";
  const borderPulse2 = isDark ? "border-white/10" : "border-black/10";
  const dotColor = isDark ? "text-black" : "text-white";
  const borderCircle = isDark ? "border-white/10" : "border-black/10";
  const nodeBg = isDark ? "bg-white text-black" : "bg-black text-white";
  const nodeBgInactive = isDark ? "bg-black text-white" : "bg-white text-black";
  const nodeBorderActive = isDark ? "border-white shadow-lg shadow-white/30" : "border-black shadow-lg shadow-black/30";
  const nodeBorderInactive = isDark ? "border-white/40" : "border-black/40";
  const nodeTextActive = isDark ? "text-white scale-125" : "text-black scale-125";
  const nodeTextInactive = isDark ? "text-white/70" : "text-black/70";
  const cardBg = isDark ? "bg-black/90" : "bg-white/90";
  const cardBorder = isDark ? "border-white/30" : "border-black/30";
  const cardShadow = isDark ? "shadow-white/10" : "shadow-black/10";
  const cardLine = isDark ? "bg-white/50" : "bg-black/50";
  const cardText = isDark ? "text-white/80" : "text-black/80";

  return (
    <div
      className={`w-full min-h-[500px] flex flex-col items-center justify-center pt-8 pb-12 ${bgMain} overflow-visible`}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl min-h-[500px] flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ perspective: "1000px" }}
        >
          <div className={`absolute w-16 h-16 rounded-full ${bgPulse} animate-pulse flex items-center justify-center z-10`}>
            <div className={`absolute w-20 h-20 rounded-full border ${borderPulse} animate-ping opacity-70`}></div>
            <div
              className={`absolute w-24 h-24 rounded-full border ${borderPulse2} animate-ping opacity-50`}
              style={{ animationDelay: "0.5s" }}
            ></div>
            <MiddleDot className={`w-8 h-8 ${dotColor}`} />
          </div>

          <div className={`absolute w-96 h-96 rounded-full border ${borderCircle}`}></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const Icon = item.icon;
            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
              transition: "transform 0.7s, opacity 0.7s, z-index 0.7s",
            };
            return (
              <div
                key={item.id}
                ref={el => { nodeRefs.current[item.id] = el; }}
                className="absolute transition-all duration-700 cursor-pointer flex flex-col items-center"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  handleItemClick(item.id);
                }}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 transform ${isExpanded ? nodeBg : nodeBgInactive} ${isExpanded ? nodeBorderActive : nodeBorderInactive} ${isExpanded ? "scale-150" : ""}`}
                >
                  <Icon size={16} />
                </div>
                <div
                  className={`absolute top-16 text-center text-xs font-semibold tracking-wider transition-all duration-300 ${isExpanded ? nodeTextActive : nodeTextInactive}`}
                >
                  {item.title}
                </div>
                {isExpanded && (
                  <Card className={`absolute top-32 left-1/2 -translate-x-1/2 w-64 ${cardBg} backdrop-blur-lg ${cardBorder} shadow-xl ${cardShadow} overflow-visible`}>
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 ${cardLine}`}></div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className={`text-xs ${cardText}`}>
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
