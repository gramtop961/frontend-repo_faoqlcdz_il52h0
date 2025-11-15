import { Sparkles, Rocket, Layers3, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Sparkles,
    title: 'Immersive 3D',
    desc: 'High-fidelity Spline scenes integrated seamlessly for jaw-dropping first impressions.',
  },
  {
    icon: Rocket,
    title: 'Performance-first',
    desc: 'Optimized interactions and smooth motion ensure fast, fluid experiences on all devices.',
  },
  {
    icon: Layers3,
    title: 'Modular Design',
    desc: 'Reusable components and scalable architecture for rapid iteration and growth.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Default',
    desc: 'Best practices baked in — accessibility, SEO, and security from day one.',
  },
]

function handleMove(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  e.currentTarget.style.setProperty('--mx', `${x}px`)
  e.currentTarget.style.setProperty('--my', `${y}px`)
}

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-[#0A0114]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="text-sm text-pink-300/80">What we deliver</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            Built for the cosmic stage
          </h2>
          <p className="mt-3 max-w-2xl text-white/70">
            We blend art and engineering to launch unforgettable digital experiences.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              onMouseMove={handleMove}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors relative overflow-hidden"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'radial-gradient(400px 200px at var(--mx,50%) var(--my,50%), rgba(168,85,247,0.18), transparent 60%)'}} />
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-white/10">
                <f.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_10%,rgba(236,72,153,0.15),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_10%,rgba(168,85,247,0.15),transparent)]" />
    </section>
  )
}
