import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
// import { PasswordProtection } from "@/components/PasswordProtection"
import ScrollToTopButton from "@/components/ScrollToTopButton"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Versaa Tech",
  description: "Versaa Tech - Global human capital solutions provider specializing in recruitment, workforce planning, and HR technology across diverse industries. Partner with us for innovative talent acquisition strategies.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <PasswordProtection> */}
        <Navigation />
        {children}
        <Footer />
        <ScrollToTopButton />
        {/* </PasswordProtection> */}
      </body>
    </html>
  )
}
