"use client"

import { useState } from "react"
import { Search } from "lucide-react"

const categories = [
  { label: "All Products", count: 152 },
  { label: "Business Templates", count: 48 },
  { label: "Marketing Kits", count: 34 },
  { label: "Finance Tools", count: 27 },
  { label: "Strategy Guides", count: 22 },
  { label: "HR & Team", count: 13 },
  { label: "E-commerce", count: 8 },
]

const productTypes = ["Templates", "Toolkits", "Guides & eBooks", "Spreadsheets", "Presentations"]
const priceRanges = ["Under $10", "$10 - $25", "$25 - $50", "$50 - $100", "Over $100"]

export function ProductsSidebar() {
  const [activeCategory, setActiveCategory] = useState("All Products")
  const [checkedTypes, setCheckedTypes] = useState<string[]>(["Templates", "Toolkits"])
  const [priceRange, setPriceRange] = useState("$10 - $25")

  const toggleType = (type: string) => {
    setCheckedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  return (
    <aside className="w-full shrink-0 lg:w-64">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search products..."
          className="w-full rounded-md border border-border bg-zinc-50 py-2 pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-semibold">Category</h3>
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

      <div className="mt-6">
        <h3 className="text-sm font-semibold">Product Type</h3>
        <ul className="mt-3 space-y-2">
          {productTypes.map((type) => (
            <li key={type}>
              <label className="flex items-center gap-2 text-sm text-foreground/80">
                <input
                  type="checkbox"
                  checked={checkedTypes.includes(type)}
                  onChange={() => toggleType(type)}
                  className="h-4 w-4 rounded border-border accent-blue-600"
                />
                {type}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-semibold">Price Range</h3>
        <ul className="mt-3 space-y-2">
          {priceRanges.map((range) => (
            <li key={range}>
              <label className="flex items-center gap-2 text-sm text-foreground/80">
                <input
                  type="radio"
                  name="price"
                  checked={priceRange === range}
                  onChange={() => setPriceRange(range)}
                  className="h-4 w-4 border-border accent-blue-600"
                />
                {range}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-lg bg-amber-50/70 p-4">
        <h3 className="text-sm font-semibold">Payment Options</h3>
        <ul className="mt-3 space-y-2 text-sm text-foreground/75">
          <li>M-Pesa (Kenya & East Africa)</li>
          <li>Debit / Credit Card</li>
          <li>PayPal</li>
        </ul>
      </div>
    </aside>
  )
}
