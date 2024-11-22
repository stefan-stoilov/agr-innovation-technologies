import {
  storyblokEditable,
  type SbBlokData,
  type ISbRichtext,
} from "@storyblok/react/rsc";
import type { SbImage } from "@/configs/types";
import { render } from "storyblok-rich-text-react-renderer";
import { typography as t } from "@/components/ui/typography";
import { cn, hasSbImage } from "@/lib/utils";
import Image from "next/image";

export type ServicesBlockProps = {
  component: "service";
  title: string;
  subtitle?: string;
  description: ISbRichtext;
  image?: SbImage;
  desktopImagePosition: "left" | "right";
} & SbBlokData;

export function ServiceBlock({
  title,
  subtitle,
  description,
  image,
  desktopImagePosition,
  ...props
}: ServicesBlockProps) {
  return (
    <div
      {...storyblokEditable(props)}
      className={cn(
        "flex flex-col-reverse flex-nowrap items-start gap-5",
        desktopImagePosition === "right"
          ? "md:flex-row"
          : "md:flex-row-reverse",
      )}
    >
      <div
        className={cn(
          "flex w-full flex-col gap-3",
          hasSbImage(image) && "md:w-8/12",
        )}
      >
        <p className={t.h2}>{title}</p>
        {subtitle && <p className={t.h4}>{subtitle}</p>}
        {description && (
          <div className="mt-4 text-muted-foreground">
            {render(description)}
          </div>
        )}
      </div>

      {hasSbImage(image) && (
        <div className="relative aspect-square w-4/12 max-w-[300px] flex-shrink-0 overflow-hidden rounded-[50%]">
          <Image
            src={image.filename}
            alt={image.alt}
            fill
            sizes="25vw"
            className="inset-0 object-cover"
          />
        </div>
      )}
    </div>
  );
}

export default ServiceBlock;
