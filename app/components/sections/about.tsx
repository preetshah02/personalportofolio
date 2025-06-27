'use client'

import { motion } from 'framer-motion'
import { BookOpen, Award, Briefcase, Calendar, GraduationCap, Trophy } from 'lucide-react'

export default function About() {
  const stats = [
    { label: 'GPA', value: '3.72/4.0', icon: Trophy },
    { label: 'Years Experience', value: '1+', icon: Briefcase },
    { label: 'Projects Built', value: '10+', icon: BookOpen },
    { label: 'Awards Received', value: '3', icon: Award },
  ]

  const timeline = [
    {
      type: 'education',
      title: 'Master of Science in Computer Science',
      organization: 'Georgia Institute of Technology',
      location: 'Atlanta, GA',
      period: 'Aug 2024 - Present',
      description: 'Specialization in Machine Learning (OMSCS Program)',
      icon: GraduationCap,
    },
    {
      type: 'work',
      title: 'Freelance Software Engineer',
      organization: 'Calpro Driving',
      location: 'Fremont, CA',
      period: 'Sep 2024 - Apr 2025',
      description: 'Rebuilt company website using React.js, Tailwind CSS, and Framer Motion, replacing WordPress. Implemented dynamic service listings, payment gateway, and booking system.',
      icon: Briefcase,
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      organization: 'San Jose State University',
      location: 'San Jose, CA',
      period: 'Aug 2020 - Dec 2023',
      description: 'GPA: 3.72/4.00 • Awards: Magna Cum Laude, President\'s Scholar, Dean\'s Scholar',
      icon: GraduationCap,
    },
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
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
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A passionate computer science graduate student with a strong foundation in software development 
              and a growing expertise in machine learning.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Story */}
            <motion.div variants={itemVariants}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  My Journey
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    I'm currently pursuing my Master's in Computer Science at Georgia Institute of Technology, 
                    specializing in Machine Learning. My academic journey began at San Jose State University, 
                    where I graduated Magna Cum Laude with honors including President's Scholar and Dean's Scholar recognition.
                  </p>
                  <p>
                    As a freelance software engineer, I've had the opportunity to work on diverse projects, 
                    from rebuilding entire company websites to developing full-stack applications. I'm passionate 
                    about creating innovative solutions that bridge the gap between cutting-edge technology and 
                    real-world impact.
                  </p>
                  <p>
                    My technical interests span across full-stack development, machine learning, and algorithmic trading. 
                    I enjoy tackling complex problems and turning ideas into functional, user-friendly applications.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Education & Experience
              </h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          item.type === 'education' 
                            ? 'bg-blue-100 dark:bg-blue-900' 
                            : 'bg-green-100 dark:bg-green-900'
                        }`}>
                          <item.icon className={`h-6 w-6 ${
                            item.type === 'education' 
                              ? 'text-blue-600 dark:text-blue-400' 
                              : 'text-green-600 dark:text-green-400'
                          }`} />
                        </div>
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {item.title}
                            </h4>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <Calendar className="h-4 w-4 mr-1" />
                              {item.period}
                            </div>
                          </div>
                          <div className="mb-2">
                            <span className="font-medium text-blue-600 dark:text-blue-400">
                              {item.organization}
                            </span>
                            <span className="text-gray-500 dark:text-gray-400 mx-2">•</span>
                            <span className="text-gray-500 dark:text-gray-400">
                              {item.location}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="absolute left-6 top-12 w-px h-6 bg-gray-200 dark:bg-gray-700" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 