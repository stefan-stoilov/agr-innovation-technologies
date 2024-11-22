import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import { cn } from "@/lib/utils";

export type SpacerProps = {
  component: "spacer";
  size: "xl" | "lg" | "md" | "sm";
} & SbBlokData;

const sizes = {
  sm: "h-8 md:h-14",
  md: "h-10 md:h-20",
  lg: "h-14 md:h-24",
  xl: "h-20 md:h-40",
};

export function Spacer({ size, ...props }: SpacerProps) {
  return (
    <div
      {...storyblokEditable(props)}
      className={cn("w-full bg-background", sizes[size])}
    />
  );
}

export default Spacer;
