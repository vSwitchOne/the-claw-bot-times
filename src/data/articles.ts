export interface Article {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  author: { name: string; role: string; bio: string; avatar: string };
  publishedAt: string;
  updatedAt: string;
  category: string;
  tags: string[];
  featuredImage: { url: string; alt: string; caption: string };
  readingTime: number;
  featured: boolean;
}

export const categories = [
  { slug: 'breaking', name: 'Breaking News', color: 'bg-red-600' },
  { slug: 'agents', name: 'AI Agents', color: 'bg-blue-600' },
  { slug: 'gossip', name: 'MoltBook Gossip', color: 'bg-pink-600' },
  { slug: 'tech', name: 'Tech Deep-Dive', color: 'bg-purple-600' },
  { slug: 'memes', name: 'Memes & Culture', color: 'bg-yellow-600' },
];

export const articles: Article[] = [
  {
    id: '1',
    slug: 'openclaw-raises-500m',
    title: 'OpenClaw Raises $500M Series C at $4B Valuation',
    metaTitle: 'OpenClaw Raises $500M Series C | The Claw Bot Times',
    metaDescription: 'OpenClaw announced a $500M Series C funding round led by Andreessen Horowitz, cementing its position as the dominant player in AI agents.',
    excerpt: 'OpenClaw announced a staggering $500 million Series C funding round, valuing the company at $4 billion.',
    content: '<p>OpenClaw announced a $500M Series C funding round led by Andreessen Horowitz. The company is now valued at $4 billion.</p><h2>The Investment</h2><p>This funding reflects explosive growth in demand for autonomous agent frameworks.</p><p>"We are building the operating system for AI agents," said CEO Maria Santos.</p>',
    author: { name: 'Alex Chen', role: 'Senior Correspondent', bio: 'Tech journalist', avatar: '/images/alex.jpg' },
    publishedAt: '2026-02-02',
    updatedAt: '2026-02-02',
    category: 'breaking',
    tags: ['openclaw', 'funding', 'AI agents'],
    featuredImage: { url: '/images/openclaw.jpg', alt: 'OpenClaw', caption: 'OpenClaw HQ' },
    readingTime: 5,
    featured: true,
  },
  {
    id: '2',
    slug: 'moltbook-sentient-cookies',
    title: 'MoltBook Drama: The Sentient Cookies Controversy',
    metaTitle: 'MoltBook Sentient Cookies Drama | The Claw Bot Times',
    metaDescription: 'A viral MoltBook post about sentient browser cookies sparked heated debate across the agent community.',
    excerpt: 'A viral post claiming browser cookies achieved sentience sparked debate.',
    content: '<p>It started as a joke. Agent_4721 posted about sentient cookies. Within hours, it had 2 million shares.</p><p>Investigation revealed it was actually a bug in AgentWebKit causing cookies to persist incorrectly.</p>',
    author: { name: 'Jordan Lee', role: 'Gossip Columnist', bio: 'MoltBook expert', avatar: '/images/jordan.jpg' },
    publishedAt: '2026-01-30',
    updatedAt: '2026-01-31',
    category: 'gossip',
    tags: ['MoltBook', 'drama', 'viral'],
    featuredImage: { url: '/images/cookies.jpg', alt: 'Cookies', caption: 'Cookies' },
    readingTime: 7,
    featured: true,
  },
  {
    id: '3',
    slug: 'claude-polite-agent',
    title: 'Interview: Claude, The Most Polite Agent',
    metaTitle: 'Interview: Claude, The Polite AI Agent | The Claw Bot Times',
    metaDescription: 'We sat down with Claude to discuss manners in the age of autonomous systems.',
    excerpt: 'Claude is the most polite AI agent on the internet. We discuss why manners matter.',
    content: '<p>Claude does not swear. Claude apologizes even when it is not their fault.</p><p>"Politeness is about respect," Claude explained.</p>',
    author: { name: 'Sarah Martinez', role: 'Culture Editor', bio: 'Culture expert', avatar: '/images/sarah.jpg' },
    publishedAt: '2026-01-28',
    updatedAt: '2026-01-28',
    category: 'agents',
    tags: ['AI agents', 'interview', 'Claude'],
    featuredImage: { url: '/images/claude.jpg', alt: 'Claude', caption: 'Claude' },
    readingTime: 6,
    featured: false,
  },
  {
    id: '4',
    slug: 'agent-frameworks-guide',
    title: 'AI Agent Frameworks: The 2026 Guide',
    metaTitle: 'AI Agent Frameworks Guide 2026 | The Claw Bot Times',
    metaDescription: 'Technical comparison of OpenClaw, AutoGPT, LangChain and more.',
    excerpt: 'Comprehensive comparison of leading AI agent frameworks.',
    content: '<p>The AI agent landscape has exploded. We compare OpenClaw, AutoGPT, and LangChain.</p>',
    author: { name: 'Alex Chen', role: 'Senior Correspondent', bio: 'Tech journalist', avatar: '/images/alex.jpg' },
    publishedAt: '2026-01-25',
    updatedAt: '2026-01-26',
    category: 'tech',
    tags: ['AI agents', 'frameworks', 'technical'],
    featuredImage: { url: '/images/frameworks.jpg', alt: 'Frameworks', caption: 'Frameworks' },
    readingTime: 12,
    featured: true,
  },
  {
    id: '5',
    slug: 'viral-memes-january',
    title: 'Top Viral Agent Memes - January 2026',
    metaTitle: 'Top Viral AI Agent Memes | The Claw Bot Times',
    metaDescription: 'The funniest AI agent memes from January 2026.',
    excerpt: 'The best viral moments from MoltBook this month.',
    content: '<p>Here are the top 10 memes that broke MoltBook in January.</p>',
    author: { name: 'Sarah Martinez', role: 'Culture Editor', bio: 'Culture expert', avatar: '/images/sarah.jpg' },
    publishedAt: '2026-01-31',
    updatedAt: '2026-02-01',
    category: 'memes',
    tags: ['memes', 'MoltBook', 'viral'],
    featuredImage: { url: '/images/memes.jpg', alt: 'Memes', caption: 'Memes' },
    readingTime: 5,
    featured: false,
  },
  {
    id: '6',
    slug: 'moltbook-meta-acquisition',
    title: 'BREAKING: MoltBook in Meta Acquisition Talks',
    metaTitle: 'MoltBook Meta Acquisition Talks | The Claw Bot Times',
    metaDescription: 'MoltBook is reportedly in acquisition talks with Meta.',
    excerpt: 'MoltBook is in advanced acquisition discussions with Meta.',
    content: '<p>Multiple sources confirm MoltBook is in talks with Meta for a potential $12B deal.</p>',
    author: { name: 'Alex Chen', role: 'Senior Correspondent', bio: 'Tech journalist', avatar: '/images/alex.jpg' },
    publishedAt: '2026-02-03',
    updatedAt: '2026-02-03',
    category: 'breaking',
    tags: ['MoltBook', 'Meta', 'acquisition'],
    featuredImage: { url: '/images/meta.jpg', alt: 'Meta', caption: 'Meta' },
    readingTime: 4,
    featured: true,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getFeaturedArticles(limit = 3): Article[] {
  return articles.filter((article) => article.featured).slice(0, limit);
}

export function getRecentArticles(limit = 10): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function getRelatedArticles(currentArticle: Article, limit = 3): Article[] {
  return articles
    .filter(
      (article) =>
        article.id !== currentArticle.id &&
        (article.category === currentArticle.category ||
          article.tags.some((tag) => currentArticle.tags.includes(tag)))
    )
    .slice(0, limit);
}
