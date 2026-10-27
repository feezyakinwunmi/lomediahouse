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
},
{
    id: 3,
    title: "Custom Web and Mobile App Development: Build Solutions That Work for Your Business",
    slug: "custom-web-and-mobile-app-development",
    excerpt: "Learn how custom web and mobile app development can solve specific business problems, improve the customer experience, save time, and support growth, plus how to choose the right development partner.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=500&fit=crop",
    category: "Web Development",
    readTime: "11 min read",
    date: "October 27, 2026",
    author: "LOPublications"
},
{
    id: 4,
    title: "Best Content Scheduling and Publishing Tools in 2026",
    slug: "best-content-scheduling-publishing-tools-2026",
    excerpt: "Compare WordPress, Buffer, Metricool, Later, and Hootsuite to find the content scheduling and publishing tool that fits your workflow and budget in 2026.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=500&fit=crop",
    category: "Content Marketing",
    readTime: "15 min read",
    date: "October 27, 2026",
    author: "LOPublications"
},
{
    id: 5,
    title: "Launching Your First Website: A Simple Guide for New Business Owners",
    slug: "launching-your-first-website",
    excerpt: "Launching your first website is easier than you think. Learn how to define your purpose, choose a domain and platform, build the right pages, and test, launch, and improve your site.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=500&fit=crop",
    category: "Web Development",
    readTime: "5 min read",
    date: "October 27, 2026",
    author: "LOPublications"
},
{
    id: 6,
    title: "Websites and Apps for Churches and Ministries: Bringing Hope, Community, and Connection into the Digital Age",
    slug: "websites-and-apps-for-churches-and-ministries",
    excerpt: "Discover how websites and apps for churches and ministries can welcome new visitors, keep congregations connected beyond Sunday, support evangelism, and help the right people find you through SEO.",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1200&h=500&fit=crop",
    category: "Web Development",
    readTime: "12 min read",
    date: "October 27, 2026",
    author: "LOPublications"
}
];