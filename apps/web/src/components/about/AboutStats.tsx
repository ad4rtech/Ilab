const stats = [
  { value: "12,000+", label: "Entrepreneurs Trained" },
  { value: "150+", label: "Digital Products & Courses" },
  { value: "18", label: "African Countries Reached" },
  { value: "94%", label: "Client Satisfaction Rate" },
]

export function AboutStats() {
  return (
    <section className="bg-amber-50/60 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-3xl font-bold text-blue-600 sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
