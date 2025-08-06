
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, FileText, Eye } from "lucide-react"
import { motion } from "framer-motion"

interface PortfolioSample {
  title: string
  type: string
  filename: string
  description: string
}

interface PortfolioSampleViewProps {
  sample: PortfolioSample
}

export function PortfolioSampleView({ sample }: PortfolioSampleViewProps) {
  return (
    <div className="py-16">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/portfolio" className="inline-flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Portfolio</span>
              </Link>
            </Button>
          </div>

          {/* Header */}
          <div className="space-y-6 mb-8">
            <div className="flex items-start justify-between">
              <div className="space-y-4">
                <Badge variant="secondary">{sample.type}</Badge>
                <h1 className="text-4xl font-bold text-gray-900">{sample.title}</h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {sample.description}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a 
                  href={`/portfolio_samples/${sample.filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2"
                >
                  <Eye className="h-4 w-4" />
                  <span>View Full Sample</span>
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a 
                  href={`/portfolio_samples/${sample.filename}`}
                  download
                  className="inline-flex items-center space-x-2"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Sample</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Sample Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Sample Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Content Type</h4>
                  <p className="text-gray-600">{sample.type}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Format</h4>
                  <p className="text-gray-600">Markdown (.md)</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What This Sample Demonstrates</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Medical accuracy and evidence-based content</li>
                  <li>• Appropriate audience targeting and communication style</li>
                  <li>• Professional formatting and structure</li>
                  <li>• Clinical expertise combined with clear writing</li>
                  <li>• Compliance with healthcare content standards</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Need Similar Content for Your Organization?
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                This sample showcases our capability in creating {sample.type.toLowerCase()}. 
                Let's discuss how we can create customized medical content that meets your specific needs and objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Your Free Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
