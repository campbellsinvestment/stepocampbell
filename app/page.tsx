'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
    }
  }, [])

  useEffect(() => {
    // Save theme preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
  }

  return (
    <div className={`min-h-screen font-mono transition-colors duration-300 ${
      isDark 
        ? 'bg-slate-900 text-white' 
        : 'bg-white text-black'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-sm border-b transition-colors duration-300 ${
        isDark 
          ? 'bg-slate-900/80 border-slate-700' 
          : 'bg-white/80 border-gray-200'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-base sm:text-lg font-bold">
              Stephen Campbell
            </Link>
            <div className="flex items-center space-x-3 sm:space-x-6">
              <div className="hidden sm:flex space-x-6 text-sm">
                <a href="#about" className={`transition-colors ${
                  isDark ? 'hover:text-gray-400' : 'hover:text-gray-600'
                }`}>about</a>
                <a href="#work" className={`transition-colors ${
                  isDark ? 'hover:text-gray-400' : 'hover:text-gray-600'
                }`}>work</a>
                <a href="#skills" className={`transition-colors ${
                  isDark ? 'hover:text-gray-400' : 'hover:text-gray-600'
                }`}>skills</a>
                <a href="#contact" className={`transition-colors ${
                  isDark ? 'hover:text-gray-400' : 'hover:text-gray-600'
                }`}>contact</a>
              </div>
              <div className="flex sm:hidden space-x-4 text-xs">
                <a href="#about" className={`transition-colors ${
                  isDark ? 'hover:text-gray-400' : 'hover:text-gray-600'
                }`}>about</a>
                <a href="#work" className={`transition-colors ${
                  isDark ? 'hover:text-gray-400' : 'hover:text-gray-600'
                }`}>work</a>
                <a href="#skills" className={`transition-colors ${
                  isDark ? 'hover:text-gray-400' : 'hover:text-gray-600'
                }`}>skills</a>
                <a href="#contact" className={`transition-colors ${
                  isDark ? 'hover:text-gray-400' : 'hover:text-gray-600'
                }`}>contact</a>
              </div>
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-1.5 sm:p-2 rounded-full transition-colors ${
                  isDark ? 'hover:bg-slate-800' : 'hover:bg-gray-100'
                }`}
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun size={16} className="sm:w-[18px] sm:h-[18px]" /> : <Moon size={16} className="sm:w-[18px] sm:h-[18px]" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24">
        {/* Hero Section */}
        <motion.section className="py-12 sm:py-20" {...fadeInUp} itemScope itemType="https://schema.org/Person">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight" itemProp="name">
              Stephen Campbell
            </h1>
            <h2 className={`text-base sm:text-lg font-medium mb-4 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`} itemProp="jobTitle">
              <span>full-stack developer | computer programmer</span>
              <span className="text-base">🇨🇦</span>
            </h2>
            <p className={`text-lg sm:text-xl max-w-2xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`} itemProp="description">
              chemical engineer turned programmer solving complex problems through intelligent automation and ai-powered solutions.
            </p>
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://github.com/campbellsinvestment" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`transition-colors ${
                  isDark ? 'hover:text-gray-400' : 'hover:text-gray-600'
                }`}
                itemProp="sameAs"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/stepocampbell" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`transition-colors ${
                  isDark ? 'hover:text-gray-400' : 'hover:text-gray-600'
                }`}
                itemProp="sameAs"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:stepocampbell@gmail.com"
                className={`transition-colors ${
                  isDark ? 'hover:text-gray-400' : 'hover:text-gray-600'
                }`}
                itemProp="email"
                aria-label="Email Contact"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          id="about" 
          className={`py-12 sm:py-16 border-t transition-colors ${
            isDark ? 'border-slate-700' : 'border-gray-200'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">about</h2>
          <div className={`space-y-4 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <p>
              tldr; mostly self-taught by shipping things on the internet
            </p>
            <p>
              passionate about profitable saas apps, prompt engineering, and building 
              intelligent systems that solve real problems.
            </p>
            <p>
              fascinated by the intersection of technology and human potential — 
              creating tools that amplify productivity and creativity.
            </p>
          </div>
        </motion.section>

        {/* Recent Work Section */}
        <motion.section 
          id="work" 
          className={`py-16 border-t transition-colors ${
            isDark ? 'border-slate-700' : 'border-gray-200'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">recent work</h2>
          <div className="space-y-8">
            {[
              {
                title: "Little Exits",
                description: "Acquisition marketplace for indie hackers to buy and sell side projects under $100k. Features secure transactions, project valuations, and automated invoicing.",
                link: "https://littleexits.com",
                type: "SaaS Platform",
                iconPath: "/icons/littleexits_favicon.png"
              },
              {
                title: "The Maker Mindset",
                description: "The peculiar attributes of the modern day inventor",
                link: "https://themakermindset.com",
                type: "Book",
                iconPath: "/icons/makermindset.png"
              },
              {
                title: "CheckoutKeys",
                description: "Automated license key management system for digital products. Integrates with Stripe for instant key generation and delivery via customizable emails.",
                link: "https://checkoutkeys.com",
                type: "B2B SaaS",
                iconPath: "/icons/checkoutkeys-logo.png"
              },
              {
                title: "ExcelBot",
                description: "AI-powered Excel assistant that generates formulas and VBA code from plain language descriptions. Helps users create complex spreadsheet solutions instantly.",
                link: "https://excelbot.io",
                type: "AI Tool",
                iconPath: "/icons/excelbot_favicon.png"
              },
              {
                title: "Rent Fair Ontario",
                description: "Rental market comparison tool using official Statistics Canada data. Helps Ontario residents compare their rent to CMHC market averages.",
                link: "https://rentfairontario.vercel.app",
                type: "Data Platform",
                iconPath: "/icons/rentfair-icon.svg"
              },
              {
                title: "PreRevenue",
                description: "Evaluate your pre-revenue startup with a simple tagline and traction metrics. Get instant AI analysis based on Little Exits marketplace data from 200+ successful exits.",
                link: "https://prerevenue.io",
                type: "Startup Evaluation Tool",
                iconPath: "/icons/prerevenue.png"
              }
            ].map((project, index) => (
              <div key={index} className="group">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <Image 
                            src={project.iconPath} 
                            alt={`${project.title} icon`}
                            width={32} 
                            height={32} 
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className={`font-bold transition-colors ${
                            isDark 
                              ? 'group-hover:text-gray-400' 
                              : 'group-hover:text-gray-600'
                          }`}>{project.title}</h3>
                          <span className={`text-xs uppercase tracking-wide ${
                            isDark ? 'text-gray-500' : 'text-gray-500'
                          }`}>
                            {project.type}
                          </span>
                        </div>
                        <p className={`text-sm leading-relaxed ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <ExternalLink 
                      size={16} 
                      className={`transition-colors ml-4 flex-shrink-0 ${
                        isDark 
                          ? 'text-slate-500 group-hover:text-white' 
                          : 'text-gray-400 group-hover:text-black'
                      }`} 
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          id="skills" 
          className={`py-16 border-t transition-colors ${
            isDark ? 'border-slate-700' : 'border-gray-200'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h3 className="font-bold mb-4 text-sm uppercase tracking-wide">AI & Automation</h3>
              <ul className={`space-y-2 text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Prompt Engineering</li>
                <li>OpenAI API Integration</li>
                <li>Claude AI Development</li>
                <li>AI Workflow Design</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-sm uppercase tracking-wide">Frontend</h3>
              <ul className={`space-y-2 text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>React & Next.js</li>
                <li>HTML/CSS & JavaScript</li>
                <li>PHP</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-sm uppercase tracking-wide">Backend & Data</h3>
              <ul className={`space-y-2 text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Node.js & Python</li>
                <li>PostgreSQL & Supabase</li>
                <li>API Development</li>
                <li>Cloud Deployment</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          className={`py-16 border-t transition-colors ${
            isDark ? 'border-slate-700' : 'border-gray-200'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">experience</h2>
          <div className="space-y-8">
            {[
              {
                company: "McMaster University",
                role: "WordPress Developer",
                period: "2024 - Present",
                description: "Building custom WordPress sites with AODA compliance and Git workflows",
                skills: ["WordPress", "PHP", "HTML/CSS", "JavaScript", "Git", "ACF"]
              },
              {
                company: "Little Exits",
                role: "Full Stack Developer, Founder",
                period: "2021 - 2024",
                description: "Built marketplace for side project acquisitions, 680+ transactions processed",
                skills: ["Next.js", "React", "TypeScript", "Supabase", "Stripe", "Vercel", "Bubble", "SendGrid"]
              },
              {
                company: "Campbells Investment LLC",
                role: "Full Stack Developer, Founder",
                period: "2018 - Present",
                description: "Freelance web development across music, education, and e-commerce industries",
                skills: ["WordPress", "HTML/CSS", "PHP", "SEO", "Analytics", "Marketing", "MS Office", "Team Work"]
              }
            ].map((job, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">{job.company}</h3>
                    <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{job.role}</p>
                  </div>
                  <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{job.period}</span>
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`px-2 py-1 text-xs rounded border ${
                        isDark 
                          ? 'bg-slate-800 text-slate-300 border-slate-600' 
                          : 'bg-gray-100 text-gray-700 border-gray-200'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* AI Toolkit Section */}
        <motion.section 
          className={`py-16 border-t transition-colors ${
            isDark ? 'border-slate-700' : 'border-gray-200'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">toolkit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="font-bold mb-4">Current Stack</h3>
              <ul className={`space-y-2 text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>ChatGPT, Claude & GitHub Copilot</li>
                <li>VS Code & Cursor IDE</li>
                <li>Git version control (GitHub/GitLab)</li>
                <li>Vercel, Firebase & Supabase hosting</li>
                <li>Stripe & third-party API integration</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Specializations</h3>
              <ul className={`space-y-2 text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>SaaS platform development</li>
                <li>Payment system integration</li>
                <li>Database design & optimization</li>
                <li>SEO & conversion optimization</li>
                <li>API development & integration</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact" 
          className={`py-16 border-t transition-colors ${
            isDark ? 'border-slate-700' : 'border-gray-200'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">contact</h2>
          <div className="space-y-4">
            <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              let&apos;s build something together.
            </p>
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://github.com/campbellsinvestment" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`transition-colors ${
                  isDark ? 'hover:text-gray-400' : 'hover:text-gray-600'
                }`}
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/stepocampbell" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`transition-colors ${
                  isDark ? 'hover:text-gray-400' : 'hover:text-gray-600'
                }`}
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:stepocampbell@gmail.com"
                className={`transition-colors ${
                  isDark ? 'hover:text-gray-400' : 'hover:text-gray-600'
                }`}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className={`py-8 border-t text-center transition-colors ${
          isDark ? 'border-slate-700' : 'border-gray-200'
        }`}>
          <p className={`text-xs ${
            isDark ? 'text-gray-500' : 'text-gray-500'
          }`}>
            © 2025 Stephen Campbell. built with next.js & ai assistance.
          </p>
        </footer>
      </main>
    </div>
  )
}
