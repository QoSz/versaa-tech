"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Globe2, Users, Rocket, Building, Search, Badge, Handshake, Target, Award } from 'lucide-react'

interface Differentiator {
    icon: React.ElementType
    title: string
    description: string
}

const differentiators: Differentiator[] = [
    {
        icon: Globe2,
        title: "Your Right Shore Partner",
        description: "Strategic presence across Onsite, Onshore, Nearshore, and Offshore locations, providing flexible engagement models to suit your needs."
    },
    {
        icon: Users,
        title: "Customer First Approach",
        description: "Every decision we make starts with understanding and prioritizing our customers' unique requirements and objectives."
    },
    {
        icon: Rocket,
        title: "Consistent Delivery",
        description: "Reliable and timely execution of projects with standardized processes ensuring predictable, high-quality outcomes."
    },
    {
        icon: Building,
        title: "Industry Expertise",
        description: "Deep domain knowledge across sectors combined with extensive global reach and local market understanding."
    },
    {
        icon: Search,
        title: "Market Research & Benchmarking",
        description: "Data-driven insights and comprehensive market analysis to ensure competitive and effective solutions."
    },
    {
        icon: Badge,
        title: "Customer Delight",
        description: "Going beyond satisfaction to create exceptional experiences that exceed expectations at every touchpoint."
    },
    {
        icon: Handshake,
        title: "Winning Together",
        description: "Partnership-focused approach ensuring mutual growth and success through collaborative relationships."
    },
    {
        icon: Target,
        title: "Talent Curators",
        description: "Expert identification and nurturing of top talent, matching the right professionals with the right opportunities."
    },
    {
        icon: Award,
        title: "Brand Ambassadors",
        description: "Dedicated to representing your brand values and enhancing your market presence through our service excellence."
    }
]

export function Differentiators() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-[#08314e] mb-8 text-center">Our Differentiators</h2>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3">
                        {differentiators.map((item, index) => (
                            <button
                                key={index}
                                className={`w-full text-left p-4 rounded-lg transition-colors ${index === activeIndex ? 'bg-[#08314e] text-white' : 'hover:bg-gray-100'
                                    }`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="flex items-center">
                                    <item.icon className={`w-6 h-6 mr-3 ${index === activeIndex ? 'text-white' : 'text-[#08314e]'}`} />
                                    <span className="font-semibold">{item.title}</span>
                                    <ChevronRight className={`ml-auto ${index === activeIndex ? 'text-white' : 'text-[#08314e]'}`} />
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="lg:w-2/3 bg-white rounded-2xl shadow-lg p-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="h-full flex flex-col justify-center"
                            >
                                <h3 className="text-2xl font-bold text-[#08314e] mb-4">{differentiators[activeIndex].title}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">{differentiators[activeIndex].description}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}