"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  intensity?: number;
};

export default function ThemeSwitchFlowGlassPro({
  className,
  intensity = 1,
  ...props
}: Props) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [checked, setChecked] = useState(false);

  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches,
    [],
  );

  // (For brevity we keep this demo minimal — the full shader demo can be pasted later if needed.)
  useEffect(() => setMounted(true), []);
  useEffect(() => setChecked(resolvedTheme === "dark"), [resolvedTheme]);

  const onChange = useCallback(
    (v: boolean) => {
      setChecked(v);
      setTheme(v ? "dark" : "light");
    },
    [setTheme],
  );

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "relative h-11 w-[100px] select-none",
        "transition-transform duration-150 will-change-transform",
        "hover:scale-[1.02] active:scale-[0.985]",
        className,
      )}
      {...props}
    >
      <Switch
        checked={checked}
        onCheckedChange={onChange}
        className={cn(
          "peer absolute inset-0 h-full w-full rounded-full !bg-transparent !border-0 focus-visible:outline-none",
          "[&>span]:absolute [&>span]:top-[6px] [&>span]:left-[6px]",
          "[&>span]:h-8 [&>span]:w-8 [&>span]:rounded-full [&>span]:z-30",
          "data-[state=unchecked]:[&>span]:bg-white/90 data-[state=checked]:[&>span]:bg-slate-900/90",
          "[&>span]:transition-transform [&>span]:duration-220",
          "hover:[&>span]:scale-[1.03] active:[&>span]:scale-[0.97]",
          "data-[state=unchecked]:[&>span]:translate-x-0",
          "data-[state=checked]:[&>span]:translate-x-[56px]",
        )}
      />

      <span className="pointer-events-none absolute inset-y-0 left-[22px] -translate-x-1/2 z-20 flex items-center">
        <SunIcon size={16} className={cn("transition-all duration-300", checked ? "opacity-45" : "opacity-100 rotate-12")} />
      </span>
      <span className="pointer-events-none absolute inset-y-0 left-[78px] -translate-x-1/2 z-20 flex items-center">
        <MoonIcon size={16} className={cn("transition-all duration-300", checked ? "opacity-100 -rotate-12" : "opacity-45")} />
      </span>
    </div>
  );
}
