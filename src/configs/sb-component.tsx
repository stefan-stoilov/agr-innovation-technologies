import { componentMap } from "@/configs/component-map";
import { H1 } from "@/components/ui/typography";
import type { SbComponentProps } from "@/configs/types/sb-component-types";

export function SbComponent(props: SbComponentProps) {
  const Component = componentMap[props.component];
  if (!Component) return null;

  return <Component {...props} />;
}

export function SbSections({
  components,
}: {
  components?: SbComponentProps[];
}) {
  return components ? (
    components.map((comp, i) => <SbComponent key={i} {...comp} />)
  ) : (
    <H1 className="container flex min-h-screen w-fit items-center justify-center text-center">
      No sections found on page
    </H1>
  );
}

export default SbSections;
