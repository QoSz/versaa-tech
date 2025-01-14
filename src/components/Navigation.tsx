"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, LayoutGrid, Building2, Lightbulb, Info, Users, ChevronDown, Building, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollLink } from "@/components/ui/scroll-link"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"

const navItems = [
    { title: "Overview", href: "#overview", icon: LayoutGrid },
    { title: "Industries", href: "#industries", icon: Building2 },
    { title: "How We Work", href: "#differentiators", icon: Lightbulb },
    { title: "Contact", href: "#contact", icon: Phone },
]

const aboutItems = [
    { title: "About Versaa Tech", href: "#about", icon: Building },
    { title: "Leadership", href: "#about-leadership", icon: Users },
]

export function Navigation() {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="p-4 md:p-6">
                <nav className="flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <div className="max-h-[40px] flex items-center">
                            <Image 
                                src="/images/versaatech-logo.png"
                                alt="Versaa Tech Logo"
                                width={90}
                                height={90}
                                className="dark:invert max-h-[75px] md:max-h-[100px] object-contain"
                            />
                        </div>
                        {/* Versaa Tech */}
                    </Link>
                    <div className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <ScrollLink
                                key={item.title}
                                href={item.href}
                                className={`text-sm font-medium transition-colors flex items-center gap-2 relative group ${
                                    isScrolled
                                        ? "text-black hover:opacity-90"
                                        : "text-black hover:opacity-80"
                                }`}
                            >
                                {React.createElement(item.icon, { 
                                    size: 16,
                                    className: "stroke-black"
                                })}
                                <span className="relative z-10">
                                    {item.title}
                                </span>
                                <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-blue-700 group-hover:w-full transition-all duration-300"></span>
                            </ScrollLink>
                        ))}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button 
                                    variant="ghost" 
                                    className={`text-sm font-medium transition-opacity flex items-center gap-2 p-0 h-auto bg-transparent hover:bg-transparent hover:opacity-80 text-black`}
                                >
                                    <Info className="stroke-black" />
                                    About
                                    <ChevronDown className="stroke-black" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {aboutItems.map((item) => (
                                    <ScrollLink
                                        key={item.title}
                                        href={item.href}
                                        className="w-full"
                                    >
                                        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer relative group">
                                            {React.createElement(item.icon, { 
                                                size: 16, 
                                                className: "stroke-black" 
                                            })}
                                            <span className="text-black group-hover:opacity-80 transition-opacity relative z-10">
                                                {item.title}
                                            </span>
                                            <span className="absolute bottom-[0px] left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-blue-700 group-hover:w-full transition-all duration-300"></span>
                                        </DropdownMenuItem>
                                    </ScrollLink>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="md:hidden p-0 hover:bg-transparent" size="icon">
                                <Menu className="h-6 w-6 stroke-black" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <SheetHeader>
                                <SheetTitle>Navigation Menu</SheetTitle>
                                <SheetDescription>
                                    Access all sections of our website
                                </SheetDescription>
                            </SheetHeader>
                            <nav className="flex flex-col space-y-4 mt-4">
                                <Link href="/" className="flex items-center">
                                    <div className="max-h-[100px] flex items-center">
                                        <Image 
                                            src="/images/versaatech-logo.png"
                                            alt="Versaa Tech Logo"
                                            width={100}
                                            height={100}
                                            className="dark:invert max-h-[100px] object-contain"
                                        />
                                    </div>
                                    {/* Versaa Tech */}
                                </Link>
                                {navItems.map((item) => (
                                    <ScrollLink
                                        key={item.title}
                                        href={item.href}
                                        className="text-md font-medium flex items-center gap-2 text-black hover:opacity-90 relative group"
                                    >
                                        {React.createElement(item.icon, { 
                                            size: 20,
                                            className: "stroke-black"
                                        })}
                                        <span className="relative z-10">
                                            {item.title}
                                        </span>
                                        <span className="absolute bottom-[-1px] left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-blue-700 group-hover:w-full transition-all duration-300"></span>
                                    </ScrollLink>
                                ))}
                                {aboutItems.map((item) => (
                                    <ScrollLink
                                        key={item.title}
                                        href={item.href}
                                        className="text-lg font-medium flex items-center gap-2 text-black hover:opacity-90 relative group"
                                    >
                                        {React.createElement(item.icon, { 
                                            size: 20,
                                            className: "stroke-black"
                                        })}
                                        <span className="relative z-10">
                                            {item.title}
                                        </span>
                                        <span className="absolute bottom-[-1px] left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-blue-700 group-hover:w-full transition-all duration-300"></span>
                                    </ScrollLink>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </header>
    )
}