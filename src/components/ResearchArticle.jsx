import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import 'katex/dist/katex.min.css';

const ResearchArticle = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [markdown, setMarkdown] = useState('');
  const [metadata, setMetadata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load markdown file
    const loadArticle = async () => {
      try {
        setLoading(true);
        
        // Dynamically import the markdown file
        const response = await fetch(`/src/content/research/${articleId}.md`);
        if (!response.ok) {
          throw new Error('Article not found');
        }
        
        const text = await response.text();
        
        // Parse frontmatter (metadata)
        const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
        const match = text.match(frontmatterRegex);
        
        if (match) {
          const frontmatter = match[1];
          const content = match[2];
          
          // Parse frontmatter YAML-like format
          const meta = {};
          frontmatter.split('\n').forEach(line => {
            const [key, ...valueParts] = line.split(':');
            if (key && valueParts.length) {
              const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
              
              // Handle arrays (tags)
              if (value.startsWith('[') && value.endsWith(']')) {
                meta[key.trim()] = value.slice(1, -1).split(',').map(v => v.trim().replace(/^["']|["']$/g, ''));
              } else {
                meta[key.trim()] = value;
              }
            }
          });
          
          setMetadata(meta);
          setMarkdown(content);
        } else {
          setMarkdown(text);
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Error loading article:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    if (articleId) {
      loadArticle();
    }
  }, [articleId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading article...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center max-w-md">
          <div className="text-6xl mb-4">📄</div>
          <h2 className="text-2xl font-bold mb-2">Article Not Found</h2>
          <p className="text-white/70 mb-6">{error}</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Article Header */}
      {metadata && (
        <div className="bg-dark border-b border-white/10 py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <button
              onClick={() => navigate('/')}
              className="text-white/70 hover:text-primary transition-colors mb-6 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Research
            </button>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300 bg-clip-text text-transparent">
              {metadata.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-white/70 mb-4">
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {metadata.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {metadata.date}
              </span>
              {metadata.status && (
                <>
                  <span>•</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {metadata.status}
                  </span>
                </>
              )}
            </div>
            
            {metadata.abstract && (
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                {metadata.abstract}
              </p>
            )}
            
            {metadata.tags && Array.isArray(metadata.tags) && (
              <div className="flex flex-wrap gap-2">
                {metadata.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-white/5 text-white/70 text-sm rounded-full border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose prose-invert prose-lg max-w-none
          prose-headings:font-bold prose-headings:tracking-tight
          prose-h1:text-4xl prose-h1:mb-6 prose-h1:bg-gradient-to-r prose-h1:from-blue-500 prose-h1:via-cyan-400 prose-h1:to-green-300 prose-h1:bg-clip-text prose-h1:text-transparent
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-white
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-white
          prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-2 prose-h4:text-white
          prose-p:text-white/80 prose-p:leading-relaxed prose-p:mb-4
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-strong:text-white prose-strong:font-semibold
          prose-code:text-primary prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-dark prose-pre:border prose-pre:border-white/10 prose-pre:rounded-lg
          prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-6
          prose-ul:text-white/80 prose-ol:text-white/80
          prose-li:my-1
          prose-table:border-collapse prose-table:w-full
          prose-thead:border-b-2 prose-thead:border-primary
          prose-th:text-left prose-th:p-3 prose-th:text-white prose-th:font-semibold
          prose-td:p-3 prose-td:border-t prose-td:border-white/10 prose-td:text-white/80
          prose-img:rounded-lg prose-img:border prose-img:border-white/10 prose-img:my-8
          prose-hr:border-white/10 prose-hr:my-8
        ">
          <ReactMarkdown
            remarkPlugins={[remarkMath, remarkGfm]}
            rehypePlugins={[rehypeKatex, rehypeRaw]}
            components={{
              // Custom paragraph rendering - don't wrap images
              p({node, children}) {
                // Check if the paragraph only contains an image
                const hasOnlyImage = node.children?.length === 1 && node.children[0].tagName === 'img';
                
                if (hasOnlyImage) {
                  return <>{children}</>;
                }
                
                return <p>{children}</p>;
              },
              // Custom code block rendering with syntax highlighting
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-lg !bg-dark border border-white/10"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
              // Custom table rendering
              table({children}) {
                return (
                  <div className="overflow-x-auto my-8">
                    <table className="min-w-full bg-dark border border-white/10 rounded-lg">
                      {children}
                    </table>
                  </div>
                );
              },
              // Custom image rendering
              img({src, alt}) {
                return (
                  <figure className="my-8">
                    <img 
                      src={src} 
                      alt={alt}
                      className="w-full rounded-lg border border-white/10"
                      loading="lazy"
                    />
                    {alt && (
                      <figcaption className="text-center text-white/60 text-sm mt-2 italic">
                        {alt}
                      </figcaption>
                    )}
                  </figure>
                );
              }
            }}
          >
            {markdown}
          </ReactMarkdown>
        </article>

        {/* Back to Research Button */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-gradient-primary text-white font-medium rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Research
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResearchArticle;
