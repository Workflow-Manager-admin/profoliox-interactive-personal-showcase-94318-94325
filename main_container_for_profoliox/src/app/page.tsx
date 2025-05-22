import { Metadata } from "next";
import MainContainer from "@/components/layout/MainContainer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "ProfolioX | Home",
  description: "Welcome to my professional portfolio showcasing my work, skills, and experience.",
};

export default function Home() {
  return (
    <MainContainer>
      <div className="space-y-16 md:space-y-24 py-8">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </MainContainer>
  );
}
