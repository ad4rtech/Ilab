import { Briefcase, Target, Users, CheckCircle2, Clock } from "lucide-react"

const plans = [
  {
    icon: Briefcase,
    title: "Business Consulting",
    subtitle: "Personalised strategy for your growth stage",
    description:
      "Our senior consultants work one-on-one with SME owners to diagnose growth blockers, craft actionable strategies, and hold you accountable to your goals.",
    included: ["Initial business audit", "3 x 90-min strategy sessions", "Custom growth action plan", "30-day email support"],
    duration: "4 weeks",
    price: "From $199",
    cta: "Book a Session",
    popular: false,
  },
  {
    icon: Target,
    title: "Growth Accelerator Program",
    subtitle: "The complete 90-day business transformation",
    description:
      "An intensive 3-month program combining group coaching, expert workshops, accountability structures, and community to scale your business to the next level.",
    included: [
      "Weekly group coaching calls",
      "6 specialist workshops",
      "Personal accountability partner",
      "Private community access",
      "Resource library access",
    ],
    duration: "3 months",
    price: "From $499",
    cta: "Apply Now",
    popular: true,
  },
  {
    icon: Users,
    title: "Corporate Training",
    subtitle: "Upskill your team for lasting results",
    description:
      "Custom-designed training workshops and programmes for companies wanting to build their team's digital, financial, and leadership capabilities.",
    included: ["Needs assessment & scoping", "Custom curriculum design", "On-site or virtual delivery", "Post-training resources", "Progress reporting"],
    duration: "Flexible",
    price: "Custom quote",
    cta: "Request a Quote",
    popular: false,
  },
]

export function ServicesPricing() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">Our Services</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Choose the Right Support for Your Business</h2>
          <p className="mt-4 text-muted-foreground">
            Every engagement is tailored to your goals &mdash; whether you&apos;re starting out or scaling up.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={
                plan.popular
                  ? "overflow-hidden rounded-xl border-2 border-blue-600 shadow-md"
                  : "overflow-hidden rounded-xl border border-border"
              }
            >
              {plan.popular && (
                <div className="bg-blue-600 py-2 text-center text-xs font-semibold uppercase tracking-wide text-white">
                  Most Popular
                </div>
              )}

              <div className="flex h-full flex-col p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <plan.icon className="h-5 w-5" />
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold">{plan.title}</h3>
                <p className="mt-1 text-sm font-medium text-amber-600">{plan.subtitle}</p>
                <p className="mt-3 text-sm text-muted-foreground">{plan.description}</p>

                <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  What&apos;s Included
                </p>
                <ul className="mt-3 space-y-2">
                  {plan.included.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" /> {plan.duration}
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-border pt-5">
                  <span className="font-display text-lg font-bold">{plan.price}</span>
                  <button
                    className={
                      plan.popular
                        ? "rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                        : "rounded-md bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100"
                    }
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
