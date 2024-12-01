import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import { SideFeature, type SideFeatureProps } from "./side-feature";
import { H2, Paragraph } from "@/components/ui/typography";

export type StickySideFeaturesProps = {
  component: "stickySideFeatures";
  title: string;
  description: string;
  features: SideFeatureProps[];
} & SbBlokData;

export function StickySideFeatures({
  title,
  description,
  features,
  ...props
}: StickySideFeaturesProps) {
  return (
    <section
      className="container relative grid grid-cols-1 gap-12 md:grid-cols-2"
      {...storyblokEditable(props)}
    >
      <div className="h-fit md:sticky md:top-8">
        <H2>{title}</H2>
        <Paragraph>{description}</Paragraph>
      </div>
      <ul className="flex flex-col gap-8">
        {features.map((feat, i) => (
          <SideFeature key={i} {...feat} />
        ))}
      </ul>
    </section>
  );
}
