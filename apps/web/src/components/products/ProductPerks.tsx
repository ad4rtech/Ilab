import { Zap, Smartphone, CreditCard, Mail } from "lucide-react"

const perks = [
  { icon: Zap, title: "Instant Download", description: "Access your files immediately after payment" },
  { icon: Smartphone, title: "M-Pesa Supported", description: "Pay easily via M-Pesa across East Africa" },
  { icon: CreditCard, title: "Card & PayPal", description: "All major cards and PayPal accepted" },
  { icon: Mail, title: "Email Receipt", description: "Full purchase receipt sent to your inbox" },
]

export function ProductPerks() {
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
