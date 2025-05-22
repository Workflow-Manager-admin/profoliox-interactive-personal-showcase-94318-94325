import { Metadata } from "next";
import MainContainer from "@/components/layout/MainContainer";
import Skills from "@/components/sections/Skills";

export const metadata: Metadata = {
  title: "ProfolioX | Skills & Expertise",
  description: "Explore my technical skills and expertise across various domains.",
};

export default function SkillsPage() {
  return (
    <MainContainer>
      <div className="py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Skills & Expertise</h1>
        <Skills />
      </div>
    </MainContainer>
  );
}
