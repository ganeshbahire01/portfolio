"use client";
import React from "react";
import { WavyBackground } from "./ui/bg-moment";
import { TypewriterEffectSmoothDemo } from "./fotter";

export function WavyBackgroundDemo() {
  return (
    <div className="relative">
      <WavyBackground className="max-w-6xl mx-auto pb-40">
        <TypewriterEffectSmoothDemo />
      </WavyBackground>
    </div>
  );
}
