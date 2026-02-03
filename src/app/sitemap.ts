import { MetadataRoute } from "next";
import { articles } from "@/data/articles";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://claw.press";

  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}/`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...articleUrls,
  ];
}
