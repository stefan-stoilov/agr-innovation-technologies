import {
  storyblokEditable,
  type SbBlokData,
  type ISbRichtext,
} from "@storyblok/react/rsc";
import type { SbImage } from "@/configs/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { render } from "storyblok-rich-text-react-renderer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import styles from "./promo-card.module.css";
import { cn } from "@/lib/utils";

export type PromoCardProps = {
  component: "promoCard";
  title: string;
  description?: ISbRichtext;
  image: SbImage;
  label?: string;
} & SbBlokData;

export function PromoCard({
  title,
  description,
  image: { alt, filename },
  label,
  ...props
}: PromoCardProps) {
  return (
    <Card
      {...storyblokEditable(props)}
      className={cn("border-b-primary", styles["promo-card"])}
    >
      <CardContent className="p-0">
        <AspectRatio mobile="3/2" desktop="3/2" className="overflow-hidden">
          <Image
            src={filename}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={cn(
              "object-cover transition-transform",
              styles["promo-card-image"],
            )}
          />
          {label && (
            <div className="absolute bottom-2 left-2 right-2">
              <span className="bg-primary px-2 py-1 text-white">{label}</span>
            </div>
          )}
        </AspectRatio>
        <div className="flex flex-col gap-2 p-4">
          <CardTitle>{title}</CardTitle>
          <div className="text-muted-foreground">
            {description && render(description)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
