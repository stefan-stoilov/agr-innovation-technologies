import { env } from "@/env";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";
import { ThemeProvider } from "@/components/providers";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Footer } from "@/components/global/footer";
import { Header, type HeaderProps } from "@/components/global/header";
import { getStory } from "@/lib/storyblok";

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

  const headerContent = headerData.data.story.content as unknown as HeaderProps;

  return (
    <html lang="bg" className={`${GeistSans.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header {...headerContent} />
          {children}
          <Footer />
          {/* <div className="fixed bottom-4 right-4 md:bottom-[unset] md:top-4">
            <ThemeSwitcher />
          </div> */}
        </ThemeProvider>
      </body>
      <StoryblokBridgeLoader options={{}} />
    </html>
  );
}
