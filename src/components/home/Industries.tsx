import { Card, CardContent } from "@/components/ui/card"
import { Monitor, Phone, Flame, Building2, Factory, Stethoscope, GraduationCap, Home, HardHat, ShoppingBag, Landmark, Shield } from 'lucide-react'

interface Industry {
    title: string
    icon: React.ElementType
    description: string
}

const industries: Industry[] = [
    {
        title: "Information Technology",
        icon: Monitor,
        description: "Specialized IT talent acquisition including software development, cloud computing, and cybersecurity professionals."
    },
    {
        title: "Telecom",
        icon: Phone,
        description: "Supporting telecommunications companies with network engineers, system architects, and technical specialists."
    },
    {
        title: "Oil & Gas",
        icon: Flame,
        description: "Connecting energy sector organizations with experienced professionals in exploration, production, and operations."
    },
    {
        title: "Hospitality",
        icon: Building2,
        description: "Staffing solutions for hotels, restaurants, and tourism businesses with customer-focused professionals."
    },
    {
        title: "Manufacturing",
        icon: Factory,
        description: "Recruiting skilled workers and management professionals for modern manufacturing environments."
    },
    {
        title: "Pharma & Health",
        icon: Stethoscope,
        description: "Specialized recruitment for pharmaceutical companies and healthcare organizations."
    },
    {
        title: "Education & EdTech",
        icon: GraduationCap,
        description: "Connecting educational institutions with teaching professionals and EdTech specialists."
    },
    {
        title: "Real Estate",
        icon: Home,
        description: "Talent solutions for property development, management, and real estate services."
    },
    {
        title: "Construction",
        icon: HardHat,
        description: "Recruiting professionals for construction projects, from skilled trades to project management."
    },
    {
        title: "Retail",
        icon: ShoppingBag,
        description: "Staffing solutions for retail operations, from store management to e-commerce specialists."
    },
    {
        title: "Financial Services / Banking",
        icon: Landmark,
        description: "Connecting financial institutions with qualified professionals in banking, investment, and fintech."
    },
    {
        title: "Insurance",
        icon: Shield,
        description: "Recruiting specialists for insurance companies, from actuaries to claims professionals."
    }
]

export function Industries() {
    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#08314e] mb-4">Our Industry Practices</h2>
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
                                className="group hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden"
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-[#08314e]/5 p-3 rounded-lg group-hover:bg-[#08314e]/10 transition-colors">
                                            <Icon className="w-6 h-6 text-[#08314e]" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-[#08314e] mb-2">
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

