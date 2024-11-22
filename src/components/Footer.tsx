import Link from 'next/link'
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from 'lucide-react'
import { Separator } from "@/components/ui/separator"

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
                            {['Services', 'Industries', 'How We Work', 'About Us'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                                        {item}
                                    </Link>
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
                        © {new Date().getFullYear()} Versaa Tech. All rights reserved.
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

