import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import { PromoCard, type PromoCardProps } from "./promo-card";

export type PromoSectionProps = {
  component: "promoSection";
  promoCards: PromoCardProps[];
} & SbBlokData;

export function PromoSection({ promoCards, ...props }: PromoSectionProps) {
  return (
    <section
      {...storyblokEditable(props)}
      className="container grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12"
    >
      {promoCards.map((promoCard, i) => (
        <PromoCard key={i} {...promoCard} />
      ))}
    </section>
  );
}
