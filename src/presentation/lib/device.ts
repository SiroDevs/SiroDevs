export type Platform = "ios" | "android" | "other";

export interface DetectedDevice {
  platform: Platform;
  label: string;
}

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

export type StorePlatform = "android" | "ios" | "all";

export function getStoreVisibility(
  device: DetectedDevice,
  iosUrl?: string
): StorePlatform {
  if (device.platform === "ios" && iosUrl) return "ios";
  if (device.platform === "android") return "android";
  return "all";
}