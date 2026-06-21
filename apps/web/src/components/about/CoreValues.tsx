import { Heart, Lightbulb, ShieldCheck, TrendingUp } from "lucide-react"

const values = [
  { icon: Heart, title: "Community First", description: "We build for African entrepreneurs, by people who understand the African business context &mdash; not borrowed Western frameworks." },
  { icon: Lightbulb, title: "Practical Over Theoretical", description: "Every course, product, and service we create must deliver actionable, real-world value you can apply on day one." },
  { icon: ShieldCheck, title: "Trust & Transparency", description: "We say what we mean, price fairly, and stand behind everything we sell with clear refund and support policies." },
  { icon: TrendingUp, title: "Growth Mindset", description: "We believe every entrepreneur can grow &mdash; with the right tools, knowledge, and support at the right time." },
]

export function CoreValues() {
  return (
    <section className="bg-amber-50/60 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">What We Stand For</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Our Core Values</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <value.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: value.description }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
