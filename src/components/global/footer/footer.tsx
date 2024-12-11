import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import type { SbLink } from "@/configs/types";
import { mapSbLink } from "@/lib/utils";
import Link from "next/link";

export type FooterProps = {
  columns: LinkListProps[];
} & SbBlokData;

type LinkListProps = {
  title?: string;
  links: LinkProps[];
} & SbBlokData;

type LinkProps = {
  label: string;
  url: SbLink;
  isMock: boolean;
} & SbBlokData;

export function Footer({ columns, ...props }: FooterProps) {
  return (
    <div className="container">
      <footer {...storyblokEditable(props)}>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          <div className="col-span-2 flex items-start">
            <div className="flex items-end">
              <div className="relative h-10 w-10 ">
                <img
                  src="https://a.storyblok.com/f/314066/264x250/9affc3d363/agr_logo.png/m/250x0?cv=1733143581014"
                  alt="logo"
                  className="absolute h-full w-full object-cover"
                />
              </div>
              <p className="text-4xl font-bold text-primary">AGR</p>
            </div>
          </div>

          {columns.map((col, i) => (
            <div key={i}>
              {col.title && <p className="mb-4 font-bold">{col.title}</p>}
              <ul className="space-y-4 text-muted-foreground">
                {col.links.map(({ label, isMock, url }, linkIdx) => (
                  <li key={linkIdx} className="font-medium hover:text-primary">
                    {isMock || !mapSbLink(url) ? (
                      <a href={"#"}>{label}</a>
                    ) : (
                      <Link {...mapSbLink(url)}>{label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="my-12 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
          <p>© 2024 AGR Innovation Technologies.</p>
        </div>
      </footer>
    </div>
  );
}
