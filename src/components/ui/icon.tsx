import dynamic from "next/dynamic";

const iconMap = {
  zap: dynamic(() => import("lucide-react").then((mod) => mod.Zap)),
  leaf: dynamic(() => import("lucide-react").then((mod) => mod.Leaf)),
  sprout: dynamic(() => import("lucide-react").then((mod) => mod.Sprout)),
  vegan: dynamic(() => import("lucide-react").then((mod) => mod.Vegan)),
  "tree-pine": dynamic(() =>import("lucide-react").then((mod) => mod.TreePine)),
  trees: dynamic(() => import("lucide-react").then((mod) => mod.Trees)),
  mountain: dynamic(() => import("lucide-react").then((mod) => mod.Mountain)),
  unplug: dynamic(() => import("lucide-react").then((mod) => mod.Unplug)),
  "plug-zap": dynamic(() => import("lucide-react").then((mod) => mod.PlugZap)),
  recycle: dynamic(() => import("lucide-react").then((mod) => mod.Recycle)),
  sun: dynamic(() => import("lucide-react").then((mod) => mod.Sun)),
  map: dynamic(() => import("lucide-react").then((mod) => mod.Map)),
  pill: dynamic(() => import("lucide-react").then((mod) => mod.Pill)),
  binary: dynamic(() => import("lucide-react").then((mod) => mod.Binary)),
  plane: dynamic(() => import("lucide-react").then((mod) => mod.Plane)),
  droplet: dynamic(() => import("lucide-react").then((mod) => mod.Droplet)),
  database: dynamic(() => import("lucide-react").then((mod) => mod.Database)),
  microscope: dynamic(() => import("lucide-react").then((mod) => mod.Microscope)),
  percent: dynamic(() => import("lucide-react").then((mod) => mod.Percent)),
  weight: dynamic(() => import("lucide-react").then((mod) => mod.Weight)),
  "flask-conical": dynamic(() => import("lucide-react").then((mod) => mod.FlaskConical)),
  "flask-conical-off": dynamic(() => import("lucide-react").then((mod) => mod.FlaskConicalOff)),
  radio: dynamic(() => import("lucide-react").then((mod) => mod.Radio)),
  info: dynamic(() => import("lucide-react").then((mod) => mod.Info)),
  video: dynamic(() => import("lucide-react").then((mod) => mod.Video)),
  activity: dynamic(() => import("lucide-react").then((mod) => mod.Activity)),
  "scan-eye": dynamic(() => import("lucide-react").then((mod) => mod.ScanEye)),
  "scan-search": dynamic(() => import("lucide-react").then((mod) => mod.ScanSearch)),
  "shield-check": dynamic(() => import("lucide-react").then((mod) => mod.ShieldCheck)),
  "audio-lines": dynamic(() => import("lucide-react").then((mod) => mod.AudioLines)),
  "sun-snow": dynamic(() => import("lucide-react").then((mod) => mod.SunSnow)),
  "graduation-cap": dynamic(() => import("lucide-react").then((mod) => mod.GraduationCap)),
  "person-standing": dynamic(() => import("lucide-react").then((mod) => mod.PersonStanding)),
};

export type IconProps = {
  name: keyof typeof iconMap;
  className?: string;
};

export function Icon({ name, className }: IconProps) {
  const LucideIcon = iconMap[name];
  if (!LucideIcon) return null;

  return <LucideIcon className={className} />;
}
