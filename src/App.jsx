import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <main className="xl:max-w-8xl xl:mx-auto relative pt-32">
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
