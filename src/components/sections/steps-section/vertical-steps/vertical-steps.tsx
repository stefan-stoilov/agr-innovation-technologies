import type { StepProps } from "../steps-section";
import { Icon } from "@/components/ui/icon";
import { storyblokEditable } from "@storyblok/react/rsc";
import { cn } from "@/lib/utils";

export function VerticalSteps({ steps }: { steps: StepProps[] }) {
  return (
    <ul className="mx-auto mt-16 max-w-md">
      {steps.map(({ title, description, icon, ...props }, i) => (
        <li
          key={i}
          className={cn(
            "relative flex items-start",
            i !== steps.length - 1 && "pb-12",
          )}
          {...storyblokEditable(props)}
        >
          {i !== steps.length - 1 && (
            <div
              className="absolute left-8 top-0 -ml-0.5 mt-0.5 h-full w-px border-l-4 border-dotted border-muted-foreground"
              aria-hidden="true"
            />
          )}

          <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-foreground">
            <Icon name={icon[0].name} className="h-10 w-10 text-primary" />
          </div>
          <div className="ml-6">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            {description && (
              <p className="mt-2 text-base text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
