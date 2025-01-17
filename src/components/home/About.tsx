import { Award, Users, Lightbulb, Target } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Interface for the highlight items
interface HighlightItem {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    color: string;
}

const highlights: HighlightItem[] = [
    {
        icon: Users,
        title: "Expert Leadership",
        description: "Our executive team brings decades of diverse experience in Business, Technology, and Operations across global industries.",
        color: "text-blue-600"
    },
    {
        icon: Award,
        title: "Customer Excellence",
        description: "Passion and proven track record of delivering customer-centric services, establishing lifelong partnerships.",
        color: "text-yellow-600"
    },
    {
        icon: Lightbulb,
        title: "Innovative Approach",
        description: "Proven methodology in identifying, grooming, and applying Human Capital to drive high-impact business transformations.",
        color: "text-green-600"
    },
    {
        icon: Target,
        title: "End-to-End Solutions",
        description: "Comprehensive Human Capital Services and Solutions enabled through our trusted global partner network.",
        color: "text-red-600"
    }
];

export function About() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                {/* Main Introduction */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-6">About Versaa Tech</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Versaa Tech is a results-driven organization. We leverage deep job market data and human capital expertise to deliver specialized solutions.
                    </p>
                </div>

                {/* Key Highlights - Accordion Style */}
                <div className="max-w-2xl mx-auto"> {/* Limiting width */}
                    <Accordion type="single" collapsible className="w-full">
                        {highlights.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <AccordionItem value={`item-${index}`} key={index}>
                                    <AccordionTrigger>
                                        <div className="flex items-center">
                                            <Icon className={`mr-2 h-6 w-6 ${item.color}`} />
                                            <span className="text-lg font-medium">{item.title}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-gray-600">{item.description}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}