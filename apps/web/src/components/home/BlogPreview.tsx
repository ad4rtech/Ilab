import Link from "next/link"
import { ArrowRight } from "lucide-react"

const tagStyles: Record<string, string> = {
  Marketing: "bg-blue-50 text-blue-700",
  Finance: "bg-amber-50 text-amber-700",
  Growth: "bg-emerald-50 text-emerald-700",
}

const posts = [
  {
    tag: "Marketing",
    date: "Jun 12, 2025",
    title: "10 Low-Budget Digital Marketing Strategies for African SMEs",
    excerpt:
      "Discover practical, cost-effective marketing tactics that deliver real results for small businesses across Africa.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80",
  },
  {
    tag: "Finance",
    date: "Jun 5, 2025",
    title: "How to Secure Funding for Your Small Business in 2025",
    excerpt:
      "A comprehensive guide to grants, loans, and investor funding available to African entrepreneurs this year.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
  },
  {
    tag: "Growth",
    date: "May 28, 2025",
    title: "Scaling From Solo to Team: Lessons from 100 African Founders",
    excerpt:
      "Real-world insights from entrepreneurs who successfully grew their one-person shops into thriving teams.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80",
  },
]

export function BlogPreview() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">Stay Informed</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Latest from the Blog</h2>
          </div>
          <Link
            href="/blog"
            className="hidden items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 sm:flex"
          >
            Read all posts <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-xl border border-border">
              <img src={post.image} alt={post.title} className="h-44 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs">
                  <span className={`rounded-full px-2.5 py-1 font-semibold ${tagStyles[post.tag]}`}>
                    {post.tag}
                  </span>
                  <span className="text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="mt-3 font-display text-base font-semibold leading-snug">{post.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                <Link
                  href="/blog"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
