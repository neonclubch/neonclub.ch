"use client";
import { cloudimage } from "@/helpers/cloudimage";
import { useState, type ReactNode } from "react";
import { useDebounce, useMeasure } from "react-use";

export const Section: React.FC<SectionProps> = (props) => {
  const { children, className, sectionClassName, backgroundImage } = props;
  const [bgSize, setBgSize] = useState<BgSize>({ width: 0, height: 0 });
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();

  const updateBgSize = () => {
    if (width > 0 && height > 0) setBgSize({ width, height });
  };
  const bgReady = ( bgSize.width > 0 && bgSize.height > 0)

  useDebounce(updateBgSize, 300, [width, height]);
  if(!bgReady) updateBgSize();

  const bgStyle =
    backgroundImage && bgReady 
      ? {
          backgroundImage: `url("${cloudimage(
            backgroundImage,
            largestDimension(bgSize)
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
          "container flex flex-col gap-4 py-8 md:py-10 px-6" +
          (className ? ` ${className}` : "")
        }
      >
        {children}
      </div>
    </section>
  );
};

function largestDimension(bgSize: BgSize) {
  const { height, width } = bgSize;
  if (height > width) {
    return { height: roundUp(height) };
  } else {
    return { width: roundUp(width) };
  }
}

function roundUp(value: number) {
  return Math.ceil(value / 128) * 128;
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
