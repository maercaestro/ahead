const ArticlesSection = () => {
  // Your actual articles, publications, and books
  const articles = [
    {
      id: 1,
      title: "AI untuk Pemula",
      excerpt: "📚 Comprehensive beginner's guide to Artificial Intelligence in Bahasa Malaysia. Making AI concepts accessible to everyone with practical examples and real-world applications.",
      image: "/ai.png",
      date: "2024",
      readTime: "Book",
      platform: "Book",
      link: "https://shopee.com.my/The-Patriots-AI-Untuk-Pemula-i.238336777.27275796556", // Update with actual book link
      categories: ["AI", "Education", "Bahasa", "Book"]
    },
    {
      id: 2,
      title: "Azrahel si Penjejak Kubur",
      excerpt: "📖 A captivating science fiction novel with cyberpunk themes. Discuss the impact of advance technology to human",
      image: "/azrahel.png",
      date: "2021",
      readTime: "Novel",
      platform: "Book",
      link: "https://shopee.com.my/Azrahel-Si-Penjejak-Kubur-Patriots-Publishing-i.77313238.11073677040", // Update with actual book link
      categories: ["Science-Fiction", "Novel", "Cyberpunk", "Book"]
    },
    {
      id: 3,
      title: "IEEE Publication: Lube Based Oil Unit Anomaly Limit Prediction using Decision Tree Classification Model",
      excerpt: "🎓 Peer-reviewed research publication in IEEE on hybridizing Decision Tree Classifier with Fault Tree Analysis",
      image: "/ieee.png",
      date: "2024",
      readTime: "Research Paper",
      platform: "IEEE",
      link: "https://ieeexplore.ieee.org/document/10649879", // Update with actual IEEE paper link
      categories: ["IEEE", "Research", "Decision Tree", "Fault Tree"]
    },
    {
      id: 4,
      title: "No Propagation: Training Neural Network without Backpropagation Part 1: Just the Mathematics",
      excerpt: "Exploring innovative training methods for neural networks that don't rely on traditional backpropagation algorithms.",
      image: "/noprop.png",
      date: "May 17, 2024",
      readTime: "12 min read",
      platform: "Medium",
      link: "https://medium.com/@maercaestro/no-propagation-training-neural-network-without-backpropagation-646a8a67111e",
      categories: ["Neural Networks", "AI", "Mathematics"]
    },
    {
      id: 5,
      title: "On the 'Micro'Biology of LLms : How LLM Finds Answer?",
      excerpt: "A deep dive into the internal mechanisms of Large Language Models and how they process and generate responses.",
      image: "/llm-answer.png",
      date: "April 18, 2024",
      readTime: "10 min read",
      platform: "Medium",
      link: "https://medium.com/@maercaestro/on-the-microbiology-of-llms-how-llm-finds-answer-e85079fcc84b",
      categories: ["LLM", "AI", "Deep Learning"]
    },
    {
      id: 6,
      title: "Understanding AutoEncoder(Part 2): Navigating the Tesseract",
      excerpt: "Advanced exploration of AutoEncoder architectures and their applications in high-dimensional data processing.",
      image: "/autoencoder2.png",
      date: "April 6, 2024",
      readTime: "8 min read",
      platform: "Medium",
      link: "https://medium.com/@maercaestro/understanding-autoencoder-part-2-navigating-the-tesseract-128b0ee39311",
      categories: ["AutoEncoder", "AI", "Latent Space"]
    },
    {
      id: 7,
      title: "Understanding AutoEncoder Part 1: That Dimensionality Reduction",
      excerpt: "Introduction to AutoEncoder neural networks and their role in dimensionality reduction and feature learning.",
      image: "/autoencoder.png",
      date: "March 27, 2024",
      readTime: "7 min read",
      platform: "Medium",
      link: "https://medium.com/@maercaestro/understanding-autoencoder-part-1-that-dimensionality-reduction-bcb8170431f8",
      categories: ["AutoEncoder", "AI", "Dimensionality Reduction", "Feature Learning"]
    },
    {
      id: 8,
      title: "Siri Belajar AI : Mari Melatih GAN (Generative Adversarial Network) Bahagian 2",
      excerpt: "Continuation of the GAN training series, focusing on advanced techniques and practical implementations.",
      image: "/gan2.png",
      date: "March 15, 2024",
      readTime: "10 min read",
      platform: "Medium",
      link: "https://medium.com/@maercaestro/siri-belajar-ai-mari-melatih-gan-generative-adversarial-network-bahagian-2-4fe06c83ce83",
      categories: ["GAN", "AI", "Generative Models", "Bahasa"]
    },
    {
      id: 9,
      title: "SoundStream Neural Codec: Understanding AI on Audio",
      excerpt: "Research analysis on AI applications in audio processing and the SoundStream neural codec technology.",
      image: "/soundstream.png",
      date: "March 9, 2024",
      readTime: "9 min read",
      platform: "Medium",
      link: "https://medium.com/@maercaestro/soundstream-neural-codec-understanding-ai-on-audio-8f1a123b097c",
      categories: ["Audio AI", "Neural Codec", "Research"]
    },
    {
      id: 10,
      title: "Liquid Neural Network: Putting the Network to Test in the Chaotic World",
      excerpt: "Testing and analysis of Liquid Neural Networks in complex, chaotic environments and real-world applications.",
      image: "/lnn2.png",
      date: "March 1, 2024",
      readTime: "11 min read",
      platform: "Medium",
      link: "https://medium.com/@maercaestro/liquid-neural-network-putting-the-network-to-test-in-the-chaotic-world-54d85ae2007f",
      categories: ["Liquid Neural Networks", "AI", "Chaos Theory"]
    },
    {
      id: 11,
      title: "Siri Belajar AI: Mari Kenali GAN (Generative Adversarial Network)-Bahagian 1",
      excerpt: "Introduction to Generative Adversarial Networks in Bahasa Malaysia, making AI concepts accessible to local readers.",
      image: "/gan1.png",
      date: "February 22, 2024",
      readTime: "8 min read",
      platform: "Medium",
      link: "https://medium.com/@maercaestro/siri-belajar-ai-mari-kenali-gan-generative-adversarial-network-bahagian-1-a613e81be832",
      categories: ["GAN", "AI", "Education", "Bahasa"]
    },
    {
      id: 12,
      title: "Liquid Neural Networks : Applying Human Brain Dynamics into Classical Neural Networks",
      excerpt: "Exploring how Liquid Neural Networks mimic human brain dynamics and their implementation in modern AI systems.",
      image: "/lnn1.png",
      date: "February 10, 2024",
      readTime: "13 min read",
      platform: "Medium",
      link: "https://medium.com/@maercaestro/liquid-neural-networks-applying-human-brain-dynamics-into-classical-neural-networks-bf873283c403",
      categories: ["Liquid Neural Networks", "Neuroscience", "AI"]
    },
    {
      id: 13,
      title: "STDE (Stochastic Taylor Derivative Estimator) -The winning NeurIPS 2024 Paper from Singapore",
      excerpt: "Analysis of the breakthrough NeurIPS 2024 winning paper on Stochastic Taylor Derivative Estimator and its implications.",
      image: "stde.png",
      date: "January 25, 2024",
      readTime: "15 min read",
      platform: "Medium",
      link: "https://medium.com/@maercaestro/stde-stochastic-taylor-derivative-estimator-the-winning-neurips-2024-paper-from-singapore-79a7ccc3dbfc",
      categories: ["STDE", "NeurIPS", "Research", "Singapore"]
    }
  ];

  return (
    <section id="articles" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight flex items-center">
           <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300 bg-clip-text text-transparent ml-2">Articles & Publications</span>
        </h2>
        
        <p className="text-white/80 mb-12 max-w-3xl">
          A collection of my technical writings, research publications, and books spanning AI, machine learning, and software engineering. Sharing knowledge through various platforms and formats.
        </p>
        
        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(article => (
            <a 
              key={article.id} 
              href={article.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-900 rounded-xl overflow-hidden group transition-all hover:bg-gray-800 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-4 z-20">
                  <span className="inline-block bg-blue-500 text-xs font-medium text-white px-2 py-1 rounded">
                    {article.platform}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-cyan-300 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {article.categories.slice(0, 2).map((category, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                    >
                      {category}
                    </span>
                  ))}
                  {article.categories.length > 2 && (
                    <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                      +{article.categories.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {/* View All Articles Button */}
        <div className="mt-12 text-center">
          <a 
            href="https://medium.com/@maercaestro" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-md bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300 !text-white font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20"
          >
            View All Articles
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -z-10">
        <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="opacity-5">
          <path fill="#0066FF" d="M40,-51.2C50.7,-44.9,57.3,-31.6,60.4,-17.8C63.5,-4,63,10.3,56.8,21.5C50.5,32.7,38.5,40.8,25.8,47.8C13.1,54.8,-0.3,60.6,-13.3,58.5C-26.3,56.4,-38.9,46.3,-46.5,33.8C-54.1,21.2,-56.8,6.2,-55.5,-8.9C-54.1,-24.1,-48.6,-39.5,-38.1,-45.8C-27.6,-52,-13.8,-49.2,0.5,-49.8C14.7,-50.4,29.3,-57.5,40,-51.2Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
};

export default ArticlesSection;
