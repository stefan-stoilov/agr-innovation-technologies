import dynamic from "next/dynamic";
import type { ComponentMap } from "@/configs/types/sb-component-types";

export const componentMap: ComponentMap = {
  teaser: dynamic(() => import("@/components/sections/teaser")),
  grid: dynamic(() => import("@/components/sections/grid")),
  spacer: dynamic(() => import("@/components/sections/spacer")),
  servicesSection: dynamic(() => import("@/components/sections/services-section")),
  promoSection: dynamic(() => import("@/components/sections/promo-section")),
  imagesCarousel: dynamic(() => import("@/components/sections/images-carousel")),
  imageSection: dynamic(() => import("@/components/sections/image-section")),
  cardsSection: dynamic(() => import("@/components/sections/cards-section")),
  hero: dynamic(() => import("@/components/sections/hero")),
};

export default componentMap;