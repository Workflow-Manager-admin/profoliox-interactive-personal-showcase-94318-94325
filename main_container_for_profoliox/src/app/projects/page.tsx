import { Metadata } from "next";
import MainContainer from "@/components/layout/MainContainer";
import Projects from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "ProfolioX | My Projects",
  description: "Explore my portfolio of projects and case studies.",
};

export default function ProjectsPage() {
  return (
    <MainContainer>
      <div className="py-12">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
        <Projects />
      </div>
    </MainContainer>
  );
}
