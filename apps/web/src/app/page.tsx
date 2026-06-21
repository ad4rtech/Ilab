import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/home/Hero"
import { Offerings } from "@/components/home/Offerings"
import { FeaturedProducts } from "@/components/home/FeaturedProducts"
import { Testimonials } from "@/components/shared/Testimonials"
import { BlogPreview } from "@/components/home/BlogPreview"
import { Newsletter } from "@/components/shared/Newsletter"
import { Footer } from "@/components/layout/Footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Offerings />
        <FeaturedProducts />
        <Testimonials />
        <BlogPreview />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
