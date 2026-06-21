const milestones = [
  { year: "2019", text: "iLab Growth founded in Nairobi, Kenya with a single consulting service offering." },
  { year: "2020", text: "Launched the first digital product catalogue \u2014 12 templates \u2014 during the COVID pivot to digital." },
  { year: "2021", text: "Online course platform launched. First cohort of 400 students across 6 countries." },
  { year: "2022", text: "Expanded to 18 African countries. Surpassed 5,000 entrepreneurs trained milestone." },
  { year: "2023", text: "Growth Accelerator Program launched. 94% completion rate in first year." },
  { year: "2025", text: "12,000+ entrepreneurs served. Full platform relaunch with new courses, products, and community hub." },
]

export function Milestones() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">Our Journey</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Key Milestones</h2>
        </div>

        <div className="relative mt-12 space-y-8 border-l-2 border-blue-100 pl-8">
          {milestones.map((m) => (
            <div key={m.year} className="relative">
              <span className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                {m.year.slice(2)}
              </span>
              <p className="pt-1 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{m.year}</span> &mdash; {m.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
