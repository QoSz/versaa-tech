import { Hero } from "@/components/home/Hero";
import { Team } from "@/components/home/Team";
import { Overview } from "@/components/home/Overview";
import { Industries } from "@/components/home/Industries";
import { Differentiators } from "@/components/home/Differentiators";
import { StrategicFocus } from "@/components/home/StrategicFocus";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-16 md:pt-20">
        <Hero />
        <Overview />
        <Industries />
        <Differentiators />
        <StrategicFocus />
        <Team />
      </main>
    </div>
  )
}
