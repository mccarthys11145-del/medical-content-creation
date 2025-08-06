
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Award, 
  GraduationCap, 
  MapPin, 
  Shield, 
  FileCheck,
  Clock,
  Users,
  Star
} from "lucide-react"
import { motion } from "framer-motion"

const credentials = [
  {
    icon: Award,
    title: "Licensed Physician Assistant",
    details: ["Pennsylvania State License", "Utah State License", "Active & In Good Standing"],
    year: "Current",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Shield,
    title: "HIPAA Compliance Certification", 
    details: ["Privacy & Security Rules", "Healthcare Information Protection", "Annual Recertification"],
    year: "2024",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: GraduationCap,
    title: "Clinical Experience",
    details: ["Internal Medicine", "Cardiovascular Care", "Patient Education", "Quality Improvement"],
    year: "7+ Years",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: FileCheck,
    title: "Medical Writing Portfolio",
    details: ["50+ Completed Projects", "Healthcare Organizations", "Regulatory Documentation"],
    year: "3+ Years",
    color: "bg-orange-100 text-orange-600",
  },
]

const achievements = [
  {
    metric: "100%",
    label: "License Compliance",
    description: "Active PA licenses in multiple states",
  },
  {
    metric: "50+",
    label: "Projects Completed",
    description: "Successful medical content deliveries",
  },
  {
    metric: "98%",
    label: "Accuracy Rate",
    description: "Clinical accuracy in all content",
  },
  {
    metric: "48hr",
    label: "Avg Response",
    description: "Quick turnaround on projects",
  },
]

export function CredentialsSection() {
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
            Professional Credentials
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Licensed & Certified Healthcare Professional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My qualifications ensure that every piece of content meets the highest standards 
            of medical accuracy and regulatory compliance.
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {credentials.map((credential, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${credential.color}`}>
                        <credential.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{credential.title}</CardTitle>
                        <Badge variant="outline" className="text-xs mt-1">
                          {credential.year}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {credential.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">By the Numbers</h3>
            <p className="text-gray-600">
              Quantified results demonstrating reliability and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-2"
              >
                <div className="text-3xl font-bold text-blue-600">{achievement.metric}</div>
                <div className="font-semibold text-gray-900">{achievement.label}</div>
                <div className="text-sm text-gray-600">{achievement.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Verification Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6"
        >
          <div className="flex items-start space-x-3">
            <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Credential Verification</h4>
              <p className="text-blue-800 text-sm">
                All professional licenses and certifications are current and verifiable through 
                respective state licensing boards. Documentation available upon request for qualified projects.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
