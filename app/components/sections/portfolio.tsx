
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  FileText, 
  Users, 
  Shield, 
  BarChart3, 
  Pill, 
  Building2,
  ArrowRight,
  Eye,
  Calendar
} from "lucide-react"
import { motion } from "framer-motion"

const portfolioSamples = [
  {
    id: "diabetes-management-guide",
    title: "Diabetes Management Guide",
    type: "Patient-Centered Translation",
    description: "6th-grade level guide translating complex diabetes management into actionable, accessible information for patients and caregivers.",
    icon: Users,
    wordCount: 750,
    audience: "Patients & caregivers (core chronic disease)",
    category: "patient-education",
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
    category: "clinical-content",
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
    category: "regulatory-writing",
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
    category: "ai-education",
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
    category: "strategic-content",
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
    category: "interactive-tools",
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
    category: "thought-leadership",
    iconColor: "text-pink-600",
    bgColor: "bg-pink-50",
  },
]

export function Portfolio() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <Badge variant="secondary" className="w-fit mx-auto">
            Portfolio Showcase
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Underserved Content Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized content targeting healthcare's overlooked but critical needs—from patient-centered translation to AI literacy, interactive decision tools to cultural competency resources.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioSamples.map((sample, index) => (
            <motion.div
              key={sample.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
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
                      <div className="font-medium">{sample.wordCount} words</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-gray-500">Audience</div>
                      <div className="font-medium text-xs leading-tight">{sample.audience}</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <Link 
                      href={`/portfolio/${sample.id}`}
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                    >
                      <Eye className="h-4 w-4" />
                      <span>View Sample</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild>
            <Link href="/portfolio" className="inline-flex items-center space-x-2">
              <span>View Full Portfolio</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
