'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      image: '🛒',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/gouravgouravgupta',
      demo: '#',
    },
    {
      title: 'Task Management App',
      description: 'Real-time collaborative task management application with drag-and-drop functionality.',
      image: '📋',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebSocket'],
      github: 'https://github.com/gouravgouravgupta',
      demo: '#',
    },
    {
      title: 'AI Chat Application',
      description: 'Intelligent chatbot application powered by OpenAI API with conversation history.',
      image: '🤖',
      tags: ['React', 'Python', 'FastAPI', 'OpenAI'],
      github: 'https://github.com/gouravgouravgupta',
      demo: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time data visualization.',
      image: '📊',
      tags: ['Vue.js', 'D3.js', 'Express', 'Redis'],
      github: 'https://github.com/gouravgouravgupta',
      demo: '#',
    },
    {
      title: 'Fitness Tracking App',
      description: 'Mobile-first fitness application with workout plans, progress tracking, and nutrition guides.',
      image: '💪',
      tags: ['React Native', 'Firebase', 'Redux'],
      github: 'https://github.com/gouravgouravgupta',
      demo: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts and interactive maps.',
      image: '🌤️',
      tags: ['Next.js', 'Tailwind', 'OpenWeather API'],
      github: 'https://github.com/gouravgouravgupta',
      demo: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my skills and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl overflow-hidden backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
