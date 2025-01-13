"use client"

import { createElement } from 'react'
import { Globe2, Users, Rocket, Building, Search, Badge, Handshake, Target, Award } from 'lucide-react'
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

interface Differentiator {
    icon: React.ElementType
    title: string
}

const differentiators: Differentiator[] = [
    {
        icon: Globe2,
        title: "Your Right Shore Partner",
    },
    {
        icon: Users,
        title: "Customer First Approach",
    },
    {
        icon: Rocket,
        title: "Consistent Delivery",
    },
    {
        icon: Building,
        title: "Industry Expertise",
    },
    {
        icon: Search,
        title: "Market Research & Benchmarking",
    },
    {
        icon: Badge,
        title: "Customer Delight",
    },
    {
        icon: Handshake,
        title: "Winning Together",
    },
    {
        icon: Target,
        title: "Talent Curators",
    },
    {
        icon: Award,
        title: "Brand Ambassadors",
    }
]

export function Differentiators() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-8 text-center">Our Differentiators</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {differentiators.map((item, index) => (
                        <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                            <CardHeader className="p-4">
                                <CardTitle className="flex items-center gap-3 text-gray-700">
                                    {createElement(item.icon, { className: "w-5 h-5 text-blue-600 flex-shrink-0" })}
                                    <span className="text-base font-medium">{item.title}</span>
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
