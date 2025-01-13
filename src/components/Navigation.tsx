"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, LayoutGrid, Building2, Lightbulb, Info, Users, ChevronDown, Building, Phone } from 'lucide-react'
import { cn } from "@/lib/utils"
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
                    <Link href="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent flex items-center gap-2">
                        <div style={{ maxHeight: '40px', display: 'flex', alignItems: 'center' }}>
                            <Image 
                                src="/images/versaatech-logo-2.png"
                                alt="Versaa Tech Logo"
                                width={70}
                                height={70}
                                className="dark:invert"
                                style={{ objectFit: 'contain', maxHeight: '70px' }}
                            />
                        </div>
                        Versaa Tech
                    </Link>
                    <div className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <ScrollLink
                                key={item.title}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors flex items-center gap-2",
                                    isScrolled
                                        ? "text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text hover:opacity-90"
                                        : "text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text hover:opacity-80"
                                )}
                            >
                                {React.createElement(item.icon, { 
                                    size: 16,
                                    className: "stroke-blue-600"
                                })}
                                {item.title}
                            </ScrollLink>
                        ))}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button 
                                    variant="ghost" 
                                    className={cn(
                                        "text-sm font-medium transition-opacity flex items-center gap-2 p-0 h-auto bg-transparent",
                                        "hover:bg-transparent hover:opacity-80",
                                        "text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text"
                                    )}
                                >
                                    <Info className="stroke-blue-600" />
                                    About
                                    <ChevronDown className="stroke-blue-600" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {aboutItems.map((item) => (
                                    <ScrollLink
                                        key={item.title}
                                        href={item.href}
                                        className="w-full"
                                    >
                                        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                                            {React.createElement(item.icon, { 
                                                size: 16, 
                                                className: "stroke-blue-600" 
                                            })}
                                            <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text group-hover:opacity-80 transition-opacity">
                                                {item.title}
                                            </span>
                                        </DropdownMenuItem>
                                    </ScrollLink>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="md:hidden p-0 hover:bg-transparent" size="icon">
                                <Menu className="h-6 w-6 stroke-blue-600" />
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
                            <nav className="flex flex-col space-y-4 mt-6">
                                <Link href="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent flex items-center gap-2">
                                    <div style={{ maxHeight: '40px', display: 'flex', alignItems: 'center' }}>
                                        <Image 
                                            src="/images/versaatech-logo-2.png"
                                            alt="Versaa Tech Logo"
                                            width={60}
                                            height={60}
                                            className="dark:invert"
                                            style={{ objectFit: 'contain', maxHeight: '70px' }}
                                        />
                                    </div>
                                    Versaa Tech
                                </Link>
                                {navItems.map((item) => (
                                    <ScrollLink
                                        key={item.title}
                                        href={item.href}
                                        className="text-md font-medium flex items-center gap-2 text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text hover:opacity-90"
                                    >
                                        {React.createElement(item.icon, { 
                                            size: 20,
                                            className: "stroke-blue-600"
                                        })}
                                        {item.title}
                                    </ScrollLink>
                                ))}
                                {aboutItems.map((item) => (
                                    <ScrollLink
                                        key={item.title}
                                        href={item.href}
                                        className="text-lg font-medium flex items-center gap-2 text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text hover:opacity-90"
                                    >
                                        {React.createElement(item.icon, { 
                                            size: 20,
                                            className: "stroke-blue-600"
                                        })}
                                        {item.title}
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