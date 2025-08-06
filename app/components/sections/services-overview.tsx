
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  FileText, 
  Shield, 
  BarChart3, 
  Pill, 
  Building2,
  ArrowRight,
  Clock,
  DollarSign
} from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Users,
    title: "Patient-Centered Translation",
    description: "Complex medical information translated for varying health literacy levels while preserving critical nuance.",
    features: ["Multi-level Literacy", "Cultural Sensitivity", "Decision Support"],
    pricing: "From $150/hour",
    deliveryTime: "2-4 days",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: FileText,
    title: "AI Healthcare Literacy",
    description: "Educational content helping patients and providers understand AI's role in modern healthcare.",
    features: ["Micro-learning Series", "Interactive Content", "Evidence-based"],
    pricing: "$200-400/piece",
    deliveryTime: "1-3 days",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Shield,
    title: "Rare Disease Resources",
    description: "Comprehensive, accurate information for overlooked patient populations with specialized needs.",
    features: ["Community Focus", "Caregiver Support", "Advocacy Tools"],
    pricing: "From $175/hour",
    deliveryTime: "3-7 days",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: BarChart3,
    title: "Cultural Health Content",
    description: "Healthcare materials addressing cultural considerations, health disparities, and traditional medicine interactions.",
    features: ["Cultural Competency", "Multilingual Options", "Community-focused"],
    pricing: "From $125/hour",
    deliveryTime: "3-5 days",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Pill,
    title: "Interactive Decision Tools",
    description: "Personalized content helping patients work through complex medical decisions and understand treatment options.",
    features: ["Decision Trees", "Risk Communication", "Preference-sensitive"],
    pricing: "$500-2000/project",
    deliveryTime: "1-2 weeks",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    icon: Building2,
    title: "Transition Care Guides",
    description: "Bridging care setting gaps - pediatric to adult, hospital to home, curative to palliative care.",
    features: ["Care Coordination", "Family Support", "System Navigation"],
    pricing: "From $100/hour",
    deliveryTime: "2-5 days",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <Badge variant="secondary" className="w-fit mx-auto">
            Professional Services
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Specialized Content for Healthcare's Overlooked Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert content targeting underserved markets where quality resources are scarce but patient need is critical - from rare diseases to cultural health, AI literacy to complex medical decisions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
                    <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">Pricing</span>
                      </div>
                      <span className="font-medium text-gray-900">{service.pricing}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">Delivery</span>
                      </div>
                      <span className="font-medium text-gray-900">{service.deliveryTime}</span>
                    </div>
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
            <Link href="/services" className="inline-flex items-center space-x-2">
              <span>View All Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
