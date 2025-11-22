import { useNavigate } from 'react-router-dom';

const ResearchSection = () => {
  const navigate = useNavigate();

  // Research articles metadata
  const researchArticles = [
    {
      id: 'liquid-neural-networks',
      title: 'Liquid Neural Networks for Furnace Control: A Novel Approach',
      date: '2025-11-15',
      author: 'Abu Huzaifah Bidin',
      tags: ['Liquid Neural Networks', 'Furnace Control', 'Deep Learning', 'Process Control'],
      abstract: 'This research explores the application of Liquid Neural Networks (LNNs) in controlling excess oxygen during furnace operations. We demonstrate that LNNs outperform traditional control methods by adapting to dynamic operational conditions in real-time.',
      status: 'In Progress',
      statusColor: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/30',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
      readTime: '15 min read'
    },
    {
      id: 'steam-optimization',
      title: 'Steam System Optimization Using Machine Learning',
      date: '2025-10-22',
      author: 'Abu Huzaifah Bidin',
      tags: ['Machine Learning', 'Steam Optimization', 'Energy Efficiency', 'Random Forest'],
      abstract: 'A comprehensive study on optimizing steam consumption in refinery operations using ensemble machine learning methods. Achieved RM 2.3M annual savings through predictive models.',
      status: 'Published',
      statusColor: 'bg-green-500/10 text-green-300 border-green-500/30',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      readTime: '20 min read'
    },
    {
      id: 'gan-anomaly-detection',
      title: 'Experiment Report: GAN-based Anomaly Detection in Process Data',
      date: '2025-11-01',
      author: 'Abu Huzaifah Bidin',
      tags: ['GANs', 'Anomaly Detection', 'Deep Learning', 'Process Monitoring'],
      abstract: 'Experimental evaluation of Generative Adversarial Networks for detecting anomalies in refinery process data. Comparing reconstruction-based and discrimination-based approaches.',
      status: 'Experiment Report',
      statusColor: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      readTime: '25 min read'
    }
  ];

  const handleReadArticle = (articleId) => {
    navigate(`/research/${articleId}`);
  };

  return (
    <section id="research" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300 bg-clip-text text-transparent">
              Research & Experiments
            </span>
          </h2>
          <p className="text-white/70 text-lg max-w-3xl">
            In-depth research articles, experiment reports, and technical documentation on AI applications in industrial processes.
            All articles support LaTeX equations, code blocks, tables, and visualizations.
          </p>
        </div>

        {/* Research Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchArticles.map((article) => (
            <div 
              key={article.id}
              className="bg-dark rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
            >
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${article.statusColor}`}>
                    {article.status}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-white/50 mb-3">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                {/* Abstract */}
                <p className="text-white/70 text-sm mb-4 line-clamp-3">
                  {article.abstract}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {article.tags.length > 3 && (
                    <span className="px-2 py-1 bg-white/5 text-white/50 text-xs rounded">
                      +{article.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Read Button */}
                <button
                  onClick={() => handleReadArticle(article.id)}
                  className="w-full px-4 py-2 bg-gradient-primary text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <span>Read Full Article</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-xl">
          <div className="flex items-start gap-4">
            <div className="text-3xl">📚</div>
            <div>
              <h4 className="text-white font-semibold mb-2">Research Notes</h4>
              <p className="text-white/70 text-sm">
                All research articles are written in Markdown with full LaTeX math support. 
                You can include equations like <code className="px-2 py-1 bg-white/10 rounded text-primary">$E = mc^2$</code>, 
                code blocks, tables, images, and more. Articles are stored as <code className="px-2 py-1 bg-white/10 rounded text-primary">.md</code> files 
                in the <code className="px-2 py-1 bg-white/10 rounded text-primary">src/content/research/</code> directory.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-20">
        <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0066FF" d="M40,-51.2C50.7,-44.9,57.3,-31.6,60.4,-17.8C63.5,-4,63,10.3,56.8,21.5C50.5,32.7,38.5,40.8,25.8,47.8C13.1,54.8,-0.3,60.6,-13.3,58.5C-26.3,56.4,-38.9,46.3,-46.5,33.8C-54.1,21.2,-56.8,6.2,-55.5,-8.9C-54.1,-24.1,-48.6,-39.5,-38.1,-45.8C-27.6,-52,-13.8,-49.2,0.5,-49.8C14.7,-50.4,29.3,-57.5,40,-51.2Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
};

export default ResearchSection;
