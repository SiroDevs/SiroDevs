"use client";

import { motion } from "framer-motion";
import {
  Search,
  WifiOff,
  Library,
  Languages,
  BookOpen,
  MonitorPlay,
  PenLine,
  ListMusic,
  Heart,
  History,
  RefreshCw,
  Palette,
  Bookmark,
  CalendarClock,
  Route,
  Layers,
  ListChecks,
  Quote,
  Sparkles,
  Users,
  Gamepad2,
  Trophy,
  CloudDownload,
  Compass,
  Footprints,
  type LucideIcon,
} from "lucide-react";

import GlowCard from "@/presentation/components/microsite/GlowCard";
import type { AppFeature } from "@/domain/entities/app-entity";

const ICONS: Record<string, LucideIcon> = {
  search: Search,
  offline: WifiOff,
  library: Library,
  languages: Languages,
  book: BookOpen,
  presenter: MonitorPlay,
  drafts: PenLine,
  listings: ListMusic,
  favorites: Heart,
  history: History,
  sync: RefreshCw,
  personalize: Palette,
  bookmarks: Bookmark,
  schedule: CalendarClock,
  route: Route,
  translations: Layers,
  lists: ListChecks,
  quote: Quote,
  daily: Sparkles,
  social: Users,
  games: Gamepad2,
  progress: Trophy,
  download: CloudDownload,
  save: Compass,
  activity: Footprints,
};

function resolveIcon(key?: string): LucideIcon {
  return (key && ICONS[key]) || Sparkles;
}

interface FeaturesGridProps {
  features: AppFeature[];
  glowClassName?: string;
  iconColor?: string;
  title?: string;
  subtitle?: string;
}

export default function FeaturesGrid({
  features,
  glowClassName,
  iconColor = "#FFF",
  title,
  subtitle,
}: FeaturesGridProps) {
  return (
    <div className="py-6 sm:py-10">
      {(title || subtitle) && (
        <div className="mb-6 text-center sm:mb-10">
          {title && (
            <h2 className="font-display text-xl font-semibold tracking-tight text-ink dark:text-cloud sm:text-2xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mx-auto mt-1.5 max-w-md text-sm text-ink-soft dark:text-cloud-soft">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {features.map((feature, i) => {
          const Icon = resolveIcon(feature.icon);
          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            >
              <GlowCard
                identifier={`feature-${feature.id}`}
                className={glowClassName}
              >
                <div className="relative flex h-full flex-col gap-2 p-4 sm:p-5">
                  <div
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10"
                    style={{ color: iconColor }}
                  >
                    <Icon size={16} strokeWidth={2} className="flex-shrink-0" />
                  </div>
                  <p className="text-sm font-semibold leading-snug sm:text-[0.95rem]">
                    {feature.title}
                  </p>
                  <p className="text-[0.83rem] leading-relaxed opacity-80 sm:text-sm">
                    {feature.description}
                  </p>
                </div>
              </GlowCard>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
