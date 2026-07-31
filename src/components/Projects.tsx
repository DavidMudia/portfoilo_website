// src/components/Projects.tsx
export default function Projects() {
  const projects = [
    {
      title: 'Sales Suite Platform',
      category: 'Full-Stack Application',
      description: 'Complete CRM and sales management platform with analytics, pipeline tracking, and team collaboration features.',
      tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      features: [
        'Real-time sales pipeline management',
        'Advanced analytics dashboard',
        'Team collaboration tools',
        'Automated reporting system',
      ],
      gradient: 'from-blue-500 to-cyan-500',
      icon: '📊',
      deployed: 'Vercel',
      demoUrl: 'https://axylum-sales-suite-alpha.vercel.app/dashboard',
      githubUrl: 'https://github.com/yourusername/sales-suite',
    },
    {
      title: 'Task Manager Pro',
      category: 'Productivity App',
      description: 'Modern task management application with drag-and-drop, real-time sync, and team workspace features.',
      tech: ['TypeScript', 'React', 'Firebase', 'Tailwind CSS', 'DnD Kit'],
      features: [
        'Drag-and-drop task organization',
        'Real-time collaboration',
        'Priority & deadline management',
        'Project workspace organization',
      ],
      gradient: 'from-purple-500 to-pink-500',
      icon: '✓',
      deployed: 'Vercel',
      demoUrl: 'https://task-manager-xi-tan-35.vercel.app/',
      githubUrl: 'https://github.com/yourusername/task-manager',
    },
    {
      title: 'E-Commerce Platform',
      category: 'Online Store',
      description: 'Full-featured e-commerce solution with secure payments, inventory management, and admin dashboard.',
      tech: ['TypeScript', 'Next.js', 'Stripe', 'MongoDB', 'Redux'],
      features: [
        'Secure payment processing',
        'Inventory management system',
        'Order tracking & fulfillment',
        'Admin analytics dashboard',
      ],
      gradient: 'from-emerald-500 to-teal-500',
      icon: '🛒',
      deployed: 'Vercel',
      demoUrl: 'https://mudia-stores.vercel.app/',
      githubUrl: 'https://github.com/yourusername/ecommerce',
    },
    {
      title: 'Weather Dashboard',
      category: 'Data Visualization',
      description: 'Real-time weather application with interactive maps, forecasts, and weather alerts for multiple locations.',
      tech: ['TypeScript', 'React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
      features: [
        '7-day weather forecasts',
        'Interactive weather maps',
        'Location-based alerts',
        'Historical data charts',
      ],
      gradient: 'from-sky-500 to-blue-500',
      icon: '🌤️',
      deployed: 'Vercel',
      demoUrl: null,
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
    },
    {
      title: 'Portfolio Showcase',
      category: 'Personal Branding',
      description: 'Multiple custom portfolio websites built for clients with unique designs and smooth animations.',
      tech: ['TypeScript', 'React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      features: [
        'Custom animations & transitions',
        'Responsive glassmorphism design',
        'SEO optimized',
        'Performance focused',
      ],
      gradient: 'from-violet-500 to-purple-500',
      icon: '💼',
      deployed: 'Vercel',
      demoUrl: null,
      githubUrl: 'https://github.com/yourusername/portfolio-showcase',
    },
    {
      title: 'API Gateway Service',
      category: 'Backend Infrastructure',
      description: 'Secure API gateway with authentication, rate limiting, and microservices orchestration.',
      tech: ['TypeScript', 'Node.js', 'Express', 'Redis', 'JWT'],
      features: [
        'JWT authentication',
        'Rate limiting & throttling',
        'Request/response caching',
        'API versioning support',
      ],
      gradient: 'from-orange-500 to-red-500',
      icon: '🔌',
      deployed: 'AWS',
      demoUrl: null,
      githubUrl: 'https://github.com/yourusername/api-gateway',
    },
  ];

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header – unchanged */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600/15 to-blue-600/15 border border-cyan-600/30 backdrop-blur-sm mb-6">
            <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
            <span className="text-cyan-500 text-sm font-medium">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Web Development Projects
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Production-ready applications built with modern technologies
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group backdrop-blur-xl bg-white/[0.06] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-cyan-600/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-600/20"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {/* Project header – reduced padding on mobile */}
              <div className="p-4 sm:p-8 relative border-b border-white/10">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="text-3xl sm:text-5xl">{project.icon}</div>
                  <div className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-cyan-600/15 backdrop-blur-sm border border-cyan-600/30">
                    <span className="text-cyan-500 text-[10px] sm:text-xs font-semibold">{project.deployed}</span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2">{project.title}</h3>
                <p className="text-cyan-500 text-xs sm:text-sm font-medium">{project.category}</p>
              </div>

              {/* Project content – reduced padding */}
              <div className="p-4 sm:p-6">
                {/* Description – line clamp on mobile */}
                <p className="text-slate-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {project.description}
                </p>

                {/* Features – hidden on small screens */}
                <div className="hidden sm:block mb-6">
                  <h4 className="text-sm font-semibold text-cyan-500 mb-3 uppercase tracking-wider">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-slate-400 text-sm">
                        <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack – smaller tags on mobile */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg backdrop-blur-md bg-white/[0.05] border border-white/10 text-slate-300 text-[10px] sm:text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons – smaller on mobile */}
                <div className="mt-4 sm:mt-6 flex gap-2 sm:gap-3">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-400 hover:to-blue-400 transition-all text-xs sm:text-sm text-center"
                    >
                      View Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg bg-slate-700/50 text-slate-400 font-medium text-xs sm:text-sm cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg border border-cyan-600/50 text-cyan-500 hover:bg-cyan-600/10 transition-all text-xs sm:text-sm flex items-center justify-center"
                      aria-label="Source Code"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More projects CTA – unchanged */}
        <div className="text-center mt-16">
          <p className="text-slate-400 mb-6">Interested in seeing more projects?</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white backdrop-blur-xl bg-white/[0.06] border border-white/15 hover:border-cyan-600/50 hover:bg-white/[0.1] transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}