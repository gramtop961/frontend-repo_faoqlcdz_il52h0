export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#07000F] py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s build something stellar</h2>
        <p className="mt-3 text-white/70">Tell us about your vision and we’ll bring it to life.</p>

        <form className="mx-auto mt-8 grid gap-4 sm:grid-cols-2">
          <input className="rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-500/40" placeholder="Name" />
          <input className="rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-500/40" placeholder="Email" />
          <input className="sm:col-span-2 rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-500/40" placeholder="Company" />
          <textarea rows="4" className="sm:col-span-2 rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-500/40" placeholder="Project details"></textarea>
          <div className="sm:col-span-2 flex justify-center">
            <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-purple-500/30">
              Send inquiry
            </button>
          </div>
        </form>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_10%,rgba(236,72,153,0.15),transparent)]" />
    </section>
  )
}
