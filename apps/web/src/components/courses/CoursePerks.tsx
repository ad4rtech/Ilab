import { Award, Smartphone, Infinity as InfinityIcon, Headphones } from "lucide-react"

const perks = [
  { icon: Award, title: "Certificate of Completion", description: "Earn proof of your new skills" },
  { icon: Smartphone, title: "Mobile-Friendly", description: "Learn on any device, anywhere" },
  { icon: InfinityIcon, title: "Lifetime Access", description: "Revisit course content anytime" },
  { icon: Headphones, title: "Expert Support", description: "Get help from instructors & peers" },
]

export function CoursePerks() {
  return (
    <section className="bg-amber-50/60 py-10">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {perks.map((perk) => (
          <div key={perk.title} className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <perk.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">{perk.title}</p>
              <p className="text-xs text-muted-foreground">{perk.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
