'use client'

import { ArrowRight, LineChart, Users2, Briefcase } from 'lucide-react'

const services = [
    {
        title: "Our Services",
        icon: Briefcase,
        content: "We offer a comprehensive suite of human capital solutions, tailored to meet the unique challenges and opportunities in today's dynamic business landscape.",
        highlights: [
            "Executive search",
            "Workforce planning & placement",
            "HR technology and digital transformation",
            "Organizational development consulting"
        ]
    },
    {
        title: "Technical Expertise",
        icon: LineChart,
        content: "Our cornerstone is deep knowledge of job trends and market insights, coupled with vast experience in recruitment across various industry verticals.",
        highlights: [
            "Cutting-edge job market analytics",
            "Industry-specific recruitment strategies",
            "Innovative talent acquisition techniques",
            "Data-driven performance metrics"
        ]
    },
    {
        title: "Why Choose Us",
        icon: Users2,
        content: "Versaa Tech brings together a unique blend of corporate acumen and consulting prowess, led by globally recognized executives and industry veterans.",
        highlights: [
            "Leadership with Fortune 500 experience",
            "Agile and adaptive methodologies",
            "Client-centric approach to solutions",
            "Proven track record of success"
        ]
    }
]

export function Overview() {
    return (
        <section className="py-16 px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-6 md:gap-4">
                {services.map((service) => (
                    <div key={service.title} className="p-6 space-y-6">
                        <div className="flex items-center gap-4 mb-4">
                            {service.title === "Technical Expertise" && <LineChart className="w-8 h-8 text-red-500" strokeWidth={1.5} />}
                            {service.title === "Why Choose Us" && <Users2 className="w-8 h-8 text-green-500" strokeWidth={1.5} />}
                            {service.title === "Our Services" && <Briefcase className="w-8 h-8 text-yellow-500" strokeWidth={1.5} />}
                            <h3 className="text-2xl font-semibold text-gray-700 bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">{service.title}</h3>
                        </div>
                        <div>
                            <p className="text-gray-700 mb-6">{service.content}</p>
                        </div>
                        <ul className="space-y-3">
                            {service.highlights.map((highlight, hIndex) => (
                                <li key={hIndex} className="flex items-start">
                                    <ArrowRight className="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
                                    <span className="text-gray-700">{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}
