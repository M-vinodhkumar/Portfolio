import React from 'react'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Skills from './components/Skills'
const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Navbar />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
        
      </main>
    </div>
  )
}

export default App
