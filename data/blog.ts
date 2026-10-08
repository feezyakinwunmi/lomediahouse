// lib/blogs.ts

export type BlogPost = {
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

export const allBlogPosts: BlogPost[] = [
{
    id: 1,
    title: "Top Marketing Services for Ottawa Authors: A Complete Guide",
    slug: "top-marketing-services-ottawa-authors",
    excerpt: "Discover the top marketing services for Ottawa authors, from book launch campaigns and author branding to SEO, social media, publicity, and local community engagement.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=500&fit=crop",
    category: "Book Marketing",
    readTime: "14 min read",
    date: "October 20, 2026",
    author: "LOPublications"
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
    author: "LOPublications"
}
];