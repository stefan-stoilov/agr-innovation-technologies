import { env } from "@/env";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { getStory } from "@/lib/storyblok";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";

import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/providers";

import { Header, type HeaderProps } from "@/components/global/header";
import { Footer, type FooterProps } from "@/components/global/footer";

export const metadata = {
  title: "AGR Innovation Technologies",
  // description: "NextJS App Router with Storyblok CMS",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

storyblokInit({
  accessToken: env.STORYBLOK_TOKEN,
  use: [apiPlugin],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [headerData, footerData] = await Promise.all([
    getStory("global/header"),
    getStory("global/footer"),
  ]);

  const headerContent = headerData
    ? (headerData.data.story.content as unknown as HeaderProps)
    : null;

  const footerContent = footerData
    ? (footerData.data.story.content as unknown as FooterProps)
    : null;

  return (
    <html lang="bg" className={`${GeistSans.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {headerContent && <Header {...headerContent} />}
          {children}
          {headerContent && <Footer {...footerContent} />}
        </ThemeProvider>
      </body>
      <StoryblokBridgeLoader options={{}} />
    </html>
  );
}
