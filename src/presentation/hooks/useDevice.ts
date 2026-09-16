"use client";

import { useEffect, useState } from "react";
import { detectDevice, type DetectedDevice } from "@/presentation/lib/device";

/** Returns the visitor's detected device, resolved after mount (SSR-safe). */
export function useDevice(): DetectedDevice {
  const [device, setDevice] = useState<DetectedDevice>({ platform: "other", label: "" });

  useEffect(() => {
    setDevice(detectDevice());
  }, []);

  return device;
}
