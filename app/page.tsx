'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import Link from 'next/link'

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
              stephen campbell
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
              stephen campbell
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              ai-powered full-stack developer specializing in prompt engineering, 
              modern web technologies, and intelligent automation solutions.
            </p>
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://github.com/stepocampbell" 
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
                href="mailto:hello@stepocampbell.com"
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
              passionate about ai integration, prompt engineering, and building 
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
                type: "SaaS Platform"
              },
              {
                title: "CheckoutKeys",
                description: "Automated license key management system for digital products. Integrates with Stripe for instant key generation and delivery via customizable emails.",
                link: "https://checkoutkeys.com",
                type: "B2B SaaS"
              },
              {
                title: "ExcelBot",
                description: "AI-powered Excel assistant that generates formulas and VBA code from plain language descriptions. Helps users create complex spreadsheet solutions instantly.",
                link: "https://excelbot.io",
                type: "AI Tool"
              },
              {
                title: "Rent Fair Ontario",
                description: "Rental market comparison tool using official Statistics Canada data. Helps Ontario residents compare their rent to CMHC market averages.",
                link: "https://rentfairontario.vercel.app",
                type: "Data Platform"
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
                <li>LangChain</li>
                <li>AI Workflow Design</li>
                <li>Machine Learning</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-sm uppercase tracking-wide">Frontend</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>Responsive Design</li>
                <li>Progressive Web Apps</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-sm uppercase tracking-wide">Backend & Data</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Node.js & Python</li>
                <li>PostgreSQL & Supabase</li>
                <li>API Development</li>
                <li>Cloud Deployment</li>
                <li>Docker & DevOps</li>
                <li>Data Analysis</li>
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
                company: "AI Startup",
                role: "Lead Full Stack Developer",
                period: "2024 - Present",
                description: "Leading development of AI-powered productivity tools"
              },
              {
                company: "Tech Consultancy",
                role: "Senior Developer",
                period: "2023 - 2024",
                description: "Building custom web applications and AI integrations"
              },
              {
                company: "Freelance",
                role: "Full Stack Developer",
                period: "2022 - 2023",
                description: "Independent consulting for startups and small businesses"
              }
            ].map((job, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">{job.company}</h3>
                    <p className="text-gray-600">{job.role}</p>
                  </div>
                  <span className="text-sm text-gray-500">{job.period}</span>
                </div>
                <p className="text-sm text-gray-700">{job.description}</p>
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
          <h2 className="text-2xl font-bold mb-8">ai toolkit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-4">Current Stack</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>GPT-4 & Claude for development</li>
                <li>Custom prompt libraries</li>
                <li>Automated code review workflows</li>
                <li>AI-assisted testing & debugging</li>
                <li>Intelligent documentation generation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Specializations</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Prompt optimization & testing</li>
                <li>AI workflow architecture</li>
                <li>Custom GPT development</li>
                <li>Intelligent automation design</li>
                <li>AI-human collaboration patterns</li>
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
              interested in ai-powered development, prompt engineering, or building 
              something innovative together?
            </p>
            <div className="flex space-x-6">
              <a 
                href="mailto:hello@stepocampbell.com"
                className="text-sm hover:text-gray-600 transition-colors"
              >
                hello@stepocampbell.com
              </a>
              <a 
                href="https://github.com/stepocampbell" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-600 transition-colors"
              >
                github
              </a>
              <a 
                href="https://linkedin.com/in/stepocampbell" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-600 transition-colors"
              >
                linkedin
              </a>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            © 2025 stephen campbell. built with next.js & ai assistance.
          </p>
        </footer>
      </main>
    </div>
  )
}
