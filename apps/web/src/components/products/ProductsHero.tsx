const features = ["Instant download", "M-Pesa & card payments", "Email receipt included", "Lifetime access"]

export function ProductsHero() {
  return (
    <section className="bg-amber-600 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-medium text-white/80">iLab Growth Digital Store</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl">
          Ready-to-Use Tools for Growing Businesses
        </h1>
        <p className="mt-4 max-w-2xl text-white/90">
          Download templates, toolkits, and strategic guides built by African business experts &mdash; and get
          to work immediately after purchase.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/85">
          {features.map((f) => (
            <span key={f}>{f}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
