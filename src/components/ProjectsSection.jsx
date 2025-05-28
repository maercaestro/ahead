const ProjectCard = ({ title, description, tags, image, link }) => (
  <div className="bg-dark rounded-xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:scale-105 transform">
    <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
      {image ? (
        <img src={image} alt={title} className="w-full h-full object-cover" />
      ) : (
        <div className="text-white/30 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 mx-auto mb-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
          </svg>
          Project Image
        </div>
      )}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/70 mb-4 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-dark rounded text-xs text-secondary border border-secondary/30">
            {tag}
          </span>
        ))}
      </div>
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-sm text-primary hover:text-secondary transition-colors"
        >
          View Project
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
    </div>
  </div>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: "Furnace Commander",
      description: "🔥 Revolutionary AI-powered furnace control system leveraging cutting-edge Liquid Neural Networks (LNN) - the next generation of adaptive neural architectures. Built for real-world oil & gas operations with millisecond-precision control and self-adapting algorithms.",
      tags: ["Python", "JavaScript", "Liquid Neural Networks", "Oil & Gas"],
      image: "/furnace-commander.png",
      link: "https://furnace-commander.vercel.app"
    },
    {
      title: "Megat-Task",
      description: "🤖 Enterprise-grade SaaS platform featuring autonomous AI agents that execute complex workflows without human intervention. Built with multi-agent orchestration using OpenAI's latest models - turning natural language into actionable business automation.",
      tags: ["JavaScript", "OpenAI GPT-4", "Multi-Agent AI", "SaaS"],
      image: "/task.png",
      link: "https://github.com/maercaestro/megat-task"
    },
    {
      title: "Megat-Math",
      description: "✨ Apple Math Notes competitor built from scratch! Advanced computer vision AI that instantly solves handwritten mathematical equations in real-time. Featured on Godam Sahur",
      tags: ["React", "Computer Vision", "OpenAI Vision API"],
      image: "/megat-math.png",
      link: "https://megat-math.vercel.app"
    },
    {
      title: "Megat-Analyst",
      description: "📊 AI-powered petroleum market intelligence platform that processes millions of data points to predict crude oil trends. Features automated stakeholder reporting",
      tags: ["Python", "Streamlit", "Market Intelligence", "Automation"],
      image: "/megat-analyst.png",
      link: "https://github.com/maercaestro/megat-analyst"
    },
    {
      title: "Petrol Station Sentiment Analysis",
      description: "🏆 Award-winning hackathon solution that revolutionizes customer experience analysis for fuel stations. Uses BERT Multilingual to process 50+ languages and Google Places API to analyze 100k+ reviews",
      tags: ["Python", "BERT Multilingual", "Google Places API"],
      image: "/megat-sentiment.png",
      link: "https://github.com/maercaestro/sentiment-fuel"
    },
    {
      title: "OASIS - Oil Analytics System for Intelligent Solutions",
      description: "⚡ Enterprise-scale optimization engine for oil & gas operations using advanced linear programming and multi-criteria decision-making. Built with Model Context Protocol (MCP) for standardized AI agents. Has potential to reduce operational costs by 30%.",
      tags: ["React", "MCP", "Linear Programming", "Enterprise"],
      image: "/oasis.png",
      link: "https://github.com/maercaestro/oasis"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight flex items-center">
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300 bg-clip-text text-transparent ml-2">Projects</span>
        </h2>
        
        <p className="text-white/80 mb-12 max-w-3xl">
          A collection of my work spanning AI, software development, and engineering solutions. Each project represents unique challenges and innovative approaches.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://github.com/maercaestro" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-md bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300 !text-white font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20"
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 -z-10">
        <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
          <path fill="#00CCCC" d="M47.7,-57.2C59,-47.3,63.8,-29.7,65.8,-12.2C67.9,5.3,67.2,22.8,59.1,35.5C50.9,48.2,35.2,56.1,18.9,63.3C2.7,70.4,-14.1,76.7,-29.2,72C-44.3,67.3,-57.6,51.6,-64.4,34.3C-71.2,17,-71.5,-1.9,-65.7,-18.1C-59.9,-34.3,-47.9,-47.9,-34.2,-56.9C-20.4,-66,-10.2,-70.5,3.3,-74.5C16.8,-78.5,33.7,-82,47.7,-72.5C61.6,-63,92.6,-43.8,101.9,-18.2C111.2,7.3,98.8,38.3,80.8,61.3C62.8,84.4,39.1,99.4,15.3,99.7C-8.4,100,-32.2,85.6,-52.4,69.5C-72.7,53.4,-89.4,35.7,-98,13.4C-106.6,-8.9,-107,-35.8,-93.7,-54.4C-80.3,-73.1,-53,-83.6,-30,-82.7C-7,-81.7,12.8,-69.3,29.8,-59.3C46.8,-49.2,61,-41.5,70.4,-28.4C79.8,-15.3,84.5,3.2,81.1,20.5C77.8,37.9,66.5,54.1,51.1,64.4C35.8,74.7,16.3,78.9,-2,79.8C-20.3,80.7,-37.3,78.3,-51.9,69.8C-66.5,61.3,-78.7,46.7,-83.5,30.1C-88.3,13.5,-85.8,-5.2,-78.7,-20.6C-71.6,-36,-60,-48.2,-46.2,-57.6C-32.3,-67,-16.2,-73.7,0,-73.7C16.1,-73.8,32.3,-67.3,47.7,-57.2Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
};

export default ProjectsSection;
