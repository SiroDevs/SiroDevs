/**
 * Core business object for a published article.
 * No framework, fetch, or GraphQL detail leaks in here — infrastructure
 * adapters are responsible for mapping their raw payloads into this shape.
 */
export interface BlogPost {
  id: string;
  title: string;
  brief: string;
  url: string;
  publishedAt: string;
  readTimeInMinutes: number;
  coverImageUrl: string | null;
}
