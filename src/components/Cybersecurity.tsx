// src/components/Cybersecurity.tsx
export default function Cybersecurity() {
  const securityServices = [
    {
      title: 'Penetration Testing',
      description: 'Comprehensive security assessments to identify vulnerabilities before attackers do.',
      icon: '🎯',
      features: [
        'Network penetration testing',
        'Web application security testing',
        'Social engineering assessments',
        'Detailed vulnerability reports',
      ],
    },
    {
      title: 'Security Auditing',
      description: 'In-depth analysis of security policies, configurations, and compliance requirements.',
      icon: '🔍',
      features: [
        'Code security reviews',
        'Infrastructure audits',
        'Compliance assessments',
        'Security best practices',
      ],
    },
    {
      title: 'Secure Development',
      description: 'Building applications with security integrated from the ground up.',
      icon: '🛡️',
      features: [
        'OWASP compliance',
        'Secure coding practices',
        'Authentication & authorization',
        'Data encryption implementation',
      ],
    },
    {
      title: 'Incident Response',
      description: 'Rapid response to security incidents with forensics and remediation.',
      icon: '🚨',
      features: [
        'Threat detection & analysis',
        'Incident investigation',
        'Malware analysis',
        'Recovery & remediation',
      ],
    },
  ];

  const securityTools = [
    { name: 'Burp Suite', category: 'Web Security' },
    { name: 'Wireshark', category: 'Network Analysis' },
    { name: 'Metasploit', category: 'Penetration Testing' },
    { name: 'Nmap', category: 'Network Scanning' },
    { name: 'OWASP ZAP', category: 'Security Testing' },
    { name: 'Kali Linux', category: 'Security OS' },
  ];

  return (
    <section id="cybersecurity" className="relative py-20 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header – reduced margin on mobile */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/15 to-orange-500/15 border border-red-500/30 backdrop-blur-sm mb-6">
            <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-red-400 text-sm font-medium">Cybersecurity Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Security Solutions
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
            Protecting digital assets with comprehensive security strategies
          </p>
        </div>

        {/* Security Services – responsive cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {securityServices.map((service, idx) => (
            <div
              key={service.title}
              className="group backdrop-blur-xl bg-white/[0.06] border border-white/10 rounded-2xl p-4 sm:p-8 hover:bg-white/10 hover:border-red-500/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4 sm:mb-6">
                <div className="text-3xl sm:text-5xl">{service.icon}</div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2">{service.title}</h3>
                  {/* Description – hidden on mobile */}
                  <p className="hidden sm:block text-slate-400 text-sm sm:text-base">{service.description}</p>
                </div>
              </div>

              {/* Features – hidden on mobile */}
              <ul className="hidden sm:block space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-300 text-sm">
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Security Tools – responsive padding and grid */}
        <div className="backdrop-blur-xl bg-white/[0.06] border border-white/10 rounded-2xl p-4 sm:p-8 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Security Tools</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {securityTools.map((tool) => (
              <div
                key={tool.name}
                className="p-3 sm:p-4 rounded-xl backdrop-blur-md bg-white/[0.04] border border-white/10 hover:border-red-400/40 hover:bg-white/[0.08] transition-all group cursor-pointer"
              >
                <h4 className="text-sm sm:text-base text-white font-semibold mb-1 group-hover:text-red-400 transition-colors">
                  {tool.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Mindset Statement – responsive padding and font */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="backdrop-blur-xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-6 sm:p-12 max-w-4xl mx-auto">
            <svg className="w-12 h-12 sm:w-16 sm:h-16 text-red-400 mx-auto mb-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Security-First Development</h3>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed">
              "Every line of code is written with security in mind. From input validation to encryption, 
              from authentication to authorization – security is not an afterthought, it's a foundation."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}