"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-40 flex items-center rounded-full bg-brand p-4 text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:bg-brand-dark";
const SCROLL_THRESHOLD = 50;

export default function ScrollToTop() {
  const [btnCls, setBtnCls] = useState<string>(`${DEFAULT_BTN_CLS} hidden`);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setBtnCls(DEFAULT_BTN_CLS);
      } else {
        setBtnCls(`${DEFAULT_BTN_CLS} hidden`);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onClickBtn = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className={btnCls} onClick={onClickBtn} aria-label="Scroll to top">
      <FaArrowUp />
    </button>
  );
}
