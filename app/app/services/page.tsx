
import { ServicesOverview } from "@/components/sections/services-overview"
import { CTASection } from "@/components/sections/cta-section"

export const metadata = {
  title: "Medical Content Creation Services | MedContent PA",
  description: "Professional medical writing services including patient education, clinical content, regulatory documentation, and research summaries by licensed Physician Assistant.",
}

export default function ServicesPage() {
  return (
    <div className="pt-8">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Professional Medical Content Services
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Comprehensive medical writing solutions by licensed Physician Assistant, 
          enhanced with AI technology for superior accuracy and efficiency.
        </p>
      </div>
      <ServicesOverview />
      <CTASection />
    </div>
  )
}
