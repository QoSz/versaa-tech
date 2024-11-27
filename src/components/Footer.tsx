import * as React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram, LayoutGrid, Building2, Lightbulb, Info, Users, Building, Phone } from 'lucide-react'
import { Separator } from "@/components/ui/separator"
import { ScrollLink } from "@/components/ui/scroll-link"

const navigation = {
  main: [
    { name: 'Home', href: '/#' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Industries', href: '/#industries' },
    { name: 'Contact', href: '/#contact' },
  ],
  social: [
    { name: 'Facebook', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Instagram', href: '#' },
  ],
}

export function Footer() {
    return (
        <footer className="bg-[#08314e] text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">About Versaa Tech</h3>
                        <p className="text-sm text-gray-300">
                            Versaa Tech delivers innovative human capital solutions to help organizations attract, develop, and retain top talent.
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
                                { name: 'Contact', href: '#contact', icon: Phone },
                            ].map((item) => (
                                <li key={item.name}>
                                    <ScrollLink href={item.href} className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                                        {React.createElement(item.icon, { size: 14 })}
                                        {item.name}
                                    </ScrollLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Contact Us</h3>
                        <p className="text-sm text-gray-300">
                            123 Business Street<br />
                            City, State 12345<br />
                            contact@versaatech.com<br />
                            (123) 456-7890
                        </p>
                    </div>
                </div>
                <Separator className="my-8 bg-white/20" />
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-sm text-gray-300">
                        &copy; {new Date().getFullYear()} Versaa Tech. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        {[Facebook, Twitter, LinkedIn, Instagram].map((Icon, index) => (
                            <Link key={index} href="#" className="text-gray-300 hover:text-white transition-colors">
                                <Icon size={20} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
