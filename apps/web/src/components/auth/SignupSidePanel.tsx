import { Zap, GraduationCap, Package, Headphones, TrendingUp } from "lucide-react"

const perks = [
  { icon: GraduationCap, text: "Instant access to 38+ courses" },
  { icon: Package, text: "150+ templates & digital products" },
  { icon: TrendingUp, text: "Track your growth journey" },
  { icon: Headphones, text: "Direct access to expert support" },
]

export function SignupSidePanel() {
  return (
    <div className="hidden flex-col bg-blue-600 p-10 text-white lg:flex lg:w-[440px] lg:shrink-0">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-600">
          <Zap className="h-5 w-5 fill-white text-white" />
        </span>
        <div>
          <p className="font-display text-lg font-bold leading-tight">iLab Growth</p>
          <p className="text-xs text-white/70">Empowering African Entrepreneurs</p>
        </div>
      </div>

      <h1 className="mt-10 font-display text-4xl font-bold leading-tight">Start Your Growth Journey Today</h1>
      <p className="mt-4 text-white/80">
        Join 12,000+ African entrepreneurs already learning, building, and growing with iLab Growth.
      </p>

      <ul className="mt-10 space-y-5">
        {perks.map((perk) => (
          <li key={perk.text} className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15">
              <perk.icon className="h-4 w-4" />
            </span>
            <span className="text-sm text-white/90">{perk.text}</span>
          </li>
        ))}
      </ul>

      <img
        src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
        alt="African entrepreneur building her business"
        className="mt-auto h-56 w-full rounded-xl object-cover pt-10"
      />
    </div>
  )
}
