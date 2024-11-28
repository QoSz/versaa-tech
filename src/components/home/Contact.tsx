'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const cardHoverVariant = {
    hover: {
        scale: 1.02,
        transition: {
            type: "spring",
            stiffness: 300,
        }
    }
}

const contactInfo = [
    {
        icon: Mail,
        title: "Email",
        description: "Reach out to us anytime. We aim to respond to all inquiries within 24 hours.",
        content: "info@versaatech.com",
        link: "mailto:info@versaatech.com"
    },
    {
        icon: Phone,
        title: "Phone",
        description: "Our global team is available during business hours across multiple time zones.",
        content: [
            "US: +1 (555) 123-4567",
            "UAE: +44 20 7123 4567",
            "Kenya: +91 22 6123 4567"
        ]
    },
    {
        icon: MapPin,
        title: "Global Offices",
        description: "Strategic locations across three continents to serve our global clientele.",
        content: [
            "US: Michigan, USA",
            "UAE: Dubai, UAE",
            "Africa: Nairobi, Kenya"
        ]
    }
]

export function Contact() {
    return (
        <section id="contact" className="py-12 bg-gradient-to-br from-gray-50 to-white">
            <div className="px-4 md:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.h2
                        className="text-3xl font-bold text-center mb-4 text-[#08314e]"
                    >
                        <div className="flex items-center justify-center gap-2">
                            <MessageSquare className="h-8 w-8" />
                            Lets Have a Conversation ...
                        </div>
                    </motion.h2>
                    <motion.p
                        className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
                    >
                        Ready to transform your business? Get in touch with our team of experts today.
                    </motion.p>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                    >
                        {contactInfo.map((info) => (
                            <motion.div 
                                key={info.title} 
                                variants={cardHoverVariant} 
                                whileHover="hover"
                                className="w-full"
                            >
                                <Card className="bg-white h-full">
                                    <CardContent className="p-6">
                                        <div className="flex flex-col h-full space-y-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="p-2 bg-[#08314e]/10 rounded-lg">
                                                    <info.icon className="h-6 w-6 text-[#08314e]" />
                                                </div>
                                                <h3 className="font-semibold text-gray-900">
                                                    {info.title}
                                                </h3>
                                            </div>
                                            
                                            <p className="text-gray-600 text-base">
                                                {info.description}
                                            </p>

                                            {Array.isArray(info.content) ? (
                                                <div className="space-y-2">
                                                    {info.content.map((item, idx) => (
                                                        <p key={idx} className="text-gray-600 text-base">
                                                            {item}
                                                        </p>
                                                    ))}
                                                </div>
                                            ) : (
                                                <a
                                                    href={info.link}
                                                    className="text-[#08314e] hover:text-[#08314e]/80 text-base transition-colors"
                                                >
                                                    {info.content}
                                                </a>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
