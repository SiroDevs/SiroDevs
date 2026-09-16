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
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

export default function FeaturesGrid({
  features,
  glowClassName,
  iconColor = "#FFF",
  eyebrow,
  title,
  subtitle,
}: FeaturesGridProps) {
  return (
    <section className="container-page py-14 sm:py-20">
      {(eyebrow || title || subtitle) && (
        <div className="mb-8 max-w-xl sm:mb-10">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {title && (
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink dark:text-cloud sm:text-3xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-2 text-sm text-ink-soft dark:text-cloud-soft sm:text-base">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
        {features.map((feature, i) => {
          const Icon = resolveIcon(feature.icon);
          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="w-[76%] shrink-0 snap-start sm:w-auto"
            >
              <GlowCard
                identifier={`feature-${feature.id}`}
                className={glowClassName}
              >
                <div className="relative flex h-full flex-col gap-3 p-4 sm:p-5">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/10"
                      style={{ color: iconColor }}
                    >
                      <Icon
                        size={16}
                        strokeWidth={2}
                        className="flex-shrink-0"
                      />
                    </div>
                    <p className="text-sm font-semibold leading-snug sm:text-[0.95rem]">
                      {feature.title}
                    </p>
                  </div>
                  <p className="text-[0.83rem] leading-relaxed opacity-80 sm:text-sm">
                    {feature.description}
                  </p>
                </div>
              </GlowCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
