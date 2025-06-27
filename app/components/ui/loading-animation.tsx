'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoadingAnimationProps {
  onComplete: () => void
}

export default function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  const sequence = [
    { text: 'Welcome', subtext: 'to my digital space', delay: 0 },
    { text: 'Preet Shah', subtext: 'Software Engineer & ML Enthusiast', delay: 1200 },
    { text: 'Portfolio', subtext: 'Crafted with passion', delay: 2400 },
  ]

  useEffect(() => {
    // Generate particles for background effect
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }))
    setParticles(newParticles)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < sequence.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        // Start exit animation after final step
        setTimeout(() => {
          setIsVisible(false)
          setTimeout(onComplete, 1000) // Wait for exit animation
        }, 1500)
      }
    }, sequence[currentStep]?.delay || 1200)

    return () => clearTimeout(timer)
  }, [currentStep, onComplete])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      filter: "blur(10px)",
      transition: { duration: 1, ease: "easeInOut" }
    }
  }

  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 60,
      scale: 0.8,
      rotateX: -90
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: {
      opacity: 0,
      y: -60,
      scale: 1.1,
      rotateX: 90,
      transition: { duration: 0.6, ease: "easeIn" }
    }
  }

  const subtextVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.4 }
    }
  }

  const logoVariants = {
    hidden: { 
      scale: 0,
      rotate: -360,
      opacity: 0
    },
    visible: { 
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { 
        duration: 1.2,
        ease: "easeOut",
        type: "spring",
        stiffness: 120,
        damping: 12
      }
    }
  }

  const particleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (delay: number) => ({
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 3,
        delay,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut"
      }
    })
  }

  const progressVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        duration: 3.5,
        ease: "easeInOut"
      }
    }
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      >
        {/* Dynamic Gradient Background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-800 dark:to-indigo-900"
          animate={{
            background: [
              "linear-gradient(135deg, #f8fafc, #dbeafe, #e0e7ff)",
              "linear-gradient(135deg, #f1f5f9, #bfdbfe, #c7d2fe)",
              "linear-gradient(135deg, #f8fafc, #dbeafe, #e0e7ff)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              variants={particleVariants}
              initial="hidden"
              animate="visible"
              custom={particle.delay}
            />
          ))}
        </div>

        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [-20, 20, -20],
            y: [-10, 10, -10]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.8, 0.4],
            x: [20, -20, 20],
            y: [10, -10, 10]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
          {/* Enhanced Logo Animation */}
          <motion.div
            variants={logoVariants}
            className="mb-12"
          >
            <div className="relative">
              <motion.div 
                className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-2xl shadow-blue-500/50"
                whileHover={{ scale: 1.05, rotate: 5 }}
                animate={{
                  boxShadow: [
                    "0 25px 50px -12px rgba(59, 130, 246, 0.5)",
                    "0 25px 50px -12px rgba(147, 51, 234, 0.5)",
                    "0 25px 50px -12px rgba(59, 130, 246, 0.5)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                PS
              </motion.div>
              {/* Floating rings around logo */}
              <motion.div
                className="absolute inset-0 border-2 border-blue-400/50 rounded-2xl"
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 border border-purple-400/30 rounded-2xl"
                animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Enhanced Text Sequence */}
          <div className="h-32 flex flex-col items-center justify-center mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-center"
              >
                {currentStep === 0 && (
                  <>
                    <motion.h1 
                      className="text-5xl md:text-7xl font-light bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent mb-2"
                      animate={{ 
                        backgroundPosition: ["0%", "100%", "0%"]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {sequence[0].text}
                    </motion.h1>
                    <motion.p 
                      variants={subtextVariants}
                      className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium"
                    >
                      {sequence[0].subtext}
                    </motion.p>
                  </>
                )}
                {currentStep === 1 && (
                  <>
                    <motion.h1 
                      className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2"
                      animate={{ 
                        backgroundSize: ["100%", "200%", "100%"],
                        backgroundPosition: ["0%", "100%", "0%"]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {sequence[1].text}
                    </motion.h1>
                    <motion.p 
                      variants={subtextVariants}
                      className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium"
                    >
                      {sequence[1].subtext}
                    </motion.p>
                  </>
                )}
                {currentStep === 2 && (
                  <>
                    <motion.h1 
                      className="text-5xl md:text-7xl font-semibold bg-gradient-to-r from-gray-700 via-blue-600 to-purple-600 dark:from-gray-200 dark:via-blue-300 dark:to-purple-400 bg-clip-text text-transparent mb-2"
                      animate={{ 
                        backgroundPosition: ["0%", "100%", "0%"]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {sequence[2].text}
                    </motion.h1>
                    <motion.p 
                      variants={subtextVariants}
                      className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium"
                    >
                      {sequence[2].subtext}
                    </motion.p>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Loading Indicator */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <motion.div
                className="w-80 h-2 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/20 shadow-lg"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 320, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-full relative overflow-hidden"
                  variants={progressVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              </motion.div>
            </div>
            
            <motion.div
              className="flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              <motion.div
                className="w-2 h-2 bg-blue-500 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="w-2 h-2 bg-purple-500 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
              />
              <motion.div
                className="w-2 h-2 bg-indigo-500 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
              />
            </motion.div>
            
            <motion.p
              className="mt-6 text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.6 }}
            >
              Crafting an exceptional experience...
            </motion.p>
          </motion.div>
        </div>

        {/* Corner Decorations */}
        <motion.div
          className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-blue-400/30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        <motion.div
          className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-purple-400/30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        />
        <motion.div
          className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-purple-400/30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        />
        <motion.div
          className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-blue-400/30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        />
      </motion.div>
    </AnimatePresence>
  )
} 