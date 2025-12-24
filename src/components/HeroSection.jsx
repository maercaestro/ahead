import logoPersonal from '../assets/logo-personal.png';
import profileImage from '../assets/gambartv.jpg';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={profileImage} 
          alt="Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Enhanced gradient overlays for better readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      
      {/* Content with Glassmorphism */}
      <div className="container mx-auto px-4 py-20 z-10 relative">
        <div className="max-w-6xl backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Logo - Fade in animation */}
          <div className="mb-8 animate-[fadeInUp_0.6s_ease-out]">
            <img 
              src={logoPersonal} 
              alt="AHEAD Logo" 
              className="w-32 md:w-40"
            />
          </div>
          
          {/* Main heading - Fade in animation */}
          <h1 className="font-bold mb-4 tracking-tight animate-[fadeInUp_0.8s_ease-out]">
            <span className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300 bg-clip-text text-transparent drop-shadow-lg">AHEAD</span>
          </h1>
          
          {/* Technical sub-header - Fade in animation */}
          <h2 className="text-lg md:text-2xl text-cyan-400/90 font-mono font-light mb-8 tracking-wide animate-[fadeInUp_1s_ease-out]">
            &gt; Abu Huzaifah's Engineering & AI Dashboard
          </h2>
          
          {/* Dual Track badges - Fade in animation */}
          <div className="flex flex-wrap gap-3 mb-8 animate-[fadeInUp_1.2s_ease-out]">
            <span className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/40 rounded-lg text-blue-300 text-sm font-semibold shadow-lg">
              🏭 Senior Process Engineer (13y+)
            </span>
            <span className="px-4 py-2 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/40 rounded-lg text-cyan-300 text-sm font-semibold shadow-lg">
              🧬 PINN & LNN Researcher
            </span>
            <span className="px-4 py-2 bg-green-300/20 backdrop-blur-sm border border-green-300/40 rounded-lg text-green-300 text-sm font-semibold shadow-lg">
              🚀 Startup Hackathon Winner
            </span>
          </div>
          
          {/* Enhanced paragraph with metrics highlighted - Fade in animation */}
          <p className="text-white/90 mb-12 max-w-3xl text-base md:text-lg leading-relaxed animate-[fadeInUp_1.4s_ease-out]">
            I am a <span className="text-white font-bold">Senior Process Engineer</span> at PETRONAS with over <span className="text-cyan-400 font-bold">13 years of experience</span> in refinery operations, process design, and supply chain optimization, now pivoting to the bleeding edge of <span className="text-blue-400 font-semibold">Industrial AI</span>. My work exists at the intersection of heavy industry and advanced algorithms. Combining deep domain expertise with <span className="text-cyan-400 font-semibold">Physics-Informed Neural Networks (PINNs)</span> and <span className="text-cyan-400 font-semibold">Liquid Neural Networks (LNNs)</span>.
            <br/><br/>
            Whether I'm saving <span className="text-green-400 font-bold">RM 10M+</span> in operational costs, winning startup hackathons, or writing science fiction, my goal is the same: to stay <span className="text-cyan-400 font-bold">AHEAD</span> of the curve and engineer solutions that solve complex, real-world problems.
          </p>
          
          {/* CTA Buttons with distinct styles - Fade in animation */}
          <div className="flex flex-wrap gap-4 animate-[fadeInUp_1.6s_ease-out]">
            <button 
              onClick={scrollToProjects} 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300 text-black font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-105 transform"
            >
              Explore Projects
            </button>
            <button
              onClick={() => document.getElementById('articles').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/60 backdrop-blur-sm"
            >
              Read Writings
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 z-[5] overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] mix-blend-lighten" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-[120px] mix-blend-lighten" />
        <div className="absolute top-[10%] right-[30%] w-[250px] h-[250px] bg-green-300/10 rounded-full blur-[80px] mix-blend-lighten" />
        
        {/* Additional tech-inspired decorative elements */}
        <div className="absolute bottom-[15%] left-[15%] w-[200px] h-[2px] bg-gradient-to-r from-blue-500 to-transparent rotate-[30deg] opacity-30"></div>
        <div className="absolute top-[25%] right-[25%] w-[150px] h-[2px] bg-gradient-to-r from-cyan-400 to-transparent rotate-[-20deg] opacity-30"></div>
        <div className="absolute top-[60%] right-[40%] w-[100px] h-[2px] bg-gradient-to-r from-green-300 to-transparent rotate-[45deg] opacity-30"></div>
      </div>
    </section>
  );
};

export default HeroSection;
