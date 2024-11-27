import { Hero } from "@/components/home/Hero";
import { Team } from "@/components/home/Team";
import { About } from "@/components/home/About";
import { Overview } from "@/components/home/Overview";
import { Industries } from "@/components/home/Industries";
import { Differentiators } from "@/components/home/Differentiators";
import { StrategicFocus } from "@/components/home/StrategicFocus";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-16 md:pt-20">
        <Hero />
        <section id="overview">
          <Overview />
        </section>
        <section id="industries">
          <Industries />
        </section>
        <section id="differentiators">
          <Differentiators />
        </section>
        <StrategicFocus />
        <section id="about">
          <About />
          <section id="about-leadership">
            <Team />
          </section>
        </section>
        <Contact />
      </main>
    </div>
  )
}
