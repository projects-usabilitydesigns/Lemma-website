"use client";

import {
  BarChart3,
  Target,
  Search,
  ScreenShare,
  MapPin,
  Sparkles,
  Layers,
  Shield,
  Zap,
  Users,
  BookOpen,
  Link,
  Tv,
  Wand2,
  MousePointerClick,
  LayoutGrid,
  ThumbsUp,
  Monitor,
  PlayCircle,
  Network,
  Building2,
  Server,
  Code,
  TrendingUp,
  ShieldCheck,
  CalendarCheck,
  type LucideIcon,
} from "lucide-react";

export const iconRegistry: Record<string, LucideIcon> = {
  BarChart3,
  Target,
  Search,
  ScreenShare,
  MapPin,
  Sparkles,
  Layers,
  Shield,
  Zap,
  Users,
  BookOpen,
  Link,
  Tv,
  Wand2,
  MousePointerClick,
  LayoutGrid,
  ThumbsUp,
  Monitor,
  PlayCircle,
  Network,
  Building2,
  Server,
  Code,
  TrendingUp,
  ShieldCheck,
  CalendarCheck,
};

export function IconBadge({
  name,
  accent,
  size = 44,
  iconSize = 22,
}: {
  name: string;
  accent: string;
  size?: number;
  iconSize?: number;
}) {
  const Icon = iconRegistry[name] ?? Target;
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        backgroundColor: accent,
      }}
      aria-hidden
    >
      <Icon
        style={{ width: iconSize, height: iconSize, color: "#fff" }}
        strokeWidth={2}
      />
    </span>
  );
}