"use client";
import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import type { AspectRatioType } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  CarouselImageItem,
  type CarouselImageItemProps,
} from "./carousel-image-item";
import { cn } from "@/lib/utils";

// Carousel Plugins
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

type CarouselItemProps = Pick<CarouselImageItemProps, "image" | "component"> &
  SbBlokData;

export type ImagesCarouselProps = {
  component: "imagesCarousel";
  showNavButtons: boolean;
  autoplay: boolean;
  loop: boolean;
  fade: boolean;
  mobileAspectRatio: AspectRatioType;
  desktopAspectRatio: AspectRatioType;
  images: CarouselItemProps[];
} & SbBlokData;

export function ImagesCarousel({
  showNavButtons,
  autoplay,
  loop,
  fade,
  images,
  mobileAspectRatio,
  desktopAspectRatio,
  ...props
}: ImagesCarouselProps) {
  const plugins = [WheelGesturesPlugin()];
  if (autoplay) plugins.push(Autoplay({ delay: 5000, playOnInit: true }));
  if (fade) plugins.push(Fade());

  return (
    <section {...storyblokEditable(props)}>
      <Carousel
        className="relative w-full"
        opts={{ loop: images.length > 2 ? loop : false }}
        plugins={plugins}
      >
        <CarouselContent>
          {images.map((img, i) => (
            <CarouselItem key={i} className="pl-0">
              <CarouselImageItem
                mobileAspectRatio={mobileAspectRatio}
                desktopAspectRatio={desktopAspectRatio}
                {...img}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {(showNavButtons || fade) && (
          <>
            <CarouselPrevious
              className={cn(
                "absolute left-4 top-1/2 -translate-y-1/2 md:flex",
                fade ? "flex" : "hidden",
              )}
            />
            <CarouselNext
              className={cn(
                "absolute right-4 top-1/2 -translate-y-1/2 md:flex",
                fade ? "flex" : "hidden",
              )}
            />
          </>
        )}
      </Carousel>
    </section>
  );
}

export default ImagesCarousel;
