import { useState } from 'react'
import { Menu, X, Mountain } from 'lucide-react'

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
        <div className="mt-6 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between py-4 px-4">
            <a href="#" className="flex items-center gap-2 text-white">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                <Mountain className="h-5 w-5 text-white" />
              </span>
              <span className="text-lg font-semibold tracking-wide">Peakso</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm border border-white/10 transition-colors">
                Launch App
              </a>
            </div>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
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
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
