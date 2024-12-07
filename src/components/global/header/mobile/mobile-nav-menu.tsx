"use client";
import type { NavMenuItemProps, NavMenuProps } from "../types";
import type { SbLink } from "@/configs/types";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { Menu } from "lucide-react";

import { mapSbLink } from "@/lib/utils";
import Link from "next/link";

export type NavMenuMobileProps = {
  title: string;
  description: string;
  menus: (NavMenuProps | NavMenuItemProps)[];
};

export function NavMenuMobile({
  title,
  description,
  menus,
}: NavMenuMobileProps) {
  return (
    <div className="flex w-full justify-end bg-background py-1 md:hidden">
      <Sheet>
        <SheetTrigger asChild className="block">
          <Button
            variant="outline"
            className="flex h-9 w-9 items-center justify-center p-0"
          >
            <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent className="px-0 pt-14">
          <Accordion
            type="multiple"
            className="no-scrollbar max-h-full overflow-auto px-6"
          >
            {menus?.map((menu, i) =>
              menu.component === "navMenu" ? (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{menu.title}</AccordionTrigger>
                  <AccordionContent asChild>
                    {menu.style === "main" ? (
                      <ul>
                        {menu.items?.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex flex-1 items-center justify-between px-2 py-4 font-medium"
                          >
                            <span className="block font-medium">
                              {item.title}
                            </span>
                            {item.description && (
                              <span className="block">{item.description}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <ul>
                        {menu.items?.map((item, idx) => (
                          <ListItem link={item.link} key={idx}>
                            <span className="block font-medium">
                              {item.title}
                            </span>
                            {item.description && (
                              <span className="block">{item.description}</span>
                            )}
                          </ListItem>
                        ))}
                      </ul>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <AccordionItem key={i} value={`item-${i}`}>
                  <LinkItem key={i} link={menu.link}>
                    <span className="block font-medium">{menu.title}</span>
                    {menu.description && (
                      <span className="block">{menu.description}</span>
                    )}
                  </LinkItem>
                </AccordionItem>
              ),
            )}
          </Accordion>

          <div className="absolute bottom-2 right-2">
            <ThemeSwitcher />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

type LinkItemProps = {
  link?: SbLink;
  children: React.ReactNode;
};

function ListItem({ link, children }: LinkItemProps) {
  const mappedLink = mapSbLink(link);

  return mappedLink ? (
    <li>
      <Link className="flex flex-col gap-1 px-2 py-3" {...mappedLink}>
        {children}
      </Link>
    </li>
  ) : (
    <li className="flex flex-col gap-1 px-2 py-3">{children}</li>
  );
}

function LinkItem({ link, children }: LinkItemProps) {
  const mappedLink = mapSbLink(link);

  return mappedLink ? (
    <Link className="flex flex-col gap-1 py-3" {...mappedLink}>
      {children}
    </Link>
  ) : (
    <p className="flex flex-col gap-1 py-3">{children}</p>
  );
}
