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
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
            isScrolled
                ? "bg-white/70 backdrop-blur-md shadow-md"
                : "bg-gray-50"
        )}>
            <div className="p-4 md:p-6">
                <nav className="flex items-center justify-between">
                    <Link href="/" className="text-[#08314e] text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
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
                                        ? "text-[#08314e]/90 hover:text-[#08314e]"
                                        : "text-[#08314e] hover:text-[#08314e]/80"
                                )}
                            >
                                {React.createElement(item.icon, { size: 16 })}
                                {item.title}
                            </ScrollLink>
                        ))}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button 
                                    variant="ghost" 
                                    className={cn(
                                        "text-sm font-medium transition-colors flex items-center gap-2 p-0 h-auto bg-transparent hover:bg-transparent",
                                        isScrolled
                                            ? "text-[#08314e]/90 hover:text-[#08314e]"
                                            : "text-[#08314e] hover:text-[#08314e]/80"
                                    )}
                                >
                                    <Info className="h-4 w-4" />
                                    About
                                    <ChevronDown className="h-4 w-4" />
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
                                            {React.createElement(item.icon, { size: 16 })}
                                            {item.title}
                                        </DropdownMenuItem>
                                    </ScrollLink>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="md:hidden p-0 hover:bg-transparent" size="icon">
                                <Menu className="h-6 w-6 text-[#08314e]" />
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
                                <Link href="/" className="text-[#08314e] text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity mb-6">
                                    Versaa Tech
                                </Link>
                                {navItems.map((item) => (
                                    <ScrollLink
                                        key={item.title}
                                        href={item.href}
                                        className="text-lg font-medium text-[#08314e] hover:text-[#08314e]/80 flex items-center gap-2"
                                    >
                                        {React.createElement(item.icon, { size: 20 })}
                                        {item.title}
                                    </ScrollLink>
                                ))}
                                {aboutItems.map((item) => (
                                    <ScrollLink
                                        key={item.title}
                                        href={item.href}
                                        className="text-lg font-medium text-[#08314e] hover:text-[#08314e]/80 flex items-center gap-2"
                                    >
                                        {React.createElement(item.icon, { size: 20 })}
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
