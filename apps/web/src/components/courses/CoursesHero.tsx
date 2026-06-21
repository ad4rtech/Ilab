const features = ["Lifetime access", "Certificate of completion", "Mobile-friendly", "Community support"]

export function CoursesHero() {
  return (
    <section className="bg-blue-600 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-medium text-white/75">iLab Growth Learning Platform</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl">Learn. Grow. Succeed.</h1>
        <p className="mt-4 max-w-2xl text-white/85">
          Browse 150+ expert-led courses and digital resources built specifically for African entrepreneurs and
          SME owners. At your own pace, on any device.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/80">
          {features.map((f) => (
            <span key={f}>{f}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
