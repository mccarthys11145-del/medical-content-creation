
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, MapPin, Clock, Users } from "lucide-react"
import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Licensed Healthcare Professional
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Where Clinical Expertise Meets{" "}
                <span className="text-blue-600">AI Innovation</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                I'm a licensed Physician Assistant combining years of clinical experience 
                with cutting-edge AI technology to deliver medical content that's both 
                accurate and accessible.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 py-6">
              {[
                { icon: Award, value: "Licensed PA", label: "Pennsylvania & Utah" },
                { icon: Users, value: "50+ Projects", label: "Healthcare Organizations" },
                { icon: Clock, value: "48hr", label: "Average Turnaround" },
                { icon: MapPin, value: "100%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">View My Work</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border">
              <div className="text-center space-y-6">
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">PA</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Licensed Physician Assistant</h3>
                  <p className="text-blue-600 font-medium">Medical Content Specialist</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-gray-600">
                    <Award className="h-4 w-4" />
                    <span className="text-sm">PA License: Pennsylvania & Utah</span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Badge className="bg-green-100 text-green-800">HIPAA Certified</Badge>
                    <Badge className="bg-blue-100 text-blue-800">Clinical Practice</Badge>
                    <Badge className="bg-purple-100 text-purple-800">AI-Enhanced</Badge>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 text-center">
                  <p className="text-sm text-gray-600 italic">
                    "Bridging the gap between clinical expertise and accessible healthcare communication"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
