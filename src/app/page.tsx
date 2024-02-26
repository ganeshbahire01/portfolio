import Image from "next/image";
import { Hero } from "./components/hero";
import { SpotlightPreview } from "./components/spotlight";
import { ThreeDCardDemo } from "./components/3dcard";
import { LampDemo } from "./components/lamp";
import ProjectsCard from "./components/big-circle";
import BigCircleCard from "./components/big-circle";
import VersatileCard from "./components/versatile";
import TechStack from "./components/tech-stack";
import { CardHoverEffectDemo } from "./components/technology";
import { GoogleGeminiEffectDemo } from "./components/hire";
import { TypewriterEffectSmoothDemo } from "./components/fotter";
import { WavyBackgroundDemo } from "./components/bg-footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <SpotlightPreview />
      <LampDemo />
      <BigCircleCard />
      <VersatileCard />
      <CardHoverEffectDemo />
      <WavyBackgroundDemo />
      <GoogleGeminiEffectDemo />
    </div>
  );
}
