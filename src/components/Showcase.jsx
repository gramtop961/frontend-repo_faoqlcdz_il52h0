import { motion } from 'framer-motion'

const projects = [
  { title: 'Nebula Finance', tag: 'Fintech', color: '#8B5CF6' },
  { title: 'LumenAR', tag: 'AR/VR', color: '#EC4899' },
  { title: 'Stellar Commerce', tag: 'E‑Commerce', color: '#A78BFA' },
  { title: 'Orbit AI', tag: 'AI/ML', color: '#F472B6' },
]

export default function Showcase() {
  return (
    <section id="showcase" className="relative bg-[#0A0114] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-sm text-pink-300/80">Selected work</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">A track record of polish</h2>
          </div>
          <a href="#contact" className="text-sm text-white/80 hover:text-white">Work with us →</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16, rotate: -0.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] group"
            >
              <motion.div
                className="h-28 rounded-xl"
                style={{ background: `linear-gradient(135deg, ${p.color}55, transparent)` }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              />
              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <motion.span
                  className="text-xs text-white/60"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {p.tag}
                </motion.span>
              </div>
              <motion.div
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-pink-500/60 to-transparent"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_0%,rgba(168,85,247,0.15),transparent)]" />
    </section>
  )
}
