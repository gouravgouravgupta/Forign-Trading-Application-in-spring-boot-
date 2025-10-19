'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Palette, Rocket, Users } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <Code2 size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: <Palette size={32} />,
      title: 'Modern Design',
      description: 'Creating beautiful, responsive interfaces with attention to detail.',
    },
    {
      icon: <Rocket size={32} />,
      title: 'Fast Performance',
      description: 'Optimizing applications for speed and seamless user experience.',
    },
    {
      icon: <Users size={32} />,
      title: 'Team Player',
      description: 'Collaborating effectively with cross-functional teams.',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-sm border border-blue-500/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-xl text-gray-300">Gourav Gupta</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              Full Stack Developer & Creative Designer
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm a passionate developer with expertise in building modern web applications and mobile apps. 
              With a strong foundation in both frontend and backend technologies, I create seamless digital 
              experiences that users love.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              My journey in software development has equipped me with skills in React, Next.js, Node.js, 
              and various modern frameworks. I'm constantly learning and adapting to new technologies to 
              deliver cutting-edge solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400">
                Web Development
              </span>
              <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400">
                Mobile Apps
              </span>
              <span className="px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full text-teal-400">
                UI/UX Design
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
