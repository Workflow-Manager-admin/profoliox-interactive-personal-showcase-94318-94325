import { Metadata } from "next";
import MainContainer from "@/components/layout/MainContainer";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "ProfolioX | Contact Me",
  description: "Get in touch with me for opportunities, collaborations, or questions.",
};

export default function ContactPage() {
  return (
    <MainContainer>
      <div className="py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>
        <Contact />
      </div>
    </MainContainer>
  );
}
