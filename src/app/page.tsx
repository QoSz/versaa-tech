import { Hero } from "@/components/home/Hero";
import { Team } from "@/components/home/Leadership";
import { About } from "@/components/home/About";
import { Overview } from "@/components/home/Overview";
import { Industries } from "@/components/home/Industries";
import { Differentiators } from "@/components/home/Differentiators";
import { Regions } from "@/components/home/Regions";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="bg-[#f7fffc]">
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
        <Regions />
        <section id="about">
          <About />
          <section id="about-leadership">
            <Team />
          </section>
        </section>
      </main>
    </div>
  )
}
