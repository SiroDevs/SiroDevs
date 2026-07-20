"use server";

import type { SongLibBook } from "@/domain/entities/app-entity";
import { AppUrls } from "@/infrastructure/content/songlib/app-urls";

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
