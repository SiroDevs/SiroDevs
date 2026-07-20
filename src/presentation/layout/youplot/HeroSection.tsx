"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MdDownload } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

import { AppUrls } from "@/infrastructure/content/swahilib/app-urls";
import { info } from "@/infrastructure/content/swahilib/app-info";

const texts = ["Just plot it", "Just plan it"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center justify-between py-2 lg:py-5">
      <Image
        src="/swahilib/images/main_banner.png"
        width={500}
        height={280}
        alt={`${info.appName}'s AppIcon`}
        className="rounded-lg transition-all duration-1000 hover:grayscale-0 hover:scale-110 cursor-pointer mb-1"
        priority
      />
      <h2 className="text-center font-bold text-2xl leading-10 text-ink dark:text-cloud">
        On your phone ...
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

      <a
        className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-orange-600 to-red-900 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
        href={AppUrls.android}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-xl">Get YouPlot Today</span>
        <MdDownload size={16} />
      </a>

      <p className="text-ink-soft dark:text-cloud-soft text-sm mt-2">
        Available on Android only
      </p>
    </section>
  );
}
