import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import { Card, type CardBlockProps } from "./card";

export type CardsSectionProps = {
  component: "cardsSection";
  cards: CardBlockProps[];
} & SbBlokData;

export function CardsSection({ cards, ...props }: CardsSectionProps) {
  return (
    <section
      {...storyblokEditable(props)}
      className="container grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"
    >
      {cards.map((card, i) => (
        <Card key={i} {...card} />
      ))}
    </section>
  );
}

export default CardsSection;
