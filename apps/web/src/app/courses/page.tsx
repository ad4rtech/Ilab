import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Newsletter } from "@/components/shared/Newsletter"
import { CoursesHero } from "@/components/courses/CoursesHero"
import { CourseFilters } from "@/components/courses/CourseFilters"
import { CourseGrid } from "@/components/courses/CourseGrid"
import { CoursePerks } from "@/components/courses/CoursePerks"

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main>
        <CoursesHero />
        <CourseFilters />
        <CourseGrid />
        <CoursePerks />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
