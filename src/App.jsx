import "./App.css";
import LogoSection from "./sections/LogoSection";
import Navbar from "./components/Navbar";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <>
      <main className="bg-black h-full">
        <Navbar />
        <Hero />
        <ShowcaseSection />
        <LogoSection />
        <FeatureCards />
        <ExperienceSection />
        <TechStack />
        <Testimonials />
      </main>
    </>
  );
}

export default App;
