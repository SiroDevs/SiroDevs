"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import type { AppInfo } from "@/domain/entities/app-entity";
import { useDevice } from "@/presentation/hooks/useDevice";
import { detectDevice, getStoreVisibility } from "@/presentation/lib/device";

interface HeroSectionProps {
  info: AppInfo;
  androidUrl: string;
  iosUrl?: string;
  texts: string[];
  heroImage?: string;
  ctaGradient: string;
  accent: string;
  availabilityText: string;
  rotateIntervalMs?: number;
}

export default function HeroSection({
  info,
  androidUrl,
  iosUrl,
  texts,
  heroImage,
  ctaGradient,
  accent,
  availabilityText,
  rotateIntervalMs = 2800,
}: HeroSectionProps) {
  const [index, setIndex] = useState(0);
  const device = useDevice();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, rotateIntervalMs);
    return () => clearInterval(interval);
  }, [texts.length, rotateIntervalMs]);
  const storeVisibility = useMemo(() => {
    if (typeof window === "undefined") return "all" as const;
    return getStoreVisibility(detectDevice(), iosUrl);
  }, [iosUrl]);
  const showAndroid =
    storeVisibility === "android" || storeVisibility === "all";
  const showIos =
    (storeVisibility === "ios" || storeVisibility === "all") && !!iosUrl;

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-[85%] rounded-full opacity-25 blur-3xl sm:h-[26rem] sm:w-[26rem]"
          style={{ backgroundColor: accent }}
        />
        <div
          className="absolute -top-16 left-1/2 h-72 w-72 translate-x-[10%] rounded-full opacity-[0.15] blur-3xl sm:h-96 sm:w-96"
          style={{ backgroundColor: accent }}
        />
      </div>

      <div
        className={`container-page grid grid-cols-1 items-center gap-10 py-14 sm:py-20 ${
          heroImage
            ? "lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-8 lg:py-24"
            : "lg:py-28"
        }`}
      >
        <div
          className={`flex flex-col items-center text-center ${heroImage ? "lg:items-start lg:text-left" : ""}`}
        >
          <div className="mb-5 flex items-center gap-2.5">
            <Image
              src={info.appIcon}
              alt=""
              width={100}
              height={100}
              loading="eager"
              className="h-27 w-27 rounded-[20%] object-cover shadow-md ring-1 ring-black/5"
            />
          </div>

          <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-ink dark:text-cloud sm:text-5xl lg:text-[3.4rem]">
            {info.appName}
          </h1>
          <h3 className="max-w-xl text-xl font-semibold leading-tight tracking-tight text-ink/70 dark:text-cloud/70 sm:text-2xl">
            {info.tagline}
          </h3>
          <div className="relative mt-4 h-6 w-full max-w-md overflow-hidden text-base font-medium text-ink-soft dark:text-cloud-soft sm:text-lg">
            <AnimatePresence mode="wait">
              <motion.p
                key={texts[index]}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-x-0 lg:inset-x-auto"
              >
                {texts[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="mt-7 flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              {showAndroid && (
                <a
                  href={androidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get it on Google Play"
                >
                  <Image
                    src="/images/android.png"
                    alt="Get it on Google Play"
                    width={160}
                    height={50}
                    loading="eager"
                    className="h-10 w-auto rounded-md"
                  />
                </a>
              )}

              {showIos && (
                <a
                  href={iosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download on the App Store"
                >
                  <Image
                    src="/images/ios.png"
                    alt="Download on the App Store"
                    width={160}
                    height={50}
                    loading="eager"
                    className="h-10 w-auto rounded-md"
                  />
                </a>
              )}
            </div>

            <p className="text-xs text-ink-faint dark:text-cloud-soft">
              Available on {availabilityText}
            </p>
          </div>
        </div>

        {heroImage && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative aspect-[16/10] w-full"
          >
            <Image
              src={heroImage}
              alt={`${info.appName} shown on a phone screen`}
              fill
              sizes="(min-width: 1024px) 55vw, 92vw"
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
