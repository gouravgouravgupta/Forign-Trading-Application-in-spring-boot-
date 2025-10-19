'use client'

import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-2">Gourav Gupta</h3>
            <p className="text-gray-400">Full Stack Developer & Designer</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/gouravgouravgupta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/gouravgupta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com/gouravgupta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="mailto:contact@gouravgupta.dev"
              className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-500/20 text-center text-gray-400">
          <p>© {currentYear} Gourav Gupta. All rights reserved.</p>
          <p className="text-sm mt-2">
            Built with Next.js, React, Three.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
