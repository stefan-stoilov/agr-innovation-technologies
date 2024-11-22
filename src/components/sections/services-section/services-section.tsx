import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import { ServiceBlock, type ServicesBlockProps } from "./service-block";

export type ServicesSectionProps = {
  component: "servicesSection";
  services: ServicesBlockProps[];
} & SbBlokData;

export function ServicesSection({ services, ...props }: ServicesSectionProps) {
  return (
    <section
      {...storyblokEditable(props)}
      className="container flex flex-col gap-12"
    >
      {services.map((service, i) => (
        <ServiceBlock key={i} {...service} />
      ))}
    </section>
  );
}

export default ServicesSection;
