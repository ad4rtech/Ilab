export function Newsletter() {
  return (
    <section className="bg-blue-600 py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Free Resources &amp; Updates</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">Join 12,000+ Entrepreneurs</h2>
        <p className="mt-4 text-white/85">
          Subscribe to our newsletter and get free business templates, growth tips, and exclusive discounts
          delivered straight to your inbox.
        </p>

        <form className="mt-8 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            placeholder="Enter your email address..."
            className="flex-1 rounded-md border-0 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <button
            type="submit"
            className="rounded-md bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-700"
          >
            Subscribe Free
          </button>
        </form>
        <p className="mt-3 text-xs text-white/60">No spam. Unsubscribe anytime. We respect your privacy.</p>
      </div>
    </section>
  )
}
