'use client'

import { useState, useEffect } from 'react'
import Header from './components/layout/header'
import Hero from './components/sections/hero'
import About from './components/sections/about'
import Skills from './components/sections/skills'
import Projects from './components/sections/projects'
import Resume from './components/sections/resume'
import Contact from './components/sections/contact'
import Footer from './components/layout/footer'
import AnimatedBackground from './components/ui/animated-background'
import LoadingAnimation from './components/ui/loading-animation'

export default function Home() {
  const [showLoading, setShowLoading] = useState(true)
  const [hasVisited, setHasVisited] = useState(false)

  useEffect(() => {
    // Check if user has visited before in this session
    const visited = sessionStorage.getItem('hasVisited')
    if (visited) {
      setShowLoading(false)
      setHasVisited(true)
    }
  }, [])

  const handleLoadingComplete = () => {
    setShowLoading(false)
    setHasVisited(true)
    sessionStorage.setItem('hasVisited', 'true')
  }

  return (
    <>
      {showLoading && !hasVisited && (
        <LoadingAnimation onComplete={handleLoadingComplete} />
      )}
      
      <main className={`relative min-h-screen transition-opacity duration-500 ${showLoading ? 'opacity-0' : 'opacity-100'}`}>
        <AnimatedBackground />
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </>
  )
} 