import dynamic from "next/dynamic";

const iconMap = {
  zap: dynamic(() => import("lucide-react").then((mod) => mod.Zap)),
  leaf: dynamic(() => import("lucide-react").then((mod) => mod.Leaf)),
  sprout: dynamic(() => import("lucide-react").then((mod) => mod.Sprout)),
};

export type IconProps = {
  name: keyof typeof iconMap;
  className?: string;
};

export function Icon({ name, className }: IconProps) {
  console.log(name);
  const LucideIcon = iconMap[name];
  if (!LucideIcon) return null;

  return <LucideIcon className={className} />;
}
