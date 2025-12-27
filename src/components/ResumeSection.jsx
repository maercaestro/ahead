const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight flex items-center">
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300 bg-clip-text text-transparent ml-2">Resume</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Experience Column */}
          <div className="col-span-2">
            <h3 className="text-xl font-semibold text-white mb-6">Work Experience</h3>
            
            <div className="space-y-8">
              {/* Experience Item 1 */}
              <div className="relative pl-8 pb-8 border-l-2 border-transparent bg-clip-border" style={{borderImage: 'linear-gradient(to bottom, rgb(59, 130, 246), rgb(34, 211, 238), rgb(134, 239, 172)) 1'}}>
                <div className="absolute left-[-9px] top-0 w-[18px] h-[18px] rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300 animate-pulse"></div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:border-cyan-400/30 transition-all duration-300">
                  <h4 className="text-lg font-medium text-white mb-1">Postgraduate Researcher</h4>
                  <p className="text-cyan-400 mb-3">Universiti Teknologi PETRONAS • May 2025 - Present</p>
                  <p className="text-white/70 text-sm">
                    Developing novel Energy-Based LNN architectures for industrial furnace control. Focusing on thermodynamic constraints and dynamic excess oxygen optimization to reduce fuel consumption and carbon emissions.
                  </p>
                </div>
              </div>
              
              {/* Experience Item 2 */}
              <div className="relative pl-8 pb-8 border-l-2 border-transparent bg-clip-border" style={{borderImage: 'linear-gradient(to bottom, rgb(59, 130, 246), rgb(34, 211, 238), rgb(134, 239, 172)) 1'}}>
                <div className="absolute left-[-9px] top-0 w-[18px] h-[18px] rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300 animate-pulse"></div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:border-cyan-400/30 transition-all duration-300">
                  <h4 className="text-lg font-medium text-white mb-1">Senior Process Engineer, Project</h4>
                  <p className="text-cyan-400 mb-3">PETRONAS • Oct 2023 - Present</p>
                  <p className="text-white/70 text-sm">
                    Deployed as Resident Engineer at Chevron Lummus Global (USA) to steer Design Feasibility Studies. Validated technical compliance, optimized heat/material balances, and led HAZID assessments for the joint PETRONAS-PERTAMINA hydroprocessing complex.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded text-xs border border-emerald-400/30">Aspen HYSYS</span>
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded text-xs border border-emerald-400/30">PETROSIM</span>
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded text-xs border border-emerald-400/30">Process Simulation</span>
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded text-xs border border-emerald-400/30">Data Analytics</span>
                  </div>
                </div>
              </div>
              
              {/* Experience Item 3 */}
              <div className="relative pl-8 pb-8 border-l-2 border-transparent bg-clip-border" style={{borderImage: 'linear-gradient(to bottom, rgb(59, 130, 246), rgb(34, 211, 238), rgb(134, 239, 172)) 1'}}>
                <div className="absolute left-[-9px] top-0 w-[18px] h-[18px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:border-cyan-400/30 transition-all duration-300">
                  <h4 className="text-lg font-medium text-white mb-1">Senior Operations Engineer</h4>
                  <p className="text-cyan-400 mb-3">PETRONAS • Nov 2019 - Oct 2023</p>
                  <p className="text-white/70 text-sm">
                    Oversaw Base Oil Plant and Distillate Hydrotreating Unit operations. Achieved full operational optimization, increasing production to maximum capacity within two years. Led development of <span className="text-cyan-300 font-semibold">MEGAT AI-driven assistant</span>, improving process efficiency by 90% and delivering <span className="text-yellow-300 font-bold">RM 1M cost savings</span> - winner at PETRONAS RMT Innovation Week. Implemented ML models including reactor temperature and steam optimization predictors, delivering over <span className="text-yellow-300 font-bold">RM 10M in cost savings</span>.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs border border-cyan-400/30">Python</span>
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs border border-cyan-400/30">Power BI</span>
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs border border-cyan-400/30">Machine Learning</span>
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded text-xs border border-emerald-400/30">Process Optimization</span>
                  </div>
                </div>
              </div>
              
              {/* Experience Item 4 */}
              <div className="relative pl-8 pb-8 border-l-2 border-transparent bg-clip-border" style={{borderImage: 'linear-gradient(to bottom, rgb(59, 130, 246), rgb(34, 211, 238), rgb(134, 239, 172)) 1'}}>
                <div className="absolute left-[-9px] top-0 w-[18px] h-[18px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:border-cyan-400/30 transition-all duration-300">
                  <h4 className="text-lg font-medium text-white mb-1">Operation Governance Executive</h4>
                  <p className="text-cyan-400 mb-3">PETRONAS • Jan 2016 - Oct 2019</p>
                  <p className="text-white/70 text-sm">
                    Enforced refinery-wide process governance and authored critical protocols (Slop Management, LOTO). Architected the <span className="text-cyan-300 font-semibold">SCE Bypass Web Application</span>—the refinery's first safety digitalization initiative—winning the <span className="text-yellow-300 font-bold">Gold Award at ICQCC</span>. Served as Overall Production Turnaround Coordinator for PSR-1 Complex with zero incidents.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-400/30">Project Management</span>
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs border border-cyan-400/30">Web Development</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-400/30">Safety Systems</span>
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded text-xs border border-emerald-400/30">Process Governance</span>
                  </div>
                </div>
              </div>
              
              {/* Experience Item 5 */}
              <div className="relative pl-8 pb-8 border-l-2 border-transparent bg-clip-border" style={{borderImage: 'linear-gradient(to bottom, rgb(59, 130, 246), rgb(34, 211, 238), rgb(134, 239, 172)) 1'}}>
                <div className="absolute left-[-9px] top-0 w-[18px] h-[18px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:border-cyan-400/30 transition-all duration-300">
                  <h4 className="text-lg font-medium text-white mb-1">Production Turnaround Coordinator</h4>
                  <p className="text-cyan-400 mb-3">PETRONAS • Mar 2014 - Dec 2015</p>
                  <p className="text-white/70 text-sm">
                    Appointed as Production Turnaround Coordinator with just two years of experience, overseeing major turnaround activities for Base Oil Plant. Led cross-functional coordination between engineering, operations, and contractors. Engineered a crisis solution by deploying the plant's <span className="text-cyan-300 font-semibold">first-ever Portable Boiler</span> during critical failure. Averted a <span className="text-yellow-300 font-bold">48-hour shutdown, saving millions in potential production loss</span>, while coordinating 100% safe turnaround operations.
                  </p>
                </div>
              </div>
              
              {/* Experience Item 6 */}
              <div className="relative pl-8 border-l-2 border-transparent bg-clip-border" style={{borderImage: 'linear-gradient(to bottom, rgb(59, 130, 246), rgb(34, 211, 238), rgb(134, 239, 172)) 1'}}>
                <div className="absolute left-[-9px] top-0 w-[18px] h-[18px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:border-cyan-400/30 transition-all duration-300">
                  <h4 className="text-lg font-medium text-white mb-1">Production Executive</h4>
                  <p className="text-cyan-400 mb-3">PETRONAS • Oct 2012 - Mar 2014</p>
                  <p className="text-white/70 text-sm">
                    Selected for On-Job Training Program at Melaka Group III+ Base Oil Plant for PETRONAS RAPID Project preparation. Assisted in daily process monitoring and optimization. Led <span className="text-cyan-300 font-semibold">Behavioral Safety Program, achieving 90+ staff participation</span>. Spearheaded reliability improvement projects including UVIR Flame Detector installation, reducing spurious furnace trips and enhancing unit reliability.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-white mb-6">Education</h3>
              
              <div className="space-y-8">
                {/* Education Item 1 */}
                <div className="relative pl-8 pb-8 border-l-2 border-transparent bg-clip-border" style={{borderImage: 'linear-gradient(to bottom, rgb(59, 130, 246), rgb(34, 211, 238), rgb(134, 239, 172)) 1'}}>
                  <div className="absolute left-[-9px] top-0 w-[18px] h-[18px] rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300 animate-pulse"></div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:border-cyan-400/30 transition-all duration-300">
                    <h4 className="text-lg font-medium text-white mb-1">Postgraduate Research (Ongoing)</h4>
                    <p className="text-cyan-400 mb-3">Universiti Teknologi PETRONAS • 2025 - Present</p>
                    <p className="text-white/70 text-sm">
                      Research focus: Liquid Neural Network applications in oil and gas industry.
                      Specializing in dynamic control systems for furnace operations and AI-driven process optimization.
                    </p>
                  </div>
                </div>
                
                {/* Education Item 2 */}
                <div className="relative pl-8 border-l-2 border-transparent bg-clip-border" style={{borderImage: 'linear-gradient(to bottom, rgb(59, 130, 246), rgb(34, 211, 238), rgb(134, 239, 172)) 1'}}>
                  <div className="absolute left-[-9px] top-0 w-[18px] h-[18px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:border-cyan-400/30 transition-all duration-300">
                    <h4 className="text-lg font-medium text-white mb-1">Bachelor of Engineering</h4>
                    <p className="text-cyan-400 mb-3">Universiti Teknologi PETRONAS • 2008 - 2012</p>
                    <p className="text-white/70 text-sm">
                      Major in Chemical Engineering. Foundation in process engineering, thermodynamics, and industrial systems.
                      Prepared for career in oil and gas industry with strong technical and analytical skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Skills Column */}
          <div className="sticky top-4 h-fit">
            <h3 className="text-xl font-semibold text-white mb-6">Skills & Expertise</h3>
            
            <div className="space-y-6">
              {/* Skill Category 1 */}
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <h4 className="text-lg font-medium text-white mb-4">Programming & AI</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-400/30">Python</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-400/30">Machine Learning</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-400/30">Deep Learning</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-400/30">Neural Networks</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-400/30">Data Analytics</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-400/30">JavaScript</span>
                </div>
              </div>
              
              {/* Skill Category 2 */}
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <h4 className="text-lg font-medium text-white mb-4">Process Engineering</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-400/30">Aspen HYSYS</span>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-400/30">PETROSIM</span>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-400/30">Process Simulation</span>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-400/30">Process Optimization</span>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-400/30">HAZID</span>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-400/30">Chemical Engineering</span>
                </div>
              </div>
              
              {/* Skill Category 3 */}
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <h4 className="text-lg font-medium text-white mb-4">Digital Platforms & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30">Power BI</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30">Power Automate</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30">Streamlit</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30">Oracle Primavera</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30">Microsoft Project</span>
                </div>
              </div>
              
              {/* Skill Category 4 */}
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <h4 className="text-lg font-medium text-white mb-4">Project & Operations Management</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-400/30">Project Management</span>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-400/30">Operations Excellence</span>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-400/30">Process Governance</span>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-400/30">Safety Systems</span>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-400/30">Turnaround Management</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="/resume.pdf" 
                className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300 font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-105 transform"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
                download="Abu_Huzaifah_Resume.pdf"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Full Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
