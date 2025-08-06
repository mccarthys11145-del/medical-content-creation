
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  MapPin, 
  Clock, 
  Shield, 
  CheckCircle, 
  Award,
  Phone,
  Mail,
  Calendar
} from "lucide-react"
import { motion } from "framer-motion"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Get In Touch</CardTitle>
          <p className="text-gray-600">
            Ready to transform your healthcare content? Here's how to reach me:
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <MapPin className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Licensed in</div>
                <div className="text-gray-600">Pennsylvania & Utah</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Response Time</div>
                <div className="text-gray-600">Within 24 hours</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Calendar className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Consultation</div>
                <div className="text-gray-600">Free initial consultation</div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">What to Expect</h4>
            <div className="space-y-2">
              {[
                "Detailed project assessment",
                "Transparent pricing quote",
                "Timeline and deliverables",
                "Sample work if relevant",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Credentials */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center space-x-3">
            <Award className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-blue-900">Licensed Physician Assistant</h3>
          </div>
          <p className="text-blue-800">
            Licensed PA with extensive experience in clinical practice and medical content creation. 
            Combining clinical expertise with AI-enhanced efficiency for superior healthcare content.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-blue-600">Licensed PA</Badge>
            <Badge className="bg-blue-600">Pennsylvania</Badge>
            <Badge className="bg-blue-600">Utah</Badge>
            <Badge className="bg-blue-600">HIPAA Certified</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Process Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Our Process</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "We discuss your needs, audience, and objectives",
              },
              {
                step: "2", 
                title: "Proposal & Quote",
                description: "Detailed project scope with transparent pricing",
              },
              {
                step: "3",
                title: "Content Creation",
                description: "AI-enhanced writing with clinical oversight",
              },
              {
                step: "4",
                title: "Review & Delivery",
                description: "Final review, revisions, and timely delivery",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Security Notice */}
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <Shield className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-900 mb-2">HIPAA Compliant</h3>
              <p className="text-green-800 text-sm">
                All communications and project materials are handled in strict accordance with HIPAA guidelines. 
                Your confidential information remains secure throughout our engagement.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
