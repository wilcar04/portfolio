import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto relative pt-32 overflow-hidden ">
        <Hero />
        <div className="min-h-svh" />
      </main>
    </>
  );
}

export default App;
