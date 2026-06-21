import { Zap, GraduationCap, Package, BarChart3, Users } from "lucide-react"

const perks = [
  { icon: GraduationCap, text: "Access 38+ online courses" },
  { icon: Package, text: "Download your purchased products" },
  { icon: BarChart3, text: "Track your business progress" },
  { icon: Users, text: "Connect with 12,000+ entrepreneurs" },
]

export function AuthSidePanel() {
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

      <h1 className="mt-10 font-display text-4xl font-bold leading-tight">Welcome Back to iLab Growth</h1>
      <p className="mt-4 text-white/80">
        Sign in to access your courses, downloads, and business toolkit &mdash; all in one place.
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
        src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80"
        alt="African entrepreneur working from a cafe"
        className="mt-auto h-56 w-full rounded-xl object-cover pt-10"
      />
    </div>
  )
}
