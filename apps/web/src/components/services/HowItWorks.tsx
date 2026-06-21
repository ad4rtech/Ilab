const steps = [
  { number: "01", title: "Book a Free Call", description: "Schedule a no-obligation 30-minute discovery call with our team to discuss your needs." },
  { number: "02", title: "We Assess & Propose", description: "We review your business situation and send a tailored proposal within 48 hours." },
  { number: "03", title: "Work Begins", description: "Once you confirm, we kick off with a structured onboarding and clear milestones." },
  { number: "04", title: "Grow & Measure", description: "Track your progress with regular check-ins and measurable KPIs throughout the engagement." },
]

export function HowItWorks() {
  return (
    <section className="bg-amber-50/60 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">Simple Process</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">How It Works</h2>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                {step.number}
              </div>
              <h3 className="mt-4 font-display text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
