import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { PasswordProtection } from "@/components/PasswordProtection"
import ScrollToTopButton from "@/components/ScrollToTopButton"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Versaa Tech",
  description: "Human capital solutions company",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PasswordProtection>
          <Navigation />
          {children}
          <Footer />
          <ScrollToTopButton />
        </PasswordProtection>
      </body>
    </html>
  )
}
