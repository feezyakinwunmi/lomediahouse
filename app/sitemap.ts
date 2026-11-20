// app/sitemap.ts
import { MetadataRoute } from 'next'
import { allBlogPosts } from '@/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.lomediahouse.com'

  const pages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/Aboutus`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/Divisions`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/Leadership`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ContactUs`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/websites-apps-tech-platforms`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/courses`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/courses/new-partner-onboarding`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/blog`, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/privacy`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/terms`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/cookies`, changeFrequency: 'yearly', priority: 0.2 },
  ]

  const posts: MetadataRoute.Sitemap = allBlogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(`${post.date}T00:00:00.000Z`),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...pages, ...posts]
}