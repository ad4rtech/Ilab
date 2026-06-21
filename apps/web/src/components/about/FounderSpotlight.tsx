const badges = ["Forbes Africa 30 Under 30", "Lagos Business School MBA", "15+ Years in Strategy", "BBC Africa Contributor"]

export function FounderSpotlight() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">Meet the Founder</p>

        <div className="mt-4 grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-bold">Dr. Ifeoma Obi</h2>
            <p className="mt-1 text-sm font-medium text-amber-600">Founder &amp; CEO, iLab Growth</p>

            <p className="mt-5 text-muted-foreground">
              With over 15 years in business strategy and a deep passion for African entrepreneurship, Ifeoma
              founded iLab Growth after seeing first-hand how the continent&apos;s most talented entrepreneurs
              were being held back by a lack of accessible, relevant business education.
            </p>
            <p className="mt-3 text-muted-foreground">
              She holds an MBA from Lagos Business School and has been featured in Forbes Africa, Business
              Insider Africa, and the BBC as a leading voice on African SME development.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span key={badge} className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
            alt="Dr. Ifeoma Obi, Founder & CEO of iLab Growth"
            className="aspect-square w-full max-w-xs rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
