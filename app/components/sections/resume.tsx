'use client'

import { motion } from 'framer-motion'
import { Download, Eye, Award, GraduationCap, Briefcase, Code } from 'lucide-react'

export default function Resume() {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      description: 'GPA: 3.72/4.0, Magna Cum Laude graduate with President\'s Scholar and Dean\'s Scholar awards',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Code,
      title: 'Technical Expertise',
      description: 'Proficient in Java, Python, JavaScript, React, Node.js, Machine Learning, and Full-Stack Development',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Briefcase,
      title: 'Professional Impact',
      description: 'Improved prescription system efficiency by 50%, reduced processing time by 40%, and enhanced user experience by 30%',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Award,
      title: 'Current Pursuit',
      description: 'Pursuing Master\'s in Computer Science at Georgia Tech with specialization in Machine Learning',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const stats = [
    { label: 'Years of Study', value: '7+', description: 'Bachelor\'s + Master\'s' },
    { label: 'GPA', value: '3.72', description: 'Out of 4.0' },
    { label: 'Major Projects', value: '3+', description: 'Featured work' },
    { label: 'Technologies', value: '20+', description: 'Languages & tools' }
  ]

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
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Resume
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my academic achievements, technical skills, and professional experience
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-gray-900 dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Key Highlights */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${highlight.color} flex items-center justify-center flex-shrink-0`}>
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Resume Download Section */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to learn more?
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                  Download my full resume to see detailed information about my education, 
                  experience, projects, and technical skills.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye className="h-5 w-5" />
                    View Resume
                  </motion.a>
                  
                  <motion.a
                    href="/resume.pdf"
                    download="Preet_Shah_Resume.pdf"
                    className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="h-5 w-5" />
                    Download PDF
                  </motion.a>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    <strong>Currently seeking:</strong> Full-time opportunities, internships, and exciting collaborations
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                      Available for remote work
                    </span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
                      Open to relocation
                    </span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">
                      Immediate availability
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Interested in discussing opportunities or have questions about my background?
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Let's connect →
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 