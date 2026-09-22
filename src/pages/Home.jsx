import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import Education from "../components/Education.jsx";
import Experience from "../components/Experience.jsx";
import Hobbies from "../components/Hobbies.jsx";
import Skills from "../components/Skills.jsx";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Hobbies />
      <Footer />
    </div>
  );
}
