'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, MapPin, Calendar, Code2 } from 'lucide-react';

// Custom SVG icons for technologies (minimalistic black and white)
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <circle cx="12" cy="12" r="2" fill="#000"/>
    <path d="M12 7c2.76 0 5.26.31 7.42.87.51.13.93.3 1.27.51.17.11.31.23.42.35.06.06.11.13.15.2.04.07.07.14.09.21.02.07.03.15.03.23 0 .08-.01.16-.03.23-.02.07-.05.14-.09.21-.04.07-.09.14-.15.2-.11.12-.25.24-.42.35-.34.21-.76.38-1.27.51-2.16.56-4.66.87-7.42.87s-5.26-.31-7.42-.87c-.51-.13-.93-.3-1.27-.51-.17-.11-.31-.23-.42-.35-.06-.06-.11-.13-.15-.2-.04-.07-.07-.14-.09-.21-.02-.07-.03-.15-.03-.23 0-.08.01-.16.03-.23.02-.07.05-.14.09-.21.04-.07.09-.14.15-.2.11-.12.25-.24.42-.35.34-.21.76-.38 1.27-.51 2.16-.56 4.66-.87 7.42-.87z" fill="none" stroke="#000" strokeWidth="1.5"/>
    <path d="M12 7c2.76 0 5.26.31 7.42.87.51.13.93.3 1.27.51.17.11.31.23.42.35.06.06.11.13.15.2.04.07.07.14.09.21.02.07.03.15.03.23 0 .08-.01.16-.03.23-.02.07-.05.14-.09.21-.04.07-.09.14-.15.2-.11.12-.25.24-.42.35-.34.21-.76.38-1.27.51-2.16.56-4.66.87-7.42.87s-5.26-.31-7.42-.87c-.51-.13-.93-.3-1.27-.51-.17-.11-.31-.23-.42-.35-.06-.06-.11-.13-.15-.2-.04-.07-.07-.14-.09-.21-.02-.07-.03-.15-.03-.23 0-.08.01-.16.03-.23.02-.07.05-.14.09-.21.04-.07.09-.14.15-.2.11-.12.25-.24.42-.35.34-.21.76-.38 1.27-.51 2.16-.56 4.66-.87 7.42-.87z" fill="none" stroke="#000" strokeWidth="1.5" transform="rotate(60 12 12)"/>
    <path d="M12 7c2.76 0 5.26.31 7.42.87.51.13.93.3 1.27.51.17.11.31.23.42.35.06.06.11.13.15.2.04.07.07.14.09.21.02.07.03.15.03.23 0 .08-.01.16-.03.23-.02.07-.05.14-.09.21-.04.07-.09.14-.15.2-.11.12-.25.24-.42.35-.34.21-.76.38-1.27.51-2.16.56-4.66.87-7.42.87s-5.26-.31-7.42-.87c-.51-.13-.93-.3-1.27-.51-.17-.11-.31-.23-.42-.35-.06-.06-.11-.13-.15-.2-.04-.07-.07-.14-.09-.21-.02-.07-.03-.15-.03-.23 0-.08.01-.16.03-.23.02-.07.05-.14.09-.21.04-.07.09-.14.15-.2.11-.12.25-.24.42-.35.34-.21.76-.38 1.27-.51 2.16-.56 4.66-.87 7.42-.87z" fill="none" stroke="#000" strokeWidth="1.5" transform="rotate(120 12 12)"/>
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <rect width="22" height="22" x="1" y="1" rx="4" fill="none" stroke="#000" strokeWidth="2"/>
    <path d="M8 16h-1v-6h-2v-1h5v1h-2v6zm4 0v-7h1v1h.1c.2-.4.5-.7.9-.9.4-.2.9-.3 1.4-.3.5 0 1 .1 1.4.3.4.2.7.5.9.9.2.4.3.9.3 1.4v5h-1v-5c0-.4-.1-.7-.3-.9-.2-.2-.5-.3-.8-.3-.3 0-.6.1-.8.3-.2.2-.3.5-.3.9v5h-1z" fill="#000"/>
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path fill="#000" d="M12 2.5c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.46.26 1.04.26 1.5 0l7.44-4.3c.48-.28.78-.8.78-1.36V8.36c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2z"/>
    <path fill="#fff" d="M18.88 8.93v8.44c0 .28-.15.54-.39.68l-6.49 3.75c-.23.13-.51.13-.74 0l-6.49-3.75c-.24-.14-.39-.4-.39-.68V8.93c0-.28.15-.54.39-.68l6.49-3.75c.23-.13.51-.13.74 0l6.49 3.75c.24.14.39.4.39.68z"/>
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path fill="#000" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
    <circle cx="10" cy="16.5" r="1" fill="#fff"/>
    <circle cx="14" cy="7.5" r="1" fill="#fff"/>
    <path d="M8 10h8v4H8z" fill="#fff"/>
  </svg>
);

const PostgreSQLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <circle cx="12" cy="12" r="10" fill="none" stroke="#000" strokeWidth="2"/>
    <rect x="8" y="6" width="8" height="3" fill="#000"/>
    <rect x="8" y="10" width="8" height="3" fill="none" stroke="#000" strokeWidth="1"/>
    <rect x="8" y="15" width="8" height="3" fill="none" stroke="#000" strokeWidth="1"/>
  </svg>
);

const AWSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path fill="#FF9900" d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.048.08.064.16.064.24 0 .096-.048.2-.16.296l-.528.352c-.08.048-.16.08-.224.08-.096 0-.192-.048-.288-.144-.112-.112-.208-.24-.288-.368-.08-.144-.16-.288-.256-.448-.64.752-1.44 1.12-2.4 1.12-.688 0-1.232-.192-1.648-.592-.416-.384-.624-.912-.624-1.568 0-.688.24-1.248.736-1.68.48-.432 1.12-.64 1.920-.64.272 0 .544.016.832.064.288.032.576.096.88.16v-.528c0-.544-.112-.928-.32-1.152-.224-.224-.608-.336-1.152-.336-.256 0-.528.032-.784.08-.272.048-.528.128-.784.208-.112.048-.192.064-.256.064-.144 0-.224-.112-.224-.32v-.496c0-.16.016-.272.064-.352.048-.08.128-.16.272-.224.256-.128.576-.24.944-.304.384-.08.784-.112 1.2-.112.912 0 1.584.208 2.016.624.416.416.624 1.056.624 1.936v2.544zm-3.296 1.216c.256 0 .528-.048.8-.144.272-.096.512-.272.704-.496.112-.144.192-.304.224-.496.032-.192.064-.416.064-.672v-.32c-.208-.048-.432-.08-.672-.112-.24-.016-.464-.032-.688-.032-.48 0-.832.096-1.072.288-.224.192-.336.464-.336.8 0 .32.08.56.256.72.192.16.432.224.72.224zm6.24.848c-.176 0-.304-.032-.368-.096-.08-.064-.144-.192-.208-.368l-2.336-7.68c-.064-.208-.096-.336-.096-.4 0-.16.08-.256.24-.256h.976c.192 0 .32.032.384.096.08.064.128.192.192.368l1.696 6.688 1.568-6.688c.048-.192.112-.304.176-.368.08-.064.208-.096.384-.096h.8c.192 0 .32.032.384.096.08.064.144.192.176.368l1.584 6.768 1.744-6.768c.064-.192.128-.304.192-.368.08-.064.208-.096.384-.096h.928c.16 0 .256.08.256.256 0 .048-.016.096-.016.16-.016.064-.048.144-.096.272l-2.4 7.68c-.064.192-.128.304-.208.368-.08.064-.208.096-.368.096h-.864c-.192 0-.32-.032-.384-.096-.08-.064-.144-.192-.176-.368l-1.552-6.464-1.536 6.464c-.048.192-.112.304-.176.368-.08.064-.208.096-.384.096h-.864zm9.312.16c-.416 0-.832-.048-1.248-.144-.416-.096-.704-.192-.88-.304-.112-.064-.192-.144-.224-.208-.032-.064-.048-.128-.048-.192v-.512c0-.208.08-.32.224-.32.064 0 .128.016.192.032.064.032.144.064.224.096.288.128.576.224.88.288.304.064.608.096.912.096.48 0 .848-.08 1.12-.256.272-.176.416-.432.416-.752 0-.224-.064-.416-.208-.576-.144-.16-.416-.304-.784-.432l-1.12-.352c-.576-.176-.992-.432-1.264-.768-.256-.336-.4-.704-.4-1.120 0-.32.064-.608.208-.864.144-.256.336-.464.576-.624.24-.176.528-.304.864-.384.336-.096.688-.128 1.056-.128.192 0 .384.016.576.032.192.032.368.064.528.112.16.048.304.096.432.16.128.048.224.112.288.16.08.064.144.128.176.192.048.064.064.144.064.224v.496c0 .208-.08.32-.224.32-.08 0-.192-.032-.336-.096-.48-.224-1.024-.336-1.632-.336-.432 0-.768.064-1.024.208-.256.144-.384.368-.384.688 0 .224.08.416.224.576.16.16.448.304.848.448l1.088.352c.56.176.96.416 1.2.736.24.32.352.688.352 1.088 0 .336-.064.624-.192.88-.128.256-.32.464-.56.624-.24.176-.544.304-.88.384-.368.096-.752.144-1.168.144z"/>
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <rect x="2" y="8" width="3" height="2" fill="#000"/>
    <rect x="6" y="8" width="3" height="2" fill="#000"/>
    <rect x="10" y="8" width="3" height="2" fill="#000"/>
    <rect x="14" y="8" width="3" height="2" fill="#000"/>
    <rect x="6" y="6" width="3" height="2" fill="#000"/>
    <rect x="10" y="6" width="3" height="2" fill="#000"/>
    <rect x="14" y="6" width="3" height="2" fill="#000"/>
    <rect x="10" y="4" width="3" height="2" fill="#000"/>
    <path d="M2 10h20v8c0 1-1 2-2 2H4c-1 0-2-1-2-2v-8z" fill="none" stroke="#000" strokeWidth="1"/>
  </svg>
);

const GraphQLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" fill="none" stroke="#000" strokeWidth="2"/>
    <circle cx="12" cy="5" r="1.5" fill="#000"/>
    <circle cx="18" cy="8.5" r="1.5" fill="#000"/>
    <circle cx="18" cy="15.5" r="1.5" fill="#000"/>
    <circle cx="12" cy="19" r="1.5" fill="#000"/>
    <circle cx="6" cy="15.5" r="1.5" fill="#000"/>
    <circle cx="6" cy="8.5" r="1.5" fill="#000"/>
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path fill="#000" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.13-1.11-1.44-1.11-1.44-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
  </svg>
);

const HTMLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path fill="#000" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z"/>
    <path fill="#fff" d="M5.41 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531L8.299 7.133h10.059l.23-2.622L5.412 4.41z"/>
  </svg>
);

const CSSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path fill="#000" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0z"/>
    <path fill="#fff" d="M18.59 4.414L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
  </svg>
);

const JavaScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <rect width="24" height="24" fill="#000"/>
    <text x="12" y="16" fontSize="14" fill="#fff" textAnchor="middle" fontWeight="bold">JS</text>
  </svg>
);

const PHPIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <ellipse cx="12" cy="12" rx="10" ry="6" fill="none" stroke="#000" strokeWidth="2"/>
    <text x="12" y="16" fontSize="10" fill="#000" textAnchor="middle" fontWeight="bold">PHP</text>
  </svg>
);

const AIIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <circle cx="12" cy="12" r="10" fill="none" stroke="#000" strokeWidth="2"/>
    <path d="M8 8h8v8H8z" fill="none" stroke="#000" strokeWidth="1"/>
    <circle cx="10" cy="10" r="1" fill="#000"/>
    <circle cx="14" cy="14" r="1" fill="#000"/>
    <path d="M10 14h4M14 10l-4 4" stroke="#000" strokeWidth="1"/>
  </svg>
);

const ClaudeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <circle cx="12" cy="12" r="10" fill="none" stroke="#000" strokeWidth="2"/>
    <rect x="8" y="8" width="8" height="8" fill="none" stroke="#000" strokeWidth="1"/>
    <text x="12" y="16" fontSize="8" fill="#000" textAnchor="middle" fontWeight="bold">AI</text>
  </svg>
);

export default function Home() {
  const skills = [
    { name: 'AI Development', icon: AIIcon },
    { name: 'React/Next.js', icon: ReactIcon },
    { name: 'TypeScript', icon: TypeScriptIcon },
    { name: 'JavaScript', icon: JavaScriptIcon },
    { name: 'Node.js', icon: NodeIcon },
    { name: 'Python', icon: PythonIcon },
    { name: 'HTML5', icon: HTMLIcon },
    { name: 'CSS3', icon: CSSIcon },
    { name: 'PHP', icon: PHPIcon },
    { name: 'PostgreSQL', icon: PostgreSQLIcon },
    { name: 'Git', icon: GitIcon },
    { name: 'Claude AI', icon: ClaudeIcon },
  ];

  const projects = [
    {
      title: 'AI-Powered SaaS Platform',
      description: 'Complete application built entirely with AI assistance - from concept to deployment using Claude and ChatGPT API.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Claude AI', 'ChatGPT API'],
      github: 'https://github.com/stepocampbell',
      live: '#'
    },
    {
      title: 'Cursor-Built Web Application',
      description: 'Full-stack application developed using Cursor IDE with AI pair programming and prompt engineering.',
      tech: ['React', 'Node.js', 'JavaScript', 'Cursor IDE', 'AI Prompts'],
      github: 'https://github.com/stepocampbell',
      live: '#'
    },
    {
      title: 'AI-Generated Portfolio Sites',
      description: 'Multiple portfolio websites created through AI prompting, showcasing various design patterns and technologies.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'AI Assistance'],
      github: 'https://github.com/stepocampbell',
      live: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-6xl md:text-8xl font-bold text-gray-900 mb-4"
              >
                Stephen Campbell
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="w-24 h-1 bg-black mx-auto"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-700">
              AI-Powered Full Stack Developer
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              I build complete applications from concept to deployment using AI tools like Claude, ChatGPT API, 
              and Cursor. Expert in prompt engineering and creating full-stack solutions entirely through AI assistance.
            </p>
            <div className="flex justify-center space-x-4">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Get in touch
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="border border-black text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                View work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light mb-8 text-gray-900">About Me</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              I'm an AI-powered Full Stack Developer who leverages cutting-edge AI tools to build complete applications 
              from start to finish. Expert in prompt engineering with Claude, ChatGPT API, and development tools like 
              Cursor and VS Code. I specialize in turning ideas into fully functional web applications using AI assistance 
              combined with traditional development skills in React, TypeScript, Node.js, and more.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-black rounded mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI-Powered Development</h4>
                    <p className="text-gray-600">Building complete applications using Claude, ChatGPT API, and Cursor with expert prompt engineering</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-black rounded mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Frontend Development</h4>
                    <p className="text-gray-600">Creating responsive, interactive user interfaces with React, Next.js, and modern JavaScript</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-black rounded mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Backend Development</h4>
                    <p className="text-gray-600">Building scalable APIs and services with Node.js, Python, and PHP</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-semibold text-gray-900">Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="mb-3 transform group-hover:scale-110 transition-transform">
                      <skill.icon />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light mb-8 text-gray-900">Featured Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing different aspects 
              of full-stack development and problem-solving.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {projects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-black transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">{projects[2].title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{projects[2].description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {projects[2].tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={projects[2].github}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </a>
              <a
                href={projects[2].live}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light mb-8 text-gray-900">Let's Work Together</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            
            <div className="flex justify-center space-x-6 mb-12">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/stepocampbell"
                className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
              >
                <Github className="w-6 h-6" />
                <span className="hidden sm:inline">GitHub</span>
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/stepocampbell"
                className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="hidden sm:inline">LinkedIn</span>
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:stephen@stepocampbell.com"
                className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span className="hidden sm:inline">Email</span>
              </motion.a>
            </div>
            
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:stephen@stepocampbell.com"
              className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors text-lg"
            >
              <Mail className="w-5 h-5" />
              <span>Start a conversation</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">&copy; 2025 Stephen Campbell. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
