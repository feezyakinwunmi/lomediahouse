'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, Globe, Camera, Book, Zap, ChevronDown, FileText, TrendingUp, PenTool, DollarSign } from 'lucide-react';
import ModalPortal from './ModalPortal';



// Course data

// Blog posts data (for dropdown + search)
const blogPosts = [
  {
    id: 1,
    title: "Top Marketing Services for Ottawa Authors",
    slug: "top-marketing-services-ottawa-authors",
    excerpt: "Discover the top marketing services for Ottawa authors, from book launch campaigns and author branding to SEO, social media, publicity, and local community engagement.",
    category: "Book Marketing",
    icon: Book
  },
  {
    id: 2,
    title: "Digital Marketing Services for Ottawa Realtors",
    slug: "digital-marketing-services-ottawa-realtors",
    excerpt: "Learn how Ottawa realtors can use local SEO, content marketing, social media, and paid advertising to attract more buyers and sellers.",
    category: "Digital Marketing",
    icon: TrendingUp
  }
];

interface SearchItem {
  title: string;
  href: string;
  type: string;
  description?: string;
  category?: string;
  icon?: any;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [allContent, setAllContent] = useState<SearchItem[]>([]);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Load all content on mount
  useEffect(() => {
    const items: SearchItem[] = [];

   
    // Add blog posts
    blogPosts.forEach(post => {
      items.push({
        title: post.title,
        href: `/blog/${post.slug}`,
        type: "Blog Post",
        description: post.excerpt,
        category: post.category,
        icon: post.icon
      });
    });

    // Add static pages
    const staticPages = [
      { title: "Home", href: "/", type: "Page" },
      { title: "About Us", href: "/Aboutus", type: "Page" },
      { title: "Divisions", href: "/Divisions", type: "Page" },
      { title: "Leadership", href: "/Leadership", type: "Page" },
      { title: "Courses", href: "/courses", type: "Page" },
      { title: "Blog", href: "/blog", type: "Page" },
      { title: "Contact Us", href: "/ContactUs", type: "Page" }
    ];

    staticPages.forEach(page => {
      if (!items.some(item => item.href === page.href)) {
        items.push(page);
      }
    });

    setAllContent(items);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setBlogDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = allContent.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        (item.description && item.description.toLowerCase().includes(query)) ||
        (item.category && item.category.toLowerCase().includes(query)) ||
        item.type.toLowerCase().includes(query)
    );
    setSearchResults(results.slice(0, 15));
  }, [searchQuery, allContent]);

  // Focus search input when modal opens
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [searchOpen]);

  // Handle ESC key to close search
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && searchOpen) {
        handleSearchClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [searchOpen]);

  const handleSearchOpen = () => {
    setSearchOpen(true);
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleResultClick = (href: string) => {
    handleSearchClose();
    window.location.href = href;
  };

  // Get color for result type badge
  const getTypeColor = (type: string) => {
    switch(type) {
      case "Division": return "bg-purple-100 text-purple-800";
      case "Course": return "bg-blue-100 text-blue-800";
      case "Blog Post": return "bg-red-100 text-red-800";
      case "Page": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch(type) {
      case "Division": return "🏢";
      case "Course": return "📚";
      case "Blog Post": return "📝";
      case "Page": return "📄";
      default: return "🔗";
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm">
        <div className="max-w-[95%] mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              <img
                src="/logo.png"
                className="object-cover w-full h-full"
                alt="Logo"
              />
            </div>
            <div className="text-xl font-bold tracking-tighter heading-font text-black">
              Lo<span className="text-red-500">MediaHouse</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-700">
            {/* Search Button */}
            <button 
              onClick={handleSearchOpen}
              className="hover:text-red-500 transition-colors flex items-center gap-1"
            >
              <Search className="w-4 h-4" />
              <span className="text-xs">Search</span>
            </button>

            <a href="/" className="hover:text-red-500 transition-colors">Home</a>
            <a href="/Aboutus" className="hover:text-red-500 transition-colors">About us</a>
            <a href="/Divisions" className="hover:text-red-500 transition-colors">Divisions</a>
            <a href="/Leadership" className="hover:text-red-500 transition-colors">Leadership</a>
            <a href="/courses" className="hover:text-red-500 transition-colors">Courses</a>

            {/* Blog Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setBlogDropdownOpen(!blogDropdownOpen)}
                onMouseEnter={() => setBlogDropdownOpen(true)}
                className="hover:text-red-500 transition-colors flex items-center gap-1"
              >
                Blog
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${blogDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {blogDropdownOpen && (
                <div
                  onMouseLeave={() => setBlogDropdownOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                >
                  {/* Dropdown Header */}
                  <div className="px-5 py-3 bg-gray-50 border-b border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Latest Articles</p>
                  </div>

                  {/* Blog Posts */}
                  <div className="divide-y divide-gray-100">
                    {blogPosts.map((post) => (
                      <a
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        onClick={() => setBlogDropdownOpen(false)}
                        className="group flex gap-3 p-4 hover:bg-red-50/50 transition"
                      >
                        <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-red-50 flex items-center justify-center">
                          <post.icon className="w-5 h-5 text-red-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-black group-hover:text-red-500 transition line-clamp-1">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-0.5">{post.category}</p>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Dropdown Footer */}
                  <a
                    href="/blog"
                    onClick={() => setBlogDropdownOpen(false)}
                    className="flex items-center justify-between px-5 py-3 bg-gray-50 hover:bg-red-50 transition text-sm font-medium text-red-500"
                  >
                    <span>View All Articles</span>
                    <span>→</span>
                  </a>
                </div>
              )}
            </div>

            <a href="/ContactUs" className="hover:text-red-500 transition-colors">Contact Us</a>
          </div>

          <div className="hidden md:block">
            <a 
              href="tel:+19059224471" 
              className="px-5 py-2.5 bg-black/90 backdrop-blur-sm text-white rounded-full font-medium text-sm hover:bg-black transition-all duration-300 hover:scale-105 inline-block shadow-lg"
            >
              Call Us: +1 (905) 922-4471
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-black">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-white/20 py-5 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col items-center gap-5 text-base text-zinc-700">
              {/* Search in mobile */}
              <button 
                onClick={() => {
                  handleSearchOpen();
                  setOpen(false);
                }}
                className="flex items-center gap-2 hover:text-red-500 transition-colors"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>

              <a href="/" onClick={() => setOpen(false)} className="hover:text-red-500 transition-colors">Home</a>
              <a href="/Aboutus" onClick={() => setOpen(false)} className="hover:text-red-500 transition-colors">About Us</a>
              <a href="/Divisions" onClick={() => setOpen(false)} className="hover:text-red-500 transition-colors">Divisions</a>
              <a href="/Leadership" onClick={() => setOpen(false)} className="hover:text-red-500 transition-colors">Leadership</a>
              <a href="/courses" onClick={() => setOpen(false)} className="hover:text-red-500 transition-colors">Courses</a>

              {/* Mobile Blog Accordion */}
              <div className="w-full">
                <button
                  onClick={() => setMobileBlogOpen(!mobileBlogOpen)}
                  className="w-full flex items-center justify-center gap-2 hover:text-red-500 transition-colors"
                >
                  <span>Blog</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileBlogOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileBlogOpen && (
                  <div className="mt-4 flex flex-col items-center gap-3 border-l-2 border-red-100 pl-4">
                    {blogPosts.map((post) => (
                      <a
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        onClick={() => {
                          setOpen(false);
                          setMobileBlogOpen(false);
                        }}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-500 transition text-center"
                      >
                        <post.icon className="w-4 h-4 flex-shrink-0" />
                        <span className="line-clamp-1">{post.title}</span>
                      </a>
                    ))}
                    <a
                      href="/blog"
                      onClick={() => {
                        setOpen(false);
                        setMobileBlogOpen(false);
                      }}
                      className="text-sm font-medium text-red-500 hover:text-red-600 transition"
                    >
                      View All Articles →
                    </a>
                  </div>
                )}
              </div>

              <a href="/ContactUs" onClick={() => setOpen(false)} className="hover:text-red-500 transition-colors">Contact Us</a>
              
              {/* Mobile Call Button */}
              <a 
                href="tel:+15142192987" 
                onClick={() => setOpen(false)}
                className="mt-2 px-6 py-2.5 bg-black text-white rounded-full font-medium text-sm hover:bg-zinc-800 transition-all inline-block"
              >
                Call Us: +1 (514) 219 2987
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Search Modal using Portal */}
      <ModalPortal isOpen={searchOpen} onClose={handleSearchClose}>
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search divisions, courses, blog posts, pages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-12 py-5 text-black text-lg outline-none border-b border-gray-200"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            )}
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {searchQuery.trim() === "" ? (
              <div className="p-8 text-center text-gray-500">
                <Search className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                <p className="text-lg">Search divisions, courses, blog posts, and more</p>
                <p className="text-sm mt-1">Try searching for "marketing" or "onboarding"</p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Divisions</span>
                  <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Courses</span>
                  <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Blog</span>
                  <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">About</span>
                </div>
              </div>
            ) : searchResults.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <p className="text-lg">No results found for "{searchQuery}"</p>
                <p className="text-sm mt-1">Try different keywords</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {searchResults.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => handleResultClick(result.href)}
                    className="w-full text-left px-6 py-4 hover:bg-gray-50 transition group"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon if available */}
                      {result.icon && (
                        <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-red-50 flex items-center justify-center">
                          <result.icon className="w-5 h-5 text-red-500" />
                        </div>
                      )}
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-black font-medium group-hover:text-red-500 transition line-clamp-1">
                            {result.title}
                          </h4>
                        </div>
                        
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${getTypeColor(result.type)}`}>
                            {getTypeIcon(result.type)} {result.type}
                          </span>
                          {result.category && (
                            <span className="text-xs text-gray-400">• {result.category}</span>
                          )}
                        </div>
                        
                        {result.description && (
                          <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                            {result.description}
                          </p>
                        )}
                      </div>
                      <span className="text-red-500 opacity-0 group-hover:opacity-100 transition flex-shrink-0">
                        →
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-3 bg-gray-50 text-xs text-gray-500 flex justify-between items-center">
            <span>Press ESC to close</span>
            <span>{searchResults.length} results found</span>
          </div>
        </div>
      </ModalPortal>
    </>
  );
}