import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { SbImage, SbLink, MappedSbLink } from "@/configs/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function hasSbImage(image: SbImage | undefined): boolean {
  return Boolean(image && typeof image.filename === "string");
}

export function mapSbLink(link: SbLink | undefined): MappedSbLink | null {
  if (typeof link === "undefined") return null;

  const { url, linktype, target, cached_url } = link;

  if (!cached_url && !url) return null;

  let href = url;

  if (linktype === "story") href = cached_url === "home" ? "/" : cached_url;

  if (linktype === "email") href = `mailto:${url}`;

  return {
    href,
    target: target || "_self",
  };
}
