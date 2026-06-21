import { Star, Clock, PlayCircle, Users } from "lucide-react"

const badgeStyles: Record<string, string> = {
  Bestseller: "bg-amber-600 text-white",
  New: "bg-blue-600 text-white",
  Popular: "bg-purple-600 text-white",
  "Top Pick": "bg-white text-zinc-900",
}

const courses = [
  {
    badge: "Bestseller",
    level: "Beginner",
    category: "Marketing",
    title: "Digital Marketing Masterclass for African Businesses",
    instructor: "Dr. Amara Mensah",
    duration: "8h 30m",
    lessons: 24,
    students: "2,400",
    rating: 4.9,
    reviews: 312,
    price: 49,
    originalPrice: 89,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
  },
  {
    badge: "Popular",
    level: "Beginner",
    category: "Finance",
    title: "SME Finance & Accounting Fundamentals",
    instructor: "Kwame Asante",
    duration: "6h 15m",
    lessons: 18,
    students: "1,850",
    rating: 4.7,
    reviews: 256,
    price: 39,
    originalPrice: 69,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
  },
  {
    badge: "New",
    level: "Intermediate",
    category: "E-commerce",
    title: "Building a Profitable E-commerce Store from Scratch",
    instructor: "Ngozi Okafor",
    duration: "10h 00m",
    lessons: 32,
    students: "1,200",
    rating: 4.8,
    reviews: 198,
    price: 59,
    originalPrice: 99,
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=600&q=80",
  },
  {
    badge: "Top Pick",
    level: "Intermediate",
    category: "Leadership",
    title: "Leadership & Team Management for SME Owners",
    instructor: "Emmanuel Osei",
    duration: "5h 45m",
    lessons: 16,
    students: "980",
    rating: 4.6,
    reviews: 141,
    price: 45,
    originalPrice: 79,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80",
  },
  {
    badge: "Bestseller",
    level: "Beginner",
    category: "Marketing",
    title: "Social Media Growth for Small Businesses",
    instructor: "Fatima Diallo",
    duration: "4h 30m",
    lessons: 14,
    students: "3,100",
    rating: 4.8,
    reviews: 289,
    price: 35,
    originalPrice: 59,
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=600&q=80",
  },
  {
    badge: "Beginner",
    level: "Beginner",
    category: "Tech & Digital",
    title: "Tech Tools for Non-Tech Entrepreneurs",
    instructor: "David Kofi",
    duration: "3h 50m",
    lessons: 12,
    students: "1,450",
    rating: 4.5,
    reviews: 173,
    price: 29,
    originalPrice: 49,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
  },
]

export function CourseGrid() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold">All Courses</h2>
            <p className="mt-1 text-sm text-muted-foreground">Showing 6 of 152 courses</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Sort by:</span>
            <select className="rounded-md border border-border bg-white px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div key={course.title} className="overflow-hidden rounded-xl border border-border">
              <div className="relative">
                <img src={course.image} alt={course.title} className="h-48 w-full object-cover" />
                <span
                  className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${
                    badgeStyles[course.badge] ?? "bg-zinc-900 text-white"
                  }`}
                >
                  {course.badge}
                </span>
                <span className="absolute right-3 top-3 rounded-full bg-zinc-900/80 px-3 py-1 text-xs font-semibold text-white">
                  {course.level}
                </span>
              </div>

              <div className="p-5">
                <p className="text-xs font-semibold text-amber-600">{course.category}</p>
                <h3 className="mt-1 font-display text-base font-semibold leading-snug">{course.title}</h3>

                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="h-5 w-5 rounded-full bg-zinc-200" />
                  <span>{course.instructor}</span>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <PlayCircle className="h-3.5 w-3.5" /> {course.lessons} lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" /> {course.students}
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-1 text-xs">
                  <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                  <span className="font-medium text-foreground">{course.rating}</span>
                  <span className="text-muted-foreground">({course.reviews})</span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-lg font-bold">${course.price}</span>
                    <span className="text-sm text-muted-foreground line-through">${course.originalPrice}</span>
                  </div>
                  <button className="rounded-md bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="flex items-center gap-2 rounded-md border border-border px-6 py-2.5 text-sm font-medium text-blue-600 hover:bg-blue-50">
            Load More Courses
          </button>
        </div>
      </div>
    </section>
  )
}
