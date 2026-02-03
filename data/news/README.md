# OpenClaw Bot - Content Creation Guide

This folder contains MDX articles that are automatically rendered by the website.
The OpenClaw bot should create files directly here - no intermediate JSON needed.

---

## Quick Start

1. Create MDX file in `/data/news/`
2. Add featured image to `/public/static/images/news/`
3. Git commit and push
4. Vercel auto-deploys in ~1 minute

---

## File Structure

```
/data/news/
  article-slug.mdx          # Article content

/public/static/images/news/
  article-slug.jpg          # Featured image (1200x630)
  article-slug-content.jpg  # Additional images
```

---

## MDX File Format

### Filename Convention

```
{slug}.mdx
```

- Use lowercase with hyphens
- No dates in filename (date is in frontmatter)
- Examples:
  - `openclaw-platform-launches.mdx`
  - `agi-breakthrough-deepmind.mdx`
  - `ai-fails-top-10-january.mdx`

### Complete Template

```mdx
---
title: 'Article Title with Primary Keyword'
date: '2026-02-03'
tags: ['ai-news', 'openclaw', 'agi']
summary: 'Compelling 150-160 character description with keywords. Appears in search results and social shares.'
images: ['/static/images/news/article-slug.jpg']
authors: ['default']
draft: false
---

Opening paragraph with **primary keyword** in first 100 words.
Reference OpenClaw, Clawbot, or AI News naturally here.

## Main Section Title

Content with valuable information. Include:

- Bullet points for scanability
- Statistics and data when available
- Natural keyword usage (1-2% density)

### Subsection if Needed

More detailed content here.

## Another Main Section

Continue with valuable content.

## Conclusion

Summarize key points. Include call-to-action.
Reference The Claw Bot Times for brand reinforcement.
```

---

## Frontmatter Fields

| Field | Required | Format | Example |
|-------|----------|--------|---------|
| `title` | Yes | String (50-60 chars) | `'AGI Breakthrough: DeepMind Achievement'` |
| `date` | Yes | ISO date | `'2026-02-03'` |
| `tags` | Yes | Array (3-5 tags) | `['ai-news', 'agi', 'research']` |
| `summary` | Yes | String (150-160 chars) | `'DeepMind announces...'` |
| `images` | Yes | Array with path | `['/static/images/news/slug.jpg']` |
| `authors` | Yes | Array | `['default']` |
| `draft` | No | Boolean | `false` (omit or false to publish) |

---

## Image Specifications

### Featured Image (Required)

| Property | Value |
|----------|-------|
| **Dimensions** | 1200 x 630 pixels (OG image ratio) |
| **Format** | JPG or WebP |
| **Max size** | 200KB |
| **Location** | `/public/static/images/news/` |
| **Naming** | `{article-slug}.jpg` |

### Content Images (Optional)

| Property | Value |
|----------|-------|
| **Dimensions** | 800 x 450 pixels (16:9 ratio) |
| **Format** | JPG, WebP, or PNG |
| **Max size** | 150KB |
| **Location** | `/public/static/images/news/` |
| **Naming** | `{article-slug}-{description}.jpg` |

### Image in MDX

```mdx
![Alt text describing image](/static/images/news/article-slug-chart.jpg)
```

---

## SEO Keywords (Use Naturally)

### High Priority
- AI News
- OpenClaw / Open Claw
- Claw News
- Clawbot / Claw Bot
- AGI
- Artificial Intelligence

### Medium Priority
- Moltbook
- Funny Clawdbot
- AI Danger
- Artificial General Intelligence
- Bot Domination
- AI Fails

---

## Tag Reference

Use 3-5 tags from this list:

| Tag | When to Use |
|-----|-------------|
| `ai-news` | All news articles |
| `openclaw` | OpenClaw platform content |
| `agi` | AGI research/developments |
| `artificial-intelligence` | General AI topics |
| `automation` | Bot/automation stories |
| `ai-fails` | Failure/funny AI moments |
| `funny-stories` | Humorous content |
| `research` | Scientific/research news |
| `platform` | Platform announcements |
| `moltbook` | Moltbook integrations |

---

## Content Guidelines

### Title Rules
- 50-60 characters max
- Include primary keyword
- Use colon for structure: `Keyword: Compelling Hook`

### Summary Rules
- Exactly 150-160 characters
- Start with keyword if possible
- Include call-to-action feel

### Body Structure
- H2 for main sections (3-5 per article)
- H3 sparingly for subsections
- 800-1500 words total
- Short paragraphs (2-4 sentences)
- Bullet lists for scanability

### Internal Links
Link to related content when relevant:
```mdx
Check out our [AGI research coverage](/tags/agi) for more.
```

---

## Git Workflow

### Files to Commit

1. MDX article: `/data/news/{slug}.mdx`
2. Featured image: `/public/static/images/news/{slug}.jpg`
3. Any additional images

### Commit Message Format

```
feat(news): Add article about {topic}

- {brief description}
- Tags: {tag1}, {tag2}, {tag3}
```

### Example

```bash
git add data/news/openclaw-launches.mdx
git add public/static/images/news/openclaw-launches.jpg
git commit -m "feat(news): Add OpenClaw platform launch article"
git push origin master
```

---

## Validation Checklist

Before pushing, verify:

- [ ] Title is 50-60 characters with keyword
- [ ] Summary is 150-160 characters
- [ ] Date is valid ISO format
- [ ] 3-5 tags from approved list
- [ ] Featured image exists at specified path
- [ ] Featured image is 1200x630 pixels
- [ ] Image file size under 200KB
- [ ] No draft: true (or field removed)
- [ ] Content has H2 sections
- [ ] Keywords used naturally (1-2%)

---

## Example Article

**File:** `/data/news/openclaw-platform-launches.mdx`

```mdx
---
title: 'OpenClaw Launches: AI Agent Orchestration Platform Goes Live'
date: '2026-02-03'
tags: ['ai-news', 'openclaw', 'platform', 'automation']
summary: 'OpenClaw announces the launch of its revolutionary AI agent orchestration platform. Learn how Clawbot technology enables seamless multi-agent workflows.'
images: ['/static/images/news/openclaw-platform-launches.jpg']
authors: ['default']
---

The OpenClaw platform officially launches today, marking a significant milestone in AI agent orchestration technology.

## What is OpenClaw?

OpenClaw is an advanced platform that enables seamless coordination between multiple AI agents, allowing them to work together on complex tasks.

## Key Features

- **Multi-agent orchestration** - Coordinate dozens of agents simultaneously
- **Natural language control** - Direct agents using conversational commands
- **Clawbot integration** - Built-in news curation and reporting capabilities

## Impact on AI News

This launch represents a major step forward for the AI News community and autonomous systems development.

## Conclusion

The OpenClaw platform is now available for early adopters. Stay tuned to The Claw Bot Times for continued coverage of this groundbreaking technology.
```

**Image:** `/public/static/images/news/openclaw-platform-launches.jpg` (1200x630px)

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Article not appearing | Check `draft` is not `true` |
| Image not loading | Verify path starts with `/static/` |
| Build fails | Check MDX syntax (no unclosed tags) |
| Tags not linking | Use lowercase with hyphens |
