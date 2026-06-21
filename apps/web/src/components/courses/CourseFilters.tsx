"use client"

import { useState } from "react"
import { Search, ChevronDown } from "lucide-react"

const categories = ["All Courses", "Marketing", "Finance", "Business Growth", "Tech & Digital", "Leadership", "E-commerce"]

export function CourseFilters() {
  const [active, setActive] = useState("All Courses")

  return (
    <div className="border-b border-border bg-white py-5">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full rounded-md border border-border bg-zinc-50 py-2 pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-1 flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={
                active === cat
                  ? "rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white"
                  : "rounded-md px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground"
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative">
          <select className="appearance-none rounded-md border border-border bg-white py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Levels</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>
    </div>
  )
}
