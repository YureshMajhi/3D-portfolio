import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";

function App() {
  return (
    <>
      <main className="bg-black h-full">
        <Navbar />
        <Hero />
        <ShowcaseSection />
      </main>
    </>
  );
}

export default App;
