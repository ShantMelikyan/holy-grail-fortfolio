import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Main() {
  
  return (
    <main className="dark:bg-[#292226] bg-[#E6E0C8]">
      <Navbar />
      <Home />
      <About/>
      <Projects />
    </main>
  )
}
