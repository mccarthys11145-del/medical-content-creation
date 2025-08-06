
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"

export const metadata = {
  title: "Blog | Medical Writing Insights | MedContent PA",
  description: "Expert insights on medical writing, healthcare content creation, and industry best practices from our licensed Physician Assistant.",
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
    </>
  )
}
