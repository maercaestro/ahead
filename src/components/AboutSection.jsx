import profilePic from '/abu.jpg';

const AboutSection = () => {

  const cardData = [
    {
      icon: '📅',
      title: '13',
      subtitle: 'Years Working Experience',
      color: 'text-primary',
      borderColor: 'border-primary/30'
    },
    {
      icon: '💰',
      title: '>10M',
      subtitle: 'USD Saved in Cost Optimization',
      color: 'text-secondary',
      borderColor: 'border-secondary/30'
    },
    {
      icon: '🏆',
      title: '4',
      subtitle: 'Wins in Hackathons & Conventions',
      color: 'text-primary',
      borderColor: 'border-primary/30'
    },
    {
      icon: '📚',
      title: '3',
      subtitle: 'Publications (Papers & Books)',
      color: 'text-secondary',
      borderColor: 'border-secondary/30'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight flex items-center">
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300 bg-clip-text text-transparent ml-2">
          About Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"> {/* Changed items-center to items-start */}
          <div>
            <p className="text-white/80 mb-4">
              I&apos;m Abu Huzaifah, a Senior Process Engineer at PETRONAS with 13+ years of experience in oil & gas operations. 
              What sets me apart is my unique blend of traditional engineering excellence and cutting-edge AI innovation.
            </p>
            
            <p className="text-white/80 mb-4">
              From optimizing multi-million dollar refinery operations to developing revolutionary AI systems like MEGAT (which saved RM 1M+ and won innovation awards), 
              I bridge the gap between industrial engineering and artificial intelligence. My expertise spans from Liquid Neural Networks research to enterprise-scale automation solutions.
            </p>
            
            <p className="text-white/80 mb-4">
              As an active AI researcher, author, and educator, I&apos;ve published 13+ articles covering advanced topics like Liquid Neural Networks, AutoEncoders, and GANs. 
              My mission is to democratize AI knowledge while solving real-world industrial challenges that matter.
            </p>
            
            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {cardData.map((card, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-xl bg-dark ${card.borderColor} border text-center transition-transform duration-300 hover:scale-105`}
                >
                  <div className={`${card.color} text-4xl mb-3`}>
                    <span>{card.icon}</span>
                  </div>
                  <h3 className={`text-4xl md:text-5xl font-bold ${card.color} mb-2`}>
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/80">
                    {card.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Restored Profile Picture Background Gradient and Image */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-30 blur-2xl mix-blend-lighten"></div>
              <div className="relative h-full w-full rounded-full bg-dark border-2 border-primary/50 overflow-hidden">
                <img src={profilePic} alt="Abu Huzaifah" className="h-full w-full object-cover" />
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
