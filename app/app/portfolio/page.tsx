
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"

export const metadata = {
  title: "Portfolio | Medical Content Samples | MedContent PA",
  description: "Explore our portfolio of professional medical content including patient education, clinical summaries, regulatory documents, and research materials created by licensed Physician Assistant.",
}

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
    </>
  )
}
