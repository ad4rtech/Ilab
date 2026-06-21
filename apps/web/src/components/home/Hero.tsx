import Link from "next/link"

const stats = [
  { value: "12,000+", label: "Entrepreneurs Trained" },
  { value: "150+", label: "Digital Products" },
  { value: "98%", label: "Satisfaction Rate" },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80"
        alt="African entrepreneurs working in a modern office"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-zinc-900/60" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center">
        <span className="rounded-full bg-amber-600 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Empowering African Entrepreneurs &amp; SMEs
        </span>

        <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
          Grow Your Business with the Right Tools &amp; Knowledge
        </h1>

        <p className="mt-6 max-w-2xl text-base text-white/85 sm:text-lg">
          Access world-class courses, digital products, and business growth strategies designed
          for African entrepreneurs and SME owners.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/courses"
            className="rounded-md bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-700"
          >
            Explore Courses
          </Link>
          <Link
            href="/products"
            className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-white/90"
          >
            Browse Products
          </Link>
        </div>

        <dl className="mt-12 flex gap-10 sm:gap-16">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl font-bold text-white">{stat.value}</dd>
              <p className="mt-1 text-xs text-white/70">{stat.label}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
