"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Globe, ChevronDown } from 'lucide-react'

const regions = [
    {
        name: "East Africa",
        description: "Emerging market opportunities with focus on technology and infrastructure",
        initiatives: [
            "Tech startup ecosystem development",
            "Infrastructure project staffing",
            "Healthcare sector expansion",
            "Educational technology initiatives"
        ]
    },
    {
        name: "Middle East",
        description: "Digital transformation and sustainable development focus",
        initiatives: [
            "Smart city initiatives",
            "Renewable energy projects",
            "FinTech development",
            "Healthcare modernization"
        ]
    },
    {
        name: "Mexico",
        description: "Manufacturing excellence and technology innovation hub",
        initiatives: [
            "Advanced manufacturing",
            "IT services expansion",
            "Automotive sector growth",
            "Digital transformation projects"
        ]
    },
    {
        name: "USA",
        description: "Innovation-driven opportunities across multiple sectors",
        initiatives: [
            "Tech sector expansion",
            "Healthcare innovation",
            "Sustainable energy projects",
            "Digital transformation services"
        ]
    }
]

export function StrategicFocus() {
    const [activeRegion, setActiveRegion] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                {/* Regions Section */}
                <div>
                    <h2 className="text-3xl font-bold text-[#08314e] mb-8 text-center">Regions We Operate In</h2>
                    <div className="bg-white rounded-2xl shadow-xl">
                        <div className="flex flex-col">
                            {/* Mobile Dropdown */}
                            <div className="lg:hidden">
                                <button 
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="w-full flex items-center justify-between p-4 bg-[#08314e] text-white rounded-t-2xl"
                                >
                                    <div className="flex items-center">
                                        <Globe className="w-5 h-5 mr-3" />
                                        <span className="font-semibold">{regions[activeRegion].name}</span>
                                    </div>
                                    <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                                </button>
                                
                                {/* Dropdown Menu */}
                                {isOpen && (
                                    <div className="absolute z-10 w-full bg-white shadow-lg border-t border-gray-100">
                                        {regions.map((region, index) => (
                                            <button
                                                key={index}
                                                onClick={() => {
                                                    setActiveRegion(index)
                                                    setIsOpen(false)
                                                }}
                                                className={`w-full text-left p-4 flex items-center
                                                    ${index === activeRegion 
                                                        ? 'bg-gray-50 text-[#08314e]' 
                                                        : 'text-gray-700 hover:bg-gray-50'
                                                    }
                                                    ${index !== regions.length - 1 ? 'border-b border-gray-100' : ''}
                                                `}
                                            >
                                                <Globe className="w-5 h-5 mr-3" />
                                                <span className="font-semibold">{region.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Desktop Tabs */}
                            <div className="hidden lg:flex bg-[#08314e] rounded-t-2xl">
                                {regions.map((region, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveRegion(index)}
                                        className={`flex-1 flex items-center justify-center px-6 py-4 transition-colors
                                            ${index === activeRegion 
                                                ? 'bg-white text-[#08314e] rounded-t-lg' 
                                                : 'text-white hover:bg-white hover:bg-opacity-10 rounded-t-2xl'
                                            }
                                            ${index !== regions.length - 1 ? 'border-r border-[#08314e]/20' : ''}
                                        `}
                                    >
                                        <Globe 
                                            className={`w-5 h-5 mr-3 
                                                ${index === activeRegion ? 'text-[#08314e]' : 'text-white'}
                                            `} 
                                        />
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
                                    <h4 className="text-xl font-semibold text-[#08314e] mb-4">
                                        {regions[activeRegion].name}
                                    </h4>
                                    <p className="text-gray-600 mb-6">
                                        {regions[activeRegion].description}
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {regions[activeRegion].initiatives.map((initiative, index) => (
                                            <div key={index} className="flex items-center">
                                                <div className="w-2 h-2 bg-[#08314e] rounded-full mr-3" />
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
