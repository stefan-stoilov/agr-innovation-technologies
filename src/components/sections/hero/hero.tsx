import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import { H1 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export type HeroProps = {
  component: "hero";
  title: string;
  subtitle: string;
  reducedPadding?: boolean;
} & SbBlokData;

export function Hero({ title, subtitle, reducedPadding, ...props }: HeroProps) {
  return (
    <section
      {...storyblokEditable(props)}
      className={cn("relative overflow-hidden", !reducedPadding && "pb-10")}
    >
      <div
        style={{
          background:
            "radial-gradient(closest-side, rgba(var(--primary) / 0.4) 0%, transparent 100%)",
        }}
        className="absolute -top-2/3 left-1/2 z-[0] h-[300px] w-[70vw] -translate-x-1/2 scale-150 rounded-[50%]"
      ></div>
      <div className="flex flex-col divide-y divide-border pt-[35px]">
        <div>
          <div className="mx-auto flex min-h-[288px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-2 px-2 py-4 sm:px-16 lg:px-24">
            <H1 className="max-w-screen-lg text-pretty text-center text-[clamp(32px,7vw,64px)]">
              {title}
            </H1>

            <p className="text-md max-w-2xl text-pretty text-center text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
