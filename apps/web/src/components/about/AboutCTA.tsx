export function AboutCTA() {
  return (
    <section className="bg-blue-600 py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Ready to Grow Your Business With Us?</h2>
        <p className="mt-4 text-white/85">
          Whether you want to take a course, download a toolkit, or work directly with our team &mdash; we have
          something built exactly for where you are right now.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-md bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-700">
            Explore Courses
          </button>
          <button className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-white/90">
            Browse Products
          </button>
          <button className="rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
