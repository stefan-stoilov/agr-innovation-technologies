import { env } from "@/env";
import {
  storyblokInit,
  apiPlugin,
  type ISbStoriesParams,
  type ISbStories,
} from "@storyblok/js";
import { draftMode } from "next/headers";
import type { SbPageResult } from "@/configs/types";

const isDev = env.NODE_ENV === "development";

const storyblokToken = env.STORYBLOK_TOKEN;

export const { storyblokApi } = storyblokInit({
  accessToken: storyblokToken,
  bridge: true,
  apiOptions: {
    cache: { type: "memory" },
  },
  use: [apiPlugin],
});

export async function getLinks() {
  const { isEnabled: isDraft } = draftMode();

  const { data } = (await storyblokApi.get(
    "cdn/links",
    {
      version: isDraft || isDev ? "draft" : "published",
    },
    {
      next: { revalidate: isDraft || isDev ? 1 : 60 * 10 },
    },
  )) as unknown as ISbStories;

  const links = data ? data.links : null;
  return links;
}

export async function getStory(
  slug: string,
  lang?: string,
): Promise<SbPageResult | null> {
  const { isEnabled: isDraft } = draftMode();

  const sbParams: ISbStoriesParams = {
    resolve_links: "url",
    version: isDraft || isDev ? "draft" : "published",
    cv: isDraft || isDev ? Date.now() : undefined,
    language: lang,
  };

  try {
    const result = (await storyblokApi.get(`cdn/stories/${slug}`, sbParams, {
      next: { revalidate: isDraft || isDev ? 1 : 60 * 10 },
    })) as unknown as SbPageResult;
    return result;
  } catch (error) {
    return null;
  }
}

export const excludedStorySlugs = new Set([
  "home",
  "header",
  "footer",
  "global/header",
  "global/footer",
]);

const languages = new Set(["bg"]);

export function getSlugAndLang(slug: string) {
  const [firstSlugPart, ...slugParts] = slug.split("/");

  if (languages.has(firstSlugPart)) {
    const lang = firstSlugPart;
    return {
      slug: slugParts.join("/"),
      lang,
    };
  } else {
    return { slug };
  }
}

export function checkForGlobalSlug(slug: string): boolean {
  return slug.startsWith("global/");
}
