"use client";

import * as React from "react";
import GooeyText from "./gooey-text-morphing";

interface InitialLoaderProps {
  children: React.ReactNode;
  // Optionally skip showing loader after first visit
  showOnce?: boolean;
}

export default function InitialLoader({ children, showOnce = true }: InitialLoaderProps) {
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    if (!showOnce) return;
    const key = "__app_initial_loader_shown";
    const shown = typeof window !== "undefined" && !!localStorage.getItem(key);
    if (shown) setDone(true);
  }, [showOnce]);

  const handleComplete = React.useCallback(() => {
    setDone(true);
    try {
      localStorage.setItem("__app_initial_loader_shown", "1");
    } catch (e) {
      // ignore
    }
  }, []);

  if (done) return <>{children}</>;

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground">
      <div className="z-50">
        <GooeyText
          texts={["IT'S", "TIME", "TO", "GROW"]}
          morphTime={1}
          cooldownTime={0.25}
          className="font-bold"
          loop={false}
          onComplete={handleComplete}
        />
      </div>
    </div>
  );
}
