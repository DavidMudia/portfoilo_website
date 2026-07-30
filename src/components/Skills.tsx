export default function Skills() {
  const skillCategories = [
    {
      title: 'Web Development',
      icon: '💻',
      skills: [
        'TypeScript',
        'React / Next.js',
        'Node.js / Express',
        'Tailwind CSS',
        'MongoDB / PostgreSQL',
        'REST / GraphQL APIs',
      ],
    },
    {
      title: 'Cybersecurity',
      icon: '🔒',
      skills: [
        'Network Security',
        'Penetration Testing',
        'Security Auditing',
        'OWASP Top 10',
        'Encryption & PKI',
        'Incident Response',
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: '🛠️',
      skills: [
        'Git / GitHub',
        'Docker / K8s',
        'AWS / Vercel',
        'CI/CD Pipelines',
        'Linux / Unix',
        'Wireshark / Burp Suite',
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/15 to-pink-500/15 border border-purple-400/30 backdrop-blur-sm mb-6">
            <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 7H7v6h6V7z" />
              <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
            </svg>
            <span className="text-purple-400 text-sm font-medium">Skills & Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building secure, scalable applications
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="group backdrop-blur-xl bg-white/[0.06] border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-600/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="text-4xl">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills list */}
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-3 rounded-lg backdrop-blur-md bg-white/[0.04] border border-white/10 hover:border-cyan-600/40 hover:bg-white/[0.08] transition-all group cursor-default"
                  >
                    <svg className="w-5 h-5 text-cyan-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-300 font-medium group-hover:text-cyan-500 transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20 text-center">
          <div className="backdrop-blur-xl bg-white/[0.06] border border-white/10 rounded-2xl p-8 inline-block">
            <h3 className="text-xl font-bold text-white mb-6">Certifications & Learning</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {['Network Security Expert', 'Security Auditing', 'Wiresharck Expert', 'CEH', 'React Expert'].map((cert) => (
                <span
                  key={cert}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600/15 to-blue-600/15 border border-cyan-600/30 text-cyan-500 text-sm font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
