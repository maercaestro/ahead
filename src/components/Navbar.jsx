import logoPersonal from '../assets/logo-personal.png';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 !bg-dark/95 !backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img 
            src={logoPersonal} 
            alt="AHEAD Logo" 
            className="h-10 w-auto cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>
        
        <div className="hidden md:flex items-center">
          <button 
            onClick={() => scrollToSection('about')} 
            className="relative px-4 py-2 !bg-transparent text-white font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-400 hover:to-green-300 hover:bg-clip-text hover:text-transparent group"
          >
            <span>About</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <div className="h-5 w-px bg-white/20"></div>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="relative px-4 py-2 !bg-transparent !text-white font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-400 hover:to-green-300 hover:bg-clip-text hover:text-transparent group"
          >
            <span>Projects</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <div className="h-5 w-px bg-white/20"></div>
          <button 
            onClick={() => scrollToSection('articles')} 
            className="relative px-4 py-2 !bg-transparent text-white font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-400 hover:to-green-300 hover:bg-clip-text hover:text-transparent group"
          >
            <span>Writings</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <div className="h-5 w-px bg-white/20"></div>
          <button 
            onClick={() => scrollToSection('resume')} 
            className="relative px-4 py-2 !bg-transparent text-white font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-400 hover:to-green-300 hover:bg-clip-text hover:text-transparent group"
          >
            <span>Resume</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <div className="h-5 w-px bg-white/20"></div>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="relative px-4 py-2 !bg-transparent text-white font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-400 hover:to-green-300 hover:bg-clip-text hover:text-transparent group"
          >
            <span>Contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300 transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
        
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
