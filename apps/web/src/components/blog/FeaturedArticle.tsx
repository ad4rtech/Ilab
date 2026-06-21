import { Clock, Share2, ArrowRight } from "lucide-react"

export function FeaturedArticle() {
  return (
    <article className="overflow-hidden rounded-xl border border-border">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80"
          alt="10 Low-Budget Digital Marketing Strategies for African SMEs"
          className="h-80 w-full object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white">
          Popular
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 text-xs">
          <span className="rounded-full bg-blue-50 px-2.5 py-1 font-semibold text-blue-700">Marketing</span>
          <span className="text-muted-foreground">Jun 12, 2025</span>
          <span className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-3.5 w-3.5" /> 6 min read
          </span>
        </div>

        <h2 className="mt-3 font-display text-2xl font-bold leading-snug">
          10 Low-Budget Digital Marketing Strategies for African SMEs
        </h2>
        <p className="mt-2 text-muted-foreground">
          Discover practical, cost-effective marketing tactics that deliver real results for small businesses
          operating across African markets in 2025.
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-2 text-sm">
            <div className="h-7 w-7 rounded-full bg-zinc-200" />
            <span className="font-medium">Dr. Amara Mensah</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground">
              <Share2 className="h-4 w-4" /> Share
            </button>
            <a href="#" className="flex items-center gap-1 font-medium text-blue-600 hover:text-blue-700">
              Read more <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
