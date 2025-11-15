import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-6 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 border border-white/10 rounded-2xl shadow-lg"
        >
          <div className="flex items-center justify-between py-4 px-4">
            <a href="#" className="flex items-center gap-3 text-white group">
              <motion.span
                initial={{ rotate: 0, scale: 0.9, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-white/10 overflow-hidden"
              >
                <motion.img
                  src="https://peakso.in/favicon.png"
                  alt="Peakso Logo"
                  className="h-6 w-6"
                  whileHover={{ rotate: 8, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                />
              </motion.span>
              <span className="text-lg font-semibold tracking-wide group-hover:text-white/90 transition-colors">Peakso</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm border border-white/10"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Launch App
              </motion.a>
            </div>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden border-t border-white/10 px-4 pb-4"
              >
                <nav className="flex flex-col gap-2 pt-3">
                  {navItems.map((item) => (
                    <a key={item.label} href={item.href} className="text-sm text-white/80 hover:text-white py-2">
                      {item.label}
                    </a>
                  ))}
                  <a href="#" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm border border-white/10 transition-colors">
                    Launch App
                  </a>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </header>
  )
}
