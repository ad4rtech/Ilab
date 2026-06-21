import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Newsletter } from "@/components/shared/Newsletter"
import { AboutHero } from "@/components/about/AboutHero"
import { AboutStats } from "@/components/about/AboutStats"
import { MissionVision } from "@/components/about/MissionVision"
import { CoreValues } from "@/components/about/CoreValues"
import { FounderSpotlight } from "@/components/about/FounderSpotlight"
import { TeamGrid } from "@/components/about/TeamGrid"
import { Milestones } from "@/components/about/Milestones"
import { AboutCTA } from "@/components/about/AboutCTA"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutStats />
        <MissionVision />
        <CoreValues />
        <FounderSpotlight />
        <TeamGrid />
        <Milestones />
        <AboutCTA />
      </main>
      <Newsletter />
      <Footer />
    </>
  )
}
