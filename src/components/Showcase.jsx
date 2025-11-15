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
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06]"
            >
              <div className="h-28 rounded-xl" style={{ background: `linear-gradient(135deg, ${p.color}55, transparent)` }} />
              <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-white/70">{p.tag}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_0%,rgba(168,85,247,0.15),transparent)]" />
    </section>
  )
}
