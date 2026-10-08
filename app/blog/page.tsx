// app/blog/page.tsx
import { Metadata } from 'next';
import BlogClient from './BlogClient';

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
};

const blogPosts: BlogPost[] = [
  // ========== NEW POSTS ==========
  {
    id: 1,
    title: "Top Marketing Services for Ottawa Authors: A Complete Guide",
    slug: "top-marketing-services-ottawa-authors",
    excerpt: "Discover the top marketing services for Ottawa authors, from book launch campaigns and author branding to SEO, social media, publicity, and local community engagement.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=500&fit=crop",
    category: "Book Marketing",
    readTime: "14 min read",
    date: "October 20, 2026",
    author: "loMediaHouse"
  },
  {
    id: 2,
    title: "Digital Marketing Services for Ottawa Realtors: Build a Stronger Online Presence",
    slug: "digital-marketing-services-ottawa-realtors",
    excerpt: "Learn how Ottawa realtors can use local SEO, content marketing, social media, and paid advertising to attract more buyers and sellers in the Ottawa real estate market.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=500&fit=crop",
    category: "Digital Marketing",
    readTime: "12 min read",
    date: "October 20, 2026",
    author: "loMediaHouse"
  }
];

export const generateMetadata = (): Metadata => {
  return {
    title: "Blog | Marketing & Digital Strategy Insights | LO Media House",
    description: "Practical guides on book marketing, digital marketing, local SEO, social media, and growth strategies for authors, realtors, and businesses in Ottawa and beyond.",
    keywords: [
      "book marketing", "digital marketing", "Ottawa realtors",
      "author marketing", "Ottawa marketing services", "real estate marketing Ottawa",
      "local SEO Ottawa", "content marketing", "social media marketing",
      "email marketing", "paid advertising", "lead generation",
      "marketing strategy", "Ottawa business marketing", "LO Media House"
    ],
    authors: [{ name: "loMediaHouse" }],
    openGraph: {
      title: "Blog - Marketing & Digital Strategy Insights",
      description: "Discover practical guides on book marketing, digital marketing, local SEO, and growth strategies for Ottawa authors and realtors.",
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