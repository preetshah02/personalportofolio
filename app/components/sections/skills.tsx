'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  Wrench,
  Palette,
  GitBranch,
  Brain
} from 'lucide-react'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('languages')

  const skillCategories = {
    languages: {
      title: 'Programming Languages',
      icon: Code,
      color: 'blue',
      skills: [
        { name: 'Java', level: 90, color: 'from-orange-400 to-red-500' },
        { name: 'Python', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-yellow-600' },
        { name: 'C/C++', level: 80, color: 'from-blue-500 to-blue-700' },
        { name: 'SQL', level: 75, color: 'from-green-400 to-green-600' },
        { name: 'HTML/CSS', level: 90, color: 'from-orange-400 to-pink-500' },
        { name: 'PHP', level: 65, color: 'from-purple-400 to-purple-600' },
      ]
    },
    frameworks: {
      title: 'Frameworks & Libraries',
      icon: Database,
      color: 'green',
      skills: [
        { name: 'React', level: 90, color: 'from-blue-400 to-cyan-500' },
        { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
        { name: 'Spring Boot', level: 80, color: 'from-green-500 to-green-700' },
        { name: 'Electron', level: 75, color: 'from-blue-500 to-indigo-600' },
        { name: 'WordPress', level: 70, color: 'from-blue-600 to-blue-800' },
        { name: 'JUnit', level: 80, color: 'from-red-400 to-red-600' },
      ]
    },
    tools: {
      title: 'Developer Tools',
      icon: Wrench,
      color: 'purple',
      skills: [
        { name: 'Git/GitHub', level: 95, color: 'from-gray-700 to-gray-900' },
        { name: 'VS Code', level: 95, color: 'from-blue-500 to-blue-700' },
        { name: 'MySQL', level: 85, color: 'from-orange-400 to-orange-600' },
        { name: 'Google Cloud Platform', level: 75, color: 'from-blue-400 to-green-500' },
        { name: 'Bitbucket', level: 80, color: 'from-blue-600 to-blue-800' },
        { name: 'Visual Studio', level: 80, color: 'from-purple-500 to-purple-700' },
        { name: 'Android Studio', level: 70, color: 'from-green-400 to-green-600' },
        { name: 'PyCharm', level: 85, color: 'from-green-500 to-yellow-500' },
      ]
    },
    ml: {
      title: 'Machine Learning & Data',
      icon: Brain,
      color: 'indigo',
      skills: [
        { name: 'Scikit-learn', level: 80, color: 'from-orange-400 to-orange-600' },
        { name: 'NumPy', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'Pandas', level: 85, color: 'from-purple-400 to-blue-500' },
        { name: 'Matplotlib', level: 75, color: 'from-red-400 to-pink-500' },
        { name: 'OpenFrameworks', level: 70, color: 'from-gray-500 to-gray-700' },
      ]
    },
    other: {
      title: 'Other Technologies',
      icon: Cloud,
      color: 'pink',
      skills: [
        { name: 'XAMPP', level: 80, color: 'from-orange-400 to-red-500' },
        { name: 'IntelliJ', level: 85, color: 'from-blue-500 to-purple-600' },
        { name: 'Eclipse', level: 75, color: 'from-purple-500 to-indigo-600' },
        { name: 'Notion', level: 90, color: 'from-gray-600 to-gray-800' },
        { name: 'Jira', level: 75, color: 'from-blue-500 to-blue-700' },
        { name: 'Adobe XD', level: 70, color: 'from-pink-400 to-purple-500' },
        { name: 'Maya', level: 65, color: 'from-green-400 to-teal-500' },
      ]
    }
  }

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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: 'easeOut', delay: 0.2 }
    })
  }

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
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
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive toolkit of technologies I use to bring ideas to life
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => {
              const IconComponent = category.icon
              const isActive = activeCategory === key
              
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    isActive
                      ? `bg-${category.color}-600 text-white shadow-lg shadow-${category.color}-500/25`
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  {category.title}
                </button>
              )
            })}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-6"
          >
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    variants={progressVariants}
                    custom={skill.level}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Always Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                tools, and methodologies to stay at the forefront of software development and machine learning.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 