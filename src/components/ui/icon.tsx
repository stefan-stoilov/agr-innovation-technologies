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
