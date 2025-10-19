'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import dynamic from 'next/dynamic'

const Scene3D = dynamic(() => import('./3D/Scene3D'), {
  ssr: false,
  loading: () => <div className="w-full h-full animate-pulse bg-blue-500/10 rounded-lg" />,
})

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 w-full h-full opacity-50">
        <Scene3D />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-blue-400 text-lg md:text-xl font-medium">
            Hello, I'm
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient glow-text"
        >
          Gourav Gupta
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 text-gray-300"
        >
          Full Stack Developer & Designer
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Passionate about creating beautiful, functional, and user-centered digital experiences.
          Specialized in modern web technologies and mobile app development.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-blue-500 rounded-full font-semibold text-blue-400 hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com/gouravgouravgupta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/gouravgupta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:contact@gouravgupta.dev"
            className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
          >
            <Mail size={28} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="text-blue-400" size={32} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
