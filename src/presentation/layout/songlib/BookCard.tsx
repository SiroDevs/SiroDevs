import type { SongLibBook } from "@/domain/entities/app-entity";

export default function BookCard({ book }: { book: SongLibBook }) {
  return (
    <div className="mx-2.5 flex h-28 w-28 shrink-0 cursor-pointer flex-col items-center justify-center rounded-full border border-orange-700/30 bg-paper p-4 text-center shadow-md transition-transform duration-300 hover:scale-110 dark:bg-night sm:mx-3 sm:h-32 sm:w-32">
      <h4 className="text-sm font-semibold leading-snug text-ink dark:text-cloud">
        {book.title.replace("''", "'")}
      </h4>
      <p className="mt-0.5 text-xs text-ink-soft dark:text-cloud-soft">
        {book.songs} {book.subTitle}
      </p>
    </div>
  );
}

export function BookCardSkeleton() {
  return (
    <div className="mx-2.5 h-28 w-28 shrink-0 animate-pulse rounded-full bg-ink/5 dark:bg-cloud/5 sm:mx-3 sm:h-32 sm:w-32" />
  );
}
