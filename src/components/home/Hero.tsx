import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <Image
                src="/images/handshake.webp"
                alt="Background"
                fill
                priority
                className="object-cover"
            />

            {/* Fade Layer */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-8">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                        Your Trusted Partner for Human Capital Solutions
                    </h1>
                    <p className="text-base md:text-lg mb-6">
                        Versaa Tech delivers innovative and results-driven solutions to help organizations attract, develop, and retain top talent.
                    </p>
                    <Button className="bg-[#08314e] hover:bg-[#08314e]/90 text-white px-6 py-2">
                        Discover How We Can Help
                    </Button>
                </div>
            </div>
        </section>
    )
}

