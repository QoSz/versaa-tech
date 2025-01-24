'use client'

import { Award, Users, Lightbulb, Target } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from 'framer-motion'

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

// Animation variants
const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.6,
            when: "beforeChildren",
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export function About() {
    return (
        <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="py-12"
        >
            <div className="container mx-auto px-4">
                {/* Main Introduction */}
                <motion.div 
                    className="text-center mb-16"
                    variants={itemVariants}
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-6">
                        About Versaa Tech
                    </h2>
                    <motion.p 
                        className="text-gray-600 max-w-3xl mx-auto text-lg"
                        variants={itemVariants}
                    >
                        Versaa Tech is a results-driven organization. We leverage deep job market data and human capital expertise to deliver specialized solutions.
                    </motion.p>
                </motion.div>

                {/* Key Highlights - Accordion Style */}
                <motion.div 
                    className="max-w-2xl mx-auto"
                    variants={itemVariants}
                >
                    <Accordion type="single" collapsible className="w-full">
                        {highlights.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div 
                                    key={index}
                                    variants={itemVariants}
                                >
                                    <AccordionItem value={`item-${index}`}>
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
                                </motion.div>
                            );
                        })}
                    </Accordion>
                </motion.div>
            </div>
        </motion.section>
    );
}