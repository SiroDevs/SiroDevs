"use client";

import { MdDownload } from "react-icons/md";
import Image from "next/image";

import type { AppInfo } from "@/domain/entities/app-entity";
import { useDevice } from "@/presentation/hooks/useDevice";

interface CtaBannerProps {
  info: AppInfo;
  androidUrl: string;
  iosUrl?: string;
  ctaGradient: string;
}

export default function CtaBanner({
  info,
  androidUrl,
  iosUrl,
  ctaGradient,
}: CtaBannerProps) {
  const device = useDevice();

  return (
    <section className="container-page py-6 sm:py-10">
      <div
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${ctaGradient} px-6 py-14 text-center sm:px-12 sm:py-16`}
      >
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
          Get {info.appName} today
        </h2>
        <p className="mx-auto mt-2 max-w-sm text-sm text-white/80 sm:text-base">
          Free to download, and works great offline.
        </p>

        <div className="mt-7 flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
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
            {iosUrl && (
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
        </div>
      </div>
    </section>
  );
}
