'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  
  const roles = [
    'Freelance Software Engineer',
    'Full-Stack Developer', 
    'Machine Learning Engineer',
    'Computer Science Graduate Student'
  ]

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true)
    
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2
      }
    }
  }

  const roleVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  }

  const floatingVariants = {
    initial: { y: 0, x: 0, rotate: 0 },
    animate: {
      y: [-15, 15, -15],
      x: [-5, 5, -5],
      rotate: [-2, 2, -2],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  }

  const socialVariants = {
    hidden: { opacity: 0, scale: 0, rotate: 45 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: 0.1 * i,
        ease: "easeOut",
        type: "spring",
        stiffness: 200
      }
    }),
    hover: {
      scale: 1.2,
      rotate: 5,
      y: -3,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 4 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl"
        />
        
        {/* Additional floating elements */}
        <motion.div
          className="absolute top-20 right-20 w-4 h-4 bg-blue-400/40 rounded-full"
          animate={{
            y: [-10, 10, -10],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-3 h-3 bg-purple-400/40 rounded-full"
          animate={{
            y: [10, -10, 10],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Enhanced name animation */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.h1 
              variants={nameVariants}
              className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent mb-4 tracking-tight"
              style={{ perspective: 1000 }}
            >
              Preet Shah
            </motion.h1>
            {/* Underline animation */}
            <motion.div
              className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"
              initial={{ width: 0 }}
              animate={{ width: isVisible ? "200px" : 0 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </motion.div>

          {/* Enhanced role animation */}
          <motion.div variants={itemVariants} className="mb-8 h-20 flex items-center justify-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 dark:text-gray-300">
              <motion.span
                key={currentRole}
                variants={roleVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-semibold"
              >
                {roles[currentRole]}
              </motion.span>
            </div>
          </motion.div>

          {/* Enhanced description */}
          <motion.div variants={itemVariants} className="mb-10">
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Computer Science graduate student at Georgia Tech specializing in Machine Learning. 
              Passionate about building innovative solutions that bridge technology and real-world impact.
            </motion.p>
          </motion.div>

          {/* Enhanced location info */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-8 text-gray-600 dark:text-gray-400">
              <motion.div 
                className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 dark:border-gray-700/50"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="h-5 w-5 text-blue-500" />
                <span className="font-medium">Atlanta, GA / Fremont, CA</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 dark:border-gray-700/50"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="h-5 w-5 text-purple-500" />
                <span className="font-medium">preetshah02@gmail.com</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-16">
            <motion.a
              href="mailto:preetshah02@gmail.com"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10">Get In Touch</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="#projects"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="relative border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>

          {/* Enhanced social links */}
          <motion.div variants={itemVariants} className="flex justify-center gap-6">
            {[
              { href: "https://github.com/preetshah02", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/preet-lnu", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:preetshah02@gmail.com", icon: Mail, label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : undefined}
                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                variants={socialVariants}
                custom={index}
                whileHover="hover"
                className="relative p-4 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <social.icon className="h-6 w-6 relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center text-gray-400 hover:text-blue-500 transition-colors duration-300 group"
          whileHover={{ y: -5 }}
        >
          <span className="text-sm font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <ChevronDown className="h-6 w-6" />
            <motion.div
              className="absolute inset-0 border-2 border-blue-400/30 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  )
} 