
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Chief Medical Officer",
    company: "Regional Health System",
    content: "The quality of patient education materials exceeded our expectations. The content was medically accurate, culturally sensitive, and written at the perfect health literacy level for our diverse patient population.",
    rating: 5,
    projectType: "Patient Education Materials",
    avatar: "SC",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "Regulatory Affairs Director",
    company: "MedTech Solutions",
    content: "Outstanding regulatory writing services. The FDA submission documents were comprehensive, well-organized, and helped us secure approval 3 months ahead of schedule. The clinical expertise really showed.",
    rating: 5,
    projectType: "FDA Regulatory Documentation",
    avatar: "MR",
  },
  {
    id: 3,
    name: "Jennifer Walsh",
    title: "VP of Medical Communications",
    company: "PharmaCore Inc.",
    content: "Exceptional pharmaceutical content creation. The medication adherence materials were evidence-based, engaging, and resulted in a 23% improvement in patient compliance metrics.",
    rating: 5,
    projectType: "Pharmaceutical Content",
    avatar: "JW",
  },
  {
    id: 4,
    name: "Dr. Kevin Park",
    title: "Director of Clinical Research",
    company: "CardioVascular Institute",
    content: "The research summaries were incredibly thorough and well-synthesized. Complex cardiology research was distilled into clear, actionable insights that our clinical team could immediately implement.",
    rating: 5,
    projectType: "Clinical Research Summaries",
    avatar: "KP",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    title: "Healthcare Marketing Manager",
    company: "Metro Hospital Network",
    content: "Professional healthcare content that perfectly balanced medical accuracy with patient accessibility. Our website engagement increased by 45% after implementing the new content strategy.",
    rating: 5,
    projectType: "Healthcare Marketing Content",
    avatar: "LT",
  },
  {
    id: 6,
    name: "Dr. Amanda Foster",
    title: "Clinical Operations Manager",
    company: "Specialty Care Clinic",
    content: "The clinical protocols and guidelines were expertly crafted with clear implementation steps. Our staff adoption rate was 98% thanks to the comprehensive yet practical documentation.",
    rating: 5,
    projectType: "Clinical Protocol Development",
    avatar: "AF",
  },
]

export function Testimonials() {
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
            Client Success Stories
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            What Healthcare Leaders Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-enhanced medical content creation has helped healthcare 
            organizations improve patient outcomes and operational efficiency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 relative">
                <CardContent className="p-6 space-y-4">
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-6 w-6 text-blue-100" />
                    <p className="text-gray-700 leading-relaxed pl-4">
                      "{testimonial.content}"
                    </p>
                  </div>

                  {/* Project Type */}
                  <Badge variant="outline" className="text-xs w-fit">
                    {testimonial.projectType}
                  </Badge>

                  {/* Client Info */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.title}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-50 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "100%", label: "Client Satisfaction" },
              { value: "50+", label: "Projects Completed" },
              { value: "48hr", label: "Average Turnaround" },
              { value: "15+", label: "Healthcare Organizations" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
