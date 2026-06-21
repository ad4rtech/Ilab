export function AboutHero() {
  return (
    <section className="bg-blue-600 py-0">
      <div className="mx-auto grid max-w-7xl gap-0 px-6 py-16 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div>
          <p className="text-sm font-medium text-white/75">Our Story</p>
          <h1 className="mt-2 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Built for African Entrepreneurs. By People Who Get It.
          </h1>
          <p className="mt-5 text-white/85">
            iLab Growth was born from a simple belief: that African entrepreneurs deserve world-class business
            education and tools &mdash; without the Western bias, the jargon, or the price tag that excludes most
            people.
          </p>
          <p className="mt-3 text-white/85">
            Since 2019 we&apos;ve trained over 12,000 entrepreneurs across 18 African countries through online
            courses, digital products, and hands-on consulting &mdash; and we&apos;re just getting started.
          </p>
          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-md bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-700">
              Explore Our Courses
            </button>
            <button className="rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
              Contact Us
            </button>
          </div>
        </div>

        <div className="mt-10 lg:mt-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
            alt="iLab Growth team collaborating in their office"
            className="h-80 w-full rounded-xl object-cover lg:h-96"
          />
        </div>
      </div>
    </section>
  )
}
