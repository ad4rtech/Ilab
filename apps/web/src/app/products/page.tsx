import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Newsletter } from "@/components/shared/Newsletter"
import { ProductsHero } from "@/components/products/ProductsHero"
import { ProductsSidebar } from "@/components/products/ProductsSidebar"
import { ProductGrid } from "@/components/products/ProductGrid"
import { ProductPerks } from "@/components/products/ProductPerks"

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProductsHero />
        <section className="bg-white py-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row">
            <ProductsSidebar />
            <ProductGrid />
          </div>
        </section>
        <ProductPerks />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
