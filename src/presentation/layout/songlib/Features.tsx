"use client";

import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

import { features } from "@/infrastructure/content/songlib/features";
import { theme } from "@/infrastructure/content/songlib/theme";
import type { SongLibBook } from "@/domain/entities/app-entity";
import { fetchBooks } from "@/infrastructure/songlib/songlib-api";
import FeaturesGrid from "@/presentation/components/microsite/FeaturesGrid";
import BookCard from "@/presentation/layout/songlib/BookCard";

export default function Features() {
  const [books, setBooks] = useState<SongLibBook[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await fetchBooks();
        if (data) {
          setBooks(data);
        } else {
          setError("Failed to load books.");
        }
      } catch (err) {
        console.error("Error fetching books:", err);
        setError("An error occurred while fetching books.");
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  return (
    <section id="features">
      <div className="w-full">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {loading ? (
            <span></span>
          ) : error ? (
            <p>{error}</p>
          ) : books.length > 0 ? (
            books.map((book) => <BookCard book={book} key={book.bookId} />)
          ) : (
            <p>Loading data ...</p>
          )}
        </Marquee>
      </div>

      <FeaturesGrid
        features={features}
        glowClassName={theme.glowClassName}
        iconColor={theme.iconColor}
      />
    </section>
  );
}
