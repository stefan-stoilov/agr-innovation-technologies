import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import type { SbImage } from "@/configs/types";
import Image from "next/image";

export type ProductProps = {
  component: "product";
  image: SbImage;
  title: string;
  description?: string;
} & SbBlokData;

export function Product({
  image: { alt, filename },
  title,
  description,
  ...props
}: ProductProps) {
  return (
    <section
      {...storyblokEditable(props)}
      className="mx-auto flex max-w-screen-2xl flex-col-reverse items-center md:flex-row"
    >
      <div className="w-full p-4 md:flex-1">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      <div className="relative aspect-video w-full md:flex-1">
        <Image
          priority
          src={filename}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
