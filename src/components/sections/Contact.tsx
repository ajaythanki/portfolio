'use client'

import { Card, CardContent } from "@/components/ui/custom/Card"
import { Button } from "@/components/ui/custom/Button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="py-20 bg-[hsl(var(--surface))] relative overflow-hidden" id="contact">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[hsl(var(--accent-1))] opacity-[0.03] blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-[hsl(var(--accent-2))] opacity-[0.03] blur-[100px] rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 mb-4 bg-[hsl(var(--surface-bright))] text-[hsl(var(--accent-1))] text-sm tracking-widest rounded-full border border-[hsl(var(--border))] backdrop-blur-sm">
            Let's Connect
          </span>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 flex flex-col justify-center gap-4"
          >
            <Card className="bg-[hsl(var(--surface-bright))] border-[hsl(var(--border))] hover:border-[hsl(var(--accent-1))] transition-colors backdrop-blur-sm">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-[hsl(var(--accent-1))/0.1]">
                  <Mail className="w-6 h-6 text-[hsl(var(--accent-1))]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <a href="mailto:hello@example.com" className="text-gray-400 hover:text-[hsl(var(--accent-1))] transition-colors">
                    hello@example.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[hsl(var(--surface-bright))] border-[hsl(var(--border))] hover:border-[hsl(var(--accent-1))] transition-colors backdrop-blur-sm">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-[hsl(var(--accent-1))/0.1]">
                  <MapPin className="w-6 h-6 text-[hsl(var(--accent-1))]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Location</h3>
                  <p className="text-gray-400">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8"
          >
            <Card className="bg-[hsl(var(--surface-bright))] border-[hsl(var(--border))] shadow-2xl backdrop-blur-sm">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-gray-500">Your Name</label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="w-full bg-[hsl(var(--surface))/0.5] border-[hsl(var(--border))] text-gray-300 placeholder:text-gray-600 h-12 px-4 rounded-xl focus-visible:ring-1 focus-visible:ring-[hsl(var(--accent-1))] focus-visible:border-[hsl(var(--accent-1))] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-gray-500">Your Email</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-[hsl(var(--surface))/0.5] border-[hsl(var(--border))] text-gray-300 placeholder:text-gray-600 h-12 px-4 rounded-xl focus-visible:ring-1 focus-visible:ring-[hsl(var(--accent-1))] focus-visible:border-[hsl(var(--accent-1))] transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm text-gray-500">Subject</label>
                    <Input
                      id="subject"
                      placeholder="How can I help you?"
                      className="w-full bg-[hsl(var(--surface))/0.5] border-[hsl(var(--border))] text-gray-300 placeholder:text-gray-600 h-12 px-4 rounded-xl focus-visible:ring-1 focus-visible:ring-[hsl(var(--accent-1))] focus-visible:border-[hsl(var(--accent-1))] transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-gray-500">Message</label>
                    <Textarea
                      id="message"
                      placeholder="Your message here..."
                      className="w-full bg-[hsl(var(--surface))/0.5] border-[hsl(var(--border))] text-gray-300 placeholder:text-gray-600 min-h-[200px] p-4 rounded-xl focus-visible:ring-1 focus-visible:ring-[hsl(var(--accent-1))] focus-visible:border-[hsl(var(--accent-1))] transition-all resize-none"
                    />
                  </div>
                  <Button 
                    className="w-full bg-white text-black hover:bg-gray-100 border-0 h-12 text-lg font-semibold rounded-xl transition-all duration-300 group"
                  >
                    Send Message
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
