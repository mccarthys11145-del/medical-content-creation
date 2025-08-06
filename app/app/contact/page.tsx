
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata = {
  title: "Contact Us | MedContent PA - Get Your Medical Content Quote",
  description: "Contact our licensed Physician Assistant for professional medical content creation. Get your free quote for patient education, clinical content, and regulatory writing services.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  )
}
