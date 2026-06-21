import Link from "next/link"
import { Star, ArrowRight } from "lucide-react"

const badgeStyles: Record<string, string> = {
  Bestseller: "bg-amber-600 text-white",
  New: "bg-blue-600 text-white",
  Popular: "bg-purple-600 text-white",
  "Top Pick": "bg-white text-zinc-900",
}

const items = [
  {
    badge: "Bestseller",
    type: "Course",
    title: "Digital Marketing Masterclass for African Businesses",
    rating: 4.9,
    reviews: 312,
    price: 49,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
  },
  {
    badge: "New",
    type: "Product",
    title: "Complete Business Plan Toolkit &mdash; 30+ Templates",
    rating: 4.8,
    reviews: 184,
    price: 29,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
  },
  {
    badge: "Popular",
    type: "Course",
    title: "SME Finance & Accounting Fundamentals",
    rating: 4.7,
    reviews: 256,
    price: 39,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
  },
  {
    badge: "Top Pick",
    type: "Product",
    title: "Social Media Content Calendar & Strategy Kit",
    rating: 4.9,
    reviews: 143,
    price: 19,
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
  },
]

export function FeaturedProducts() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">Hand-Picked For You</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Featured Courses &amp; Products</h2>
          </div>
          <Link
            href="/products"
            className="hidden items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 sm:flex"
          >
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const titleParts = item.title.split("&mdash;")
            return (
              <div key={item.title} className="overflow-hidden rounded-xl border border-border">
                <div className="relative">
                  <img src={item.image} alt={item.title} className="h-40 w-full object-cover" />
                  <span
                    className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${badgeStyles[item.badge]}`}
                  >
                    {item.badge}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-xs font-medium text-muted-foreground">{item.type}</p>
                  <h3 className="mt-1 font-display text-sm font-semibold leading-snug">
                    {titleParts.length > 1 ? (
                      <>
                        {titleParts[0]}
                        {"\u2014"}
                        {titleParts[1]}
                      </>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    <span className="font-medium text-foreground">{item.rating}</span>
                    <span>({item.reviews})</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-display text-lg font-bold">${item.price}</span>
                    <button className="rounded-md bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-blue-700">
                      Get Now
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
