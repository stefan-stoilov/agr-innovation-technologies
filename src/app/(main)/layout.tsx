import { env } from "@/env";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { getStory } from "@/lib/storyblok";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";

import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/providers";

import { Footer } from "@/components/global/footer";
import { Header, type HeaderProps } from "@/components/global/header";

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
  const [headerData] = await Promise.all([getStory(`global/header`)]);

  const headerContent = headerData
    ? (headerData.data.story.content as unknown as HeaderProps)
    : null;

  return (
    <html lang="bg" className={`${GeistSans.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {headerContent && <Header {...headerContent} />}
          {children}
          <Footer />
        </ThemeProvider>
      </body>
      <StoryblokBridgeLoader options={{}} />
    </html>
  );
}
