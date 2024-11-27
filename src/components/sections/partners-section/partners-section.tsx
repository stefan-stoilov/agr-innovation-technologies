"use client";
import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

// TODO:
// Integrate with CMS

const logos = [
  {
    id: "logo-1",
    description: "Logo 1",
    image: "https://www.shadcnblocks.com/images/block/logos/astro.svg",
  },
  {
    id: "logo-2",
    description: "Logo 2",
    image: "https://www.shadcnblocks.com/images/block/logos/figma.svg",
  },
  {
    id: "logo-3",
    description: "Logo 3",
    image: "https://www.shadcnblocks.com/images/block/logos/nextjs.svg",
  },
  {
    id: "logo-4",
    description: "Logo 4",
    image: "https://www.shadcnblocks.com/images/block/logos/react.png",
  },
  {
    id: "logo-5",
    description: "Logo 5",
    image: "https://www.shadcnblocks.com/images/block/logos/shadcn-ui.svg",
  },
  {
    id: "logo-6",
    description: "Logo 6",
    image: "https://www.shadcnblocks.com/images/block/logos/supabase.svg",
  },
  {
    id: "logo-7",
    description: "Logo 7",
    image: "https://www.shadcnblocks.com/images/block/logos/tailwind.svg",
  },
  {
    id: "logo-8",
    description: "Logo 8",
    image: "https://www.shadcnblocks.com/images/block/logos/vercel.svg",
  },
];

export type PartnersSectionProps = {
  component: "partnersSection";
} & SbBlokData;

export function PartnersSection({ ...props }: PartnersSectionProps) {
  return (
    <section {...storyblokEditable(props)} className="container py-32">
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
          Trusted by these companies
        </h1>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel opts={{ loop: true }} plugins={[WheelGesturesPlugin()]}>
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="basis-1/3 select-none pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center bg-foreground">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className="h-7 w-auto"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
}