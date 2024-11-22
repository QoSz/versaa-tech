import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'

const services = [
    {
        title: "Technical Expertise",
        icon: "📊",
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
        icon: "👥",
        content: "Versaa Tech brings together a unique blend of corporate acumen and consulting prowess, led by globally recognized executives and industry veterans.",
        highlights: [
            "Leadership with Fortune 500 experience",
            "Agile and adaptive methodologies",
            "Client-centric approach to solutions",
            "Proven track record of success"
        ]
    },
    {
        title: "Our Services",
        icon: "📈",
        content: "We offer a comprehensive suite of human capital solutions, tailored to meet the unique challenges and opportunities in today's dynamic business landscape.",
        highlights: [
            "Executive search and leadership placement",
            "Strategic workforce planning",
            "HR technology and digital transformation",
            "Organizational development consulting"
        ]
    }
]

export function Overview() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-3">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="rounded-2xl overflow-hidden bg-[#08314e] text-white hover:shadow-xl transition-shadow"
                        >
                            <CardContent className="p-6 space-y-6">
                                <div className="text-3xl mb-4">
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                                    <p className="text-gray-300 mb-6">{service.content}</p>
                                </div>
                                <ul className="space-y-3">
                                    {service.highlights.map((highlight, hIndex) => (
                                        <li key={hIndex} className="flex items-start">
                                            <ArrowRight className="w-5 h-5 mr-2 text-white flex-shrink-0 mt-1" />
                                            <span className="text-gray-200">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

