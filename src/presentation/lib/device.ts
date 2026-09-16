export type Platform = "ios" | "android" | "other";

export interface DetectedDevice {
  platform: Platform;
  /** Human-readable device name, e.g. "iPhone", "Samsung", "Android device". */
  label: string;
}

/**
 * Detects the visitor's device from the user agent. Client-side only —
 * always returns "other" during server rendering.
 */
export function detectDevice(): DetectedDevice {
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

export interface InstallCta {
  href: string;
  /** Full personalized label, e.g. "Install SongLib on your iPhone". */
  label: string;
}

/**
 * Resolves a single, personalized install CTA when the visitor's platform is
 * known. Returns null when the device is ambiguous (desktop, bots, etc.) so
 * the caller can fall back to showing every available store.
 */
export function getInstallCta(
  device: DetectedDevice,
  appName: string,
  androidUrl: string,
  iosUrl?: string
): InstallCta | null {
  if (device.platform === "ios" && iosUrl) {
    return { href: iosUrl, label: `Install ${appName} on your ${device.label}` };
  }
  if (device.platform === "android") {
    return { href: androidUrl, label: `Install ${appName} on your ${device.label}` };
  }
  return null;
}
