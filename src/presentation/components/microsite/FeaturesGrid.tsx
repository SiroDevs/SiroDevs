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
    <div className="py-8">
      {(title || subtitle) && (
        <div className="mb-8 text-center">
          {title && (
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink dark:text-cloud">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-2 text-sm sm:text-base text-ink-soft dark:text-cloud-soft">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                <div className="relative flex h-full flex-col gap-2 p-4">
                  <div
                    className="inline-flex gap-3 transition-transform duration-300 hover:scale-105"
                    style={{ color: iconColor }}
                  >
                    <div
                      className="inline-flex h-7 items-center justify-center rounded-xl bg-white/10 px-2"
                      style={{ color: iconColor }}
                    >
                      <Icon
                        size={18}
                        strokeWidth={2}
                        className="flex-shrink-0"
                      />
                    </div>
                    <p className="text-base sm:text-md font-semibold leading-snug">
                      {feature.title}
                    </p>
                  </div>
                  <p className="text-sm sm:text-[0.95rem] leading-relaxed opacity-90">
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
