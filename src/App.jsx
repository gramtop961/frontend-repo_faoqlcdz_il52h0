import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#07000F]">
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0016] via-[#0A0114] to-[#07000F]" />
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 20% 10%, rgba(147,51,234,0.15), transparent 40%), radial-gradient(circle at 80% 0%, rgba(236,72,153,0.12), transparent 40%)' }} />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-[#07000F]">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-white/50">
          © {new Date().getFullYear()} Peakso — All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
