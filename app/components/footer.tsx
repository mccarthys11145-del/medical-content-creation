
import Link from "next/link"
import { FileText, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <FileText className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xl font-bold">MedContent</span>
                <span className="text-sm text-muted-foreground ml-1">PA</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              AI-Enhanced Medical Content Creation by Licensed Physician Assistant
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services#patient-education" className="hover:text-foreground transition-colors">Patient Education</Link></li>
              <li><Link href="/services#clinical-content" className="hover:text-foreground transition-colors">Clinical Content</Link></li>
              <li><Link href="/services#regulatory" className="hover:text-foreground transition-colors">Regulatory Writing</Link></li>
              <li><Link href="/services#research" className="hover:text-foreground transition-colors">Research Summaries</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Pennsylvania & Utah</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <Link href="/contact" className="hover:text-foreground transition-colors">Get in Touch</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 MedContent PA. Professional medical content creation services.</p>
        </div>
      </div>
    </footer>
  )
}
