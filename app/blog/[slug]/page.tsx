// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, User, TrendingUp } from 'lucide-react';
import { allBlogPosts, formatBlogDate } from '@/data/blog';

// ========== NEW POSTS ==========
type Props = {
  params: Promise<{ slug: string }>;
};

const PostComponents: Record<string, React.ComponentType> = {
  // ========== NEW POSTS ==========
  "top-marketing-services-ottawa-authors": dynamic(() => import('./posts/TopMarketingServicesOttawaAuthors')),
  "digital-marketing-services-ottawa-realtors": dynamic(() => import('./posts/DigitalMarketingServicesOttawaRealtors')),
  "custom-web-and-mobile-app-development": dynamic(() => import('./posts/CustomWebAndMobileAppDevelopment')),
  "best-content-scheduling-publishing-tools-2026": dynamic(() => import('./posts/BestContentSchedulingPublishingTools2026')),
  "launching-your-first-website": dynamic(() => import('./posts/LaunchingYourFirstWebsite')),
  "websites-and-apps-for-churches-and-ministries": dynamic(() => import('./posts/WebsitesAndAppsForChurchesAndMinistries')),
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = allBlogPosts.find(p => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      robots: { index: false, follow: true },
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      "book marketing", "digital marketing", "Ottawa realtors", "author marketing",
      "Ottawa marketing services", "real estate marketing Ottawa",
      "book publicity", "author branding Ottawa", "content marketing",
      "SEO Ottawa", "social media marketing", "email marketing",
      post.category.toLowerCase()
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      images: [{ url: post.image }],
      locale: "en_CA",
      type: "article",
      publishedTime: `${post.date}T00:00:00.000Z`,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = allBlogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const recommended = allBlogPosts
    .filter(p => p.slug !== slug)
    .slice(0, 3);

  const PostComponent = PostComponents[slug];
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: [post.image],
    datePublished: `${post.date}T00:00:00.000Z`,
    dateModified: `${post.date}T00:00:00.000Z`,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'LO Media House',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.lomediahouse.com/logo.png',
      },
    },
    mainEntityOfPage: `https://www.lomediahouse.com/blog/${post.slug}`,
  };

  return (
    <div className="bg-gray-50 text-black min-h-screen pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="max-w-[90%] mx-auto px-6 py-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-red-600 mb-8">
          <ArrowLeft className="w-5 h-5" /> Back to All Articles
        </Link>

        <div className="grid lg:grid-cols-12 gap-12">

          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Hero Image */}
            <div className="relative h-[520px] rounded-3xl overflow-hidden mb-12 shadow-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />

              <div className="absolute bottom-0 left-0 p-10 text-white">
                <div className="inline-block px-5 py-2 bg-red-600 rounded-2xl text-sm font-medium mb-4">
                  {post.category}
                </div>
                <h1 className="text-2xl md:text-5xl font-bold leading-tight tracking-tight">
                  {post.title}
                </h1>
              </div>
            </div>

            {/* Meta Info */}
            <div className="flex items-center gap-8 text-sm text-gray-500 mb-12 border-b pb-10 flex-wrap">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" /> {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {formatBlogDate(post.date)}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {post.readTime}
              </div>
            </div>

            {/* Dynamic Content */}
            {PostComponent ? <PostComponent /> : <p>Content not available yet.</p>}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-10">

              {/* Author */}
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="font-bold mb-4">Written By</h3>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                    <User className="w-7 h-7 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold">{post.author}</p>
                    <p className="text-sm text-gray-500">Marketing & Digital Services Team</p>
                  </div>
                </div>
              </div>

              {/* Recommended Posts */}
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="text-red-500" />
                  <h3 className="font-bold">Recommended Reads</h3>
                </div>

                {recommended.length > 0 ? (
                  recommended.map((item) => (
                    <Link
                      key={item.id}
                      href={`/blog/${item.slug}`}
                      className="group flex gap-4 mb-6 last:mb-0"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={80}
                        height={64}
                        sizes="80px"
                        className="w-20 h-16 object-cover rounded-xl"
                      />
                      <div>
                        <p className="line-clamp-2 text-sm font-medium group-hover:text-red-600 transition">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{formatBlogDate(item.date)}</p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">More articles coming soon...</p>
                )}
              </div>

              {/* Newsletter */}
              <div className="bg-gray-900 text-white rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                <p className="text-gray-400 text-sm mb-6">Get the latest marketing, digital strategy &amp; growth insights.</p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3 mb-4 focus:outline-none focus:border-red-500"
                />
                <button className="w-full bg-red-600 hover:bg-red-700 py-3.5 rounded-2xl font-medium transition">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}