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
        description: "",
        content: "info@VersaaTech.com",
        link: "mailto:info@versaatech.com"
    },
    {
        icon: Phone,
        title: "Phone",
        description: "",
        content: [
            { label: "US", number: "+1 (284) 836-9378" },
            { label: "UAE", number: "+971 7 426 2738" },
            { label: "Kenya", number: "+254 07 888 71946" }
        ]
    },
    {
        icon: MapPin,
        title: "Global Locations",
        description: "",
        content: [
            "Michigan, USA",
            "Dubai, UAE",
            "Nairobi, Kenya"
        ]
    }
]

export function Contact() {
    return (
        <section className="py-12">
            <div className="px-4 md:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.h2
                        className="text-3xl font-bold text-center mb-12 text-blue-600"
                    >
                        <div className="flex items-center justify-center gap-2">
                            <MessageSquare className="h-8 w-8" />
                            Lets Have a Conversation ...
                        </div>
                    </motion.h2>

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
                                <Card className="rounded-2xl bg-gradient-to-r from-white to-gray-100 h-full">
                                    <CardContent className="p-6">
                                        <div className="flex flex-col h-full space-y-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="p-2 bg-[#08314e]/10 rounded-lg">
                                                    <info.icon className="h-6 w-6 text-blue-600" />
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
                                                        typeof item === 'object' && item !== null && 'label' in item && 'number' in item ? (
                                                            <div key={idx}>
                                                                <a
                                                                    href={`tel:${item.number}`}
                                                                    className="text-gray-600 hover:text-gray-600/80 text-base transition-colors block"
                                                                >
                                                                    {`${item.label}: ${item.number}`}
                                                                </a>
                                                            </div>
                                                        ) : (
                                                            <p key={idx} className="text-gray-600 text-base">
                                                                {item}
                                                            </p>
                                                        )
                                                    ))}
                                                </div>
                                            ) : (
                                                <a
                                                    href={info.link}
                                                    className="text-blue-600 hover:text-blue-600/80 text-base transition-colors"
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
