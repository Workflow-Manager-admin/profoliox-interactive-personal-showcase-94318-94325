import { Metadata } from "next";
import MainContainer from "@/components/layout/MainContainer";
import About from "@/components/sections/About";

export const metadata: Metadata = {
  title: "ProfolioX | About Me",
  description: "Learn more about my background, skills, and experience.",
};

export default function AboutPage() {
  return (
    <MainContainer>
      <div className="py-12">
        <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>
        <About />
      </div>
    </MainContainer>
  );
}
