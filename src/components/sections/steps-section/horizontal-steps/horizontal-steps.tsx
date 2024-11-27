import type { StepProps } from "../steps-section";
import { Icon } from "@/components/ui/icon";
import { storyblokEditable } from "@storyblok/react/rsc";
// import { cn } from "@/lib/utils";

export function HorizontalSteps({ steps }: { steps: StepProps[] }) {
  return (
    <div className="relative mt-12 lg:mt-20">
      <ul className="relative grid grid-cols-1 gap-x-12 gap-y-12 text-center md:grid-cols-3">
        {steps.map(({ title, description, icon, ...props }, i) => (
          <li key={i} {...storyblokEditable(props)}>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-background shadow">
              <Icon name={icon[0].name} className="h-10 w-10 text-primary" />
            </div>

            <h3 className="mt-6 text-xl font-semibold leading-tight text-foreground md:mt-10">
              {title}
            </h3>
            <p className="mt-4 text-base text-muted-foreground">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
