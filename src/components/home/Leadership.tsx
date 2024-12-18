'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

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

export function Team() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

    const truncateDescription = (text: string) => {
        return text.length > 100 ? text.substring(0, 100) + "..." : text
    }

    return (
        <section className="py-12 px-4 md:px-8">
            {/* Leadership Team */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-4">Our Leadership</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Meet our experienced team of industry veterans leading the way in human capital solutions.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {teamMembers.map((member) => (
                    <Card 
                        key={member.name} 
                        className="overflow-hidden rounded-2xl cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => setSelectedMember(member)}
                    >
                        <CardContent className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="relative w-16 h-16 flex-shrink-0">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">{member.name}</h3>
                                    <p className="text-sm text-gray-600">{member.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm">{truncateDescription(member.description)}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
                <DialogContent className="sm:max-w-[600px] p-6">
                    {selectedMember && (
                        <>
                            <DialogHeader>
                                <DialogTitle className="flex items-center gap-6 mb-6">
                                    <div className="relative w-24 h-24">
                                        <Image
                                            src={selectedMember.image}
                                            alt={selectedMember.name}
                                            fill
                                            className="rounded-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-2">{selectedMember.name}</h3>
                                        <p className="text-lg text-gray-600">{selectedMember.role}</p>
                                    </div>
                                </DialogTitle>
                                <DialogDescription className="mt-6 text-base leading-relaxed text-gray-600">
                                    {selectedMember.description}
                                </DialogDescription>
                            </DialogHeader>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    )
}
