"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Flame, Phone, Building2, Stethoscope, Globe, ChevronDown } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

interface FocusArea {
    name: string
    icon: React.ElementType
    description: string
    initiatives: string[]
}

const industries: FocusArea[] = [
    {
        name: "Oil & Gas",
        icon: Flame,
        description: "Strategic talent solutions for the energy sector's evolving needs",
        initiatives: [
            "Renewable energy transition expertise",
            "Digital transformation specialists",
            "HSE professionals",
            "Project management experts"
        ]
    },
    {
        name: "Telecom",
        icon: Phone,
        description: "Supporting the telecommunications industry's rapid advancement",
        initiatives: [
            "5G network specialists",
            "IoT implementation experts",
            "Infrastructure architects",
            "Digital service consultants"
        ]
    },
    {
        name: "Hospitality",
        icon: Building2,
        description: "Elevating guest experiences through exceptional talent",
        initiatives: [
            "Customer experience designers",
            "Revenue management experts",
            "Digital transformation leaders",
            "Sustainability consultants"
        ]
    },
    {
        name: "Pharma & Health",
        icon: Stethoscope,
        description: "Advancing healthcare through specialized talent solutions",
        initiatives: [
            "Clinical research professionals",
            "Regulatory affairs experts",
            "Digital health specialists",
            "Quality assurance leaders"
        ]
    }
]

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
                <div className="mb-16">
                    <h2 className="text-3xl text-center font-bold text-[#08314e] mb-2">Strategic Focus 2024-25</h2>
                    <p className="text-gray-600 text-center">Our targeted approach to industry practices and geographical presence</p>
                </div>

                {/* Industries Section */}
                <div className="mb-20">
                    <h3 className="text-2xl text-center font-semibold text-[#08314e] mb-8">Featured Industries</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {industries.map((industry, index) => {
                            const Icon = industry.icon
                            return (
                                <Card key={index} className="bg-gray-50 border-none shadow-md hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6">
                                        <div className="flex items-center mb-4">
                                            <div className="p-2 bg-white rounded-lg shadow-sm mr-4">
                                                <Icon className="w-5 h-5 text-[#08314e]" />
                                            </div>
                                            <h4 className="text-lg font-semibold text-[#08314e]">{industry.name}</h4>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-4">{industry.description}</p>
                                        <ul className="space-y-2 list-disc list-inside">
                                            {industry.initiatives.map((initiative, i) => (
                                                <li key={i} className="text-sm text-gray-500">{initiative}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>

                {/* Regions Section */}
                <div>
                    <h3 className="text-2xl text-center font-semibold text-[#08314e] mb-8">Target Regions</h3>
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
