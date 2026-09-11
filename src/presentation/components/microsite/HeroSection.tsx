"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MdDownload } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

import type { AppInfo } from "@/domain/entities/app-entity";

type Platform = "android" | "ios" | "other";

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "android";
  const ua = navigator.userAgent || "";
  if (/android/i.test(ua)) return "android";
  if (
    /iPhone|iPad|iPod/i.test(ua) ||
    (ua.includes("Macintosh") && navigator.maxTouchPoints > 1)
  ) {
    return "ios";
  }
  return "other";
}

interface HeroSectionProps {
  info: AppInfo;
  androidUrl: string;
  iosUrl?: string;
  texts: string[];
  heroImage: string;
  subheading: string;
  ctaGradient: string;
  ctaLabel?: string;
  availabilityText: string;
  noPlatformText?: string;
  rotateIntervalMs?: number;
}

export default function HeroSection({
  info,
  androidUrl,
  iosUrl,
  texts,
  heroImage,
  subheading,
  ctaGradient,
  ctaLabel,
  availabilityText,
  noPlatformText,
  rotateIntervalMs = 5000,
}: HeroSectionProps) {
  const [index, setIndex] = useState(0);
  const [platform, setPlatform] = useState<Platform>("android");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, rotateIntervalMs);
    return () => clearInterval(interval);
  }, [texts.length, rotateIntervalMs]);

  useEffect(() => {
    if (iosUrl) {
      setPlatform(detectPlatform());
    }
  }, [iosUrl]);

  const isIosVisitor = Boolean(iosUrl) && platform === "ios";
  const showFallback = Boolean(iosUrl) && platform === "other";
  const ctaHref = isIosVisitor ? iosUrl! : androidUrl;
  const ctaText = `Get ${info.appName} Today`;

  return (
    <section className="flex flex-col items-center justify-between py-2 lg:py-5">
      <Image
        src={heroImage}
        width={500}
        height={280}
        alt={`${info.appName}'s AppIcon`}
        className="rounded-lg transition-all duration-1000 hover:grayscale-0 hover:scale-110 cursor-pointer mb-1"
        priority
      />
      <h2 className="text-center font-bold text-2xl leading-10 text-ink dark:text-cloud">
        {subheading}
      </h2>

      <h1 className="text-ink dark:text-cloud font-bold rounded-md text-3xl sm:text-2xl md:text-xl lg:text-[2.2rem] leading-tight lg:leading-[2.8rem] mb-3">
        <div className="h-[3rem] flex justify-center items-center w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={texts[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute w-full text-center"
            >
              {texts[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </h1>

      {showFallback ? (
        <></>
      ) : (
        <>
          <a
            className={`flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r ${ctaGradient} px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold`}
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-xl">{ctaText}</span>
            <MdDownload size={16} />
          </a>

          <p className="text-ink-soft dark:text-cloud-soft text-sm mt-2">
            {availabilityText}
          </p>
        </>
      )}
    </section>
  );
}
