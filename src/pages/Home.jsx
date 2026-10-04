import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import FeaturedProjects from "../components/FeaturedProjects";
import Experience from "../components/Experience";
import Learning from "../components/Learning";
import GitHubSection from "../components/GitHubSection";
import Contact from "../components/Contact";
import useReveal from "../hooks/useReveal";
import usePageMeta from "../hooks/usePageMeta";

export default function Home() {
  useReveal("home");
  usePageMeta();

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <Learning />
      <GitHubSection />
      <Contact />
    </>
  );
}
