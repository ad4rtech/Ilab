export function ServicesHero() {
  return (
    <section className="bg-blue-600 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-medium text-white/75">Expert Business Services</p>
        <h1 className="mt-2 max-w-2xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
          We Help African Businesses Grow &mdash; Strategically
        </h1>
        <p className="mt-4 max-w-2xl text-white/85">
          From one-on-one consulting to full-scale training programs, iLab Growth delivers hands-on support
          tailored to African SMEs and entrepreneurs at every stage of growth.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-md bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-700">
            Book a Free Consultation
          </button>
          <button className="rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
            View All Services
          </button>
        </div>
      </div>
    </section>
  )
}
