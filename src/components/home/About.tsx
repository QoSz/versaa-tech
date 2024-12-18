import { Award, Users, Lightbulb, Target } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
    {
        icon: Users,
        title: "Expert Leadership",
        description: "Our executive team brings decades of diverse experience in Business, Technology, and Operations across global industries."
    },
    {
        icon: Award,
        title: "Customer Excellence",
        description: "Passion and proven track record of delivering customer-centric services, establishing lifelong partnerships."
    },
    {
        icon: Lightbulb,
        title: "Innovative Approach",
        description: "Proven methodology in identifying, grooming, and applying Human Capital to drive high-impact business transformations."
    },
    {
        icon: Target,
        title: "End-to-End Solutions",
        description: "Comprehensive Human Capital Services and Solutions enabled through our trusted global partner network."
    }
]

export function About() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                {/* Main Introduction */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-6">About Versaa Tech</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Versaa Tech is a knowledge-driven organization. Our cornerstone is built on deep understanding of job market trends, invaluable insights, and extensive expertise in human capital solutions.
                    </p>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {highlights.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <Card key={index} className="bg-white rounded-2xl hover:shadow-lg transition-shadow bg-gradient-to-r from-white to-gray-100 h-full">
                                <CardContent className="p-6">
                                    <Icon className="w-12 h-12 text-blue-600 mb-4" />
                                    <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
