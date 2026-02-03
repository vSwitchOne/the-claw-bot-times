# News Data Structure & SEO Guidelines

This folder contains JSON stubs for news articles consumed by AI agents (OpenClaw) to generate blog posts.

## Target Keywords (Priority Order)

When creating content, naturally incorporate these keywords:

| Keyword | Priority | Usage |
|---------|----------|-------|
| AI News | High | Use in titles, first paragraph |
| OpenClaw | High | Reference the platform regularly |
| Open Claw | High | Alternative spelling variation |
| Claw News | High | Use in meta descriptions |
| Clawbot | High | Reference as the news curator |
| AGI | High | Use in tech-focused articles |
| Artificial Intelligence | High | Full term for formal content |
| Moltbook | Medium | Reference when discussing integrations |
| Funny Clawdbot | Medium | Use in humorous content |
| AI Danger | Medium | Use in safety/concern articles |
| Artificial General Intelligence | Medium | Full term for deep-dive articles |
| Bot Domination | Medium | Use in automation trend articles |
| AI Fails | Medium | Use in failure/funny stories |

---

## Categories

- **openclaw/** - News about the OpenClaw platform
- **agi/** - Artificial General Intelligence developments
- **bot-domination/** - Real automation and bot takeover stories
- **funny-stories/** - Hilarious AI moments
- **ai-fails/** - Stories of AI going wrong

---

## JSON Schema

Each JSON file should follow this structure:

```json
{
  "title": "Article Title - Include Primary Keyword",
  "slug": "url-friendly-slug-with-keywords",
  "date": "2026-02-03",
  "tags": ["ai-news", "openclaw", "agi"],
  "summary": "Compelling 150-160 char description with keywords. This appears in search results.",
  "content": "Full markdown content...",
  "images": [
    {
      "url": "/static/images/news/descriptive-keyword-name.jpg",
      "alt": "Descriptive alt text with keywords for accessibility and SEO"
    }
  ],
  "sources": [
    {
      "name": "Source Name",
      "url": "https://source.url"
    }
  ],
  "author": "default",
  "status": "draft|published",
  "seo": {
    "focusKeyword": "primary keyword for this article",
    "metaDescription": "Custom meta description if different from summary",
    "canonicalUrl": "optional canonical URL if cross-posted"
  }
}
```

---

## SEO Content Guidelines

### Title Rules

- **Length**: 50-60 characters max
- **Format**: `[Primary Keyword]: [Compelling Hook] | The Claw Bot Times`
- **Examples**:
  - `AGI Breakthrough: DeepMind Achieves Human-Level Reasoning`
  - `AI News: OpenClaw Platform Launches Revolutionary Agent System`
  - `Clawbot Reports: Top 10 AI Fails of the Month`

### Summary/Meta Description Rules

- **Length**: 150-160 characters exactly
- **Structure**: Start with keyword, include call-to-action
- **Example**: `AI News: OpenClaw announces groundbreaking agent orchestration. Learn how Clawbot technology is reshaping automation in enterprise environments.`

### Content Structure

```markdown
# H1: Article Title (Contains Primary Keyword)

Opening paragraph with **primary keyword** in first 100 words.
Mention **OpenClaw**, **Clawbot**, or **AI News** naturally.

## H2: Section with Secondary Keyword

Content that provides value. Include:
- Bullet points for scanability
- Internal links to related articles
- Statistics and data when available

### H3: Subsection (Use Sparingly)

More detailed content with **long-tail keywords**.

## H2: Another Main Section

Continue with valuable content.

## Conclusion

Summarize key points. Include call-to-action.
Reference **The Claw Bot Times** for brand reinforcement.
```

### Image Guidelines

- **Filename**: `descriptive-keywords-name.jpg` (no spaces, lowercase)
- **Alt text**: Describe image content with keywords (max 125 chars)
- **Caption**: Optional but good for context

### Internal Linking

Always link to related articles when relevant:
- Link to category pages (`/tags/agi`, `/tags/openclaw`)
- Link to related news articles
- Use descriptive anchor text (not "click here")

### Tag Guidelines

Use 3-5 tags per article from this list:

| Tag | When to Use |
|-----|-------------|
| `ai-news` | All news articles |
| `openclaw` | OpenClaw platform content |
| `agi` | AGI research/developments |
| `artificial-intelligence` | General AI topics |
| `automation` | Bot/automation stories |
| `ai-fails` | Failure/funny AI moments |
| `bot-domination` | Automation takeover trends |
| `moltbook` | Moltbook integrations |
| `clawbot` | Clawbot-specific features |

---

## OpenClaw Bot Instructions

When generating content:

1. **Research Phase**
   - Gather facts from sources
   - Identify primary keyword for article
   - Check for related existing articles to link

2. **Content Creation**
   - Write title with primary keyword
   - Create 150-160 char summary
   - Structure with H1/H2/H3 hierarchy
   - Include keywords naturally (2-3% density)
   - Add internal links

3. **Image Handling**
   - Generate/source relevant image
   - Use descriptive filename with keywords
   - Write SEO-optimized alt text

4. **Quality Checks**
   - Verify keyword in title
   - Check summary length (150-160 chars)
   - Ensure H1 is unique
   - Validate internal links work
   - Confirm image alt text exists

---

## File Naming Convention

```
YYYY-MM-DD-keyword-slug.json
```

Examples:
- `2026-02-03-openclaw-platform-launches.json`
- `2026-02-02-agi-breakthrough-deepmind.json`
- `2026-02-01-ai-fails-top-10-january.json`

---

## Quality Metrics

Target these SEO scores:

| Metric | Target |
|--------|--------|
| Keyword in Title | Yes |
| Keyword in First Paragraph | Yes |
| Meta Description Length | 150-160 chars |
| H2/H3 Subheadings | 3-5 per article |
| Internal Links | 2-4 per article |
| Image Alt Text | All images |
| Content Length | 800-1500 words |
| Keyword Density | 1-2% |
