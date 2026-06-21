import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Testimonials } from "@/components/shared/Testimonials"
import { ServicesHero } from "@/components/services/ServicesHero"
import { ServicesPricing } from "@/components/services/ServicesPricing"
import { PlaybookBanner } from "@/components/services/PlaybookBanner"
import { HowItWorks } from "@/components/services/HowItWorks"
import { ConsultationSection } from "@/components/services/ConsultationSection"

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesPricing />
        <PlaybookBanner />
        <HowItWorks />
        <ConsultationSection />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
