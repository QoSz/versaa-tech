import Image from 'next/image'
import { Award, Users, Lightbulb, Target } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

interface TeamMember {
    name: string
    role: string
    image: string
    description: string
}

const teamMembers: TeamMember[] = [
    {
        name: "Sangy Vatsa",
        role: "Founder",
        image: "https://placehold.co/200x200",
        description: "With over two decades of experience in technology and business leadership, Sangy brings a wealth of knowledge in driving innovation and growth in the human capital sector."
    },
    {
        name: "Ramit Walia",
        role: "Chief Growth Enabler",
        image: "https://placehold.co/200x200",
        description: "Ramit's expertise in market expansion and strategic partnerships has been instrumental in Versaa Tech's rapid growth across diverse global markets."
    },
    {
        name: "Monisha Gossain",
        role: "Chief Advisor & Counsellor",
        image: "https://placehold.co/200x200",
        description: "Monisha's deep understanding of organizational psychology and talent development has shaped our approach to delivering impactful human capital solutions."
    },
    {
        name: "KA",
        role: "Chief Operations Officer",
        image: "https://placehold.co/200x200",
        description: "KA's operational excellence and process optimization strategies ensure that Versaa Tech delivers consistent, high-quality services to our global clientele."
    }
]

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

export function Team() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Main Introduction */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[#08314e] mb-6">About Versaa Tech</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Versaa Tech is a knowledge-driven organization. Our cornerstone is built on deep understanding of job market trends, invaluable insights, and extensive expertise in human capital solutions.
                    </p>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {highlights.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <Card key={index} className="bg-white rounded-2xl hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <Icon className="w-12 h-12 text-[#08314e] mb-4" />
                                    <h3 className="text-xl font-semibold text-[#08314e] mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                {/* Leadership Team */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#08314e] mb-4">Our Leadership</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Meet our experienced team of industry veterans leading the way in human capital solutions.
                    </p>
                </div>

                <div className="space-y-8">
                    {teamMembers.map((member) => (
                        <Card key={member.name} className="overflow-hidden rounded-2xl">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/3 p-6 flex flex-col items-center justify-center bg-gray-100">
                                    <div className="relative w-40 h-40 mb-4">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="rounded-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#08314e] mb-1">{member.name}</h3>
                                    <p className="text-gray-600">{member.role}</p>
                                </div>
                                <CardContent className="md:w-2/3 p-6 flex items-center">
                                    <p className="text-gray-600">{member.description}</p>
                                </CardContent>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
