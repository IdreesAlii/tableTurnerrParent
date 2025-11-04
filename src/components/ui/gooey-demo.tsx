"use client";

import * as React from "react";
import GooeyText from "./gooey-text-morphing";

export default function GooeyTextDemo() {
  return (
    <div className="h-[200px] flex items-center justify-center">
      <GooeyText
        texts={["IT'S", "TIME", "TO", "GROW"]}
        morphTime={1}
        cooldownTime={0.25}
        className="font-bold"
      />
    </div>
  );
}
