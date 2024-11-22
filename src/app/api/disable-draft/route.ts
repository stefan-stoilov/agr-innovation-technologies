import { cookies, draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { checkForGlobalSlug, getSlugAndLang } from "@/lib/storyblok";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const { slug, lang } = getSlugAndLang(searchParams.get("slug"));

  draftMode().disable();
  cookies()
    .getAll()
    .forEach((cookie) => {
      cookies().set(cookie.name, cookie.value, {
        sameSite: "none",
        secure: true,
      });
    });

  redirect(
    checkForGlobalSlug(slug) ? "/" : `/${lang ? `${lang}/` : ""}${slug}`,
  );
}
