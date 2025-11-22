import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import client from '../../tina/__generated__/client';

const ResearchBlog = () => {
  const navigate = useNavigate();
  const [researchStreams, setResearchStreams] = useState([]);
  const [labLogs, setLabLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResearchContent = async () => {
      try {
        setLoading(true);
        
        // Fetch all research streams
        const streamsResponse = await client.queries.research_streamsConnection();
        const streams = streamsResponse?.data?.research_streamsConnection?.edges?.map(edge => edge.node) || [];
        
        // Fetch all lab logs
        const logsResponse = await client.queries.lab_logsConnection();
        const logs = logsResponse?.data?.lab_logsConnection?.edges?.map(edge => edge.node) || [];
        
        setResearchStreams(streams);
        setLabLogs(logs);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching research content:', err);
        setResearchStreams([]);
        setLabLogs([]);
        setLoading(false);
      }
    };

    fetchResearchContent();
  }, []);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center font-mono">
        <div className="text-cyan-500/70 text-center">
          <div className="mb-4 text-xs tracking-[0.2em] animate-pulse">INITIALIZING_SYSTEM...</div>
          <div className="h-1 w-32 bg-cyan-900/30 mx-auto overflow-hidden">
            <div className="h-full bg-cyan-500/50 w-1/2 animate-[shimmer_1s_infinite]"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center font-mono">
        <div className="border border-red-500/30 bg-red-500/5 p-8 max-w-md w-full relative">
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-500"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-500"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-500"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-500"></div>
          
          <div className="text-red-500 text-xs mb-2 tracking-widest">SYSTEM_ERROR</div>
          <h2 className="text-xl text-white mb-4">DATA_FETCH_FAILED</h2>
          <p className="text-red-400/70 text-sm mb-6">{error}</p>
          <button
            onClick={() => navigate('/')}
            className="w-full py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 transition-colors text-xs tracking-widest uppercase"
          >
            Return_To_Base
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
              onClick={() => navigate('/')}
              className="cursor-pointer text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
              role="button"
              tabIndex={0}
            >
              <span className="group-hover:-translate-x-1 transition-transform">{'<'}</span>
              BACK_TO_HQ
            </div>
            <div className="h-4 w-px bg-white/10"></div>
            <div className="!text-xs !font-mono !text-cyan-500/50 tracking-widest">
              LAB_INTERFACE_V3.0
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 !text-[10px] !font-mono !text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500/50 animate-pulse"></span>
              SYSTEM_ONLINE
            </div>
            <a
              href="/admin/index.html"
              className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 !text-xs !font-mono !text-slate-400 hover:!text-white transition-colors"
            >
              ADMIN_ACCESS
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
        {/* Sidebar Navigation */}
        <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
          <div className="sticky top-24 space-y-8">
            <div>
              <h3 className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-wider">// Navigation</h3>
              <nav className="space-y-1">
                <a href="#streams" className="block px-3 py-2 text-sm text-slate-400 hover:text-cyan-400 hover:bg-white/5 rounded transition-colors border-l border-transparent hover:border-cyan-500">
                  01. Research Streams
                </a>
                <a href="#logs" className="block px-3 py-2 text-sm text-slate-400 hover:text-cyan-400 hover:bg-white/5 rounded transition-colors border-l border-transparent hover:border-cyan-500">
                  02. Lab Logs
                </a>
              </nav>
            </div>

            <div>
              <h3 className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-wider">// Active Streams</h3>
              <nav className="space-y-1">
                {researchStreams.map(stream => (
                  <button
                    key={stream._sys.filename}
                    onClick={() => navigate(`/research/stream/${stream._sys.filename}`)}
                    className="block w-full text-left px-3 py-2 text-xs text-slate-400 hover:text-cyan-400 hover:bg-white/5 rounded transition-colors truncate border-l border-transparent hover:border-cyan-500"
                  >
                    {stream.title}
                  </button>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-wider">// Recent Logs</h3>
              <nav className="space-y-1">
                {labLogs.slice(0, 5).map(log => (
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
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {/* Header */}
          <header className="mb-16 relative">
            <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              RESEARCH<span className="text-cyan-500">.</span>LAB
            </h1>
            <p className="text-slate-400 max-w-2xl text-lg font-light leading-relaxed">
              Digital repository for ongoing investigations, theoretical frameworks, and experimental data logs.
            </p>
            
            {/* Stats Row */}
            <div className="flex gap-8 mt-8 pt-8 border-t border-white/5">
              <div>
                <div className="text-xs font-mono text-slate-500 mb-1">ACTIVE_STREAMS</div>
                <div className="text-2xl font-mono text-white">{researchStreams.length.toString().padStart(2, '0')}</div>
              </div>
              <div>
                <div className="text-xs font-mono text-slate-500 mb-1">TOTAL_LOGS</div>
                <div className="text-2xl font-mono text-white">{labLogs.length.toString().padStart(2, '0')}</div>
              </div>
              <div>
                <div className="text-xs font-mono text-slate-500 mb-1">LAST_UPDATE</div>
                <div className="text-2xl font-mono text-white">
                  {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
              </div>
            </div>
          </header>

          {/* Research Streams */}
          <section id="streams" className="mb-20">
            <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
              <h2 className="text-2xl font-mono text-white flex items-center gap-3">
                <span className="text-cyan-500">01.</span>
                RESEARCH_STREAMS
              </h2>
              <div className="text-xs font-mono text-slate-500 hidden md:block">
                // PRIMARY_INVESTIGATIONS
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {researchStreams.map((stream) => (
                <div
                  key={stream._sys.filename}
                  onClick={() => navigate(`/research/stream/${stream._sys.filename}`)}
                  className="group relative bg-[#0a0a0a] border border-white/10 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-cyan-500 transition-colors"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-cyan-500 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-cyan-500 transition-colors"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-cyan-500 transition-colors"></div>

                  <div className="flex flex-col md:flex-row h-full">
                    {stream.cover_image && (
                      <div className="md:w-2/5 h-48 md:h-auto relative overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
                        <div className="absolute inset-0 bg-cyan-900/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors"></div>
                        <img
                          src={stream.cover_image}
                          alt={stream.title}
                          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                    )}
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 border ${getStatusColor(stream.status)}`}>
                          {stream.status}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">
                          ID: {stream._sys.filename.substring(0, 6).toUpperCase()}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {stream.title}
                      </h3>
                      
                      <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                        {stream.abstract}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <div className="flex gap-2">
                          {stream.tags?.slice(0, 3).map((tag, i) => (
                            <span key={i} className="text-[10px] font-mono text-slate-500">#{tag}</span>
                          ))}
                        </div>
                        <span className="text-cyan-500/50 group-hover:text-cyan-400 text-xs font-mono flex items-center gap-1">
                          ACCESS_DATA <span className="text-lg leading-none">›</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Lab Logs */}
          <section id="logs">
            <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
              <h2 className="text-2xl font-mono text-white flex items-center gap-3">
                <span className="text-cyan-500">02.</span>
                LAB_LOGS
              </h2>
              <div className="text-xs font-mono text-slate-500 hidden md:block">
                // EXPERIMENTAL_DATA
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {labLogs.map((log) => (
                <div
                  key={log._sys.filename}
                  onClick={() => navigate(`/research/log/${log._sys.filename}`)}
                  className="bg-[#0a0a0a] border border-white/10 p-5 hover:border-white/30 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-mono font-bold uppercase ${getLogTypeColor(log.log_type)}`}>
                      [{log.log_type}]
                    </span>
                    <span className="text-[10px] font-mono text-slate-600">
                      {new Date(log.date).toLocaleDateString('en-CA')}
                    </span>
                  </div>

                  <h3 className="text-white font-medium mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {log.title}
                  </h3>

                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 mb-4">
                    {log.summary}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="h-px flex-grow bg-white/5 mr-4"></div>
                    <div className="w-1.5 h-1.5 bg-slate-700 rounded-full group-hover:bg-cyan-400 transition-colors"></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ResearchBlog;
