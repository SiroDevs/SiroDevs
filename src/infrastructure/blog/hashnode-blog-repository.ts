import type { BlogPost } from "@/domain/entities/blog-post";
import type { BlogRepository } from "@/domain/repositories/blog-repository";
import { site } from "@/config/site";

const HASHNODE_ENDPOINT = "https://gql.hashnode.com";

const LATEST_POSTS_QUERY = `
  query LatestPosts($host: String!, $limit: Int!) {
    publication(host: $host) {
      posts(first: $limit) {
        edges {
          node {
            id
            title
            brief
            url
            publishedAt
            readTimeInMinutes
            coverImage {
              url
            }
          }
        }
      }
    }
  }
`;

type HashnodePostNode = {
  id: string;
  title: string;
  brief: string;
  url: string;
  publishedAt: string;
  readTimeInMinutes: number;
  coverImage: { url: string } | null;
};

type HashnodeResponse = {
  data?: {
    publication?: {
      posts?: {
        edges?: { node: HashnodePostNode }[];
      };
    };
  };
};

/**
 * Talks to Hashnode's public GraphQL API and maps its response shape into
 * the domain's BlogPost entity. This is the only file in the codebase that
 * knows Hashnode exists.
 */
export class HashnodeBlogRepository implements BlogRepository {
  async getLatestPosts(limit: number): Promise<BlogPost[]> {
    const res = await fetch(HASHNODE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: LATEST_POSTS_QUERY,
        variables: { host: site.hashnodeHost, limit },
      }),
      // Revalidate hourly so new posts appear without a redeploy.
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Hashnode API responded with ${res.status}`);
    }

    const json: HashnodeResponse = await res.json();
    const edges = json.data?.publication?.posts?.edges ?? [];

    return edges.map(({ node }) => this.toDomain(node));
  }

  private toDomain(node: HashnodePostNode): BlogPost {
    return {
      id: node.id,
      title: node.title,
      brief: node.brief,
      url: node.url,
      publishedAt: node.publishedAt,
      readTimeInMinutes: node.readTimeInMinutes,
      coverImageUrl: node.coverImage?.url ?? null,
    };
  }
}
