
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Eye,
  Users
} from "lucide-react"
import { motion } from "framer-motion"

const aiWorkflow = [
  {
    step: "1",
    title: "Clinical Assessment",
    description: "I review medical accuracy requirements and target audience needs",
    icon: Eye,
    color: "bg-blue-100 text-blue-600",
  },
  {
    step: "2", 
    title: "AI-Enhanced Drafting",
    description: "Leverage ChatGPT Pro and Claude Pro for initial content generation",
    icon: Cpu,
    color: "bg-green-100 text-green-600",
  },
  {
    step: "3",
    title: "Clinical Review",
    description: "Apply physician assistant expertise to ensure medical accuracy",
    icon: Shield,
    color: "bg-purple-100 text-purple-600",
  },
  {
    step: "4",
    title: "Final Optimization",
    description: "Refine for audience, compliance, and engagement objectives",
    icon: Zap,
    color: "bg-orange-100 text-orange-600",
  },
]

const aiAdvantages = [
  {
    title: "Speed & Efficiency",
    description: "50% faster turnaround times while maintaining quality standards",
    icon: Zap,
    benefit: "Faster delivery",
  },
  {
    title: "Consistency at Scale", 
    description: "Maintain consistent tone, style, and accuracy across large projects",
    icon: CheckCircle,
    benefit: "Reliable quality",
  },
  {
    title: "Enhanced Research",
    description: "Comprehensive literature review and evidence synthesis capabilities",
    icon: Brain,
    benefit: "Deeper insights",
  },
  {
    title: "Multi-Audience Adaptation",
    description: "Efficiently adapt content for different stakeholder groups",
    icon: Users,
    benefit: "Broader reach",
  },
]

export function AIApproachSection() {
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
            AI-Enhanced Methodology
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            The Perfect Blend of AI Power & Clinical Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I harness cutting-edge AI tools to accelerate content creation while applying 
            my clinical knowledge to ensure every piece meets the highest medical standards.
          </p>
        </motion.div>

        {/* AI Workflow */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">My AI-Enhanced Workflow</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiWorkflow.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 ${step.color}`}>
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center text-sm">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Arrow for larger screens */}
                {index < aiWorkflow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center">
                      <ArrowRight className="h-3 w-3 text-gray-600" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* AI Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Why AI-Enhanced Content?</h3>
            <p className="text-gray-600">
              The advantages of combining artificial intelligence with clinical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {aiAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-2 border-white hover:border-blue-200 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <advantage.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-gray-900">{advantage.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {advantage.benefit}
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm">{advantage.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quality Assurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white">
            <CardContent className="p-8 text-center">
              <Shield className="h-8 w-8 mx-auto mb-4 text-green-200" />
              <h3 className="text-2xl font-bold mb-4">Quality Guarantee</h3>
              <p className="text-green-100 text-lg leading-relaxed max-w-3xl mx-auto">
                While AI accelerates my process, every piece of content undergoes rigorous clinical review. 
                I personally verify all medical information, ensure regulatory compliance, and adapt content 
                for the intended audience. The result? Faster delivery without compromising accuracy.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
