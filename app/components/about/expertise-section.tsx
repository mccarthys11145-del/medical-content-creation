
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Stethoscope, 
  Brain, 
  Heart, 
  Shield, 
  Users, 
  BookOpen,
  CheckCircle
} from "lucide-react"
import { motion } from "framer-motion"

const clinicalAreas = [
  {
    icon: Heart,
    title: "Cardiovascular Medicine",
    description: "Extensive experience in cardiac care, from prevention to advanced interventions",
    experience: "5+ years",
  },
  {
    icon: Brain,
    title: "Internal Medicine",
    description: "Comprehensive adult medicine including chronic disease management",
    experience: "7+ years",
  },
  {
    icon: Users,
    title: "Patient Education",
    description: "Specialized in creating clear, actionable health information for diverse populations",
    experience: "100+ materials",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Deep understanding of healthcare regulations, FDA guidelines, and HIPAA requirements",
    experience: "Certified",
  },
]

const contentExpertise = [
  "Patient Education Materials",
  "Clinical Practice Guidelines", 
  "Medical Device Documentation",
  "Pharmaceutical Content",
  "Health Policy Analysis",
  "Research Synthesis",
  "Regulatory Writing",
  "Healthcare Marketing",
]

export function ExpertiseSection() {
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
            Clinical & Content Expertise
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Deep Healthcare Knowledge Across Specialties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My clinical background spans multiple healthcare settings, providing the real-world 
            experience needed to create content that resonates with both providers and patients.
          </p>
        </motion.div>

        {/* Clinical Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {clinicalAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <area.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                      <Badge variant="outline" className="text-xs mt-1">
                        {area.experience}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{area.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Content Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-blue-50 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Content Specializations</h3>
            <p className="text-gray-600">
              Types of medical content I create with clinical precision and clarity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contentExpertise.map((expertise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm"
              >
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium text-sm">{expertise}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="p-8">
              <BookOpen className="h-8 w-8 mx-auto mb-4 text-blue-200" />
              <h3 className="text-2xl font-bold mb-4">My Content Philosophy</h3>
              <p className="text-blue-100 text-lg leading-relaxed max-w-3xl mx-auto">
                "Every piece of medical content should be scientifically accurate, clinically relevant, 
                and accessible to its intended audience. Whether educating patients or informing providers, 
                clarity and precision are non-negotiable."
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
