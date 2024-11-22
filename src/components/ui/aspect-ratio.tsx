import type { PropsWithChildren } from "react";
import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import { cn } from "@/lib/utils";

export const mobileAspectRatios = {
  "1/1": "aspect-square",
  "16/9": "aspect-video",
  "21/9": "aspect-[21/9]",
  "3/2": "aspect-[3/2]",
  "4/3": "aspect-[4/3]",
  "5/4": "aspect-[5/4]",
  "1.85/1": "aspect-[1.85/1]",
  "2.35/1": "aspect-[2.35/1]",
  "9/16": "aspect-[9/16]",
  unset: "aspect-[unset]",
};

export const desktopAspectRatios = {
  "1/1": "md:aspect-square",
  "16/9": "md:aspect-video",
  "21/9": "md:aspect-[21/9]",
  "3/2": "md:aspect-[3/2]",
  "4/3": "md:aspect-[4/3]",
  "5/4": "md:aspect-[5/4]",
  "1.85/1": "md:aspect-[1.85/1]",
  "2.35/1": "md:aspect-[2.35/1]",
  "9/16": "md:aspect-[9/16]",
  unset: "md:aspect-[unset]",
};

export type AspectRatioType = keyof typeof mobileAspectRatios;

export type AspectRatioProps = {
  mobile: AspectRatioType;
  desktop: AspectRatioType;
  className?: string;
  sbProps?: SbBlokData;
} & PropsWithChildren;

export function AspectRatio({
  mobile,
  desktop,
  sbProps,
  children,
  className,
}: AspectRatioProps) {
  return (
    <div
      {...storyblokEditable(sbProps)}
      className={cn(
        "relative w-full",
        mobileAspectRatios[mobile],
        desktopAspectRatios[desktop],
        className,
      )}
    >
      {children}
    </div>
  );
}
