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
              <div className="relative pl-8 pb-8 border-l border-primary/30">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gradient-primary"></div>
                <div className="bg-dark p-6 rounded-lg border border-white/10">
                  <h4 className="text-lg font-medium text-white mb-1">Postgraduate Researcher</h4>
                  <p className="text-secondary mb-3">Universiti Teknologi PETRONAS • May 2025 - Present</p>
                  <p className="text-white/70 text-sm">
                    Researching Liquid Neural Network applications in the oil and gas industry, specifically focusing on dynamic control of excess oxygen during furnace operations. Remote research position exploring cutting-edge AI applications in industrial processes.
                  </p>
                </div>
              </div>
              
              {/* Experience Item 2 */}
              <div className="relative pl-8 pb-8 border-l border-primary/30">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gradient-primary"></div>
                <div className="bg-dark p-6 rounded-lg border border-white/10">
                  <h4 className="text-lg font-medium text-white mb-1">Senior Process Engineer, Project</h4>
                  <p className="text-secondary mb-3">PETRONAS • Oct 2023 - Present</p>
                  <p className="text-white/70 text-sm">
                    Leading process optimization & engineering studies for joint PETRONAS-PERTAMINA hydroprocessing project in Cilacap, Indonesia. Serving as Resident Engineer at Chevron Lummus Global, reviewing Design Feasibility Studies and ensuring safety & technical compliance. Conducting HAZID assessments & process simulations, optimizing heat & material balances, PFDs, and utility summaries.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-500/10 rounded text-xs text-blue-300">Aspen HYSYS</span>
                    <span className="px-2 py-1 bg-blue-500/10 rounded text-xs text-blue-300">PETROSIM</span>
                    <span className="px-2 py-1 bg-blue-500/10 rounded text-xs text-blue-300">Process Simulation</span>
                    <span className="px-2 py-1 bg-blue-500/10 rounded text-xs text-blue-300">Data Analytics</span>
                  </div>
                </div>
              </div>
              
              {/* Experience Item 3 */}
              <div className="relative pl-8 pb-8 border-l border-primary/30">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gradient-primary"></div>
                <div className="bg-dark p-6 rounded-lg border border-white/10">
                  <h4 className="text-lg font-medium text-white mb-1">Senior Operations Engineer</h4>
                  <p className="text-secondary mb-3">PETRONAS • Nov 2019 - Oct 2023</p>
                  <p className="text-white/70 text-sm">
                    Oversaw Base Oil Plant and Distillate Hydrotreating Unit operations. Achieved full operational optimization, increasing production to maximum capacity within two years. <strong>Led development of MEGAT AI-driven assistant, improving process efficiency by 90% and delivering RM 1M cost savings - winner at PETRONAS RMT Innovation Week.</strong> Implemented ML models including reactor temperature and steam optimization predictors, delivering over RM 10M in cost savings.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-500/10 rounded text-xs text-green-300">Python</span>
                    <span className="px-2 py-1 bg-green-500/10 rounded text-xs text-green-300">Power BI</span>
                    <span className="px-2 py-1 bg-green-500/10 rounded text-xs text-green-300">Machine Learning</span>
                    <span className="px-2 py-1 bg-green-500/10 rounded text-xs text-green-300">Process Optimization</span>
                  </div>
                </div>
              </div>
              
              {/* Experience Item 4 */}
              <div className="relative pl-8 pb-8 border-l border-primary/30">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gradient-primary"></div>
                <div className="bg-dark p-6 rounded-lg border border-white/10">
                  <h4 className="text-lg font-medium text-white mb-1">Operation Governance Executive</h4>
                  <p className="text-secondary mb-3">PETRONAS • Jan 2016 - Oct 2019</p>
                  <p className="text-white/70 text-sm">
                    Responsible for refinery-wide process governance compliance. Authored key protocols including Slop Management, Hose Management, and LOTO procedures. <strong>Led development of SCE Bypass Web Application - first safety digitalization project at Melaka Refinery, recognized by Malaysian Productivity Corporation and won Gold Award at ICQCC.</strong> Served as Overall Production Turnaround Coordinator for PSR-1 Complex with zero incidents.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-purple-500/10 rounded text-xs text-purple-300">Project Management</span>
                    <span className="px-2 py-1 bg-purple-500/10 rounded text-xs text-purple-300">Web Development</span>
                    <span className="px-2 py-1 bg-purple-500/10 rounded text-xs text-purple-300">Safety Systems</span>
                    <span className="px-2 py-1 bg-purple-500/10 rounded text-xs text-purple-300">Process Governance</span>
                  </div>
                </div>
              </div>
              
              {/* Experience Item 5 */}
              <div className="relative pl-8 pb-8 border-l border-primary/30">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gradient-primary"></div>
                <div className="bg-dark p-6 rounded-lg border border-white/10">
                  <h4 className="text-lg font-medium text-white mb-1">Production Turnaround Coordinator</h4>
                  <p className="text-secondary mb-3">PETRONAS • Mar 2014 - Dec 2015</p>
                  <p className="text-white/70 text-sm">
                    Appointed as Production Turnaround Coordinator with just two years of experience, overseeing major turnaround activities for Base Oil Plant. Led cross-functional coordination between engineering, operations, and contractors. <strong>Pioneered introduction of Portable Boiler (first in plant history), preventing two-day delay and ensuring successful unit restart.</strong> Achieved 100% safety compliance with zero incidents.
                  </p>
                </div>
              </div>
              
              {/* Experience Item 6 */}
              <div className="relative pl-8 border-l border-primary/30">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gradient-primary"></div>
                <div className="bg-dark p-6 rounded-lg border border-white/10">
                  <h4 className="text-lg font-medium text-white mb-1">Production Executive</h4>
                  <p className="text-secondary mb-3">PETRONAS • Oct 2012 - Mar 2014</p>
                  <p className="text-white/70 text-sm">
                    Selected for On-Job Training Program at Melaka Group III+ Base Oil Plant for PETRONAS RAPID Project preparation. Assisted in daily process monitoring and optimization. <strong>Led Behavioral Safety Program, achieving 90+ staff participation.</strong> Spearheaded reliability improvement projects including UVIR Flame Detector installation, reducing spurious furnace trips and enhancing unit reliability.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-white mb-6">Education</h3>
              
              <div className="space-y-8">
                {/* Education Item 1 */}
                <div className="relative pl-8 pb-8 border-l border-secondary/30">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gradient-primary"></div>
                  <div className="bg-dark p-6 rounded-lg border border-white/10">
                    <h4 className="text-lg font-medium text-white mb-1">Postgraduate Research (Ongoing)</h4>
                    <p className="text-secondary mb-3">Universiti Teknologi PETRONAS • 2025 - Present</p>
                    <p className="text-white/70 text-sm">
                      Research focus: Liquid Neural Network applications in oil and gas industry.
                      Specializing in dynamic control systems for furnace operations and AI-driven process optimization.
                    </p>
                  </div>
                </div>
                
                {/* Education Item 2 */}
                <div className="relative pl-8 border-l border-secondary/30">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gradient-primary"></div>
                  <div className="bg-dark p-6 rounded-lg border border-white/10">
                    <h4 className="text-lg font-medium text-white mb-1">Bachelor of Engineering</h4>
                    <p className="text-secondary mb-3">Universiti Teknologi PETRONAS • 2008 - 2012</p>
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
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Skills & Expertise</h3>
            
            <div className="space-y-6">
              {/* Skill Category 1 */}
              <div className="bg-dark p-6 rounded-lg border border-white/10">
                <h4 className="text-lg font-medium text-white mb-4">Programming & AI</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-white">Python</span>
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-white">Machine Learning</span>
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-white">Deep Learning</span>
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-white">Neural Networks</span>
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-white">Data Analytics</span>
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-white">JavaScript</span>
                </div>
              </div>
              
              {/* Skill Category 2 */}
              <div className="bg-dark p-6 rounded-lg border border-white/10">
                <h4 className="text-lg font-medium text-white mb-4">Process Engineering</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary/10 rounded-full text-sm text-white">Aspen HYSYS</span>
                  <span className="px-3 py-1 bg-secondary/10 rounded-full text-sm text-white">PETROSIM</span>
                  <span className="px-3 py-1 bg-secondary/10 rounded-full text-sm text-white">Process Simulation</span>
                  <span className="px-3 py-1 bg-secondary/10 rounded-full text-sm text-white">Process Optimization</span>
                  <span className="px-3 py-1 bg-secondary/10 rounded-full text-sm text-white">HAZID</span>
                  <span className="px-3 py-1 bg-secondary/10 rounded-full text-sm text-white">Chemical Engineering</span>
                </div>
              </div>
              
              {/* Skill Category 3 */}
              <div className="bg-dark p-6 rounded-lg border border-white/10">
                <h4 className="text-lg font-medium text-white mb-4">Digital Platforms & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-white">Power BI</span>
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-white">Power Automate</span>
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-white">Streamlit</span>
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-white">Oracle Primavera</span>
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-white">Microsoft Project</span>
                </div>
              </div>
              
              {/* Skill Category 4 */}
              <div className="bg-dark p-6 rounded-lg border border-white/10">
                <h4 className="text-lg font-medium text-white mb-4">Project & Operations Management</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary/10 rounded-full text-sm text-white">Project Management</span>
                  <span className="px-3 py-1 bg-secondary/10 rounded-full text-sm text-white">Operations Excellence</span>
                  <span className="px-3 py-1 bg-secondary/10 rounded-full text-sm text-white">Process Governance</span>
                  <span className="px-3 py-1 bg-secondary/10 rounded-full text-sm text-white">Safety Systems</span>
                  <span className="px-3 py-1 bg-secondary/10 rounded-full text-sm text-white">Turnaround Management</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="https://github.com/maercaestro/maercaestro/blob/510ab299d29345f609b2d53fd7ca4d38dd0d8cdc/2025-%20Resume%20Abu%20Huzaifah%20Bidin%20CE.pdf" 
                className="inline-flex items-center px-8 py-4 !bg-gradient-to-r !from-blue-500 !via-cyan-400 !to-green-300 bg-clip-text text-transparent ml-2"
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
