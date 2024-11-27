import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import { H2, Paragraph } from "@/components/ui/typography";
import { ServiceBlock, type ServicesBlockProps } from "./service-block";

export type ServicesSectionProps = {
  component: "servicesSection";
  services: ServicesBlockProps[];
  title?: string;
  description?: string;
} & SbBlokData;

export function ServicesSection({
  services,
  title,
  description,
  ...props
}: ServicesSectionProps) {
  return (
    <section
      {...storyblokEditable(props)}
      className="container flex flex-col gap-12"
    >
      {(title || description) && (
        <div className="mx-auto flex w-full flex-col items-center">
          {title && <H2>{title}</H2>}
          {description && <Paragraph>{description}</Paragraph>}
        </div>
      )}
      {services.map((service, i) => (
        <ServiceBlock key={i} {...service} />
      ))}
    </section>
  );
}

export default ServicesSection;
