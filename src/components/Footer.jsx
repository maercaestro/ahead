import { useNavigate } from 'react-router-dom';
import logoPersonal from '../assets/logo-personal.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer className="bg-black/40 py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img src={logoPersonal} alt="AHEAD Logo" className="h-8 w-auto" />
              <h2 className="text-white text-lg font-bold">AHEAD</h2>
            </div>
            <p className="text-white/60 text-center md:text-left text-sm">
              Abu Huzaifah's Engineering & AI Dashboard
            </p>
            <p className="text-white/40 text-sm">
              © {currentYear} Abu Huzaifah. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div>
              <h3 className="text-white font-medium mb-3">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/60 hover:text-secondary transition-colors">Home</a></li>
                <li><a href="#about" className="text-white/60 hover:text-secondary transition-colors">About</a></li>
                <li><a href="#projects" className="text-white/60 hover:text-secondary transition-colors">Projects</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/research'); }} className="text-white/60 hover:text-secondary transition-colors">Research</a></li>
                <li><a href="#resume" className="text-white/60 hover:text-secondary transition-colors">Resume</a></li>
                <li><a href="#contact" className="text-white/60 hover:text-secondary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-3">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.linkedin.com/in/abu-huzaifah-bidin-71391068/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-secondary transition-colors">LinkedIn</a></li>
                <li><a href="https://github.com/maercaestro" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-secondary transition-colors">GitHub</a></li>
                <li><a href="https://www.facebook.com/abu.bidin" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-secondary transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;
