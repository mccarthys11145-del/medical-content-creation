
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, Clock, Award } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 lg:py-28">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Licensed PA • Pennsylvania & Utah
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Specialized{" "}
                <span className="text-blue-600">Medical Content</span>{" "}
                for Underserved Markets
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert healthcare content targeting overlooked but critical areas—from patient-centered translation to AI literacy, rare diseases to cultural health needs—created by a licensed PA using advanced AI.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: CheckCircle, text: "Underserved Market Expertise" },
                { icon: Clock, text: "Cultural Competency Focus" },
                { icon: Award, text: "Licensed PA + AI Innovation" },
                { icon: FileText, text: "Patient-Centered Translation" },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <benefit.icon className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" asChild>
                <Link href="/contact">Get Your Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-6 border-t border-gray-200"
            >
              <p className="text-sm text-gray-500 mb-2">Serving underserved markets</p>
              <div className="flex items-center space-x-6 text-xs font-medium text-gray-400">
                <span>Rare Disease Orgs</span>
                <span>•</span>
                <span>Cultural Health Centers</span>
                <span>•</span>
                <span>AI Healthcare Teams</span>
                <span>•</span>
                <span>Patient Advocates</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Content Quality Metrics</h3>
                  <Badge className="bg-green-100 text-green-800">98% Accuracy</Badge>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: "Medical Accuracy", value: 98, color: "bg-blue-500" },
                    { label: "Client Satisfaction", value: 100, color: "bg-green-500" },
                    { label: "On-time Delivery", value: 96, color: "bg-purple-500" },
                  ].map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{metric.label}</span>
                        <span className="font-medium">{metric.value}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${metric.value}%` }}
                          transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                          className={`h-full ${metric.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">50+</div>
                      <div className="text-xs text-gray-500">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">15</div>
                      <div className="text-xs text-gray-500">Clients</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">48hr</div>
                      <div className="text-xs text-gray-500">Avg. Turnaround</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
