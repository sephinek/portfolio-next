import Hero from "@/app/_components/Hero";
import Skills from "@/app/_components/Skills";
import Projects from "@/app/_components/Projects";

export default function Home() {
  return (
    <div className="animate-fadeIn opacity-0">
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}
