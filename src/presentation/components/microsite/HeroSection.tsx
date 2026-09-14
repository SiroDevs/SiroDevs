"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MdDownload } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

import type { AppInfo } from "@/domain/entities/app-entity";

type Platform = "ios" | "android" | "other";

interface DetectedDevice {
  platform: Platform;
  /** Human-readable device name used in the CTA, e.g. "iPhone", "Samsung", "Android device". */
  label: string;
}

function detectDevice(): DetectedDevice {
  if (typeof navigator === "undefined") return { platform: "other", label: "" };
  const ua = navigator.userAgent || "";

  if (/iPad/i.test(ua) || (ua.includes("Macintosh") && navigator.maxTouchPoints > 1)) {
    return { platform: "ios", label: "iPad" };
  }
  if (/iPhone|iPod/i.test(ua)) {
    return { platform: "ios", label: "iPhone" };
  }
  if (/android/i.test(ua)) {
    const isSamsung = /SM-|Samsung|SAMSUNG|GT-/i.test(ua);
    return { platform: "android", label: isSamsung ? "Samsung" : "Android device" };
  }
  return { platform: "other", label: "" };
}

interface HeroSectionProps {
  info: AppInfo;
  androidUrl: string;
  iosUrl?: string;
  texts: string[];
  iconImage: string;
  heroImage: string;
  subheading: string;
  ctaGradient: string;
  availabilityText: string;
  rotateIntervalMs?: number;
}

export default function HeroSection({
  info,
  androidUrl,
  iosUrl,
  texts,
  iconImage,
  heroImage,
  subheading,
  ctaGradient,
  availabilityText,
  rotateIntervalMs = 4000,
}: HeroSectionProps) {
  const [index, setIndex] = useState(0);
  const [device, setDevice] = useState<DetectedDevice>({ platform: "other", label: "" });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, rotateIntervalMs);
    return () => clearInterval(interval);
  }, [texts.length, rotateIntervalMs]);

  useEffect(() => {
    setDevice(detectDevice());
  }, []);

  const btnClass = `group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r ${ctaGradient} px-6 py-3.5 text-sm font-semibold text-white no-underline shadow-lg shadow-black/10 transition-transform duration-200 hover:scale-[1.03] hover:text-white hover:no-underline active:scale-[0.98]`;

  // Visitor is on a known mobile platform: show a single, personalized CTA.
  if (device.platform === "ios" && iosUrl) {
    return (
      <Hero info={info} iconImage={iconImage} heroImage={heroImage} subheading={subheading} texts={texts} index={index}>
        <a className={btnClass} href={iosUrl} target="_blank" rel="noopener noreferrer">
          <MdDownload size={17} />
          Install {info.appName} on your {device.label}
        </a>
      </Hero>
    );
  }

  if (device.platform === "android") {
    return (
      <Hero info={info} iconImage={iconImage} heroImage={heroImage} subheading={subheading} texts={texts} index={index}>
        <a className={btnClass} href={androidUrl} target="_blank" rel="noopener noreferrer">
          <MdDownload size={17} />
          Install {info.appName} on your {device.label}
        </a>
      </Hero>
    );
  }

  // Desktop or unknown device: show every store the app is available on.
  return (
    <Hero info={info} iconImage={iconImage} heroImage={heroImage} subheading={subheading} texts={texts} index={index}>
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <a className={btnClass} href={androidUrl} target="_blank" rel="noopener noreferrer">
          <MdDownload size={17} />
          Install {info.appName} on Android
        </a>
        {iosUrl && (
          <a className={btnClass} href={iosUrl} target="_blank" rel="noopener noreferrer">
            <MdDownload size={17} />
            Install {info.appName} on iPhone
          </a>
        )}
      </div>
      <p className="mt-3 text-xs text-ink-faint dark:text-cloud-soft">{availabilityText}</p>
    </Hero>
  );
}

function Hero({
  info,
  iconImage,
  heroImage,
  subheading,
  texts,
  index,
  children,
}: {
  info: AppInfo;
  iconImage: string;
  heroImage: string;
  subheading: string;
  texts: string[];
  index: number;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center gap-4 py-6 text-center lg:flex-row lg:gap-12 lg:py-14 lg:text-left">
      <Image
        src={iconImage}
        width={220}
        height={220}
        alt={`${info.appName} app icon`}
        className="h-28 w-28 rounded-3xl shadow-xl shadow-black/10 sm:h-36 sm:w-36 lg:h-48 lg:w-48"
        priority
      />

      <div className="flex flex-col items-center lg:items-start">
        <p className="text-sm font-medium text-ink-soft dark:text-cloud-soft">{subheading}</p>

        <h1 className="mt-1 text-3xl font-bold leading-tight text-ink dark:text-cloud sm:text-4xl lg:text-5xl">
          <span className="relative inline-block h-[1.2em] min-w-[1px] overflow-hidden align-bottom">
            <AnimatePresence mode="wait">
              <motion.span
                key={texts[index]}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="block whitespace-nowrap"
              >
                {texts[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
