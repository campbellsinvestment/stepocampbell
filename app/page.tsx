'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Brain, Code, Database, Globe, Zap, Terminal, Cpu, Server, Cloud } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-lg font-bold">
              Stephen Campbell
            </Link>
            <div className="flex space-x-6 text-sm">
              <a href="#about" className="hover:text-gray-600 transition-colors">about</a>
              <a href="#work" className="hover:text-gray-600 transition-colors">work</a>
              <a href="#skills" className="hover:text-gray-600 transition-colors">skills</a>
              <a href="#contact" className="hover:text-gray-600 transition-colors">contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-24">
        {/* Hero Section */}
        <motion.section className="py-20" {...fadeInUp}>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Stephen Campbell
            </h1>
            <h2 className="text-lg text-gray-600 font-medium mb-4 flex items-center gap-2">
              full-stack developer | computer programmer
              <span className="text-base">🇨🇦</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              chemical engineer turned programmer solving complex problems through intelligent automation and ai-powered solutions.
            </p>
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://github.com/campbellsinvestment" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/stepocampbell" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:stepocampbell@gmail.com"
                className="hover:text-gray-600 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          id="about" 
          className="py-16 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8">about</h2>
          <div className="space-y-4 text-gray-700">
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
          className="py-16 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8">recent work</h2>
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
                          <h3 className="font-bold group-hover:text-gray-600 transition-colors">{project.title}</h3>
                          <span className="text-xs text-gray-500 uppercase tracking-wide">
                            {project.type}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <ExternalLink 
                      size={16} 
                      className="text-gray-400 group-hover:text-black transition-colors ml-4 flex-shrink-0" 
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
          className="py-16 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8">skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-sm uppercase tracking-wide">AI & Automation</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Prompt Engineering</li>
                <li>OpenAI API Integration</li>
                <li>Claude AI Development</li>
                <li>AI Workflow Design</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-sm uppercase tracking-wide">Frontend</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>React & Next.js</li>
                <li>HTML/CSS & JavaScript</li>
                <li>PHP</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-sm uppercase tracking-wide">Backend & Data</h3>
              <ul className="space-y-2 text-sm text-gray-700">
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
          className="py-16 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8">experience</h2>
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
                    <p className="text-gray-600">{job.role}</p>
                  </div>
                  <span className="text-sm text-gray-500">{job.period}</span>
                </div>
                <p className="text-sm text-gray-700">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded border"
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
          className="py-16 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8">toolkit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-4">Current Stack</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>ChatGPT, Claude & GitHub Copilot</li>
                <li>VS Code & Cursor IDE</li>
                <li>Git version control (GitHub/GitLab)</li>
                <li>Vercel, Firebase & Supabase hosting</li>
                <li>Stripe & third-party API integration</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Specializations</h3>
              <ul className="space-y-2 text-sm text-gray-700">
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
          className="py-16 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8">contact</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              let's build something together.
            </p>
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://github.com/campbellsinvestment" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/stepocampbell" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:stepocampbell@gmail.com"
                className="hover:text-gray-600 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            © 2025 Stephen Campbell. built with next.js & ai assistance.
          </p>
        </footer>
      </main>
    </div>
  )
}
