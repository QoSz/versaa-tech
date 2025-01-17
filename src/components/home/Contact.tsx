'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
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
                            className="max-w-md mx-auto w-full"
                            variants={cardHoverVariant}
                            whileHover="hover"
                        >
                            <Card className="rounded-2xl shadow-md h-full">
                                <CardContent className="p-7 flex flex-col items-center">
                                    
                                        <div className="p-2.5 bg-[#08314e]/10 rounded-full mb-3">
                                            <Mail className="h-7 w-7 text-red-500" />
                                        </div>
                                        <h3 className="font-semibold text-gray-900 text-lg mb-1">
                                            Email
                                        </h3>
                                    
                                    <a
                                        href="mailto:info@versaatech.com"
                                        className="text-gray-600 hover:text-gray-600/80 transition-colors text-center"
                                    >
                                        info@VersaaTech.com
                                    </a>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
