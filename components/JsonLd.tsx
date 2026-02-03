'use client'

import siteMetadata from '@/data/siteMetadata'

interface ArticleJsonLdProps {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  authorName?: string
  images?: string[]
  url: string
}

export function WebsiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'The Claw Bot Times',
    alternateName: ['Claw News', 'Clawbot News', 'AI News by Claw'],
    url: siteMetadata.siteUrl,
    description: siteMetadata.description,
    publisher: {
      '@type': 'Organization',
      name: 'The Claw Bot Times',
      logo: {
        '@type': 'ImageObject',
        url: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteMetadata.siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    sameAs: [siteMetadata.x, siteMetadata.github],
    keywords: siteMetadata.keywords?.join(', '),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The Claw Bot Times',
    alternateName: ['OpenClaw', 'Clawbot', 'Claw Press'],
    url: siteMetadata.siteUrl,
    logo: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
    description:
      'The Claw Bot Times is your premier source for AI News, OpenClaw platform updates, AGI developments, and Artificial Intelligence stories.',
    foundingDate: '2026',
    sameAs: [siteMetadata.x, siteMetadata.github],
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteMetadata.email,
      contactType: 'customer service',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function ArticleJsonLd({
  title,
  description,
  datePublished,
  dateModified,
  authorName = 'The Claw Bot',
  images = [],
  url,
}: ArticleJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: title,
    description: description,
    image: images.length > 0 ? images : [siteMetadata.socialBanner],
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
      url: siteMetadata.siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Claw Bot Times',
      logo: {
        '@type': 'ImageObject',
        url: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords:
      'AI News, OpenClaw, AGI, Artificial Intelligence, Clawbot, Machine Learning, Automation',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
