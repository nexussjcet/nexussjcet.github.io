import type { ProjectProps } from "@/types/projects";
import gsap from "gsap";
import React, { useRef, useEffect, useMemo, useState } from "react";

interface Props extends ProjectProps {
  cardSize: "regular" | "large";
  animationSpeed?: number; 
}

export function ProjectCard({
  title,
  description,
  features,
  cardSize,
  animationSpeed = 10, 
}: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [shouldAnimate, setShouldAnimate] = useState(false);

  const infiniteFeatures = useMemo(() => {
    
    if (!features || features.length === 0) return [];
    return [...features, ...features];
  }, [features]);

  const checkOverflow = () => {
    const container = containerRef.current;
    const featuresContainer = rowRef.current;

    if (!container || !featuresContainer) return;

    const totalFeaturesWidth = featuresContainer.scrollWidth;
    const containerWidth = container.clientWidth;

    setShouldAnimate(totalFeaturesWidth > containerWidth);
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [features]);

  useEffect(() => {
    if (!shouldAnimate || infiniteFeatures.length === 0) return;

    const featuresContainer = rowRef.current;
    if (!featuresContainer) return;

    const totalWidth = featuresContainer.scrollWidth;
    const scrollDuration = animationSpeed;

    
    gsap.to(featuresContainer, {
      x: `-${totalWidth / 2}px`, 
      duration: scrollDuration,  
      ease: "linear",
      repeat: -1, 
      onRepeat: () => {
        
        gsap.set(featuresContainer, { x: 0 });
      },
    });

    return () => {
      gsap.killTweensOf(featuresContainer); // Cleanup animation
    };
  }, [shouldAnimate, infiniteFeatures, animationSpeed]);

  return (
    <div
      ref={containerRef}
      className={`z-50 flex flex-col justify-around gap-4 overflow-hidden rounded-xl bg-white p-4 sm:gap-6 sm:p-6${
        cardSize === "large"
          ? "h-[90vh] w-[90vw] sm:h-[75vh] sm:w-[75vw]"
          : "h-[70vh] w-[90vw] sm:h-[50vh] lg:w-[30vw] md:w-[50vw] sm:w-[80vw]"
      }`}
    >
      {/* Card Title */}
      <h2 className="font-medium text-2xl text-gray-900 tracking-tight sm:text-3xl">
        {title}
      </h2>

      {/* Infinite Scrolling Features */}
      <div className="relative h-8 w-full overflow-hidden sm:h-10">
        <div
          ref={rowRef}
          className="absolute top-0 left-0 flex items-center gap-4 whitespace-nowrap"
          style={{ width: "max-content" }}
        >
          {infiniteFeatures.map((feature, index) => (
            <div
              key={index}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gray-100 px-2 py-1 text-xs sm:gap-4 sm:px-3 sm:py-1.5 sm:text-sm"
            >
              <span className="text-gray-700">
                {feature.icon}
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="border-gray-300 border-t py-2 text-gray-600 text-sm sm:py-4 sm:text-base">
        {description}
      </p>
    </div>
  );
}
