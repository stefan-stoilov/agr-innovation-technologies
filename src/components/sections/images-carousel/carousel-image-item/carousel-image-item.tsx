import type { SbBlokData } from "@storyblok/react/rsc";
import type { SbImage } from "@/configs/types";
import {
  AspectRatio,
  type AspectRatioType,
} from "@/components/ui/aspect-ratio";
import Image from "next/image";

export type CarouselImageItemProps = {
  component: "carouselImageItem";
  image: SbImage;
  mobileAspectRatio: AspectRatioType;
  desktopAspectRatio: AspectRatioType;
} & SbBlokData;

export function CarouselImageItem({
  image: { alt, filename },
  mobileAspectRatio,
  desktopAspectRatio,
  ...props
}: CarouselImageItemProps) {
  return (
    <AspectRatio
      mobile={mobileAspectRatio}
      desktop={desktopAspectRatio}
      sbProps={props}
    >
      <Image
        src={filename}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
    </AspectRatio>
  );
}

export default CarouselImageItem;
