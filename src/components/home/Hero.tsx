import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ScrollLink } from "@/components/ui/scroll-link"

export function Hero() {
    return (
        <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#e0f7fa] to-[#b3e5fc]">
            {/* Background Image */}
            <Image
                src="/images/handshake.webp"
                alt="Background images of two people shaking hands"
                fill
                priority
                quality={75}
                className="object-cover"
            />

            {/* Fade Layer */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-8">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                        Your <span className="bg-gradient-to-r from-[#4EFF7D] to-[#48AFEC] text-transparent bg-clip-text">Trusted Partner</span> for All Human Capital Services!
                    </h1>
                    <p className="text-base md:text-lg mb-6">
                        Versaa Tech delivers innovative and results-driven human capital solutions to help organizations grow.
                    </p>
                    <ScrollLink href="#contact">
                        <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-r hover:from-blue-500/90 hover:to-blue-700/90 text-white px-6 py-2">
                            How We Can Help
                        </Button>
                    </ScrollLink>
                </div>
            </div>
        </section>
    )
}
