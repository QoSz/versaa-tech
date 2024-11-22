"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
    { title: "Services", href: "#" },
    { title: "Industries", href: "#" },
    { title: "How We Work", href: "#" },
    { title: "About Us", href: "#" },
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
                            <Link
                                key={item.title}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors",
                                    isScrolled
                                        ? "text-[#08314e]/90 hover:text-[#08314e]"
                                        : "text-[#08314e] hover:text-[#08314e]/80"
                                )}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="md:hidden p-0 hover:bg-transparent" size="icon">
                                <Menu className="h-6 w-6 text-[#08314e]" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <nav className="flex flex-col space-y-4 mt-6">
                                <Link href="/" className="text-[#08314e] text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity mb-6">
                                    Versaa Tech
                                </Link>
                                {navItems.map((item) => (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        className="text-lg font-medium text-[#08314e] hover:text-[#08314e]/80"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </header>
    )
}

