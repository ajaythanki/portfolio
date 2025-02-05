'use client'

import { Card, CardContent } from "@/components/ui/custom/Card"
import { Button } from "@/components/ui/custom/Button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from "react"

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  // custom handler for blur event
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // check if any input is touched
  const isTouched = (name: string) => {
    return formData[name as keyof typeof formData] !== '';
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try{
      console.log('Form submitted');
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    }catch(e){
      console.log(e);
    } finally{
      setIsLoading(false);
    }
  };

  const isValidEmail = (email: string) => {
    if(!email) return false;

    // regex for email validation
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(email);
  }

  const isValidName = (name: string) => {
    if(!name) return false;

    // regex for name validation
    return /^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(name);
  }

  const isValidSubject = (subject: string) => {
    if(!subject) return false;

    // regex for subject validation
    return /^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(subject);
  }

  const isValidMessage = (message: string) => {
    if(!message) return false;

    // regex for message validation
    return /^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(message);
  }

  const isFormValid = () => {
    return isValidEmail(formData.email) && isValidName(formData.name) && isValidSubject(formData.subject) && isValidMessage(formData.message);
  }

  useEffect(() => {
    if(isSubmitted){
      const timeout = setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [isSubmitted])

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
                  <a href="mailto:akthanki5@gmail.com" className="text-gray-400 hover:text-[hsl(var(--accent-1))] transition-colors">
                    akthanki5@gmail.com
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
                    Porbandar, Gujarat, India
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
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-gray-500">Your Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-[hsl(var(--surface))/0.5] border-[hsl(var(--border))] text-gray-300 placeholder:text-gray-600 h-12 px-4 rounded-xl focus-visible:ring-1 focus-visible:ring-[hsl(var(--accent-1))] focus-visible:border-[hsl(var(--accent-1))] transition-all"
                      />
                      {!isValidName(formData.name) && isTouched('name') && (
                        <p className="text-red-500 text-xs">{!formData.name ? 'Name is required' : 'Please enter a valid name'}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-gray-500">Your Email</label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="john@example.com"
                        className="w-full bg-[hsl(var(--surface))/0.5] border-[hsl(var(--border))] text-gray-300 placeholder:text-gray-600 h-12 px-4 rounded-xl focus-visible:ring-1 focus-visible:ring-[hsl(var(--accent-1))] focus-visible:border-[hsl(var(--accent-1))] transition-all"
                      />
                      {!isValidEmail(formData.email) && isTouched('email') && ( 
                        <p className="text-red-500 text-xs">
                          {!formData.email ? 'Email is required' : 'Please enter a valid email'}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm text-gray-500">Subject</label>
                    <Input
                      id="subject"
                      placeholder="How can I help you?"
                      value={formData.subject}
                      name="subject"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full bg-[hsl(var(--surface))/0.5] border-[hsl(var(--border))] text-gray-300 placeholder:text-gray-600 h-12 px-4 rounded-xl focus-visible:ring-1 focus-visible:ring-[hsl(var(--accent-1))] focus-visible:border-[hsl(var(--accent-1))] transition-all"
                    />
                    {!isValidSubject(formData.subject) && isTouched('subject') && (
                      <p className="text-red-500 text-xs">
                        {!formData.subject ? 'Subject is required' : 'Please enter a valid subject'}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-gray-500">Message</label>
                    <Textarea
                      id="message"
                      placeholder="Your message here..."
                      value={formData.message}
                      name="message"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full bg-[hsl(var(--surface))/0.5] border-[hsl(var(--border))] text-gray-300 placeholder:text-gray-600 min-h-[200px] p-4 rounded-xl focus-visible:ring-1 focus-visible:ring-[hsl(var(--accent-1))] focus-visible:border-[hsl(var(--accent-1))] transition-all resize-none"
                    />
                    {!isValidMessage(formData.message) && isTouched('message') && (
                      <p className="text-red-500 text-xs">{!formData.message ? 'Message is required' : 'Please enter a valid message'}</p>
                    )}
                  </div>
                  <Button 
                    className="w-full bg-white text-black hover:bg-gray-100 border-0 h-12 text-lg font-semibold rounded-xl transition-all duration-300 group"
                    type="submit"
                    disabled={!isFormValid() || isLoading || !isTouched('subject')}
                  >
                    {isLoading ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
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
