import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ArticlesSection from './components/ArticlesSection'
import ResumeSection from './components/ResumeSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import TinaAdmin from './components/TinaAdmin'
import ResearchBlog from './pages/ResearchBlog'
import ResearchStreamView from './pages/ResearchStreamView'
import LabLogView from './pages/LabLogView'

function App() {
  // Main portfolio page (without research section)
  const HomePage = () => (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ArticlesSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </>
  );

  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research" element={<ResearchBlog />} />
          <Route path="/research/stream/:filename" element={<ResearchStreamView />} />
          <Route path="/research/log/:filename" element={<LabLogView />} />
          <Route path="/admin" element={<TinaAdmin />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
