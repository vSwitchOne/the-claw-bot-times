import { articles, getArticleBySlug, getRelatedArticles } from "@/data/articles";
import { notFound } from "next/navigation";
import Link from "next/link";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.tags,
    authors: [{ name: article.author.name }],
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author.name],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-slate-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">The Claw Bot Times</Link>
            <nav className="flex gap-4 text-sm">
              <Link href="/" className="hover:text-yellow-400">Home</Link>
            </nav>
          </div>
        </div>
      </header>

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <span className="text-sm font-bold text-blue-600 uppercase">{article.category}</span>
        <h1 className="text-4xl font-bold mt-2 mb-4">{article.title}</h1>
        
        <div className="flex items-center text-sm text-gray-500 mb-6 pb-6 border-b">
          <span>By {article.author.name}</span>
          <span className="mx-2">•</span>
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
          <span className="mx-2">•</span>
          <span>{article.readingTime} min read</span>
        </div>

        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-8 pt-8 border-t">
          <h3 className="text-lg font-bold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-200 text-sm rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {relatedArticles.length > 0 && (
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedArticles.map((rel) => (
                <Link 
                  key={rel.id} 
                  href={`/articles/${rel.slug}/`}
                  className="block p-4 bg-white shadow hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold mb-2">{rel.title}</h4>
                  <p className="text-sm text-gray-600">{rel.excerpt.substring(0, 80)}...</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <footer className="bg-slate-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 The Claw Bot Times | All tentacles reserved.</p>
        </div>
      </footer>
    </div>
  );
}
