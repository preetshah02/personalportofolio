'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Calendar, TrendingUp, Activity, Gamepad2, Globe, Car } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'CalPro Driving School Website',
      description: 'Rebuilt the complete website for CalPro Driving School using modern technologies. Features online booking, payment integration, responsive design, and improved user experience for driving instruction services.',
      fullDescription: 'A complete website rebuild for a Bay Area driving school, featuring modern design, online booking system, payment gateway integration, and responsive mobile experience. Improved user engagement and streamlined the customer journey.',
      image: '/api/placeholder/600/400',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Payment Gateway', 'Responsive Design', 'SEO'],
      category: 'full-stack',
      featured: true,
      github: null, // Private client project
      demo: 'https://www.calprodriving.com/',
      date: 'Sep 2024 - Apr 2025',
      icon: Car,
      highlights: [
        'Rebuilt complete website with modern React.js architecture',
        'Implemented online booking system for driving lessons',
        'Integrated secure payment gateway for lesson packages',
        'Designed responsive interface with Tailwind CSS',
        'Added smooth animations using Framer Motion',
        'Optimized for mobile users and improved SEO',
        'Enhanced user experience with clear call-to-actions',
        'Implemented testimonials and FAQ sections for better conversion'
      ]
    },
    {
      id: 2,
      title: 'Machine Learning Trading System',
      description: 'Built a simulated trading platform using decision trees, bagging, and Q-learning for dynamic portfolio strategies. Engineered market indicators and trained a strategy learner to outperform manual trading baselines.',
      fullDescription: 'A comprehensive trading system that applies machine learning and reinforcement learning techniques to financial markets. The system includes custom market engines, backtesting capabilities, and advanced portfolio optimization strategies.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Machine Learning', 'Q-Learning', 'Algorithmic Trading', 'NumPy', 'Pandas'],
      category: 'machine-learning',
      featured: true,
      github: '#',
      demo: '#',
      date: 'Sep 2024 - Jan 2025',
      icon: TrendingUp,
      highlights: [
        'Implemented decision trees and bagging algorithms for market prediction',
        'Developed Q-learning agent for dynamic portfolio strategies',
        'Built custom market simulation engine with backtesting capabilities',
        'Achieved superior performance compared to manual trading baselines',
        'Applied reinforcement learning for adaptive strategy optimization'
      ]
    },
    {
      id: 3,
      title: 'Prescription Management System',
      description: 'Developed a full-stack prescription management system for an eye doctor, improving prescription generation and management efficiency by 50%. Built with React, Node.js, and MySQL.',
      fullDescription: 'A comprehensive healthcare management solution that streamlines prescription workflows for medical professionals. Features automated PDF generation, efficient data management, and a user-friendly desktop application.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MySQL', 'Electron', 'PDF Generation', 'Desktop App'],
      category: 'full-stack',
      featured: true,
      github: '#',
      demo: '#',
      date: 'May 2024 - Aug 2024',
      icon: Activity,
      highlights: [
        'Improved prescription generation efficiency by 50%',
        'Built responsive React frontend with seamless UX',
        'Integrated Node.js backend with MySQL database',
        'Automated PDF prescription creation from database entries',
        'Packaged as Electron desktop application for standalone use',
        'Reduced manual paperwork by 100% and processing time by 40%'
      ]
    },
    {
      id: 4,
      title: 'UFO Lander Game',
      description: 'Developed a visually engaging object landing game using OpenFrameworks and C++, incorporating realistic physics simulation, user interaction, and dynamic visual effects.',
      fullDescription: 'An interactive game developed as a team project featuring advanced physics simulation and real-time visual effects. Focuses on performance optimization and user experience design.',
      image: '/api/placeholder/600/400',
      technologies: ['C++', 'OpenFrameworks', 'Maya', 'Visual Studio', 'Physics Simulation', 'Game Development'],
      category: 'game-dev',
      featured: false,
      github: '#',
      demo: '#',
      date: 'Mar 2023 - May 2023',
      icon: Gamepad2,
      highlights: [
        'Implemented realistic physics simulation for landing mechanics',
        'Developed efficient algorithms for particle updates and rendering',
        'Created dynamic visual effects and user interaction systems',
        'Optimized game engine for smooth, high-performance gameplay',
        'Integrated real-time parameter manipulation for customizable gameplay',
        'Collaborated in team environment using version control'
      ]
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'full-stack', label: 'Full Stack', count: projects.filter(p => p.category === 'full-stack').length },
    { id: 'machine-learning', label: 'Machine Learning', count: projects.filter(p => p.category === 'machine-learning').length },
    { id: 'game-dev', label: 'Game Development', count: projects.filter(p => p.category === 'game-dev').length },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent work spanning web development, machine learning, and interactive applications
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className={`group ${project.featured ? 'xl:col-span-2' : ''}`}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <project.icon className="h-16 w-16 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400">
                        {project.date.split(' - ')[0]}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Project Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <Calendar className="h-4 w-4" />
                        {project.date}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {project.highlights.slice(0, project.featured ? 4 : 2).map((highlight, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-center transition-colors duration-300 flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Globe className="h-4 w-4" />
                          {project.id === 1 ? 'Visit Live Site' : 'Live Demo'}
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 border border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </motion.a>
                      )}
                      {!project.github && project.id === 1 && (
                        <div className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-500 px-4 py-2 rounded-lg font-semibold text-center flex items-center justify-center gap-2">
                          <Github className="h-4 w-4" />
                          Private Client Code
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Interested in working together? Let's discuss your next project.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
              <ExternalLink className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 