"use client"

import { createElement } from 'react'
import { Globe2, Users, Rocket, Building, Search, Badge, Handshake, Target, Award } from 'lucide-react'
import { motion } from 'framer-motion'

interface Differentiator {
    icon: React.ElementType
    title: string
    color: string
    description: string
}

const differentiators: Differentiator[] = [
    {
        icon: Globe2,
        title: "Your Right Shore Partner",
        color: "text-blue-600",
        description: "We provide a seamless extension of your team, leveraging global talent to drive efficiency and innovation."
    },
    {
        icon: Users,
        title: "Customer First Approach",
        color: "text-green-600",
        description: "Our solutions are tailored to your specific needs, ensuring a partnership that prioritizes your success."
    },
    {
        icon: Rocket,
        title: "Consistent Delivery",
        color: "text-purple-600",
        description: "We are committed to on-time and high-quality project delivery, every time."
    },
    {
        icon: Building,
        title: "Industry Expertise",
        color: "text-orange-600",
        description: "Our team has deep knowledge across various industries, allowing us to provide informed and effective solutions."
    },
    {
        icon: Search,
        title: "Market Research & Benchmarking",
        color: "text-cyan-600",
        description: "We use data-driven insights to ensure you stay ahead of the curve and make informed decisions."
    },
    {
        icon: Badge,
        title: "Customer Delight",
        color: "text-pink-600",
        description: "We strive to exceed expectations, creating positive experiences and lasting relationships."
    },
    {
        icon: Handshake,
        title: "Winning Together",
        color: "text-indigo-600",
        description: "We believe in collaborative partnerships, working with you to achieve shared goals."
    },
    {
        icon: Target,
        title: "Talent Curators",
        color: "text-red-600",
        description: "We specialize in identifying and attracting top talent, ensuring you have the right people for the job."
    },
    {
        icon: Award,
        title: "Brand Ambassadors",
        color: "text-yellow-600",
        description: "We represent your brand with pride, ensuring a positive and professional experience for all."
    }
]

export function Differentiators() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    }

    return (
        <section className="py-12 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.h2 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-8 text-center"
                >
                    Our Differentiators
                </motion.h2>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {differentiators.map((item, index) => (
                        <motion.div 
                            key={index} 
                            className="relative p-6 rounded-lg transition-transform duration-300 hover:scale-105"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="p-3 bg-[#08314e]/10 rounded-full mb-4">
                                    {createElement(item.icon, { className: `w-7 h-7 ${item.color}` })}
                                </div>
                                <h3 className={`text-xl font-semibold text-gray-800 mb-2`}>
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {item.description}
                                </p>
                            </div>
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-100/20 to-transparent opacity-50 z-[-1]"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
