import {
  storyblokEditable,
  type SbBlokData,
  type ISbRichtext,
} from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import type { SbImage } from "@/configs/types";
import Image from "next/image";

export type ImageSectionProps = {
  component: "imageSection";
  image: SbImage;
  overlay?: number;
  richText?: ISbRichtext;
  desktopAspectRatio?: "21/9";
} & SbBlokData;

export const ImageSection = ({
  image: { alt, filename },
  overlay,
  richText,
  desktopAspectRatio,
  ...props
}: ImageSectionProps) => {
  return (
    <section
      {...storyblokEditable({ ...props })}
      style={
        desktopAspectRatio == "21/9"
          ? { aspectRatio: desktopAspectRatio }
          : { height: "100vh" }
      }
      className="relative flex h-screen w-full justify-center bg-slate-300 md:h-[unset]"
    >
      <Image
        priority
        src={filename}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      {overlay && (
        <div
          aria-label=""
          style={{ opacity: overlay / 100 }}
          className="absolute left-0 top-0 h-full w-full bg-black"
        ></div>
      )}
      {richText && (
        <div className="prose prose-2xl prose-white absolute w-4/5 max-w-7xl self-center">
          {render(richText)}
        </div>
      )}
    </section>
  );
};
