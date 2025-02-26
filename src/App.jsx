import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <main className="max-w-7xl mx-auto relative pt-32">
        <Hero />
        <About />
        <div className="min-h-svh" />
      </main>
    </div>
  );
}

export default App;
