import { H3, Paragraph } from "@/components/ui/typography";
import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";

export type SideFeatureProps = {
  title: string;
  description: string;
} & SbBlokData;

export function SideFeature({
  title,
  description,
  ...props
}: SideFeatureProps) {
  return (
    <li {...storyblokEditable(props)} className="rounded-md bg-secondary p-4">
      <H3 className="text-primary">{title}</H3>
      <Paragraph className="text-muted-foreground">{description}</Paragraph>
    </li>
  );
}
