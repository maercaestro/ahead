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
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
        
        {/* Additional gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 z-10 relative">
        <div className="max-w-3xl">
          <div className="mb-8">
            <img 
              src={logoPersonal} 
              alt="AHEAD Logo" 
              className="w-32 md:w-40"
            />
          </div>
          
          <h1 className="font-bold mb-4 tracking-tight">
            <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300 bg-clip-text text-transparent">AHEAD</span>
          </h1>
          
          <h2 className="text-xl md:text-3xl text-white/90 font-light mb-4">
            Abu Huzaifah's Engineering & AI Dashboard
          </h2>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
              🏭 Senior Process Engineer @ PETRONAS
            </span>
            <span className="px-4 py-2 bg-cyan-400/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium">
              🤖 AI Researcher & Author
            </span>
            <span className="px-4 py-2 bg-green-300/20 border border-green-300/30 rounded-full text-green-300 text-sm font-medium">
              🏆 Innovation Award Winner
            </span>
          </div>
          
          <p className="text-white/80 mb-12 max-w-2xl text-lg leading-relaxed">
            Stay <span className="text-cyan-400 font-semibold">AHEAD</span> with Abu Huzaifah. 
            <span className="text-white/90 font-medium"> 13+ years of engineering excellence</span> at PETRONAS, pioneering 
            <span className="text-blue-400 font-medium"> AI-driven solutions</span> that saved 
            <span className="text-green-400 font-medium"> RM 10M+ </span> in operational costs. 
            From <span className="text-cyan-400">Liquid Neural Networks</span> to enterprise automation, I am
            bridging the gap between traditional engineering and cutting-edge AI.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={scrollToProjects} 
              className="px-8 py-4 !bg-gray-800/80 border !border-white/20 !text-white font-medium rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-400 hover:to-green-300 hover:border-transparent hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Explore my projects
            </button>
            <button
              onClick={() => document.getElementById('articles').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 !bg-gray-800/80 border !border-white/20 !text-white font-medium rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-400 hover:to-green-300 hover:border-transparent hover:shadow-lg hover:shadow-blue-500/25"
            >
              Read my writings
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
