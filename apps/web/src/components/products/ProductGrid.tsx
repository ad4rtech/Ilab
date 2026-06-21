import { Eye, Star, Download, Grid3x3, List, ChevronLeft, ChevronRight } from "lucide-react"

const badgeStyles: Record<string, string> = {
  Bestseller: "bg-amber-600 text-white",
  "Top Pick": "bg-white text-zinc-900",
  Popular: "bg-purple-600 text-white",
  New: "bg-blue-600 text-white",
  Free: "bg-emerald-600 text-white",
}

const products = [
  {
    badge: "Bestseller",
    category: "Business Templates",
    type: "Toolkit",
    title: "Complete Business Plan Toolkit \u2014 30+ Templates",
    description:
      "30+ professionally designed templates to write a winning business plan fast. Covers financials, market analysis, and executive summary.",
    rating: 4.8,
    reviews: 184,
    downloads: "3,200",
    price: 29,
    originalPrice: 49,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
  },
  {
    badge: "Top Pick",
    category: "Marketing Kits",
    type: "Template",
    title: "Social Media Content Calendar & Strategy Kit",
    description:
      "12-month content calendar, caption templates, and hashtag strategy for Instagram, Facebook & LinkedIn.",
    rating: 4.9,
    reviews: 143,
    downloads: "5,100",
    price: 19,
    originalPrice: 35,
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
  },
  {
    badge: "Popular",
    category: "Finance Tools",
    type: "Spreadsheet",
    title: "SME Cash Flow & Budget Spreadsheet Pack",
    description:
      "Ready-to-use Excel & Google Sheets templates for cash flow forecasting, budgeting, and expense tracking.",
    rating: 4.7,
    reviews: 210,
    downloads: "4,400",
    price: 15,
    originalPrice: 25,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80",
  },
  {
    badge: "New",
    category: "Business Templates",
    type: "Presentation",
    title: "Ultimate Pitch Deck Template for African Startups",
    description:
      "20-slide investor-ready pitch deck with editable PowerPoint and Google Slides versions. Designed for African startup context.",
    rating: 4.9,
    reviews: 97,
    downloads: "1,800",
    price: 39,
    originalPrice: 69,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  },
  {
    badge: undefined,
    category: "Strategy Guides",
    type: "eBook",
    title: "Digital Marketing Strategy Guide 2025",
    description:
      "A 60-page practical guide covering SEO, paid ads, email marketing and social media for African market conditions.",
    rating: 4.6,
    reviews: 322,
    downloads: "7,900",
    price: 12,
    originalPrice: 20,
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=600&q=80",
  },
  {
    badge: undefined,
    category: "HR & Team",
    type: "Toolkit",
    title: "HR Starter Pack \u2014 Contracts, Policies & Onboarding",
    description:
      "Everything you need to hire your first employee: offer letters, employment contracts, handbook, and onboarding checklist.",
    rating: 4.7,
    reviews: 88,
    downloads: "2,300",
    price: 24,
    originalPrice: 40,
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=600&q=80",
  },
  {
    badge: "Free",
    category: "E-commerce",
    type: "Toolkit",
    title: "E-commerce Store Launch Checklist & Planner",
    description:
      "Step-by-step launch checklist with supplier contact tracker, pricing calculator, and launch timeline planner.",
    rating: 4.8,
    reviews: 156,
    downloads: "6,700",
    price: 10,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
  },
  {
    badge: undefined,
    category: "Marketing Kits",
    type: "Template",
    title: "Brand Identity Starter Kit \u2014 Logo & Style Guide",
    description:
      "Editable brand board, color palette guide, logo brief, and typography kit to establish your brand identity.",
    rating: 4.5,
    reviews: 74,
    downloads: "1,500",
    price: 22,
    originalPrice: 38,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
  },
]

export function ProductGrid() {
  return (
    <div className="flex-1">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">All Digital Products</h1>
          <p className="mt-1 text-sm text-muted-foreground">Showing 8 of 152 products</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Sort by:</span>
            <select className="rounded-md border border-border bg-white px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Best Selling</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
          <div className="flex items-center rounded-md border border-border">
            <button className="flex h-8 w-8 items-center justify-center rounded-l-md bg-amber-50 text-amber-700">
              <Grid3x3 className="h-4 w-4" />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-r-md text-muted-foreground hover:bg-zinc-50">
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <div key={product.title} className="overflow-hidden rounded-xl border border-border">
            <div className="relative">
              <img src={product.image} alt={product.title} className="h-44 w-full object-cover" />
              {product.badge && (
                <span
                  className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${badgeStyles[product.badge]}`}
                >
                  {product.badge}
                </span>
              )}
              <button className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-zinc-900/80 px-3 py-1 text-xs font-medium text-white">
                <Eye className="h-3.5 w-3.5" /> Preview
              </button>
            </div>

            <div className="p-5">
              <p className="text-xs font-semibold text-amber-600">
                {product.category} <span className="text-muted-foreground">&middot; {product.type}</span>
              </p>
              <h3 className="mt-1 font-display text-base font-semibold leading-snug">{product.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>

              <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                  <span className="font-medium text-foreground">{product.rating}</span> ({product.reviews})
                </span>
                <span className="flex items-center gap-1">
                  <Download className="h-3.5 w-3.5" /> {product.downloads} downloads
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-lg font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                  )}
                </div>
                <button className="flex items-center gap-1.5 rounded-md bg-amber-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-amber-700">
                  <Download className="h-3.5 w-3.5" /> Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-2">
        <button className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-zinc-50">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-sm font-medium text-white">
          1
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-sm hover:bg-zinc-50">
          2
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-sm hover:bg-zinc-50">
          3
        </button>
        <span className="flex h-9 w-9 items-center justify-center text-sm text-muted-foreground">...</span>
        <button className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-sm hover:bg-zinc-50">
          19
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-zinc-50">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
