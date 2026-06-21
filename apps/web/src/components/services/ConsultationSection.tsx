import { Calendar, Send } from "lucide-react"

const callBenefits = [
  "Available Mon - Fri, 8am - 6pm EAT",
  "Video call via Zoom or Google Meet",
  "Instant calendar booking confirmation",
  "No credit card required",
]

export function ConsultationSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
        <div className="flex flex-col rounded-xl bg-blue-600 p-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-wide text-white/75">Free Consultation</p>
          <h3 className="mt-2 font-display text-2xl font-bold">Book a 30-Minute Discovery Call</h3>
          <p className="mt-3 text-sm text-white/85">
            Speak directly with one of our business experts. No pressure, no commitment &mdash; just an honest
            conversation about your business and how we can help.
          </p>

          <ul className="mt-6 space-y-2">
            {callBenefits.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-white/90">
                <span className="text-white">&#10003;</span> {b}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="h-7 w-7 rounded-full border-2 border-blue-600 bg-zinc-300" />
              <div className="h-7 w-7 rounded-full border-2 border-blue-600 bg-zinc-300" />
              <div className="h-7 w-7 rounded-full border-2 border-blue-600 bg-zinc-300" />
            </div>
            <span className="text-xs text-white/80">Join 500+ entrepreneurs who booked a call</span>
          </div>

          <button className="mt-auto flex items-center justify-center gap-2 rounded-md bg-amber-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-amber-700 mt-8">
            <Calendar className="h-4 w-4" /> Book My Free Call
          </button>
        </div>

        <div className="rounded-xl bg-amber-50/60 p-8">
          <h3 className="font-display text-xl font-bold">Send Us an Enquiry</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Tell us about your business and goals &mdash; we&apos;ll get back to you within 24 hours.
          </p>

          <form className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. David Kofi"
                  className="mt-1.5 w-full rounded-md border border-border bg-white px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="mt-1.5 w-full rounded-md border border-border bg-white px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium">Phone / WhatsApp</label>
                <input
                  type="tel"
                  placeholder="+254 7XX XXX XXX"
                  className="mt-1.5 w-full rounded-md border border-border bg-white px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Business Name</label>
                <input
                  type="text"
                  placeholder="Your Company Ltd."
                  className="mt-1.5 w-full rounded-md border border-border bg-white px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Service of Interest</label>
              <select className="mt-1.5 w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select a service...</option>
                <option>Business Consulting</option>
                <option>Growth Accelerator Program</option>
                <option>Corporate Training</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Tell us about your business & goals</label>
              <textarea
                rows={4}
                placeholder="Describe your business, current challenges, and what you hope to achieve..."
                className="mt-1.5 w-full rounded-md border border-border bg-white px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              <Send className="h-4 w-4" /> Submit Enquiry
            </button>
            <p className="text-center text-xs text-muted-foreground">
              We respect your privacy. Your information is never shared with third parties.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
