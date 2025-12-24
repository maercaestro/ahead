import profilePic from '/abu.jpg';

const AboutSection = () => {

  const cardData = [
    {
      title: '13 Yrs',
      subtitle: 'Refinery & Supply Chain',
      color: 'text-blue-400',
      borderColor: 'border-blue-400/50'
    },
    {
      title: 'RM 10M+',
      subtitle: 'Optimization Savings',
      color: 'text-green-400',
      borderColor: 'border-green-400/50'
    },
    {
      title: 'PINN/LNN',
      subtitle: 'AI Architecture Research',
      color: 'text-cyan-400',
      borderColor: 'border-cyan-400/50'
    },
    {
      title: '1st Place',
      subtitle: 'Startup Hackathon Winner',
      color: 'text-green-300',
      borderColor: 'border-green-300/50'
    }
  ];

  const techStack = ['Python', 'PyTorch', 'LaTeX', 'Optimization', 'React'];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight flex items-center">
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300 bg-clip-text text-transparent ml-2">
          About Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-white/80 mb-4">
              I am a Senior Process Engineer at PETRONAS with over 13 years of experience in <span className="text-cyan-300 font-semibold">Refinery Operations</span>, <span className="text-cyan-300 font-semibold">Process Design</span>, and <span className="text-cyan-300 font-semibold">Supply Chain Optimization</span>. I am now bridging the gap between heavy industry and Artificial Intelligence.
            </p>
            
            <p className="text-white/80 mb-4">
              My work combines deep domain expertise with <span className="text-cyan-300 font-semibold">Physics-Informed Neural Networks (PINNs)</span> and <span className="text-cyan-300 font-semibold">Liquid Neural Networks (LNNs)</span>. Whether optimizing complex plant operations or developing the 'Aliran Tunai' bot, I engineer solutions that solve real-world problems.
            </p>
            
            <p className="text-white/80 mb-6">
              I am currently pivoting to a leadership role in Industrial AI while pursuing Master&apos;s research in Energy-Based Models for control systems.
            </p>
            
            {/* Tech Stack Badges */}
            <div className="mb-8">
              <h3 className="text-white/60 text-sm font-semibold mb-3 uppercase tracking-wide">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-cyan-300 text-xs font-medium hover:border-cyan-400/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cardData.map((card, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:${card.borderColor} text-center transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                >
                  <h3 className={`text-3xl md:text-4xl font-bold ${card.color} mb-2`}>
                    {card.title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/70">
                    {card.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Tech Ring Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300 opacity-20 blur-2xl animate-pulse"></div>
              <div className="relative h-full w-full rounded-full p-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300">
                <div className="h-full w-full rounded-full bg-dark overflow-hidden border-2 border-black">
                  <img src={profilePic} alt="Abu Huzaifah" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -z-10">
        <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
          <path fill="#0066FF" d="M40,-51.2C50.7,-44.9,57.3,-31.6,60.4,-17.8C63.5,-4,63,10.3,56.8,21.5C50.5,32.7,38.5,40.8,25.8,47.8C13.1,54.8,-0.3,60.6,-13.3,58.5C-26.3,56.4,-38.9,46.3,-46.5,33.8C-54.1,21.2,-56.8,6.2,-55.5,-8.9C-54.1,-24.1,-48.6,-39.5,-38.1,-45.8C-27.6,-52,-13.8,-49.2,0.5,-49.8C14.7,-50.4,29.3,-57.5,40,-51.2Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
