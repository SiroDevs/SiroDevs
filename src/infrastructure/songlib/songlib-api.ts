"use server";

import type { SongLibBook } from "@/domain/entities/songlib";
import { AppUrls } from "@/infrastructure/content/songlib/app-urls";

/**
 * SongLib originally used axios for this; ported to `fetch` here so the
 * section doesn't need its own HTTP client alongside the rest of the site
 * (which already fetches Hashnode this way).
 */
export const fetchBooks = async (): Promise<SongLibBook[] | null> => {
  try {
    const res = await fetch(AppUrls.booksApi, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`Books API responded with ${res.status}`);
    return (await res.json()) as SongLibBook[];
  } catch (error) {
    console.error("Error fetching SongLib books:", error);
    return null;
  }
};
