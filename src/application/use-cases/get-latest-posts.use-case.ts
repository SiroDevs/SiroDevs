import type { BlogPost } from "@/domain/entities/blog-post";
import type { BlogRepository } from "@/domain/repositories/blog-repository";

/**
 * Fetches the latest posts for the homepage blog section.
 * Deliberately fails soft: a broken or slow blog API should never take the
 * rest of the portfolio down with it, so any repository error resolves to
 * an empty list and the UI renders its own fallback state.
 */
export class GetLatestPostsUseCase {
  constructor(private readonly blogRepository: BlogRepository) {}

  async execute(limit = 3): Promise<BlogPost[]> {
    try {
      return await this.blogRepository.getLatestPosts(limit);
    } catch (error) {
      console.error("GetLatestPostsUseCase failed:", error);
      return [];
    }
  }
}
