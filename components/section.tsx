"use client";
import { useState, type ReactNode } from "react";
import { useDebounce, useMeasure } from "react-use";

import { cloudimage } from "@/helpers/cloudimage";

export const Section: React.FC<SectionProps> = (props) => {
  const { children, className, sectionClassName, backgroundImage } = props;
  const [bgSize, setBgSize] = useState<BgSize>({ width: 0, height: 0 });
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();

  const updateBgSize = () => {
    if (width > 0 && height > 0) setBgSize({ width, height });
  };
  const bgReady = bgSize.width > 0 && bgSize.height > 0;

  useDebounce(updateBgSize, 300, [width, height]);
  if (!bgReady) updateBgSize();

  const bgStyle =
    backgroundImage && bgReady
      ? {
          backgroundImage: `url("${cloudimage(
            backgroundImage,
            largestDimension(bgSize),
          )}")`,
        }
      : {};

  return (
    <section
      ref={ref}
      className={
        "flex flex-grow bg-cover" +
        (sectionClassName ? ` ${sectionClassName}` : "")
      }
      style={bgStyle}
    >
      <div
        className={
          "mx-auto flex flex-col gap-4 py-8 md:py-10 px-6" +
          (className ? ` ${className}` : "")
        }
      >
        {children}
      </div>
    </section>
  );
};

function largestDimension(bgSize: BgSize): BgSize {
  const { height, width } = bgSize;

  return { height: roundUp(height, 256), width: roundUp(width, 128) };
}

function roundUp(value: number, increment = 128) {
  return Math.ceil(value / increment) * increment;
}

interface SectionProps {
  children: ReactNode;
  sectionClassName?: string;
  className?: string;
  backgroundImage?: string;
}

interface BgSize {
  width: number;
  height: number;
}
