import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Newsletter } from "@/components/shared/Newsletter"
import { BlogHero } from "@/components/blog/BlogHero"
import { FeaturedArticle } from "@/components/blog/FeaturedArticle"
import { ArticleGrid } from "@/components/blog/ArticleGrid"
import { BlogSidebar } from "@/components/blog/BlogSidebar"

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogHero />
        <section className="bg-white py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-xl font-bold">Latest Articles</h2>
                  <select className="rounded-md border border-border bg-white px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Most Recent</option>
                    <option>Most Popular</option>
                    <option>Oldest</option>
                  </select>
                </div>
                <div className="mt-4">
                  <FeaturedArticle />
                </div>
                <ArticleGrid />
              </div>
              <BlogSidebar />
            </div>
          </div>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
