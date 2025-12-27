import { useState } from 'react';
import profileImage from '../assets/gambartv.jpg';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <img 
        src={profileImage} 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/50 z-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight flex items-center">
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300 bg-clip-text text-transparent ml-2">Get in Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <p className="text-white/80 mb-8">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Email</h3>
                  <a href="mailto:research@ahead-huzaifah.com" className="text-white/70 hover:text-secondary transition-colors">
                    research@ahead-huzaifah.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Location</h3>
                  <p className="text-white/70">
                    Melaka, Malaysia
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h3 className="text-lg font-medium text-white mb-4">Connect with me</h3>
              <div className="flex gap-4">
                <a href="https://github.com/maercaestro" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/abu-huzaifah-bidin-71391068/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-white/70 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-500/10 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/abu.bidin" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-white/70 hover:text-blue-500 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-3">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Send me a message</h3>
              
              {submitStatus === 'success' ? (
                <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-lg font-medium text-white mb-1">Message Sent!</h4>
                  <p className="text-white/70">Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2 text-sm">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white/80 mb-2 text-sm">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                      placeholder="johndoe@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white/80 mb-2 text-sm">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all resize-none"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-green-300 py-3 rounded-md font-bold flex items-center justify-center transition-all hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ color: 'white' }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
