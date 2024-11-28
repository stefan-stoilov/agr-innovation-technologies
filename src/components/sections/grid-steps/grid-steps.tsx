import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import { Icon, type IconProps } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

export type GridStepsProps = {
  component: "gridSteps";
  title: string;
  description?: string;
  steps: GridStepProps[];
} & SbBlokData;

export type GridStepProps = {
  index: number;
  title: string;
  description: string;
  icon: [IconProps];
} & SbBlokData;

export function GridSteps({
  title,
  description,
  steps,
  ...props
}: GridStepsProps) {
  return (
    <section {...storyblokEditable(props)} className="container bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl xl:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="text-foreground-muted mt-4 text-base leading-7 sm:mt-8">
              {description}
            </p>
          )}
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-y-12 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          {steps.map((step, i) => (
            <GridStep key={i} index={i} {...step} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function GridStep({
  title,
  description,
  icon,
  index,
  ...props
}: GridStepProps) {
  return (
    <li
      {...storyblokEditable(props)}
      className={cn(
        "md:border-y-muted-foregroundforeground md:p-8 lg:p-14",
        index > 2 && "md:border-t ",
        (index === 1 || index === 4) && "md:border-x",
      )}
    >
      <Icon name={icon[0].name} className="mx-auto h-11 w-11 text-primary" />
      <h3 className="mt-12 text-xl font-bold text-foreground">{title}</h3>
      {description && (
        <p className="text-foreground-muted mt-5 text-base">{description}</p>
      )}
    </li>
  );
}
