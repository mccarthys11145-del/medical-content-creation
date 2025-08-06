
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Heart, 
  Shield, 
  Users, 
  Target, 
  Clock,
  ArrowRight
} from "lucide-react"
import { motion } from "framer-motion"

const coreValues = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Every piece of content is created with the patient's well-being and understanding at the forefront.",
    principle: "Healthcare serves people, not profits",
  },
  {
    icon: Shield,
    title: "Unwavering Accuracy",
    description: "Medical precision is non-negotiable. All content undergoes rigorous fact-checking and clinical review.",
    principle: "Lives depend on accurate information",
  },
  {
    icon: Users,
    title: "Accessible Communication",
    description: "Complex medical concepts translated into clear, actionable language for every audience.",
    principle: "Knowledge should empower, not confuse",
  },
  {
    icon: Target,
    title: "Evidence-Based Practice",
    description: "All recommendations and information are grounded in current research and clinical guidelines.",
    principle: "Science guides every decision",
  },
  {
    icon: Clock,
    title: "Reliable Partnership",
    description: "Consistent quality, timely delivery, and transparent communication in every project.",
    principle: "Trust is earned through reliability",
  },
]

export function ValuesSection() {
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
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Values That Guide Every Project
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These principles shape how I approach medical content creation, 
            ensuring that every piece serves its purpose with integrity and excellence.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-200">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-medium text-blue-600 italic">
                      "{value.principle}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-12 text-white text-center relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
          </div>
          
          <div className="relative z-10 space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold">My Mission</h3>
            <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              To bridge the gap between complex medical knowledge and clear, actionable communication—
              empowering healthcare organizations to better serve their patients and communities through 
              content that educates, informs, and inspires confidence in healthcare decisions.
            </p>
            <div className="pt-6">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                <Link href="/contact" className="inline-flex items-center space-x-2">
                  <span>Start Your Project</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Commitment Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">My Commitment to You</h3>
            <p className="text-gray-600 leading-relaxed">
              When you choose to work with me, you're not just getting a content creator—you're 
              partnering with a licensed healthcare professional who understands the weight of 
              medical communication and the trust patients place in the information they receive.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="space-y-4">
              {[
                "Medically accurate content, always",
                "Clear, accessible communication",
                "HIPAA-compliant processes",
                "Transparent project communication",
                "Timely delivery on commitments",
              ].map((commitment, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-gray-700">{commitment}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
