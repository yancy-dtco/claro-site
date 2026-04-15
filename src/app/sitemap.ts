import { MetadataRoute } from 'next'

const BASE_URL = 'https://meetclaro.ai'

const blogSlugs = [
  'buyer-persona-etsy-shop',
  'who-buys-on-etsy',
  'etsy-target-audience',
  'what-etsy-buyers-want',
  'etsy-audience-research',
  'etsy-buyer-psychology',
  'reddit-etsy-buyer-research',
  'customer-research-small-business',
  'etsy-listing-copy-buyer-language',
  'etsy-listing-title-formula',
  'etsy-shop-description',
  'etsy-seo-2025',
  'etsy-keyword-research',
  'etsy-listings-not-converting',
  'etsy-reviews-listing-copy',
  'brand-strategy-small-business',
  'brand-voice-small-business',
  'positioning-statement-small-business',
  'solopreneur-brand-guide',
  'etsy-shop-differentiation',
  'small-business-brand-trust',
  'etsy-content-strategy',
  'content-strategy-solopreneurs',
  'instagram-captions-etsy-shop',
  'tiktok-for-etsy-shop',
  '30-day-content-calendar-small-business',
  'best-tools-etsy-sellers-2025',
  'ai-etsy-buyer-research',
  'erank-vs-marmalead-vs-claro',
  'what-is-buyer-intelligence',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/how-it-works`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
}
