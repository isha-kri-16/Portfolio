import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import Project from "./Components/Projects/Project"
import Resume from "./Components/Resume/Resume"
import Skill from "./Components/Skills/Skill"
import Work from "./Components/Work/Work"
import Hero from "./Hero/Hero"



function App() {

  return (
    <>
      <Navbar /> 
      <Hero />
      <About />
      <Skill />
      {/* <Project /> */}
      <Work />
      {/* <Resume /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
