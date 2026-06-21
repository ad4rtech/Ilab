import Link from "next/link"
import { GraduationCap, Package, Briefcase, Users, ArrowRight } from "lucide-react"

const offerings = [
  {
    icon: GraduationCap,
    title: "Online Courses",
    description: "Self-paced and cohort courses on business growth, digital marketing, finance, and more.",
    href: "/courses",
  },
  {
    icon: Package,
    title: "Digital Products",
    description: "Ready-to-use templates, toolkits, and guides to accelerate your business operations.",
    href: "/products",
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    description: "Personalised strategy sessions and consulting packages for SMEs at every stage.",
    href: "/services",
  },
  {
    icon: Users,
    title: "Community & Networking",
    description: "Join a vibrant community of African entrepreneurs sharing ideas, leads, and support.",
    href: "/community",
  },
]

export function Offerings() {
  return (
    <section className="bg-amber-50/60 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">What We Offer</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Everything Your Business Needs</h2>
          <p className="mt-4 text-muted-foreground">
            From learning to tools to community — iLab Growth is your one-stop business growth partner.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((item) => (
            <div key={item.title} className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              <Link
                href={item.href}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
