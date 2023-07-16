import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function Main() {
  
  return (
    <main className="dark:bg-[#292226] bg-[#E6E0C8]">
      <div className="fixed inset-0 pointer-events-none">
    <div className="element-3 absolute h-full w-full"></div>
    <div className="element-1 absolute h-full w-full"></div>
    <div className="element-2 absolute h-full w-full"></div>
</div>
      <Navbar />
      <Home />
      <About/>
      <Projects />
      <Contact/>
      <Footer />
    </main>
  )
}
