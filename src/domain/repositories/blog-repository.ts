import type { BlogPost } from "../entities/blog-post";

/**
 * Port the application layer depends on. Infrastructure provides the
 * implementation (e.g. Hashnode's GraphQL API) — the rest of the app never
 * knows or cares where posts actually come from.
 */
export interface BlogRepository {
  getLatestPosts(limit: number): Promise<BlogPost[]>;
}
