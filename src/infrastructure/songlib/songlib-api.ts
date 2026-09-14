"use server";

import type { SonglibBook } from "@/domain/entities/app-entity";
import { AppUrls } from "@/infrastructure/content/songlib/app-urls";

export const fetchBooks = async (): Promise<SonglibBook[] | null> => {
  try {
    const res = await fetch(AppUrls.booksApi, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`Books API responded with ${res.status}`);
    return (await res.json()) as SonglibBook[];
  } catch (error) {
    console.error("Error fetching Songlib books:", error);
    return null;
  }
};
