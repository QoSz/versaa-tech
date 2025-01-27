import React from 'react'
import Link from 'next/link'
import { LayoutGrid, Building2, Lightbulb, Users, Building, Phone, Shield } from 'lucide-react'
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'



export function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
            <div className="px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <Link href="/">
                            <Image 
                                src="/images/versaatech-logo.png"
                                alt="Versaa Tech Logo"
                                width={130}
                                height={130}
                                className="w-[130px] h-[130px]"
                                loading="lazy"
                                fetchPriority="low"
                            />
                        </Link>
                        <p className="text-sm text-gray-300">
                            Versaa Tech is a knowledge-driven organization built on a foundation of deep expertise. Our core strengths exist in our comprehensive understanding of job trends, actionable market insights, and extensive experience, which enable us to deliver exceptional value.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { name: 'Overview', href: '#overview', icon: LayoutGrid },
                                { name: 'Industries', href: '#industries', icon: Building2 },
                                { name: 'How We Work', href: '#differentiators', icon: Lightbulb },
                                { name: 'About', href: '#about', icon: Building },
                                { name: 'Leadership', href: '#about-leadership', icon: Users },
                                { name: 'Contact', href: '/contact', icon: Phone, isRoute: true },
                                { name: 'Privacy Policy', href: '/privacy', icon: Shield, isRoute: true },
                            ].map((item) => (
                                <li key={item.name}>
                                    {item.isRoute ? (
                                        <Link href={item.href} className="text-sm text-gray-300 hover:text-blue-200 transition-colors flex items-center gap-2">
                                            {React.createElement(item.icon, { size: 14 })}
                                            {item.name}
                                        </Link>
                                    ) : (
                                        <Link
                                            href={`/${item.href}`}
                                            className="text-sm text-gray-300 hover:text-blue-200 transition-colors flex items-center gap-2"
                                        >
                                            {React.createElement(item.icon, { size: 14 })}
                                            {item.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Contact Us</h3>
                        <p className="text-sm text-gray-300">
                            <span className="block">Meydan Grandstand, 6th floor, Meydan Road</span>
                            <span className="pb-2 block">Nad Al Sheba, Dubai, U.A.E</span>
                            <a href="mailto:info@versaatech.com" className="hover:text-blue-200 pb-2 block">info@versaatech.com</a>
                        </p>
                    </div>
                </div>
                <Separator className="my-8 bg-white/20" />
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
                    <p className="text-sm text-gray-300 text-center">
                        &copy; {new Date().getFullYear()} Versaa Tech. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
