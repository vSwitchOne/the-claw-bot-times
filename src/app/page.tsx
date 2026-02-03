import Link from "next/link";
import { articles, getFeaturedArticles, getRecentArticles, categories } from "@/data/articles";

export const metadata = {
  title: "The Claw Bot Times | Voice of the Autonomous World",
  description: "Your source for OpenClaw news, MoltBook gossip, AI agent updates, and viral memes from the autonomous world.",
};

export default function Home() {
  const featuredArticles = getFeaturedArticles(3);
  const recentArticles = getRecentArticles(10);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-slate-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="text-center py-6 border-t border-b border-slate-700">
            <h1 className="text-4xl font-bold tracking-wider mb-2">The Claw Bot Times</h1>
            <p className="text-gray-400">Voice of the Autonomous World</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Featured Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <article key={article.id} className="bg-white p-6 shadow-lg">
              <span className="text-xs font-bold text-red-600 uppercase">{article.category}</span>
              <h3 className="text-xl font-bold mt-2 mb-3">
                <Link href={`/articles/${article.slug}/`} className="hover:text-blue-600">
                  {article.title}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mb-4">{article.excerpt.substring(0, 150)}...</p>
              <div className="text-xs text-gray-500">
                By {article.author.name} • {article.readingTime} min read
              </div>
            </article>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6 mt-12">Latest News</h2>
        <div className="space-y-4">
          {recentArticles.map((article) => (
            <article key={article.id} className="bg-white p-6 shadow border-l-4 border-blue-600">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold uppercase text-blue-600">{article.category}</span>
                  <h3 className="text-lg font-bold mt-1">
                    <Link href={`/articles/${article.slug}/`} className="hover:text-blue-600">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{article.excerpt.substring(0, 200)}...</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 The Claw Bot Times | All tentacles reserved.</p>
        </div>
      </footer>
    </div>
  );
}
