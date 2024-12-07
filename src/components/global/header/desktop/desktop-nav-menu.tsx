"use client";
import * as React from "react";
import type { NavMenuItemProps, NavMenuProps } from "../types";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn, mapSbLink } from "@/lib/utils";
import Link from "next/link";

export type NavMenuDesktopProps = {
  title: string;
  description: string;
  menus: (NavMenuProps | NavMenuItemProps)[];
};

export function NavMenuDesktop({
  title,
  description,
  menus,
}: NavMenuDesktopProps) {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {menus?.map((menu, i) =>
          menu.component === "navMenu" ? (
            <NavigationMenuItem key={i}>
              <NavigationMenuTrigger>{menu.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                {menu.style === "main" ? (
                  <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <div className="row-span-3">
                      <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                        <div className="h-6 w-6" />
                        <div className="mb-2 mt-1 text-lg font-medium">
                          {title}
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          {description}
                        </p>
                      </div>
                    </div>

                    <ul className="grid grid-cols-2 gap-4">
                      {menu.items?.map((item, idx) => (
                        <li className="flex flex-col" key={idx}>
                          <span className="block font-bold">{item.title}</span>
                          {item.description && (
                            <span className="block">{item.description}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {menu.items?.map((item, idx) => {
                      const link = mapSbLink(item.link);

                      return link ? (
                        <ListItem
                          key={idx}
                          title={item.title}
                          href={link.href}
                          target={link.target}
                        >
                          {item.description}
                        </ListItem>
                      ) : (
                        <ListItem key={idx} title={item.title}>
                          {item.description}
                        </ListItem>
                      );
                    })}
                    {/* <Link href={"#"} title={"Виж още"}></Link> */}
                  </ul>
                )}
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={i}>
              {mapSbLink(menu.link) === null ? (
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {menu.title}
                </NavigationMenuLink>
              ) : (
                <Link
                  href={mapSbLink(menu.link).href}
                  target={mapSbLink(menu.link).target}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {menu.title}
                  </NavigationMenuLink>
                </Link>
              )}
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
