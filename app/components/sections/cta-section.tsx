
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Shield, 
  Star,
  FileText,
  Mail
} from "lucide-react"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
      
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge variant="outline" className="border-white/20 text-white bg-white/10 w-fit">
                Ready to Get Started?
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Transform Your Healthcare Content Today
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Join healthcare organizations nationwide who trust our AI-enhanced medical content creation 
                for accuracy, compliance, and results that matter.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              {[
                "Free consultation and project quote",
                "48-hour turnaround on most projects",
                "100% satisfaction guarantee",
                "HIPAA-compliant processes",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                <Link href="/contact" className="inline-flex items-center space-x-2">
                  <span>Get Your Free Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link href="/portfolio" className="inline-flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>View Portfolio</span>
                </Link>
              </Button>
            </motion.div>

            {/* Contact Alternative */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-6 border-t border-white/20"
            >
              <p className="text-blue-200 text-sm mb-2">Or reach out directly:</p>
              <Button variant="link" className="text-white hover:text-blue-200 p-0" asChild>
                <Link href="/contact" className="inline-flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Schedule a consultation</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-white">Why Choose Us?</h3>
                  <p className="text-blue-200">Proven results you can trust</p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: Star,
                      value: "5.0",
                      label: "Client Rating",
                      description: "Based on 50+ projects",
                    },
                    {
                      icon: Clock,
                      value: "48hr",
                      label: "Avg. Turnaround",
                      description: "Most projects completed",
                    },
                    {
                      icon: Shield,
                      value: "100%",
                      label: "HIPAA Compliant",
                      description: "All processes certified",
                    },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-baseline space-x-2">
                          <span className="text-2xl font-bold text-white">{stat.value}</span>
                          <span className="text-blue-200 font-medium">{stat.label}</span>
                        </div>
                        <p className="text-blue-200 text-sm">{stat.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/20 text-center">
                  <p className="text-blue-200 text-sm">
                    Licensed Physician Assistant • Pennsylvania & Utah
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
