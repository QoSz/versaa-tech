"use client"

import { useState, createElement } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Globe2, Users, Rocket, Building, Search, Badge, Handshake, Target, Award, CheckCircle2 } from 'lucide-react'

interface Differentiator {
    icon: React.ElementType
    title: string
    description: string
    keyPoints: string[]
    stats?: { label: string; value: string }[]
    features?: string[]
}

const differentiators: Differentiator[] = [
    {
        icon: Globe2,
        title: "Your Right Shore Partner",
        description: "Strategic presence across Onsite, Onshore, Nearshore, and Offshore locations, providing flexible engagement models to suit your needs.",
        keyPoints: [
            "24/7 global delivery capabilities across multiple time zones",
            "Local market expertise with global delivery standards",
            "Customizable engagement models for optimal cost-efficiency"
        ],
        stats: [
            { label: "Global Locations", value: "10+" },
            { label: "Time Zones Covered", value: "12" },
            { label: "Delivery Centers", value: "5" }
        ],
        features: [
            "Hybrid delivery models combining onsite and offshore teams",
            "Seamless communication and collaboration tools",
            "Cultural alignment and local market understanding"
        ]
    },
    {
        icon: Users,
        title: "Customer First Approach",
        description: "Every decision we make starts with understanding and prioritizing our customers' unique requirements and objectives.",
        keyPoints: [
            "Dedicated customer success managers for each project",
            "Regular feedback loops and continuous improvement",
            "Tailored solutions based on specific business needs"
        ],
        stats: [
            { label: "Customer Satisfaction", value: "98%" },
            { label: "Client Retention", value: "95%" },
            { label: "NPS Score", value: "85+" }
        ],
        features: [
            "Proactive issue resolution and risk management",
            "Transparent communication and reporting",
            "Regular business reviews and strategy alignment"
        ]
    },
    {
        icon: Rocket,
        title: "Consistent Delivery",
        description: "Reliable and timely execution of projects with standardized processes ensuring predictable, high-quality outcomes.",
        keyPoints: [
            "Proven delivery methodology and best practices",
            "Robust quality assurance processes",
            "Continuous monitoring and performance optimization"
        ],
        stats: [
            { label: "On-time Delivery", value: "97%" },
            { label: "Quality Standards", value: "99.9%" },
            { label: "First-time-right", value: "95%" }
        ],
        features: [
            "Automated quality checks and monitoring",
            "Regular performance benchmarking",
            "Continuous improvement through lessons learned"
        ]
    },
    {
        icon: Building,
        title: "Industry Expertise",
        description: "Deep domain knowledge across sectors combined with extensive global reach and local market understanding.",
        keyPoints: [
            "Specialized teams for each industry vertical",
            "Regular industry training and certification programs",
            "Industry-specific best practices and frameworks"
        ],
        stats: [
            { label: "Industry Verticals", value: "12+" },
            { label: "Certified Experts", value: "500+" },
            { label: "Years of Experience", value: "15+" }
        ],
        features: [
            "Industry-specific solution accelerators",
            "Domain-led consulting approach",
            "Regular industry trend analysis and insights"
        ]
    },
    {
        icon: Search,
        title: "Market Research & Benchmarking",
        description: "Data-driven insights and comprehensive market analysis to ensure competitive and effective solutions.",
        keyPoints: [
            "Comprehensive market analysis and competitor tracking",
            "Regular industry benchmarking studies",
            "Data-driven decision making framework"
        ],
        stats: [
            { label: "Markets Analyzed", value: "50+" },
            { label: "Research Reports", value: "100+" },
            { label: "Data Points", value: "1M+" }
        ],
        features: [
            "Custom research methodologies",
            "Real-time market monitoring",
            "Actionable insights and recommendations"
        ]
    },
    {
        icon: Badge,
        title: "Customer Delight",
        description: "Going beyond satisfaction to create exceptional experiences that exceed expectations at every touchpoint.",
        keyPoints: [
            "Proactive customer engagement model",
            "Personalized service delivery",
            "Value-added services and support"
        ],
        stats: [
            { label: "Customer Rating", value: "4.9/5" },
            { label: "Support Response", value: "< 1hr" },
            { label: "Issue Resolution", value: "24hrs" }
        ],
        features: [
            "24/7 customer support availability",
            "Multi-channel engagement options",
            "Regular customer feedback incorporation"
        ]
    },
    {
        icon: Handshake,
        title: "Winning Together",
        description: "Partnership-focused approach ensuring mutual growth and success through collaborative relationships.",
        keyPoints: [
            "Long-term partnership approach",
            "Shared success metrics",
            "Joint innovation initiatives"
        ],
        stats: [
            { label: "Partner Success Rate", value: "95%" },
            { label: "Joint Ventures", value: "25+" },
            { label: "Growth Rate", value: "40%" }
        ],
        features: [
            "Strategic alignment workshops",
            "Co-innovation programs",
            "Regular partnership reviews"
        ]
    },
    {
        icon: Target,
        title: "Talent Curators",
        description: "Expert identification and nurturing of top talent, matching the right professionals with the right opportunities.",
        keyPoints: [
            "Advanced talent assessment frameworks",
            "Continuous learning and development programs",
            "Career progression planning"
        ],
        stats: [
            { label: "Talent Pool", value: "10K+" },
            { label: "Retention Rate", value: "92%" },
            { label: "Training Hours", value: "100K+" }
        ],
        features: [
            "Skill-based talent mapping",
            "Personalized development plans",
            "Regular performance reviews"
        ]
    },
    {
        icon: Award,
        title: "Brand Ambassadors",
        description: "Dedicated to representing your brand values and enhancing your market presence through our service excellence.",
        keyPoints: [
            "Brand value alignment",
            "Market presence enhancement",
            "Reputation management"
        ],
        stats: [
            { label: "Brand Campaigns", value: "200+" },
            { label: "Market Reach", value: "50M+" },
            { label: "Brand Value", value: "$100M+" }
        ],
        features: [
            "Brand strategy consulting",
            "Digital presence optimization",
            "Market positioning support"
        ]
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
                                className={`w-full text-left p-4 rounded-lg transition-colors ${index === activeIndex ? 'bg-[#08314e] text-white' : 'hover:bg-gray-100'}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="flex items-center">
                                    {createElement(item.icon, { className: `w-6 h-6 mr-3 ${index === activeIndex ? 'text-white' : 'text-[#08314e]'}` })}
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
                                className="h-full flex flex-col justify-between"
                            >
                                <div>
                                    <h3 className="text-2xl font-bold text-[#08314e] mb-4 flex items-center gap-3">
                                        {createElement(differentiators[activeIndex].icon, { className: "w-8 h-8" })}
                                        {differentiators[activeIndex].title}
                                    </h3>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{differentiators[activeIndex].description}</p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                        {differentiators[activeIndex].stats?.map((stat, index) => (
                                            <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                                                <div className="text-2xl font-bold text-[#08314e]">{stat.value}</div>
                                                <div className="text-sm text-gray-600">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-[#08314e] mb-3">Key Highlights</h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {differentiators[activeIndex].keyPoints.map((point, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-[#08314e] mb-3">Key Features</h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {differentiators[activeIndex].features?.map((feature, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-5 h-5 text-[#08314e] mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}