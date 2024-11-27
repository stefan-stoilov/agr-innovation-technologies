import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import { HorizontalSteps } from "./horizontal-steps";
import { VerticalSteps } from "./vertical-steps";
import type { IconProps } from "@/components/ui/icon";

export type StepsSectionProps = {
  component: "stepsSection";
  title: string;
  description?: string;
  orientation: "vertical" | "horizontal";
  steps: StepProps[];
} & SbBlokData;

export type StepProps = {
  title: string;
  description: string;
  icon: [IconProps];
} & SbBlokData;

export function StepsSection({
  title,
  description,
  orientation,
  steps,
  ...props
}: StepsSectionProps) {
  return (
    <section className="container bg-background" {...storyblokEditable(props)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        {orientation === "vertical" && <VerticalSteps steps={steps} />}
        {orientation === "horizontal" && <HorizontalSteps steps={steps} />}
      </div>
    </section>
  );
}
