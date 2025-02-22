import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto relative mt-32">
        <Hero />
      </main>
    </>
  );
}

export default App;
