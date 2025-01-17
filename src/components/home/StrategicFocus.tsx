"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

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
    }
]

export function StrategicFocus() {
    const [activeRegion, setActiveRegion] = useState(0)

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-8 text-center">Regions We Serve</h2>
                    <div className="bg-white rounded-2xl shadow-md">
                        <div className="flex flex-col">
                            {/* Mobile Region Buttons */}
                            <div className="lg:hidden grid grid-cols-2 gap-3 p-4">
                                {regions.map((region, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveRegion(index)}
                                        className={`flex flex-row items-center justify-center p-4 transition-all text-center rounded-xl
                                            ${index === activeRegion
                                                ? `bg-gray-200 shadow-lg text-black border-2 border-blue-600`
                                                : `bg-gray-100 text-gray-600 hover:bg-gray-200 border-2 border-gray-300`
                                            }
                                        `}
                                    >
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
                                                ? `bg-gray-200 text-black ring-2 ring-blue-300`
                                                : `bg-gray-100 text-gray-600 hover:bg-gray-200`
                                            }
                                            ${index === 0 ? 'rounded-tl-2xl' : ''}
                                            ${index === regions.length - 1 ? 'rounded-tr-2xl' : ''}
                                            ${index !== regions.length - 1 ? 'border-r border-gray-200 mr-[2px]' : ''}
                                        `}
                                    >
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
                                    <h4 className={`text-xl font-semibold mb-4 text-blue-600`}>
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
