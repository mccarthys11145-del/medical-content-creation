
import { notFound } from "next/navigation"
import { PortfolioSampleView } from "@/components/portfolio/portfolio-sample-view"

const portfolioSamples = {
  "diabetes-management-guide": {
    title: "Diabetes Management Guide",
    type: "Patient-Centered Translation",
    filename: "diabetes_management_guide.md",
    description: "6th-grade level guide translating complex diabetes management into actionable, accessible information for patients and caregivers with core chronic diseases."
  },
  "hypertension-treatment-protocol": {
    title: "Hypertension Treatment Protocol", 
    type: "Clinical Protocol",
    filename: "hypertension_treatment_protocol.md",
    description: "Evidence-based clinical protocol for healthcare providers covering systematic hypertension management and risk stratification."
  },
  "fda-device-approval-process": {
    title: "FDA Device Approval Process",
    type: "Regulatory Technical Guide", 
    filename: "fda_device_approval_process.md",
    description: "Comprehensive technical implementation guide for med-tech and regulatory teams navigating FDA approval pathways."
  },
  "ai-literacy-basics-series": {
    title: "AI Literacy Basics – Micro-series",
    type: "Patient Education Series",
    filename: "ai_literacy_basics_series.md", 
    description: "5-part micro-series of explainer cards helping patients and general public understand AI in healthcare."
  },
  "ai-workflow-integration-guide": {
    title: "AI Workflow Integration Guide",
    type: "Strategic White Paper",
    filename: "ai_workflow_integration_guide.md",
    description: "Comprehensive implementation framework for health-system leaders deploying AI workflow integration."
  },
  "interactive-diagnosis-simulation": {
    title: "Interactive 'Choose-Your-Diagnosis' Simulation", 
    type: "Interactive Content",
    filename: "interactive_diagnosis_simulation.md",
    description: "MVP 5-step web flow demonstration for patients and clinicians showing clinical diagnostic reasoning process."
  },
  "telemedicine-future-blog": {
    title: "Future of Telemedicine Blog Post",
    type: "Executive Content",
    filename: "telemedicine_future_blog.md",
    description: "Strategic analysis blog post for healthcare executives and marketers on telemedicine trends and opportunities."
  }
}

export async function generateStaticParams() {
  return Object.keys(portfolioSamples).map((id) => ({
    id: id,
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const sample = portfolioSamples[params?.id as keyof typeof portfolioSamples]
  
  if (!sample) {
    return {
      title: "Portfolio Sample Not Found",
    }
  }

  return {
    title: `${sample.title} | Portfolio Sample | MedContent PA`,
    description: sample.description,
  }
}

export default function PortfolioSamplePage({ params }: { params: { id: string } }) {
  const sample = portfolioSamples[params?.id as keyof typeof portfolioSamples]
  
  if (!sample) {
    notFound()
  }

  return <PortfolioSampleView sample={sample} />
}
