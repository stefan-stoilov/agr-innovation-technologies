import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import type { SbLink } from "@/configs/types";
import { Button } from "@/components/ui/button";
import { H2 } from "@/components/ui/typography";
import { mapSbLink } from "@/lib/utils";
import Link from "next/link";

export type CtaSectionProps = {
  component: "ctaSection";
  title: string;
  description?: string;
  link: SbLink;
  linkLabel: string;
} & SbBlokData;

export function CtaSection({
  title,
  description,
  link,
  linkLabel,
  ...props
}: CtaSectionProps) {
  return (
    <section {...storyblokEditable(props)}>
      <div className="container">
        <div className="flex w-full flex-col gap-16 overflow-hidden rounded-lg bg-accent p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-16">
          <div className="flex flex-1 flex-col gap-2">
            <H2>{title}</H2>
            {description && (
              <p className="text-muted-foreground lg:text-lg">{description}</p>
            )}
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button asChild>
              <Link {...mapSbLink(link)}>{linkLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
