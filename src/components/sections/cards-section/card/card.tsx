import {
  storyblokEditable,
  type SbBlokData,
  type ISbRichtext,
} from "@storyblok/react/rsc";
import {
  Card as _Card,
  CardContent,
  // CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { SbImage } from "@/configs/types";
import { render } from "storyblok-rich-text-react-renderer";

export type CardBlockProps = {
  component: "card";
  title: string;
  description?: ISbRichtext;
  image?: SbImage;
} & SbBlokData;

export function Card({ title, description, image, ...props }: CardBlockProps) {
  return (
    <_Card {...storyblokEditable(props)} className="border-b-primary">
      <CardHeader>
        <CardTitle className="text-primary">{title}</CardTitle>
      </CardHeader>
      {description && <CardContent>{render(description)}</CardContent>}
    </_Card>
  );
}

export default Card;
