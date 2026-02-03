# News Data Structure

This folder contains JSON stubs for news articles that will be consumed by AI agents to generate blog posts.

## Categories

- **openclaw/** - News about the OpenClaw platform
- **agi/** - Artificial General Intelligence developments
- **bot-domination/** - Real automation and bot takeover stories
- **funny-stories/** - Hilarious AI moments
- **ai-fails/** - Stories of AI going wrong

## JSON Schema

Each JSON file should follow this structure:

```json
{
  "title": "Article Title",
  "date": "2026-02-03",
  "tags": ["tag1", "tag2"],
  "summary": "Brief description for previews",
  "content": "Full markdown content of the article...",
  "images": [
    {
      "url": "/static/images/news/image.jpg",
      "alt": "Image description",
      "caption": "Optional caption"
    }
  ],
  "sources": [
    {
      "name": "Source Name",
      "url": "https://source.url"
    }
  ],
  "author": "default",
  "status": "draft|published"
}
```

## Usage

AI agents will:

1. Read JSON files from this folder
2. Generate MDX blog posts in `data/blog/`
3. Download and optimize images to `public/static/images/`
