import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "iLab Growth completely transformed how I approach my online business. The digital marketing course gave me actionable strategies I could apply immediately.",
    name: "Amina Wanjiku",
    role: "Digital Entrepreneur, Nairobi",
  },
  {
    quote:
      "The business consulting session was worth every penny. My revenue grew 40% within three months of implementing what I learned. Highly recommend iLab Growth!",
    name: "David Kofi",
    role: "SME Owner, Accra",
  },
  {
    quote:
      "As a first-generation entrepreneur, I needed guidance. The community here is incredibly supportive and the resources are top-notch and Africa-relevant.",
    name: "Fatima Diallo",
    role: "Founder, Lagos",
  },
]

export function Testimonials() {
  return (
    <section className="bg-amber-50/60 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">Success Stories</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">What Our Community Says</h2>
          <p className="mt-4 text-muted-foreground">
            Join thousands of African entrepreneurs who have grown their businesses with iLab Growth.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex gap-0.5 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-500" />
                ))}
              </div>
              <p className="mt-4 text-sm text-foreground/90">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="h-9 w-9 rounded-full bg-zinc-200" />
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
