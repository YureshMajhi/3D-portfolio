import "./App.css";
import LogoSection from "./sections/LogoSection";
import Navbar from "./components/Navbar";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";

function App() {
  return (
    <>
      <main className="bg-black h-full">
        <Navbar />
        <Hero />
        <ShowcaseSection />
        <LogoSection />
        <FeatureCards />
      </main>
    </>
  );
}

export default App;
