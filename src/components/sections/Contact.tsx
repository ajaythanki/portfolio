import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from 'lucide-react'

export default function Contact() {
  return (
    <section className="py-20 bg-black relative overflow-hidden" id="contact">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-[hsl(var(--accent-1))] text-sm font-semibold tracking-wider uppercase mb-4">
            Let's Connect
          </span>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Have a project in mind? Let's create something amazing together.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-[hsl(var(--surface))] border-[hsl(var(--border))] shadow-2xl backdrop-blur-sm bg-opacity-50">
            <CardContent className="pt-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <Input
                      id="name"
                      placeholder="Your Name"
                      className="w-full bg-[hsl(var(--surface-bright))] border-[hsl(var(--border))] text-white placeholder:text-gray-500 h-14 pl-6 pr-4 rounded-xl focus-visible:ring-1 focus-visible:ring-[hsl(var(--accent-1))] focus-visible:border-[hsl(var(--accent-1))] transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-[hsl(var(--surface-bright))] border-[hsl(var(--border))] text-white placeholder:text-gray-500 h-14 pl-6 pr-4 rounded-xl focus-visible:ring-1 focus-visible:ring-[hsl(var(--accent-1))] focus-visible:border-[hsl(var(--accent-1))] transition-all"
                    />
                  </div>
                </div>
                <div className="relative">
                  <Input
                    id="subject"
                    placeholder="Subject"
                    className="w-full bg-[hsl(var(--surface-bright))] border-[hsl(var(--border))] text-white placeholder:text-gray-500 h-14 pl-6 pr-4 rounded-xl focus-visible:ring-1 focus-visible:ring-[hsl(var(--accent-1))] focus-visible:border-[hsl(var(--accent-1))] transition-all"
                  />
                </div>
                <div className="relative">
                  <Textarea
                    id="message"
                    placeholder="Your Message"
                    className="w-full bg-[hsl(var(--surface-bright))] border-[hsl(var(--border))] text-white placeholder:text-gray-500 min-h-[200px] p-6 rounded-xl focus-visible:ring-1 focus-visible:ring-[hsl(var(--accent-1))] focus-visible:border-[hsl(var(--accent-1))] transition-all resize-none"
                  />
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-[hsl(var(--accent-1))] to-[hsl(var(--accent-1))/0.8] hover:opacity-90 border-0 h-14 text-lg font-semibold rounded-xl transition-all duration-300 group"
                >
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
