const team = [
  {
    name: "Dr. Ifeoma Obi",
    role: "Founder & CEO",
    bio: "Former strategy consultant with 15+ years helping African SMEs scale. MBA from Lagos Business School. Founded iLab Growth in 2019.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Kwame Asante",
    role: "Head of Courses",
    bio: "Certified business coach and finance expert. Built and delivered training programs for 200+ SMEs across Ghana, Kenya, and Nigeria.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Ngozi Okafor",
    role: "Head of Digital Products",
    bio: "Entrepreneur and product designer. Previously launched two e-commerce businesses before joining iLab Growth to lead the digital store.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Emmanuel Osei",
    role: "Lead Business Consultant",
    bio: "10 years in corporate strategy and SME consulting across West Africa. Specialises in growth acceleration and team leadership.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
]

export function TeamGrid() {
  return (
    <section className="bg-amber-50/60 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">Who We Are</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Meet the iLab Growth Team</h2>
          <p className="mt-4 text-muted-foreground">
            A small, passionate team of African business experts, educators, and entrepreneurs united by one
            goal: your growth.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="overflow-hidden rounded-xl bg-white">
              <img src={member.image} alt={member.name} className="aspect-square w-full object-cover" />
              <div className="p-5">
                <h3 className="font-display text-base font-semibold">{member.name}</h3>
                <p className="mt-0.5 text-xs font-medium text-amber-600">{member.role}</p>
                <p className="mt-2 text-xs text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
