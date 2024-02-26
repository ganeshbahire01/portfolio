import React from "react";
import { cn } from "../utils/telwindmerge";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

export function SpotlightPreview() {
  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          About Me
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-4xl text-center mx-auto">
          My name is Ganesh Bahire, I'm a MERN stack Graduate from Masai School,
          Bangalore. I'm a MERN Stack Development enthusiast and I enjoy
          creating things that live on the internet. My interest in web
          development started last year when I was trying to edit things on the
          web — taught me a lot about HTML & CSS!. My goal is to cooperate with
          the creation of tools that contribute to the development of a person,
          a company, or a nation. That's why I like to learn new technologies,
          and use them with the mission to improve the world a little bit, one
          step at a time. Fast Forwarding till today, I built numbers of web
          applications and major projects. Learned a lot about teamwork,
          leadership, and communication. After months of rigorous training, here
          I am looking for an opportunity as a full stack web developer.
        </p>
      </div>
    </div>
  );
}
