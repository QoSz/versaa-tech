import { Card, CardContent } from "@/components/ui/card"
import { Monitor, Phone, Flame, Building2, Factory, Stethoscope, GraduationCap, Home, HardHat, ShoppingBag, Landmark, Shield } from 'lucide-react'

interface Industry {
    title: string
    icon: React.ElementType
    description: string
    color: string
}

const industries: Industry[] = [
    {
        title: "Information Technology",
        icon: Monitor,
        description: "Specialized IT talent acquisition including software development, cloud computing, and cybersecurity professionals.",
        color: "text-blue-600"
    },
    {
        title: "Telecom",
        icon: Phone,
        description: "Supporting telecommunications companies with network engineers, system architects, and technical specialists.",
        color: "text-green-600"
    },
    {
        title: "Oil & Gas",
        icon: Flame,
        description: "Connecting energy sector organizations with experienced professionals in exploration, production, and operations.",
        color: "text-orange-600"
    },
    {
        title: "Hospitality",
        icon: Building2,
        description: "Staffing solutions for hotels, restaurants, and tourism businesses with customer-focused professionals.",
        color: "text-purple-600"
    },
    {
        title: "Manufacturing",
        icon: Factory,
        description: "Recruiting skilled workers and management professionals for modern manufacturing environments.",
        color: "text-gray-600"
    },
    {
        title: "Pharma & Health",
        icon: Stethoscope,
        description: "Specialized recruitment for pharmaceutical companies and healthcare organizations.",
        color: "text-red-600"
    },
    {
        title: "Education & EdTech",
        icon: GraduationCap,
        description: "Connecting educational institutions with teaching professionals and EdTech specialists.",
        color: "text-yellow-600"
    },
    {
        title: "Real Estate",
        icon: Home,
        description: "Talent solutions for property development, management, and real estate services.",
        color: "text-teal-600"
    },
    {
        title: "Construction",
        icon: HardHat,
        description: "Recruiting professionals for construction projects, from skilled trades to project management.",
        color: "text-amber-600"
    },
    {
        title: "Retail",
        icon: ShoppingBag,
        description: "Staffing solutions for retail operations, from store management to e-commerce specialists.",
        color: "text-pink-600"
    },
    {
        title: "Financial Services / Banking",
        icon: Landmark,
        description: "Connecting financial institutions with qualified professionals in banking, investment, and fintech.",
        color: "text-emerald-600"
    },
    {
        title: "Insurance",
        icon: Shield,
        description: "Recruiting specialists for insurance companies, from actuaries to claims professionals.",
        color: "text-indigo-600"
    }
]

export function Industries() {
    return (
        <section className="py-12">
            <div className="px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-4">Our Industry Practices</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We provide specialized human capital solutions across diverse industries, leveraging our deep understanding of sector-specific challenges and requirements.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, index) => {
                        const Icon = industry.icon
                        return (
                            <Card
                                key={index}
                                className="group hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden bg-gradient-to-r from-white to-gray-50"
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-[#08314e]/5 p-3 rounded-lg group-hover:bg-[#08314e]/10 transition-colors">
                                            <Icon className={`w-6 h-6 ${industry.color}`} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-2">
                                                {industry.title}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                {industry.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
