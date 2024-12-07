import type { ComponentType } from "react";
import type {
  TeaserProps,
  GridProps,
  SpacerProps,
  ServicesSectionProps,
  PromoSectionProps,
  ImagesCarouselProps,
  ImageSectionProps,
  CardsSectionProps,
  HeroProps,
  FaqSectionProps,
  StickySideFeaturesProps,
  PartnersSectionProps,
  NumbersSectionProps,
  StepsSectionProps,
  GridStepsProps,
  ProductProps,
  ContactProps,
} from "@/components/sections/types";

export type SbComponentProps =
  | TeaserProps
  | GridProps
  | SpacerProps
  | ServicesSectionProps
  | PromoSectionProps
  | ImagesCarouselProps
  | ImageSectionProps
  | CardsSectionProps
  | HeroProps
  | FaqSectionProps
  | StickySideFeaturesProps
  | PartnersSectionProps
  | NumbersSectionProps
  | StepsSectionProps
  | GridStepsProps
  | ProductProps
  | ContactProps;

export type SbComponentKey = SbComponentProps["component"];

export type DynamicComponent = ComponentType<SbComponentProps>;

export type ComponentMap = Record<SbComponentKey, DynamicComponent>;

export type SbPageProps = {
  story: {
    content: {
      body: SbComponentProps[];
    };
  };
};

export type SbPageResult = {
  data: SbPageProps;
  perPage: number;
  total: number;
  headers: Headers;
};

export type SbImage = {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  filename: string;
  copyright: string;
  fieldtype: "asset";
  meta_data: { alt: string; title: string; source: string; copyright: string };
  is_private: boolean;
  is_external_url: boolean;
};

export type SbLink = {
  id: string;
  url: string;
  linktype: "story" | "url" | "asset" | "email";
  fieldtype: "multilink";
  target?: "_self" | "_blank";
  cached_url: string;
};

export type MappedSbLink = {
  href: string;
  target: "_self" | "_blank";
} | null;
