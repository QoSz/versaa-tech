'use client'

import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';

interface TeamMember {
    name: string;
    role: string;
    initials: string;
    imagePath?: string;
    isAdvisors?: boolean;
}

const teamMembers: TeamMember[] = [
    {
        name: "Ramit Walia",
        role: "Chief Growth Officer",
        initials: "RW",
        imagePath: ""
    },
    {
        name: "Bhavana Arora",
        role: "Talent and Operations Head",
        initials: "BA",
        imagePath: ""
    },
    {
        name: "Global Advisors",
        role: "Team of Advisors in USA, Dubai, Mexico and Kenya",
        initials: "GA",
        isAdvisors: true
    }
];

export function Team() {
    return (
        <section className="py-12 px-4 md:px-8">
            {/* Leadership Team */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-4">Our Leadership</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Versaa Tech is led by a team of visionary leaders dedicated to driving innovation, excellence, and sustainable growth in the area of Human Capital Management. Committed to empowering human capital, our leadership team and our global advisors focus on job trends, professional development, skill enhancement, and creating tailored solutions for growth.
                </p>
                <p className="text-gray-600 max-w-3xl mx-auto mt-4">
                    With a deep understanding of industry trends and workforce dynamics, they specialize in targeted recruiting and delivering customized human capital solutions. By aligning talent strategies with organizational needs, they ensure Versaa Tech remains a trusted partner in driving individual and business success. Their dedication to nurturing talent and fostering meaningful connections reflects Versaa Tech's mission to be a trusted partner creating positive economic impact.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {teamMembers.map((member) => (
                    <Card key={member.name} className="border-none shadow-md rounded-2xl">
                        <CardContent className="p-6 flex flex-col items-center">
                            {!member.isAdvisors ? (
                                <Link href="/" className="relative w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                                    {member.imagePath ? (
                                        <Image 
                                            src={member.imagePath}
                                            alt={member.name}
                                            width={80}
                                            height={80}
                                            className="rounded-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-xl font-semibold text-blue-600">{member.initials}</span>
                                    )}
                                </Link>
                            ) : (
                                <div className="mb-6">
                                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                                        <svg 
                                            className="w-8 h-8 text-green-600"
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24" 
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" 
                                            />
                                        </svg>
                                    </div>
                                </div>
                            )}
                            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{member.name}</h3>
                            {member.isAdvisors ? (
                                <div className="text-center">
                                    <p className="text-gray-600">
                                        {member.role}
                                    </p>
                                </div>
                            ) : (
                                <p className="text-blue-600 text-center">{member.role}</p>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
