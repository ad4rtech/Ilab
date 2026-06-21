"use client"

import { useState } from "react"

const categories = ["All", "Marketing", "Finance", "Growth", "Tech & Digital", "Leadership", "E-commerce"]

export function BlogHero() {
  const [active, setActive] = useState("All")

  return (
    <section className="bg-amber-50/60 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-medium text-amber-600">iLab Growth Content Hub</p>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Insights to Grow Your African Business</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Expert articles, practical guides, and real-world stories &mdash; curated for entrepreneurs and SME
          owners building businesses across Africa.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={
                active === cat
                  ? "rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white"
                  : "rounded-full bg-white px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground"
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
