import type { SbBlokData } from "@storyblok/react/rsc";
import type { SbLink } from "@/configs/types";

export type NavMenuItemProps = {
  component: "navMenuItem";
  title: string;
  description?: string;
  link: SbLink;
}

export type NavMenuProps = {
  component: "navMenu";
  title: string;
  items: NavMenuItemProps[];
  style: "regular" | "main";
};
