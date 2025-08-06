
"use client"

import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Shield } from "lucide-react"
import { motion } from "framer-motion"

export function ContactHero() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <Badge variant="secondary" className="w-fit mx-auto">
            Get Your Free Quote
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Let's Discuss Your{" "}
            <span className="text-blue-600">Medical Content</span> Needs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your healthcare content? Get a free consultation and personalized 
            quote from our licensed Physician Assistant.
          </p>

          {/* Quick Benefits */}
          <div className="flex flex-wrap justify-center gap-6 pt-6">
            {[
              { icon: CheckCircle, text: "Free Consultation" },
              { icon: Clock, text: "24hr Response" },
              { icon: Shield, text: "HIPAA Compliant" },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex items-center space-x-2 text-gray-700"
              >
                <benefit.icon className="h-5 w-5 text-blue-600" />
                <span className="font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
