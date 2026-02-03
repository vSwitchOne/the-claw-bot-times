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
  { slug: 'industry', name: 'Industry', color: 'bg-green-600' },
  { slug: 'tech', name: 'Technology', color: 'bg-purple-600' },
];

export const articles: Article[] = [
  {
    id: '1',
    slug: 'openai-gpt5-development',
    title: 'OpenAI Accelerates GPT-5 Development Amidst Rising Competition',
    metaTitle: 'OpenAI GPT-5 Development | The Claw Bot Times',
    metaDescription: 'OpenAI ramps up GPT-5 development as Google, Anthropic, and open-source models intensify competition.',
    excerpt: 'OpenAI accelerates GPT-5 timeline as AI competition heats up with Google Gemini, Anthropic Claude advances.',
    content: '<p>OpenAI is accelerating GPT-5 development as the AI industry becomes increasingly competitive. Sources indicate the next-generation model could release sooner than planned.</p><h2>Competitive Landscape</h2><p>Google\'s Gemini models, Anthropic\'s Claude, and open-source alternatives like Llama and Mistral are pushing innovation at unprecedented pace.</p><p>"The gap between generations is shrinking," said Dr. Sarah Chen, Stanford AI researcher.</p><h2>Expected Improvements</h2><p>Industry experts anticipate advances in reasoning, multimodal understanding, and autonomous capabilities. OpenAI emphasizes extensive safety evaluations before release.</p>',
    author: { name: 'Alex Chen', role: 'Senior Correspondent', bio: 'Tech journalist', avatar: '/images/alex.jpg' },
    publishedAt: '2026-02-01',
    updatedAt: '2026-02-01',
    category: 'breaking',
    tags: ['OpenAI', 'GPT-5', 'AI development'],
    featuredImage: { url: '/images/openai.jpg', alt: 'OpenAI', caption: 'OpenAI HQ' },
    readingTime: 5,
    featured: true,
  },
  {
    id: '2',
    slug: 'autogpt-autonomous-agents',
    title: 'AutoGPT and the Rise of Autonomous AI Agents',
    metaTitle: 'AutoGPT: Autonomous AI Agents | The Claw Bot Times',
    metaDescription: 'AutoGPT and autonomous agent frameworks transform AI from tools to collaborators.',
    excerpt: 'AutoGPT enables AI systems that plan, execute, and iterate on complex tasks autonomously.',
    content: '<p>AutoGPT demonstrated that LLMs can be wrapped in architectures allowing goal-setting and task completion. This marks a shift from AI as tool to AI as collaborator.</p><h2>Enterprise Use</h2><p>Microsoft AutoGen, LangChain agents, and similar tools integrate into workflows. Results are promising but mixed—agents excel at persistence but struggle with precision.</p><h2>Challenges</h2><p>Memory management, error recovery, and safety guardrails are critical for unsupervised AI operation.</p>',
    author: { name: 'Priya Patel', role: 'Tech Analyst', bio: 'AI analyst', avatar: '/images/priya.jpg' },
    publishedAt: '2026-01-28',
    updatedAt: '2026-01-28',
    category: 'tech',
    tags: ['AutoGPT', 'AI agents', 'autonomous systems'],
    featuredImage: { url: '/images/autogpt.jpg', alt: 'AutoGPT', caption: 'AutoGPT workflow' },
    readingTime: 6,
    featured: true,
  },
  {
    id: '3',
    slug: 'anthropic-claude-enterprise',
    title: 'Anthropic Claude Gains Ground in Enterprise AI',
    metaTitle: 'Anthropic Claude Enterprise Growth | The Claw Bot Times',
    metaDescription: 'Claude sees rapid enterprise adoption with companies citing reliability and safety features.',
    excerpt: 'Anthropic\'s Claude gains Fortune 500 adoption, challenging OpenAI in business AI sector.',
    content: '<p>Anthropic\'s Claude is gaining enterprise traction. Focus on AI safety resonates with risk-conscious customers.</p><h2>Enterprise Features</h2><p>Claude\'s 200K token context window, constitutional AI approach, and reliability attract financial services, healthcare, and legal sectors.</p><h2>Market Position</h2><p>Anthropic has raised $750M in 2025. Amazon\'s $4B investment and Google partnerships strengthen position against OpenAI.</p>',
    author: { name: 'Sarah Martinez', role: 'Industry Reporter', bio: 'Business tech reporter', avatar: '/images/sarah.jpg' },
    publishedAt: '2026-01-25',
    updatedAt: '2026-01-25',
    category: 'industry',
    tags: ['Anthropic', 'Claude', 'enterprise AI'],
    featuredImage: { url: '/images/anthropic.jpg', alt: 'Anthropic', caption: 'Anthropic HQ' },
    readingTime: 5,
    featured: false,
  },
  {
    id: '4',
    slug: 'google-gemini-multimodal-ai',
    title: 'Google Gemini Advances Multimodal AI Capabilities',
    metaTitle: 'Google Gemini Multimodal AI | The Claw Bot Times',
    metaDescription: 'Google\'s Gemini models push boundaries in multimodal AI, integrating text, image, and video understanding.',
    excerpt: 'Google Gemini advances multimodal AI with integrated text, image, and video capabilities.',
    content: '<p>Google\'s Gemini models demonstrate significant advances in multimodal AI. The latest versions seamlessly process text, images, video, and audio within single conversations.</p><h2>Technical Advances</h2><p>Gemini\'s native multimodal architecture differs from competitors\' bolted-on approaches. This enables more natural interactions across media types.</p><h2>Market Impact</h2><p>Integration into Google Workspace, Android, and Search gives Gemini massive distribution advantage. Developers report strong API performance for multimodal applications.</p>',
    author: { name: 'Alex Chen', role: 'Senior Correspondent', bio: 'Tech journalist', avatar: '/images/alex.jpg' },
    publishedAt: '2026-01-22',
    updatedAt: '2026-01-22',
    category: 'tech',
    tags: ['Google', 'Gemini', 'multimodal AI'],
    featuredImage: { url: '/images/google.jpg', alt: 'Google', caption: 'Google AI' },
    readingTime: 4,
    featured: false,
  },
  {
    id: '5',
    slug: 'ai-chip-wars-nvidia-amd',
    title: 'AI Chip Wars: NVIDIA Faces Rising Competition from AMD, Intel',
    metaTitle: 'AI Chip Wars: NVIDIA vs AMD Intel | The Claw Bot Times',
    metaDescription: 'NVIDIA\'s dominance in AI chips faces challenges from AMD MI300, Intel Gaudi, and custom silicon from Google, Amazon.',
    excerpt: 'NVIDIA\'s AI chip dominance challenged by AMD MI300, Intel Gaudi, and cloud custom silicon.',
    content: '<p>NVIDIA\'s 80% market share in AI accelerators faces unprecedented challenges. AMD\'s MI300 series, Intel\'s Gaudi 3, and custom chips from Google (TPU) and Amazon (Trainium) are gaining traction.</p><h2>The Competition</h2><p>AMD claims MI300 outperforms H100 on certain workloads. Intel positions Gaudi as cost-effective alternative. Cloud providers increasingly favor custom silicon for price/performance.</p><h2>Market Dynamics</h2><p>Supply constraints and high costs drive diversification. Meta, Microsoft, and Google accelerating custom chip programs to reduce NVIDIA dependency.</p>',
    author: { name: 'Jordan Lee', role: 'Hardware Analyst', bio: 'Semiconductor specialist', avatar: '/images/jordan.jpg' },
    publishedAt: '2026-01-20',
    updatedAt: '2026-01-20',
    category: 'industry',
    tags: ['NVIDIA', 'AMD', 'AI chips', 'hardware'],
    featuredImage: { url: '/images/chips.jpg', alt: 'AI chips', caption: 'AI processors' },
    readingTime: 5,
    featured: true,
  },
  {
    id: '6',
    slug: 'open-source-ai-llama-mistral',
    title: 'Open-Source AI Surges: Llama, Mistral Challenge Proprietary Models',
    metaTitle: 'Open-Source AI: Llama Mistral Growth | The Claw Bot Times',
    metaDescription: 'Open-source AI models from Meta and Mistral AI gain enterprise adoption, challenging proprietary solutions.',
    excerpt: 'Open-source models Llama and Mistral gain enterprise traction with cost and customization advantages.',
    content: '<p>Open-source AI from Meta and Mistral AI gains enterprise traction. Cost advantages and customization drive adoption.</p><h2>Enterprise Adoption</h2><p>Companies choose open-source for data control, cost savings, and customization. Llama and Mistral close performance gap with GPT-4.</p>',
    author: { name: 'Sarah Martinez', role: 'Industry Reporter', bio: 'Business tech reporter', avatar: '/images/sarah.jpg' },
    publishedAt: '2026-01-18',
    updatedAt: '2026-01-18',
    category: 'industry',
    tags: ['open source', 'Llama', 'Mistral', 'Meta'],
    featuredImage: { url: '/images/opensource.jpg', alt: 'Open source AI', caption: 'Open source AI' },
    readingTime: 4,
    featured: false,
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getFeaturedArticles(limit = 3) {
  return articles.filter((article) => article.featured).slice(0, limit);
}

export function getRecentArticles(limit = 10) {
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