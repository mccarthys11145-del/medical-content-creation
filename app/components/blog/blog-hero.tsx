
"use client"

import { Badge } from "@/components/ui/badge"
import { PenTool, BookOpen, Users } from "lucide-react"
import { motion } from "framer-motion"

export function BlogHero() {
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
            Medical Writing Insights
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Healthcare Content{" "}
            <span className="text-blue-600">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert insights, industry trends, and best practices in medical content creation 
            from our licensed Physician Assistant.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-6">
            {[
              { icon: PenTool, label: "Content Strategy" },
              { icon: BookOpen, label: "Industry Insights" },
              { icon: Users, label: "Healthcare Trends" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex items-center space-x-2 text-gray-700"
              >
                <item.icon className="h-5 w-5 text-blue-600" />
                <span className="font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
