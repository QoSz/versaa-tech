import { Hero } from "@/components/home/Hero";
import { Team } from "@/components/home/Leadership";
import { About } from "@/components/home/About";
import { Overview } from "@/components/home/Overview";
import { Industries } from "@/components/home/Industries";
import { Differentiators } from "@/components/home/Differentiators";
import { StrategicFocus } from "@/components/home/StrategicFocus";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="bg-[#ccffff]">
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
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  )
}
