import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import katex from 'katex';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import 'katex/dist/katex.min.css';
import client from '../../tina/__generated__/client';

const ResearchStreamView = () => {
  const { filename } = useParams();
  const navigate = useNavigate();
  const [stream, setStream] = useState(null);
  const [relatedLogs, setRelatedLogs] = useState([]);
  const [allStreams, setAllStreams] = useState([]);
  const [allLogs, setAllLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper functions for styling
  const getStatusColor = (status) => {
    const colors = {
      'active': 'text-emerald-400 border-emerald-400/30 bg-emerald-400/5',
      'paused': 'text-amber-400 border-amber-400/30 bg-amber-400/5',
      'published': 'text-cyan-400 border-cyan-400/30 bg-cyan-400/5',
      'completed': 'text-purple-400 border-purple-400/30 bg-purple-400/5',
    };
    return colors[status?.toLowerCase()] || 'text-slate-400 border-slate-400/30 bg-slate-400/5';
  };

  const getLogTypeColor = (type) => {
    const colors = {
      'experiment': 'text-cyan-400',
      'reading': 'text-purple-400',
      'feasibility': 'text-emerald-400',
      'refutation': 'text-rose-400',
      'insight': 'text-amber-400',
      'meeting': 'text-blue-400',
    };
    return colors[type] || 'text-slate-400';
  };

  // Custom components for TinaMarkdown
  const components = {
    Equation: ({ equation, display }) => {
      try {
        const html = katex.renderToString(equation || '', {
          displayMode: display,
          throwOnError: false
        });
        return <span dangerouslySetInnerHTML={{ __html: html }} />;
      } catch (e) {
        return <span>{equation}</span>;
      }
    },
    CodeBlock: ({ code, language }) => (
      <div className="my-6 rounded-lg overflow-hidden border border-white/10 bg-[#0a0a0a]">
        <div className="px-4 py-2 bg-white/5 border-b border-white/5 text-xs font-mono text-slate-500 flex justify-between">
          <span>{language || 'text'}</span>
          <span>CODE_BLOCK</span>
        </div>
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={language || 'text'}
          PreTag="div"
          customStyle={{ margin: 0, background: 'transparent' }}
        >
          {code || ''}
        </SyntaxHighlighter>
      </div>
    ),
    img: ({ url, caption, alt }) => (
      <figure className="my-8">
        <div className="relative rounded-lg overflow-hidden border border-white/10 group">
          <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-overlay"></div>
          <img 
            src={url} 
            alt={alt || caption}
            className="w-full"
            loading="lazy"
          />
        </div>
        {(caption || alt) && (
          <figcaption className="text-center text-slate-500 text-xs mt-3 font-mono">
            // {caption || alt}
          </figcaption>
        )}
      </figure>
    ),
    // Override default elements to match styling
    p: (props) => <p className="text-slate-300 leading-relaxed mb-6 font-light" {...props} />,
    h1: (props) => <h1 className="text-4xl font-bold mb-8 text-white tracking-tight" {...props} />,
    h2: (props) => <h2 className="text-2xl font-bold mt-12 mb-6 text-white flex items-center gap-3 before:content-['#'] before:text-cyan-500/50 before:font-mono" {...props} />,
    h3: (props) => <h3 className="text-xl font-bold mt-8 mb-4 text-white" {...props} />,
    h4: (props) => <h4 className="text-lg font-bold mt-6 mb-3 text-white" {...props} />,
    ul: (props) => <ul className="list-none space-y-2 mb-6 ml-4" {...props} />,
    ol: (props) => <ol className="list-decimal list-inside text-slate-300 mb-6 ml-4 marker:text-cyan-500/50 marker:font-mono" {...props} />,
    li: (props) => <li className="relative pl-6 before:content-['>'] before:absolute before:left-0 before:text-cyan-500/50 before:font-mono text-slate-300" {...props} />,
    a: (props) => <a className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-500/30 underline-offset-4 transition-colors" {...props} />,
    blockquote: (props) => <blockquote className="border-l-2 border-cyan-500/50 bg-cyan-500/5 py-4 px-6 my-8 text-slate-300 italic" {...props} />,
    table: (props) => (
      <div className="overflow-x-auto my-8 border border-white/10 rounded-lg">
        <table className="min-w-full bg-[#0a0a0a]" {...props} />
      </div>
    ),
    th: (props) => <th className="text-left p-4 text-white font-mono text-sm border-b border-white/10 bg-white/5" {...props} />,
    td: (props) => <td className="p-4 border-t border-white/5 text-slate-400 text-sm" {...props} />,
  };

  useEffect(() => {
    const fetchStream = async () => {
      try {
        setLoading(true);
        
        // Fetch the research stream
        const streamResponse = await client.queries.research_streams({
          relativePath: `${filename}.mdx`
        });
        setStream(streamResponse.data.research_streams);
        
        // Fetch all data for sidebar
        const streamsRes = await client.queries.research_streamsConnection();
        setAllStreams(streamsRes.data.research_streamsConnection.edges.map(e => e.node));
        
        const logsRes = await client.queries.lab_logsConnection({ sort: 'date' });
        const allLogsData = logsRes.data.lab_logsConnection.edges.map(e => e.node);
        setAllLogs(allLogsData);
        
        // Filter logs that belong to this stream
        const streamLogs = allLogsData.filter(log => {
          if (!log.parent_stream) return false;
          
          const parentPath = typeof log.parent_stream === 'object' 
            ? log.parent_stream._sys.filename 
            : log.parent_stream.replace('src/content/research-streams/', '').replace('.mdx', '');
            
          return parentPath === filename;
        });
        
        setRelatedLogs(streamLogs);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching research stream:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    if (filename) {
      fetchStream();
    }
  }, [filename]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center font-mono">
        <div className="text-cyan-500/70 text-center">
          <div className="mb-4 text-xs tracking-[0.2em] animate-pulse">ACCESSING_ARCHIVES...</div>
          <div className="h-1 w-32 bg-cyan-900/30 mx-auto overflow-hidden">
            <div className="h-full bg-cyan-500/50 w-1/2 animate-[shimmer_1s_infinite]"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !stream) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center font-mono">
        <div className="border border-red-500/30 bg-red-500/5 p-8 max-w-md w-full relative">
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-500"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-500"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-500"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-500"></div>
          
          <div className="text-red-500 text-xs mb-2 tracking-widest">SYSTEM_ERROR</div>
          <h2 className="text-xl text-white mb-4">STREAM_NOT_FOUND</h2>
          <p className="text-red-400/70 text-sm mb-6">{error || 'The requested research stream could not be located.'}</p>
          <button
            onClick={() => navigate('/research')}
            className="w-full py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 transition-colors text-xs tracking-widest uppercase"
          >
            Return_To_Index
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0" 
           style={{
             backgroundImage: `linear-gradient(to right, #1a1a1a 1px, transparent 1px),
                              linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)`,
             backgroundSize: '40px 40px',
             opacity: 0.5
           }}>
      </div>

      {/* Top Bar */}
      <div className="z-10 border-b border-white/10 bg-[#050505]/80 backdrop-blur-sm mt-24">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div
              onClick={() => navigate('/research')}
              className="cursor-pointer text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
              role="button"
              tabIndex={0}
            >
              <span className="group-hover:-translate-x-1 transition-transform">{'<'}</span>
              RETURN_TO_INDEX
            </div>
            <div className="h-4 w-px bg-white/10"></div>
            <div className="!text-xs !font-mono !text-cyan-500/50 tracking-widest">
              STREAM_VIEWER
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 !text-[10px] !font-mono !text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500/50 animate-pulse"></span>
              SECURE_CONNECTION
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
        {/* Sidebar Navigation */}
        <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
          <div className="sticky top-24 space-y-8">
            <div>
              <h3 className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-wider">// Current_Stream</h3>
              <div className="text-sm text-white font-medium mb-2">{stream.title}</div>
              <div className={`text-[10px] font-mono inline-block px-2 py-1 border ${getStatusColor(stream.status)}`}>
                {stream.status}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-wider">// Related_Logs</h3>
              {relatedLogs.length === 0 ? (
                <p className="text-slate-600 text-xs italic">No logs recorded.</p>
              ) : (
                <nav className="space-y-1">
                  {relatedLogs.map(log => (
                    <button
                      key={log._sys.filename}
                      onClick={() => navigate(`/research/log/${log._sys.filename}`)}
                      className="block w-full text-left px-3 py-2 text-xs text-slate-400 hover:text-cyan-400 hover:bg-white/5 rounded transition-colors truncate border-l border-transparent hover:border-cyan-500"
                    >
                      <span className={`mr-2 ${getLogTypeColor(log.log_type)}`}>●</span>
                      {log.title}
                    </button>
                  ))}
                </nav>
              )}
            </div>

            <div>
              <h3 className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-wider">// All_Streams</h3>
              <nav className="space-y-1">
                {allStreams.map(s => (
                  <button
                    key={s._sys.filename}
                    onClick={() => navigate(`/research/stream/${s._sys.filename}`)}
                    className={`block w-full text-left px-3 py-2 text-xs rounded transition-colors truncate border-l ${
                      s._sys.filename === filename 
                        ? 'text-cyan-400 bg-white/5 border-cyan-500' 
                        : 'text-slate-400 hover:text-cyan-400 hover:bg-white/5 border-transparent hover:border-cyan-500'
                    }`}
                  >
                    {s.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <article className="max-w-4xl">
            {/* Article Header */}
            <header className="mb-12 border-b border-white/10 pb-12">
              <div className="flex flex-wrap items-center gap-4 mb-6 text-xs font-mono text-slate-500">
                <span>ID: {stream._sys.filename.substring(0, 8).toUpperCase()}</span>
                <span>//</span>
                <span>{new Date(stream.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                {stream.author && (
                  <>
                    <span>//</span>
                    <span>AUTH: {stream.author.toUpperCase()}</span>
                  </>
                )}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
                {stream.title}
              </h1>

              {stream.tags && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {stream.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 text-slate-400 text-xs font-mono rounded border border-white/5">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {stream.abstract && (
                <div className="bg-[#0a0a0a] border-l-2 border-white/20 p-6 rounded-r-lg">
                  <h3 className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">Abstract</h3>
                  <p className="text-lg text-slate-300 leading-relaxed italic">
                    {stream.abstract}
                  </p>
                </div>
              )}
            </header>

            {/* Article Body */}
            <div className="prose prose-invert max-w-none">
              <TinaMarkdown content={stream.body} components={components} />
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};

export default ResearchStreamView;
