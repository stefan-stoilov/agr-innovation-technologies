import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import { H2 } from "@/components/ui/typography";

export type NumbersSectionProps = {
  component: "numbersSection";
  title: string;
  description?: string;
  numberCards: NumberCardProps[];
} & SbBlokData;

type NumberCardProps = {
  number: string | number;
  title?: string;
  description?: string;
} & SbBlokData;

export function NumbersSection({
  title,
  description,
  numberCards,
  ...props
}: NumbersSectionProps) {
  return (
    <section
      {...storyblokEditable(props)}
      className="container bg-background py-10 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <H2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </H2>
          {description && (
            <p className="mt-3 text-xl leading-relaxed text-foreground/90 md:mt-8">
              {description}
            </p>
          )}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 text-center sm:gap-x-8 md:grid-cols-3 lg:mt-24">
          {numberCards.map((card, i) => (
            <NumberCard key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function NumberCard({ number, title, description, ...props }: NumberCardProps) {
  return (
    <div {...storyblokEditable(props)}>
      <h3 className="text-7xl font-bold">
        <span className="gradient-primary bg-clip-text text-transparent">
          {number}
        </span>
      </h3>
      {title && (
        <p className="mt-4 text-xl font-medium text-foreground">{title}</p>
      )}
      {description && (
        <p className="mt-0.5 text-base text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
