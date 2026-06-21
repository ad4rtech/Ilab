import { Compass, Eye } from "lucide-react"

export function MissionVision() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80"
          alt="iLab Growth team presenting strategy in a meeting room"
          className="h-80 w-full rounded-xl object-cover"
        />

        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">Our Mission</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                To equip every African entrepreneur and SME owner with the knowledge, tools, and support they
                need to build sustainable, profitable businesses &mdash; regardless of their starting point.
              </p>
            </div>
          </div>

          <div className="border-t border-border" />

          <div className="flex gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Eye className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">Our Vision</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A continent where every ambitious entrepreneur has access to the same quality of business
                education and tools that their counterparts in any developed market enjoy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
