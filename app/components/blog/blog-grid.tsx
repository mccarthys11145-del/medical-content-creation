
"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, PenTool } from "lucide-react"
import { motion } from "framer-motion"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Medical Content Creation",
    excerpt: "How artificial intelligence is transforming healthcare content while maintaining clinical accuracy and regulatory compliance.",
    category: "Technology",
    readTime: "5 min read",
    publishDate: "March 15, 2024",
    status: "coming-soon"
  },
  {
    id: 2,
    title: "Writing Patient Education That Actually Works",
    excerpt: "Evidence-based strategies for creating patient materials that improve health literacy and treatment adherence.",
    category: "Patient Education",
    readTime: "7 min read", 
    publishDate: "March 10, 2024",
    status: "coming-soon"
  },
  {
    id: 3,
    title: "Regulatory Writing Best Practices for Medical Devices",
    excerpt: "A comprehensive guide to FDA submission requirements and strategies for successful medical device approvals.",
    category: "Regulatory",
    readTime: "10 min read",
    publishDate: "March 5, 2024", 
    status: "coming-soon"
  },
  {
    id: 4,
    title: "Health Literacy: Making Complex Medical Information Accessible",
    excerpt: "Techniques for adapting medical content for different reading levels while maintaining accuracy and completeness.",
    category: "Health Communication",
    readTime: "6 min read",
    publishDate: "February 28, 2024",
    status: "coming-soon"
  },
  {
    id: 5,
    title: "Clinical Evidence in Healthcare Content: What PA's Need to Know",
    excerpt: "How to evaluate and incorporate clinical evidence into patient-facing and professional medical content.",
    category: "Clinical Practice",
    readTime: "8 min read",
    publishDate: "February 20, 2024",
    status: "coming-soon"
  },
  {
    id: 6,
    title: "The Business Case for Professional Medical Writing",
    excerpt: "Why healthcare organizations should invest in professional medical content creation and the measurable benefits.",
    category: "Business",
    readTime: "5 min read",
    publishDate: "February 15, 2024",
    status: "coming-soon"
  }
]

export function BlogGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    {post.status === 'coming-soon' && (
                      <Badge className="bg-orange-100 text-orange-800 text-xs">
                        Coming Soon
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.publishDate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    {post.status === 'coming-soon' ? (
                      <div className="text-center">
                        <p className="text-sm text-gray-500 mb-2">Article coming soon!</p>
                        <Button size="sm" variant="outline" disabled>
                          Coming Soon
                        </Button>
                      </div>
                    ) : (
                      <Button size="sm" className="w-full" asChild>
                        <Link href={`/blog/${post.id}`} className="inline-flex items-center justify-center space-x-1">
                          <span>Read Article</span>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 space-y-4">
              <PenTool className="h-8 w-8 text-blue-600 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900">
                Stay Updated on Medical Writing Trends
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Be the first to read our latest insights on healthcare content creation, 
                industry best practices, and regulatory updates. New articles coming soon!
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Get Notified</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
