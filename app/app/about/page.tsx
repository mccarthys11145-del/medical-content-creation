
import { AboutHero } from "@/components/about/about-hero"
import { ExpertiseSection } from "@/components/about/expertise-section"
import { CredentialsSection } from "@/components/about/credentials-section"
import { AIApproachSection } from "@/components/about/ai-approach-section"
import { ValuesSection } from "@/components/about/values-section"

export const metadata = {
  title: "About | Licensed Physician Assistant - Medical Content Expert",
  description: "Meet our licensed Physician Assistant specializing in AI-enhanced medical content creation. Combining clinical expertise with cutting-edge technology for superior healthcare content.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ExpertiseSection />
      <CredentialsSection />
      <AIApproachSection />
      <ValuesSection />
    </>
  )
}
