"use client"

import { useState } from "react"
import { Search } from "lucide-react"

const categories = [
  { label: "All Posts", count: 87 },
  { label: "Marketing", count: 24 },
  { label: "Finance", count: 18 },
  { label: "Business Growth", count: 21 },
  { label: "Leadership", count: 12 },
  { label: "Tech & Digital", count: 9 },
  { label: "E-commerce", count: 3 },
]

const popularPosts = [
  { title: "10 Low-Budget Marketing Strategies for African SMEs", date: "Jun 12, 2025" },
  { title: "How to Secure Funding for Your Small Business in 2025", date: "Jun 5, 2025" },
  { title: "Scaling From Solo to Team: Lessons from 100 African Founders", date: "May 28, 2025" },
  { title: "WhatsApp Business: The Secret Weapon for SMEs", date: "May 18, 2025" },
]

const tags = ["SME", "Entrepreneurship", "M-Pesa", "Funding", "Branding", "Social Media", "Africa", "Strategy", "Productivity", "Startups"]

export function BlogSidebar() {
  const [activeCategory, setActiveCategory] = useState("All Posts")

  return (
    <aside className="w-full shrink-0 space-y-6 lg:w-72">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full rounded-md border border-border bg-white py-2 pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="rounded-xl border border-border p-5">
        <h3 className="font-display text-sm font-semibold">Categories</h3>
        <ul className="mt-3 space-y-1">
          {categories.map((cat) => (
            <li key={cat.label}>
              <button
                onClick={() => setActiveCategory(cat.label)}
                className={
                  activeCategory === cat.label
                    ? "flex w-full items-center justify-between rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700"
                    : "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-foreground/75 hover:bg-zinc-50"
                }
              >
                <span>{cat.label}</span>
                <span className="text-xs text-muted-foreground">{cat.count}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-border bg-amber-50/60 p-5">
        <h3 className="font-display text-sm font-semibold">Popular Posts</h3>
        <ul className="mt-4 space-y-4">
          {popularPosts.map((post, i) => (
            <li key={post.title} className="flex gap-3">
              <span className="font-display text-lg font-bold text-amber-600/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-sm font-medium leading-snug">{post.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{post.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-border p-5">
        <h3 className="font-display text-sm font-semibold">Tags</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-foreground/75">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-blue-600 p-5 text-white">
        <h3 className="font-display text-sm font-semibold">Get Articles in Your Inbox</h3>
        <p className="mt-2 text-xs text-white/80">
          Join 12,000+ entrepreneurs and get the best posts delivered weekly.
        </p>
        <input
          type="email"
          placeholder="Your email address..."
          className="mt-4 w-full rounded-md border-0 px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <button className="mt-3 w-full rounded-md bg-amber-600 px-4 py-2 text-sm font-semibold transition-colors hover:bg-amber-700">
          Subscribe
        </button>
      </div>
    </aside>
  )
}
