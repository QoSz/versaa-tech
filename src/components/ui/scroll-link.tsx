"use client"

import * as React from 'react'
import Link from 'next/link'

interface ScrollLinkProps {
    href: string
    className?: string
    children: React.ReactNode
}

export function ScrollLink({ href, className, children }: ScrollLinkProps) {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            const navHeight = 80 // approximate height of the navigation bar
            const elementPosition = element.getBoundingClientRect().top + window.scrollY
            window.scrollTo({
                top: elementPosition - navHeight,
                behavior: 'smooth'
            })
        }
    }

    return (
        <Link href={href} onClick={scrollToSection} className={className}>
            {children}
        </Link>
    )
}
