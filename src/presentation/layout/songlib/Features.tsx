"use client";

import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

import { features } from "@/infrastructure/content/songlib/features";
import { theme } from "@/infrastructure/content/songlib/theme";
import type { SongLibBook } from "@/domain/entities/app-entity";
import { fetchBooks } from "@/infrastructure/songlib/songlib-api";
import FeaturesGrid from "@/presentation/components/microsite/FeaturesGrid";
import BookCard, { BookCardSkeleton } from "@/presentation/layout/songlib/BookCard";

export default function Features() {
  const [books, setBooks] = useState<SongLibBook[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    const loadBooks = async () => {
      try {
        const data = await fetchBooks();
        if (!active) return;
        if (data) {
          setBooks(data);
        } else {
          setError("Failed to load books.");
        }
      } catch (err) {
        console.error("Error fetching books:", err);
        if (active) setError("An error occurred while fetching books.");
      } finally {
        if (active) setLoading(false);
      }
    };

    loadBooks();
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="py-14 sm:py-20">
      <div className="container-page mb-6 max-w-xl">
        <span className="eyebrow">Song Library</span>
        <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink dark:text-cloud sm:text-3xl">
          Songbooks in Your Pocket
        </h2>
        <p className="mt-2 text-sm text-ink-soft dark:text-cloud-soft sm:text-base">
          A growing hymnal library, synced and ready offline.
        </p>
      </div>

      <Marquee gradient={false} speed={80} pauseOnHover pauseOnClick>
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <BookCardSkeleton key={i} />)
          : books.map((book) => <BookCard book={book} key={book.bookId} />)}
      </Marquee>
      {error && (
        <p className="container-page mt-4 text-center text-sm text-ink-faint dark:text-cloud-soft">
          {error}
        </p>
      )}

      <FeaturesGrid
        features={features}
        glowClassName={theme.glowClassName}
        iconColor={theme.iconColor}
        eyebrow="Why SongLib"
        title="Everything You Need for Worship"
        subtitle="From search to full-screen presenting, offline and always ready."
      />
    </section>
  );
}
