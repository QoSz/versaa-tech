"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'

const regions = [
    {
        name: "East Africa",
        description: "Emerging market opportunities with focus on technology and infrastructure",
        initiatives: [
            "Tech startup ecosystem development",
            "Infrastructure project staffing",
            "Sustainable energy projects",
            "Educational technology initiatives"
        ],
        color: "bg-green-600"
    },
    {
        name: "Middle East",
        description: "Digital transformation and sustainable development focus",
        initiatives: [
            "Smart city initiatives",
            "Renewable energy projects",
            "FinTech development",
            "Healthcare modernization"
        ],
        color: "bg-yellow-600"
    },
    {
        name: "Mexico",
        description: "Manufacturing excellence and technology innovation hub",
        initiatives: [
            "Advanced manufacturing",
            "IT services expansion",
            "Automotive sector growth",
            "Digital transformation projects"
        ],
        color: "bg-red-600"
    },
    {
        name: "USA",
        description: "Innovation-driven opportunities across multiple sectors",
        initiatives: [
            "Tech sector expansion",
            "Financial Services Innovation",
            "Manufacturing and Automotive",
            "Digital transformation services"
        ],
        color: "bg-purple-600"
    }
]

export function StrategicFocus() {
    const [activeRegion, setActiveRegion] = useState(0)

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-8 text-center">Regions We Serve</h2>
                    <div className="bg-white rounded-2xl shadow-xl">
                        <div className="flex flex-col">
                            {/* Mobile Region Buttons */}
                            <div className="lg:hidden grid grid-cols-2 gap-3 p-4">
                                {regions.map((region, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveRegion(index)}
                                        className={`flex flex-row items-center justify-center p-4 rounded-xl transition-all text-center
                                            ${index === activeRegion 
                                                ? `${region.color} text-white shadow-lg` 
                                                : `border-2 ${region.color.replace('bg-', 'border-')} ${region.color.replace('bg-', 'text-')} hover:bg-gray-100`
                                            }
                                        `}
                                    >
                                        <Globe className="w-5 h-5 mr-2" />
                                        <span className="font-semibold text-sm">{region.name}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Desktop Tabs */}
                            <div className="hidden lg:flex rounded-t-2xl">
                                {regions.map((region, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveRegion(index)}
                                        className={`flex-1 flex items-center justify-center px-6 py-4 transition-colors
                                            ${index === activeRegion 
                                                ? `${region.color} text-white ring-2 ring-blue-300 rounded-t-2xl`
                                                : `hover:bg-opacity-90 rounded-t-2xl ${region.color} text-white`
                                            }
                                            ${index !== regions.length - 1 ? 'border-r border-blue-700/20' : ''}
                                        `}
                                    >
                                        <Globe className="w-5 h-5 mr-3" />
                                        <span className="font-semibold">{region.name}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Content area */}
                            <div className="p-8">
                                <motion.div
                                    key={activeRegion}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="h-full"
                                >
                                    <h4 className={`text-xl font-semibold bg-clip-text text-transparent mb-4 ${regions[activeRegion].color}`}>
                                        {regions[activeRegion].name}
                                    </h4>
                                    <p className="text-gray-600 mb-6">
                                        {regions[activeRegion].description}
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {regions[activeRegion].initiatives.map((initiative, index) => (
                                            <div key={index} className="flex items-center">
                                                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                                                <span className="text-gray-600">{initiative}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
