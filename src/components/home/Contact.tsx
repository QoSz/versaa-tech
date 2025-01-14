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
        icon: MapPin,
        title: "Global Locations",
        description: "",
        content: [
            "Michigan, USA",
            "Dubai, UAE",
            "Nairobi, Kenya"
        ],
        iconColor: "text-green-600"
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
                        Lets Have a Conversation ...
                    </motion.h2>

                    <div className="flex justify-center">
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl"
                        >
                            <motion.div
                                variants={cardHoverVariant}
                                whileHover="hover"
                                className="max-w-md mx-auto w-full"
                            >
                                <Card className="rounded-2xl bg-gradient-to-r from-white to-gray-50 h-full">
                                    <CardContent className="p-7">
                                        <div className="flex flex-col h-full space-y-3">
                                            <div className="flex items-center space-x-3 mb-3">
                                                <div className="p-2.5 bg-[#08314e]/10 rounded-lg">
                                                    <MessageSquare className="h-7 w-7 text-blue-600" />
                                                </div>
                                                <h3 className="font-semibold text-gray-900 text-lg">
                                                    Contact
                                                </h3>
                                            </div>

                                            <div className="flex items-center space-x-2.5">
                                                <Mail className="h-5 w-5 text-red-500" />
                                                <a
                                                    href="mailto:info@versaatech.com"
                                                    className="text-gray-600 hover:text-gray-600/80 transition-colors"
                                                >
                                                    info@VersaaTech.com
                                                </a>
                                            </div>
                                            <div className="flex items-center space-x-2.5">
                                                <Phone className="h-5 w-5 text-blue-500" />
                                                <a
                                                    href="tel:+12848369378"
                                                    className="text-gray-600 hover:text-gray-600/80 transition-colors"
                                                >
                                                    +1 (284) 836-9378
                                                </a>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                            {contactInfo.map((info) => (
                                <motion.div
                                    key={info.title}
                                    variants={cardHoverVariant}
                                    whileHover="hover"
                                    className="max-w-md mx-auto w-full"
                                >
                                    <Card className="rounded-2xl bg-gradient-to-r from-white to-gray-50 h-full">
                                        <CardContent className="p-7">
                                            <div className="flex flex-col h-full space-y-3">
                                                <div className="flex items-center space-x-3">
                                                    <div className="p-2.5 bg-[#08314e]/10 rounded-lg">
                                                        <info.icon className={`h-7 w-7 ${info.iconColor}`} />
                                                    </div>
                                                    <h3 className="font-semibold text-gray-900 text-lg">
                                                        {info.title}
                                                    </h3>
                                                </div>

                                                <p className="text-gray-600">
                                                    {info.description}
                                                </p>

                                                {Array.isArray(info.content) ? (
                                                    <div className="space-y-2.5">
                                                        {info.content.map((item, idx) => (
                                                            <p key={idx} className="text-gray-600">
                                                                {item}
                                                            </p>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <p className="text-gray-600">
                                                        {info.content}
                                                    </p>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
