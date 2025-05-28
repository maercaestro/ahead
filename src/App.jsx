import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ArticlesSection from './components/ArticlesSection'
import ResumeSection from './components/ResumeSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ArticlesSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
