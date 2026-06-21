import { Clock, Share2, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const badgeStyles: Record<string, string> = {
  New: "bg-blue-600 text-white",
  Growth: "bg-emerald-600 text-white",
}

const articles = [
  {
    badge: "New",
    category: "Finance",
    date: "Jun 5, 2025",
    readTime: "7 min read",
    title: "How to Secure Funding for Your Small Business in 2025",
    excerpt: "A comprehensive guide to grants, loans, and investor options available to African entrepreneurs this year.",
    author: "Kwame Asante",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
  },
  {
    badge: "Growth",
    category: "Growth",
    date: "May 28, 2025",
    readTime: "5 min read",
    title: "Scaling From Solo to Team: Lessons from 100 African Founders",
    excerpt: "Real-world insights from entrepreneurs who successfully grew their one-person shops into thriving teams.",
    author: "Ngozi Okafor",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80",
  },
  {
    badge: undefined,
    category: "Tech & Digital",
    date: "May 18, 2025",
    readTime: "4 min read",
    title: "WhatsApp Business: The Secret Weapon for African SMEs",
    excerpt: "How to use WhatsApp Business to drive sales, manage customer relationships, and automate your marketing.",
    author: "Emmanuel Osei",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=600&q=80",
  },
  {
    badge: undefined,
    category: "Marketing",
    date: "May 10, 2025",
    readTime: "8 min read",
    title: "Building a Powerful Personal Brand as an African Entrepreneur",
    excerpt: "Step-by-step guide to positioning yourself as an authority in your industry and attracting the right clients.",
    author: "Fatima Diallo",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
  },
  {
    badge: undefined,
    category: "Finance",
    date: "Apr 30, 2025",
    readTime: "5 min read",
    title: "The Ultimate Guide to M-Pesa for Business Payments",
    excerpt: "Everything SME owners need to know about using M-Pesa, Paybill, and Till numbers to accept payments and manage cash flow.",
    author: "David Kofi",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=600&q=80",
  },
]

export function ArticleGrid() {
  return (
    <div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {articles.map((article) => (
          <article key={article.title} className="overflow-hidden rounded-xl border border-border">
            <div className="relative">
              <img src={article.image} alt={article.title} className="h-44 w-full object-cover" />
              {article.badge && (
                <span
                  className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${badgeStyles[article.badge]}`}
                >
                  {article.badge}
                </span>
              )}
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-blue-50 px-2.5 py-1 font-semibold text-blue-700">
                  {article.category}
                </span>
                <span className="text-muted-foreground">{article.date}</span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" /> {article.readTime}
                </span>
              </div>

              <h3 className="mt-3 font-display text-base font-semibold leading-snug">{article.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{article.excerpt}</p>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <div className="flex items-center gap-2 text-xs">
                  <div className="h-6 w-6 rounded-full bg-zinc-200" />
                  <span className="font-medium">{article.author}</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
                    <Share2 className="h-3.5 w-3.5" /> Share
                  </button>
                  <a href="#" className="flex items-center gap-1 font-medium text-blue-600 hover:text-blue-700">
                    Read more <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-2">
        <button className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-zinc-50">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-sm font-medium text-white">1</button>
        <button className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-sm hover:bg-zinc-50">2</button>
        <button className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-sm hover:bg-zinc-50">3</button>
        <span className="flex h-9 w-9 items-center justify-center text-sm text-muted-foreground">...</span>
        <button className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-sm hover:bg-zinc-50">9</button>
        <button className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-zinc-50">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
