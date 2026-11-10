import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Activities from './components/Activities.jsx'
import Certificates from './components/Certificates.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Activities />
        <Certificates />
        <Contact />
      </main>
    </>
  )
}
