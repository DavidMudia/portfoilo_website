// src/components/Hero.tsx
export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center px-6 pt-16">
      <div className="w-full max-w-7xl mx-auto text-center">
        <div className="backdrop-blur-xl bg-white/[0.06] border border-white/10 rounded-3xl p-6 sm:p-12 lg:p-16 shadow-2xl shadow-black/20">
          {/* Profile Picture */}
          <div className="mb-6 sm:mb-10 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-full blur-lg group-hover:blur-xl transition-all opacity-40 group-hover:opacity-60" />
              <div className="relative">
                <img
                  id="hero-profile-image"
                  src="/profilepic.jpeg"
                  alt="Oyedoh David"
                  className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-white/20 backdrop-blur-xl shadow-2xl"
                />
                <div className="absolute bottom-2 right-2 w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500 rounded-full border-4 border-slate-800/80 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2">
            <span className="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
              Oyedoh David
            </span>
          </h1>

          {/* Security badge – hidden on mobile */}
          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600/15 to-blue-600/15 border border-cyan-600/30 backdrop-blur-sm mb-8">
            <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-cyan-500 text-sm font-medium">Cybersecurity Engineer & Web Developer</span>
          </div>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 bg-clip-text text-transparent">
              Building Secure
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>

          {/* Subtitle – hidden on mobile */}
          <div className="hidden sm:block">
            <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              Crafting robust web applications with a security-first mindset
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
              Specializing in TypeScript, React, Node.js, and modern security practices
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button
              onClick={scrollToProjects}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-white overflow-hidden transition-all hover:scale-105 text-sm sm:text-base"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:from-cyan-400 group-hover:to-blue-400 transition-all" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-400 to-blue-400 blur-xl transition-opacity" />
              <span className="relative flex items-center gap-2">
                View My Work
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>

            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-cyan-500 border border-cyan-600/40 backdrop-blur-sm bg-cyan-600/10 hover:bg-cyan-600/20 transition-all hover:scale-105 text-sm sm:text-base"
            >
              Get In Touch
            </a>
          </div>

          {/* Tech stack – hidden on mobile */}
          <div className="hidden sm:block mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/10">
            <p className="text-slate-400 text-sm mb-6 uppercase tracking-wider">Tech Stack</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center">
              {[
                { name: 'TypeScript', icon: 'TS' },
                { name: 'React', icon: '⚛️' },
                { name: 'Node.js', icon: '📦' },
                { name: 'Security', icon: '🔒' },
                { name: 'Cloud', icon: '☁️' },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="group flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-cyan-600/50 hover:bg-white/10 transition-all cursor-pointer"
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-slate-300 text-xs sm:text-sm group-hover:text-cyan-500 transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator – hidden on mobile */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}