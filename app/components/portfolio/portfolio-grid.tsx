
"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  FileText, 
  Users, 
  Shield, 
  BarChart3, 
  Pill, 
  Building2,
  Eye,
  Download
} from "lucide-react"
import { motion } from "framer-motion"

const portfolioSamples = [
  {
    id: "diabetes-management-guide",
    title: "Diabetes Management Guide",
    type: "Patient-Centered Translation",
    description: "6th-grade level guide translating complex diabetes management into actionable, accessible information for patients and caregivers with core chronic diseases.",
    icon: Users,
    wordCount: 750,
    audience: "Patients & caregivers (core chronic disease)",
    readingLevel: "6th Grade",
    filename: "diabetes_management_guide.md",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "hypertension-treatment-protocol",
    title: "Hypertension Treatment Protocol",
    type: "Clinical Protocol",
    description: "Evidence-based clinical protocol for healthcare providers covering systematic hypertension management and risk stratification.",
    icon: FileText,
    wordCount: 780,
    audience: "Physicians, PAs, NPs",
    readingLevel: "Professional",
    filename: "hypertension_treatment_protocol.md",
    iconColor: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    id: "fda-device-approval-process",
    title: "FDA Device Approval Process",
    type: "Regulatory Technical Guide",
    description: "Comprehensive technical implementation guide for med-tech and regulatory teams navigating FDA approval pathways.",
    icon: Shield,
    wordCount: 800,
    audience: "Med-tech / regulatory teams",
    readingLevel: "Technical",
    filename: "fda_device_approval_process.md",
    iconColor: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    id: "ai-literacy-basics-series",
    title: "AI Literacy Basics – Micro-series",
    type: "Patient Education Series",
    description: "5-part micro-series of explainer cards helping patients and general public understand AI in healthcare.",
    icon: BarChart3,
    wordCount: 1700,
    audience: "Patients & general public",
    readingLevel: "Accessible",
    filename: "ai_literacy_basics_series.md",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: "ai-workflow-integration-guide",
    title: "AI Workflow Integration Guide",
    type: "Strategic White Paper",
    description: "Comprehensive implementation framework for health-system leaders deploying AI workflow integration.",
    icon: Building2,
    wordCount: 1000,
    audience: "Health-system leaders & clinicians",
    readingLevel: "Executive",
    filename: "ai_workflow_integration_guide.md",
    iconColor: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    id: "interactive-diagnosis-simulation",
    title: "Interactive 'Choose-Your-Diagnosis' Simulation",
    type: "Interactive Content",
    description: "MVP 5-step web flow demonstration for patients and clinicians showing clinical diagnostic reasoning process.",
    icon: Pill,
    wordCount: 2000,
    audience: "Patients & clinicians (demo)",
    readingLevel: "Interactive",
    filename: "interactive_diagnosis_simulation.md",
    iconColor: "text-teal-600",
    bgColor: "bg-teal-50",
  },
  {
    id: "telemedicine-future-blog",
    title: "Future of Telemedicine Blog Post",
    type: "Executive Content",
    description: "Strategic analysis blog post for healthcare executives and marketers on telemedicine trends and opportunities.",
    icon: Users,
    wordCount: 800,
    audience: "Healthcare executives & marketers",
    readingLevel: "Executive",
    filename: "telemedicine_future_blog.md",
    iconColor: "text-pink-600",
    bgColor: "bg-pink-50",
  },
]

export function PortfolioGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioSamples.map((sample, index) => (
            <motion.div
              key={sample.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-lg ${sample.bgColor} flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
                      <sample.icon className={`h-6 w-6 ${sample.iconColor}`} />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {sample.type}
                    </Badge>
                  </div>
                  <div>
                    <CardTitle className="text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      {sample.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {sample.description}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-1">
                      <div className="text-gray-500">Word Count</div>
                      <div className="font-medium">{sample.wordCount}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-gray-500">Reading Level</div>
                      <div className="font-medium text-xs">{sample.readingLevel}</div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-gray-500 text-sm">Target Audience</div>
                    <div className="font-medium text-sm">{sample.audience}</div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex gap-2">
                    <Button size="sm" className="flex-1" asChild>
                      <Link href={`/portfolio/${sample.id}`} className="inline-flex items-center justify-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>View</span>
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a 
                        href={`/portfolio_samples/${sample.filename}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-1"
                      >
                        <Download className="h-3 w-3" />
                        <span>Download</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready for Your Custom Medical Content?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              These samples demonstrate our capability across different medical content types. 
              Let's discuss how we can create tailored content for your specific needs.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get Your Free Quote</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
