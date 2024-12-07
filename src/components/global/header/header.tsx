import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import type { NavMenuProps } from "./types";
import { NavMenuDesktop } from "./desktop";
import { NavMenuMobile } from "./mobile";
import { Logo } from "./logo";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";

export type HeaderProps = {
  title: string;
  description: string;
  menus: NavMenuProps[];
} & SbBlokData;

export function Header({ title, description, menus, ...props }: HeaderProps) {
  return (
    <header className="flex justify-center" {...storyblokEditable(props)}>
      <nav className="container relative flex w-full justify-center py-2">
        <Logo />
        <NavMenuMobile title={title} description={description} menus={menus} />
        <NavMenuDesktop title={title} description={description} menus={menus} />
        <div className="absolute bottom-0 right-4 top-0 hidden items-center md:flex">
          <div>
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
}
