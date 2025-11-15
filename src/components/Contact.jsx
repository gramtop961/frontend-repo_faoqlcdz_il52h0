import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#07000F] py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Let’s build something stellar
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 text-white/70"
        >
          Tell us about your vision and we’ll bring it to life.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-8 grid gap-4 sm:grid-cols-2"
        >
          <input className="rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-500/40" placeholder="Name" />
          <input className="rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-500/40" placeholder="Email" />
          <input className="sm:col-span-2 rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-500/40" placeholder="Company" />
          <textarea rows="4" className="sm:col-span-2 rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-500/40" placeholder="Project details"></textarea>
          <div className="sm:col-span-2 flex justify-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.99 }}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-purple-500/30"
            >
              Send inquiry
            </motion.button>
          </div>
        </motion.form>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_10%,rgba(236,72,153,0.15),transparent)]" />
    </section>
  )
}
