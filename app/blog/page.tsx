// app/blog/page.tsx
import { Metadata } from 'next';
import BlogClient from './BlogClient';
import { allBlogPosts as blogPosts } from '@/data/blog';

export const generateMetadata = (): Metadata => {
  return {
    title: "Blog | Marketing & Digital Strategy Insights | LO Media House",
    description: "Practical guides on book marketing, digital marketing, web and app development, content marketing, local SEO, and growth strategies for authors, realtors, churches, and businesses in Ottawa and beyond.",
    keywords: [
      "book marketing", "digital marketing", "Ottawa realtors",
      "author marketing", "Ottawa marketing services", "real estate marketing Ottawa",
      "local SEO Ottawa", "content marketing", "social media marketing",
      "email marketing", "paid advertising", "lead generation",
      "marketing strategy", "Ottawa business marketing", "LO Media House",
      "custom web development", "mobile app development", "church website design",
      "content scheduling tools", "launching your first website"
    ],
    authors: [{ name: "loMediaHouse" }],
    openGraph: {
      title: "Blog - Marketing & Digital Strategy Insights",
      description: "Discover practical guides on book marketing, digital marketing, web development, local SEO, and growth strategies for authors, businesses, and ministries.",
      images: [{ url: blogPosts[0].image, alt: "LO Media House Blog" }],
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      images: [blogPosts[0].image],
    },
    alternates: {
      canonical: "/blog",
    },
  };
};

export default function BlogPage() {
  return <BlogClient blogPosts={blogPosts} />;
}
